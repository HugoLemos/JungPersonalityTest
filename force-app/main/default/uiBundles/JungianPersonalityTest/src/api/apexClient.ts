/**
 * Apex REST API Client for calling Salesforce REST endpoints
 * Uses DataSDK.fetch to call custom Apex REST endpoints
 *
 * Updated to use the finalized REST resource endpoints:
 * - GET  /services/apexrest/questionnaires?action=active
 * - GET  /services/apexrest/questionnaires?action=details&id=...
 * - POST /services/apexrest/responses
 * - POST /services/apexrest/response-answers
 * - GET  /services/apexrest/results?action=get&sessionId=...
 * - POST /services/apexrest/results
 */

import { createDataSDK } from '@salesforce/sdk-data';

// Type definitions
export interface QuestionnaireData {
  id: string;
  name: string;
  introductionText: string;
  questionsPerPage: number;
}

export interface AnswerOptionData {
  id: string;
  answerText: string;
  classification: string;
  orderNum: number;
}

export interface QuestionData {
  id: string;
  questionText: string;
  orderNum: number;
  answers: AnswerOptionData[];
}

export interface QuestionnaireWithQuestionsData {
  id: string;
  name: string;
  questionsPerPage: number;
  questions: QuestionData[];
}

export interface ResultData {
  dominantFunction: string;
  auxiliaryFunction: string;
  tertiaryFunction: string;
  inferiorFunction: string;
  extrovertedScore: number;
  introvertedScore: number;
  thinkingScore: number;
  feelingScore: number;
  intuitionScore: number;
  sensingScore: number;
}

export interface ApexResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}

/**
 * Base function to call Apex REST endpoints
 * Note: Unlike UIAPI responses, Apex REST returns plain JSON with no { value } wrappers
 */
async function callApexRest<T>(
  url: string,
  method: 'GET' | 'POST' = 'GET',
  body?: Record<string, any>
): Promise<ApexResponse<T>> {
  try {
    const sdk = await createDataSDK();
    
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body && method === 'POST') {
      options.body = JSON.stringify(body);
    }

    const res = await sdk.fetch?.(url, options);
    
    if (!res?.ok) {
      throw new Error(`Apex REST error: ${res?.status} ${res?.statusText}`);
    }

    const result = await res.json();
    return result as ApexResponse<T>;
  } catch (error) {
    console.error(`Error calling ${url}:`, error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error occurred',
      data: null,
    };
  }
}

// API methods
export const apexApi = {
  /**
   * Get the most recent active questionnaire
   * REST Endpoint: GET /services/apexrest/questionnaires?action=active
   */
  async getActiveQuestionnaire(): Promise<ApexResponse<QuestionnaireData>> {
    return callApexRest<QuestionnaireData>('/services/apexrest/questionnaires?action=active');
  },

  /**
   * Get questionnaire with all questions and answer options
   * REST Endpoint: GET /services/apexrest/questionnaires?action=details&id=xxx
   */
  async getQuestionnaireWithQuestions(
    questionnaireId: string
  ): Promise<ApexResponse<QuestionnaireWithQuestionsData>> {
    const url = `/services/apexrest/questionnaires?action=details&id=${encodeURIComponent(questionnaireId)}`;
    return callApexRest<QuestionnaireWithQuestionsData>(url);
  },

  /**
   * Create a response record
   * REST Endpoint: POST /services/apexrest/responses
   */
  async createResponse(
    questionnaireId: string,
    sessionId: string
  ): Promise<ApexResponse<{ id: string; name: string }>> {
    return callApexRest<{ id: string; name: string }>(
      '/services/apexrest/responses',
      'POST',
      { questionnaireId, sessionId }
    );
  },

  /**
   * Create a response answer
   * REST Endpoint: POST /services/apexrest/response-answers
   */
  async createResponseAnswer(
    responseId: string,
    questionId: string,
    answerOptionId: string
  ): Promise<ApexResponse<null>> {
    return callApexRest<null>(
      '/services/apexrest/response-answers',
      'POST',
      { responseId, questionId, answerOptionId }
    );
  },

  /**
   * Create a result record
   * REST Endpoint: POST /services/apexrest/results
   */
  async createResult(
    responseId: string,
    dominantFunction: string,
    auxiliaryFunction: string,
    tertiaryFunction: string,
    inferiorFunction: string,
    extrovertedScore: number,
    introvertedScore: number,
    thinkingScore: number,
    feelingScore: number,
    intuitionScore: number,
    sensingScore: number
  ): Promise<ApexResponse<null>> {
    return callApexRest<null>(
      '/services/apexrest/results',
      'POST',
      {
        responseId,
        dominantFunction,
        auxiliaryFunction,
        tertiaryFunction,
        inferiorFunction,
        extrovertedScore,
        introvertedScore,
        thinkingScore,
        feelingScore,
        intuitionScore,
        sensingScore,
      }
    );
  },

  /**
   * Get result by session ID
   * REST Endpoint: GET /services/apexrest/results?action=get&sessionId=xxx
   */
  async getResultBySessionId(sessionId: string): Promise<ApexResponse<ResultData>> {
    const url = `/services/apexrest/results?action=get&sessionId=${encodeURIComponent(sessionId)}`;
    return callApexRest<ResultData>(url);
  },
};