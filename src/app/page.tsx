import Header from "./components/Header";
import FirstContent from "./components/PageComponents/home/FirstContent";
import SecondContent from "./components/PageComponents/home/SecondContent";
import ThirdContent from "./components/PageComponents/home/ThirdContent";
import FourthContent from "./components/PageComponents/home/FourthContent";
import FifthContent from "./components/PageComponents/home/FifthContent";
import SixthComponent from "./components/PageComponents/home/SixthComponent";
import SeventhContent from "./components/PageComponents/home/SeventhContent";
import Gustavo from "./components/PageComponents/home/Gustavo";
import EightContent from "./components/PageComponents/home/EightContent";
import NinthContent from "./components/PageComponents/home/NinthContent";

export default function Home() {
  return (
    <div className="mt-[65px] lg:mt-[86px]">
        <Header
            title="FAENA RESIDENCES"
            description="Where Art, Luxury and Oceanfront Living Converge"
            image="/faena-1.jpeg"
            home
        />
        <FirstContent />
        <SecondContent />
        <ThirdContent />
        <FourthContent />
        <FifthContent />
        <SixthComponent />
        <SeventhContent />
        <Gustavo />
        <EightContent />
        <NinthContent />
    </div>
  );
}
