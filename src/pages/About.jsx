import React from 'react'
import { AnimatedTestimonialsDemo } from '../components/Team'
import { TimelineDemo } from '../components/History'
import { HeroHighlightDemo } from '../components/Quote'
import Features from '../components/Features'
import MotivationAndVision from '../components/Vision'

const About = () => {
    return <>
        <main className='pt-24'>
            <HeroHighlightDemo />
            <MotivationAndVision />
            <TimelineDemo />
            <AnimatedTestimonialsDemo />
            <Features />
        </main>
    </>
}

export default About