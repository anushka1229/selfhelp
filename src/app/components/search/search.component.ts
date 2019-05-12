import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  filters=new FormControl();
 public selectList = [
   {
     'id':1,
     'name': 'Project Title' 
   },
   {
     'id': 2,
     'name': 'Author'
   },
   {
     'id':3,
     'name': 'SOE ID',

   },
   {
     'id': 4,
     'name': 'Technology'
   }
 ]

 public changeFilter(event)
 {
console.log(event);
 }
}
