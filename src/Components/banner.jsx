import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Parallax } from 'swiper/modules';


const bannerImages = [
  {
    url: "https://i.ibb.co/jZGL5kWP/banner1.jpg",
    title: "Nurture Nature, Grow with Love",
    Description: "Step into a world where every leaf tells a story. Our gardening community helps you grow fresh greens, vibrant blooms, and a deeper connection with the earth—right from your backyard."
  },
  {
    url: "https://i.ibb.co/Xr5BQWMw/banner2.jpg",
    title: "Rooted in Earth, Reaching for Light",
    Description: "In every garden, hope grows. Join a thriving community of nature-lovers planting with purpose and passion. Grow beauty, grow balance, grow belonging." 
  },
  {
    url: "https://i.ibb.co/LdHXzw0K/banner.jpg",
    title: "Plant. Grow. Thrive.",
    Description: "Gardening is more than a hobby—it’s a journey of growth, beauty, and connection. Whether you're nurturing a balcony bloom or a backyard haven, find expert tips, inspiring ideas, and the right tools to make your garden truly thrive."
  },
  {
    url: "https://i.ibb.co/v60hn4pX/banner3.jpg",
    title: "Roots of Change Start Here",
    Description: "Sustainable living begins in your backyard. Cultivate not just plants, but purpose—with every action helping the planet and your peace of mind."
  },
];

const Banner = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on('slideChange', () => {
        
        document.querySelectorAll('.swiper-slide img').forEach(img => {
          img.classList.remove('scale-110');
        });
      
        const activeSlideImg = swiperRef.current.swiper.slides[
          swiperRef.current.swiper.activeIndex
        ].querySelector('img');
        if (activeSlideImg) {
          activeSlideImg.classList.add('scale-110');
        }
      });
    }
  }, []);

  return (
    <section className="w-full min-h-screen relative font-sans overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade, Parallax]}
        effect="fade"
        parallax={true}
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        speed={1500} 
        loop={true}
        className="absolute inset-0 w-full h-full z-0"
      >
        {bannerImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
             
              <img
                src={item.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-screen object-cover transition-all duration-[5000ms] ease-linear scale-100"
                data-swiper-parallax="-20%"
              />
              
              {/* Overlay Content */}
              <div 
                className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4 z-10"
                data-swiper-parallax-opacity="0.5" 
              >
                <h2 
                  className="text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg"
                  data-swiper-parallax="-100" 
                >
                  {item.title}
                </h2>
                <p 
                  className="text-lg  mb-6 max-w-4xl drop-shadow-md"
                  data-swiper-parallax="-200" 
                >
                  {item.Description}
                </p>
              
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;