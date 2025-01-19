// Copyright 2025 PREM
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Components
 */

import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-1.png',
      title: 'Game-Online Shopping App',
      tags: ['Android App', 'Development'],
      projectLink: 'https://github.com/allknowledge34/GameS.git'
    },
    {
      imgSrc: '/images/project-2.png',
      title: 'Jewels Game',
      tags: ['Game', 'Development'],
      projectLink: 'https://github.com/allknowledge34/JewelsGame.git'
    },
    {
      imgSrc: '/images/project-3.png',
      title: 'Social Media Website[Buzzy Bird]',
      tags: ['Development', 'API'],
      projectLink: 'https://github.com/allknowledge34/BuzzyBird.git'
    },
    {
      imgSrc: '/images/project-4.png',
      title: 'Ai HealthCare App [WealthZen]',
      tags: ['Android App', 'Development'],
      projectLink: 'https://github.com/allknowledge34/WealthZen.git'
    },
    {
      imgSrc: '/images/project-5.png',
      title: 'Jarvis Ai',
      tags: ['Ai', 'Development'],
      projectLink: 'https://github.com/allknowledge34/Jarvis-ai.git'
    },
    {
      imgSrc: '/images/project-6.png',
      title: '3D Animation Website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/allknowledge34/3d-Website.git'
    },
    {
      imgSrc: '/images/project-7.png',
      title: 'ChatBoot Ai App',
      tags: ['Android App', 'Development'],
      projectLink: 'https://github.com/allknowledge34/ChatBootApp.git'
    },
    {
      imgSrc: '/images/project-8.png',
      title: 'Thumbnail Design',
      tags: ['Thumbnail Design', 'Graphic Design'],
      projectLink: 'https://youtube.com/live/aANZZHSFREQ'
    },
    {
        imgSrc: '/images/project-10.png',
        title: 'Short Video Editing',
        tags: ['Video Editing', 'Content Creation'],
        projectLink: 'https://youtube.com/shorts/9IaHDNYfmRY'
      },
    
  ];


const Work = () => {
    return (
        <section
        id="work"
        className="section"
        >
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                   My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                      <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                      /> 
                    ))}
</div>

            </div>
        </section>
    )
}

export default Work