import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-navagation',
  templateUrl: './user-navagation.component.html',
  styleUrls: ['./user-navagation.component.css']
})
export class UserNavagationComponent implements OnInit {

  constructor() { }
  public items: { field: string }[] = [
    { field: 'Option 1' },
    { field: 'Option 2' },
    { field: 'Option 3' }
];
  dropdownWomanCollection(){

  }
  dropdownManCollection(){

  }
  dropdownlogsignin(){
    
  }
  dropdownprofile(){

  }
  dropdownbags(){

  }
  dropdownshoes(){

  }
  dropdownaccessories(){

  }
  dropdownpages(){

  }
  ngOnInit(): void {
  }

}
