import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import DOMPurify from "dompurify";
import { apexApi, QuestionnaireData } from '@/api/apexClient';

function decodeHtmlEntities(input: string) {
  // Decode < > & etc. in the browser safely
  const txt = document.createElement("textarea");
  txt.innerHTML = input;
  return txt.value;
}

export default function Home() {
  const navigate = useNavigate();
  const [questionnaire, setQuestionnaire] = useState<QuestionnaireData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchQuestionnaire() {
      try {
        const response = await apexApi.getActiveQuestionnaire();

        if (!response.success) {
          console.error('Apex error:', response.message);
          setError(response.message || 'Failed to load questionnaire. Please try again later.');
          setLoading(false);
          return;
        }
        
        if (response.data) {
          const raw = response.data.introductionText || '<p>Welcome to the assessment.</p>';
          const decoded = decodeHtmlEntities(raw);

          setQuestionnaire({
            id: response.data.id,
            name: response.data.name || 'Jungian Personality Assessment',
            introductionText: decoded,
            questionsPerPage: response.data.questionsPerPage || 1,
          });
          // Store questionnaire ID for later use
          sessionStorage.setItem('questionnaireId', response.data.id);
        } else {
          setError('No active questionnaire found. Please contact the administrator.');
        }
      } catch (err) {
        console.error('Error fetching questionnaire:', err);
        setError('Failed to load questionnaire. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchQuestionnaire();
  }, []);

  const handleStart = () => {
    // Generate or retrieve session ID
    const sessionId = crypto.randomUUID();
    sessionStorage.setItem('sessionId', sessionId);
    navigate('/questionnaire');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
          <p className="mt-4 text-slate-600">Loading assessment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!questionnaire) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-slate-600 mb-4">No questionnaire available.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Discover Your Cognitive Profile
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Understand how your mind processes information and makes decisions
          </p>
        </div>

        <Card className="shadow-lg border-slate-200/60 bg-white/80 backdrop-blur">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl sm:text-3xl text-slate-800">
              {questionnaire?.name}
            </CardTitle>
            <CardDescription className="text-base text-slate-600">
              A comprehensive assessment of your Jungian personality type
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div
              className="prose prose-slate max-w-none prose-p:text-slate-700 prose-p:leading-relaxed prose-headings:text-slate-800 prose-li:text-slate-700 prose-strong:text-slate-900 prose-ul:my-4"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(questionnaire?.introductionText || '') }}
            />

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200">
              <Button
                onClick={handleStart}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                Begin Assessment
              </Button>
              <div className="flex-1 flex items-center text-sm text-slate-500">
                <svg
                  className="w-5 h-5 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Approximately 10-15 minutes
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>Your responses are stored securely and anonymously</p>
        </div>
      </div>
    </div>
  );
}