import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit{
  regForm !:FormGroup
 
  constructor( private fb : FormBuilder){

  }
  ngOnInit(){
  this.regForm = this.fb.group({
   uname : ['',Validators.required],
   pwd : ['',[Validators.required,Validators.minLength(6)]],
   email :['',Validators.required]
  })
}

update(){
  alert('submitted sucessfully');
}
    
  }


