import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private data: DataService, private router: Router) {
  }

  ngOnInit() { }

  ngOnDestroy() {

  }
}
