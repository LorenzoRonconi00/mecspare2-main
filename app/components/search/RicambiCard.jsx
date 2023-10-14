import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from "next/link";

const RicambiCard = ({ data }) => {
  const router = useRouter();

  return (
    <div className='container max-w-screen-xl mx-auto px-4 mt-20 items-center'>
        <div className='flex flex-col md:flex-row -mx-4 justify-center'>
            <main className='md:w-2/3 lg:w-3/4 px-3'>
                <div className='border-4 border-orange-200 overflow-hidden bg-white shadow-2xl rounded mb-5'>
                    <div className='flex flex-col md:flex-row'>
                        <div className='md:w-1/2 flex p-3'>
                            <div style={{width: '100%', height: '70%', position: 'relative'}}>
                                <Image 
                                src={data.immagineSrc}
                                alt='immagine ricambio'
                                height={240}
                                width={240}
                                />
                            </div>
                        </div>
                        <div className='md:w-full flex flex-row gap-52'>
                            <div className='p-4'>
                                <Link
                                href={'/search'}
                                className='hover:text-sky-500 text-black font-bold transition duration-200'
                                >
                                    {data.titolo}
                                </Link>
                                <div className='flex flex-wrap items-center space-x-2 mb-2 mt-2'>
                                    <p className='text-gray-500 mb-2 font-medium'>
                                        Venduto da: 
                                        <p className='text-gray-600 font-bold cursor-pointer hover:text-sky-500 transition duration-150'>
                                            {data.venditore}
                                        </p>
                                    </p>
                                </div>
                            </div>
                            <div className='md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-300'>
                                <div className='p-5'>
                                    <span className='text-xl font-semibold text-black'>
                                        €{data.prezzo}
                                    </span>

                                    <p className='text-green-500 mt-4'>
                                        Spedizione:
                                    </p>
                                    <div className='my-3'>
                                        <label className='px-4 py-2 inline-block bg-sky-500 border border-transparent rounded-xl hover:bg-sky-300 cursor-pointer text-white
                                        transition duration-300 mt-3'>
                                            Aggiungi al carrello
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </main>
        </div>
    </div>
  );
};

export default RicambiCard;