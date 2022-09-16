import './App.css';
import Books from './components/Books/Books';
import Header from './components/Header/Header';
import Links from './components/Links/Links';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Links/>
      <Main/>
      <Books/>
    </div>
  );
}

export default App;
