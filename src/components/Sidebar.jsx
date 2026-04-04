import React from 'react';
import { BookOpen, TrendingUp, RotateCcw, Layers, Award } from 'lucide-react';

const icons = {
  BookOpen,
  TrendingUp,
  RotateCcw,
  Layers
};

export default function Sidebar({ lessons, currentLessonId, setCurrentLessonId, scores, isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2 className="gradient-text" style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>SAT Math</h2>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>Percentages Masterclass</p>
      </div>
      
      <div className="sidebar-nav">
        {lessons.map(lesson => {
          const Icon = icons[lesson.icon] || BookOpen;
          const score = scores[lesson.id] || { correct: 0, total: lesson.quiz.length };
          const isFinished = score.correct === score.total && score.total > 0;
          
          return (
            <div 
              key={lesson.id} 
              className={`nav-item ${currentLessonId === lesson.id ? 'active' : ''}`}
              onClick={() => setCurrentLessonId(lesson.id)}
            >
              <Icon size={18} />
              <span style={{ flex: 1, fontWeight: 500 }}>{lesson.title}</span>
              {isFinished && <Award size={16} color="#10b981" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
