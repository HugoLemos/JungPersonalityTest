@RestResource(urlMapping='/questionnaires/*')
global without sharing class QuestionnaireResource {
  /**
   * GET: Handles all questionnaire queries
   * - GET /services/apexrest/questionnaires?action=active - Get active questionnaire
   * - GET /services/apexrest/questionnaires?action=details&id=xxx - Get questionnaire with questions
   */
  @HttpGet
  global static QuestionnaireApiModels.QuestionnaireWithQuestionsResponse handleGet() {
    RestRequest req = RestContext.request;
    String action = req.params.get('action');

    if (action == 'active') {
      return getActiveQuestionnaire();
    } else if (action == 'details') {
      String questionnaireId = req.params.get('id');
      return getQuestionnaireWithQuestions(questionnaireId);
    }

    return new QuestionnaireApiModels.QuestionnaireWithQuestionsResponse(
      false,
      'Invalid action parameter. Use action=active or action=details',
      null
    );
  }

  private static QuestionnaireApiModels.QuestionnaireWithQuestionsResponse getActiveQuestionnaire() {
    try {
      List<Questionnaire__c> questionnaires = [
        SELECT Id, Name, Introduction_Text__c, Questions_Per_Page__c
        FROM Questionnaire__c
        WHERE Is_Active__c = TRUE
        ORDER BY CreatedDate DESC
        LIMIT 1
      ];

      if (questionnaires.isEmpty()) {
        return new QuestionnaireApiModels.QuestionnaireWithQuestionsResponse(
          false,
          'No active questionnaire found',
          null
        );
      }

      QuestionnaireApiModels.QuestionnaireData data = new QuestionnaireApiModels.QuestionnaireData();
      data.id = questionnaires[0].Id;
      data.name = questionnaires[0].Name;
      data.introductionText = questionnaires[0].Introduction_Text__c;
      data.questionsPerPage = Integer.valueOf(
        questionnaires[0].Questions_Per_Page__c
      );

      return new QuestionnaireApiModels.QuestionnaireWithQuestionsResponse(
        true,
        'Success',
        data
      );
    } catch (Exception e) {
      return new QuestionnaireApiModels.QuestionnaireWithQuestionsResponse(
        false,
        e.getMessage(),
        null
      );
    }
  }

  private static QuestionnaireApiModels.QuestionnaireWithQuestionsResponse getQuestionnaireWithQuestions(
    String questionnaireId
  ) {
    try {
      if (String.isBlank(questionnaireId)) {
        return new QuestionnaireApiModels.QuestionnaireWithQuestionsResponse(
          false,
          'id parameter is required',
          null
        );
      }

      List<Questionnaire__c> questionnaires = [
        SELECT
          Id,
          Name,
          Questions_Per_Page__c,
          (
            SELECT
              Id,
              Question_Text__c,
              Order__c,
              (
                SELECT Id, Answer_Text__c, Classification__c, Order__c
                FROM Answer_Options__r
                ORDER BY Order__c ASC
              )
            FROM Questions__r
            ORDER BY Order__c ASC
          )
        FROM Questionnaire__c
        WHERE Id = :questionnaireId
        LIMIT 1
      ];

      if (questionnaires.isEmpty()) {
        return new QuestionnaireApiModels.QuestionnaireWithQuestionsResponse(
          false,
          'Questionnaire not found',
          null
        );
      }

      Questionnaire__c q = questionnaires[0];
      QuestionnaireApiModels.QuestionnaireData data = new QuestionnaireApiModels.QuestionnaireData();
      data.id = q.Id;
      data.name = q.Name;
      data.questionsPerPage = Integer.valueOf(q.Questions_Per_Page__c);
      List<QuestionnaireApiModels.QuestionData> questions = new List<QuestionnaireApiModels.QuestionData>();

      for (Question__c question : q.Questions__r) {
        QuestionnaireApiModels.QuestionData qData = new QuestionnaireApiModels.QuestionData();
        qData.id = question.Id;
        qData.questionText = question.Question_Text__c;
        qData.orderNum = Integer.valueOf(question.Order__c);
        qData.answers = new List<QuestionnaireApiModels.AnswerOptionData>();

        for (Answer_Option__c answer : question.Answer_Options__r) {
          QuestionnaireApiModels.AnswerOptionData aData = new QuestionnaireApiModels.AnswerOptionData();
          aData.id = answer.Id;
          aData.answerText = answer.Answer_Text__c;
          aData.classification = answer.Classification__c;
          aData.orderNum = Integer.valueOf(answer.Order__c);
          qData.answers.add(aData);
        }

        questions.add(qData);
      }
      data.questions = questions;
      return new QuestionnaireApiModels.QuestionnaireWithQuestionsResponse(
        true,
        'Success',
        data
      );
    } catch (Exception e) {
      return new QuestionnaireApiModels.QuestionnaireWithQuestionsResponse(
        false,
        e.getMessage(),
        null
      );
    }
  }
}
