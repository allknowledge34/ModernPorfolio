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
import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: '/images/Jetpack compose.svg',
    label: 'JetpackCompose',
    desc: 'Android UI Development Toolkit'
  },
  {
    imgSrc: '/images/firebase.svg',
    label: 'Firebase',
    desc: 'Database'
  },
  {
    imgSrc: '/images/Kotlin.svg',
    label: 'Kotlin',
    desc: 'Android Development'
  },
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'Versatility&Performance'
  },
  {
    imgSrc: '/images/python.svg',
    label: 'Python',
    desc: 'Simple & Powerful Programming'
  },
  {
    imgSrc: '/images/unreal.svg',
    label: 'Unreal Engine 5',
    desc: 'Next-Level Game Development'
  },    
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/django.svg',
      label: 'Django',
      desc: 'Powerful Web Framework'
    },    
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },    
    {
      imgSrc: '/images/premiere pro.svg',
      label: 'Premiere Pro',
      desc: 'Professional Video Editing'
    },    
    {
      imgSrc: '/images/capcut.svg',
      label: 'CapCut',
      desc: 'Video Editing Simplified'
    },
    {
      imgSrc: '/images/photoshop.svg',
      label: 'Photoshop',
      desc: 'Creative Image Editing'
    },
    
  ];
const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                  Essential Tools I use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                  Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) =>
                        (
                          <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                            />
                        ))
                        
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill