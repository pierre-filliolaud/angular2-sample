import { Component } from '@angular/core';

import { Trade } from './trade.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trades: Trade[];
  predicate: any;
  data: any[];

  title = 'My First Angular2 App';

  constructor(
  ) {
    this.trades = [];
  }

  ngOnInit(): void {
    var title = 'My First Angular2 App!';
    console.log(title);
    // this.test1();
    // for (let i = 0; i < 100; i++) {
    //   this.loadAll();
    // }
    this.loadAll();
    for (let i = 0; i < 1000; i++) {
    this.addData(i);
    this.loadAll();
    }

  }

  test1(): void {
    var data = [{ a: 1, b: 1, c: 1 }, { a: 1, b: 2, c: 1 }, { a: 1, b: 3, c: 1 }, { a: 2, b: 1, c: 1 }];
    var res = alasql('SELECT a, COUNT(*) AS b FROM ? GROUP BY a', [data]);
    console.log(res);
  }

  loadAll(): void {
    if (this.data == null || this.data.length == 0) {
      this.data = [{ id: 1, productType: 'Equity', currency: 'EUR' }, { id: 2, productType: 'Equity', currency: 'EUR' }, { id: 3, productType: 'Bond', currency: 'USD' }, { id: 4, productType: 'Bond', currency: 'EUR' }];
      alasql("CREATE TABLE trade");
    }
    for (let i = 0; i < this.data.length; i++) {
      alasql("INSERT INTO trade VALUES ?", [this.data[i]]);
    }

    // alasql("INSERT INTO trade VALUES ?", this.data);
    // var res = alasql('SELECT id, productType, currency FROM ? where currency=="USD"', [data]);
    // var res = alasql('SELECT * FROM trade');
    // console.log(res);
    var res = alasql('SELECT distinct id, productType, currency FROM trade');
    console.log(res);
    this.onSuccess(res);
  }

  addData(id: number): void {
    var data = { id: id, productType: 'Equity', currency: 'EUR' };
    alasql("INSERT INTO trade VALUES ?", [data]);
    this.data
  }

  reset() {
    this.trades = [];
    this.loadAll();
  }

  private onSuccess(data) {
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
      this.trades.push(data[i]);
    }
  }


}
