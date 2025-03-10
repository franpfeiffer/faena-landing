import React from 'react'

export default function SeventhContent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white">
      <div className="max-w-3xl w-full space-y-16 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">DEPOSIT STRUCTURE</h1>

          <div className="space-y-4 text-lg md:text-xl">
            <p className="font-medium">10% WITH CONTRACT</p>
            <p className="font-medium">10% IN 90 DAYS</p>
            <p className="font-medium">10% IN GROUND BREAKING</p>
            <p className="font-medium">10% IN 6 MONTHS AFTER GROUND BREAKING</p>
            <p className="font-medium">10% AT TOP OFF</p>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#ff7e22] leading-tight">
            HOME IS WAITING FOR YOU HERE
          </h2>

          <button className="bg-[#FF7E22] text-white px-8 py-3 hover:bg-[#F6F6F6]/90 hover:text-black transition-colors font-medium">
            SCHEDULE A VISIT
          </button>
        </div>
      </div>
    </div>
  )
}


