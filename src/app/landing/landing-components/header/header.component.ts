import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  about(){
    this.router.navigate(['about'])
  }
  service(){
    this.router.navigate(['service'])
  }
  home(){
    this.router.navigate(['home'])
  }
  enterprise(){
    this.router.navigate(['service/enterprise'])
  }
  power(){
    this.router.navigate(['service/power'])
  }
  wireless(){
    this.router.navigate(['service/wireless'])
  }
  wireline(){
    this.router.navigate(['service/wireline'])
  }



}
