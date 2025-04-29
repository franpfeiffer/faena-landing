'use client'

import React, { useState } from 'react';

interface LevelInfo {
  level: string;
  bedrooms: number;
  bathrooms: number;
  powderRooms?: number;
  squareFeet: string;
  floorPlanImage: string;
}

interface PlanDetails {
  residenceNumber?: string;
  levels: Record<string, LevelInfo>;
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
      "1 BEDROOM": {
        levels: {
          "14-23": {
            level: "LVL 14-23",
            bedrooms: 1,
            bathrooms: 1,
            squareFeet: "712 sq. sf - 66.1 sq. m.",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-06-South-Level-14-23.jpg"
          },
          "24-35": {
            level: "LVL 24-35",
            bedrooms: 1,
            bathrooms: 1,
            squareFeet: "712 sq. sf - 66.1 sq. m.",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-06-South-Level-24-35-.png"
          }
        }
      },
      "2 BEDROOMS": {
        levels: {
          "3-10 Loft": {
            level: "LVL 3-10",
            bedrooms: 2,
            bathrooms: 2,
            powderRooms: 1,
            squareFeet: "1,384 - 128.6 sf",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-02-South-Level-3-10-Lofts.png"
          },
          "24-35": {
            level: "LVL 24-35",
            bedrooms: 2,
            bathrooms: 2,
            powderRooms: 1,
            squareFeet: "1,376 sq. sf. - 127.8 sq. m.",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-01-South-Level-24-35-.jpg"
          },
          "3-10 Loft (Alt)": {
            level: "LVL 3-10",
            bedrooms: 2,
            bathrooms: 2,
            powderRooms: 1,
            squareFeet: "1,315 sq. sf. - 122.2sq. m.",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-01-South-Level-3-10-Lofts-1.png"
          },
          "24-35 (Alt)": {
            level: "LVL 24-35",
            bedrooms: 2,
            bathrooms: 3,
            squareFeet: "1,782 sq. sf. - 165.6sq. m.",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-03-South-Level-24-35.png"
          }
        }
      },
      "3 BEDROOMS": {
        levels: {
          "24-35": {
            level: "LVL 24-35",
            bedrooms: 2,
            bathrooms: 3,
            squareFeet: "1,782 sq. sf. - 165.6sq. m.",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-03-South-Level-24-35.png"
          },
          "37-48": {
            level: "LVL 37-48",
            bedrooms: 3,
            bathrooms: 4,
            powderRooms: 1,
            squareFeet: "2820 sq. sf. - 2620 sq. m.",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-01-East-Level-37-48-.jpg"
          },
          "37-48 (Alt)": {
            level: "LVL 37-48",
            bedrooms: 3,
            bathrooms: 4,
            squareFeet: "2,196 sq. sf - 204.0 sq. m.",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-03-South-Level-37-48.jpg"
          }
        }
      },
      "4 BEDROOMS": {
        levels: {
          "49-59": {
            level: "LVL49-59",
            bedrooms: 4,
            bathrooms: 4,
            powderRooms: 1,
            squareFeet: "3,171 sq. sf. - 294.6 sq. m.",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-01-South-Level-49-59-.jpg"
          }
        }
      }
    }
  },
  villaMezzo: {
    title: "APARTMENTS PLANS VILLA MEZZO",
    subtitle: "Full Floor Residences – South",
    plans: {
      "1 BEDROOM": {
        levels: {
          "14-23": {
            level: "LVL 14-23",
            bedrooms: 1,
            bathrooms: 1,
            squareFeet: "712 sq. sf - 66.1 sq. m.",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-06-South-Level-14-23.jpg"
          },
          "24-35": {
            level: "LVL 24-35",
            bedrooms: 1,
            bathrooms: 1,
            squareFeet: "712 sq. sf - 66.1 sq. m.",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-06-South-Level-24-35-.png"
          }
        }
      },
      "2 BEDROOMS": {
        levels: {
          "3-10 Loft": {
            level: "LVL 3-10",
            bedrooms: 2,
            bathrooms: 2,
            powderRooms: 1,
            squareFeet: "1,384 - 128.6 sf",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-02-South-Level-3-10-Lofts.png"
          },
          "24-35": {
            level: "LVL 24-35",
            bedrooms: 2,
            bathrooms: 2,
            powderRooms: 1,
            squareFeet: "1,376 sq. sf. - 127.8 sq. m.",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-01-South-Level-24-35-.jpg"
          }
        }
      },
      "3 BEDROOMS": {
        levels: {
          "37-48": {
            level: "LVL 37-48",
            bedrooms: 3,
            bathrooms: 4,
            powderRooms: 1,
            squareFeet: "2,820 sq. sf. - 262.0 sq. m.",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-01-East-Level-37-48-.jpg"
          }
        }
      },
      "4 BEDROOMS": {
        levels: {
          "49-59": {
            level: "LVL 49-59",
            bedrooms: 4,
            bathrooms: 4,
            powderRooms: 1,
            squareFeet: "3,171 sq. sf. - 294.6 sq. m.",
            floorPlanImage: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Residence-01-South-Level-49-59-.jpg"
          }
        }
      }
    }
  }
};

