import { cn } from '@/libs/ui';
import LogoFull from '@/assets/images/logo-full.svg';
import IconX from '@/assets/icons/icon-twitter.svg';
import IconTg from '@/assets/icons/icon-telegram.svg';
import IconMedium from '@/assets/icons/icon-medium.svg';
import { Link } from '@tanstack/react-router';
import { SNS_MEDIUM, SNS_TG, SNS_X } from '@/constants/links';

export default function Footer() {
  return (
    <footer
      className={cn(
        'w-full relative',
        "before:absolute before:block before:content-[''] before:w-full before:max-w-screen-xl before:border-t before:border-solid before:border-[#555555]",
        'before:transform before:left-1/2 before:-translate-x-1/2',
      )}
    >
      <div className={cn('mx-auto w-full max-w-screen-xl px-6 pt-12 md:pt-[132px] pb-16 flex flex-col')}>
        <Link to="/" className="mb-9 md:mb-16">
          <img src={LogoFull} alt="GPD Labs" className="h-12 md:h-16" />
        </Link>
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-start items-center space-x-3">
            <Link
              to="/terms"
              resetScroll
              className="w-auto h-8 px-3 py-1.5 leading-5 text-sm md:h-12 md:px-5 md:py-3 md:leading-6 md:text-base rounded-full duration-200 bg-[#1F1F1F] hover:opacity-80 text-white "
            >
              Terms of Use
            </Link>
            <Link
              to="/privacy-policy"
              resetScroll
              className="w-auto h-8 px-3 py-1.5 leading-5 text-sm md:h-12 md:px-5 md:py-3 md:leading-6 md:text-base rounded-full duration-200 bg-[#1F1F1F] hover:opacity-80 text-white "
            >
              Privacy Policy
            </Link>
          </div>

          <div className={cn('flex items-center space-x-3')}>
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
      </div>
    </footer>
  );
}
