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
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
              Old-World Elegance with Every Modern Convenience
            </h2>

            <p className="text-gray-600 mb-12 text-2xl leading-relaxed">
              Each residence at Villa Miami is designed as it would be in the European countryside:
              With sunlight pouring in from all directions, sprawling living rooms made for gathering
              and lounging, and dining rooms meant for big groups and late nights.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xl">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 lg:p-16 flex flex-col justify-center bg-white order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
              Bedrooms
            </h2>

            <p className="text-gray-600 mb-12 text-2xl leading-relaxed">
              Start every day with a view of the bay, and go to bed with the lights of Miami twinkling
              in the distance. Bedroom suites at Villa come with unending views, in addition to expansive
              floor plans for even-more-intimate lounging to say nothing of the private dressing rooms.
            </p>

            <div className="space-y-8 mb-16">
              {bedroomFeatures.map((feature, index) => (
                <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xl">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
              Bathrooms
            </h2>

            <ul className="text-xl list-disc pl-5 space-y-4 text-gray-600 mb-12">
              <li>Full bathrooms in every bedroom with oversized soaking tub in the primary bathroom</li>
              <li>Dornbracht and Duravit fixtures and trim</li>
              <li>Primary bathrooms feature travertine porcelain floors and Greige Onyx</li>
              <li>Porcelain walls</li>
            </ul>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            </div>
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
