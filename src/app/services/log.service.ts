import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { DefaultResponse } from '../interfaces/DefaultRespone';
import { Log } from '../interfaces/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private path: string;

  constructor(private http: HttpClient) {
    this.path = `${environment.apiUrl}/logs`;
  }

  getAll(id: string) {
    return this.http.get<DefaultResponse<Log>>(this.path);
  }

}
