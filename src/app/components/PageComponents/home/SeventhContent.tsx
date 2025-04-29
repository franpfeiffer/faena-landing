import React from 'react'

export default function SeventhContent() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white">
            <div className="max-w-3xl w-full space-y-16 text-center">
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-5xl font-neue-plak-black tracking-tight">DEPOSIT STRUCTURE</h1>

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
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-neue-plak-black text-[#CF3036] leading-tight">
                        HOME IS WAITING FOR YOU HERE
                    </h2>

                    <button className="bg-[#CF3036] text-3xl text-white px-8 py-3 hover:bg-[#F6F6F6]/90 hover:text-black transition-colors font-medium">
                        SCHEDULE A VISIT
                    </button>
                </div>
            </div>
        </div>
    )
}


