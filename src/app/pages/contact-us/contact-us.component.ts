import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  public sent = false;
  public loading = false;

  public name: string = "";
  public email: string = "";
  public message = "";

  constructor(private http: HttpClient) { }

  public send() {

    this.loading = true;

    this.http.post<any>('https://stellaruiwebsiteapiprod.azurewebsites.net/api/v1/contactformcontroller/contact',
        { name: this.name, email: this.email, message: this.message })
        .subscribe(data => {

        this.loading = false;
        if(data.response_code == 200) {
            this.sent = true;

            this.name = "";
            this.email = "";
            this.message = "";
            } else {
            alert('Something went wrong. Did you enter a correct email?');
        }

        });


  }

}
