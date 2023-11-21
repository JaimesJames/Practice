// import logo from './logo.svg';

import './App.css';
import TransactionComponent from './components/TransactionComponent'
import FormComponent from './components/FormComponent'
import { useState } from 'react';


// import {v4 as uuidv4} from 'uuid'; uuidv4()

// const Title=()=><h1>Accounting</h1>
// const Description=()=><p>Day Racord</p>


function App() {
  const design = {fontWeight:'bold', textAlign:'center'}
  const initData = [
    {id:1,title: "Travel", amount: -20000 },
    {id:2,title: "Salary", amount: 200000 },
    {id:3,title: "Food", amount: -50000 },
  ];

  const [item, setItems] = useState(initData)

  const onAddNewItem = (newItem)=>{
    setItems((previousItem)=>{
      return [newItem,...previousItem]
    })
  }

  return (
    <div className="container">
      <h1 style={{color:'red',textAlign:'center',fontSize:'50px'}}>Accounting</h1>
      <FormComponent onAddItem={onAddNewItem}/>
      <p style={design}>Day Racord</p>
      <TransactionComponent items = {item}/>

    </div>
  );
}

export default App;
