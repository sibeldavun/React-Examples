
import './App.css';
import Form from "./components/Form"
import {useState} from "react";
import List from './components/List';

function App() {
  const [contacts, setContacts] = useState([])




  return (
    <div className="App">
      <h1>Contact List</h1>
      <List contacts={contacts}/>
      <Form contacts={contacts} setContacts={setContacts}/>
      
    </div>

  );
}

export default App;
