import { useEffect, useState } from 'react';
import { createBreakpoint } from 'react-use';

const useCustomBreakpoints = createBreakpoint({
  mobile: 0,
  tablet: 640,
  desktop: 1280,
});

export const useBreakpoint = () => {
  const [state, setState] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const currentBreakpoint = useCustomBreakpoints();

  useEffect(() => {
    if (currentBreakpoint === 'tablet') {
      setState('tablet');
    } else if (currentBreakpoint === 'desktop') {
      setState('desktop');
    } else {
      setState('mobile');
    }
  }, [currentBreakpoint]);

  return state;
};
