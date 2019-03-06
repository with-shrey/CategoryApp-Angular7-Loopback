import { Component, OnInit } from '@angular/core';
import {Category} from '../shared/model/category/category';
import {CategoryService} from '../shared/service/category.service';
import {ToastrService} from 'ngx-toastr';
import {BreadcrumService} from '../../../shared/service/breadcrum.service';
import {Breadcrum} from '../../../shared/model/breadcrum';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  offset = 0;
  selectedCategory: number;
  timeout: any;
  search: string;
  constructor(private service: CategoryService,
              private toastr: ToastrService,
              private crum: BreadcrumService,
              private route: ActivatedRoute,
  ) {
    this.crum.setBreadcrum([new Breadcrum('Categories', '/')]);
  }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.selectedCategory = Number(this.route.snapshot.params['id']);
    }
    this.service.getCategories().subscribe(categories => {
      this.categories = categories;
      this.offset += this.service.limit;
    });
  }

  categoryAddedCallback(event): void {
    this.categories.unshift(event);
  }

  deleteCategory(category: Category) {
    this.service.deleteCategory(category).subscribe(
      count => {
        const index = this.categories.indexOf(category);    // <-- Not supported in <IE9
        if (index !== -1) {
          this.categories.splice(index, 1);
        }
        this.toastr.success('', 'Deleted Successfully');
      }
    );
  }

  onScroll() {
    if (this.search && this.search.length > 0) {
      this.service.searchCategory(this.search, this.offset).subscribe(categories => {
        this.categories.push(...categories);
        this.offset += this.service.limit;
      });
    } else {
      this.service.getCategories(this.offset).subscribe(categories => {
        this.categories.push(...categories);
        this.offset += this.service.limit;
      });
    }
  }

  onSearch(term: string): void {
    if ( this.timeout ) { clearTimeout(this.timeout); }
    if (term && term.length > 0) {
      this.timeout = setTimeout(() => {
        this.offset = 0;
        this.service.searchCategory(term, 0).subscribe(categories => {
          this.categories.length = 0;
          this.categories.push(...categories);
          this.offset += this.service.limit;
        });
      }, 200);
    } else {
      this.offset = 0;
      this.onScroll();
    }
  }

  selectCategory(category: Category) {
    if (this.selectedCategory !== category.id) {
      this.selectedCategory = category.id;
    } else {
      this.selectedCategory = null;
    }
  }
}
