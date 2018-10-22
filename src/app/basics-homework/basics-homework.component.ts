import { Component, OnInit } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-basics-homework',
  templateUrl: './basics-homework.component.html',
  styleUrls: ['./basics-homework.component.less']
})
export class BasicsHomeworkComponent implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}
