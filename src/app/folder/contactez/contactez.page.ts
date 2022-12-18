import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactez',
  templateUrl: './contactez.page.html',
  styleUrls: ['./contactez.page.scss'],
})
export class ContactezPage implements OnInit {
  api='/api' 
 
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
loginForm(event){
 
  
      this.http.get(this.api+'nom='+event.target.nom.value
      +'email='+event.target.email.value
      +'message='+event.target.message.value
      ).subscribe((response: any) => {
    })
  }
}
