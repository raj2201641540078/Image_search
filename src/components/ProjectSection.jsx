import React from 'react'
import ProjectCard from './ProjectCard'


//data for the project cards
const projectsData=[

  {
  id: 1,
  title: "InterviewX",
  description: "AI-powered interview platform that simulates real interviews with voice-based interaction and structured feedback.",
  image: "/InterviewX.png",
  url:""
},
{
  id: 2,
  title: "Blogify",
  description: "Full-stack blogging platform with authentication, role-based access, and rich content management features.",
  image: "/Blogify.png",
  url:""
},
{
  id: 3,
  title: "BubbleBrain",
  description: "A personal knowledge management app to store, organize, and revisit ideas with a clean and intuitive UI.",
  image: "/BubbleBrain.png",
  url:""
},

{
  id: 5,
  title: "Netflix UI Clone",
  description: "A responsive Netflix-inspired UI clone focusing on modern layouts, animations, and component-based design.",
  image: "/NetflixClone.png",
  url:""
},
{
  id: 6,
  title: "JWT Authentication",
  description: "Secure authentication system implementing JWT-based login, protected routes, and role-based authorization.",
  image: "/JWT_Authentication.png",
  url:""
},
{
  id: 7,
  title: "React Task Management App",
  description: "Task management application built with React featuring CRUD operations and intuitive state handling.",
  image: "/React_Task_Management_App.png",
  url:""
},
{
  id: 8,
  title: "X.com UI Clone",
  description: "Pixel-perfect UI clone of X.com (Twitter) built to practice responsive design and modern frontend techniques.",
  image: "/X.comClone.png",
  url:""
}
]

const ProjectSection = () => {
  return (
    <div>
        <div className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">My Projects</div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {projectsData.map((project)=> <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} url={project.url}></ProjectCard>)}
        </div>
      
    </div>
  )
}

export default ProjectSection
