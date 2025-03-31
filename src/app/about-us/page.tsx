import React from 'react';

const About: React.FC = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-between">
      <header className="text-center p-8 bg-blue-500 w-full">
        <h1 className="text-4xl font-bold text-white">Abhishek Pundir</h1>
        <p className="text-xl text-white mt-4">Software Developer | React & Next.js</p>
      </header>

      <main className="flex flex-col items-center space-y-10 p-8 w-full max-w-5xl">
      <section className="w-full bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
          <p className="text-gray-600 mt-4">
            Hi! I'm a web developer with a strong focus on building responsive, dynamic websites using technologies like React.js, Next.js, Tailwind CSS, and more.
            With years of experience, I specialize in creating seamless user experiences and performant web applications. 
            I'm passionate about learning and growing in the tech field, and I'm always up for new challenges.
          </p>
        </section>

        {/* Core Competencies Section */}
        <section className="w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800">Core Competencies</h2>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li>User Interface Design</li>
            <li>Front-End Development</li>
            <li>Performance Optimization</li>
            <li>Responsive Web Design</li>
            <li>Agile Methodologies</li>
            <li>Code Quality Assurance</li>
            <li>Data Management Strategies</li>
            <li>User Experience Enhancement</li>
            <li>Component Reusability</li>
            <li>Cross-Functional Collaboration</li>
          </ul>
        </section>

        {/* Technical Skills Section */}
        <section className="w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800">Technical Skills</h2>
          <ul className="grid grid-cols-2 gap-6 mt-4 text-gray-600">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Redux Toolkit</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Context API</li>
            <li>Material UI</li>
            <li>Webpack</li>
            <li>SCSS</li>
            <li>Shadcn</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>API Integration</li>
            <li>Postman</li>
            <li>Git</li>
            <li>Nodejs</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Jest</li>
            <li>GitHub</li>
            <li>Firebase</li>
          </ul>
        </section>


    

      </main>

    </div>
  );
}

export default About;
