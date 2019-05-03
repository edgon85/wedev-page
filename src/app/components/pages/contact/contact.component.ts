import { Component, OnInit } from '@angular/core';
declare let swal: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendInfo() {
    swal('Mensaje enviado', 'Pronto estaremos en contacto con usted!', 'success');
  }

}
