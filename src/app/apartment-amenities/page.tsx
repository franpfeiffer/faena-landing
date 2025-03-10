import SecondContent from "../components/PageComponents/home/SecondContent";
import EightContent from "../components/PageComponents/home/EightContent";
import NinthContent from "../components/PageComponents/home/NinthContent";

const ApartmentAmenities = () => {
    return (
        <div>
            <div className="bg-[url('/amenities.webp')] bg-cover bg-center bg-no-repeat h-[500px] lg:h-[550px] flex items-center justify-center ">
                <div className="z-40 text-white bg-[#000000ac] w-full h-full flex items-center justify-center">
                    <h2 className="uppercase font-black text-7xl">AMENITIES</h2>
                </div>
            </div>
            <SecondContent />
            <EightContent />
            <NinthContent />
        </div>
    )
}

export default ApartmentAmenities;
