import logo from '../assets/images/Logo.png'
import portal from '../assets/images/portal.png'
import bubble from '../assets/images/bubble.png'
import play from '../assets/images/play.png'
import gun from '../assets/images/Gun.png'
import { useState, useEffect, useRef, } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import spiral from '../assets/images/Spiral_Element.png'
import star from '../assets/images/Star.png'
import miniStar from '../assets/images/MiniStar.png'
import ellipseBottom from '../assets/images/EllipseBottom.png'
import ellipseTop from '../assets/images/EllipseTop.png'
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
        <div className='relative bg-[url(/Неон.png)] bg-cover bg-center max-w-[2600px] mx-auto min-w-[370px]'>

            <div className="absolute inset-0 bg-[#191D29] opacity-90 z-0"></div>
            <img className='absolute left-0 bottom-0' src={ellipseBottom} alt="" />
            <img className='absolute right-0 top-0' src={ellipseTop} alt="" />
            <img className='absolute right-0 bottom-0
            ' src={spiral} alt="" />
            <img className='absolute right-8 bottom-56
            ' src={star} alt="" />
            <img className='absolute left-8 bottom-48
            ' src={star} alt="" />
            <img className='absolute left-1/2 bottom-80
            ' src={miniStar} alt="" />
            <div className='relative z-10'>

                <div className='flex justify-center pt-[58px]'><img className='h-12' src={logo} alt="" /></div>
                <div className='flex text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl pt-16 lg:pt-28 2xl:pt-36 px-6 sm:px-14 md:px-28 lg:px-36 xl:px-60 2xl:px-72  3xl:px-80' style={{ fontFamily: 'TTTravels-ExtraBoldItalic' }}>
                    <div>

                        <div ><h1 className='relative xl:text-center'>    <span className="relative inline-block">
                            <span className='absolute -top-6 -left-4 sm:-top-6 sm:-left-6 md:-top-10 md:-left-6 lg:-top-14 lg:-left-8  xl:-top-20 xl:-left-16 2xl:-top-24 2xl:-left-16'>
                                <img className='h-14 w-24 sm:h-16 sm:w-28 md:h-24 md:w-36 lg:h-32 lg:w-48 xl:h-44 xl:w-52 2xl:h-52 2xl:w-60' src={bubble} alt="" />
                            </span>
                            T
                        </span>HE <span className='inline'><img className="h-[1em]  mb-6 inline" src={portal} alt="" /></span> <span className='bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] bg-clip-text text-transparent' style={{ fontFamily: 'TTTravels-ExtraBold' }}>RICK & MORTY</span> WIKI </h1>
                        </div>
                        <div className='flex items-center justify-center ' style={{ fontFamily: 'TTTravels-DemiBold' }}>
                            <div className='xl:flex xl:flex-row-reverse items-center justify-center gap-16 py-5 xl:px-10 xl:w-full 2xl:max-w-3/4'>
                                <p className='text-[#14D9E5] text-xs lg:text-sm mb-6 xl:mb-0'>Brilliant but boozy scientist Rick hijacks his fretful
                                    teenage grandson, Morty, for wild escapades
                                    in other worlds and alternate dimensions.</p>
                                <button className='btn rounded-full h-10 w-40 lg:h-14 lg:w-52 flex border-none bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] text-white items-center justify-center text-md  lg:text-xl'><img className='mr-2 h-5 w-5' src={play} alt="" /> Watch Now</button>
                            </div>

                        </div>
                    </div>
                    <div><img className='h-full' src={gun} alt="" /></div>
                </div>

            </div>
            <div className="relative w-full  mx-auto px-10 sm:px-16 md:px-20 lg:px-24 pt-8">
                <div className="flex justify-between items-center mb-3">
                    <h2 style={{ fontFamily: 'TTTravels-Medium' }} className="text-white text-base sm:text-lg md:text-2xl font-medium">Meet The Cast</h2>
                    <Link to={`/casts`}> <button className="text-white bg-transparent border border-[#9DFE00] h-10 w-28 rounded-lg px-3 py-1 text-base xl:text-lg  hover:bg-[#9DFE00]  transition">
                        View All
                    </button></Link>
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
                                        <p className="poppins-medium text-base sm:text-md">{char.name}</p>
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

            <div className="relative w-full  mx-auto px-10 sm:px-16 md:px-20 lg:px-24 py-28">
                <div className="flex justify-between items-center mb-8">
                    <h2 style={{ fontFamily: 'TTTravels-Medium' }} className="text-white text-base sm:text-lg md:text-2xl font-medium">Episodes</h2>
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
                                        <h4 className='text-sm sm:text-lg font-light'>{episode.episode}</h4>
                                        <p className="text-lg sm:text-2xl font-medium">{episode.name}</p>
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


            <div className="relative w-full  mx-auto px-10 sm:px-16 md:px-20 lg:px-24 pb-20">
                <div className="flex justify-between items-center mb-8">
                    <h2 style={{ fontFamily: 'TTTravels-Medium' }} className="text-white text-base sm:text-lg md:text-2xl font-medium">Locations</h2>
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
                                        <h4 className='text-sm sm:text-lg font-light'>#{location.id}</h4>
                                        <p className=" text=lg sm:text-2xl font-medium">{location.name}</p>
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