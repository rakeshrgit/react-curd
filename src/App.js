import logo from './logo.svg';
import './App.css';
import UseMemoFunction from './usememo/memoFunction';
import CallBackFunction from './usecallback/callbackFunction';
import Title from './usecallback/Title';
import Hero from './errorBoundry/Hero';
import ErrorBoundry from './errorBoundry/ErrorBoundry';

function App() {
  return (
    <div className="App">
       <h1>Error Boundary</h1>
       <ErrorBoundry>
       <Hero heroName="Ram"></Hero>
       <Hero heroName="Superman"></Hero>
       <Hero heroName="Joker"></Hero>
       </ErrorBoundry>
    </div>
    
  );
}

export default App;
