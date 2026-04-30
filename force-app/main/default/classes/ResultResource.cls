@RestResource(urlMapping='/results/*')
global without sharing class ResultResource {
  /**
   * GET: Retrieve result by sessionId
   * GET /services/apexrest/results?action=get&sessionId=xxx
   */
  @HttpGet
  global static QuestionnaireApiModels.ResultResponse handleGet() {
    RestRequest req = RestContext.request;
    String action = req.params.get('action');
    if (action == 'get') {
      String sessionId = req.params.get('sessionId');
      return getResultBySessionId(sessionId);
    }
    return new QuestionnaireApiModels.ResultResponse(
      false,
      'Invalid action parameter. Use action=get&sessionId=xxx',
      null
    );
  }

  private static QuestionnaireApiModels.ResultResponse getResultBySessionId(
    String sessionId
  ) {
    try {
      if (String.isBlank(sessionId)) {
        return new QuestionnaireApiModels.ResultResponse(
          false,
          'sessionId parameter is required',
          null
        );
      }

      List<Result__c> results = [
        SELECT
          Id,
          Dominant_Function__c,
          Auxiliary_Function__c,
          Tertiary_Function__c,
          Inferior_Function__c,
          Extroverted_Score__c,
          Introverted_Score__c,
          Thinking_Score__c,
          Feeling_Score__c,
          Intuition_Score__c,
          Sensing_Score__c,
          Response__r.Session_Id__c
        FROM Result__c
        WHERE Response__r.Session_Id__c = :sessionId
        LIMIT 1
      ];

      if (results.isEmpty()) {
        return new QuestionnaireApiModels.ResultResponse(
          false,
          'Result not found',
          null
        );
      }

      Result__c r = results[0];
      QuestionnaireApiModels.ResultData data = new QuestionnaireApiModels.ResultData();
      data.dominantFunction = r.Dominant_Function__c;
      data.auxiliaryFunction = r.Auxiliary_Function__c;
      data.tertiaryFunction = r.Tertiary_Function__c;
      data.inferiorFunction = r.Inferior_Function__c;
      data.extrovertedScore = r.Extroverted_Score__c != null
        ? Integer.valueOf(r.Extroverted_Score__c)
        : 0;
      data.introvertedScore = r.Introverted_Score__c != null
        ? Integer.valueOf(r.Introverted_Score__c)
        : 0;
      data.thinkingScore = r.Thinking_Score__c != null
        ? Integer.valueOf(r.Thinking_Score__c)
        : 0;
      data.feelingScore = r.Feeling_Score__c != null
        ? Integer.valueOf(r.Feeling_Score__c)
        : 0;
      data.intuitionScore = r.Intuition_Score__c != null
        ? Integer.valueOf(r.Intuition_Score__c)
        : 0;
      data.sensingScore = r.Sensing_Score__c != null
        ? Integer.valueOf(r.Sensing_Score__c)
        : 0;

      return new QuestionnaireApiModels.ResultResponse(true, 'Success', data);
    } catch (Exception e) {
      return new QuestionnaireApiModels.ResultResponse(
        false,
        e.getMessage(),
        null
      );
    }
  }

  /**
   * POST: Create a result record
   * POST /services/apexrest/results
   * Body: {"responseId":"xxx","dominantFunction":"...","auxiliaryFunction":"...", ...}
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
      String dominant = (String) payload.get('dominantFunction');
      String auxiliary = (String) payload.get('auxiliaryFunction');
      String tertiary = (String) payload.get('tertiaryFunction');
      String inferior = (String) payload.get('inferiorFunction');
      Integer extrovertedScore = payload.get('extrovertedScore') != null
        ? Integer.valueOf(String.valueOf(payload.get('extrovertedScore')))
        : 0;
      Integer introvertedScore = payload.get('introvertedScore') != null
        ? Integer.valueOf(String.valueOf(payload.get('introvertedScore')))
        : 0;
      Integer thinkingScore = payload.get('thinkingScore') != null
        ? Integer.valueOf(String.valueOf(payload.get('thinkingScore')))
        : 0;
      Integer feelingScore = payload.get('feelingScore') != null
        ? Integer.valueOf(String.valueOf(payload.get('feelingScore')))
        : 0;
      Integer intuitionScore = payload.get('intuitionScore') != null
        ? Integer.valueOf(String.valueOf(payload.get('intuitionScore')))
        : 0;
      Integer sensingScore = payload.get('sensingScore') != null
        ? Integer.valueOf(String.valueOf(payload.get('sensingScore')))
        : 0;

      Result__c result = new Result__c(
        Response__c = responseId,
        Dominant_Function__c = dominant,
        Auxiliary_Function__c = auxiliary,
        Tertiary_Function__c = tertiary,
        Inferior_Function__c = inferior,
        Extroverted_Score__c = extrovertedScore,
        Introverted_Score__c = introvertedScore,
        Thinking_Score__c = thinkingScore,
        Feeling_Score__c = feelingScore,
        Intuition_Score__c = intuitionScore,
        Sensing_Score__c = sensingScore
      );
      insert result;

      return new QuestionnaireApiModels.BasicResponse(true, 'Success');
    } catch (Exception e) {
      return new QuestionnaireApiModels.BasicResponse(false, e.getMessage());
    }
  }
}
