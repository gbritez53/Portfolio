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
        <section className="bg-coolGray-100 dark:bg-coolGray-900 text-gray-900 dark:text-white px-4 md:px-20">
          <FullpageSection>
            <section className="bg-gradient flex flex-col justify-center items-center h-full dark:text-white relative pb-24">
              {systemTheme !== 'dark' ? (
                <Image src="/logo.svg" alt="logo" width={150} height={150} />
              ) : (
                <Image
                  src="/logo-dark.svg"
                  alt="logo"
                  width={150}
                  height={150}
                />
              )}
              <h2 className="text-4xl md:text-5xl pt-10 font-semibold tracking-tight">
                Gabriel Britez
              </h2>
              <p className="text-lg md:text-2xl tracking-wide py-6">
                FullStack javaScript developer
              </p>
              <div className="flex space-x-4 md:space-x-6">
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

              <div className="absolute bottom-5 md:bottom-0 flex flex-col animate-bounce items-center">
                <p>Scroll Down</p>
                <CgArrowDown className="text-3xl dark:text-lime-400 text-indigo-600 text-center" />
              </div>
            </section>
          </FullpageSection>

          <FullpageSection>
            <section className="flex flex-col items-center justify-center h-screen mx-auto py-8">
              <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-4">
                <h2 className="text-2xl md:text-4xl font-bold md:col-span-3 md:col-start-2 ">
                  About me
                </h2>
                <figcaption className="about-me relative w-32 md:w-52 justify-self-end">
                  <Image
                    src="/Gabriel.jpeg"
                    alt="Gabriel Britez"
                    width={200}
                    height={200}
                    objectFit="cover"
                    className="avatar rounded-full"
                  />
                </figcaption>
                <div className=" w-11/12 col-span-2 text-sm md:text-base">
                  <h3 className="font-semibold text-xl">Profile:</h3>
                  <p className="break-words dark:text-gray-300 pb-8 md:pb-4">
                    I am enthusiastic about web application development and
                    interface design. Passionate about self-taught learning and
                    someone self-critical with me work, constantly seeking to
                    improve. I consider someone direct and responsible.
                  </p>
                  <h3 className="font-semibold text-xl">Education:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                      <span className="text-indigo-600 dark:text-lime-300">
                        2015 - 2019
                      </span>
                      <p>
                        National University of Misiones. <br /> (UNAM - FCEQyN)
                      </p>
                    </div>
                    <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                      <span className="text-indigo-600 dark:text-lime-300">
                        2020 - 2022
                      </span>
                      <p>Training in online courses on web development</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </FullpageSection>

          <FullpageSection>
            <section className="flex flex-col justify-center items-center h-full ">
              <h2 className="text-4xl font-bold">Skills</h2>
            </section>
          </FullpageSection>

          <FullpageSection>
            <section className=" flex flex-col justify-center items-center h-full ">
              <h2 className="text-4xl font-bold">Projects</h2>
            </section>
          </FullpageSection>
        </section>
      </FullPageSections>
    </Fullpage>
  )
}

export default Home
