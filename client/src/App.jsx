//Redirect
import {Route, Redirect} from 'react-router-dom'; 


//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
//components
import Temp from "./components/temp";


//Master 
import Home from './page/Home'




function App() {
  return (<>
  
  <Route path="/" exact >
    <Redirect to ='/delivery'/>

  </Route>
  
  <HomeLayoutHOC path="/" exact component = {Temp}/>
  <HomeLayoutHOC path="/:type" exact component = {Home}/>

  </>
  );
}
export default App;
