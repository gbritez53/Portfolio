import SkillCard from './SkillCard'
import useSystemTheme from 'react-use-system-theme'

const skillIcons = [
  {
    text: 'HTML',
    name: 'html',
    classes: 'bg-[#E44F26] border-[#E44F26]',
  },
  {
    text: 'CSS',
    name: 'css',
    classes: 'bg-[#1572B6] border-[#1572B6]',
  },
  {
    text: 'JavaScript',
    name: 'javascript',
    classes: 'bg-[#F5DE19] border-[#F5DE19]',
  },
  // {
  //   text: 'TypeScript',
  //   name: 'typescript',
  //   classes: 'bg-[#3178C6] border-[#3178C6]',
  // },
  {
    text: 'React',
    name: 'react',
    classes: 'bg-[#61DAFB] border-[#61DAFB]',
  },
  {
    text: 'React Native',
    name: 'reactnative',
    classes: 'bg-[#61DAFB] border-[#61DAFB]',
  },
  {
    text: 'Redux',
    name: 'redux',
    classes: 'bg-[#764ABC] border-[#764ABC]',
  },
  {
    text: 'SASS',
    name: 'sass',
    classes: 'bg-[#CC6699] border-[#CC6699]',
  },
  {
    text: 'Tailwind',
    name: 'tailwind',
    classes: 'bg-[#2298BD] border-[#2298BD]',
  },
  {
    text: 'MongoDB',
    name: 'mongodb',
    classes: 'bg-[#47A248] border-[#47A248]',
  },
  {
    text: 'PostgreSQL',
    name: 'postgresql',
    classes: 'bg-[#336791] border-[#336791]',
  },
  {
    text: 'GraphQL',
    name: 'graphql',
    classes: 'bg-[#E535AB] border-[#E535AB]',
  },
  {
    text: 'Git',
    name: 'git',
    classes: 'bg-[#DE4C36] border-[#DE4C36]',
  },
  {
    text: 'Node',
    name: 'node',
    classes: 'bg-[#339933] border-[#339933]',
  },
]

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
          key="express"
          skill={systemTheme === 'dark' ? 'expressdark' : 'express'}
          classes={
            systemTheme === 'dark'
              ? 'bg-white border-gray-200'
              : 'bg-black border-gray-700'
          }
        >
          Express
        </SkillCard>

        <SkillCard
          key="next"
          skill={systemTheme === 'dark' ? 'nextdark' : 'next'}
          classes={
            systemTheme === 'dark'
              ? 'bg-white border-gray-200'
              : 'bg-black border-gray-600'
          }
        >
          Next
        </SkillCard>
      </div>
    </section>
  )
}

export default Skills
