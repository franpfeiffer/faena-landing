'use client'
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const locations = [
    {
        category: 'Elegance by the River:',
        name: 'Faena Residences is situated along the Miami River, offering a unique blend of urban sophistication and natural beauty.',
        image: '/pool-veiw.jpg' //sorry for the typo, to lazy to change it
    },
    {
        category: 'Proximity to Iconic Destinations:',
        name: 'Just steps away from world-class restaurants, art galleries, and entertainment options, the best of Miami is within easy reach.',
        image: '/bartender.webp'
    },
    {
        category: 'An Exclusive Lifestyle:',
        name: 'Enjoy private boat rides, curated shopping experiences, and seamless access to the cosmopolitan allure of Brickell City Centre.',
        image: '/Faena-Residences-Miami_Building-Hero.jpg'
    },
    {
        category: 'A Transformative Destination:',
        name: 'In the heart of a city undergoing constant transformation, Faena Residences offers a harmonious balance of tranquility and vibrancy, establishing itself as an iconic enclave.',
        image: '/puente.webp'
    },
];

function FourthContent() {
    return (
        <div className="bg-grey-100">
            <section className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6 text-center lg:text-left">
                        <p className="text-gray-500 text-xl uppercase tracking-wider">neighborhood</p>
                        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
                            At water's edge, with the best of Miami at your door
                        </h2>
                        <p className="text-xl sm:text-3xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                            Stroll along the promenade in the morning, dip into a museum midday, sip wine from the Loire Valley and dine on pasta alle vongole in the evening.
                        </p>
                        <button className="bg-[#CF3036] text-white px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-black hover:bg-[#F6F6F6] transition-colors">
                            SCHEDULE A VISIT
                        </button>
                    </div>
                    <div className="relative w-full">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={16}
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next',
                            }}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                            }}
                            className="w-full"
                        >
                            {locations.map((location, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative group overflow-hidden">
                                        <img
                                            src={location.image}
                                            alt={location.name}
                                            className="w-full h-[350px] sm:h-[450px] object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                                            <p className="text-white/80 text-lg sm:text-2xl uppercase tracking-wider font-neue-plak-black">
                                                {location.category}
                                            </p>
                                            <h3 className="text-white text-xl sm:text-2xl font-medium mt-1">
                                                {location.name}
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button className="swiper-button-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <button className="swiper-button-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FourthContent;

