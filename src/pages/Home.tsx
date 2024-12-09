import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { Products } from '../components/home/Products';

export const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Products />
    </main>
  );
};