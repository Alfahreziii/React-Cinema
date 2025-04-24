import React from 'react';

const MovieCard = ({ image, type, tag, episodes, genres, ageRating}) => {
  return (
    <div className="min-w-[150px] max-w-[340px] flex-shrink-0 relative group transform transition-transform duration-300 z-10">
      <div className="relative">
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#181A1C]/50 to-[#181A1C]/0 z-10"></div>
        <img src={image} alt="movie" className="rounded-lg w-full h-auto" />

        {type === "new-episode" && (
          <div className="absolute w-full flex items-center top-0 px-4 pt-3 font-lato text-white font-bold z-20">
            <span className="bg-[#0F1E93] px-3 py-1 rounded-full">{tag || "Episode Baru"}</span>
          </div>
        )}

        {type === "top-ten" && (
          <div className="absolute flex items-center top-0 pr-4 right-0 font-lato text-white font-bold z-20">
            <div className="bg-[#B71F1D] px-2 py-1 rounded-tr-lg rounded-bl-lg text-center">
              <h1>Top</h1>
              <p>10</p>
            </div>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#181A1C] to-[#181A1C]/50 z-0"></div>
          <div className="flex justify-between items-center mb-4 px-4 mt-3 z-20">
              <div className="flex space-x-3">
              <button className="bg-white text-black rounded-full px-3 py-2 text-center">
                ▶
              </button>
                <button className="bg-[#2A2E30] font-bold text-white rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
          </div>
          <div className="flex items-center space-x-2 text-white text-sm mb-2 px-4 z-20">
            <span className="bg-[#2A2E30] px-2 py-1 rounded-full text-xs">{ageRating}</span>
            <span className="font-bold">{episodes} Episode</span>
          </div>
          <div className="text-white text-xs flex flex-wrap gap-x-2 gap-y-1 px-4 mb-4 z-20">
            {genres && genres.map((genre, index) => (
              <React.Fragment key={index}>
                <span>{genre}</span>
                {index !== genres.length - 1 && <span className="text-gray-500">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MovieCard;
