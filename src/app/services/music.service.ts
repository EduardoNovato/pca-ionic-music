import { Injectable } from '@angular/core';
import * as dataArtists from './artistas.json'

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  urlServer= "https://music.fly.dev";
  constructor() { }

  getTracks() {
    return fetch(`${this.urlServer}/tracks`).then(
      response => response.json()
    );
  }

  getAlbums() {
    return fetch(`${this.urlServer}/albums`).then(
      response => response.json()
    );
  }

  getLocalArtists(){
    return dataArtists;
  }

  getSongsByAlbum(albumId: string) {
    return fetch(`${this.urlServer}/tracks/album/${albumId}`).then(
      response => response.json()
    );
  }

  //crear un servicio para obtener los artistas desde el servidor api
  //crear un servicio para obterner las canciones de un artita /tracks/artist/1
}
