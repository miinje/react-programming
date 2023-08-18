// 스타일 및 에셋 연결
import './Practice.css';


// 컴포넌트
import DefinitionList from './DefinitionList';
import Controller from './Controller';



/* -------------------------------------------- */
function Practice() {

  return (
    <div className="Practice">
      <h2>JSX 인 액션</h2>
      <hr /> +

      {/* 컴포넌트 추출 */}
      <DefinitionList />

      {/* 스크롤 다운/업 */}
      <Controller />
      
    </div>
  );
}

export default Practice;