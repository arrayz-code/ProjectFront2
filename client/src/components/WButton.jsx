import React from 'react';

const WComponent = () => {
    const handleWhatsAppButtonClick = () => {
        window.open('https://api.whatsapp.com/send?phone=584147009384', '_blank');
    };

    return (
        <div className="fixed bottom-40 right-4 z-50">
            <button onClick={handleWhatsAppButtonClick} className=" bg-green-500 text-white px-2 py-2 rounded-full shadow-lg">
                <img src="./src/assets/whatsapp-logo.png" alt="WhatsApp Logo" className="w-6 h-6 " />
                
            </button>
        </div>
    );
};

export default WComponent;
