import React from 'react'

const Title = ({subTitle, title}) => {
  return (
    <div className='text-center text-[#212EA0] text-base font-semibold uppercase my-16'>
      <p>{subTitle}</p>
      <h2 className='text-2xl text-[#000F38] mt-1 normal-case'>{title}</h2>
    </div>
  )
}

export default Title