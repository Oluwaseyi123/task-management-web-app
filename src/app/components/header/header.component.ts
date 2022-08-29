import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDropdownToggled: Boolean = false

  constructor() { }
  showDropdown(){
   
    this.isDropdownToggled =! this.isDropdownToggled
    console.log(this.isDropdownToggled)
  }

  ngOnInit(): void {
  }

}
