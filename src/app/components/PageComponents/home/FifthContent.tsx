'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const residenceImages = [
    "/faena-1.jpeg",
    "/render-first-content.jpeg",
];

const bedroomImages = [
    "/faena-1.jpeg",
    "/render-first-content.jpeg",
];

const features = [
    {
        title: 'Great Room',
        description: 'Floor-to-ceiling windows with unobstructed views'
    },
    {
        title: 'Kitchen',
        description: 'Professional-grade appliances and Italian cabinetry'
    },
    {
        title: 'Master Suite',
        description: 'Expansive layouts with private terraces'
    }
];

const bedroomFeatures = [
    {
        title: 'Primary Suite',
        description: 'Spacious primary suites with sweeping views, lounge area, and direct balcony access'
    },
    {
        title: 'Dressing Room',
        description: 'Gracious atelier-style dressing rooms with shelving and storage'
    }
];

function FifthContent() {
    return (
        <div className="bg-white">
            <section className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-[600px] lg:h-screen relative">
                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            effect="fade"
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            className="h-full w-full"
                        >
                            {residenceImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="h-full w-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${image})` }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="p-8 lg:p-16 flex flex-col justify-center bg-white">
                        <h2 className="text-4xl lg:text-6xl font-neue-plak-black text-gray-900 mb-8">
                            Building Features
                        </h2>
                        <ul className="text-gray-600 mb-12 text-3xl leading-relaxed list-disc">
                            <li>Two impressive 68-story towers along the river, connected by a majestic Sky Bridge.</li>
                            <li><span className="font-bold">406 residences</span> ranging from one to four bedrooms, with sizes varying from 716 sq. ft. to 3,149 sq. ft.</li>
                            <li><span className="font-bold">20 River Lofts</span> with areas between 1,315 sq. ft. and 1,384 sq. ft.</li>
                            <li><span className="font-bold">4 Sky Lofts</span> ranging from 2,288 sq. ft. to 6,301 sq. ft.</li>
                            <li>Exclusive penthouses available upon request.</li>
                            <li>Stunning views of the Miami River, the city skyline, and Biscayne Bay.</li>
                            <li>Exclusive access to <span className="font-bold">Riverfront Park</span> and the riverside promenade.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 lg:p-16 flex flex-col justify-center bg-white order-2 lg:order-1">
                        <h2 className="text-4xl lg:text-6xl font-neue-plak-black text-gray-900 mb-8">
                            Residence Features
                        </h2>
                        <ul className="text-3xl list-disc pl-5 space-y-4 text-gray-600 mb-12">
                            <li>Designed by Bryan O’Sullivan, reflecting Faena’s unmistakable style.</li>
                            <li>Exclusive elevator lobbies, both private and semi-private.</li>
                            <li>Open floor plans designed to maximize views of Biscayne Bay, the Miami River, and the city skyline.</li>
                            <li>All residences are delivered fully finished, equipped with high-quality flooring, kitchens, and bathrooms.</li>
                            <li>State-of-the-art appliances.</li>
                            <li>Floor-to-ceiling impact-resistant glass sliding doors that seamlessly integrate indoor and outdoor spaces.</li>
                            <li>Expansive outdoor terraces, with a depth of 3 meters, perfect for enjoying panoramic views.</li>
                            <li>Pre-installed infrastructure for smart home technology.</li>
                            <li>Prepared for designer lighting systems and high-end audio/video solutions.</li>
                        </ul>
                    </div>

                    <div className="h-[600px] lg:h-full relative order-1 lg:order-2">
                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            effect="fade"
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            className="h-full w-full"
                        >
                            {bedroomImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="h-full w-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${image})` }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FifthContent;
