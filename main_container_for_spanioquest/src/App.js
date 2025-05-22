import React, { useState } from 'react';
import './App.css';

// Import components
import Header from './components/Header';
import ProgressArea from './components/ProgressArea';
import LessonCard from './components/LessonCard';
import Navigation from './components/Navigation';
import CharacterMascot from './components/CharacterMascot';

// Import mock data
import { userProgress, lessons } from './data/mockData';

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
            <span>{userProgress.streak} días</span>
          </div>
          <button className="btn btn-blue">Continuar</button>
        </div>
        
        <ProgressArea 
          progress={userProgress.xpToday} 
          goal={userProgress.dailyGoal} 
        />
        
        <div className="progress-section" style={{ marginTop: '24px' }}>
          <h2 className="section-title">Lecciones 🎓</h2>
          
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
