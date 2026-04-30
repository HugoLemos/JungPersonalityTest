# Jungian Personality % - Completion Guide

## ✅ What's Been Completed

### 1. UI Bundle Infrastructure

- ✅ Scaffolded with `sf template generate ui-bundle --template reactbasic`
- ✅ Configured routing for SPA (/questionnaire, /results)
- ✅ Updated metadata and branding
- ✅ All dependencies installed
- ✅ Build successful (lint passed with warnings only)

### 2. Complete UI Implementation

- ✅ **Home Page** - Introduction with rich-text display, session management
- ✅ **Questionnaire Page** - Multi-page navigation, progress tracking, answer selection
- ✅ **Results Page** - Function stack display, download, AI prompt generation
- ✅ **Radio Group Component** - Custom shadcn/ui component
- ✅ Mobile-responsive design with professional aesthetics

### 3. GraphQL Queries & Mutations Created

All query files created in `src/queries/`:

- ✅ `getActiveQuestionnaire.graphql`
- ✅ `getQuestionnaireWithQuestions.graphql`
- ✅ `createResponse.graphql`
- ✅ `createResponseAnswer.graphql`
- ✅ `createResult.graphql`
- ✅ `getResult.graphql`

### 4. Data Integration Started

- ✅ Home page updated to fetch real questionnaire data
- ✅ Error handling and loading states implemented
- ⏳ Questionnaire page needs data integration
- ⏳ Results page needs data integration

## 🔧 What Needs To Be Completed

### Step 1: Update Questionnaire Page (`src/pages/Questionnaire.tsx`)

Replace the TODO section (lines 30-70) with:

