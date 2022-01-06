import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsServiceService {

  constructor() { }

  getAuthors(){
    return ["author1", "author2", "author3"];
  }
}
