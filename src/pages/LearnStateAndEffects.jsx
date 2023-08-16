import { useState } from 'react';

function LearnStateAndEffects() {
  // 숫자 값 상태 관리
  
  // 마우스의 x 좌표
  const [mouseX, setMouseX] = useState(0);
  // 마우스의 y 좌표
  const [mouseY, setMouseY] = useState(0);

  const handlePrintMousePosition = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  // 객체 상태 관리

  return (
    <div
      className="m-10 flex flex-col gap-2 items-start"
      onClick={handlePrintMousePosition}
    >
      <h2 className="text-indigo-600 text-2xl uppercase">
        상태 및 이펙트 학습하기
      </h2>

      <output>
        마우스 X 좌표 : {mouseX} / 마우스 Y 좌표 : {mouseY}
      </output>
    </div>
  );
}

export default LearnStateAndEffects;