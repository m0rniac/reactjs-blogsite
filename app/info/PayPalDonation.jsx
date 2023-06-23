"use client";
import React, { useEffect } from 'react';

const PayPalButton = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
        script.charset = 'UTF-8';
        document.body.appendChild(script);

        script.onload = () => {
            window.PayPal.Donation.Button({
                env: 'production',
                hosted_button_id: 'QG8QWK7TG92ZE',
                image: {
                    src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
                    alt: 'Donate with PayPal button',
                    title: 'PayPal - The safer, easier way to pay online!',
                },
            }).render('#donate-button');
        };

        return () => {
            // Limpiar el script cuando el componente se desmonte
            document.body.removeChild(script);
        };
    }, []);

    return <div id="donate-button-container"><div id="donate-button"></div></div>;
};

export default PayPalButton;
