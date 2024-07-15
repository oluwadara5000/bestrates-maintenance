import Image from 'next/image';
import bgImg from '../public/construction-landing-page-template_52683-11358.jpg'



export default function Home() {
  return (
    <section className='flex py-32 4xl:py-52'>
      <div className='container flex flex-col 4xl:flex-row justify-center gap-20'>
        <div className='flex flex-col gap-5 4xl:gap-16'>
          <h1 className='text-7xl 4xl:text-9xl font-black text-blue-700 3xl:text-8xl'>Oops...</h1>
          <h1 className='text-3xl 4xl:text-5xl text-blue-700 3xl:text-4xl font-bold'>BestRates Digitals Is Under Construction</h1>
          <h1 className='4xl:text-3xl text-blue-700 font-medium 3xl:text-3xl 2xl:text-3xl xl:text-3xl'>Try Again Later</h1>
        </div>

        <div className='flex items-center'>
          <Image src={bgImg} alt='/' />
        </div>
      </div>
    </section>
  )
}