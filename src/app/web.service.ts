import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { NumericLiteral } from 'typescript';

export interface petshop {
    id: number,
    type: string,
    price: string
}

@Injectable({
    providedIn: 'root'
})
export class WebService {
    apiUrl = 'http://petstore-demo-endpoint.execute-api.com/petstore/pets';

    constructor(private http: HttpClient) {}

GetPets(): Observable<petshop[]>{
    return this.http.get<petshop[]>(this.apiUrl);
}
}