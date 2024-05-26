import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useSubmit } from 'react-router-dom';
import React,{ useState } from 'react';
import Alert from './components/Alert';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Switch } from 'react-router-dom';


function App() {
  const [mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type) =>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null)
     },1000);
      
  }
  const toggleMode=() =>{
    if(mode==='light')
      {
        setMode('dark')
        document.body.style.backgroundColor='grey'
        showAlert("Dark mode has enabled","success")
        document.title='Text Manipulator-Dark Mode'
      }
      else
      {
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert("Light mode has enabled","success")
        document.title='Text Manipulator-Light Mode'
      }
  }
  
 return (
 <>
   {/*<Router>*/}
  
      <Navbar title="TM" mode={mode} toggleMode={toggleMode} > </Navbar>
      <Alert alert={alert} />
      <div>
      {/*<Routes>*/}
        {/*<Route path="/" element=*/}
        <div className={`container-fluid:grey bg-${mode=='dark'?'#212529':'white'}`}>
              <TextForm heading="Enter the string" showAlert={showAlert} mode={mode} />
        </div>
        {/*</Route>
        <Route path="/about" element={<About />}>*/}
        {/*</Route>
      </Routes>*/}
      </div>
     
   {/*</Router>*/}
 </>
  
   
      
    
   
   
      
);
}

export default App;
