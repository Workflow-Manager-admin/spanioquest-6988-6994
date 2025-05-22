import React, { useState } from 'react';
import './App.css';

// Import components
import Header from './components/Header';
import ProgressArea from './components/ProgressArea';
import LessonCard from './components/LessonCard';
import Navigation from './components/Navigation';
import CharacterMascot from './components/CharacterMascot';
import TranslatableText from './components/TranslatableText';
import CreateFamilyPrompt from './components/CreateFamilyPrompt';

// Import mock data and translation utils
import { userProgress, lessons } from './data/mockData';
import { getTranslation } from './utils/translationUtils';

function App() {
  const [activeTab, setActiveTab] = useState('learn');
  
  const handleLessonClick = (lesson) => {
    console.log(`Starting lesson: ${lesson.title}`);
    // In a real app, this would navigate to the lesson
  };
  
  const handleMascotClick = () => {
    const spanishMessage = '¡Hola! ¿Listo para aprender Español hoy?';
    const englishMessage = getTranslation(spanishMessage);
    alert(`${spanishMessage}\n\n(${englishMessage})`);
  };

  return (
    <div className="app">
      <Header username={userProgress.name} />

      <div className="main-container">
        <div className="streak-bar">
          <div className="streak-count">
            <span className="streak-icon">🔥</span>
            <span>
              {userProgress.streak} <TranslatableText text="días" />
            </span>
          </div>
          <button 
            className="btn btn-blue"
            title={getTranslation("Continuar")}
          >
            Continuar
          </button>
        </div>
        
        <CreateFamilyPrompt />
        
        <ProgressArea 
          progress={userProgress.xpToday} 
          goal={userProgress.dailyGoal} 
        />
        
        <div className="progress-section" style={{ marginTop: '24px' }}>
          <h2 className="section-title">
            <TranslatableText text="Lecciones" /> 🎓
          </h2>
          
          <div className="lessons-grid">
            {lessons.map((lesson) => (
              <LessonCard 
                key={lesson.id}
                title={lesson.title}
                description={lesson.description}
                icon={lesson.icon}
                onClick={() => handleLessonClick(lesson)}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Navigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <CharacterMascot onClick={handleMascotClick} />
    </div>
  );
}

export default App;
