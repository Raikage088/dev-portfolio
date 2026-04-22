import { useState } from "react";

import { certificatesAlbum } from "../data/certificate.js";
import { CertificateCard } from "@/components/CertificateCard.jsx";

export const Certificate = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <section
      id="certification"
      className="flex items-center flex-col min-h-screen py-24 px-4 gap-8"
    >
      <h1 className="font-bold text-2xl">Certifications</h1>
      <p className="text-gray-500">
        9 certificates across multiple platforms — Verified credentials from
        Cisco Networking Academy, Udemy, EPCPS and ICpEP.
      </p>
      <div className="grid grid-cols-3 place-items-center gap-1">
        {certificatesAlbum.map((album) => (
          <CertificateCard
            key={album.id}
            album={album}
            onClick={() =>
              setSelectedAlbum(selectedAlbum === album ? null : album)
            }
          />
        ))}
      </div>
      {selectedAlbum && (
        <div className="border-t border-white/50 pt-10 mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-black">
              {selectedAlbum.issuer} Certificates
            </h2>

            <button
              onClick={() => setSelectedAlbum(null)}
              className="text-sm text-gray-400 hover:text-gray-400/80 transition-colors duration-300 ease-in-out"
            >
              Close ✕
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-150">
            {selectedAlbum.certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative bg-white rounded-xl border border-gray-200 p-1 
           transition-all duration-500 ease-in-out 
           hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] 
           hover:-translate-y-2 z-0 hover:z-100"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full rounded-t-lg"
                />

                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 w-150 pointer-events-none transition-all duration-500">
                  <img
                    src={cert.image}
                    className="rounded-lg shadow-2xl border-4 border-white"
                    alt="Preview"
                  />
                </div>

                <div className="flex items-center justify-center flex-col py-3 px-2 gap-3">
                  <p className="text-black mt-3 text-sm text-center font-bold">
                    {cert.title}
                  </p>

                  <small className="text-gray-500">{cert.issueDate}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
