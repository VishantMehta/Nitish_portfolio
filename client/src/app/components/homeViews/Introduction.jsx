import React from 'react';
import Image from "next/image";

const Introduction = () => {
  return (
    <section className=' py-24 max-w-6xl mx-auto'>
      <h2 className="text-4xl text-white mb-4 text-center font-medium">A bit about me</h2>

      <div className='space-y-8'>
        <div>
            <h3 className="text-3xl font-medium text-brand mb-4">Introduction</h3>
            <p className="text-white ">
            I'm a recent graduate from the University of Houston—go Coogs! I have a strong passion for all things 
            front-end and aspire to build a long-term career in this field. Beyond technical things, I enjoy working out, 
            cooking, trying new foods, and reading. I just started "The Design of Everyday Things!"
            </p>
            <p className="text-white mt-3 mb-4">
            Right now, I am diving deep into some research on UI/UX design for AI tools. I want to understand how to create a more transparent and human-centered 
            expiernece that make AI interactions more accessible.
            </p>
        </div>

        <div>
            <h3 className="text-3xl font-medium text-brand mb-4">Skills</h3>
            <div className="flex flex-wrap gap-8 justify-center">
            <SkillContainer />
            <FrameworkContainer />
            </div>
        </div>
        

       
      </div>
    </section>
  );
};

const SkillContainer = () => {
  const tech = [
    { name: "HTML", img: "/HTML.svg" },
    { name: "CSS", img: "/CSS.svg" },
    { name: "JavaScript", img: "/JS.svg" },
    { name: "TypeScript", img: "/TYPESCRIPT.svg" },
    { name: "Python", img: "/PYTHON.svg" },
    { name: "SQL", img: "/SQL.svg" }
  ];

  return (
    <div className="bg-opacity-77 p-4 rounded-lg max-w-sm shadow-lg">
      <h3 className="text-xl font-medium text-white text-center mb-4">Programming Languages</h3>
      <div className="grid grid-cols-3 gap-4">
        {tech.map((skill, index) => (
          <SkillBox key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const FrameworkContainer = () => {
  const tools = [
    { name: "React", img: "/REACT.svg" },
    { name: "NextJS", img: "/NEXT.svg" },
    { name: "Express", img: "/EXPRESS.svg" },
    { name: "MongoDB", img: "/MONGO.svg" },
    { name: "Node.js", img: "/NODE.svg" },
    { name: "Tailwind", img: "/TAILWIND.svg" },
    { name: "Bootstrap", img: "/BOOTSTRAP.svg" },
    { name: "WordPress", img: "/WORDPRESS.svg" },
    { name: "Contentful", img: "/CONTENTFUL.svg" },
    { name: "Figma", img: "/FIGMA.svg" },
    { name: "Miro", img: "/MIRO.svg" },
    { name: "Framer", img: "/FRAMER.svg" }
  ];

  return (
    <div className=" bg-opacity-77 p-4 rounded-lg max-w-md shadow-lg">
      <h3 className="text-xl font-medium text-white text-center mb-4">Frameworks & Tools</h3>
      <div className="grid grid-cols-3 gap-4">
        {tools.map((skill, index) => (
          <SkillBox key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillBox = ({ skill }) => (
  <div className="flex flex-col items-center justify-center bg-[#0E101B] bg-opacity-77 rounded-lg p-4 w-[100px] h-[100px] text-center shadow-md hover:shadow-lg transition-shadow duration-200">
    <Image src={skill.img} alt={skill.name} width={30} height={30} className="mb-2" />
    <p className="text-white text-sm truncate">{skill.name}</p>
  </div>
);

export default Introduction;
