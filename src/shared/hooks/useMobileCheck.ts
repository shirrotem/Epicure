import { useState, useEffect, useCallback } from 'react';

const useMobileCheck = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  const handleResize = useCallback(()=>{
    setIsMobile(window.innerWidth <= 900);

  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return isMobile;
};

export default useMobileCheck;
