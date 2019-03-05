import {Component, Input, OnInit} from '@angular/core';
import {Breadcrum} from '../../model/breadcrum';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.scss']
})
export class BreadcrumComponent implements OnInit {
  @Input()breadcrums: Breadcrum[];
  constructor() { }

  ngOnInit() {
  }

}
