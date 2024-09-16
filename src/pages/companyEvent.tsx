import EventSection from '@/components/sections/event-section';
import ImageSlider from '@/components/sections/image-slider-section';
import React from 'react';


function CompanyEvent() {
  return (
    <div className='flex flex-col gap-8 py-12'>
      
      <ImageSlider />

      <EventSection />
      
    </div>
  )
}

export default CompanyEvent
