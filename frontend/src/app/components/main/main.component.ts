import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterContentInit {
  
  ROOT_URL: string; // Local ROOT_URL

  ngOnInit() {
    // Sets local variables to data's values
  }

  ngAfterContentInit() { }

}
