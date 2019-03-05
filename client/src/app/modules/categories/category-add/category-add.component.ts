import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from '../shared/model/category/category';
import {CategoryService} from '../shared/service/category.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  addMode = false;
  category: Category;
  @Output()categoryAdded = new EventEmitter<Category>();

  constructor(private service: CategoryService,
              private toastr: ToastrService
              ) { }
  ngOnInit() {
  }

  enableAdd() {
    this.addMode = true;
    this.category = new Category();
  }

  addCategory() {
      this.service.addCategory(this.category).subscribe(category => {
        this.categoryAdded.emit(category);
        this.addMode = false;
        this.toastr.success(category.name, 'Added Successfully');
      });
  }
}
