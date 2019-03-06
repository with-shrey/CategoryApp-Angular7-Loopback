import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesComponent} from './categories.component';
import {AuthGuard} from '../../shared/auth.guard';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {SubCategoryComponent} from './sub-category/sub-category.component';
import {SubCategoryEditComponent} from './sub-category-edit/sub-category-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CategoryListComponent,
      },
      {
        path: ':id',
        component: CategoryListComponent,
      },
      {
        path: ':id/edit',
        component: CategoryEditComponent,
      },
      {
        path: ':id/:subid/edit',
        component: SubCategoryEditComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
