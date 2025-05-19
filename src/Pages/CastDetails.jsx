import { useLoaderData } from "react-router-dom";
import logo from '../assets/images/Logo.png'
import statusPng from '../assets/images/Status.png'
import speciesPng from '../assets/images/species.png'
import genderPng from '../assets/images/gender.png'
import originPng from '../assets/images/origin.png'
import locationPng from '../assets/images/location.png'
import redirectPng from '../assets/images/redirect.png'
import episodePng from '../assets/images/episode.png'

const CastDetails = () => {
    const char = useLoaderData();
    return (
        <div className='relative bg-[url(/characterDetailsCover.jpg)] bg-cover bg-center'>
            <div className="absolute inset-0 bg-[#191D29] opacity-95 z-0"></div>
            <div className='relative z-10 px-10 md:px-16'>
                <div className='flex justify-center pt-[58px]'><img className='h-12' src={logo} alt="" /></div>
                <div className="py-16 flex">
                    <div className="w-2/5 flex items-center justify-center  border">
                        <div className="flex items-center justify-center">
                            <div className="border-8">
                                <h3 style={{ fontFamily: 'TTTravels-DemiBold' }} className="text-center text-5xl text-[#14D9E5] mb-10">{char.name}</h3>
                                < div
                                    className=" p-[1px] h-96 w-96    bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] rounded-lg"
                                >

                                    <div
                                        className='bg-[#262934]  h-full w-full rounded-lg text-white p-8 group'
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
                    </div>
                    <div className="w-3/5 border-4 pl-10">
                        <div className="grid grid-cols-3 gap-10 justify-between">
                            <div className="p-[1px] w-full h-full  bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] rounded-lg">
                                <div
                                    className='bg-[#262934] w-full h-full rounded-lg text-white p-8 group'
                                >
                                    <img className="mb-5" src={statusPng} alt="" />
                                    <p style={{ fontFamily: 'TTTravels-Regular' }} className="text-lg font-normal mb-2">Status</p>
                                    <p style={{ fontFamily: 'TTTravels-DemiBold' }} className="text-3xl font-semibold">{char.status}</p>
                                </div>
                            </div>
                            <div className="p-[1px] w-full h-full bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] rounded-lg">
                                <div
                                    className='bg-[#262934] w-full h-full rounded-lg text-white p-8 group'
                                >
                                    <img className="mb-5" src={speciesPng} alt="" />
                                    <p style={{ fontFamily: 'TTTravels-Regular' }} className="text-lg font-normal mb-2">Species</p>
                                    <p style={{ fontFamily: 'TTTravels-DemiBold' }} className="text-3xl font-semibold">{char.species}</p>
                                </div>
                            </div>
                            <div className="p-[1px] w-full h-full  bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] rounded-lg">
                                <div
                                    className='bg-[#262934] w-full h-full rounded-lg text-white p-8 group'
                                >
                                    <img className="mb-5" src={genderPng} alt="" />
                                    <p style={{ fontFamily: 'TTTravels-Regular' }} className="text-lg font-normal mb-2">Gender</p>
                                    <p style={{ fontFamily: 'TTTravels-DemiBold' }} className="text-3xl font-semibold">{char.gender}</p>
                                </div>
                            </div>
                            <div className="p-[1px] col-span-3 bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] rounded-lg">
                                <div
                                    className='bg-[#262934] w-full rounded-lg text-white p-8 group'
                                >
                                    <img className="mb-5" src={originPng} alt="" />
                                    <p style={{ fontFamily: 'TTTravels-Regular' }} className="text-lg font-normal mb-2">Origin</p>
                                    <div className="flex justify-between">
                                        <p style={{ fontFamily: 'TTTravels-DemiBold' }} className="text-3xl font-semibold">{char.origin.name}</p>
                                        <img src={redirectPng} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-[1px] col-span-3 bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] rounded-lg">
                                <div
                                    className='bg-[#262934] w-full rounded-lg text-white p-8 group'
                                >
                                    <img className="mb-5" src={locationPng} alt="" />
                                    <p style={{ fontFamily: 'TTTravels-Regular' }} className="text-lg font-normal mb-2">Last Known Location</p>
                                    <div className="flex justify-between">
                                        <p style={{ fontFamily: 'TTTravels-DemiBold' }} className="text-3xl font-semibold">{char.location.name}</p>
                                        <img src={redirectPng} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-[1px] col-span-3 bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] max-h-72 rounded-lg ">
                                <div
                                    className='bg-[#262934] w-full rounded-lg text-white p-8 group max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-[#14D9E5] scrollbar-track-transparent'
                                >
                                    <img className="mb-5" src={episodePng} alt="" />
                                    <p style={{ fontFamily: 'TTTravels-Regular' }} className="text-lg font-normal mb-2">Episode(S)</p>
                                    <ul style={{ fontFamily: 'TTTravels-DemiBold' }} className="list-disc list-inside space-y-1  text-3xl font-semibold">
                                        <li>Pilot</li>
                                        <li>Pilot</li>
                                        <li>Pilot</li>
                                        <li>Pilot</li>
                                        <li>Pilot</li>
                                        <li>Pilot</li>
                                        <li>Pilot</li>
                                        <li>Pilot</li>
                                        <li>Pilot</li>
                                        <li>Pilot</li>
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