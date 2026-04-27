import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Solutions from '../components/Solutions';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import UsefulLinks from '../components/UsefulLinks';

const Home = () => {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Solutions />
      <Stats />
      <UsefulLinks />
      <Testimonials />
    </main>
  );
};

export default Home;
