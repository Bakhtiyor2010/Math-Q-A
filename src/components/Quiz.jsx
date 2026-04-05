import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { CheckCircle2, XCircle, RotateCcw, ChevronRight } from 'lucide-react';

const MarkdownComponents = {
  p: ({node, ...props}) => <span {...props} />, // Render as span to keep inline flow in lists/buttons
  code: ({node, inline, ...props}) => (
    <code 
      style={{
        background: 'rgba(59, 130, 246, 0.1)', 
        padding: '0.1rem 0.3rem', 
        borderRadius: '4px',
        color: 'var(--primary)'
      }} 
      {...props} 
    />
  )
};

export default function Quiz({ quiz, onFinish }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  if (!quiz || quiz.length === 0) return <div>No quiz available for this lesson.</div>;

  const currentQuestion = quiz[currentQuestionIndex];

  const handleMCQSelect = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    checkAnswer(option);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (isAnswered || !userAnswer.trim()) return;
    checkAnswer(userAnswer.trim());
  };

  const checkAnswer = (answer) => {
    const correct = answer.toString().trim().toLowerCase() === currentQuestion.correctAnswer.toString().trim().toLowerCase();
    setIsCorrect(correct);
    setIsAnswered(true);
    if (correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      resetState();
    } else {
      // Score is already correctly updated in checkAnswer
      onFinish(score, quiz.length);
    }
  };

  const handleRetry = () => {
    resetState();
  };

  const resetState = () => {
    setUserAnswer('');
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
  };

  return (
    <div className="animate-fade-in content-wrapper" style={{ maxWidth: '600px' }}>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="gradient-text" style={{ fontSize: 'clamp(1.2rem, 5vw, 1.5rem)', margin: 0 }}>Quiz</h2>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Question {currentQuestionIndex + 1} of {quiz.length}</span>
        </div>
        <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
          <div 
            style={{ 
              height: '100%', 
              background: 'linear-gradient(90deg, var(--primary), var(--secondary))', 
              width: `${((currentQuestionIndex + (isAnswered ? 1 : 0)) / quiz.length) * 100}%`,
              transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }} 
          />
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2.5rem' }}>
        <h3 style={{ marginBottom: '1.5rem', lineHeight: 1.4 }}>
           <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
            {currentQuestion.text}
          </ReactMarkdown>
        </h3>

        {currentQuestion.type === 'multiple-choice' ? (
          <div className="flex flex-col gap-5">
            {currentQuestion.options.map((option, i) => (
              <div 
                key={i}
                className={`btn btn-outline ${selectedOption === option ? (isCorrect ? 'is-correct' : 'is-incorrect') : ''}`}
                style={{ 
                  justifyContent: 'flex-start',
                  borderColor: selectedOption === option ? (isCorrect ? 'var(--accent)' : 'var(--danger)') : 'var(--border-light)',
                  background: selectedOption === option ? (isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)') : 'rgba(255, 255, 255, 0.05)',
                  cursor: isAnswered ? 'default' : 'pointer',
                  padding: '1rem',
                  fontSize: '1rem'
                }}
                onClick={() => handleMCQSelect(option)}
              >
                <div style={{ 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  border: '1px solid currentColor',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '0.5rem',
                  fontSize: '0.8rem',
                  flexShrink: 0
                }}>
                  {String.fromCharCode(65 + i)}
                </div>
                <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]} components={MarkdownComponents}>
                  {option}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        ) : (
          <form onSubmit={handleInputSubmit} className="flex gap-4">
            <input 
              type="text" 
              className="input-base"
              placeholder="Your answer..."
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={isAnswered}
            />
            {!isAnswered && (
              <button type="submit" className="btn btn-primary">Check</button>
            )}
          </form>
        )}

        {isAnswered && (
          <div className="mt-12 animate-fade-in">
            <div 
              className="mb-12"
              style={{ 
                padding: '1.25rem', 
                borderRadius: '12px', 
                background: isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                display: 'flex',
                gap: '1.25rem',
                border: `1px solid ${isCorrect ? 'var(--accent)' : 'var(--danger)'}`,
              }}
            >
              <div style={{ flexShrink: 0 }}>
                {isCorrect ? <CheckCircle2 color="var(--accent)" size={24} /> : <XCircle color="var(--danger)" size={24} />}
              </div>
              <div>
                <p style={{ fontWeight: 800, margin: 0, marginBottom: '0.25rem', color: isCorrect ? 'var(--accent)' : 'var(--danger)', fontSize: '1.1rem' }}>
                  {isCorrect ? 'Correct!' : 'Not quite. Let\'s review:'}
                </p>
                <div style={{ margin: 0, color: '#fff', lineHeight: 1.5 }}>
                  <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                    {currentQuestion.explanation}
                  </ReactMarkdown>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              {!isCorrect && (
                <button className="btn btn-outline" onClick={handleRetry} style={{ gap: '0.5rem' }}>
                  <RotateCcw size={16} /> Try Again
                </button>
              )}
              <button 
                className={`btn ${isCorrect ? 'btn-primary' : 'btn-outline'}`} 
                onClick={handleNext}
                style={{ marginLeft: 'auto' }}
              >
                {currentQuestionIndex < quiz.length - 1 ? 'Next Question' : 'Finish Quiz'} <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
