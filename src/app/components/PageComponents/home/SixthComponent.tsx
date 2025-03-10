'use client'

import React, { useState } from 'react';

interface PlanDetails {
  bedrooms: number;
  bathrooms: number;
  powderRooms: number;
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
      "5 bedrooms": {
        bedrooms: 5,
        bathrooms: 5,
        powderRooms: 1,
        squareFeet: "6,548 - 6,618 sf",
        floorPlanImage: "https://villamiami-residences.com/wp-content/uploads/2018/12/VillaMiami_VillaPiano_5Bed_FloorPlan_page-0001-e1700662740856.jpg"
      },
      "4 bedrooms": {
        bedrooms: 4,
        bathrooms: 4,
        powderRooms: 1,
        squareFeet: "6,548 - 6,618 sf",
        floorPlanImage: "https://villamiami-residences.com/wp-content/uploads/2018/12/VillaMiami_VillaPiano_4Bed_FloorPlan_page-0001-e1700662581840.jpg"
      }
    }
  },
  villaMezzo: {
    title: "APARTMENTS PLANS VILLA MEZZO",
    subtitle: "Half Floor Residences",
    plans: {
      "south 4 bedroom": {
        bedrooms: 4,
        bathrooms: 4,
        powderRooms: 1,
        squareFeet: "3,281 - 3,316 sf",
        floorPlanImage: "https://villamiami-residences.com/wp-content/uploads/2018/12/VillaMiami_VillaMezzo_West_02A_FloorPlan_page-0001-e1700144460316.jpg"
      },
      "south 3 bedroom": {
        bedrooms: 3,
        bathrooms: 3,
        powderRooms: 1,
        squareFeet: "3,281 - 3,316 sf",
        floorPlanImage: "https://villamiami-residences.com/wp-content/uploads/2018/12/VillaMiami_VillaMezzo_West_01B_FloorPlan_page-0001-e1700144395582.jpg"
      },
      "north 4 bedroom": {
        bedrooms: 4,
        bathrooms: 4,
        powderRooms: 1,
        squareFeet: "3,267 - 3,302 sf",
        floorPlanImage: "https://villamiami-residences.com/wp-content/uploads/2018/12/VillaMiami_VillaMezzo_West_02A_FloorPlan_page-0001-e1700144460316.jpg"
      },
      "north 3 bedroom": {
        bedrooms: 3,
        bathrooms: 3,
        powderRooms: 1,
        squareFeet: "3,267 - 3,302 sf",
        floorPlanImage: "https://villamiami-residences.com/wp-content/uploads/2023/10/VillaMiami_VillaMezzo_West_02B_FloorPlan_page-0001-e1700144512376.jpg"
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
              <span>Bedrooms</span>
              <span className="font-semibold">{details.bedrooms}</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Bathrooms</span>
              <span className="font-semibold">{details.bathrooms}</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Powder Room</span>
              <span className="font-semibold">{details.powderRooms}</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Square Feet</span>
              <span className="font-semibold">{details.squareFeet}</span>
            </li>
          </ul>
          <button className="w-full mt-6 px-6 py-3 bg-[#FF7E22] text-white hover:bg-[#F6F6F6] hover:text-black transition-colors duration-300">
            SCHEDULE A VISIT
          </button>
        </div>
      </div>
      <div className="w-full md:w-2/3">
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
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{section.title}</h2>
        <p className="text-gray-600">{section.subtitle}</p>
      </div>
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(section.plans).map((planName) => (
            <button
              key={planName}
              onClick={() => setActivePlan(planName)}
              className={`px-6 py-3  font-medium transition-colors duration-300 ${
                activePlan === planName
                  ? 'bg-[#FF7E22] text-white font-bold'
                  : 'bg-[#D6D6D6] text-black hover:bg-gray-200'
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
