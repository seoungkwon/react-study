import logo from './logo.svg';
import './App.css';
import Basic01 from './study/Basic01';
import State01 from './study/State01';
import Practice01 from './Practice/Practice01';
import State02 from './study/State02';
import Export01 from './study/Export01';
import Practice02 from './Practice/Practice02';
import Props01 from './study/Props01';
import Props02 from './study/Props02';
import Practice03 from './Practice/practice03/Practice03';
import NewsBlog from './newsblog/NewsBlog';
import Practice04 from './Practice/practice04/Practice04';
import FoodMarket from './foodmarket/pages/FoodMarket';
import Practice05 from './Practice/practice05/Practice05';
import Practice06 from './Practice/practice06/Practice06';
import AppRS from './react_spring/AppRS';
import Login from './react_spring/Login';


function App() {

  //return <Basic01/>;  //JSX 기본
  //return <State01/>;  //useState 사용법
  //return <Practice01/>;
  // return <Export01/>;
  //return <State02/>;
  //return <Practice02/>;
  //return <Props01/>;
  //return <Props02/>;
  //return <Practice03/>;
  //return <NewsBlog/>;
  //return <Practice04/>;
  //return <FoodMarket/>;
  // return <Practice05/>;
  // return <FoodMarket/>;
  // return <Practice05/>;
  // return <Practice06/>;
  // return <AppRS/>;
  return <Login/>;

  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;