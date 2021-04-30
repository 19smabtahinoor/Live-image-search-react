import './App.css';
import Search from './Search'
import Join from './Join'
import Login from './Login'
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <div className="container">
      <Switch>
        <Route exact path='/' component={Search}/>
        <Route exact path='/join' component={Join}/>
        <Route exact path='/login' component={Login}/>
      </Switch>

    </div>
    </>
  );
}

export default App;
