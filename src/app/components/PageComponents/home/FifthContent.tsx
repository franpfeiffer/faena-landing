'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const residenceImages = [
  'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600573472591-ee6c8e695481?auto=format&fit=crop&q=80'
];

const bedroomImages = [
  'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80'
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

const materials = [
  { name: 'Wood Vanity', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80' },
  { name: 'Brass Details', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80' },
  { name: 'Cream Paint', image: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&q=80' },
  { name: 'Glass Doors', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80' },
  { name: 'Travertine Porcelain Floor', image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80' },
  { name: 'Greige Onyx Porcelain', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80' }
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
            
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              Each residence at Villa Miami is designed as it would be in the European countryside: 
              With sunlight pouring in from all directions, sprawling living rooms made for gathering 
              and lounging, and dining rooms meant for big groups and late nights.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
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
            
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              Start every day with a view of the bay, and go to bed with the lights of Miami twinkling 
              in the distance. Bedroom suites at Villa come with unending views, in addition to expansive 
              floor plans for even-more-intimate lounging to say nothing of the private dressing rooms.
            </p>

            <div className="space-y-8 mb-16">
              {bedroomFeatures.map((feature, index) => (
                <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
              Bathrooms
            </h2>

            <ul className="list-disc pl-5 space-y-4 text-gray-600 mb-12">
              <li>Full bathrooms in every bedroom with oversized soaking tub in the primary bathroom</li>
              <li>Dornbracht and Duravit fixtures and trim</li>
              <li>Primary bathrooms feature travertine porcelain floors and Greige Onyx</li>
              <li>Porcelain walls</li>
            </ul>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {materials.map((material, index) => (
                <div key={index} className="space-y-2">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={material.image} 
                      alt={material.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center">{material.name}</p>
                </div>
              ))}
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
