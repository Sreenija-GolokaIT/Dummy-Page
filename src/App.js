// src/App.js
import React from 'react';
import JobCard from './components/JobCard';

function App() {
  return (
    <div className="App">
      <JobCard
        title="Office Manager"
        company="Exoticca"
        experience="3 years"
        location="Barcelona, Catalonia, Spain"
        category="People"
        type="Full time"
        datePosted="1 day"
      />
      <JobCard
        title="Team lead"
        experience="2 years"
        location="San Jacinto, California, United States"
        category="Administrative"
        type="Full time"
        datePosted="5 days"
      />
      <JobCard
        title="Software engineer intern"
        company="Brady Martz and Associates"
        experience="5 years"
        location="Grand Forks, North Dakota, United States"
        type="Full time"
        datePosted="8 days"
      />
      <JobCard
        title="Data Scientist Intern"
        company="GolokaIT"
        experience="5 years"
        location="Mumbai"
        type="Full time"
        datePosted="8 days"
      />
      <JobCard
        title="Data Scientist Intern"
        company="GolokaIT"
        experience="5 years"
        location="Mumbai"
        type="Full time"
        datePosted="8 days"
      />
    </div>
  );
}

export default App;
