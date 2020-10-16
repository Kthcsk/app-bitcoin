import { Component, OnInit } from '@angular/core';
import { DataService } from '../../src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app-bitcoin';

  bitcoinUsd: any;
  
  constructor(public _service: DataService) { }

    ngOnInit(): void {
      this._service.getPriceInUsd()
      .subscribe((data:any) => {
        console.log(data['bpi'])
          this.bitcoinUsd = data['bpi'].USD;
        }
      );

  }

}
