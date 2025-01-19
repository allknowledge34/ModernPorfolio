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


const aboutItems = [
    {
      label: 'Project done',
      number: 40
    },
    {
      label: 'Years of experience',
      number: 3
    }
  ];

const About =() => {
    return (
        <section
         id="about"
         className="section"
        >
            <div className="container">
              <div className="bg-zinc-800/50 p-7 rounded-2xl
              md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 ">
                Welcome! I&apos;m Sachin, a professional App developer and web developer with a knack for crafting visually stunning and highly functional App and websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.
                </p>

                <div className="flex flex-wrap items-center gap-4
                md:gap-7">
                    {
                        aboutItems.map(({ label, number }, key) =>(
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold
                                    md:text-4xl">{number}</span>
                                    <span className="text-purple-400
                                    font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img
                       src="/images/logo.svg"
                       alt="Logo"
                       width={30}
                       height={30}
                       className="ml-auto md:w-[40px] md:h-[40px]"
                    />
                </div>
                </div>
            </div>



        </section>
    )
}

export default About