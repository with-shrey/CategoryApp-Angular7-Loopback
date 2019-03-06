import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../shared/model/category/category';
import {CategoryService} from '../shared/service/category.service';
import {ToastrService} from 'ngx-toastr';
import {Subcategory} from '../shared/model/subcategory/subcategory';
import {SubcategoryService} from '../shared/service/sub-category.service';

@Component({
  selector: 'app-sub-category-add',
  templateUrl: './sub-category-add.component.html',
  styleUrls: ['./sub-category-add.component.scss']
})
export class SubCategoryAddComponent implements OnInit {
  addMode = false;
  subcategory: Subcategory;
  @Input()categoryId: number;
  @Output()categoryAdded = new EventEmitter<Category>();

  constructor(private service: SubcategoryService,
              private toastr: ToastrService
  ) { }
  ngOnInit() {
  }

  enableAdd() {
    this.addMode = true;
    this.subcategory = new Subcategory();
    this.subcategory.categoryId = this.categoryId;
    this.subcategory['parent-type'] = 'global';
    this.subcategory.type = '';
  }

  addCategory() {
    this.service.addSubcategory(this.subcategory).subscribe(subcategory => {
      this.categoryAdded.emit(subcategory);
      this.addMode = false;
      this.toastr.success(subcategory.name, 'Added Successfully');
    });
  }
}
