'use client'

import React, { useState } from 'react';

interface PlanDetails {
  bedrooms: number;
  bathrooms: number;
  powderRooms?: number;
  squareFeet: string;
  floorPlanImage: string;
}

interface PlanSection {
  title: string;
  subtitle: string;
  plans: {
    [key: string]: PlanDetails;
  };
}

const plans: Record<string, PlanSection> = {
  villaPiano: {
    title: "APARTMENTS PLANS VILLA PIANO",
    subtitle: "Full Floor Residences",
    plans: {
      "1 bedrooms": {
        bedrooms: 1,
        bathrooms: 1,
        powderRooms: 1,
        squareFeet: "1166 sf.sq - 108.3 sf m",
        floorPlanImage: "/1bedroom-up.png"
      },
      "2 bedrooms": {
        bedrooms: 2,
        bathrooms: 2,
        powderRooms: 1,
        squareFeet: "1315 sf.sq - 122.2 sf m",
        floorPlanImage: "/2bedroom-up.jpg"
      },
      "3 bedrooms": {
        bedrooms: 3,
        bathrooms: 3,
        powderRooms: 1,
        squareFeet: "2820 sf.sq - 262.0 sf m",
        floorPlanImage: "/3bedroom-up.jpg"

      },
      "4 bedrooms": {
        bedrooms: 4,
        bathrooms: 4,
        powderRooms: 1,
        squareFeet: "3171 sf.sq - 294.6 sf m",
        floorPlanImage: "/4bedroom-up.jpg"
      }
    }
  },
  villaMezzo: {
    title: "",
    subtitle: "full Floor residences – South",
    plans: {
      "1 bedroom": {
        bedrooms: 4,
        bathrooms: 4,
        powderRooms: 1,
        squareFeet: "3,281 - 3,316 sf",
        floorPlanImage: "/1beddown.png"
      },
      "2 bedroom": {
        bedrooms: 3,
        bathrooms: 3,
        powderRooms: 1,
        squareFeet: "3,281 - 3,316 sf",
        floorPlanImage: "/2beddown.png"
      },
      "3 bedroom": {
        bedrooms: 4,
        bathrooms: 4,
        powderRooms: 1,
        squareFeet: "3,267 - 3,302 sf",
        floorPlanImage: "/3beddown.png"
      },
      "4 bedroom": {
        bedrooms: 3,
        bathrooms: 3,
        powderRooms: 1,
        squareFeet: "3,267 - 3,302 sf",
        floorPlanImage: "/4bedroomdown.jpg"
      }
    }
  }
};

function PlanDetails({ details }: { details: PlanDetails }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="w-full md:w-1/3">
        <div className="bg-white  shadow-lg p-6">
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-2xl">Bedrooms</span>
              <span className="text-xl font-semibold">{details.bedrooms}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-2xl">Bathrooms</span>
              <span className="text-xl font-semibold">{details.bathrooms}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-2xl">Powder Room</span>
              <span className="text-xl font-semibold">{details.powderRooms}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-2xl">Square Feet</span>
              <span className="text-xl font-semibold">{details.squareFeet}</span>
            </li>
          </ul>
          <button className="text-3xl w-full mt-6 px-6 py-3 bg-[#CF3036] text-white hover:bg-[#F6F6F6] hover:text-black transition-colors duration-300">
            SCHEDULE A VISIT
          </button>
        </div>
      </div>
      <div className="text-2xl w-full md:w-2/3">
        <img
          src={details.floorPlanImage}
          alt="Floor Plan"
          className="w-full  shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
}

function PlanSection({ section, id }: { section: PlanSection; id: string }) {
  const [activePlan, setActivePlan] = useState<string>(Object.keys(section.plans)[0]);
  return (
    <div id={id} className="py-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
        </div>
        <h2 className="text-6xl font-bold text-gray-800 mb-2">{section.title}</h2>
        <p className="text-2xl text-gray-600">{section.subtitle}</p>
      </div>
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(section.plans).map((planName) => (
            <button
              key={planName}
              onClick={() => setActivePlan(planName)}
              className={`px-6 py-3  font-medium transition-colors duration-300 ${
                activePlan === planName
                  ? 'bg-[#CF3036] text-3xl text-white font-bold'
                  : 'bg-[#D6D6D6] text-3xl text-black hover:bg-gray-200'
              }`}
            >
              {planName}
            </button>
          ))}
        </div>
      </div>
      <PlanDetails details={section.plans[activePlan]} />
    </div>
  );
}

function SixthComponent() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PlanSection section={plans.villaPiano} id="villaPiano" />
        <PlanSection section={plans.villaMezzo} id="villaMezzo" />
      </div>
    </div>
  );
}

export default SixthComponent;
