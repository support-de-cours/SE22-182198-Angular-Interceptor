import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// TODO: Step 2 - HttpClient Service import
import { HttpClient } from '@angular/common/http';

// TODO: Step 4 - 
// TODO: Step 8.a - Move endpoint (/environment/environment.ts)
// const endpoint: string = "https://pokeapi.co/api/v2/";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  // TODO: Step 5 - Pokemons properties
  private _pokemons = new BehaviorSubject<any>({});
  pokemons: any[] = [];

  constructor(
    // TODO: Step 3 - HttpClient instance
    private _httpClient: HttpClient
  ) {}

  ngOnInit(): void 
  {

    // TODO: Step 9 - Remove Endpoint 
    // this._httpClient.get( `${endpoint}pokemon` ).subscribe(data => {

    this._httpClient.get( `pokemon` ).subscribe(data => {
      this._pokemons.next(data);
      this._pokemons.subscribe(data => this.pokemons = data.results )
    });
  }
}
