@RestResource(urlMapping='/response-answers/*')
global without sharing class ResponseAnswerResource {
  /**
   * POST: Create or update a response answer (upsert)
   * POST /services/apexrest/response-answers
   * Request Body: {"responseId":"xxx","questionId":"xxx","answerOptionId":"xxx"}
   */
  @HttpPost
  global static QuestionnaireApiModels.BasicResponse handlePost() {
    try {
      RestRequest req = RestContext.request;
      String body = req.requestBody != null ? req.requestBody.toString() : '';
      if (String.isBlank(body)) {
        return new QuestionnaireApiModels.BasicResponse(
          false,
          'Request body is required'
        );
      }
      Map<String, Object> payload = (Map<String, Object>) JSON.deserializeUntyped(
        body
      );
      String responseId = (String) payload.get('responseId');
      String questionId = (String) payload.get('questionId');
      String answerOptionId = (String) payload.get('answerOptionId');

      if (
        String.isBlank(responseId) ||
        String.isBlank(questionId) ||
        String.isBlank(answerOptionId)
      ) {
        return new QuestionnaireApiModels.BasicResponse(
          false,
          'responseId, questionId and answerOptionId are required'
        );
      }

      // Upsert logic
      List<Response_Answer__c> existingAnswers = [
        SELECT Id, Answer_Option__c
        FROM Response_Answer__c
        WHERE Response__c = :responseId AND Question__c = :questionId
        LIMIT 1
      ];

      if (!existingAnswers.isEmpty()) {
        Response_Answer__c existingAnswer = existingAnswers[0];
        existingAnswer.Answer_Option__c = answerOptionId;
        existingAnswer.Answered_Date__c = DateTime.now();
        update existingAnswer;
      } else {
        Response_Answer__c responseAnswer = new Response_Answer__c(
          Response__c = responseId,
          Question__c = questionId,
          Answer_Option__c = answerOptionId,
          Answered_Date__c = DateTime.now()
        );
        insert responseAnswer;
      }

      return new QuestionnaireApiModels.BasicResponse(true, 'Success');
    } catch (Exception e) {
      return new QuestionnaireApiModels.BasicResponse(false, e.getMessage());
    }
  }
}
