import EightContent from '../components/PageComponents/home/EightContent';
import NinthContent from '../components/PageComponents/home/NinthContent';

import React from 'react';

const LegalDisclaimer = () => {
  return (
    <div> 
    <div className="min-h-screen mt-28 bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-black mb-24 lg:text-6xl">
          LEGAL DISCLAIMER
        </h2>
        <div className="border border-gray-300 shadow-2xl lg:p-8">
          <p className="text-lg p-0 text-gray-700 leading-relaxed lg:text-xl my-4 mx-8">
            Dezer Platinum Realty is not at all related to the developer in any way. For the correct representation make reference 
            to the document by section 718.503 of the Florida statues, to be furnished by the developer and subject to change. 
            This website cannot be relied upon as correctly stating the representation of the developer. 
            This website is an independent site featured and represented by Dezer Platinum Realty, a Licensed Florida Real Estate 
            Brokerage. All the related information text and rendering provided by the developer. This website, the information 
            provided, including pricing is solely for information purposes and is subject to change without notice. 
            Oral representation cannot be relied upon as correctly stating the representation of the developer. 
            No federal agency has judged the merits or value if any of the property. This is not an offer to 
            sell or solicitation to offer to buy, the condominium units in states where such offer or solicitation cannot 
            be made. This website is brought to you by Dezer Platinum Realty. As Realtors we offer unbiased real estate 
            representation to buyers and sellers. We offer individualized real estate services for you and not for the developer.
          </p>
        </div>
      </div>
    </div>
    <EightContent />
    <NinthContent />
    </div>
  );
}

export default LegalDisclaimer;
