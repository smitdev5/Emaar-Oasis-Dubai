// LocationSection.jsx
import React from "react";
import { useEnquiryModal } from "./EnquiryModal";

export default function LocationSection() {
    const { openModal } = useEnquiryModal();

    return (
        <section id="location" className="w-full px-4 py-8 bg-white">
            <div className="max-w-3xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-[#997736] mb-4">
                    LOCATION ADVANTAGES
                </h2>

                {/* Google Map Embed */}
                <div className="w-full max-w-5xl mx-auto aspect-video">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.2293347270215!2d55.212766599999995!3d24.9923221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f71000de61009%3A0x367815f37a37ac44!2sOasis%20by%20Emaar%20(Under%20Construction)!5e0!3m2!1sen!2sin!4v1760011018060!5m2!1sen!2sin"
                        className="w-full h-full rounded-lg shadow-lg"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Emaar Oasis Map"
                    ></iframe>
                </div>

                {/* Button */}
                <div className="mt-6">
                    <button onClick={openModal} className="px-6 py-3 border-2 border-[#997736] text-[#997736] font-semibold rounded-md hover:bg-[#997736] hover:text-white transition">
                        REQUEST LOCATION DETAILS
                    </button>
                </div>
            </div>
        </section>
    );
}
