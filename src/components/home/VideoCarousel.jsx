import React, { useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const MyCarousel = () => {
    // ------------------ CLICK HANDLER ------------------
    useEffect(() => {
        const handleClick = (e) => {
            if (e.target.closest('.prev')) {
                updatePrev();
            } else if (e.target.closest('.next')) {
                updateNext();
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    // ------------------ IMAGE ROTATION ------------------
    function updateNext() {
        const items = document.querySelectorAll('.item');
        items.forEach((item) => {
            let position = parseInt(item.style.order);
            if (position + 1 <= 4) {
                item.style.order = position + 1;
            } else {
                item.style.order = 0;
            }
        });
        reapplyItemClasses(items);
    }

    function updatePrev() {
        const items = document.querySelectorAll('.item');
        items.forEach((item) => {
            let position = parseInt(item.style.order);
            if (position - 1 >= 0) {
                item.style.order = position - 1;
            } else {
                item.style.order = 4;
            }
        });
        reapplyItemClasses(items);
    }

    // Re-apply the .small1, .big1, .focus, .big2, .small2 classes
    function reapplyItemClasses(items) {
        items.forEach((item) => {
            // Remove all previous classes
            item.classList.remove('small1', 'big1', 'focus', 'big2', 'small2');

            // Read the updated order
            const pos = parseInt(item.style.order);

            // Add the correct class based on `order`
            if (pos === 0) {
                item.classList.add('small1');
            } else if (pos === 1) {
                item.classList.add('big1');
            } else if (pos === 2) {
                item.classList.add('focus');
            } else if (pos === 3) {
                item.classList.add('big2');
            } else if (pos === 4) {
                item.classList.add('small2');
            }
        });
    }

    return (
        <>
            {/* Inline styles for convenience (no separate file) */}
            <style>{`
        /* Smooth transition */
        .item {
          flex: 1 0 20%;
          height: 100%;
          object-fit: cover;
          transition: all 0.6s ease-in-out;
        }

        /* Example: Using vh for top offsets, vw for left offsets */
        .small1, .small2 {
          height: 50vh;
          position: absolute;
          z-index: -1;
          top: 8vh;
        }
        .big1, .big2 {
          height: 60vh;
          position: absolute;
          z-index: 0;
          top: 5vh;
        }
        .focus {
          position: absolute;
          z-index: 1;
          height: 75vh;
          top: 1vh;
        }

        /* Left offsets with vw */
        .small1 {
          left: 9vw;
        }
        .big1 {
          left: 17vw; 
        }
        .focus {
          left: 27vw; 
        }
        .big2 {
          left: 40vw; 
        }
        .small2 {
          left: 52vw; 
        }
      `}</style>

            {/* Actual Carousel Structure */}
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl px-2 md:text-4xl lg:text-4xl font-bold text-neutral-900 dark:text-white max-w-4xl text-center py-12">
                    Video Gallery
                </h2>

                {/* Slider Wrapper (centered) */}
                <div className="relative w-[80vw] mx-auto">
                    {/* Previous Button */}
                    <div className="prev absolute top-1/2 -translate-y-1/2 left-2 text-[30px] cursor-pointer font-semibold">
                        <AiOutlineLeft />
                    </div>

                    {/* List of Images */}
                    <ul className="relative flex flex-row gap-[10px] list-none h-[90vh]">
                        <li>
                            <img
                                className="item small1 rounded-xl"
                                style={{ order: 0 }}
                                src="https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                                alt="slide1"
                            />
                        </li>
                        <li>
                            <img
                                className="item big1 rounded-xl"
                                style={{ order: 1 }}
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                                alt="slide2"
                            />
                        </li>
                        <li>
                            <img
                                className="item focus rounded-xl"
                                style={{ order: 2 }}
                                src="https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                                alt="slide3"
                            />
                        </li>
                        <li>
                            <img
                                className="item big2 rounded-xl"
                                style={{ order: 3 }}
                                src="https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                                alt="slide4"
                            />
                        </li>
                        <li>
                            <img
                                className="item small2 rounded-xl"
                                style={{ order: 4 }}
                                src="https://images.unsplash.com/photo-1603843722974-3a4031f9f97c?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                                alt="slide5"
                            />
                        </li>
                    </ul>

                    {/* Next Button */}
                    <div className="next absolute top-1/2 -translate-y-1/2 right-2 text-[30px] cursor-pointer font-semibold">
                        <AiOutlineRight />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyCarousel;
