
import './App.css';


import {Homepage} from './components/homepage'

import {Switch,Route} from 'react-router-dom'
import {Songspage} from './components/Songs'
function App() {

  
  return (
    <div className="App"> 
   
    <Switch>


      <Route exact path='/'>
     <Homepage/>
      </Route>


      <Route exact path='/album/:albumid'>
      <Songspage/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
