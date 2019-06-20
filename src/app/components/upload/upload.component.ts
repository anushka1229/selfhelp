import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

 public uploadForm:any;
 public teamMembers: Array<string>;
 public contributors: Array<string>;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      projectName: new FormControl(''),
      authorId: new FormControl(''),
      csiId:new FormControl(''),
      technology:new FormControl(''),
      background:this.fb.group({
        objective:new FormControl(''),
        deliverables: new FormControl(''),
        constraints: new FormControl('')
      }),
     
       roles: this.fb.group({
         manager:new FormControl(''),
        members: this.fb.array([this.teamMembers]),
         keyStakeholder: new FormControl('')
       }),

       path: new FormControl(''),
       contributors: this.fb.array([this.contributors])


    });
  }
 SaveForm()
 {
   
 }
}
