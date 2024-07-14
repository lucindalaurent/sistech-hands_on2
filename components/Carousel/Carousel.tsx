import { useState, useEffect } from 'react';

const images = [
    "/images/welcoming_pic.jpg",
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
    "/images/slider4.jpg",
    "/images/slider5.jpg",
    "/images/slider6.jpg",
];

function Carousel() {
    const [slideIndex, setSlideIndex] = useState(0);

    const plusDivs = (n: number) => {
        let newIndex = slideIndex + n;
        if (newIndex >= images.length) newIndex = 0;
        if (newIndex < 0) newIndex = images.length - 1;
        setSlideIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            plusDivs(1);
        }, 3000);
        return () => clearInterval(interval);
    }, [slideIndex]);

    return (
        <section className="carousel w-full overflow-hidden">
            <div className="carousel-container flex items-center justify-center relative w-full max-w-7xl mx-auto">
                <button 
                    className="carousel-btn prev bg-[#f7d2fa] text-darkmagenta border-none cursor-pointer py-2 px-3 sm:py-2 sm:px-5 mx-2 hover:bg-gray"
                    onClick={() => plusDivs(-1)}
                >
                    ❮
                </button>
                {images.map((src, index) => (
                    <img 
                        key={index}
                        className={`autoSlider w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-5 ${index === slideIndex ? 'block' : 'hidden'}`}
                        src={src}
                        alt={`Slide ${index + 1}`}
                    />
                ))}
                <button 
                    className="carousel-btn next bg-[#f7d2fa] text-darkmagenta border-none cursor-pointer py-2 px-3 sm:py-2 sm:px-5 mx-2 hover:bg-gray"
                    onClick={() => plusDivs(1)}
                >
                    ❯
                </button>
            </div>
        </section>
    );
}

export {Carousel};
