import { Component } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

interface Starship{
  name: string,
  starship_class: string;
  passengers: string;
  length: string;
  created: string
}

interface Planet{
  name: string,
  climate: string,
  gravity: string,
  population: string,
  created: string
}

interface People{
  name: string,
  height: string,
  mass: string,
  gender: string,
  created: string
}

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss']
})
export class FilmPageComponent{
  title = 'film-page';
  episode_id: string = '';
  url= 'https://swapi.dev/api/starships/';
  response: any;
  response2: any;

  constructor(private http: HttpClient){}

  search(){
    this.http.get('https://swapi.dev/api/films/'+ this.episode_id)
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response) 
    })
  }

  starships: Starship[]=[
    {
      "name": "CR90 corvette", 
      "length": "150", 
      "passengers": "600",
      "created": "2014-12-10T14:20:33.369000Z",
      "starship_class": "CR90_corvette"
  }, 
  {
      "name": "Star Destroyer", 
      "length": "1,600", 
      "passengers": "n/a", 
      "starship_class": "Star Destroyer",
      "created": "2014-12-10T15:08:19.848000Z", 
  }, 
  {
      "name": "Sentinel-class landing craft", 
      "length": "38", 
      "passengers": "75", 
      "created": "2014-12-10T15:48:00.586000Z",
      "starship_class": "Sentinel-class landing craft",
  }, 
  {
      "name": "Death Star", 
      "length": "120000", 
      "passengers": "843,342", 
      "starship_class": "Deep Space Mobile Battlestation", 
      "created": "2014-12-10T16:36:50.509000Z", 
  }, 
  {
      "name": "Millennium Falcon", 
      "length": "34.37", 
      "passengers": "6",  
      "starship_class": "Light freighter", 
      "created": "2014-12-10T16:59:45.094000Z", 
  }, 
  {
      "name": "Y-wing", 
      "length": "14", 
      "passengers": "0", 
      "starship_class": "assault starfighter", 
      "created": "2014-12-12T11:00:39.817000Z", 
  }, 
  {
      "name": "X-wing", 
      "length": "12.5", 
      "passengers": "0",  
      "starship_class": "Starfighter", 
      "created": "2014-12-12T11:19:05.340000Z", 
  }, 
  {
      "name": "TIE Advanced x1",
      "length": "9.2", 
      "passengers": "0", 
      "starship_class": "Starfighter", 
      "created": "2014-12-12T11:21:32.991000Z", 
  }, 
  {
      "name": "Executor", 
      "length": "19000", 
      "passengers": "38000", 
      "starship_class": "Star dreadnought", 
      "created": "2014-12-15T12:31:42.547000Z", 
  }, 
  {
      "name": "Rebel transport", 
      "length": "90",  
      "passengers": "90", 
      "starship_class": "Medium transport", 
      "created": "2014-12-15T12:34:52.264000Z",
  }
]

 peoples: People[]=[
  {
    "name": "Luke Skywalker", 
    "height": "172", 
    "mass": "77", 
    "gender": "male", 
    "created": "2014-12-09T13:50:51.644000Z", 
}, 
{
    "name": "C-3PO", 
    "height": "167", 
    "mass": "75", 
    "gender": "n/a", 
    "created": "2014-12-10T15:10:51.357000Z",
}, 
{
    "name": "R2-D2", 
    "height": "96", 
    "mass": "32", 
    "gender": "n/a", 
    "created": "2014-12-10T15:11:50.376000Z", 
}, 
{
    "name": "Darth Vader", 
    "height": "202", 
    "mass": "136", 
    "gender": "male", 
    "created": "2014-12-10T15:18:20.704000Z", 
}, 
{
  "name": "Leia Organa", 
  "height": "150", 
  "mass": "49", 
  "gender": "female", 
  "created": "2014-12-10T15:20:09.791000Z", 
}, 
{
  "name": "Owen Lars", 
  "height": "178", 
  "mass": "120", 
  "gender": "male", 
  "created": "2014-12-10T15:52:14.024000Z", 
}, 
{
  "name": "Beru Whitesun lars", 
  "height": "165", 
  "mass": "75", 
  "gender": "female", 
  "created": "2014-12-10T15:53:41.121000Z", 
}, 
{
  "name": "R5-D4", 
  "height": "97", 
  "mass": "32", 
  "gender": "n/a", 
  "created": "2014-12-10T15:57:50.959000Z", 
}, 
{
  "name": "Biggs Darklighter", 
  "height": "183", 
  "mass": "84", 
  "gender": "male", 
  "created": "2014-12-10T15:59:50.509000Z", 
}, 
{
  "name": "Obi-Wan Kenobi", 
  "height": "182", 
  "mass": "77", 
  "gender": "male", 
  "created": "2014-12-10T16:16:29.192000Z", 
}
 ]

 planets: Planet[]=[
  {
    "name": "Tatooine", 
    "climate": "arid", 
    "gravity": "1 standard", 
    "population": "200000", 
    "created": "2014-12-09T13:50:49.641000Z", 
}, 
{
    "name": "Alderaan", 
    "climate": "temperate", 
    "gravity": "1 standard", 
    "population": "2000000000", 
    "created": "2014-12-10T11:35:48.479000Z", 
}, 
{
    "name": "Yavin IV",  
    "climate": "temperate, tropical", 
    "gravity": "1 standard", 
    "population": "1000", 
    "created": "2014-12-10T11:37:19.144000Z", 
}, 
{
    "name": "Hoth", 
    "climate": "frozen", 
    "gravity": "1.1 standard", 
    "population": "unknown", 
    "created": "2014-12-10T11:39:13.934000Z",
}, 
{
    "name": "Dagobah", 
    "climate": "murky", 
    "gravity": "N/A",  
    "population": "unknown", 
    "created": "2014-12-10T11:42:22.590000Z", 
}, 
 ]
}

