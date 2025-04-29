import EightContent from "../components/PageComponents/home/EightContent";
import NinthContent from "../components/PageComponents/home/NinthContent";

const DepositStructure = () => {
    return (
    <div>
        <div className="bg-[url('/faena-1.jpeg')] bg-cover bg-center bg-no-repeat h-[500px] lg:h-[550px] flex items-center justify-center ">
            <div className="z-40 text-white bg-[#000000ac] w-full h-full flex items-center justify-center">
                <h2 className="uppercase font-neue-plak-black text-4xl lg:text-8xl">DEPOSIT STRUCTURE</h2>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-16 bg-white">
            <div className="max-w-3xl w-full space-y-16 text-center">
                <div className="space-y-8">
                    <div className="space-y-4 text-4xl ">
                        <p className="font-medium">5% at Reservation</p>
                        <p className="font-medium">5% 45 days after Signing Contract</p>
                        <p className="font-medium">10% 120 days from Signing Contract</p>
                        <p className="font-medium">10% at Groundbreaking</p>
                        <p className="font-medium">10% 12 Months after Groundbreaking</p>
                        <p className="font-medium">10% Pouring of Highest Residential Unit</p>
                        <p className="font-medium">50% at Closing</p>
                    </div>
                </div>
            </div>
        </div>
        <EightContent />
        <NinthContent />
    </div>
    )
};

export default DepositStructure;
