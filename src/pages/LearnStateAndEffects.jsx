// import React from 'react'

import { useState } from "react";

// const getOne = () => 1;

function LearnStateAndEffects() {
  // 지역 변수는 상태 변수가 될 수 없음
  // 리액트 상태 변수는 useState 훅(함수) 사용
  // Q. 리액트의 컴포넌트 count 상태를 리액트에서 인식하도록 정의
  // let count = 100;
  // A. React.userState() 훅을 사용
  const [count, setCount] = useState(100);
  const [step] = useState(12);
  // let [count2] = useState(()=>getOne());

  // console.log(count1);
  // console.log(count2);

  // 상태 정의와 상태 변경


  return (
    <div className="m-10 flex-col gap-2 items-start" lang="en">
      <h2 className="text-indigo-600 text-2xl uppercase">
        Learn State And Effects {count}
      </h2>
      <button 
        type="button"
        onClick={()=>{setCount(count + step)}}
        className="py-0.5 px-2.5 border rounded-md border-slate-600"
      >
        +12
      </button>
    </div>
  )
}

export default LearnStateAndEffects;