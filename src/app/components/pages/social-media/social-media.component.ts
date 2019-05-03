import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
  resultados = true;
  marca = false;

  imgResultados = '01';
  constructor() {}

  ngOnInit() {}

  monitorizacionResultados() {
    this.resultados = true;
    this.marca = false;
    this.imgResultados = '01';

  }

  notoriedadMarca() {
    this.resultados = false;
    this.marca = true;
    this.imgResultados = '02';
  }


}
