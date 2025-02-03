import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { Character } from '../../interfaces/Character';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'album-characters-component',
  imports: [CommonModule],
  templateUrl: './album-characters.component.html',
  styleUrl: './album-characters.component.scss'
})
export class AlbumCharactersComponent {

  @Input() characters: Character[];

  constructor(private matDialog: MatDialog) {
    this.characters = [];
  }

  public openDetailsModal(character: Character) {
    this.matDialog.open(DetailsModalComponent, {
      data: {
        character
      }
    });
  }
}