import React from 'react'
import ItemContainer from './ItemContainer';
import PricingPanel from './PricingPanel';

function MainContainer() {
  return (
    <div className='bg-grey w-full tablet:h-[82vh] laptop:h-[78vh] desktop:h-[78vh]'>
      <ItemContainer />
      <PricingPanel />
    </div>
  )
}

export default MainContainer
