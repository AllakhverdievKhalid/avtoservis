import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav className="nav">
         <ul className="item">
           <li className="link">
             <a href="#" className="content">
             Послуги
             </a>
             <a href="#" className="content">
             Контакти
             </a>
             <a href="#" className="content">
             ПроНас
             </a>
           </li>
         </ul>
         <div className="box">
         <h1 className="first">
           1) Хімчистка салону Вашого Авто.
         </h1>
         <h1 className="first">
           2) Заміна гальмівних колодок.
         </h1>
        <h1 className="first">
           3) Заміна ламп, полірування фар.
         </h1 >
         <h1 className="first">
           4) Антикорозійне покриття дна.
         </h1 >
        
         </div>
         <button className="knipka">
          <i class="fas fa-phone-square-alt"></i>
         </button>
         <button className="knipka">
         <i class="fab fa-viber"></i>
         </button>
       
         </nav> 
         <section className="phone">
         <div className="stuf">
             
             </div>
             <div className="stud">
             
             </div>
           <div className="pruf">

           </div>
           <h6 className="number1">
             +380637547372
           </h6>
           <h6 className="number2">
             +380637547372
           </h6>
         </section>
         
      </header>
    </div>
  );
}


  
export default App;
