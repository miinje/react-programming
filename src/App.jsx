import RootLayout from './layout/RootLayout';
import LearnStateAndEffects from './pages/LearnStateAndEffects';

// 데이터 가져오기 (PocketBase 서버: 백엔드 데이터베이스 솔루션)

// 1. 컴포넌트에서 관리할 상태 정의
// 2. 서버에 데이터 가져오기 오쳥/응답
// 3. 응답된 상황(status)에 따라 뷰(view) 전환: 조건부 렌더링

function App() {
  return (
    <div className="App">
      <RootLayout>
        <LearnStateAndEffects />
      </RootLayout>
    </div>
  );
}

export default App;