function PlanDetails({ details, activePlan, activeLevel }: { details: PlanDetails; activePlan: string; activeLevel: string }) {
  const levelInfo = details.levels[activeLevel];

  if (!levelInfo) {
    return <div>No information available for this level.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="w-full md:w-1/3">
        <div className="bg-white shadow-lg p-6">
          <h3 className="text-3xl font-bold mb-4">{levelInfo.level}</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-2xl">Bedrooms</span>
              <span className="text-xl font-semibold">{levelInfo.bedrooms}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-2xl">Bathrooms</span>
              <span className="text-xl font-semibold">{levelInfo.bathrooms}</span>
            </li>
            {levelInfo.powderRooms && (
              <li className="flex justify-between items-center">
                <span className="text-2xl">Powder Room</span>
                <span className="text-xl font-semibold">{levelInfo.powderRooms}</span>
              </li>
            )}
            <li className="flex justify-between items-center">
              <span className="text-2xl">Square Feet</span>
              <span className="text-xl font-semibold">{levelInfo.squareFeet}</span>
            </li>
          </ul>
          <button className="text-3xl w-full mt-6 px-6 py-3 bg-[#CF3036] text-white hover:bg-[#F6F6F6] hover:text-black transition-colors duration-300">
            SCHEDULE A VISIT
          </button>
        </div>
      </div>
      <div className="text-2xl w-full md:w-2/3">
        <img
          src={levelInfo.floorPlanImage}
          alt={`Floor Plan for ${activePlan} - ${activeLevel}`}
          className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
}

function PlanSection({ section, id }: { section: PlanSection; id: string }) {
  const [activePlan, setActivePlan] = useState<string>(Object.keys(section.plans)[0]);
  const [activeLevel, setActiveLevel] = useState<string>("");

  // Set active level when active plan changes
  React.useEffect(() => {
    const levels = Object.keys(section.plans[activePlan].levels);
    if (levels.length > 0) {
      setActiveLevel(levels[0]);
    }
  }, [activePlan, section.plans]);

  if (!activeLevel) return null;

  return (
    <div id={id} className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-gray-800 mb-2">{section.title}</h2>
        <p className="text-2xl text-gray-600">{section.subtitle}</p>
      </div>

      {/* Bedroom selector */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(section.plans).map((planName) => (
            <button
              key={planName}
              onClick={() => setActivePlan(planName)}
              className={`px-6 py-3 font-medium transition-colors duration-300 ${
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

      {/* Level selector */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(section.plans[activePlan].levels).map((levelName) => (
            <button
              key={levelName}
              onClick={() => setActiveLevel(levelName)}
              className={`px-6 py-3 font-medium transition-colors duration-300 ${
                activeLevel === levelName
                  ? 'bg-[#CF3036] text-2xl text-white font-bold'
                  : 'bg-[#D6D6D6] text-2xl text-black hover:bg-gray-200'
              }`}
            >
              {levelName}
            </button>
          ))}
        </div>
      </div>

      <PlanDetails details={section.plans[activePlan]} activePlan={activePlan} activeLevel={activeLevel} />
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
