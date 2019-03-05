import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/category/category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _category = 'Categories';
  public limit = 10;

  constructor(private http: HttpClient) { }

  public getCategories(offset = 0): Observable<Category[]> {
    return this.http.get<Category[]>(`${this._category}?filter={"limit":${this.limit},"offset":${offset},"order": "id DESC"}`);
  }

  public getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this._category}/${id}`);
  }

  public searchCategory(term: string, offset = 0): Observable<Category[]> {
    let query;
    if (term) {
      // {"limit":${this.limit},offset:${offset}"where":{"name":{"like":"%a%"}}}
       query = `{"order": "id DESC","limit": ${this.limit}, "offset": ${offset}, "where": {"name": {"like": "%${term}%"}}}`;
    } else {
       query = `{"order": "id DESC",limit": ${this.limit}, "offset": ${offset}}`;
    }
    return this.http.get<Category[]>(`${this._category}?filter=${encodeURIComponent(query)}`);
  }

  addCategory(category: Category): Observable<Category>  {
    const {name, description, type} = category;
    return this.http.post<Category>(this._category, {name, description, type});
  }

  updateCategory(category: Category): Observable<Category>  {
    return this.http.put<Category>(this._category, category);
  }

  deleteCategory(category: Category): Observable<any> {
    return this.http.delete<Category>(`${this._category}/${category.id}`);
  }
}
