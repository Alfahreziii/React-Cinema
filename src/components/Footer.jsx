const Footer = ({ genre }) => {
    return (
        <footer className="px-16 max-[780px]:px-8 py-10 border-t border-[#E7E3FC3B]">
            <div className="flex max-[1050px]:flex-wrap">
                <div className="w-[35%] max-[1050px]:w-full max-[1050px]:mb-10">
                    <img src="/images/logo.png" alt="" className="w-[150px] mr-10"/>
                    <h1 className="text-[#C1C2C4] font-lato mt-5">@2023 Chill All Rights Reserved.</h1>
                </div>
                <div className="flex w-[65%] max-[1050px]:w-full max-[700px]:flex-wrap">
                    <div className="max-[700px]:w-full mr-auto">
                        <h1 className="text-white font-semibold font-lato mb-2">Genre</h1>
                        <div className="">
                            <ul className="text-[#C1C2C4] text-base grid gap-2 max-[477px]:grid-cols-3 min-[477px]:grid-flow-col min-[477px]:grid-rows-4">
                                {genre.map((item) => (
                                    <li key={item.id} className="w-max"><a href="#">{item.name}</a></li>
                                ))} 
                            </ul>
                        </div>
                    </div>
                    <div className="max-[700px]:w-full">
                        <h1 className="text-white font-semibold font-lato mb-2">Bantuan</h1>
                        <ul className="text-[#C1C2C4] text-base">
                            <li className=""><a href="#">Faq</a></li>
                            <li className="my-2"><a href="#">Kontak Kami</a></li>
                            <li className=""><a href="#">Privasi</a></li>
                            <li className="mt-2"><a href="#">Syarat & Ketentuan</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;