```typescript
import { createDataSDK, gql } from "@salesforce/sdk-data";

const GET_QUESTIONNAIRE_WITH_QUESTIONS = gql`
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
              Questions__r
                @optional(first: 100, orderBy: { Order__c: { order: ASC } }) {
                edges {
                  node {
                    Id
                    Question_Text__c @optional {
                      value
                    }
                    Order__c @optional {
                      value
                    }
                    Answer_Options__r
                      @optional(
                        first: 10
                        orderBy: { Order__c: { order: ASC } }
                      ) {
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
`;

const CREATE_RESPONSE = gql`
  mutation CreateResponse($questionnaireId: ID!, $sessionId: String!) {
    uiapi(input: { allOrNone: true }) {
      Response__cCreate(
        input: {
          Response__c: {
            Questionnaire__c: $questionnaireId
            Session_Id__c: $sessionId
            Started_Date__c: { literal: NOW }
          }
        }
      ) {
        Record {
          Id
          Name {
            value
          }
        }
      }
    }
  }
`;

const CREATE_RESPONSE_ANSWER = gql`
  mutation CreateResponseAnswer(
    $responseId: ID!
    $questionId: ID!
    $answerOptionId: ID!
  ) {
    uiapi(input: { allOrNone: true }) {
      Response_Answer__cCreate(
        input: {
          Response_Answer__c: {
            Response__c: $responseId
            Question__c: $questionId
            Answer_Option__c: $answerOptionId
            Answered_Date__c: { literal: NOW }
          }
        }
      ) {
        Record {
          Id
        }
      }
    }
  }
`;

// In useEffect:
useEffect(() => {
  async function fetchData() {
    try {
      const questionnaireId = sessionStorage.getItem("questionnaireId");
      if (!questionnaireId) {
        navigate("/");
        return;
      }

      const sdk = await createDataSDK();

      // Create Response record
      const responseResult = await sdk.graphql?.(CREATE_RESPONSE, {
        questionnaireId,
        sessionId: sid
      });

      const responseId =
        responseResult?.data?.uiapi?.Response__cCreate?.Record?.Id;
      if (responseId) {
        sessionStorage.setItem("responseId", responseId);
      }

      // Fetch questionnaire with questions
      const response = await sdk.graphql?.(GET_QUESTIONNAIRE_WITH_QUESTIONS, {
        questionnaireId
      });

      const questionnaireNode =
        response?.data?.uiapi?.query?.Questionnaire__c?.edges?.[0]?.node;

      if (questionnaireNode) {
        const questionsPerPage =
          questionnaireNode.Questions_Per_Page__c?.value || 1;
        setQuestionsPerPage(questionsPerPage);

        const questionsList =
          questionnaireNode.Questions__r?.edges?.map((edge) => ({
            id: edge.node.Id,
            order: edge.node.Order__c?.value || 0,
            questionText: edge.node.Question_Text__c?.value || "",
            answers:
              edge.node.Answer_Options__r?.edges?.map((answerEdge) => ({
                id: answerEdge.node.Id,
                answerText: answerEdge.node.Answer_Text__c?.value || "",
                classification: answerEdge.node.Classification__c?.value || "",
                order: answerEdge.node.Order__c?.value || 0
              })) || []
          })) || [];

        setQuestions(questionsList);
      }

      setLoading(false);
    } catch (err) {
      console.error("Error loading questionnaire:", err);
      setLoading(false);
    }
  }

  fetchData();
}, [navigate, sid]);

// In handleAnswerChange:
const handleAnswerChange = async (questionId: string, answerId: string) => {
  setResponses((prev) => ({ ...prev, [questionId]: answerId }));

  try {
    const responseId = sessionStorage.getItem("responseId");
    if (!responseId) return;

    const sdk = await createDataSDK();
    await sdk.graphql?.(CREATE_RESPONSE_ANSWER, {
      responseId,
      questionId,
      answerOptionId: answerId
    });
  } catch (err) {
    console.error("Error saving answer:", err);
  }
};
```

### Step 2: Add Results Calculation Logic

Create `src/utils/calculateResults.ts`:

```typescript
export interface ResultData {
  dominantFunction: string;
  auxiliaryFunction: string;
  tertiaryFunction: string;
  inferiorFunction: string;
  scores: {
    extroverted: number;
    introverted: number;
    thinking: number;
    feeling: number;
    intuition: number;
    sensing: number;
  };
  attitude: string;
}

export function calculateResults(
  answers: Array<{ classification: string }>
): ResultData {
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
    const classification = answer.classification
      .toLowerCase()
      .replace(/\s+/g, "");
    if (classification in scores) {
      scores[classification as keyof typeof scores]++;
    }
  });

  // Calculate percentages
  const total = answers.length;
  const percentages = Object.entries(scores).reduce(
    (acc, [key, value]) => {
      acc[key as keyof typeof scores] = Math.round((value / total) * 100);
      return acc;
    },
    {} as typeof scores
  );

  // Determine attitude
  const attitude =
    scores.extroverted > scores.introverted ? "Extroverted" : "Introverted";
  const oppositeAttitude =
    attitude === "Extroverted" ? "Introverted" : "Extroverted";

  // Rank cognitive functions
  const functions = [
    { name: "Intuition", score: scores.intuition },
    { name: "Sensing", score: scores.sensing },
    { name: "Thinking", score: scores.thinking },
    { name: "Feeling", score: scores.feeling }
  ].sort((a, b) => b.score - a.score);

  // Assign prefixes based on attitude (alternate between primary and opposite)
  const rankedFunctions = functions.map((func, index) => {
    const prefix = index % 2 === 0 ? attitude : oppositeAttitude;
    return `${prefix} ${func.name}`;
  });

  return {
    dominantFunction: rankedFunctions[0],
    auxiliaryFunction: rankedFunctions[1],
    tertiaryFunction: rankedFunctions[2],
    inferiorFunction: rankedFunctions[3],
    scores: percentages,
    attitude
  };
}
```

### Step 3: Update Questionnaire handleSubmit

```typescript
const handleSubmit = async () => {
  try {
    const responseId = sessionStorage.getItem("responseId");
    if (!responseId) return;

    // Get all answers with their classifications
    const answeredQuestions = questions.filter((q) => responses[q.id]);
    const answersWithClassifications = answeredQuestions.map((q) => {
      const selectedAnswerId = responses[q.id];
      const selectedAnswer = q.answers.find((a) => a.id === selectedAnswerId);
      return {
        classification: selectedAnswer?.classification || ""
      };
    });

    // Calculate results
    const results = calculateResults(answersWithClassifications);

    // Save to Salesforce
    const sdk = await createDataSDK();
    await sdk.graphql?.(CREATE_RESULT, {
      responseId,
      dominantFunction: results.dominantFunction,
      auxiliaryFunction: results.auxiliaryFunction,
      tertiaryFunction: results.tertiaryFunction,
      inferiorFunction: results.inferiorFunction,
      extrovertedscore: results.scores.extroverted,
      introvertedscore: results.scores.introverted,
      thinkingScore: results.scores.thinking,
      feelingScore: results.scores.feeling,
      intuitionScore: results.scores.intuition,
      sensingScore: results.scores.sensing
    });

    navigate("/results", { state: { sessionId } });
  } catch (err) {
    console.error("Error submitting results:", err);
  }
};
```

### Step 4: Update Results Page to Fetch Data

Replace mock data section in Results page with real data fetch using the `GET_RESULT` query.

### Step 5: Build and Deploy

```bash
cd force-app/main/default/uiBundles/JungianPersonalityTest
npm run build
cd /home/codebuilder/dx-project
sf project deploy start
```

### Step 6: Configure Guest User Permissions

In Salesforce Setup:

1. Go to Digital Experiences > All Sites
2. Select jungianpersonalitytestapp
3. Go to Workspaces > Administration > Preferences
4. Configure Guest User Profile with:
   - Read: Questionnaire**c, Question**c, Answer_Option**c, Result**c
   - Create: Response**c, Response_Answer**c, Result\_\_c

## 📝 Testing Checklist

- [ ] Create test questionnaire with Is_Active\_\_c = true
- [ ] Add questions with Order\_\_c values
- [ ] Add answer options with Classification\_\_c values
- [ ] Test anonymous user can access home page
- [ ] Test questionnaire loads questions
- [ ] Test answers are saved
- [ ] Test results are calculated correctly
- [ ] Test download functionality
- [ ] Test AI prompt generation
- [ ] Test on mobile device

## 🎯 Key Files Modified

- `src/pages/Home.tsx` - ✅ Completed with real data
- `src/pages/Questionnaire.tsx` - ⏳ Needs data integration
- `src/pages/Results.tsx` - ⏳ Needs data integration
- `src/utils/calculateResults.ts` - ⏳ Needs to be created
- All GraphQL query files - ✅ Created

## 🚀 Next Steps

1. Apply Step 1-4 changes above
2. Run `npm run build` to test
3. Deploy to org
4. Configure permissions
5. Test end-to-end flow
