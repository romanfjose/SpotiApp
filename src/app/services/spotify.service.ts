import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = "BQDsC0EfLexXmvBM3Bj9IQNFVg2c7emqdu31D43Vn4A10iYnJE__x6ZMUFZD8cmnpbLC3m_d3N7jG6vfSEg"
  constructor(private http: HttpClient) {
    console.log("Servicio de spotify listo");

   }

   getQuery(query: string){

    const url = `https://api.spotify.com/v1${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(url, {headers})
   }

   getNewReleases(){

    return this.getQuery('/browse/new-releases?limit=20')
          .pipe( map((data:any) => data['albums'].items ));

   }

   getArtista(termino:string){

    return this.getQuery(`/search?q=${termino}&type=artist`)
      .pipe( map((data:any) => data['artists'].items ))

   }
}
