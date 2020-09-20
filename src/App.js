import React from 'react';
//import CounterExample from './Components/CounterExample';
//import Counter from './Components/CounterExample';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/footer'
import Navigation from './Components/Navigation'

function App() {
  return (
    <div >
      <Header />
      <HelloWorld type="plane"/>
      <Footer />
      
     { /* <CounterExample /> */} 
    </div>
  );
}

export default App;
