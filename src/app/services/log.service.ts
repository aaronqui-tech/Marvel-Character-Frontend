import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { DefaultResLog } from '../interfaces/DefaultResLog';
import { Log } from '../interfaces/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private path: string;

  constructor(private http: HttpClient) {
    this.path = `${environment.apiUrl}/character/log`;
  }

  getAll() {
    return this.http.get<DefaultResLog<Log[]>>(this.path);
  }

}
