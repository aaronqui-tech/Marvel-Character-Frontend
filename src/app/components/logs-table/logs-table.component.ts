import { Component } from '@angular/core';
import { DefaultResLog } from '../../interfaces/DefaultResLog';
import { Log } from '../../interfaces/Log'
import { LogService } from '../../services/log.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logs-table',
  imports: [
    CommonModule
  ],
  templateUrl: './logs-table.component.html',
  styleUrl: './logs-table.component.scss'
})
export class LogsTableComponent {

  logs!: DefaultResLog<Log[]>;

  constructor(private logService: LogService) {
    this.loadLogs();
  }

  public loadLogs(): void {
    this.logService.getAll().subscribe(response=>{
        this.logs = response;
      });
  }
}
