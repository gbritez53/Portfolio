import SkillCard from './SkillCard'
import useSystemTheme from 'react-use-system-theme'

import skillIcons from '/constants/skillIcons'

const Skills = () => {
  const systemTheme = useSystemTheme()
  return (
    <section className="flex flex-col md:justify-center items-center md:h-screen py-8">
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 lg:gap-12">
        <h2 className="text-2xl md:text-4xl font-bold col-span-3 md:col-span-6 lg:col-span-8 ">
          Skills
        </h2>

        {skillIcons.map(skill => {
          return (
            <SkillCard
              key={skill.name}
              skill={skill.name}
              classes={skill.classes}
            >
              {skill.text}
            </SkillCard>
          )
        })}

        <SkillCard
          key={systemTheme === 'dark' ? 'nextdark' : 'next'}
          skill={systemTheme === 'dark' ? 'nextdark' : 'next'}
          classes={
            systemTheme === 'dark'
              ? 'bg-white border-gray-200'
              : 'bg-gray-400 border-gray-600'
          }
        >
          Next
        </SkillCard>
      </div>
    </section>
  )
}

export default Skills
