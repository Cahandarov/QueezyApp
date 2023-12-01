import { BrowserRouter as Router } from "react-router-dom";
import SideMenu from "./components/ui/SideMenu";
import RigthComponent from "./components/ui/RigthComponent";
import Login from "./components/LogIn/Login";
import { useAppSelector } from './components/App/hooks';


function App() {
  const isLogined = useAppSelector((state)=>state.login.isLogined)
  const isRegistered = useAppSelector((state)=>state.login.isRegistered)
  return (

    <div className="container flex mx-auto w-full min-h-min">
      {isLogined&&isRegistered?<Router>
        <SideMenu />
        <RigthComponent />
      </Router>:<Login/>}
    </div>

  );
}

export default App;
