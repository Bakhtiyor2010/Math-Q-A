import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';

const MarkdownComponents = {
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
};

export default function Lesson({ lesson, onStartQuiz }) {
  if (!lesson) return (
    <div className="flex items-center justify-center h-full">
      <p>Loading lesson...</p>
    </div>
  );

  const displayTitle = lesson.title?.includes('. ') ? lesson.title.split('. ')[1] : lesson.title;

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="gradient-text" style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', lineHeight: 1.2 }}>{displayTitle}</h1>
        <div className="glass-panel" style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
          <ReactMarkdown 
            remarkPlugins={[remarkMath, remarkGfm]} 
            rehypePlugins={[rehypeKatex]}
            components={MarkdownComponents}
          >
            {lesson.content}
          </ReactMarkdown>
        </div>
      </div>

      <div className="mb-8">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <CheckCircle2 color="var(--accent)" /> Worked Examples
        </h2>
        {lesson.examples?.map((example, i) => (
          <div key={i} className="glass-panel mt-4" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
            <h4 style={{ color: '#fff', marginBottom: '1rem' }}>
              Example {i + 1}: {' '}
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={MarkdownComponents}>
                {example.question}
              </ReactMarkdown>
            </h4>
            <div style={{ paddingLeft: '1rem', borderLeft: '1px solid var(--border-light)' }}>
              {example.steps?.map((step, si) => (
                <div key={si} className="flex gap-2 mb-2">
                  <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{si + 1}.</span>
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={MarkdownComponents}>
                    {step}
                  </ReactMarkdown>
                </div>
              ))}
            </div>
            <div className="mt-4" style={{ fontWeight: 700, color: '#fff' }}>
              Final Answer: 
              <span style={{ color: 'var(--accent)', marginLeft: '0.5rem' }}>
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={MarkdownComponents}>
                  {example.answer}
                </ReactMarkdown>
              </span>
            </div>
          </div>
        ))}
      </div>

      {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
        <div className="mb-8">
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <AlertCircle color="var(--danger)" /> Common Mistakes
          </h2>
          <div className="glass-panel mt-4" style={{ padding: '1.5rem', background: 'rgba(239, 68, 68, 0.05)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {lesson.commonMistakes.map((mistake, i) => (
                <li key={i} className="mb-2" style={{ color: 'var(--text-muted)' }}>{mistake}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="flex flex-stack-mobile justify-between items-center mt-12 p-8 glass-panel text-center-mobile" style={{ background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))', gap: '1.5rem' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Ready to test your knowledge?</h3>
          <p style={{ margin: 0 }}>Take the {displayTitle} quiz</p>
        </div>
        <button className="btn btn-primary" onClick={onStartQuiz} style={{ width: '100%', maxWidth: '300px' }}>
          Start Quiz <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
