import './App.css';
import {useState} from 'react'
import Modal from '../../components/Modal'

function App() {
  const [open, setOpen] =useState(false)

  return (
    <div className="container">
      <button onClick={()=> setOpen(true)}>Open</button>
      <Modal open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
