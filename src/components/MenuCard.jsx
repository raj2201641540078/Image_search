import React from 'react'
import NavLink from './NavLink'

const navLinks=[
    {
        title:"About" ,
        path:"#about"
    } ,
    {
        title:"Projects" ,
        path:"#projects"
    } ,
    {
        title:"Contact" ,
        path:"#contact"

    } ,
]

const MenuCard = ({links}) => {
  return (
   <ul className="flex flex-col items-center">
    {links.map((link ,index)=>( 
        <li key={index}>
         <NavLink href={link.path} title={link.title}/>
           </li>
         ))}

   </ul>
  )
}

export default MenuCard
