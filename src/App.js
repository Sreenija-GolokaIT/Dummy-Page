// src/App.js
import React from 'react';
import JobCard from './components/JobCard';

function App() {
  return (
    <div className="App">
      <JobCard
        title="Office Manager"
        experience="3 years"
        location="Mumbai"
        type="Full time"
        datePosted="1 day"
      />
      <JobCard
        title="Team lead"
        experience="2 years"
        location="Bangalore"
        type="Full time"
        datePosted="5 days"
      />
      <JobCard
        title="Software engineer intern"
        experience="5 years"
        location="Chennai"
        type="Part time"
        datePosted="8 days"
      />
      <JobCard
        title="Data Scientist Intern"
        experience="5 years"
        location="Mumbai"
        type="Full time"
        datePosted="8 days"
      />
      <JobCard
        title="Data Scientist Intern"
        experience="5 years"
        location="Mumbai"
        type="Full time"
        datePosted="8 days"
      />
    </div>
  );
}

export default App;
