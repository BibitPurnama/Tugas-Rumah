import React from 'react';
import logo from './ppku.jpg';
import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <nav>
    <div class="nav-wrapper blue darken-4" >
      <a href="#!" class="brand-logo">Portofolio</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><Link to="Home" >Home</Link></li>
        <li><Link to="Bio">Bio</Link></li>
        <li><Link to="About">About</Link></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Selamat datang di Portofolio saya :v <br />
          Silahkan pilih menu navbar di atas untuk lebih lanjutnya hehe <br />
          TerimaKasih         
        </p>
      </header>
    </div>
  );
}


export default App;
