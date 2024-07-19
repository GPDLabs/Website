import { FC } from 'react';
import { FeatureItem } from './FeatureItem';
import SceneOne from './SceneOne';
import { cn } from '@/libs/ui';

const Features: FC = () => {
  return (
    <div className="w-full">
      <FeatureItem
        title="Quantum random numbers"
        description="The random numbers are generated from the quantum noise of the team’s self-developed & patented self-weakening light detector and have been tested for randomness by NIST standards"
        button={
          <a
            href=" https://gpdlabs.gitbook.io/gpd_labs#id-2.4-quantum-random-number-service"
            target="_blank"
            className={cn(
              'duration-200 bg-[#1F1F1F] hover:opacity-80 text-white text-center font-bold',
              'w-full h-[64px] text-lg leading-[4rem] rounded-lg',
              'md:w-[365px] md:h-[80px] md:text-[20px] md:leading-[80px] md:rounded-full',
            )}
          >
            Dive into QVRF
          </a>
        }
        reverse
      >
        <SceneOne />
      </FeatureItem>
      <FeatureItem
        showDivider
        deco={<div className="text-[20px] leading-relaxed mb-8 text-white/50 uppercase font-Homenaje">from</div>}
        title="Decentralized generation"
        description="Join Dice Network by buying GPD Labs nodes to generate quantum random numbers with PoR"
        button={
          <a
            href="https://gpdlabs.gitbook.io/gpd_labs#id-2.-dice-network"
            target="_blank"
            className={cn(
              'duration-200 bg-[#1F1F1F] hover:opacity-80 text-white text-center font-bold',
              'w-full h-[64px] text-lg leading-[4rem] rounded-lg',
              'md:w-[365px] md:h-[80px] md:text-[20px] md:leading-[80px] md:rounded-full',
            )}
          >
            Open Dice Network
          </a>
        }
      >
        <img
          src="/images/scene-2.gif"
          className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px] object-cover"
          alt=""
        />
      </FeatureItem>
      <FeatureItem
        showDivider
        deco={<div className="text-[20px] leading-relaxed mb-8 text-white/50 uppercase font-Homenaje">with</div>}
        title="GPD CUBE"
        description="A versatile, low-power quantum random number generator and Turing-complete terminal for the PoR-based Quantum VRF network and Dice chain"
        button={
          <button
            className={cn(
              'duration-200 bg-[#1F1F1F] hover:opacity-80 text-white text-center font-bold',
              'w-full h-[64px] text-lg leading-[4rem] rounded-lg',
              'md:w-[365px] md:h-[80px] md:text-[20px] md:leading-[80px] md:rounded-full',
            )}
          >
            Coming Soon
          </button>
        }
        reverse
      >
        <img
          src="/images/scene-3.gif"
          className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px] object-cover"
          alt=""
        />
      </FeatureItem>
      <FeatureItem
        showDivider
        title="GLOBAL #GPD COMMUNITY SUPPORTS OUR DIVERSE ECOSYSTEM ACROSS WEB3 NETWORK"
        onlyTitle
      ></FeatureItem>
    </div>
  );
};

Features.displayName = 'Features';

export { Features };
