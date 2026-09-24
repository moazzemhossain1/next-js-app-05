import Baner from '@/components/sharead/Baner';
import React from 'react';
import WorkoutsPage from './Workouts/page';

const HomePage = () => {
  return (
    <div>
      
      <WorkoutsPage />
      <Baner></Baner>
    </div>
  );
};

export default HomePage;