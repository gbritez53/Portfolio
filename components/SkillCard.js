import React from 'react'
import Image from 'next/image'

const SkillCard = ({ classes, skill, children }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-20 h-20 rounded-lg bg-opacity-20 border-[1.8px] ${classes} flex justify-center items-center`}
      >
        <div className="flex">
          <Image
            src={`/skills/${skill}.svg`}
            alt={skill}
            width={40}
            height={40}
            objectFit="contain"
          />
        </div>
      </div>
      <p className="text-sm pt-2">{children}</p>
    </div>
  )
}

export default SkillCard
