# Jungian Personality Questionnaire - Implementation Notes

## Overview

A complete React-based Jungian personality assessment application built as a Salesforce UI Bundle. The app provides a questionnaire interface, calculates results based on Jung's cognitive functions, and generates an AI prompt for personalized analysis.

## Current Status: ✅ UI Complete, ⏳ Data Layer Pending

### Completed ✅

1. **UI Bundle Scaffolding**
   - Generated with `sf template generate ui-bundle`
   - Configured routing for SPA behavior
   - Updated metadata and branding

2. **Page Components**
   - **Home Page** (`/`): Introduction page with rich-text support for questionnaire intro
   - **Questionnaire Page** (`/questionnaire`): Multi-page questionnaire with:
     - Progress tracking
     - Forward/backward navigation
     - Configurable questions per page
     - Radio button answer selection
     - Mobile-responsive design
   - **Results Page** (`/results`): Displays:
     - Cognitive function stack (Dominant, Auxiliary, Tertiary, Inferior)
     - Attitude scores (Extroverted vs Introverted)
     - Function scores (Intuition, Sensing, Thinking, Feeling)
     - Download functionality (JSON export)
     - AI prompt generation for personalized analysis

3. **UI Components**
   - Created `radio-group` component for answer selection
   - Leveraged shadcn/ui components (Button, Card, Badge, etc.)
   - Professional psychology assessment aesthetic with calming gradients

4. **Session Management**
   - Browser-based UUID generation for anonymous sessions
   - SessionStorage for session persistence

### Pending - Data Layer Integration ⏳

The following items are marked with `TODO` comments and need to be completed after:

1. GraphQL schema is fetched from the org
2. Custom objects are deployed
3. Guest user permissions are configured

#### GraphQL Queries Needed

**Home Page** (`src/pages/Home.tsx`):

```graphql
query GetActiveQuestionnaire {
  uiapi {
    query {
      Questionnaire__c(where: { Is_Active__c: { eq: true } }, first: 1) {
        edges {
          node {
            Id
            Name @optional {
              value
            }
            Introduction_Text__c @optional {
              value
            }
            Questions_Per_Page__c @optional {
              value
            }
          }
        }
      }
    }
  }
}
```

**Questionnaire Page** (`src/pages/Questionnaire.tsx`):

