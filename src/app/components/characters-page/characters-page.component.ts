import { Component } from '@angular/core';
import { SearchCharacterComponent } from '../search-character/search-character.component';
import { AlbumCharactersComponent } from '../album/album-characters.component';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../interfaces/Character';
import { DefaultResponse } from '../../interfaces/DefaultRespone';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'characters-page',
  imports: [
    SearchCharacterComponent,
    AlbumCharactersComponent,
    CommonModule
  ],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.scss'
})
export class CharactersPageComponent {

  response!: DefaultResponse<Character[]>;

  constructor(private charactersService: CharactersService) {
    this.loadCharacters();
  }

  public loadCharacters(): void {
    this.charactersService.getAllHttp().subscribe(response=>{
      this.response = response;
    });
  }

  public findCharacter(id: string) {
    this.charactersService.getHttp(id).subscribe(response=>{
      console.log(response);
      this.response = response;
    });
  }

}
