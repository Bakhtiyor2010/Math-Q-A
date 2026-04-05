import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import TopicApp from './components/TopicApp';
import { lessons as percentagesLessons } from './data/lessonData';
import { exponentialLessons } from './data/exponentialData';
import { systemsLessons } from './data/systemsData';

export default function App() {
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const topicParam = params.get('topic');
    if (topicParam) {
      setTopic(topicParam);
    }
  }, []);

  if (topic === 'percentages') {
    return <TopicApp topicTitle="Percentages" lessons={percentagesLessons} />;
  }

  if (topic === 'exponential-functions') {
    return <TopicApp topicTitle="Exponential Functions" lessons={exponentialLessons} />;
  }

  if (topic === 'systems-of-equations') {
    return <TopicApp topicTitle="Systems of Equations" lessons={systemsLessons} />;
  }

  return <Home />;
}
