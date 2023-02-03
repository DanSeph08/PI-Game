import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form'

function App() {
  return (
    <div className="App">

      <Route path='/' exact component={LandingPage} />

      <Route path='/games' exact component={Home} /> 

      <Route path='/games/:id' exact component={Detail} /> 

      <Route path='/form' exact component={Form} />

    </div>
  );
};

export default App;
