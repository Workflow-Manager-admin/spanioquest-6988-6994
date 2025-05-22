import React, { useState } from 'react';
import './App.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

// Import components
import Header from './components/Header';
import ProgressArea from './components/ProgressArea';
import LessonCard from './components/LessonCard';
import Navigation from './components/Navigation';
import CharacterMascot from './components/CharacterMascot';

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
    alert('¡Hola! ¿Listo para aprender Español hoy?');
  };

  return (
    <div className="app">
      <Header username={userProgress.name} />

      <div className="main-container">
        <div className="streak-bar">
          <div className="streak-count">
            <span className="streak-icon">🔥</span>
            <span>
              {userProgress.streak} <span className="translatable" data-translation={getTranslation("días")}>días</span>
            </span>
          </div>
          <button 
            className="btn btn-blue"
            data-tooltip-id="translation-tooltip" 
            data-tooltip-content={getTranslation("Continuar")}
          >
            Continuar
          </button>
        </div>
        
        <ProgressArea 
          progress={userProgress.xpToday} 
          goal={userProgress.dailyGoal} 
        />
        
        <div className="progress-section" style={{ marginTop: '24px' }}>
          <h2 
            className="section-title"
            data-tooltip-id="translation-tooltip" 
            data-tooltip-content={getTranslation("Lecciones")}
          >
            Lecciones 🎓
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
