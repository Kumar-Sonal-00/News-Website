import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../Service/newsapi.service';
@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {
  constructor(private _service: NewsapiService)
  {}

  businesNewsDisplay: any =[];

  ngOnInit(): void {
    this._service.businessNews().subscribe((result)=> {
      console.log(result);
      this.businesNewsDisplay = result.articles;
    });
  }

}
