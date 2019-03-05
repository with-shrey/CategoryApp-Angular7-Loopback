import { Injectable } from '@angular/core';
import {Breadcrum} from '../model/breadcrum';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumService {
  breadcrums: Breadcrum[] = [];
  constructor() {
  }

  setBreadcrum(breadcrums: Breadcrum[]): void {
    this.breadcrums.length = 0;
    this.breadcrums.push(...breadcrums);
  }

  addBreadCrum(breadcrum: Breadcrum): void {
    this.breadcrums.push(breadcrum);
  }

  getBreadcrum(): Breadcrum[] {
    return this.breadcrums;
  }

  shouldShow(): boolean {
    return this.breadcrums.length > 0;
  }
}
