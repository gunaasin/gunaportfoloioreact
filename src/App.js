import './App.css';
import { About } from './component/About';
import { Contact } from './component/Contact';
import { Home } from './component/Home';
import { Navbar } from './component/Navbar';
import { Project } from './component/Project';


function App() {
  return (
    <div className="App w-screen ">

      <div className='flex flex-col justify-center items-center'>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      {/* <About/> */}
      <Contact/>
      </div>
     
    </div>
  );
}

export default App;
