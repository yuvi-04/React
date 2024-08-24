import './App.css';
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer';
import store from './components/redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <UserContainer />
        {/* <HookCakeContainer />
        <CakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
