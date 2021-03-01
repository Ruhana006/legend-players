import './App.css';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import { useEffect} from 'react';

function App() {
  useEffect(()=>{
     document.title = "FiFa Ultimate Team"
  },[])
  return (
    <div>
      <Header></Header>
      <Players></Players> 
    </div>
  );
}

export default App;
