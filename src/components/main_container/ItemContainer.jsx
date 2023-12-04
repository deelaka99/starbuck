import React from 'react'

function ItemContainer() {
  return (
    <div className='bg-darkGrey tablet:h-[25vh]'>
      <div className='tablet:h-[5vh] flex items-center justify-end tablet:pr-4'>
        <input placeholder='Search Items...' className='pl-4 placeholder:pl-2 w-[35%] h-[3vh] rounded-lg shadow-black shadow-sm' type="search" name="" id="" />
      </div>
      <div className='tablet:h-[20vh] bg-white opacity-20 flex items-center justify-center text-xl'>
        Items container
      </div>
    </div>
  )
}

export default ItemContainer
