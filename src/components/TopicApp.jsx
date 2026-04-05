import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Lesson from './Lesson';
import Quiz from './Quiz';
import { Award, ChevronRight, BookOpen, Brain, TrendingUp, History, Menu, X } from 'lucide-react';

export default function TopicApp({ topicTitle, lessons }) {
  const [currentLessonId, setCurrentLessonId] = useState(null);
  const [view, setView] = useState('intro'); // 'lesson' | 'quiz' | 'result' | 'intro'
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });
  const [userScores, setUserScores] = useState({}); // { lessonId: { correct, total } }
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentLesson = lessons.find(l => l.id === currentLessonId);

  useEffect(() => {
    if (topicTitle) {
      document.title = topicTitle;
    }
  }, [topicTitle]);

  const handleStartQuiz = () => setView('quiz');

  const handleFinishQuiz = (score, total) => {
    setQuizScore({ correct: score, total });
    setUserScores(prev => ({
      ...prev,
      [currentLessonId]: { correct: score, total }
    }));
    setView('result');
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const nextLesson = () => {
    const currentIndex = lessons.findIndex(l => l.id === currentLessonId);
    if (currentIndex < lessons.length - 1) {
      setCurrentLessonId(lessons[currentIndex + 1].id);
      setView('lesson');
    } else {
      setView('intro'); // Back to start or show "All Complete"
    }
  };

  return (
    <div className="app-container">
      <button className="menu-trigger" onClick={toggleSidebar}>
        {sidebarOpen ? <X /> : <Menu />}
      </button>

      <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(false)} />

      <Sidebar 
        lessons={lessons} 
        topicTitle={topicTitle}
        currentLessonId={currentLessonId} 
        setCurrentLessonId={(id) => { 
          setCurrentLessonId(id); 
          setView('lesson');
          setSidebarOpen(false);
        }}
        scores={userScores}
        isOpen={sidebarOpen}
      />
      
      <main className="main-content">
        <div className="content-wrapper">
          {view === 'intro' && (
            <div className="animate-fade-in text-center p-8">
              <h1 className="gradient-text" style={{ fontSize: '3.5rem' }}>{topicTitle}</h1>
              <p style={{ fontSize: '1.25rem', marginBottom: '3rem' }}>The complete course for a perfect score in Math.</p>
              
              <div className="flex flex-stack-mobile gap-6" style={{ marginBottom: '4rem', gap: '20px' }}>
                <div className="glass-panel p-8" style={{ flex: 1 }}>
                  <BookOpen size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                  <h3>Structured Lessons</h3>
                  <p>Step-by-step guides from basics to advanced SAT topics.</p>
                </div>
                <div className="glass-panel p-8" style={{ flex: 1 }}>
                  <Brain size={40} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
                  <h3>Interactive Quizzes</h3>
                  <p>Real SAT-style practice with instant feedback and explanations.</p>
                </div>
                <div className="glass-panel p-8" style={{ flex: 1 }}>
                  <Award size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                  <h3>Expert Content</h3>
                  <p>Curated from the best prep books, simplified for clarity.</p>
                </div>
              </div>

              <button className="btn btn-primary" onClick={() => { setView('lesson'); setCurrentLessonId(lessons[0].id); }} style={{ padding: '1rem 3rem', fontSize: '1.2rem', borderRadius: '12px' }}>
                Start Your Journey <ChevronRight />
              </button>
            </div>
          )}

          {view === 'lesson' && (
            <Lesson 
              lesson={currentLesson} 
              onStartQuiz={handleStartQuiz} 
            />
          )}

          {view === 'quiz' && (
            <Quiz 
              quiz={currentLesson.quiz} 
              onFinish={handleFinishQuiz} 
            />
          )}

          {view === 'result' && (
            <div className="animate-fade-in text-center">
              <div className="glass-panel" style={{ padding: '4rem 2rem' }}>
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2rem' }}>
                  <Award size={100} color={quizScore.correct === quizScore.total ? 'var(--accent)' : 'var(--primary)'} />
                  {quizScore.correct === quizScore.total && (
                    <div style={{ position: 'absolute', top: -10, right: -10 }} className="animate-fade-in">
                      ✨
                    </div>
                  )}
                </div>
                <h1 style={{ marginBottom: '0.5rem' }}>Lesson Complete!</h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '2.5rem' }}>
                  You scored <span className="gradient-text" style={{ fontWeight: 800 }}>{quizScore.correct} / {quizScore.total}</span>
                </p>
                
                <div className="flex gap-4 justify-center">
                  <button className="btn btn-outline" onClick={() => setView('quiz')} style={{ gap: '0.5rem' }}>
                    <History size={18} /> Review Quiz
                  </button>
                  <button className="btn btn-primary" onClick={nextLesson}>
                    {lessons.indexOf(currentLesson) === lessons.length - 1 ? 'Back to Intro' : 'Next Lesson'} <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
