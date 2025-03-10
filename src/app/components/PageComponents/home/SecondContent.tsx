import { FaSpa, FaDiaspora, FaSwimmingPool, FaRegBuilding } from "react-icons/fa";
import { CgGym } from "react-icons/cg";

const arrayContent = [
    {
        logo: <FaSpa className="text-4xl md:text-5xl text-[#CF3036]"/>,
        title: "Mediterranean style spa & wellness",
        description: "Inspired by the thermal spas on the Italian island of Ischia, Villa Miami’s spa offers the ultimate in wellness: a stunning relaxation lounge, opulent plunge pools, complemented by saunas, steam rooms, and a variety of treatment rooms.",
    },
    {
        logo: <FaDiaspora className="text-4xl md:text-5xl text-[#CF3036]"/>,
        title: "waterside gardens",
        description: "Designed by the landscape architects at Enzo Enea, Villa Miami’s grounds are dotted with a series of private gardens, filled with native flowering trees and meant for moments of contemplation.",
    },
    {
        logo: <FaSwimmingPool className="text-4xl md:text-5xl text-[#CF3036]"/>,
        title: "an elevated pool deck",
        description: "Catch rays, socialize, or seek solitude on the 5th floor pool deck. Fully serviced and outfitted with a variety of lounges, this perfectly appointed space creates a sense of refined indulgence.",
    },
    {
        logo: <CgGym className="text-4xl md:text-5xl text-[#CF3036]"/>,
        title: "fitness studio",
        description: "A state-of-the-art gym (designed to feel like a spa), complete with the latest fitness equipment and both group and private training available.",
    },
    {
        logo: <FaRegBuilding className="text-4xl md:text-5xl text-[#CF3036]"/>,
        title: "MFG restaurant & bar",
        description: "MFG restaurant on site. MFG culinary services at home & an MFG curated lifestyle & an MFG curated lifestyle",
    },
    {
        logo: <FaRegBuilding className="text-4xl md:text-5xl text-[#CF3036]"/>,
        title: "MFG restaurant & bar",
        description: "MFG restaurant on site. MFG culinary services at home & an MFG curated lifestyle & an MFG curated lifestyle",
    },
]

const SecondContent = () => {
    return (
        <div className="bg-[#f8f8f8] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-20 lg:px-32 xl:px-56 py-10">
            {arrayContent.map((item, index) => (
                <div key={index} className="flex flex-col justify-between items-center bg-[#ffffff] p-6 rounded-lg shadow-md">
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className="w-full h-20 flex justify-center items-center mb-4">
                            {item.logo}
                        </div>
                        <h3 className="text-xl md:text-2xl font-neue-plak-black uppercase mb-4">{item.title}</h3>
                        <p className="text-2xl md:text-base text-[#b4b6bb] mb-4">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SecondContent;

