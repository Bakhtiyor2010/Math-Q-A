import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, ChevronRight, Award } from 'lucide-react';

export default function Quiz({ quiz, onFinish }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

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
    const correct = answer.toString().toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
    setIsCorrect(correct);
    setIsAnswered(true);
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      resetState();
    } else {
      onFinish(score + (isCorrect ? 1 : 0), quiz.length);
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
          <h2 className="gradient-text" style={{ fontSize: '1.5rem', margin: 0 }}>Quiz</h2>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Question {currentQuestionIndex + 1} of {quiz.length}</span>
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
        <h3 style={{ marginBottom: '1.5rem', lineHeight: 1.4 }}>{currentQuestion.text}</h3>

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
                  cursor: isAnswered ? 'default' : 'pointer'
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
                  fontSize: '0.8rem'
                }}>
                  {String.fromCharCode(65 + i)}
                </div>
                {option}
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
                <p style={{ margin: 0, color: '#fff', lineHeight: 1.5 }}>{currentQuestion.explanation}</p>
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
