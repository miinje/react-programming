import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

function RefExampleReferencingDOM() {
  return (
    <>
      <h2 className="mb-10">컴포넌트 내부의 DOM 요소를 직접 참조하는 Refs</h2>
      <Circle />
      <Circle />
      <Circle />
    </>
  );
}

function Circle() {
  // DOM 요소를 참조하기 위한 Refs 생성
  const circleRef = useRef(null); // { current: null }

  // 이펙트 영역
  useLayoutEffect(() => {
    console.log(circleRef.current);

    // const circleElement = document.getElementById('circle');

    // gsap.set(circleElement, { scale: 0.5 });

    // const handleScale = (e) => {
    //   gsap.to(e.currentTarget, { scale: 2 });
    // }

    // circleElement.addEventListener('click', handleScale);

    // return () => {
    //   circleElement.removeEventListener('click', handleScale);
    // };
  }, []);

  // 이벤트 핸들러
  // const handleEnter = ({ currentTarget }) => {
  //   gsap.to(currentTarget, { opacity: 0.5, scale: 4 });
  // }

  // const handleLeave = ({ currentTarget }) => {
  //   gsap.to(currentTarget, { opacity: 1, scale: 1 });
  // }

  return (
    <figure
      role="none"
      ref={circleRef}
      // onPointerEnter={handleEnter}
      // onPointerLeave={handleLeave}
      className="w-16 h-16 rounded-full bg-yellow-400"
    />
  );
}

export default RefExampleReferencingDOM;