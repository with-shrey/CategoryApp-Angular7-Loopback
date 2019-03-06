import { Component, OnInit } from '@angular/core';
import {Category} from '../shared/model/category/category';
import {BreadcrumService} from '../../../shared/service/breadcrum.service';
import {Breadcrum} from '../../../shared/model/breadcrum';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../shared/service/category.service';
import {ToastrService} from 'ngx-toastr';
import {Subcategory} from '../shared/model/subcategory/subcategory';
import {SubcategoryService} from '../shared/service/sub-category.service';

@Component({
  selector: 'app-sub-category-edit',
  templateUrl: './sub-category-edit.component.html',
  styleUrls: ['./sub-category-edit.component.scss']
})
export class SubCategoryEditComponent implements OnInit {
  id: number;
  subcatid: number;
  category: Subcategory;
  constructor(private service: SubcategoryService,
              private toastr: ToastrService,
              private crum: BreadcrumService,
              private route: ActivatedRoute,
              private router: Router
  ) {
    this.category = new Subcategory();
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.subcatid = this.route.snapshot.params['subid'];
    this.crum.setBreadcrum([
      new Breadcrum('Category' + this.id, `/${this.id}/edit`),
      new Breadcrum('SubCategory' + this.subcatid, `/${this.id}`),
      new Breadcrum('Edit', '#'),
    ]);
    this.service.getSubcategory(this.subcatid).subscribe(category => this.category = category);
  }

  updateCategory() {
    this.service.updateSubcategory(this.category)
      .subscribe(category => {
        this.toastr.success(category.name, 'Updated Successfully');
        this.router.navigate([`/${this.id}`]);
      });
  }
}
