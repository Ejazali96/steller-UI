import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  public name: string = "";
  public email: string = "";
  public message = "";

  constructor(private http: HttpClient) { }

  public send() {

    this.http.post<any>('https://stellaruiwebsiteapiprod.azurewebsites.net/api/v1/contactformcontroller/contact',
        { name: this.name, email: this.email, message: this.message })
        .subscribe(data => {})

    alert('Thanks for the message. It has been sent and we will reply soon. Regards, Stellar Security.');

    this.name = "";
    this.email = "";
    this.message = "";

  }

}
