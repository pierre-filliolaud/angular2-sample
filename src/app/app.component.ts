import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular2 App';

  ngOnInit(): void {
    var title = 'My First Angular2 App!';
    console.log(title);
    this.test1();
    this.test2();
  }

  test1(): void {
    var data = [{ a: 1, b: 1, c: 1 }, { a: 1, b: 2, c: 1 }, { a: 1, b: 3, c: 1 }, { a: 2, b: 1, c: 1 }];
    var res = alasql('SELECT a, COUNT(*) AS b FROM ? GROUP BY a', [data]);
    console.log(res);
  }

  test2(): void {
    var data = [{ a: 1, b: 1, c: 1 }, { a: 1, b: 2, c: 1 }, { a: 1, b: 3, c: 1 }, { a: 2, b: 1, c: 1 }];
    var res = alasql('SELECT a, COUNT(*) AS b FROM ? GROUP BY a', [data]);
    console.log(res);
  }


}
