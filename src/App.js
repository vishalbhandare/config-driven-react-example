import './App.css';
import { DesktopLayout } from './layouts/DesktopLayout';
import { MobileLayout } from './layouts/MobileLayout';
import { useLayoutContext } from './contexts/layout';
import { ConfigSwitch } from './components/common/CofigSwitch';

function App() {
  const layout = useLayoutContext()
  const layoutComponentMap = {
    'desktop': <DesktopLayout/>,
    'mobile': <MobileLayout/>
  }
  return (
    <div className="App flex flex-col h-screen">
      <ConfigSwitch/>
      { layoutComponentMap[layout] }
    </div>
  );
}

export default App;
