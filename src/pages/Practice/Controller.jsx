// JSX 트랜스폼(변환) 엔진 업그레이드 -> 작성하지 않아도 됨
// import React from "react"
import GoToButton from '@/pages/Practice/GoToButton';

// clean code

function Controller() {
  return (
    <div role="group" className="buttonGroup">
      <GoToButton direction="down" label="스크롤 다운" />
      <GoToButton direction="up" label="스크롤 업" />
    </div>
  )
}

export default Controller