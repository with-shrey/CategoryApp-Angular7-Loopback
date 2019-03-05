import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {CategoryService} from '../shared/service/category.service';
import {BreadcrumService} from '../../../shared/service/breadcrum.service';
import {Breadcrum} from '../../../shared/model/breadcrum';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../shared/model/category/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  id: number;
  category: Category;
  constructor(private service: CategoryService,
              private toastr: ToastrService,
              private crum: BreadcrumService,
              private route: ActivatedRoute,
              private router: Router
              ) { this.category = new Category();}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.crum.setBreadcrum([
      new Breadcrum('Categories', '/'),
      new Breadcrum('' + this.id, '/'),
      new Breadcrum('Edit', '#'),
    ]);
    this.service.getCategory(this.id).subscribe(category => this.category = category);
  }

  updateCategory() {
    this.service.updateCategory(this.category)
      .subscribe(category => {
        this.toastr.success(category.name, 'Updated Successfully');
        this.router.navigate(['/']);
      });
  }

}
