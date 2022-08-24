import React, { Component } from 'react';
import './App.css';
import data from "./data.json";
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Courses from './components/Courses';
import Experience from './components/Experience';

function Resume() {

  const { header, about, education, skills, courses, experience } = data;
  
  return (
    <div className="break-normal m-14">
      <Header data={ header } />
      <div className='bg-white opacity-90 p-16 text-black p-10'>
        <About data={ about } />
        <div className='flex'>
          <div className='w-9/12'>
            <Education data={ education } />
            <Skills data={ skills } />
            <Courses data={ courses } />
          </div>
          <div className='w-full'>
            <Experience data={ experience } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
