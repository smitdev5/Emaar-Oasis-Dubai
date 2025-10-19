// LuxuryPage.jsx
import React from "react";
// import "./LuxuryPage.css";
import "../App.css";
import { useEnquiryModal } from "./EnquiryModal";

const LuxuryPage = () => {
  const { openModal } = useEnquiryModal();
  return (
    <div id="about" className="luxury-page">
      {/* ----------- Section 1: Luxury Launch ----------- */}
      <section className="luxury-section">
        <div className="luxury-image">
          <img
            src="../Assets/banner2.webp"
            alt="Luxury View"
          />
        </div>
        <div className="luxury-text">
          <h2 className="font-semibold">
            About Emaar The Oasis
          </h2>
          <p>
            Experience refined waterfront living at The Oasis by Emaar, an exclusive retreat surrounded by lush landscapes and serene waterways. Featuring luxurious mansions and villas designed by world-renowned architects, each residence blends elegance with comfort. Enjoy seamless indoor-outdoor living, world-class amenities, and personalized services that elevate everyday moments. With access to four international golf courses, a clubhouse, private beach, healthcare centre, and expansive open spaces, Emaar The Oasis Dubai  redefines sophistication. Discover a lifestyle of timeless charm, indulgence, and tranquility — welcome home to Emaar The Oasis.
          </p>
          <button onClick={openModal} className="mt-4 font-semibold border-2 rounded-md border-[#997736] text-[#997736] hover:text-white px-6 py-2 hover:bg-[#997736] transition">DOWNLOAD BROCHURE</button>
        </div>
      </section>
    </div>
  );
};

export default LuxuryPage;
