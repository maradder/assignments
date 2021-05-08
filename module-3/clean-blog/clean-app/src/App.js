import React from 'react'
import './App.css';
import Header from './Header.js'
import BlogList from './BlogList'
import { Body, Hero, HeroH1, HeroH3 } from './styledComponents'
import FooterComponent from './FooterComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroH1>Clean Blog</HeroH1>
      <HeroH3>A Blog Theme by Start Bootstrap</HeroH3>
      <Hero className='Hero'/>
      <Body>
        <BlogList />
      </Body>
        <FooterComponent />
    </div>
  );
}

export default App;
