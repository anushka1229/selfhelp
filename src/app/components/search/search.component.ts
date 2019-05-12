import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { SourceData } from 'src/app/POCO/SourceData';
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
  myControl=new FormControl();
  public sourcedata:SourceData=new SourceData();
  
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
