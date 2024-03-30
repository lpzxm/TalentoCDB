// import react from 'react';
import donbo from '../../assets/donbosco.png';
import img1 from '../../assets/ini1.png';
import img2 from '../../assets/ini2.png';
import img3 from '../../assets/ini3.png';
import img4 from '../../assets/ini4.png';
import bolly from '../../assets/bola de blly.png';
import rubrica from '../../assets/rubrica.png';
import catego from '../../assets/categorías.png';
import pelotas from '../../assets/pelotas.png';

export function Home() {
    return (
        <>
            <div>
                <main className='flex lg:flex-row flex-col items-center'>
                    <section className="lg:m-5 m-1 flex-col">
                        <article className="flex">
                            <img className='lg:h-60 sm:h-30' src={img1} alt="" />
                            <img className='m-3 sm:h- lg:h-52' src={img2} alt="" />
                        </article>
                        <article className='flex lg:mt-5'>
                            <img className='lg:w-52 relative ' src={img3} alt="" />
                            <img className='m-3 lg:h-60' src={img4} alt="" />
                        </article>
                    </section>
                    <section className='items-center text-center sm:w-full w-1/2'>
                        <div className='text-2xl font-bold'>
                            <h1 className="font-sans m-10">Bienvenido</h1>
                            <h1 className='mb-5'>Leonel Najarro</h1>
                        </div>
                        <a href="">
                            <img className='relative left-24 top-16 invisible sm:visible' src={bolly} alt="" />
                            <div className='border-2  m-5'>
                                <p className='p-4'>
                                    Entrenador de:
                                </p>
                            </div>
                        </a>
                        <a href="">
                            <img className='relative left-24 top-16 invisible md:visible' src={rubrica} alt="" />
                            <div className='border-2  w-69 m-5'>
                                <p className='p-4'>
                                    Registrar rúbrica
                                </p>
                            </div>
                        </a>
                        <a href="">
                            <img className='relative left-24 top-16 invisible md:visible' src={catego} alt="" />
                            <div className='border-2  m-5'>
                                <p className='p-4'>
                                    Registrar categoria
                                </p>
                            </div>
                        </a>
                        <a href="">
                            <img className='relative left-24 top-16 invisible md:visible ' src={pelotas} alt="" />
                            <div className='border-2 m-5'>
                                <p className='p-4'>
                                    Atletas seleccionados
                                </p>
                            </div>
                        </a>
                    </section>
                </main>
            </div>
        </>
    )
}