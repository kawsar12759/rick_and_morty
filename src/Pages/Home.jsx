import logo from '../assets/images/Logo.png'
import portal from '../assets/images/portal.png'
import bubble from '../assets/images/bubble.png'
import play from '../assets/images/play.png'
import gun from '../assets/images/Gun.png'
import { useState, useEffect, useRef, } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


const Home = () => {
    const [characters, setCharacters] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [locations, setLocations] = useState([]);
    const characterRef = useRef();
    const episodeRef = useRef();
    const locationRef = useRef();

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results.slice(0, 8));
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
            .then(res => res.json())
            .then(data => {
                setEpisodes(data.results);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location')
            .then(res => res.json())
            .then(data => {
                setLocations(data.results);
            })
            .catch(err => console.error(err));
    }, []);

    const handleScroll = (ref, direction) => {
        if (ref.current) {
            ref.current.scrollBy({
                left: direction === 'left' ? -200 : 200,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className='relative bg-[url(/Неон.png)] bg-cover bg-center'>

            <div className="absolute inset-0 bg-[#191D29] opacity-90 z-0"></div>

            <div className='relative z-10'>
                <div className='absolute right-24 top-48'><img src={gun} alt="" /></div>
                <div className='flex justify-center pt-[58px]'><img className='h-12' src={logo} alt="" /></div>
                <div className='relative flex justify-center text-white text-9xl pt-36 px-[424px]' style={{ fontFamily: 'TTTravels-ExtraBoldItalic' }}>

                    <h1 className='relative text-center '>    <span className="relative inline-block">
                        <span className='absolute -top-36 -left-36'>
                            <img className='w-auto h-auto max-w-none' src={bubble} alt="" />
                        </span>
                        T
                    </span>HE <span className='inline'><img className="h-[1em]  mb-6 inline" src={portal} alt="" /></span> <span className='bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] bg-clip-text text-transparent' style={{ fontFamily: 'TTTravels-ExtraBold' }}>RICK & MORTY</span> WIKI </h1>
                </div>
                <div className='flex items-center justify-between gap-16 px-[624px] py-12' style={{ fontFamily: 'TTTravels-DemiBold' }}>
                    <button className='btn rounded-full h-14 w-52 flex border-none bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] text-white items-center justify-center  text-xl'><img className='mr-2 h-5 w-5' src={play} alt="" /> Watch Now</button>
                    <p className='text-[#14D9E5]'>Brilliant but boozy scientist Rick hijacks his fretful
                        teenage grandson, Morty, for wild escapades
                        in other worlds and alternate dimensions.</p>
                </div>
            </div>
            <div className="relative w-full  mx-auto px-[102px] pt-8">
                <div className="flex justify-between items-center mb-3">
                    <h2 style={{ fontFamily: 'TTTravels-Medium' }} className="text-white text-2xl font-medium">Meet The Cast</h2>
                    <button className="text-white bg-transparent border border-[#9DFE00] h-10 w-28 rounded-lg px-3 py-1  hover:bg-[#9DFE00]  transition">
                        View All
                    </button>
                </div>

                <div className="relative">
                    <div
                        ref={characterRef}
                        className="flex overflow-y-hidden overflow-x-auto gap-8 scroll-smooth scrollbar-hide pb-4"
                    >
                        {characters.map((char) => (
                            <div
                                key={char.id}
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)' }}
                                className="min-w-[290px] h-[296px] p-[1px]  bg-gradient-to-r from-[#84F729] to-[#15bffd]  rounded-xl">
                                <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)' }} className='bg-[#262934] h-full w-full rounded-xl text-white  p-4  group'>
                                    <img
                                        src={char.image}
                                        alt={char.name}
                                        className="w-[258px] h-[216px] object-cover rounded-sm"
                                    />
                                    <div className='h-[62px] flex items-center'>
                                        <p className="poppins-medium text-md">{char.name}</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => handleScroll(characterRef, 'right')}
                        className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full shadow-md flex items-center text-2xl text-[#9DFE00] font-bold justify-center  hover:bg-gray-300 transition"
                    >
                        <IoIosArrowForward />
                    </button>

                    <button
                        onClick={() => handleScroll(characterRef, 'left')}
                        className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white text-[#9DFE00] w-12 h-12 rounded-full text-2xl font-bold shadow-md flex items-center justify-center hover:bg-gray-300 transition"
                    >
                        <IoIosArrowBack />
                    </button>
                </div>
            </div>

            <div className="relative w-full  mx-auto px-[102px] py-28">
                <div className="flex justify-between items-center mb-8">
                    <h2 style={{ fontFamily: 'TTTravels-Medium' }} className="text-white text-2xl font-medium">Episodes</h2>
                </div>

                <div className="relative">
                    <div
                        ref={episodeRef}
                        className="flex overflow-y-hidden overflow-x-auto gap-8 scroll-smooth scrollbar-hide pb-4"
                    >
                        {episodes.map((episode) => (
                            <div
                                key={episode.id}
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 87% 100%, 0 100%)' }}
                                className="min-w-[360px] h-[96px] p-[1px]  bg-gradient-to-r from-[#84F729] to-[#15bffd]  rounded-xl">
                                <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 87% 100%, 0 100%)' }} className='bg-[#262934] h-full w-full rounded-xl text-white  flex items-center p-6  group'>
                                    <div style={{ fontFamily: 'TTTravels-Medium' }}>
                                        <h4 className='text-lg font-light'>{episode.episode}</h4>
                                        <p className=" text-2xl font-medium">{episode.name}</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => handleScroll(episodeRef, 'right')}
                        className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full shadow-md flex items-center text-2xl text-[#9DFE00] font-bold justify-center  hover:bg-gray-300 transition"
                    >
                        <IoIosArrowForward />
                    </button>

                    <button
                        onClick={() => handleScroll(episodeRef, 'left')}
                        className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white text-[#9DFE00] w-12 h-12 rounded-full text-2xl font-bold shadow-md flex items-center justify-center hover:bg-gray-300 transition"
                    >
                        <IoIosArrowBack />
                    </button>
                </div>
            </div>


            <div className="relative w-full  mx-auto px-[102px] pb-20">
                <div className="flex justify-between items-center mb-8">
                    <h2 style={{ fontFamily: 'TTTravels-Medium' }} className="text-white text-2xl font-medium">Locations</h2>
                </div>

                <div className="relative">
                    <div
                        ref={locationRef}
                        className="flex overflow-y-hidden overflow-x-auto gap-8 scroll-smooth scrollbar-hide pb-4"
                    >
                        {locations.map((location) => (
                            <div
                                key={location.id}
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 87% 100%, 0 100%)' }}
                                className="min-w-[360px] h-[96px] p-[1px]  bg-gradient-to-r from-[#84F729] to-[#15bffd]  rounded-xl">
                                <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 87% 100%, 0 100%)' }} className='bg-[#262934] h-full w-full rounded-xl text-white  flex items-center p-6  group'>
                                    <div style={{ fontFamily: 'TTTravels-Medium' }}>
                                        <h4 className='text-lg font-light'>#{location.id}</h4>
                                        <p className=" text-2xl font-medium">{location.name}</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => handleScroll(locationRef, 'right')}
                        className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full shadow-md flex items-center text-2xl text-[#9DFE00] font-bold justify-center  hover:bg-gray-300 transition"
                    >
                        <IoIosArrowForward />
                    </button>

                    <button
                        onClick={() => handleScroll(locationRef, 'left')}
                        className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white text-[#9DFE00] w-12 h-12 rounded-full text-2xl font-bold shadow-md flex items-center justify-center hover:bg-gray-300 transition"
                    >
                        <IoIosArrowBack />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;