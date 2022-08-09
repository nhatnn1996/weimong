import React, { useEffect, useState, useRef } from 'react';
const useSlider = ({ length, loop, duration = 5 }) => {
  const time = useRef();
  const [active, setActive] = useState(0);
  const changeActive = (index) => {
    setActive(index);
    doInterval();
  };

  const doInterval = () => {
    clearInterval(time.current);
    time.current = setInterval(() => {
      setActive((state) => {
        if (state === length - 1) return 0;
        state++;
        return state;
      });
    }, duration * 1000);
  };

  useEffect(() => {
    if (loop) {
      doInterval();
    }
  }, [length, loop]);

  useEffect(() => {
    return () => {
      clearInterval(time.current);
    };
  }, []);
  return [active, changeActive];
};
export default useSlider;
