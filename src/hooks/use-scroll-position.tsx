import { useEffect, useState } from 'react';

export type ScrollPosition = {
  /**
   * Offset from top of the page.
   */
  offset: number;

  /**
   * Number between 0 and 1 (=> 0% - 100%) - represents how much of the page has been scrolled.
   */
  progress: number;
};

export const useScrollPosition = () => {
  const [state, setState] = useState<ScrollPosition>({
    offset: 0,
    progress: 0,
  });

  useEffect(() => {
    const updateScrollPosition = () => {
      setState({
        offset: window.scrollY,
        progress:
          window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight),
      });
    };

    window.addEventListener('scroll', updateScrollPosition);

    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return state;
};
