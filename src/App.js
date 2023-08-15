import Calculator from './components/Calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Calculator />
      <Quotes />
    </div>
  );
}

export default App;
