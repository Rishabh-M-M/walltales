import React, { useState } from 'react';

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        { question: "IS THIS CERAMIC MATERIAL?", answer: "No this is not ceramic material. This is a special polymer material." },
        { question: "WHAT IS THE LIFE OF THIS TILE?", answer: "Under normal conditions this tile should last for at least 10 years unless there is some physical damage by external sources." },
        { question: "IS THIS WATERPROOF?", answer: "Yes, it is waterproof and can resist rainy weather." },
        { question: "CAN IT BE USED OUTDOORS?", answer: "Yes, WallTales tiles are resistant to sunlight, water and hence can be easily used outdoors." },
        { question: "HOW MUCH TIME IT TAKES TO INSTALL?", answer: "A 100 sq ft area can be completed in approximately 4 hours on a ready straight wall." },
        { question: "WHO WILL DO THE INSTALLATION?", answer: "Doesn't need any special skills. Much easier than installing normal tiles. Easy to cut and install makes it a good DIY product. Besides that WallTales has a trained installation team too." },
        { question: "HOW MUCH TIME DOES IT TAKE TO ORDER AND DELIVER?", answer: "The average delivery time depending on the design is 2-4 weeks from the date of order confirmation." },
        { question: "WHAT IS THE MINIMUM SQUARE FEET ORDER?", answer: "The minimum square feet order WallTales undertakes is 30 sq ft." },
        { question: "WHICH AREAS CAN THIS TILE BE APPLIED?", answer: "WallTales tiles can be used in bathrooms, kitchens, living rooms, outdoor spaces almost everywhere." },
        { question: "Can I apply peel-and-stick wallpaper to any surface?", answer: "Peel-and-stick wallpaper works best on smooth, clean, and dry surfaces. It’s ideal for walls, but can also be used on furniture, doors, and even ceilings, as long as the surface is suitable." },
        { question: "How do I remove peel-and-stick wallpaper?", answer: "Peel-and-stick wallpaper can be easily removed by gently pulling it from the wall. It leaves little to no residue, making it a great option for temporary or rental spaces." },
        { question: "What are 3D peel-and-stick tiles?", answer: "3D peel-and-stick tiles are self-adhesive tiles designed to create a textured, raised appearance on walls or other surfaces. They’re perfect for adding depth and visual interest to your space without the need for grout or complicated installation." },
        { question: "Can I install 3D peel-and-stick tiles myself?", answer: "Yes! The beauty of 3D peel-and-stick tiles is that they’re incredibly easy to install. No professional help is needed. just peel, stick, and enjoy a quick transformation of your space." },
        { question: "Do you offer customized designs for peel-and-stick tiles?", answer: "Yes, we offer customizable designs for 3D peel-and-stick tiles. You can choose colors, patterns, and even create unique designs to match your home decor." },
        { question: "What are mosaic tiles with net backing?", answer: "Mosaic tiles with net backing are small tiles arranged on a mesh backing for easier installation. The net backing allows for faster setup while ensuring the tiles stay in place during the installation process." },
        { question: "Can I install net-backed mosaic tiles myself?", answer: "Yes, net-backed mosaic tiles are simple to install. While we recommend using a professional for large projects, DIY enthusiasts can easily install these tiles using the proper tools, including tile adhesive and grout." },
        { question: "Are mosaic tiles suitable for outdoor use?", answer: "Yes, our mosaic tiles can be used outdoors as long as the installation is done in an area protected from extreme weather conditions. These tiles are durable and can be used for outdoor backsplashes, patios, and more." },
        { question: "How do I clean and maintain net-backed mosaic tiles?", answer: "Mosaic tiles are easy to clean with a damp cloth or mild cleaner. Avoid using harsh chemicals, as they may damage the grout and finish. Regular cleaning will keep your tiles looking fresh for years." },
        { question: "What is the difference between your mosaic tiles and traditional ceramic tiles?", answer: "The key difference is the installation process. Mosaic tiles with net backing are easier to install and don’t require as much grout, making them a more time-efficient solution. They also offer greater design flexibility due to their small tile size." },
        { question: "Can I mix and match different designs of wallpaper and tiles?", answer: "Absolutely! Mixing different designs of wallpapers and tiles can create a unique and personalized space. Just make sure the colors and patterns complement each other for a cohesive look." },
    ];

    return (
        <div className="wrapper mx-auto w-3/5 pt-36" >
            <h1 className="text-5xl font-bold mb-8 text-center text-gray-700">FAQs</h1>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="container bg-white rounded-2xl shadow-lg hover:ml-2 hover:shadow-2xl transition-shadow duration-300 mb-4 border border-teal-900"
                >
                    <div
                        className={`question font-bold rounded-2xl text-lg p-5 flex justify-between items-center cursor-pointer text-white bg-teal-600 ${openIndex === index ? 'active' : ''
                            }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <span>{faq.question}</span>
                        <span
                            className={`text-2xl font-bold transition-transform duration-300 transform ${openIndex === index ? 'rotate-45 text-white' : 'text-white'
                                }`}
                        >
                            +
                        </span>
                    </div>
                    <div
                        className={`answercont overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'
                            }`}
                    >
                        <div className="answer text-gray-700 p-5 whitespace-pre-line">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
