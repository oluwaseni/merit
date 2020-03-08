import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  overview(){
    this.router.navigate(['about/overview'])
  }
  mission(){
    this.router.navigate(['about/mission'])
  }
  values(){
    this.router.navigate(['about/values'])
  }
  culture(){
    this.router.navigate(['about/culture'])
  }

}
