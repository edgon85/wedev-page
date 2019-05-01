import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  private itemsCollection: AngularFirestoreCollection<any>;
  private itemDocument: AngularFirestoreDocument<any>;
  portfolio: Observable<any>;
  items: Observable<any[]>;

  constructor( private afs: AngularFirestore ) { }


  getAllPortfolio() {
    this.itemsCollection = this.afs.collection<any>('portafolio');
    return this.items = this.itemsCollection.valueChanges();
  }

  getOnePortfolio(slug: string) {
    this.itemDocument = this.afs.doc('portafolio/' + slug);
    return this.portfolio = this.itemDocument.valueChanges();
  }
}
