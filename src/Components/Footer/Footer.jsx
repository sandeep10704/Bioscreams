import React from 'react'
import { MdCopyright } from "react-icons/md";

const Footer = ({projectName, rightsOwner}) => {
  return (
    <div className='text-center text-[#8486A7] '>
      2025 <MdCopyright className="inline mx-1" />{projectName}. All rights reserved by {rightsOwner}
    </div>
  )
}

export default Footer