```graphql
query GetQuestionnaireWithQuestions($questionnaireId: ID!) {
  uiapi {
    query {
      Questionnaire__c(where: { Id: { eq: $questionnaireId } }, first: 1) {
        edges {
          node {
            Id
            Name @optional {
              value
            }
            Questions_Per_Page__c @optional {
              value
            }
            Questions__r @optional(first: 100) {
              edges {
                node {
                  Id
                  Question_Text__c @optional {
                    value
                  }
                  Order__c @optional {
                    value
                  }
                  Answer_Options__r @optional(first: 10) {
                    edges {
                      node {
                        Id
                        Answer_Text__c @optional {
                          value
                        }
                        Classification__c @optional {
                          value
                        }
                        Order__c @optional {
                          value
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

#### GraphQL Mutations Needed

**Create Response** (start questionnaire):

```graphql
mutation CreateResponse($input: Response__cCreateInput!) {
  uiapi(input: { allOrNone: true }) {
    Response__cCreate(input: $input) {
      Record {
        Id
        Name {
          value
        }
      }
    }
  }
}
```

**Create Response Answers** (save answers):

```graphql
mutation CreateResponseAnswers($answers: [Response_Answer__cCreateInput!]!) {
  uiapi(input: { allOrNone: false }) {
    # Multiple Response_Answer__cCreate mutations
    # Use mutation chaining if needed
  }
}
```

**Create Result** (calculate and save results):

```graphql
mutation CreateResult($input: Result__cCreateInput!) {
  uiapi(input: { allOrNone: true }) {
    Result__cCreate(input: $input) {
      Record {
        Id
        Dominant_Function__c {
          value
        }
        Auxiliary_Function__c {
          value
        }
        Tertiary_Function__c {
          value
        }
        Inferior_Function__c {
          value
        }
        Extroverted_Score__c {
          value
        }
        Introverted_Score__c {
          value
        }
        Thinking_Score__c {
          value
        }
        Feeling_Score__c {
          value
        }
        Intuition_Score__c {
          value
        }
        Sensing_Score__c {
          value
        }
      }
    }
  }
}
```

**Results Page** - Fetch Results:

```graphql
query GetResults($responseId: ID!) {
  uiapi {
    query {
      Result__c(where: { Response__c: { eq: $responseId } }, first: 1) {
        edges {
          node {
            Id
            Dominant_Function__c @optional {
              value
            }
            Auxiliary_Function__c @optional {
              value
            }
            Tertiary_Function__c @optional {
              value
            }
            Inferior_Function__c @optional {
              value
            }
            Extroverted_Score__c @optional {
              value
            }
            Introverted_Score__c @optional {
              value
            }
            Thinking_Score__c @optional {
              value
            }
            Feeling_Score__c @optional {
              value
            }
            Intuition_Score__c @optional {
              value
            }
            Sensing_Score__c @optional {
              value
            }
          }
        }
      }
    }
  }
}
```

#### Results Calculation Logic

The results calculation should:

1. Count answers by classification (Extroverted, Introverted, Thinking, Feeling, Intuition, Sensing)
2. Calculate attitude: Compare Extroverted vs Introverted counts
3. Rank cognitive functions from highest to lowest:
   - Compare Intuition vs Sensing
   - Compare Thinking vs Feeling
4. Assign functions to stack positions:
   - Dominant (1st)
   - Auxiliary (2nd)
   - Tertiary (3rd)
   - Inferior (4th)

Example algorithm:

```typescript
function calculateResults(answers: Answer[]): ResultData {
  const scores = {
    extroverted: 0,
    introverted: 0,
    thinking: 0,
    feeling: 0,
    intuition: 0,
    sensing: 0
  };

  // Count classifications
  answers.forEach((answer) => {
    const classification = answer.classification.toLowerCase();
    scores[classification]++;
  });

  // Calculate percentages
  const total = answers.length;
  const percentages = Object.entries(scores).reduce((acc, [key, value]) => {
    acc[key] = Math.round((value / total) * 100);
    return acc;
  }, {});

  // Determine attitude
  const attitude =
    scores.extroverted > scores.introverted ? "Extroverted" : "Introverted";

  // Rank cognitive functions
  const functions = [
    {
      name: "Intuition",
      score: scores.intuition,
      prefix: attitude === "Introverted" ? "Introverted" : "Extroverted"
    },
    {
      name: "Sensing",
      score: scores.sensing,
      prefix: attitude === "Introverted" ? "Extroverted" : "Introverted"
    },
    {
      name: "Thinking",
      score: scores.thinking,
      prefix: attitude === "Introverted" ? "Introverted" : "Extroverted"
    },
    {
      name: "Feeling",
      score: scores.feeling,
      prefix: attitude === "Introverted" ? "Extroverted" : "Introverted"
    }
  ].sort((a, b) => b.score - a.score);

  return {
    dominantFunction: `${functions[0].prefix} ${functions[0].name}`,
    auxiliaryFunction: `${functions[1].prefix} ${functions[1].name}`,
    tertiaryFunction: `${functions[2].prefix} ${functions[2].name}`,
    inferiorFunction: `${functions[3].prefix} ${functions[3].name}`,
    scores: percentages,
    attitude
  };
}
```

### Deployment Steps

1. **Deploy Custom Objects and Metadata**

   ```bash
   sf project deploy start
   ```

2. **Configure Guest User Permissions**
   - Grant Read access on: Questionnaire**c, Question**c, Answer_Option**c, Result**c
   - Grant Create access on: Response**c, Response_Answer**c, Result\_\_c
   - Assign permission set to guest user profile

3. **Fetch GraphQL Schema**

   ```bash
   cd force-app/main/default/uiBundles/JungianPersonalityTest
   npm run graphql:schema
   ```

4. **Implement Data Layer**
   - Create GraphQL query files in `src/queries/`
   - Update TODOs in page components
   - Run `npm run graphql:codegen` to generate types

5. **Test & Validate**
   - Create test questionnaire data
   - Test anonymous user access
   - Verify results calculation
   - Test download functionality

6. **Final Build & Deploy**
   ```bash
   npm run build
   sf project deploy start
   ```

## Architecture Notes

- **Authentication**: App uses anonymous sessions (UUID-based) stored in sessionStorage
- **Data Model**: Leverages existing custom objects without modifications
- **Styling**: Tailwind CSS with professional psychology assessment theme
- **Mobile**: Fully responsive with breakpoint-specific layouts
- **Browser Support**: Modern browsers supporting ES2020+

## Next Steps

1. Wait for schema fetch to complete
2. Verify custom objects are deployed to org
3. Implement GraphQL queries/mutations
4. Add results calculation logic
5. Test end-to-end flow
6. Deploy to production
