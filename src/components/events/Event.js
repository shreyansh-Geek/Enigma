import React from 'react';
import Countdown from '../Countdown/Countdown';
import './Event.css';

const events = [
  {
    title: 'CodeQuest 1 Coding Contest',
    date: '2026-01-31T21:00:00',
    description:'Compete with your peers, sharpen your skills, and see where you stand.',
    link: 'https://forms.gle/XGm33VqJthW12XSm8',
    status:'open',
  },
  { 
    title: 'Enigma CP Cohort 2026',
    date: '2026-01-05T00:00:00',
    description:'Community Cohort for CP Practitioners',
    link: 'https://forms.gle/XGm33VqJthW12XSm8',
    status:'closed',
  },
  {
    title: 'Enigma Open-Source Program',
    date: '2026-01-05T00:00:00',
    description:'Build with us with the power of Open Source. Research grade, ML based projects from the Enigma Community.',  
    link:'https://forms.gle/XGm33VqJthW12XSm8',
    status:'closed',
  },
  {
    title: 'Enigma Orientation 2025',
    date: '2025-11-08T10:00:00',
    description:
      'Kickstart your AIML journey with Enigma’s Orientation! Discover what we do, meet the core team, and explore how you can learn, build, and innovate with us throughout the year.',
    link: 'https://luma.com/bootkui1',
    status: 'closed',
  },
  {
    title: 'GenAI Hackathon 2025',
    date: '2025-11-29T00:00:00',
    description:
      'Participate in our flagship Generative AI Hackathon — build innovative AI solutions and collaborate with the best minds.',
    link: 'https://forms.gle/XGm33VqJthW12XSm8',
    status: 'closed',
  },
  {
    title: 'Kaggle ML Competition',
    date: '2025-11-22T00:00:00',
    description:
      'Join our Kaggle-style machine learning challenge. Train models, optimize accuracy, and climb the leaderboard.',
    link: 'https://forms.gle/XGm33VqJthW12XSm8',
    status: 'closed',
  },
  {
    title: 'AI Model Sprint',
    date: '2024-12-05T00:00:00',
    description: 'Build and train machine learning models in a 5-hour sprint.',
    status: 'closed',
  },
  {
    title: 'Neural Hackathon 2.0',
    date: '2025-01-10T00:00:00',
    description: 'Team up and develop innovative AI/ML projects in 24 hours.',
    status: 'closed',
  },
  {
    title: 'AI/ML Bootcamp',
    date: '2025-02-15T00:00:00',
    description:
      'Learn advanced ML techniques, data preprocessing, and model optimization.',
    status: 'closed',
  },
  {
    title: 'Deep Learning Challenge',
    date: '2025-03-20T00:00:00',
    description:
      'Train deep neural networks on real-world datasets and compete for top accuracy.',
    status: 'closed',
  },
];

const Events = () => {
  const handleRegister = (link) => window.open(link, '_blank');

  const openEvents = events.filter((event) => event.status === 'open');
  const closedEvents = events.filter((event) => event.status === 'closed');

  const renderCard = (event, index) => (
    <div key={index} className={`event-card ${event.status}`}>
      <div className="event-card-content">
        <div className="event-header">
          <h2>{event.title}</h2>
          <span className={`status ${event.status}`}>
            {event.status === 'open' ? 'Open' : 'Closed'}
          </span>
        </div>

        <p className="event-date">{new Date(event.date).toDateString()}</p>
        <p className="event-description">{event.description}</p>

        {event.status === 'open' ? (
          <>
            <Countdown eventDate={event.date} />
            <button
              className="register-btn"
              onClick={() => handleRegister(event.link)}
            >
              Register Now
            </button>
          </>
        ) : (
          <p className="closed-msg">Registrations Closed</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="events-container">
      <h1 className="events-heading">Events & Competitions</h1>

      {/* Active / Open Events */}
      {openEvents.length > 0 && (
        <>
          <h2 className="sub-heading">Active Events</h2>
          <div className="events-grid">{openEvents.map(renderCard)}</div>
        </>
      )}

      {/* Closed Events */}
      {closedEvents.length > 0 && (
        <>
          <h2 className="sub-heading">Past Events</h2>
          <div className="events-grid">{closedEvents.map(renderCard)}</div>
        </>
      )}
    </div>
  );
};

export default Events;
