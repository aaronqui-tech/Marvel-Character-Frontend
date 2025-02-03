import { Component } from '@angular/core';
import { Log } from '../../interfaces/Log';

@Component({
  selector: 'app-logs-table',
  imports: [],
  templateUrl: './logs-table.component.html',
  styleUrl: './logs-table.component.scss'
})
export class LogsTableComponent {

  logs: Log[];

  constructor() {
    this.logs = [];
  }
}
