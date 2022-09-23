import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import PersonalData from './components/InputUserData';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <PersonalData />

    </div>
  );
}

export default App;
