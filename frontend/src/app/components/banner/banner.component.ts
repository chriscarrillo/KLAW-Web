import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersApiService } from 'src/apiServices/user/users-api.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  title = 'KLAW Web';

  constructor(private user: UsersApiService, private router: Router) { }

  ngOnInit() { }

  logout() {
    this.user.logout();
    this.router.navigate(['login']);
  }

}
