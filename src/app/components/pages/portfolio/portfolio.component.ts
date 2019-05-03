import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from '../../../services/portfolio-service.service';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portafolios: any[];

  constructor( private _portolioService: PortfolioServiceService,
               private router: Router ) {
    this._portolioService.getAllPortfolio().subscribe(
      (data) => {
        // console.log(data);
        this.portafolios = data;
      }
    );
  }

  ngOnInit() {
    init_plugins();
  }

  detalle( data: string ) {
    const slug = data.trim();

    this.router.navigate(['/portafolio', slug]);
    // console.log(slug);
  }

}
