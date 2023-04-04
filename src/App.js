
import AddTask from './AddTask';
import './App.css';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';


function App() {
  return (
    <div className="container">
      <Navbar/>
             <div class="row justify-content-end">
                 <div class sm = "4">
                  
                 <AddTask/>
                 <TaskList/>
                </div>
             </div>
        
      
  </div>
    
  
  );
}

export default App;
