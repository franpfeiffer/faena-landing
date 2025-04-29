import React from 'react';
import { Phone } from 'lucide-react';

const Gustavo = () => {
    return (
        <div className="flex flex-col w-full max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-6 w-full">
                {/* Columna de imagen - Ajustada para móvil */}
                <div className="flex flex-col items-center md:w-1/3 mx-4 md:mx-16 mb-6 md:mb-0">
                    <div className="w-64 md:w-full mx-auto">
                        <img
                            src="/gustavo.png"
                            alt="Gustavo A Strallnikoff"
                            className="w-full h-auto rounded-full"
                        />
                    </div>
                </div>

                {/* Columna de información - Ajustada para móvil */}
                <div className="flex flex-col md:w-1/3 space-y-4 px-6 md:px-0 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-neue-plak-black">
                        Gustavo A Strallnikoff
                    </h2>

                    <div className="text-gray-700 text-2xl md:text-4xl">
                        <p>Realtor Associate</p>
                    </div>

                    <ul className="space-y-2">
                        <li className="flex items-center justify-center md:justify-start">
                            <a href="https://wa.link/ztiuls" className="flex items-center text-2xl md:text-4xl">
                                <span className="mr-2">
                                    <Phone size={24} />
                                </span>
                                <span>(305) 987-3318</span>
                            </a>
                        </li>
                    </ul>

                    <div className="mt-4 flex justify-center md:justify-start">
                        <img
                            src="/dezer-logo.png"
                            alt="Dezer"
                            className="h-16 md:h-full w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gustavo;
