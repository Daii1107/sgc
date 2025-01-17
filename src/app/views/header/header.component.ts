import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token: any;
  userData: any;
  login: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.token = localStorage.getItem('token');
    // this.userData = jwt_decode(this.token);
    // console.log(this.userData);

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() : boolean {  
    return localStorage.getItem('token') !== null;
  }

}
