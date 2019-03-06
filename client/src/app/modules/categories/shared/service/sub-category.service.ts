import { Injectable } from '@angular/core';
import {Subcategory} from '../model/subcategory/subcategory';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  private _subcategory = 'Sub-categories';
  public limit = 10;

  constructor(private http: HttpClient) { }

  public getSubcategory(id: number): Observable<Subcategory> {
    return this.http.get<Subcategory>(`${this._subcategory}/${id}`);
  }
  public getSubcategories(id: number): Observable<Subcategory[]> {
    const filter = `{"categoryId":${id}}`;
    return this.http.get<Subcategory[]>(`${this._subcategory}?filter=${encodeURIComponent(filter)}`);
  }

  addSubcategory(subcategory: Subcategory): Observable<Subcategory>  {
    const {id, ...rest} = subcategory;
    return this.http.post<Subcategory>(this._subcategory, rest);
  }

  updateSubcategory(subcategory: Subcategory): Observable<Subcategory>  {
    return this.http.put<Subcategory>(this._subcategory, subcategory);
  }

  deleteSubcategory(subcategory: Subcategory): Observable<any> {
    return this.http.delete<Subcategory>(`${this._subcategory}/${subcategory.id}`);
  }
}
