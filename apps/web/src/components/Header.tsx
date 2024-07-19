import { cn } from '@/libs/ui';
import { useWindowScroll } from 'react-use';
import LogoFull from '@/assets/images/logo-full.svg';
import IconX from '@/assets/icons/icon-twitter.svg';
import IconTg from '@/assets/icons/icon-telegram.svg';
import IconMedium from '@/assets/icons/icon-medium.svg';
import { Link } from '@tanstack/react-router';
import { SNS_MEDIUM, SNS_TG, SNS_X } from '@/constants/links';

export default function Header() {
  const { y } = useWindowScroll();
  const shouldSticky = y > 96;

  return (
    <header className={cn('w-full h-24')}>
      <nav
        className={cn(
          'w-full top-0 px-6 transition-all duration-200 z-50',
          shouldSticky ? 'fixed py-2 bg-black/30 backdrop-blur-sm shadow-lg' : 'fixed py-8',
        )}
      >
        <div className="container h-8 mx-auto relative flex justify-between items-center md:block">
          <Link to="/" className="w-auto">
            <img src={LogoFull} alt="GPD Labs" className="h-6 md:h-[38px]" />
          </Link>

          <div className="relative md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2 transform list-none flex items-center space-x-3 md:space-x-12">
            <a
              href="https://gpdlabs.gitbook.io/gpd_labs"
              target="_blank"
              className="block font-Homenaje px-1 md:px-3 py-2 text-base md:text-[20px] leading-4"
            >
              Document
            </a>
            <div className="font-Homenaje px-1 md:px-3 py-2 relative block group overflow-hidden">
              <span className="h-4 block text-base md:text-[20px] leading-4 opacity-0">Ecosystem</span>
              <span className="absolute left-0 top-0 w-full h-full flex flex-col transform translate-y-0 duration-200 transition-transform group-hover:-translate-y-8">
                <span className="block text-base md:text-[20px] h-8 w-full text-center leading-8">Ecosystem</span>
                <span className="block text-base md:text-[20px] h-8 w-full text-center leading-8">Coming Soon</span>
              </span>
            </div>
            <div className="block group relative font-Homenaje px-1 md:px-3 py-2 text-base md:text-[20px] leading-4">
              <span>Media</span>
              <div
                className={cn(
                  'absolute top-full left-1/2 transform -translate-x-1/2 pt-4 pb-2 flex items-center space-x-3 transition-all',
                  '-translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-200',
                  'before:absolute before:content-[""] before:block before:left-1/2 before:top-1 before:ml-[-3px]',
                  'before:w-0 before:border-[6px] before:border-transparent before:border-t-white',
                )}
              >
                <a href={SNS_X} target="_blank" className="w-6 h-6 flex items-center p-1">
                  <img alt="" src={IconX} className="w-6 h-6 transition-opacity hover:opacity-80" />
                </a>
                <a href={SNS_TG} target="_blank" className="w-6 h-6 flex items-center p-1">
                  <img alt="" src={IconTg} className="w-6 h-6 transition-opacity hover:opacity-80" />
                </a>
                <a href={SNS_MEDIUM} target="_blank" className="w-6 h-6 flex items-center p-1">
                  <img alt="" src={IconMedium} className="w-6 h-6 transition-opacity hover:opacity-80" />
                </a>
              </div>
            </div>
            <div className="font-Homenaje px-1 md:px-3 py-2 relative block group overflow-hidden">
              <span className="h-4 block text-base md:text-[20px] leading-4 opacity-0">Developer</span>
              <span className="absolute left-0 top-0 w-full h-full flex flex-col transform translate-y-0 duration-200 transition-transform group-hover:-translate-y-8">
                <span className="block text-base md:text-[20px] h-8 w-full text-center leading-8">Developer</span>
                <span className="block text-base md:text-[20px] h-8 w-full text-center leading-8">Coming Soon</span>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
