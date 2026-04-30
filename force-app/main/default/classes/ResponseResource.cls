@RestResource(urlMapping='/responses/*')
global without sharing class ResponseResource {
  @HttpPost
  global static QuestionnaireApiModels.ResponseRecordResponse createResponse(
    String questionnaireId,
    String sessionId
  ) {
    try {
      Response__c response = new Response__c(
        Questionnaire__c = questionnaireId,
        Session_Id__c = sessionId,
        Started_Date__c = DateTime.now()
      );
      insert response;

      QuestionnaireApiModels.ResponseRecordData data = new QuestionnaireApiModels.ResponseRecordData();
      data.id = response.Id;
      data.name = [SELECT Name FROM Response__c WHERE Id = :response.Id LIMIT 1]
      .Name;

      return new QuestionnaireApiModels.ResponseRecordResponse(
        true,
        'Success',
        data
      );
    } catch (Exception e) {
      return new QuestionnaireApiModels.ResponseRecordResponse(
        false,
        e.getMessage(),
        null
      );
    }
  }
}
