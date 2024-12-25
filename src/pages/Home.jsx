import { useState } from 'react'
import { Hero } from '../components/Hero';
import { HeroHighlightDemo } from '../components/Quote';
import { FocusCardsDemo } from '../components/catalogue';
import WhyChooseUs from '../components/Choose';
import { InfiniteMovingCardsDemo } from '../components/Reviews';
import { AppleCardsCarouselDemo } from '../components/Locations';
import { SignupFormDemo } from '../components/Newsletter';
function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <main className='mt-0 pt-24'>
                <Hero />
                <WhyChooseUs />
                <FocusCardsDemo />
                <InfiniteMovingCardsDemo />\
                <AppleCardsCarouselDemo />
                <SignupFormDemo />
            </main>
        </>
    )
}

export default Home;
