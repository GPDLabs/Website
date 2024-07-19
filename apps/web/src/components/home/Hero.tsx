import { cn } from '@/libs/ui';

export default function Hero() {
  return (
    <div id="hero" className="w-full min-h-min flex flex-col items-center py-0 md:py-24">
      <section className="w-full mb-[27vw] flex flex-col items-center px-6 py-24 md:py-0">
        <h1 className="text-[48px] text-center max-w-screen-lg font-Homenaje uppercase lg:text-[96px] leading-normal mb-7">
          God plays dice
        </h1>
        <p className="text-base lg:text-[22px] lg:w-3/4 max-w-5xl break-words text-center leading-normal mb-[98px]">
          Empowering decentralized applications with quantum-grade randomness and high-performance blockchain technology
        </p>
        <a
          href="https://gpdlabs.gitbook.io/gpd_labs#id-1.-introduction"
          target="_blank"
          className={cn(
            'duration-200 bg-[#1F1F1F] hover:opacity-80 text-white text-center font-bold',
            'w-full h-[64px] text-lg leading-[4rem] rounded-lg',
            'md:w-[365px] md:h-[80px] md:text-[20px] md:leading-[80px] md:rounded-full',
          )}
        >
          Learn about GPD
        </a>
      </section>
      <section className="w-full flex flex-col items-center px-6 pt-24 md:py-0">
        <h1 className="text-[48px] text-center max-w-screen-lg font-Homenaje uppercase lg:text-[96px] leading-normal mb-7">
          JOIN OUR GPD ECOSYSTEM AND GPD COMMUNITY.
        </h1>
        <p className="text-base lg:text-[22px] lg:w-3/4 max-w-5xl break-words text-center leading-normal mb-[98px]">
          Join the GPD Labs community and be part of the revolution in quantum randomness and high-performance
          blockchain technology with Dice Chain
        </p>
        <a
          href="https://t.me/GPD_Labs"
          target="_blank"
          className={cn(
            'duration-200 bg-[#1F1F1F] hover:opacity-80 text-white text-center font-bold',
            'w-full h-[64px] text-lg leading-[4rem] rounded-lg',
            'md:w-[365px] md:h-[80px] md:text-[20px] md:leading-[80px] md:rounded-full',
          )}
        >
          Join GPD
        </a>
      </section>
    </div>
  );
}
