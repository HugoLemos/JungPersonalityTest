import { useNavigate, useLocation } from 'react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { apexApi, ResultData as ApiResultData } from '@/api/apexClient';

interface ResultData {
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

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<ResultData | null>(null);
  const [aiPrompt, setAiPrompt] = useState<string>('');

  const generateAIPrompt = (data: ResultData) => {
    const prompt = `I've completed a Jungian personality assessment with the following results:

**Cognitive Function Stack:**
1. Dominant: ${data.dominantFunction}
2. Auxiliary: ${data.auxiliaryFunction}
3. Tertiary: ${data.tertiaryFunction}
4. Inferior: ${data.inferiorFunction}

**Attitude:** ${data.attitude} (${data.scores.extroverted}% Extroverted, ${data.scores.introverted}% Introverted)

**Function Scores:**
- Intuition: ${data.scores.intuition}%
- Sensing: ${data.scores.sensing}%
- Thinking: ${data.scores.thinking}%
- Feeling: ${data.scores.feeling}%

Based on these results, please provide a personalized analysis that explains:

1. How my mind naturally prioritizes information and decisions
2. How I perceive and interact with the world around me
3. My natural working style and preferences
4. Potential friction points or blind spots I should be aware of
5. Strategies for personal growth and development

Please make the analysis:
- Pragmatic rather than theoretical
- Behaviour-focused rather than purely descriptive
- Explicitly tied to consulting outcomes such as clarity, credibility, delivery quality, and client confidence

Be specific and actionable in your analysis, relating it directly to my cognitive function stack.

`;

    setAiPrompt(prompt);
  };

  const generateAIPromptCallback = useCallback((data: ResultData) => {
    generateAIPrompt(data);
  }, []);

  useEffect(() => {
    const sessionId = location.state?.sessionId || sessionStorage.getItem('sessionId');
    
    if (!sessionId) {
      navigate('/');
      return;
    }

    // Fetch results from Result__c
    const fetchResults = async () => {
      try {
        const response = await apexApi.getResultBySessionId(sessionId);
        
        if (!response.success || !response.data) {
          console.error('Error fetching results:', response.message);
          setLoading(false);
          return;
        }

        const apiResult: ApiResultData = response.data;

        const fetchedResults: ResultData = {
          dominantFunction: apiResult.dominantFunction,
          auxiliaryFunction: apiResult.auxiliaryFunction,
          tertiaryFunction: apiResult.tertiaryFunction,
          inferiorFunction: apiResult.inferiorFunction,
          scores: {
            extroverted: apiResult.extrovertedScore,
            introverted: apiResult.introvertedScore,
            thinking: apiResult.thinkingScore,
            feeling: apiResult.feelingScore,
            intuition: apiResult.intuitionScore,
            sensing: apiResult.sensingScore,
          },
          attitude: apiResult.extrovertedScore > apiResult.introvertedScore 
            ? 'Extroverted' 
            : 'Introverted',
        };

        setResults(fetchedResults);
        generateAIPromptCallback(fetchedResults);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching results:', error);
        setLoading(false);
      }
    };

    fetchResults();
  }, [location, navigate, generateAIPromptCallback]);

  const handleDownload = () => {
    if (!results) return;

    const data = {
      timestamp: new Date().toISOString(),
      results: results,
      aiPrompt: aiPrompt,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `jungian-assessment-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(aiPrompt);
    // Could add a toast notification here
  };

  const handleStartOver = () => {
    sessionStorage.removeItem('sessionId');
    sessionStorage.removeItem('questionnaireId');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
          <p className="mt-4 text-slate-600">Calculating your results...</p>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-slate-600 mb-4">No results found. Please complete the assessment first.</p>
            <Button onClick={() => navigate('/')}>Start Assessment</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Your Cognitive Profile
          </h1>
          <p className="text-lg text-slate-600">
            Assessment Complete
          </p>
        </div>

        {/* Cognitive Function Stack */}
        <Card className="mb-6 shadow-lg border-slate-200/60 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-800">Cognitive Function Stack</CardTitle>
            <CardDescription>
              Your natural hierarchy of information processing and decision-making
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: 'Dominant (Primary)', value: results.dominantFunction, color: 'from-indigo-500 to-purple-600' },
              { label: 'Auxiliary (Supporting)', value: results.auxiliaryFunction, color: 'from-blue-500 to-indigo-500' },
              { label: 'Tertiary (Developing)', value: results.tertiaryFunction, color: 'from-slate-400 to-blue-400' },
              { label: 'Inferior (Aspirational)', value: results.inferiorFunction, color: 'from-slate-300 to-slate-400' },
            ].map((func, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${func.color} text-white font-bold text-lg flex items-center justify-center shadow-md`}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-600">{func.label}</div>
                  <div className="text-lg font-semibold text-slate-900">{func.value}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Attitude */}
          <Card className="shadow-lg border-slate-200/60 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl text-slate-800">Primary Attitude</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Badge className="text-base px-4 py-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
                  {results.attitude}
                </Badge>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">Extroverted</span>
                    <span className="font-medium text-slate-900">{results.scores.extroverted}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-400 to-red-500"
                      style={{ width: `${results.scores.extroverted}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">Introverted</span>
                    <span className="font-medium text-slate-900">{results.scores.introverted}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-indigo-500"
                      style={{ width: `${results.scores.introverted}%` }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cognitive Functions */}
          <Card className="shadow-lg border-slate-200/60 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl text-slate-800">Function Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: 'Intuition', value: results.scores.intuition, color: 'from-purple-400 to-purple-600' },
                { label: 'Sensing', value: results.scores.sensing, color: 'from-green-400 to-green-600' },
                { label: 'Thinking', value: results.scores.thinking, color: 'from-blue-400 to-blue-600' },
                { label: 'Feeling', value: results.scores.feeling, color: 'from-pink-400 to-pink-600' },
              ].map((func) => (
                <div key={func.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">{func.label}</span>
                    <span className="font-medium text-slate-900">{func.value}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${func.color}`}
                      style={{ width: `${func.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* AI Prompt */}
        <Card className="mb-6 shadow-lg border-slate-200/60 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl text-slate-800">AI Analysis Prompt</CardTitle>
            <CardDescription>
              Copy this prompt and submit it to an AI assistant for a personalized analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 rounded-lg p-4 mb-4 font-mono text-sm text-slate-700 whitespace-pre-wrap max-h-80 overflow-y-auto border border-slate-200">
              {aiPrompt}
            </div>
            <Button onClick={handleCopyPrompt} variant="outline" className="w-full sm:w-auto">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy to Clipboard
            </Button>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleDownload} variant="outline" className="w-full sm:w-auto">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Results
          </Button>
          <Button onClick={handleStartOver} className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Start New Assessment
          </Button>
        </div>
      </div>
    </div>
  );
}