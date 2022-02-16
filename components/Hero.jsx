import useSystemTheme from 'react-use-system-theme'
import Image from 'next/image'
import { CgArrowDown } from 'react-icons/cg'
import { ImGithub } from 'react-icons/im'
import { SiLinkedin } from 'react-icons/si'
import useWindowSize from '../hooks/useWindowSize'
import ArrowKeys from './ArrowKeys'

const Hero = () => {
  const { width } = useWindowSize()
  const systemTheme = useSystemTheme()
  return (
    <section className="bg-gradient flex flex-col justify-center items-center h-screen dark:text-white relative">
      {systemTheme !== 'dark' ? (
        <Image src="/logo.svg" alt="logo" width={150} height={150} />
      ) : (
        <Image src="/logo-dark.svg" alt="logo" width={150} height={150} />
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
      {width < 768 ? null : (
        <div className="absolute bottom-0 flex flex-col animate-bounce items-center">
          <p>Scroll Down</p>
          <CgArrowDown className="text-3xl dark:text-lime-400 text-indigo-600 text-center" />
        </div>
      )}
      <ArrowKeys />
    </section>
  )
}

export default Hero
