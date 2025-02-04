import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { DefaultResponse } from '../interfaces/DefaultRespone';
import { Character } from '../interfaces/Character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private path: string;

  constructor(private http: HttpClient) {
    this.path = `${environment.apiUrl}/character`;
  }

  //  UTILIZANDO PETICIONES HTTP
  getAllHttp() {
    return this.http.get<DefaultResponse<Character[]>>(this.path);
  }

  getHttp(id: string) {
    return this.http.get<DefaultResponse<Character[]>>(`${this.path}/${id}`);
  }

}
