'use client';
import { joinClassNames } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const ThemeToggle = ({ classNames }: { classNames?: string }) => {
  const [isClient, setIsClient] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentToggleState = isClient
    ? theme === 'dark'
      ? 'left-0'
      : 'right-0'
    : 'left-0';
  const [toggleState, setToggleState] = useState(currentToggleState);

  return (
    <div className={joinClassNames(classNames, 'self-center')}>
      <button
        onClick={() => {
          theme === 'light'
            ? (setTheme('dark'), setToggleState('left-0'))
            : (setTheme('light'), setToggleState('right-0'));
        }}
        className='inline-flex justify-center items-center border-[2px] border-gray-300 w-[60px] h-[32px] rounded-xl relative gap-2'
      >
        <div
          className={joinClassNames(
            'absolute w-[1.5rem] h-[1.5rem] m-1 rounded-xl bg-white border-[2px] border-gray-300 transition-all duration-300 ease-in-out',
            toggleState
          )}
        ></div>
        <BsFillMoonStarsFill
          id='theme-toggle-dark-icon'
          className='w-5 h-5 text-elm'
        />
        <BsFillSunFill
          id='theme-toggle-light-icon'
          className='w-5 h-5 text-coral'
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
