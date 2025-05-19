import { Link, useLoaderData } from 'react-router-dom';
import logo from '../assets/images/Logo.png'


const Casts = () => {
    const characters = useLoaderData().results;

    return (
        <div className='relative bg-[url(/characters_cover.jpg)] bg-cover bg-center'>
            <div className="absolute inset-0 bg-[#191D29] opacity-95 z-0"></div>
            <div className='relative z-10 px-10 md:px-16'>
                <div className='flex justify-center pt-[58px]'><img className='h-12' src={logo} alt="" /></div>
                <h3 style={{ fontFamily: 'TTTravels-DemiBold' }} className='text-6xl mt-14 mb-8 text-[#14D9E5]'>The Cast</h3>
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
                                <img
                                    src={char.image}
                                    alt={char.name}
                                    className="w-full h-4/5 object-cover rounded-sm"
                                />
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