import React from 'react'
import Cuadros from './Cuadros'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function Busqueda() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");


  const fetchLyrics = async () => {
      let condition = true;
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
      if (!response.ok) {
        alert("No se ha encontrado la letra de la cancion");
        condition = false;
      }
      if (condition) {
      const data = await response.json();
      console.log(data.lyrics)
      crearFila(data.lyrics);
      }
  };

  const crearFila = (lyrics) => {
    const tableBody = document.querySelector("tbody");
    const newRow = document.createElement("tr");

    const artistCell = document.createElement("td");
    artistCell.textContent = artist.toUpperCase();
    newRow.appendChild(artistCell);

    const songCell = document.createElement("td");
    songCell.textContent = song.toUpperCase();
    newRow.appendChild(songCell);

    const lyricsCell = document.createElement("td");
    lyricsCell.textContent = lyrics;
    newRow.appendChild(lyricsCell);

    tableBody.appendChild(newRow);
  };

  const setDatos = (id,texto) => {
  id === "artist" ? setArtist(texto) : setSong(texto);
  
  };


  return (
    <div className="container-fluid mx-0">
      <div className="row mt-5">
        <div className="col-12">
          <h1 className="text-center text-light">Encuentra tu cancion</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <Cuadros id={"artist"} placeHolder={"Introduce Artista"} setDatos={setDatos}/>
        </div>
        <div className="col-md-6">
          <Cuadros id={"song"} placeHolder={"Introduce Cancion"} setDatos={setDatos}/>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <button className='btn btn-outline-warning rounded text-light' onClick={fetchLyrics}>Buscar</button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <table className="table table-dark table-striped">
            <thead>
              <tr className='text-light'>
                <th className="col-2">Artista</th>
                <th className="col-2">Cancion</th>
                <th className="col-8">Letra</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Busqueda