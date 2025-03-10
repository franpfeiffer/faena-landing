import EightContent from "../components/PageComponents/home/EightContent";
import NinthContent from "../components/PageComponents/home/NinthContent";

const DepositStructure = () => {
    return (
    <div>
        <div className="bg-[url('/193.webp')] bg-cover bg-center bg-no-repeat h-[500px] lg:h-[550px] flex items-center justify-center ">
            <div className="z-40 text-white bg-[#000000ac] w-full h-full flex items-center justify-center">
                <h2 className="uppercase font-black text-4xl md:text-5xl lg:text-7xl">DEPOSIT STRUCTURE</h2>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-16 bg-white">
            <div className="max-w-3xl w-full space-y-16 text-center">
                <div className="space-y-8">
                    <div className="space-y-4 text-lg md:text-xl">
                        <p className="font-medium">10% WITH CONTRACT</p>
                        <p className="font-medium">10% IN 90 DAYS</p>
                        <p className="font-medium">10% IN GROUND BREAKING</p>
                        <p className="font-medium">10% IN 6 MONTHS AFTER GROUND BREAKING</p>
                        <p className="font-medium">10% AT TOP OFF</p>
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
