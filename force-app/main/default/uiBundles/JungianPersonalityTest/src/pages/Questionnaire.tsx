import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { apexApi, QuestionData, AnswerOptionData } from '@/api/apexClient';
import { calculateResults } from '@/utils/calculateResults';

interface Question {
  id: string;
  order: number;
  questionText: string;
  answers: Answer[];
}

interface Answer {
  id: string;
  answerText: string;
  classification: string;
  order: number;
}

export default function Questionnaire() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [questionsPerPage, setQuestionsPerPage] = useState(1);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [responseId, setResponseId] = useState<string>('');
  // Initialize sessionId from sessionStorage; no setter needed
  const [sessionId] = useState<string>(() => {
    const existing = sessionStorage.getItem('sessionId');
    if (existing) return existing;
    const newId = crypto.randomUUID();
    sessionStorage.setItem('sessionId', newId);
    return newId;
  });

  useEffect(() => {
    // Fetch questionnaire with questions and answer options
    const fetchQuestionnaire = async () => {
      try {
        const questionnaireId = sessionStorage.getItem('questionnaireId');

        if (!questionnaireId) {
          navigate('/');
          return;
        }

        // Create Response record
        const responseResult = await apexApi.createResponse(questionnaireId, sessionId);
        if (responseResult.success && responseResult.data) {
          setResponseId(responseResult.data.id);
        }

        // Fetch questionnaire with questions
        const result = await apexApi.getQuestionnaireWithQuestions(questionnaireId);
console.log('result', result);
        if (!result.success || !result.data) {
          console.error('Error fetching questionnaire:', result.message);
          navigate('/');
          return;
        }

        // Set questions per page
        setQuestionsPerPage(result.data.questionsPerPage || 1);
// console.log('fetchedQuestions', fetchedQuestions);
        // Transform the data
        const fetchedQuestions: Question[] = result.data.questions.map((q: QuestionData) => ({
          id: q.id,
          order: q.orderNum,
          questionText: q.questionText,
          answers: q.answers.map((a: AnswerOptionData) => ({
            id: a.id,
            answerText: a.answerText,
            classification: a.classification,
            order: a.orderNum,
          })),
        }));

        setQuestions(fetchedQuestions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questionnaire:', error);
        setLoading(false);
      }
    };

    fetchQuestionnaire();
  }, [navigate, sessionId]);

  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const answeredCount = Object.keys(responses).length;
  const progress = questions.length > 0 ? (answeredCount / questions.length) * 100 : 0;

  const handleAnswerChange = async (questionId: string, answerId: string) => {
    setResponses(prev => ({ ...prev, [questionId]: answerId }));

    try {
      if (!responseId) {
        console.error('No response ID available');
        return;
      }

      // Create response answer
      await apexApi.createResponseAnswer(responseId, questionId, answerId);
    } catch (error) {
      console.error('Error saving answer:', error);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    try {
      // Get all answer classifications
      const classifications: { classification: string }[] = [];
      questions.forEach(question => {
        const answerId = responses[question.id];
        if (answerId) {
          const answer = question.answers.find(a => a.id === answerId);
          if (answer) {
            classifications.push({ classification: answer.classification });
          }
        }
      });

      // Calculate results
      const results = calculateResults(classifications);

      // Create Result record
      await apexApi.createResult(
        responseId,
        results.dominantFunction,
        results.auxiliaryFunction,
        results.tertiaryFunction,
        results.inferiorFunction,
        results.scores.extroverted,
        results.scores.introverted,
        results.scores.thinking,
        results.scores.feeling,
        results.scores.intuition,
        results.scores.sensing
      );

      // Navigate to results
      navigate('/results', { state: { sessionId } });
    } catch (error) {
      console.error('Error submitting results:', error);
    }
  };

  const canSubmit = answeredCount === questions.length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
          <p className="mt-4 text-slate-600">Loading questionnaire...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-700">
              Progress: {answeredCount} of {questions.length} questions
            </span>
            <span className="text-sm font-medium text-slate-700">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {currentQuestions.map((question, index) => (
            <Card key={question.id} className="shadow-lg border-slate-200/60 bg-white/80 backdrop-blur">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-semibold flex items-center justify-center text-sm">
                      {currentPage * questionsPerPage + index + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-medium text-slate-900 leading-tight">
                      {question.questionText}
                    </h3>
                  </div>
                </div>

                <RadioGroup
                  value={responses[question.id] || ''}
                  onValueChange={value => handleAnswerChange(question.id, value)}
                  className="space-y-3"
                >
                  {question.answers
                    .sort((a, b) => a.order - b.order)
                    .map(answer => (
                      <div
                        key={answer.id}
                        onClick={() => handleAnswerChange(question.id, answer.id)}
                        className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:bg-slate-50 ${
                          responses[question.id] === answer.id
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-slate-200'
                        }`}
                      >
                        <RadioGroupItem
                          value={answer.id}
                          id={answer.id}
                          className="mt-0.5 flex-shrink-0"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <Label
                          htmlFor={answer.id}
                          className="text-base text-slate-700 cursor-pointer flex-1 leading-relaxed"
                          onClick={(e) => e.preventDefault()}
                        >
                          {answer.answerText}
                        </Label>
                      </div>
                    ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            variant="outline"
            className="w-full sm:w-auto order-2 sm:order-1"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </Button>

          <div className="text-sm text-slate-600 order-1 sm:order-2">
            Page {currentPage + 1} of {totalPages}
          </div>

          {currentPage < totalPages - 1 ? (
            <Button
              onClick={handleNext}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 order-3"
            >
              Next
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 order-3"
            >
              View Results
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}