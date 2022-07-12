import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link,
//   Redirect
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3" >
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}


    {/* 
      <Router>
<Redirect from="/" to="/">
        <Switch>
      <Route exact component={About} path={"/about"}>
      </Route>
      <Route exact path="/">
    </Route>
    </Switch>
      </Redirect>
      </Router>
     */}

          
    </div>
    </>
  );
}

export default App;
