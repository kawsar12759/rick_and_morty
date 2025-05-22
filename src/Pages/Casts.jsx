import { Link, useLoaderData } from 'react-router-dom';
import logo from '../assets/images/Logo.png'
import star from '../assets/images/Star.png'
import miniStar from '../assets/images/MiniStar.png'
import ellipse from '../assets/images/Ellipse.png'
import ellipseBottom from '../assets/images/EllipseBottom.png'

const Casts = () => {
    // Load character data from the loader
    const characters = useLoaderData().results;

    return (
        // Background container with a background image
        <div className='relative bg-[url(/characters_cover.jpg)] bg-cover bg-center'>
            {/* Overlay & Background Decorations */}
            <div className="absolute inset-0 bg-[#191D29] opacity-95 z-0"></div>
            <img className='absolute left-0 bottom-0' src={ellipseBottom} alt="" />
            <img className='absolute right-0 top-0' src={ellipse} alt="" />
            <img className='absolute right-8 bottom-56
                        ' src={star} alt="" />
            <img className='absolute left-8 bottom-96
                        ' src={star} alt="" />
            <img className='absolute left-1/4 bottom-4
                        ' src={miniStar} alt="" />

            {/* Main Container */}
            <div className='relative z-10 px-10 md:px-16'>
                {/* Logo */}
                <div className='flex justify-center pt-[58px]'><img className='h-12' src={logo} alt="" /></div>
                {/* Section title */}
                <h3 style={{ fontFamily: 'TTTravels-DemiBold' }} className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-14 mb-8 text-[#14D9E5]'>The Cast</h3>
                {/* Grid layout for character cards */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-8 lg:gap-10 pb-10'>
                    {characters.map((char) => (
                        < Link to={`/casts/${char.id}`}
                            key={char.id}
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)' }}
                            className=" p-[1px]   bg-gradient-to-r bg-clip-border from-[#84F729] to-[#15bffd] rounded-xl"
                        >

                            <div
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)' }}
                                className='bg-[#262934]  h-full w-full rounded-xl text-white px-4 pt-4 group'
                            >
                                {/* Character image */}
                                <img
                                    src={char.image}
                                    alt={char.name}
                                    className="w-full h-4/5 object-cover rounded-sm"
                                />
                                {/* Character name */}
                                <div className='h-1/5 flex items-center'>
                                    <p className="poppins-medium text-xs sm:text-md">{char.name}</p>
                                </div>
                            </div>

                        </Link>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Casts;