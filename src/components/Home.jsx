import React from 'react';
import { BookOpen, TrendingUp, Calculator, Brain, Award, ChevronRight, GraduationCap, Shield, LineChart } from 'lucide-react';

const topics = [
  {
    id: 'percentages',
    title: 'Percentages',
    description: 'Master fractions, decimals, percent change, and direct translation.',
    icon: <TrendingUp size={32} />,
    color: 'var(--primary)',
    path: '/?topic=percentages'
  },
  {
    id: 'exponential-functions',
    title: 'Exponential Functions',
    description: 'Understand growth, decay, and interpreting complex equations.',
    icon: <Calculator size={32} />,
    color: 'var(--secondary)',
    path: '/?topic=exponential-functions'
  },
  {
    id: 'systems-of-equations',
    title: 'Systems of Equations',
    description: 'Solve linear systems using substitution, elimination, and special cases.',
    icon: <Brain size={32} />,
    color: 'var(--accent)',
    path: '/?topic=systems-of-equations'
  },
  {
    id: 'inequalities',
    title: 'Inequalities',
    description: 'Solve, graph, and interpret linear and absolute value inequalities.',
    icon: <Shield size={32} />,
    color: 'var(--primary)',
    path: '/?topic=inequalities'
  },
  {
    id: 'linear-functions',
    title: 'Linear Functions',
    description: 'Master slope, intercept, and standard linear modeling techniques.',
    icon: <LineChart size={32} />,
    color: 'var(--secondary)',
    path: '/?topic=linear-functions'
  },
  {
    id: 'equations',
    title: 'Equations',
    description: 'Solve linear, multi-step, absolute value, and basic equations.',
    icon: <Calculator size={32} />,
    color: 'var(--accent)',
    path: '/?topic=equations'
  },
  {
    id: 'quadratics',
    title: 'Quadratics Mastery',
    description: 'Master standard, vertex, and factored forms, discriminant, and shortcuts.',
    icon: <Brain size={32} />,
    color: 'var(--primary)',
    path: '/?topic=quadratics'
  }
];

export default function Home() {
  const handleTopicClick = (path) => {
    window.open(path, '_blank');
  };

  return (
    <div className="home-container animate-fade-in">
      <header className="home-header">
        <div className="logo-section">
          <GraduationCap size={40} color="var(--primary)" />
          <h2 className="gradient-text">SAT Math Prep</h2>
        </div>
      </header>

      <main className="home-content">
        <section className="hero-section">
          <h1 className="hero-title gradient-text">Master the SAT Math</h1>
          <p className="hero-subtitle">Structured lessons and interactive practice to help you achieve a 1600.</p>
        </section>

        <div className="topics-grid">
          {topics.map((topic) => (
            <div 
              key={topic.id} 
              className="topic-card glass-panel"
              onClick={() => handleTopicClick(topic.path)}
              style={{ '--topic-color': topic.color }}
            >
              <div className="topic-icon-wrapper" style={{ backgroundColor: topic.color + '20' }}>
                <div style={{ color: topic.color }}>{topic.icon}</div>
              </div>
              <h3 className="topic-title">{topic.title}</h3>
              <p className="topic-description">{topic.description}</p>
              <div className="topic-footer">
                <span className="topic-action">Start Learning <ChevronRight size={16} /></span>
              </div>
            </div>
          ))}
        </div>

      </main>

      <footer className="home-footer">
        <p>© 2026 SAT Math Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
