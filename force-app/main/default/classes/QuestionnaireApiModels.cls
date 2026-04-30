global class QuestionnaireApiModels {
  // Generic basic response
  global class BasicResponse {
    webService Boolean success;
    webService String message;
    public BasicResponse(Boolean success, String message) {
      this.success = success;
      this.message = message;
    }
    public BasicResponse() {
    }
  }

  // Questionnaire data
  global class QuestionnaireData {
    webService String id;
    webService String name;
    webService String introductionText;
    webService Integer questionsPerPage;
    webService List<QuestionData> questions;
  }

  // Answer option data
  global class AnswerOptionData {
    webService String id;
    webService String answerText;
    webService String classification;
    webService Integer orderNum;
  }

  // Question data
  global class QuestionData {
    webService String id;
    webService String questionText;
    webService Integer orderNum;
    webService List<AnswerOptionData> answers;
  }

  // QuestionnaireWithQuestions response
  global class QuestionnaireWithQuestionsResponse {
    webService Boolean success;
    webService String message;
    webService QuestionnaireData data;
    public QuestionnaireWithQuestionsResponse(
      Boolean success,
      String message,
      QuestionnaireData data
    ) {
      this.success = success;
      this.message = message;
      this.data = data;
    }
    public QuestionnaireWithQuestionsResponse() {
    }
  }

  // ResponseRecord data and response
  global class ResponseRecordData {
    webService String id;
    webService String name;
  }
  global class ResponseRecordResponse {
    webService Boolean success;
    webService String message;
    webService ResponseRecordData data;
    public ResponseRecordResponse(
      Boolean success,
      String message,
      ResponseRecordData data
    ) {
      this.success = success;
      this.message = message;
      this.data = data;
    }
    public ResponseRecordResponse() {
    }
  }

  // Result data and response
  global class ResultData {
    webService String dominantFunction;
    webService String auxiliaryFunction;
    webService String tertiaryFunction;
    webService String inferiorFunction;
    webService Integer extrovertedScore;
    webService Integer introvertedScore;
    webService Integer thinkingScore;
    webService Integer feelingScore;
    webService Integer intuitionScore;
    webService Integer sensingScore;
  }
  global class ResultResponse {
    webService Boolean success;
    webService String message;
    webService ResultData data;
    public ResultResponse(Boolean success, String message, ResultData data) {
      this.success = success;
      this.message = message;
      this.data = data;
    }
    public ResultResponse() {
    }
  }
}
