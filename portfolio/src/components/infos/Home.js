/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { DiGithubBadge } from 'react-icons/di'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

import Plane from './Plane'

const Home = () => {
  
  const name = 'Simon R.T. Neil'

  const infoAboutMe = [
    "I'm a software engineer with a background in product management and scientific publishing.",
    "My first taste of programming was during my DPhil (PhD) at the University of Oxford. There, I designed and programmed instruments that helped to uncover the chemistry and physics of bird navigation. I also developed a passion for publishing my results, which led me to become the editor for a portfolio of scientific journals. As an editor, I collaborated with software engineers, data scientists and UX designers to develop journal products that our readers and authors loved.",
    "The technology-driven change I experienced in the scientific publishing industry inspired me to return to programming. After completing a Software Engineering Immersive at General Assembly, I joined Dunelm as a Site Reliability Engineer, where I use my skills for problem solving and analysis in an environment that encourages learning and creative, curious thinking."
  ]

  return (
    <>
      <Plane name={name} info={infoAboutMe}>
      </Plane>
      <div className='about-outer-container'>
        <div className="glitch name content-border" data-text={name}>
          {name}
          <div>
            <a href="https://github.com/Simon994" target="blank">
              <DiGithubBadge className="about-icon github"/>
            </a>
            <a href="https://www.linkedin.com/in/simonrtneil/" target="blank">
              <TiSocialLinkedinCircular className="about-icon linkedin"/>
            </a>
          </div>
        </div>
        <div className="paras-container">
          <p className="glitch info-about content-border" data-text={infoAboutMe[0]}>
            {infoAboutMe[0]}
          </p>
          <p className="glitch info-about content-border" data-text={infoAboutMe[1]}>
            {infoAboutMe[1]}
          </p>
          <p className="glitch info-about content-border" data-text={infoAboutMe[2]}>
            {infoAboutMe[2]}
          </p>
        </div>
      </div>
    </>
  )
}

export default Home