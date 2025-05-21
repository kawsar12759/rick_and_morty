import { useLoaderData } from "react-router-dom";
import logo from '../assets/images/Logo.png'
import statusPng from '../assets/images/Status.png'
import speciesPng from '../assets/images/species.png'
import genderPng from '../assets/images/gender.png'
import originPng from '../assets/images/origin.png'
import locationPng from '../assets/images/location.png'
import redirectPng from '../assets/images/redirect.png'
import episodePng from '../assets/images/episode.png'
import seperatorPng from '../assets/images/seperator.png'
import { useState } from "react";
import star from '../assets/images/Star.png'
import miniStar from '../assets/images/MiniStar.png'
import ellipse from '../assets/images/Ellipse.png'
import ellipseBottom from '../assets/images/EllipseBottom.png'

const CastDetails = () => {
    const char = useLoaderData();
    const [episodeNames, setEpisodeNames] = useState([]);


    const getCharacterEpisodes = async () => {
        const characterRes = await fetch(`https://rickandmortyapi.com/api/character/${char.id}`);
        const characterData = await characterRes.json();

        const episodeUrls = characterData.episode;
        const episodeFetches = episodeUrls.map(url => fetch(url).then(res => res.json()));

        const episodes = await Promise.all(episodeFetches);
        const allEpisodeNames = episodes.map(ep => ep.name);
        setEpisodeNames(allEpisodeNames);
    };

    getCharacterEpisodes();
    return (
        <div className='relative bg-[url(/characterDetailsCover.jpg)] bg-cover bg-center max-w-[2600px] mx-auto min-w-[370px]'>
           
            <div className="absolute inset-0 bg-[#191D29] opacity-95 z-0"></div>
             <img className='absolute left-0 bottom-0' src={ellipseBottom} alt="" />
            <img className='absolute right-0 top-0' src={ellipse} alt="" />

            <img className='absolute right-8 bottom-56
                                    ' src={star} alt="" />
            <img className='absolute left-8 bottom-96
                                    ' src={star} alt="" />
            <img className='absolute left-1/4 bottom-24
                                    ' src={miniStar} alt="" />

            <div className='relative z-10 px-6 sm:px-12 md:px-16'>

                <div className='flex justify-center pt-[58px]'><img className='h-12' src={logo} alt="" /></div>
                <div className=" py-16 xl:flex">

                    <div className="xl:w-1/2 relative flex items-center justify-center">
                        <div className="hidden absolute left-8 h-full xl:flex xl:items-center mr-4  custom-text-outline "><h3 style={{ fontFamily: 'TTTravels-DemiBold' }} className="[writing-mode:vertical-rl] rotate-180 font-bold text-8xl opacity-25 text-[#1B202D]">{char.name}</h3></div>


                        <div className="mb-14 xl:mb-0">
                            <h3 style={{ fontFamily: 'TTTravels-DemiBold' }} className="text-center text-3xl sm:text-4xl lg:text-5xl text-[#14D9E5] mb-10">{char.name}</h3>
                            < div
                                className=" p-[1px] sm:h-80 sm:w-80 md:h-96 md:w-96 xl:h-80 xl:w-80    bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] rounded-lg"
                            >

                                <div
                                    className='bg-[#262934] h-full w-full rounded-lg text-white p-8 group'
                                >

                                    <img
                                        src={char.image}
                                        alt={char.name}
                                        className="w-full h-full object-cover rounded-sm"
                                    />

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="xl:w-1/2">
                        <img className="absolute hidden xl:block right-4/7 top-3/7" src={seperatorPng} alt="" />
                        <div className="grid grid-cols-3 gap-4 md:gap-10 justify-between">
                            <div className="p-[1px] w-full h-full  bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] rounded-lg">
                                <div
                                    className='bg-[#262934] w-full h-full rounded-lg text-white px-4 sm:px-8 py-4 sm:py-5 group'
                                >
                                    <img className="mb-5" src={statusPng} alt="" />
                                    <p style={{ fontFamily: 'TTTravels-Regular' }} className="text-base md:text-lg font-normal mb-2">Status</p>
                                    <p style={{ fontFamily: 'TTTravels-DemiBold' }} className="text-xl md:text-3xl font-semibold">{char.status}</p>
                                </div>
                            </div>
                            <div className="p-[1px] w-full h-full bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] rounded-lg">
                                <div
                                    className='bg-[#262934] w-full h-full rounded-lg text-white px-4 sm:px-8 py-4 sm:py-5 group'
                                >
                                    <img className="mb-5" src={speciesPng} alt="" />
                                    <p style={{ fontFamily: 'TTTravels-Regular' }} className="text-base md:text-lg font-normal mb-2">Species</p>
                                    <p style={{ fontFamily: 'TTTravels-DemiBold' }} className="text-xl md:text-3xl font-semibold">{char.species}</p>
                                </div>
                            </div>
                            <div className="p-[1px] w-full h-full  bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] rounded-lg">
                                <div
                                    className='bg-[#262934] w-full h-full rounded-lg text-white px-4 sm:px-8 py-4 sm:py-5 group'
                                >
                                    <img className="mb-5" src={genderPng} alt="" />
                                    <p style={{ fontFamily: 'TTTravels-Regular' }} className="text-base md:text-lg font-normal mb-2">Gender</p>
                                    <p style={{ fontFamily: 'TTTravels-DemiBold' }} className="text-xl md:text-3xl font-semibold">{char.gender}</p>
                                </div>
                            </div>
                            <div className="p-[1px] col-span-3 bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] rounded-lg">
                                <div
                                    className='bg-[#262934] w-full rounded-lg text-white px-4 sm:px-8 py-4 sm:py-5 group'
                                >
                                    <img className="mb-5" src={originPng} alt="" />
                                    <p style={{ fontFamily: 'TTTravels-Regular' }} className="text-base md:text-lg font-normal mb-2">Origin</p>
                                    <div className="flex justify-between">
                                        <p style={{ fontFamily: 'TTTravels-DemiBold' }} className="text-xl md:text-3xl font-semibold">{char.origin.name}</p>
                                        <img src={redirectPng} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-[1px] col-span-3 bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] rounded-lg">
                                <div
                                    className='bg-[#262934] w-full rounded-lg text-white px-4 sm:px-8 py-4 sm:py-5 group'
                                >
                                    <img className="mb-5" src={locationPng} alt="" />
                                    <p style={{ fontFamily: 'TTTravels-Regular' }} className="text-base md:text-lg font-normal mb-2">Last Known Location</p>
                                    <div className="flex justify-between">
                                        <p style={{ fontFamily: 'TTTravels-DemiBold' }} className="text-xl md:text-3xl font-semibold">{char.location.name}</p>
                                        <img src={redirectPng} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-[1px] col-span-3 bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] max-h-72 rounded-lg ">
                                <div
                                    className='bg-[#262934] h-full w-full rounded-lg text-white px-4 sm:px-8 py-4 sm:py-5 group max-h-72 overflow-y-auto custom-scrollbar'
                                >
                                    <img className="mb-5" src={episodePng} alt="" />
                                    <p style={{ fontFamily: 'TTTravels-Regular' }} className="text-base md:text-lg font-normal mb-2">Episode(S)</p>
                                    <ul style={{ fontFamily: 'TTTravels-DemiBold' }} className="list-disc list-inside space-y-1 text-xl  md:text-3xl font-semibold">
                                        {episodeNames.map((episodeName) => (<li>{episodeName}</li>))}

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CastDetails;