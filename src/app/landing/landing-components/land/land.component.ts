import { Component, OnInit } from '@angular/core';

const faders = document.querySelectorAll('.fade-in');

faders.forEach(fader =>{
    appearScroll.observe(fader);
})

const appearOptions ={}
const appearScroll = new IntersectionObserver(
  function(entries, appearScroll) {
    entries.forEach(entry =>{
      if(!entry.isIntersecting){
        return
      }
      else{
        entry.target.classList.add('appear');
        appearScroll.unobserve(entry.target);
      }
    })
  
}, appearOptions);

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})

export class LandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  appearOnScroll(){

  }

  

}
