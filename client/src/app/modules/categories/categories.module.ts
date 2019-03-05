import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import {BreadcrumComponent} from '../../shared/components/breadcrum/breadcrum.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [CategoriesComponent, CategoryListComponent, CategoryAddComponent, CategoryEditComponent,BreadcrumComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
  ]
})
export class CategoriesModule { }
