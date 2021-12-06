import { Fragment } from 'react'
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from '@ap.cx/react-fullpage'
import useWindowSize from '../hooks/useWindowSize'

import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const Home = () => {
  const { width } = useWindowSize()
  // eslint-disable-next-line react/jsx-key
  const COMPONENTS = [<Hero />, <AboutMe />, <Skills />, <Projects />]

  return (
    <>
      {width > 768 ? (
        <Fullpage>
          <FullPageSections>
            <section className="bg-coolGray-100 dark:bg-coolGray-900 text-gray-900 dark:text-white px-4 md:px-20">
              {COMPONENTS.map((component, i) => (
                <FullpageSection key={i}>{component}</FullpageSection>
              ))}
            </section>
          </FullPageSections>
        </Fullpage>
      ) : (
        <section className="bg-coolGray-100 dark:bg-coolGray-900 text-gray-900 dark:text-white px-4 md:px-20">
          {COMPONENTS.map((component, i) => (
            <Fragment key={i}>{component}</Fragment>
          ))}
        </section>
      )}
    </>
  )
}

export default Home
