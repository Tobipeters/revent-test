import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public currentUrl: string = "";

  constructor(
    // private route: Router
  ) { }

  ngOnInit(): void {
    this.currentUrl = window.location.hash;
    console.log(window.location.hash)
  }

  goTo = (url: string) => {
    window.location.href = url
    this.currentUrl = window.location.hash;
    console.log("checking", this.currentUrl, url)
  }


}
