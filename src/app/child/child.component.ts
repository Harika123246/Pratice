import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
//   @Input() childData: any;
//  @Output() child = new EventEmitter();

//  test(){
//   this.child.emit("hello from child component")
//  }
@Input() ch : any;
@Output() custom = new EventEmitter();

test1(){
  this.custom.emit("hello from child")
}


}
