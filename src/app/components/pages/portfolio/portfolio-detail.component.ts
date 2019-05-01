import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioServiceService } from '../../../services/portfolio-service.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {

  portfolio: any = {};

  constructor( private route: ActivatedRoute,
               private _portfolioService: PortfolioServiceService) {
    this.route.params.subscribe(
      (params) => {
        // console.log(params['slug']);
        this.getPortfolio(params['slug']);
      }
    );
  }

  ngOnInit() {
  }

  getPortfolio( slug: string ) {
    this._portfolioService.getOnePortfolio(slug)
    .subscribe(
      (data) => {
        this.portfolio = data;
        console.log( this.portfolio );
      }
    );
  }

}
