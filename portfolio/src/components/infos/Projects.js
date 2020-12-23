/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import redshirtsRun from '../../styles/screenshots/Redshirts_run_screenshot.png'
import newsFeed from '../../styles/screenshots/News_Feed_V2Global.png'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='projects-outer-container fade-in'>
      <div className='projects-cards-container'>
        <ProjectCard 
          className='project-card card-border'
          githubLink='https://github.com/Simon994/sei-project-1'
          imgLink={redshirtsRun}
          altText="Redshirt's run demo"
          titleText="Redshirt's run"
          infoText='A grid-based game built with JavaScript, HTML5, CSS3.'
          liveLink='https://simon994.github.io/sei-project-1/'
        />
        <ProjectCard 
          className='project-card card-border'
          githubLink='https://github.com/Simon994/news-feed-v2Global'
          imgLink={newsFeed}
          altText="NewsFeed demo"
          titleText="News Feed v2Global"
          infoText='A React app that consumes API data from GNews.'
          liveLink='https://the-news-feed-v2-global.netlify.app'
        />
        <div className='project-card'>

        </div>
      </div>
    </div>
  )
}

export default Projects