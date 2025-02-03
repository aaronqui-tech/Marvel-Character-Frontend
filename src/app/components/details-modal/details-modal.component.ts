import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog'
import { Character } from '../../interfaces/Character';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'details-modal-component',
  imports: [MatDialogModule, CommonModule],
  templateUrl: './details-modal.component.html',
})
export class DetailsModalComponent {

  character: Character;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.character = data.character;
  }
}
