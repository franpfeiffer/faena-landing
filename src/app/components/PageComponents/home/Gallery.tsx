import React from 'react';

export default function Gallery() {
    const images = [
        "https://villamiami-residences.com/wp-content/uploads/2023/10/VILLA_PrimaryBed2-e1700143407827.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/10/VILLA_PrimaryBed1-e1700143437271.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/10/VILLA_PrimaryBathHummingbird-3-e1700143459910.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/10/VILLA_PrimaryBath-2-e1700143478525.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/10/Villa_Living_Birdseye-1-e1700143553870.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/10/VILLA_Living-1-e1700143573558.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/10/Villa_KitchenGreen2-e1700143603176.jpg",
        "https://villamiami-residences.com/wp-content/uploads/2023/10/Villa_KitchenGreen-e1700143620439.jpg",
    ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg">
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
  );
}
