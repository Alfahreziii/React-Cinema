const Footer = ({ genre }) => {
    return (
        <footer className="px-16 max-[780px]:px-8 py-10 border-t border-[#E7E3FC3B]">
            <div className="flex max-[1050px]:flex-wrap">
                <div className="w-[35%] max-[1050px]:w-full max-[1050px]:mb-10">
                    <img src="/images/logo.png" alt="" className="w-[150px] mr-10"/>
                    <h1 className="text-[#C1C2C4] font-lato mt-5">@2023 Chill All Rights Reserved.</h1>
                </div>
                <div className="flex w-[65%] max-[1050px]:w-full max-[700px]:flex-wrap">
                    <div className="max-[700px]:w-full">
                        <h1 className="text-white font-semibold font-lato mb-2">Genre</h1>
                        <div className="grid grid-cols-5 max-[1050px]:grid-cols-4 gap-8">
                            <ul className="text-[#C1C2C4] text-base grid gap-2 grid-flow-col grid-rows-4">
                                {genre.map((item) => (
                                    <li key={item.id} className="w-max"><a href="#">{item.name}</a></li>
                                ))} 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;