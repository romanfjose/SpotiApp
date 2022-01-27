//Esto es para pedidos http
import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//servicio
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  loading:boolean;

  nuevasCanciones: any[] = [];

  constructor(private http: HttpClient, private spotify: SpotifyService) {

    this.loading = true;

    this.spotify.getNewReleases().subscribe((data:any) =>{
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    })
  }


  ngOnInit(): void {
  }

}
