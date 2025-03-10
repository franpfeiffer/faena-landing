import SixthComponent from "../components/PageComponents/home/SixthComponent";
import EightContent from "../components/PageComponents/home/EightContent";
import NinthContent from "../components/PageComponents/home/NinthContent";

const FloorPlans = () => {
    return (
        <div>
            <div className="bg-[url('/floorplans.webp')] bg-cover bg-center bg-no-repeat h-[500px] lg:h-[550px] flex items-center justify-center ">
                <div className="z-40 text-white bg-[#000000ac] w-full h-full flex items-center justify-center">
                    <h2 className="uppercase font-black text-7xl">Floor Plans</h2>
                </div>
            </div>
            <SixthComponent />
            <EightContent />
            <NinthContent />
        </div>
        
    )
}

export default FloorPlans;
