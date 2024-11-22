import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemons:any=[];
  constructor( private _pokemonService:PokemonService){
    this._pokemonService.getData().subscribe((data:any)=>{
      this.pokemons=data;
      console.log(this.pokemons);
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
  }
}
