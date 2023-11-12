import { useState, useEffect, useMemo } from 'react';

  const useMobileCheck = (mobileWidth = 900) => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = useMemo(() => width <= mobileWidth, [width, mobileWidth]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};
export default useMobileCheck;
