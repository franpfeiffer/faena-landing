import Carousel from '../components/PageComponents/home/Carousel';
import Gallery from '../components/PageComponents/home/Gallery';
import MultiCarousel from '../components/PageComponents/home/MultiCarousel';
import EightContent from '../components/PageComponents/home/EightContent';
import NinthContent from '../components/PageComponents/home/NinthContent';

const Renderings = () => {
    const viewsImages = [
        "https://villamiami-residences.com/wp-content/uploads/2023/09/views-carousel-image-2.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/09/View_D-1.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/09/View_C.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/09/View_B.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/09/View_A.jpg"
    ];

    const exteriorImages = [
        "https://villamiami-residences.com/wp-content/uploads/2023/10/Villa_WaterfrontSouth-e1700663995425.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/10/VILLA_Hero_Water-e1699617959404.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/10/Villa_HelicopterPad-e1700663036381.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/10/VILLA_ExteriorHero-e1700663074653.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/10/VILLA_Exterior-e1700663918651.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/10/VILLA_Arrival-e1700663967475.jpg"
    ];

    const kitchenImages = [
        "https://villamiami-residences.com/wp-content/uploads/2023/10/Villa_Kitchen_TileVar-e1700144058635.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/10/Villa_KitchenCream-e1700143654405.jpg"
    ];

    const bedroomImages = [
        "https://villamiami-residences.com/wp-content/uploads/2023/10/Bedroom.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/10/210-scaled.jpg"
    ];

    return (
        <div>
            <div className="bg-[url('/193.webp')] bg-cover bg-center bg-no-repeat h-[500px] lg:h-[550px] flex items-center justify-center">
                <div className="z-40 text-white bg-[#000000ac] w-full h-full flex flex-col items-center justify-center text-center px-6">
                    <h2 className="uppercase font-black text-4xl md:text-5xl  lg:text-7xl">renderings</h2>
                    <h4 className="uppercase text-sm pt-4 pb-12 md:text-lg  lg:text-xl">Airy, Italianate living in the heart of Miami</h4>
                    <p className="font-light text-sm max-w-md md:text-md  lg:text-lg">
                        New York design studio Charles & Co developed the residence interiors by marrying a sophisticated 
                        European sensibility with a focus on warmth, romance, and the waterfront. Estate-style residences 
                        overlook the bay, beaches, and beyond, while sitting high in the sky.
                    </p>
                </div>
            </div>
        <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="uppercase text-3xl md:text-4xl lg:text-8xl font-black text-[#ff7e22] leading-tight">Views</h2>
            </div>
            <div>
              <p className="text-2xl text-gray-700">
                Homes with a private, 360° view of Biscayne Bay and the lights of Miami, and the far-stretching beaches beyond. 
                Sunlight at every hour. Wake to the morning light rising over the Atlantic, and take aperitivo on the back veranda 
                while the sun sets.
              </p>
            </div>
          </div>
          <Carousel images={viewsImages} />
        </div>
      </section>
      <section className="py-20 px-8 bg-white" id="exterior">
            <div className="max-w-7xl mx-auto">
                <h2 className="uppercase pb-6 text-3xl md:text-4xl lg:text-6xl font-black text-[#ff7e22] leading-tight">Exterior</h2>
                <MultiCarousel images={exteriorImages} slidesToShow={3} />
            </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="uppercase text-3xl md:text-4xl lg:text-6xl font-black text-[#ff7e22] leading-tight">Great Rooms</h2>
            </div>
            <div>
              <p className="text-2xl text-gray-700">Old-world elegance with every modern convenience</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img 
              src="https://villamiami-residences.com/wp-content/uploads/2023/09/195.jpg"
              alt="Great Room"
              className="w-full h-[600px] object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://villamiami-residences.com/wp-content/uploads/2023/09/196.jpg"
              alt="Great Room"
              className="w-full h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="uppercase text-3xl md:text-4xl lg:text-6xl font-black text-[#ff7e22] leading-tight">Kitchens</h2>
            </div>
            <div>
              <p className="text-3xl text-gray-700">Michelin star-worthy chef's kitchens in every home</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Carousel images={kitchenImages} />
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                The kitchen is the heart of the home, so residences are equipped with chef's kitchens, designed by MFG's Mario Carbone. CornuFé series ovens and stovetops from La Cornue, Wolf appliances, and pasta sinks marry a traditional culinary ethos with state-of-the-art standards.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Designed by MFG's Mario Carbone</li>
                <li>Chef's style kitchen featuring pasta tanks and convection steam ovens</li>
                <li>Italian cabinetry and wine fridge</li>
                <li>Cornue Fe, Sub Zero and Wolf appliances</li>
                <li>Grocery stocking options available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="uppercase text-3xl md:text-4xl lg:text-6xl font-black text-[#ff7e22] leading-tight">Bedrooms</h2>
            </div>
            <div>
              <p className="text-4xl text-gray-700">Wake up to panoramic views of the water</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Carousel images={bedroomImages} />
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Start every day with a view of the bay, and go to bed with the lights of Miami twinkling in the distance. Bedroom suites at Villa come with unending views, in addition to expansive floor plans for even-more-intimate lounging — to say nothing of the private dressing rooms.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Spacious primary suites with sweeping views, lounge area, and direct balcony access</li>
                <li>Gracious atelier-style dressing rooms with shelving and storage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="uppercase pb-8 text-3xl md:text-4xl lg:text-5xl font-black text-[#ff7e22] leading-tight">Residence Gallery</h2>
          <Gallery />
        </div>
      </section>
      <EightContent />
      <NinthContent />
     </div>
    );
};

export default Renderings;

