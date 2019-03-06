import {Component, Input, OnInit} from '@angular/core';
import {SubcategoryService} from '../shared/service/sub-category.service';
import {Subcategory} from '../shared/model/subcategory/subcategory';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {
  @Input()categoryId: number;
  subcategories: Subcategory[];
  loading: boolean;
  constructor(
    private service: SubcategoryService,
    private toastr: ToastrService,
              ) { }

  ngOnInit() {
    this.loading = true;
    this.service.getSubcategories(this.categoryId).subscribe(subcat => {
      this.subcategories = subcat;
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }

  deleteSubCAtegory(subcategory: Subcategory) {
    this.service.deleteSubcategory(subcategory).subscribe(deleted => {
      const index = this.subcategories.indexOf(subcategory);    // <-- Not supported in <IE9
      if (index !== -1) {
        this.subcategories.splice(index, 1);
      }
      this.toastr.success('', 'Deleted Successfully');
    });
  }

  editSubcategory(subcat: Subcategory) {

  }

  subCategoryAdded(sub: Subcategory) {
    this.subcategories.push(sub);
  }
}
