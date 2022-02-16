import React from 'react'
import Image from 'next/image'
import useWindowSize from '../hooks/useWindowSize'

const ArrowKeys = () => {
  const { width } = useWindowSize()
  return width < 768 ? null : (
    <div className="absolute bottom-5 -right-16 flex flex-col items-center ">
      <div className=" flex items-center ">
        <p className="ml-10">or use the arrow keys!</p>
        <figure className="animate-bounce-rotate">
          <Image
            src="/arrowdownright.svg"
            alt="arrow keys"
            width={50}
            height={50}
            objectFit="contain"
          />
        </figure>
      </div>
      <div className="flex animate-pulse">
        <Image
          src="/arrowkeys.svg"
          alt="arrow keys"
          width={100}
          height={70}
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default ArrowKeys
