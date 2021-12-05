import useSystemTheme from 'react-use-system-theme'
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from '@ap.cx/react-fullpage'
import Image from 'next/image'
import { CgArrowDown } from 'react-icons/cg'
import { ImGithub } from 'react-icons/im'
import { SiLinkedin } from 'react-icons/si'

const Home = () => {
  const systemTheme = useSystemTheme()

  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection className="bg-coolGray-100 dark:bg-coolGray-900">
          <section className="bg-gradient flex flex-col justify-center items-center h-full dark:text-white relative">
            {systemTheme !== 'dark' ? (
              <Image src="/logo.svg" alt="logo" width={150} height={150} />
            ) : (
              <Image src="/logo-dark.svg" alt="logo" width={150} height={150} />
            )}
            <h2 className="text-5xl pt-6 font-semibold tracking-tight">
              Gabriel Britez
            </h2>
            <p className="text-2xl tracking-wide py-6">
              FullStack javaScript developer
            </p>
            <div className="flex space-x-4 ">
              <a
                href="https://www.linkedin.com/in/gabriel-britez/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-125 transition-all duration-300 ease-in-out"
              >
                <SiLinkedin className="w-8 h-8 dark:text-lime-400 text-indigo-600" />
              </a>
              <a
                href="https://github.com/gbritez53"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-125 transition-all duration-300 ease-in-out"
              >
                <ImGithub className="w-8 h-8 dark:text-lime-400 text-indigo-600" />
              </a>
            </div>

            <div className="absolute bottom-0 flex flex-col animate-bounce items-center">
              <p>Scroll Down</p>
              <CgArrowDown className="text-3xl dark:text-lime-400 text-indigo-600 text-center" />
            </div>
          </section>
        </FullpageSection>
        <FullpageSection>
          <section className="about-me flex flex-col justify-center items-center h-full dark:text-white dark:bg-gray-900 relative">
            <h2 className="text-4xl">About me</h2>
          </section>
        </FullpageSection>
        <FullpageSection>
          <section className="about-me flex flex-col justify-center items-center h-full dark:text-white dark:bg-gray-900">
            <h2 className="text-4xl">Skills</h2>
          </section>
        </FullpageSection>
        <FullpageSection>
          <section className="about-me flex flex-col justify-center items-center h-full dark:text-white dark:bg-gray-900">
            <h2 className="text-4xl">Projects</h2>
          </section>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  )
}

export default Home
