import React from 'react';

const EmotionsSlider = () => {
    return (
        <section className="py-8">
            <div className="mx-auto max-w-[1560px] px-4">
                {/* Page Heading */}
                <h1 className="text-3xl font-bold mb-4">
                    Whirl of Emotions in Color and Form
                </h1>

                {/* Introductory Text (outside cards) */}
                <div className="mb-[60px] leading-relaxed text-gray-200">
                    Dive into the world of abstract art, where every stroke and color tells a unique story.<br />
                    Feel the energy, harmony, and inspiration through captivating works of art.
                </div>

                {/* Carousel Container */}
                <div className="relative emotions-slider px-[98px] max-w-full">
                    {/* Slider Navigation */}
                    <div className="slider-nav absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 flex justify-between items-center pointer-events-none">
                        <div
                            tabIndex={0}
                            className="slider-nav__item slider-nav__item_prev pointer-events-auto w-12 h-12 flex items-center justify-center hover:text-blue-400 transition-colors"
                        >
                            <svg
                                width="16"
                                height="28"
                                viewBox="0 0 16 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-white"
                            >
                                <path
                                    d="M14 26L2 14L14 2"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div
                            tabIndex={0}
                            className="slider-nav__item slider-nav__item_next pointer-events-auto w-12 h-12 flex items-center justify-center hover:text-blue-400 transition-colors"
                        >
                            <svg
                                width="16"
                                height="28"
                                viewBox="0 0 16 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-white"
                            >
                                <path
                                    d="M2 26L14 14L2 2"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Swiper Main Wrapper */}
                    <div className="emotions-slider__slider swiper">
                        <div className="emotions-slider__wrapper swiper-wrapper flex">

                            {/* ==== Slide 1 ==== */}
                            <div className="emotions-slider__slide swiper-slide flex items-center min-h-[550px]">
                                <div className="emotions-slider__item emotions-slider-item bg-[#1e1e1e] rounded-[10px] relative overflow-hidden w-[calc(100vw-60px)] max-w-[400px] mx-auto">
                                    <div className="emotions-slider-item__image aspect-[400/270] overflow-hidden">
                                        <img
                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-1.jpg"
                                            alt="Winds of Change"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="emotions-slider-item__content flex flex-col gap-6 p-5">
                                        {/* Header */}
                                        <div className="emotions-slider-item__header max-h-[50px] overflow-hidden transition-all">
                                            <div className="emotions-slider-item__header-inner flex items-center justify-between flex-wrap gap-5">
                                                <div className="emotions-slider-item__price font-semibold text-xl">
                                                    $175
                                                </div>
                                                <div className="emotions-slider-item__author flex items-center gap-2">
                                                    <div className="emotions-slider-item__author-image w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                                                        <img
                                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/author-1.jpg"
                                                            alt="Andrew Kelman"
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <div className="emotions-slider-item__author-name text-sm text-gray-400">
                                                        Andrew Kelman
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="emotions-slider-item__info">
                                            <h2 className="emotions-slider-item__title font-semibold text-lg mb-2">
                                                Winds of Change
                                            </h2>
                                            {/* Text Removed */}
                                            <div className="emotions-slider-item__text text-sm text-gray-200 opacity-70" />
                                        </div>
                                        {/* Footer */}
                                        <div className="emotions-slider-item__footer max-h-[50px] overflow-hidden transition-all">
                                            <a
                                                className="emotions-slider-item__btn flex items-center gap-1 font-medium text-lg text-white no-underline"
                                                href="/"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span className="emotions-slider-item__btn-text">
                                                    View more
                                                </span>
                                                <span className="emotions-slider-item__btn-icon relative w-6 h-6 block overflow-hidden" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ==== Slide 2 (Has 'Popular Now' badge) ==== */}
                            <div className="emotions-slider__slide swiper-slide flex items-center min-h-[550px]">
                                <div className="emotions-slider__item emotions-slider-item bg-[#1e1e1e] rounded-[10px] relative overflow-hidden w-[calc(100vw-60px)] max-w-[400px] mx-auto">
                                    {/* Badge */}
                                    <div className="emotions-slider-item__badge absolute top-0 left-0 bg-black/40 rounded-br-[10px] z-10 flex items-center gap-1 px-2 py-1 text-sm">
                                        <span className="block w-4 h-4 bg-[url('https://bato-web-agency.github.io/bato-shared/img/slider-1/icon-star.svg')] bg-cover" />
                                        Popular Now
                                    </div>
                                    <div className="emotions-slider-item__image aspect-[400/270] overflow-hidden">
                                        <img
                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-2.jpg"
                                            alt="Flames of Passion"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="emotions-slider-item__content flex flex-col gap-6 p-5">
                                        {/* Header */}
                                        <div className="emotions-slider-item__header max-h-[50px] overflow-hidden transition-all">
                                            <div className="emotions-slider-item__header-inner flex items-center justify-between flex-wrap gap-5">
                                                <div className="emotions-slider-item__price font-semibold text-xl">
                                                    $270
                                                </div>
                                                <div className="emotions-slider-item__author flex items-center gap-2">
                                                    <div className="emotions-slider-item__author-image w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                                                        <img
                                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/author-2.jpg"
                                                            alt="Alex Bilyk"
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <div className="emotions-slider-item__author-name text-sm text-gray-400">
                                                        Alex Bilyk
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="emotions-slider-item__info">
                                            <h2 className="emotions-slider-item__title font-semibold text-lg mb-2">
                                                Flames of Passion
                                            </h2>
                                            {/* Text Removed */}
                                            <div className="emotions-slider-item__text text-sm text-gray-200 opacity-70" />
                                        </div>
                                        {/* Footer */}
                                        <div className="emotions-slider-item__footer max-h-[50px] overflow-hidden transition-all">
                                            <a
                                                className="emotions-slider-item__btn flex items-center gap-1 font-medium text-lg text-white no-underline"
                                                href="/"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span className="emotions-slider-item__btn-text">
                                                    View more
                                                </span>
                                                <span className="emotions-slider-item__btn-icon relative w-6 h-6 block overflow-hidden" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ==== Slide 3 ==== */}
                            <div className="emotions-slider__slide swiper-slide flex items-center min-h-[550px]">
                                <div className="emotions-slider__item emotions-slider-item bg-[#1e1e1e] rounded-[10px] relative overflow-hidden w-[calc(100vw-60px)] max-w-[400px] mx-auto">
                                    <div className="emotions-slider-item__image aspect-[400/270] overflow-hidden">
                                        <img
                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-3.jpg"
                                            alt="Oceans of Serenity"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="emotions-slider-item__content flex flex-col gap-6 p-5">
                                        {/* Header */}
                                        <div className="emotions-slider-item__header max-h-[50px] overflow-hidden transition-all">
                                            <div className="emotions-slider-item__header-inner flex items-center justify-between flex-wrap gap-5">
                                                <div className="emotions-slider-item__price font-semibold text-xl">
                                                    $225
                                                </div>
                                                <div className="emotions-slider-item__author flex items-center gap-2">
                                                    <div className="emotions-slider-item__author-image w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                                                        <img
                                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/author-3.jpg"
                                                            alt="Inna Grande"
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <div className="emotions-slider-item__author-name text-sm text-gray-400">
                                                        Inna Grande
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="emotions-slider-item__info">
                                            <h2 className="emotions-slider-item__title font-semibold text-lg mb-2">
                                                Oceans of Serenity
                                            </h2>
                                            {/* Text Removed */}
                                            <div className="emotions-slider-item__text text-sm text-gray-200 opacity-70" />
                                        </div>
                                        {/* Footer */}
                                        <div className="emotions-slider-item__footer max-h-[50px] overflow-hidden transition-all">
                                            <a
                                                className="emotions-slider-item__btn flex items-center gap-1 font-medium text-lg text-white no-underline"
                                                href="/"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span className="emotions-slider-item__btn-text">
                                                    View more
                                                </span>
                                                <span className="emotions-slider-item__btn-icon relative w-6 h-6 block overflow-hidden" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ==== Slide 4 (repeat of slide 1 content) ==== */}
                            <div className="emotions-slider__slide swiper-slide flex items-center min-h-[550px]">
                                <div className="emotions-slider__item emotions-slider-item bg-[#1e1e1e] rounded-[10px] relative overflow-hidden w-[calc(100vw-60px)] max-w-[400px] mx-auto">
                                    <div className="emotions-slider-item__image aspect-[400/270] overflow-hidden">
                                        <img
                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-1.jpg"
                                            alt="Winds of Change"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="emotions-slider-item__content flex flex-col gap-6 p-5">
                                        {/* Header */}
                                        <div className="emotions-slider-item__header max-h-[50px] overflow-hidden transition-all">
                                            <div className="emotions-slider-item__header-inner flex items-center justify-between flex-wrap gap-5">
                                                <div className="emotions-slider-item__price font-semibold text-xl">
                                                    $175
                                                </div>
                                                <div className="emotions-slider-item__author flex items-center gap-2">
                                                    <div className="emotions-slider-item__author-image w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                                                        <img
                                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/author-1.jpg"
                                                            alt="Andrew Kelman"
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <div className="emotions-slider-item__author-name text-sm text-gray-400">
                                                        Andrew Kelman
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="emotions-slider-item__info">
                                            <h2 className="emotions-slider-item__title font-semibold text-lg mb-2">
                                                Winds of Change
                                            </h2>
                                            {/* Text Removed */}
                                            <div className="emotions-slider-item__text text-sm text-gray-200 opacity-70" />
                                        </div>
                                        {/* Footer */}
                                        <div className="emotions-slider-item__footer max-h-[50px] overflow-hidden transition-all">
                                            <a
                                                className="emotions-slider-item__btn flex items-center gap-1 font-medium text-lg text-white no-underline"
                                                href="/"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span className="emotions-slider-item__btn-text">
                                                    View more
                                                </span>
                                                <span className="emotions-slider-item__btn-icon relative w-6 h-6 block overflow-hidden" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ==== Slide 5 (repeat of slide 2) ==== */}
                            <div className="emotions-slider__slide swiper-slide flex items-center min-h-[550px]">
                                <div className="emotions-slider__item emotions-slider-item bg-[#1e1e1e] rounded-[10px] relative overflow-hidden w-[calc(100vw-60px)] max-w-[400px] mx-auto">
                                    <div className="emotions-slider-item__badge absolute top-0 left-0 bg-black/40 rounded-br-[10px] z-10 flex items-center gap-1 px-2 py-1 text-sm">
                                        <span className="block w-4 h-4 bg-[url('https://bato-web-agency.github.io/bato-shared/img/slider-1/icon-star.svg')] bg-cover" />
                                        Popular Now
                                    </div>
                                    <div className="emotions-slider-item__image aspect-[400/270] overflow-hidden">
                                        <img
                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-2.jpg"
                                            alt="Flames of Passion"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="emotions-slider-item__content flex flex-col gap-6 p-5">
                                        {/* Header */}
                                        <div className="emotions-slider-item__header max-h-[50px] overflow-hidden transition-all">
                                            <div className="emotions-slider-item__header-inner flex items-center justify-between flex-wrap gap-5">
                                                <div className="emotions-slider-item__price font-semibold text-xl">
                                                    $270
                                                </div>
                                                <div className="emotions-slider-item__author flex items-center gap-2">
                                                    <div className="emotions-slider-item__author-image w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                                                        <img
                                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/author-2.jpg"
                                                            alt="Alex Bilyk"
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <div className="emotions-slider-item__author-name text-sm text-gray-400">
                                                        Alex Bilyk
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="emotions-slider-item__info">
                                            <h2 className="emotions-slider-item__title font-semibold text-lg mb-2">
                                                Flames of Passion
                                            </h2>
                                            {/* Text Removed */}
                                            <div className="emotions-slider-item__text text-sm text-gray-200 opacity-70" />
                                        </div>
                                        {/* Footer */}
                                        <div className="emotions-slider-item__footer max-h-[50px] overflow-hidden transition-all">
                                            <a
                                                className="emotions-slider-item__btn flex items-center gap-1 font-medium text-lg text-white no-underline"
                                                href="/"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span className="emotions-slider-item__btn-text">
                                                    View more
                                                </span>
                                                <span className="emotions-slider-item__btn-icon relative w-6 h-6 block overflow-hidden" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ==== Slide 6 (repeat of slide 3) ==== */}
                            <div className="emotions-slider__slide swiper-slide flex items-center min-h-[550px]">
                                <div className="emotions-slider__item emotions-slider-item bg-[#1e1e1e] rounded-[10px] relative overflow-hidden w-[calc(100vw-60px)] max-w-[400px] mx-auto">
                                    <div className="emotions-slider-item__image aspect-[400/270] overflow-hidden">
                                        <img
                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-3.jpg"
                                            alt="Oceans of Serenity"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="emotions-slider-item__content flex flex-col gap-6 p-5">
                                        {/* Header */}
                                        <div className="emotions-slider-item__header max-h-[50px] overflow-hidden transition-all">
                                            <div className="emotions-slider-item__header-inner flex items-center justify-between flex-wrap gap-5">
                                                <div className="emotions-slider-item__price font-semibold text-xl">
                                                    $225
                                                </div>
                                                <div className="emotions-slider-item__author flex items-center gap-2">
                                                    <div className="emotions-slider-item__author-image w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                                                        <img
                                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/author-3.jpg"
                                                            alt="Inna Grande"
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <div className="emotions-slider-item__author-name text-sm text-gray-400">
                                                        Inna Grande
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="emotions-slider-item__info">
                                            <h2 className="emotions-slider-item__title font-semibold text-lg mb-2">
                                                Oceans of Serenity
                                            </h2>
                                            {/* Text Removed */}
                                            <div className="emotions-slider-item__text text-sm text-gray-200 opacity-70" />
                                        </div>
                                        {/* Footer */}
                                        <div className="emotions-slider-item__footer max-h-[50px] overflow-hidden transition-all">
                                            <a
                                                className="emotions-slider-item__btn flex items-center gap-1 font-medium text-lg text-white no-underline"
                                                href="/"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span className="emotions-slider-item__btn-text">
                                                    View more
                                                </span>
                                                <span className="emotions-slider-item__btn-icon relative w-6 h-6 block overflow-hidden" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ==== Slide 7 (repeat of slide 1) ==== */}
                            <div className="emotions-slider__slide swiper-slide flex items-center min-h-[550px]">
                                <div className="emotions-slider__item emotions-slider-item bg-[#1e1e1e] rounded-[10px] relative overflow-hidden w-[calc(100vw-60px)] max-w-[400px] mx-auto">
                                    <div className="emotions-slider-item__image aspect-[400/270] overflow-hidden">
                                        <img
                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-1.jpg"
                                            alt="Winds of Change"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="emotions-slider-item__content flex flex-col gap-6 p-5">
                                        {/* Header */}
                                        <div className="emotions-slider-item__header max-h-[50px] overflow-hidden transition-all">
                                            <div className="emotions-slider-item__header-inner flex items-center justify-between flex-wrap gap-5">
                                                <div className="emotions-slider-item__price font-semibold text-xl">
                                                    $175
                                                </div>
                                                <div className="emotions-slider-item__author flex items-center gap-2">
                                                    <div className="emotions-slider-item__author-image w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                                                        <img
                                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/author-1.jpg"
                                                            alt="Andrew Kelman"
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <div className="emotions-slider-item__author-name text-sm text-gray-400">
                                                        Andrew Kelman
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="emotions-slider-item__info">
                                            <h2 className="emotions-slider-item__title font-semibold text-lg mb-2">
                                                Winds of Change
                                            </h2>
                                            {/* Text Removed */}
                                            <div className="emotions-slider-item__text text-sm text-gray-200 opacity-70" />
                                        </div>
                                        {/* Footer */}
                                        <div className="emotions-slider-item__footer max-h-[50px] overflow-hidden transition-all">
                                            <a
                                                className="emotions-slider-item__btn flex items-center gap-1 font-medium text-lg text-white no-underline"
                                                href="/"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span className="emotions-slider-item__btn-text">
                                                    View more
                                                </span>
                                                <span className="emotions-slider-item__btn-icon relative w-6 h-6 block overflow-hidden" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ==== Slide 8 (repeat of slide 2) ==== */}
                            <div className="emotions-slider__slide swiper-slide flex items-center min-h-[550px]">
                                <div className="emotions-slider__item emotions-slider-item bg-[#1e1e1e] rounded-[10px] relative overflow-hidden w-[calc(100vw-60px)] max-w-[400px] mx-auto">
                                    <div className="emotions-slider-item__badge absolute top-0 left-0 bg-black/40 rounded-br-[10px] z-10 flex items-center gap-1 px-2 py-1 text-sm">
                                        <span className="block w-4 h-4 bg-[url('https://bato-web-agency.github.io/bato-shared/img/slider-1/icon-star.svg')] bg-cover" />
                                        Popular Now
                                    </div>
                                    <div className="emotions-slider-item__image aspect-[400/270] overflow-hidden">
                                        <img
                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-2.jpg"
                                            alt="Flames of Passion"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="emotions-slider-item__content flex flex-col gap-6 p-5">
                                        {/* Header */}
                                        <div className="emotions-slider-item__header max-h-[50px] overflow-hidden transition-all">
                                            <div className="emotions-slider-item__header-inner flex items-center justify-between flex-wrap gap-5">
                                                <div className="emotions-slider-item__price font-semibold text-xl">
                                                    $270
                                                </div>
                                                <div className="emotions-slider-item__author flex items-center gap-2">
                                                    <div className="emotions-slider-item__author-image w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                                                        <img
                                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/author-2.jpg"
                                                            alt="Alex Bilyk"
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <div className="emotions-slider-item__author-name text-sm text-gray-400">
                                                        Alex Bilyk
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="emotions-slider-item__info">
                                            <h2 className="emotions-slider-item__title font-semibold text-lg mb-2">
                                                Flames of Passion
                                            </h2>
                                            {/* Text Removed */}
                                            <div className="emotions-slider-item__text text-sm text-gray-200 opacity-70" />
                                        </div>
                                        {/* Footer */}
                                        <div className="emotions-slider-item__footer max-h-[50px] overflow-hidden transition-all">
                                            <a
                                                className="emotions-slider-item__btn flex items-center gap-1 font-medium text-lg text-white no-underline"
                                                href="/"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span className="emotions-slider-item__btn-text">
                                                    View more
                                                </span>
                                                <span className="emotions-slider-item__btn-icon relative w-6 h-6 block overflow-hidden" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ==== Slide 9 (repeat of slide 3) ==== */}
                            <div className="emotions-slider__slide swiper-slide flex items-center min-h-[550px]">
                                <div className="emotions-slider__item emotions-slider-item bg-[#1e1e1e] rounded-[10px] relative overflow-hidden w-[calc(100vw-60px)] max-w-[400px] mx-auto">
                                    <div className="emotions-slider-item__image aspect-[400/270] overflow-hidden">
                                        <img
                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-3.jpg"
                                            alt="Oceans of Serenity"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="emotions-slider-item__content flex flex-col gap-6 p-5">
                                        {/* Header */}
                                        <div className="emotions-slider-item__header max-h-[50px] overflow-hidden transition-all">
                                            <div className="emotions-slider-item__header-inner flex items-center justify-between flex-wrap gap-5">
                                                <div className="emotions-slider-item__price font-semibold text-xl">
                                                    $225
                                                </div>
                                                <div className="emotions-slider-item__author flex items-center gap-2">
                                                    <div className="emotions-slider-item__author-image w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                                                        <img
                                                            src="https://bato-web-agency.github.io/bato-shared/img/slider-1/author-3.jpg"
                                                            alt="Inna Grande"
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <div className="emotions-slider-item__author-name text-sm text-gray-400">
                                                        Inna Grande
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="emotions-slider-item__info">
                                            <h2 className="emotions-slider-item__title font-semibold text-lg mb-2">
                                                Oceans of Serenity
                                            </h2>
                                            {/* Text Removed */}
                                            <div className="emotions-slider-item__text text-sm text-gray-200 opacity-70" />
                                        </div>
                                        {/* Footer */}
                                        <div className="emotions-slider-item__footer max-h-[50px] overflow-hidden transition-all">
                                            <a
                                                className="emotions-slider-item__btn flex items-center gap-1 font-medium text-lg text-white no-underline"
                                                href="/"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span className="emotions-slider-item__btn-text">
                                                    View more
                                                </span>
                                                <span className="emotions-slider-item__btn-icon relative w-6 h-6 block overflow-hidden" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ==== End Slides ==== */}

                        </div>
                    </div>

                    {/* Slider Pagination */}
                    <div className="emotions-slider__pagination slider-pagination flex items-center justify-center flex-wrap gap-2 pt-10" />
                </div>
            </div>
        </section>
    );
};

export default EmotionsSlider;
