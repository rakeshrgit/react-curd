import logo from './logo.svg';
import './App.css';
import UseMemoFunction from './usememo/memoFunction';
import CallBackFunction from './usecallback/callbackFunction';
import Title from './usecallback/Title';

function App() {
  return (
    <div className="App">
      <Title/>
      <CallBackFunction/>
    </div>
    
  );
}

export default App;
