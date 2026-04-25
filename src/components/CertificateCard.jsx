import React from "react";

export const CertificateCard = ({ album, onClick }) => {
  const thumbnail = album.certificates[0]?.image;
  const certificateCount = album.certificates.length;

  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 hover:z-0"
    >
      <img
        src={thumbnail}
        alt={album.issuer}
        className="w-full h-80 object-cover block"
      />

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-3 pt-8 pb-3">
        <div className="flex justify-center items-center gap-60">
          <h3 className="flex items-center font-bold text-white text-lg truncate">
            {album.issuer}
          </h3>
          <span
            className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full"
            style={{ backgroundColor: `hsl(${album.color})` }}
          >
            {certificateCount} Certificates
          </span>
        </div>
      </div>
    </div>
  );
};
