import React, { useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const MyCarousel = () => {
    useEffect(() => {
        const handleClick = (e) => {
            const prevEl = e.target.closest('.prev');
            const nextEl = e.target.closest('.next');

            if (prevEl) updatePrev();
            if (nextEl) updateNext();
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
            item.classList.remove('small1', 'big1', 'focus', 'big2', 'small2');

            const pos = parseInt(item.style.order);

            switch (pos) {
                case 0:
                    item.classList.add('small1');
                    break;
                case 1:
                    item.classList.add('big1');
                    break;
                case 2:
                    item.classList.add('focus');
                    break;
                case 3:
                    item.classList.add('big2');
                    break;
                case 4:
                    item.classList.add('small2');
                    break;
                default:
                    break;
            }
        });
    }

    return (
        <>
            <style>{`
        /* SMOOTH TRANSITIONS */
        .item {
          flex: 1 0 20%;
          height: 100%;
          object-fit: cover;
          transition: all 0.6s ease-in-out;
          position: absolute;
        }

        /* LARGE SCREEN DEFAULTS */
        .small1, .small2 {
          height: 50vh;
          top: 8vh;
          z-index: -1;
        }
        .big1, .big2 {
          height: 60vh;
          top: 5vh;
          z-index: 0;
        }
        .focus {
          height: 75vh;
          top: 1vh;
          z-index: 1;
        }

        /* LEFT OFFSETS (DESKTOP) */
        .small1 { left: 9vw; }
        .big1   { left: 17vw; }
        .focus  { left: 27vw; }
        .big2   { left: 40vw; }
        .small2 { left: 52vw; }

        /* ------------------ MEDIA QUERIES ------------------ */
        @media (max-width: 1024px) {
          /* Tweak for tablets */
          .small1, .small2 {
            height: 40vh;
            top: 6vh;
          }
          .big1, .big2 {
            height: 50vh;
            top: 4vh;
          }
          .focus {
            height: 60vh;
            top: 2vh;
          }

          /* Slightly reduce left offsets for tablets */
          .small1 { left: 8vw; }
          .big1   { left: 16vw; }
          .focus  { left: 27vw; }
          .big2   { left: 38vw; }
          .small2 { left: 50vw; }
        }

        @media (max-width: 768px) {
          /* Phone-ish sizes */
          .small1, .small2 {
            height: 30vh;
            top: 8vh;
          }
          .big1, .big2 {
            height: 35vh;
            top: 6vh;
          }
          .focus {
            height: 45vh;
            top: 3vh;
          }

          /* Reduce the left offsets so everything stays in view */
          .small1 { left: 5vw; }
          .big1   { left: 15vw; }
          .focus  { left: 28vw; }
          .big2   { left: 41vw; }
          .small2 { left: 53vw; }
        }

        @media (max-width: 500px) {
          /* Very small screens */
          .small1, .small2 {
            height: 25vh;
            top: 8vh;
          }
          .big1, .big2 {
            height: 30vh;
            top: 5vh;
          }
          .focus {
            height: 35vh;
            top: 3vh;
          }

          /* Further reduce left offsets */
          .small1 { left: 3vw; }
          .big1   { left: 12vw; }
          .focus  { left: 24vw; }
          .big2   { left: 36vw; }
          .small2 { left: 48vw; }
        }
      `}</style>

            <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl px-2 md:text-4xl lg:text-4xl font-bold text-neutral-900 dark:text-white max-w-4xl text-center py-12">
                    Video Gallery
                </h2>

                {/* Slider Wrapper (centered). Added overflow-hidden to clip any leftover */}
                <div className="relative w-[80vw] mx-auto overflow-hidden">
                    {/* Previous Button */}
                    <div className="prev absolute top-1/2 -translate-y-1/2 left-2 text-[30px] cursor-pointer font-semibold z-10">
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
                    <div className="next absolute top-1/2 -translate-y-1/2 right-2 text-[30px] cursor-pointer font-semibold z-10">
                        <AiOutlineRight />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyCarousel;
