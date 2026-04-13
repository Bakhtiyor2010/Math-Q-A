import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import TopicApp from './components/TopicApp';
import { lessons as percentagesLessons } from './data/lessonData';
import { exponentialLessons } from './data/exponentialData';
import { systemsLessons } from './data/systemsData';
import { inequalityLessons } from './data/inequalitiesData';
import { linearLessons } from './data/linearFunctionsData';
import { equationLessons } from './data/equationsData';
import { quadraticsLessons } from './data/quadraticsData';

export default function App() {
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const topicParam = params.get('topic');
    if (topicParam) {
      setTopic(topicParam);
    }
  }, []);

  const handleGoHome = () => {
    window.history.pushState({}, '', '/');
    setTopic(null);
  };

  if (topic === 'percentages') {
    return <TopicApp topicTitle="Percentages" lessons={percentagesLessons} onGoHome={handleGoHome} />;
  }

  if (topic === 'exponential-functions') {
    return <TopicApp topicTitle="Exponential Functions" lessons={exponentialLessons} onGoHome={handleGoHome} />;
  }

  if (topic === 'systems-of-equations') {
    return <TopicApp topicTitle="Systems of Equations" lessons={systemsLessons} onGoHome={handleGoHome} />;
  }

  if (topic === 'inequalities') {
    return <TopicApp topicTitle="Inequalities" lessons={inequalityLessons} onGoHome={handleGoHome} />;
  }

  if (topic === 'linear-functions') {
    return <TopicApp topicTitle="Linear Functions" lessons={linearLessons} onGoHome={handleGoHome} />;
  }

  if (topic === 'equations') {
    return <TopicApp topicTitle="Equations" lessons={equationLessons} onGoHome={handleGoHome} />;
  }

  if (topic === 'quadratics') {
    return <TopicApp topicTitle="Quadratics Mastery" lessons={quadraticsLessons} onGoHome={handleGoHome} />;
  }

  return <Home />;
}
