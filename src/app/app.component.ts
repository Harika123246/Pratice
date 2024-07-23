import { TranslateService } from '@ngx-translate/core';
import { MessageService } from './message.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
//   title = 'pratice';
//   msg = '';
//   number :any= 8309241292;
//   time = Date.now();
//   parentMsg= 'Message from parent'
//   location ="hyderbad"
// binding: any;
// constructor(private ms: MessageService){

//  this.msg=this.ms.test();
// }

// cdata(message:any){
//   console.log(message, "parent");
// }

// update(){
//   console.log(this.location)
//   return this.location
// }

// }

parentmsg = "hi from parent"

cdata(message1: any){
  console.log(message1, "hello")
}

constructor(private translateService: TranslateService){
  const userLang = navigator.language || 'en';
 const languageCode= userLang.split('-')[0];
 this.translateService.setDefaultLang(languageCode);
this.translateService.use(languageCode);

}

}

