import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Lesson({ lesson, onStartQuiz }) {
  if (!lesson) return null;

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="gradient-text">{lesson.title.split('. ')[1]}</h1>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <ReactMarkdown 
            remarkPlugins={[remarkMath]} 
            rehypePlugins={[rehypeKatex]}
            components={{
              h1: ({node, ...props}) => <h2 style={{marginTop: '2rem', color: '#fff'}} {...props} />,
              h2: ({node, ...props}) => <h3 style={{marginTop: '1.5rem', color: 'var(--primary)'}} {...props} />,
              p: ({node, ...props}) => <p style={{fontSize: '1.1rem', marginBottom: '1.2rem'}} {...props} />,
              li: ({node, ...props}) => <li style={{marginBottom: '0.5rem', color: 'var(--text-muted)'}} {...props} />,
              code: ({node, inline, ...props}) => (
                <code 
                  style={{
                    background: 'rgba(59, 130, 246, 0.1)', 
                    padding: '0.2rem 0.4rem', 
                    borderRadius: '4px',
                    color: 'var(--primary)'
                  }} 
                  {...props} 
                />
              )
            }}
          >
            {lesson.content}
          </ReactMarkdown>
        </div>
      </div>

      <div className="mb-8">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <CheckCircle2 color="var(--accent)" /> Worked Examples
        </h2>
        {lesson.examples.map((example, i) => (
          <div key={i} className="glass-panel mt-4" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
            <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Example {i + 1}: {example.question}</h4>
            <div style={{ paddingLeft: '1rem', borderLeft: '1px solid var(--border-light)' }}>
              {example.steps.map((step, si) => (
                <div key={si} className="flex gap-2 mb-2">
                  <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{si + 1}.</span>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-4" style={{ fontWeight: 700, color: '#fff' }}>
              Final Answer: <span style={{ color: 'var(--accent)' }}>{example.answer}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AlertCircle color="var(--danger)" /> Common Mistakes
        </h2>
        <div className="glass-panel mt-4" style={{ padding: '1.5rem', background: 'rgba(239, 68, 68, 0.05)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
          <ul style={{ paddingLeft: '1.5rem' }}>
            {lesson.commonMistakes?.map((mistake, i) => (
              <li key={i} className="mb-2" style={{ color: 'var(--text-muted)' }}>{mistake}</li>
            ))}
            {(!lesson.commonMistakes || lesson.commonMistakes.length === 0) && (
              <li style={{ color: 'var(--text-muted)' }}>No common mistakes listed for this topic. Stay focused!</li>
            )}
          </ul>
        </div>
      </div>

      <div className="flex flex-stack-mobile justify-between items-center mt-12 p-8 glass-panel text-center-mobile" style={{ background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))', gap: '1.5rem' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Ready to test your knowledge?</h3>
          <p style={{ margin: 0 }}>Take the {lesson.title.split('. ')[1]} quiz</p>
        </div>
        <button className="btn btn-primary" onClick={onStartQuiz} style={{ width: '100%', maxWidth: '300px' }}>
          Start Quiz <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
