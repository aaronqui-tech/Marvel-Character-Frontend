import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'search-character-component',
  imports: [FormsModule],
  templateUrl: './search-character.component.html',
  styleUrl: './search-character.component.scss'
})
export class SearchCharacterComponent {

  @Output() characterAction: EventEmitter<string>;
  idSelected: string;

  constructor() {
    this.characterAction = new EventEmitter<string>;
    this.idSelected = '';
  }

  public findCharacter() {
    this.characterAction.emit(this.idSelected);
  }

}
