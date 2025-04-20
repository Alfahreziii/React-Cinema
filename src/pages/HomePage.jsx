import { Link } from "react-router-dom"
import MovieSlider from "../components/MovieSlider";
import sampleMovies from "../data/movie"

const HomePage = () => {
  return (
    <>
    <div className="bg-hero bg-[url(/images/bg-hero.png)] relative w-full mt-20">
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#181A1C] to-[#181A1C]/0 z-10"></div>
      <div className="absolute w-full bottom-0 px-16 max-[780px]:px-8 max-[480px]:px-5 pb-20 z-20">
          <div className="w-[60%] max-[790px]:w-full">
              <h1 className="text-white font-bold font-lato text-5xl max-[600px]:text-4xl">Duty After School</h1>
              <p className="text-white font-lato text-base mt-7 max-[600px]:hidden">Sebuah benda tak dikenal mengambil alih dunia. 
                  Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, 
                  termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
              <p className="text-white font-lato text-base mt-7 min-[600px]:hidden">Sebuah benda tak dikenal mengambil alih dunia. 
                  Dalam keputusasaan, Departemen Pertahanan mulai merekrut...</p>
          </div>
          <div className="flex gap-3 mt-7">
              <Link to="#" className="bg-[#0F1E93] flex items-center px-6 max-[480px]:px-5 py-2 max-[480px]:py-1 text-center text-white font-lato font-bold rounded-full max-[480px]:text-sm">Mulai</Link>
              <Link to="#" className="flex bg-[#22282A] items-center rounded-full max-[480px]:px-4 px-5 py-2">
                  <svg className="w-6 mr-2 size-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                  </svg>
                  <span className="text-white font-lato font-bold max-[480px]:text-sm"> 
                      Selengkapnya
                  </span>                      
              </Link>
              <Link to="#" className="rounded-full border-[#C1C2C4] border max-[480px]:py-1 max-[480px]:text-sm flex items-center px-2 font-lato py-2 text-[#C1C2C4]">
                  18+
              </Link>
              <Link to="#" className=" ml-auto rounded-full border-[#C1C2C4] border px-2 font-lato py-2 text-[#C1C2C4]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 max-[480px]:size5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>                      
              </Link>
          </div>
      </div>
    </div>
    <div class="px-16 max-[780px]:px-8 max-[480px]:px-5 relative -mt-16">
      <MovieSlider movies={sampleMovies}/>
    </div>
    </>
  )
}

export default HomePage