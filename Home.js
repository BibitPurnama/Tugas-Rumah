import React, { Component } from 'react';
import logo from './ppku.jpg';

class Home extends Component {
	render(){
			return(
					<div> <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Selamat datang di Portofolio saya :v <br />
          Silahkan pilih menu navbar di atas untuk lebih lanjutnya hehe <br />
          TerimaKasih         
        </p>
      </header> </div>
				)
	}
}

export default Home;;