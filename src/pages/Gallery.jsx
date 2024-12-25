import React from 'react'
import { ParallaxScrollDemo } from '../components/Showcase'
import { CompareDemo } from '../components/Change'

const Gallery = () => {
    return (
        <main className="pt-24">
            <h2 className='text-xl w-full px-2 md:text-4xl lg:text-4xl font-bold text-neutral-900 bg-white text-center mx-auto py-12'>Showcase</h2>
            <ParallaxScrollDemo />
            <CompareDemo />
        </main>
    )
}

export default Gallery