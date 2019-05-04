import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from '../../../services/portfolio-service.service';
import { Message } from '../../../interfaces/contactmessage';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
declare let swal: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data: Message = {
    name: '',
    email: '',
    subject: '',
    message: '',
    timestamp: ''
  };

  forma: FormGroup;
  date: any;

  constructor(private _messageService: PortfolioServiceService) {


    this.date = new Date();

    this.forma = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      timestamp: new FormControl('' + this.date)
    });
  }

  ngOnInit() {}

  sendMessage() {
    // console.log(this.forma.value);
    this._messageService
      .newMessageContact(this.forma.value)
      .then(() => {
        // console.log('Creado exitosamente');
        swal(
          'Mensaje enviado',
          'Pronto estaremos en contacto con usted!',
          'success'
        );
        this.forma.reset({
          Message: {
            name: '',
            email: '',
            subject: '',
            message: '',
            timestamp: ''
          }
        });
      })
      .catch(e => console.log('Error', e));
  }
}
