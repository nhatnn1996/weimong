import React, { useEffect, useState, useRef } from 'react';

const useSlider = ({ length, loop, duration = 5 }) => {
  const time = useRef();
  const [active, setActive] = useState(0);
  const activeRef = useRef();
  const changeActive = (index) => {
    if (index >= length) {
      setActive(0);
    } else if (index < 0) {
      setActive(length - 1);
    } else setActive(index);
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

  activeRef.current = active;
  useEffect(() => {
    //sự kiện trên mobi rê qua trái, và rê qua phải
    var xDown = null,
      yDown = null,
      xUp = null,
      yUp = null;
    document.addEventListener('touchstart', touchstart, false);
    document.addEventListener('touchmove', touchmove, false);
    document.addEventListener('touchend', touchend, false);
    function touchstart(evt) {
      const firstTouch = (evt.touches || evt.originalEvent.touches)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }
    function touchmove(evt) {
      if (!xDown || !yDown) return;
      xUp = evt.touches[0].clientX;
      yUp = evt.touches[0].clientY;
    }
    function touchend(evt) {
      var xDiff = xUp - xDown,
        yDiff = yUp - yDown;
      if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 0.33 * document.body.clientWidth) {
        if (xDiff < 0) {
          setTimeout(() => {
            changeActive(activeRef.current + 1);
          }, 0);
          //sang phải(right)
        } else {
          changeActive(activeRef.current - 1);
          //sang trái(left)
        }
        xDown = null;
        yDown = null;
        xUp = null;
        yUp = null;
      }
    }
    return () => {
      clearInterval(time.current);
      document.removeEventListener('touchstart', touchstart);
      document.removeEventListener('touchmove', touchmove);
      document.removeEventListener('touchend', touchend);
    };
  }, []);
  return [activeRef.current, changeActive];
};
export default useSlider;
