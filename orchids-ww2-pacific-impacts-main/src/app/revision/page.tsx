"use client";

import NavigationBar from '@/components/sections/navigation-bar';
import Footer from '@/components/sections/footer';
import { useState } from 'react';
import { Check, X, RotateCcw, Trophy } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct answer (0-3)
}

const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "Which country's 1947 constitution includes Article 9 that renounces war and prohibits maintaining military forces capable of offensive operations?",
    options: ["China", "Japan", "Korea", "Vietnam"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "How many casualties did China suffer during WWII?",
    options: ["8 million", "14 million", "20 million", "5 million"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which country began economic reforms called 'Doi Moi' in 1986 that transformed it into a market economy?",
    options: ["Thailand", "Korea", "Vietnam", "China"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "After Japan's surrender in 1945, which country was divided at the 38th parallel between Soviet and American occupation zones?",
    options: ["Vietnam", "China", "Korea", "Thailand"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Which was the only Southeast Asian nation never colonized by European powers during the colonial era?",
    options: ["Vietnam", "Thailand", "Korea", "China"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "The Chinese Civil War ended in 1949 with victory by which political party?",
    options: ["Nationalist Party", "Communist Party", "Democratic Party", "Socialist Party"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "What year did Japan introduce women's suffrage?",
    options: ["1945", "1946", "1947", "1950"],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Which country's authoritarian Prime Minister Plaek Phibunsongkhram allied with Japan and pursued territorial expansion during WWII?",
    options: ["Vietnam", "Korea", "China", "Thailand"],
    correctAnswer: 3
  },
  {
    id: 9,
    question: "The Vietnamese Famine of 1945 killed how many people in the north due to Japanese rice requisitions?",
    options: ["500,000-800,000", "1-2 million", "3-4 million", "100,000-300,000"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "On June 25, 1950, which major conflict began when North Korean forces invaded the South?",
    options: ["Vietnam War", "Korean War", "Pacific War", "Chinese Civil War"],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Who became Thailand's first democratically elected prime minister in 1946?",
    options: ["Plaek Phibunsongkhram", "Pridi Banomyong", "Syngman Rhee", "Kim Il Sung"],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Which Southeast Asian country fought the First Indochina War (1946-1954) against France for independence?",
    options: ["Thailand", "Korea", "Vietnam", "China"],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "How many Japanese soldiers died during WWII?",
    options: ["1.5 million", "2.1 million", "3.5 million", "4 million"],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "What was the name of the internal resistance group in Thailand that opposed the Japanese occupation during WWII?",
    options: ["Thai Liberation Front", "Free Thai Movement", "Thai Resistance Army", "Democratic Alliance"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Who was elected president of South Korea in 1948?",
    options: ["Kim Il Sung", "Pridi Banomyong", "Syngman Rhee", "Mao Zedong"],
    correctAnswer: 2
  }
];

export default function RevisionPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Map<number, number>>(new Map());
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    if (showResults) return;
    
    const newAnswers = new Map(selectedAnswers);
    newAnswers.set(questionId, optionIndex);
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => {
    let correctCount = 0;

    quizData.forEach((question) => {
      const userAnswer = selectedAnswers.get(question.id);
      if (userAnswer === question.correctAnswer) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers(new Map());
    setShowResults(false);
    setScore(0);
  };

  const allAnswered = selectedAnswers.size === quizData.length;

  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Revision Quiz</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Test Your Knowledge of WW2 Pacific Impact
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          
          {/* Instructions */}
          <div className="mb-12 bg-muted/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">How to Play</h2>
            <ol className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="font-semibold">1.</span>
                <span>Read each question carefully</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">2.</span>
                <span>Select one of the four options for each question</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">3.</span>
                <span>Once all questions are answered, click "Check Answers"</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">4.</span>
                <span>Review your results and try again to improve your score</span>
              </li>
            </ol>
          </div>

          {/* Quiz Questions */}
          <div className="space-y-8 mb-8">
            {quizData.map((question) => {
              const userAnswer = selectedAnswers.get(question.id);
              const isCorrect = showResults && userAnswer === question.correctAnswer;
              const isIncorrect = showResults && userAnswer !== undefined && userAnswer !== question.correctAnswer;

              return (
                <div
                  key={question.id}
                  className={`
                    p-6 rounded-xl border-2 transition-all
                    ${showResults && isCorrect ? 'border-green-500 bg-green-50' : ''}
                    ${showResults && isIncorrect ? 'border-red-500 bg-red-50' : ''}
                    ${!showResults ? 'border-border' : ''}
                  `}
                >
                  {/* Question Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                      {question.id}
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-semibold leading-relaxed">{question.question}</p>
                    </div>
                    {showResults && (
                      <div className="flex-shrink-0">
                        {isCorrect ? (
                          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                            <X className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Options */}
                  <div className="space-y-3 ml-11">
                    {question.options.map((option, index) => {
                      const isSelected = userAnswer === index;
                      const isCorrectOption = index === question.correctAnswer;
                      const showCorrectOption = showResults && isCorrectOption;
                      const showIncorrectOption = showResults && isSelected && !isCorrectOption;

                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(question.id, index)}
                          disabled={showResults}
                          className={`
                            w-full text-left p-4 rounded-lg border-2 transition-all
                            ${isSelected && !showResults ? 'border-primary bg-primary/5' : 'border-border'}
                            ${showCorrectOption ? 'border-green-500 bg-green-100' : ''}
                            ${showIncorrectOption ? 'border-red-500 bg-red-100' : ''}
                            ${!showResults ? 'hover:border-primary/50 hover:bg-accent/30 cursor-pointer' : 'cursor-default'}
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`
                              flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-semibold
                              ${isSelected && !showResults ? 'border-primary bg-primary text-white' : 'border-muted-foreground text-muted-foreground'}
                              ${showCorrectOption ? 'border-green-500 bg-green-500 text-white' : ''}
                              ${showIncorrectOption ? 'border-red-500 bg-red-500 text-white' : ''}
                            `}>
                              {String.fromCharCode(65 + index)}
                            </div>
                            <p className="text-sm flex-1">{option}</p>
                            {showCorrectOption && (
                              <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                            )}
                            {showIncorrectOption && (
                              <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {!showResults ? (
              <button
                onClick={checkAnswers}
                disabled={!allAnswered}
                className={`
                  px-8 py-3 rounded-md font-semibold text-lg transition-all
                  ${allAnswered 
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg' 
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }
                `}
              >
                Check Answers
              </button>
            ) : (
              <button
                onClick={resetQuiz}
                className="px-8 py-3 rounded-md font-semibold text-lg bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Try Again
              </button>
            )}
          </div>

          {/* Results */}
          {showResults && (
            <div className="mt-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-8 text-center text-white">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-yellow-400" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">Quiz Complete!</h3>
              <p className="text-xl text-slate-200 mb-6">
                You scored <span className="text-3xl font-bold text-yellow-400">{score}</span> out of <span className="text-3xl font-bold">{quizData.length}</span>
              </p>
              <div className="max-w-2xl mx-auto">
                {score === quizData.length ? (
                  <p className="text-lg text-green-300">Perfect score! You have excellent knowledge of WW2 Pacific impact! 🎉</p>
                ) : score >= quizData.length * 0.75 ? (
                  <p className="text-lg text-blue-300">Great job! You have a strong understanding of the material.</p>
                ) : score >= quizData.length * 0.5 ? (
                  <p className="text-lg text-yellow-300">Good effort! Review the country pages to improve your knowledge.</p>
                ) : (
                  <p className="text-lg text-slate-300">Keep learning! Visit the country pages to learn more about WW2 Pacific impact.</p>
                )}
              </div>
            </div>
          )}

          {/* Learning Tips */}
          <div className="mt-16 bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
            <p className="text-muted-foreground mb-6">
              All questions in this quiz are based on facts from our country pages. Visit these pages to deepen your understanding:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="/countries/japan" 
                className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-card"
              >
                <h4 className="font-semibold mb-2">Japan</h4>
                <p className="text-sm text-muted-foreground">Learn about Article 9, women's suffrage, and post-war reforms</p>
              </a>
              <a 
                href="/countries/china" 
                className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-card"
              >
                <h4 className="font-semibold mb-2">China</h4>
                <p className="text-sm text-muted-foreground">Explore the Civil War and Communist victory</p>
              </a>
              <a 
                href="/countries/vietnam" 
                className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-card"
              >
                <h4 className="font-semibold mb-2">Vietnam</h4>
                <p className="text-sm text-muted-foreground">Discover the Indochina Wars and Doi Moi reforms</p>
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}