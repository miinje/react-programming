import * as React from 'react';

function SideEffect() {
  // pure
  console.log(document.querySelector('.SideEffect'));

  // impure code?
  // side effect
  // effect callback
  // useEffect hook
  React.useEffect(
    // 이펙트 콜백 함수
    // DOM 커밋 이후에 실행
    () => {
      // 이 안에 작성된 코드는 이벤트 핸들러처럼
      // 사이드 이펙트 코드를 작성할 수 있다.
      console.log('effect callback')
      const effectElement = document.querySelector('.SideEffect');
      effectElement?.setAttribute('lang', 'en');
    }
  );

  /* 
    // Virtual DOM => Virtual Element Tree (React Element Tree)
    {
      @@typeof: Symbol('react-element'),
      key: null,
      type: 'div',
      props: {
        className: 'SideEffect',
        children: [
          {
            @@typeof: Symbol('react-element'),
            key: null,
            type: 'h2',
            props: {
              children: 'Side Effect'
            }
          },
          {
            @@typeof: Symbol('react-element'),
            key: null,
            type: 'p',
            props: {
              children: 'impure action'
            }
          }
        ]
      }
    }
  */

    return (
      React.createElement("div", { className: "SideEffect" },
        React.createElement("h2", null, "Side Effect"),
        React.createElement("p", null, "impure action")
      )
    )

  // return (
  //   <div className="SideEffect">
  //     <h2>Side Effect</h2>
  //     <p>impure action</p>
  //   </div>
  // )
}

export default SideEffect;