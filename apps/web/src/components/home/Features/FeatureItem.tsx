import { cn } from '@/libs/ui';
import { ReactNode } from '@tanstack/react-router';
import { FC, PropsWithChildren } from 'react';

const FeatureItem: FC<
  PropsWithChildren & {
    deco?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    reverse?: boolean;
    button?: ReactNode;
    showDivider?: boolean;
    onlyTitle?: boolean;
  }
> = ({ children, deco, title, description, reverse, button, showDivider, onlyTitle }) => {
  return (
    <section
      className={cn(
        'w-full relative',
        "before:absolute before:content-[''] before:w-full before:max-w-screen-xl before:border-t before:border-solid before:border-[#555555]",
        'before:transform before:left-1/2 before:-translate-x-1/2',
        showDivider ? 'before:block' : 'before:hidden',
      )}
    >
      <div
        className={cn(
          'mx-auto w-full max-w-screen-xl px-6 py-[120px] flex flex-col md:flex-row items-center justify-around',
          reverse ? 'md:flex-row-reverse' : '',
        )}
      >
        <div>{children}</div>
        <div className={cn('flex-1 flex flex-col items-center', onlyTitle ? '' : 'max-w-[698px]')}>
          {deco}
          {title ? (
            <h1 className="text-[32px] text-center max-w-screen-lg font-Homenaje uppercase lg:text-[96px] leading-tight mb-7">
              {title}
            </h1>
          ) : null}
          {description && (
            <p className="text-base lg:text-[22px] break-words text-center leading-normal mb-[98px]">{description}</p>
          )}
          {button}
        </div>
      </div>
    </section>
  );
};

FeatureItem.displayName = 'FeatureItem';

export { FeatureItem };
