import React, { Component } from 'react';
import './Css/Bio.css'

class Bio extends Component {
	render(){
		return(
				
  <div class="card">
    <div class="card-content">
      <p>Berikut adalah Bio data saya :v</p>
    </div>
    <div class="card-tabs">
      <ul class="tabs tabs-fixed-width">
        <li class="tab"><a href="nama">Nama</a></li>
        <li class="tab"><a class="active" href="sekolah">Sekolah</a></li>
        <li class="tab"><a href="lahir">Tempat tanggal lahir</a></li>
      </ul>
    </div>
    <div class="card-content grey lighten-4 green" >
      <div id="nama">Bibit Purnomo</div>
      <div id="sekolah">SMKN 2 KARANGANYAR</div>
      <div id="lahir">Karanganyar, 16 Okt 2003</div>
    </div>
  </div>
			)
	}
}

export default Bio;