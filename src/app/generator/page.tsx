'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles, Loader2 } from 'lucide-react';

interface BusinessData {
  businessType: string;
  services: string;
  targetCustomers: string;
  mainGoal: string;
}

const businessQuestions = [
  {
    id: 'businessType',
    question: 'What type of business do you have?',
    placeholder: 'e.g., Restaurant, Tech Startup, Fitness Studio, Cafe...',
  },
  {
    id: 'services',
    question: 'What services or products do you offer?',
    placeholder: 'e.g., Italian cuisine & catering, SaaS software, Personal training...',
  },
  {
    id: 'targetCustomers',
    question: 'Who are your target customers?',
    placeholder: 'e.g., Families, Professionals, Local community, Tech enthusiasts...',
  },
  {
    id: 'mainGoal',
    question: 'What is your main goal for this website?',
    placeholder: 'e.g., Increase online orders, Build brand awareness, Generate leads...',
  },
];

export default function GeneratorPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [businessData, setBusinessData] = useState<BusinessData>({
    businessType: '',
    services: '',
    targetCustomers: '',
    mainGoal: '',
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const currentQuestion = businessQuestions[currentStep];
  const progress = ((currentStep + 1) / businessQuestions.length) * 100;

  const handleNext = () => {
    if (currentStep < businessQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleGenerate();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (value: string) => {
    setBusinessData({
      ...businessData,
      [currentQuestion.id]: value,
    });
  };

  const handleGenerate = async () => {
    setIsGenerating(true);

    // Simulate AI generation process
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Navigate to editor with generated website
    router.push('/editor?generated=true');
  };

  const currentValue = businessData[currentQuestion.id as keyof BusinessData];
  const canProceed = currentValue.trim().length > 0;

  if (isGenerating) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-primary/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-primary animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Creating Your Website...
          </h2>
          <p className="text-xl text-white/70 mb-6">
            Our AI is crafting the perfect website for your business
          </p>
          <div className="max-w-md mx-auto space-y-3">
            <div className="flex items-center gap-3 text-white/80">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Analyzing your business needs...</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Generating content and layouts...</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Optimizing for your industry...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/generated/logo.png"
                alt="BUILD.AI"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-white">BUILD.AI</span>
            </Link>
            <Link
              href="/"
              className="text-white/80 hover:text-white transition-smooth"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-3">
            <span className="text-white/80 text-sm font-medium">
              Step {currentStep + 1} of {businessQuestions.length}
            </span>
            <span className="text-white/80 text-sm font-medium">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="card-dark p-8 md:p-12 mb-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                {currentQuestion.question}
              </h1>
            </div>
            <p className="text-white/60 text-sm">
              Help us understand your business so we can create the perfect website
            </p>
          </div>

          <div className="mb-8">
            <textarea
              value={currentValue}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={currentQuestion.placeholder}
              className="w-full px-6 py-4 bg-background-dark text-white border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth min-h-[120px] resize-none"
              autoFocus
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className="px-6 py-3 text-white/80 hover:text-white disabled:text-white/30 disabled:cursor-not-allowed transition-smooth font-medium"
            >
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed}
              className="px-8 py-3 bg-primary text-white rounded-md font-semibold hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-smooth flex items-center gap-2"
            >
              {currentStep === businessQuestions.length - 1 ? (
                <>
                  Generate Website
                  <Sparkles className="w-5 h-5" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Preview of Answers */}
        {currentStep > 0 && (
          <div className="space-y-3">
            <h3 className="text-white/60 text-sm font-medium mb-3">Your Answers:</h3>
            {businessQuestions.slice(0, currentStep).map((q, idx) => (
              <div
                key={q.id}
                className="bg-white/5 border border-white/10 rounded-lg p-4 cursor-pointer hover:bg-white/10 transition-smooth"
                onClick={() => setCurrentStep(idx)}
              >
                <p className="text-white/60 text-xs mb-1">{q.question}</p>
                <p className="text-white text-sm">
                  {businessData[q.id as keyof BusinessData]}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
