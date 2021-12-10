import Image from 'next/image'

const AboutMe = () => {
  return (
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
        <article className=" w-11/12 col-span-2 text-sm md:text-base">
          <h3 className="font-semibold text-xl">Profile:</h3>
          <p className="break-words dark:text-gray-300 pb-8 md:pb-4">
            I am enthusiastic about web application development and interface
            design. Passionate about self-taught learning and someone
            self-critical with me work, constantly seeking to improve. I
            consider someone direct and responsible.
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
        </article>
      </div>
    </section>
  )
}

export default AboutMe
