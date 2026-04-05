import React from 'react';
import { 
  BookOpen, TrendingUp, RotateCcw, Layers, Award, Shield, Target, 
  Calculator, Brain, Percent, Activity, Zap, Move, LineChart, Edit, Table
} from 'lucide-react';

const icons = {
  BookOpen,
  TrendingUp,
  RotateCcw,
  Layers,
  Shield,
  Target,
  Calculator,
  Brain,
  Percent,
  Activity,
  Zap,
  Move,
  LineChart,
  Edit,
  Table
};

export default function Sidebar({ lessons, topicTitle, currentLessonId, setCurrentLessonId, scores, isOpen, onGoHome }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header" style={{ cursor: 'pointer' }} onClick={onGoHome}>
        <h2 className="gradient-text" style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>SAT Math</h2>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>{topicTitle}</p>
      </div>
      
      <div className="sidebar-nav">
        {lessons.map(lesson => {
          const Icon = icons[lesson.icon] || BookOpen;
          const score = scores[lesson.id] || { correct: 0, total: lesson.quiz?.length || 0 };
          const isFinished = score.correct === score.total && score.total > 0;
          
          const displayTitle = lesson.title.includes('. ') ? lesson.title.split('. ')[1] : lesson.title;
          
          return (
            <div 
              key={lesson.id} 
              className={`nav-item ${currentLessonId === lesson.id ? 'active' : ''}`}
              onClick={() => setCurrentLessonId(lesson.id)}
            >
              <Icon size={18} />
              <span style={{ flex: 1, fontWeight: 500 }}>{displayTitle || lesson.title}</span>
              {isFinished && <Award size={16} color="#10b981" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
