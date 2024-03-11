import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../Service/newsapi.service';

@Component({
  selector: 'app-sciencenews',
  templateUrl: './sciencenews.component.html',
  styleUrls: ['./sciencenews.component.css']
})
export class SciencenewsComponent implements OnInit {

  constructor(private _service: NewsapiService){}

  scienceNewsDisplay:any=[];

  ngOnInit():void{
    this._service.scienceNews().subscribe((result) =>{
      console.log(result);
      this.scienceNewsDisplay= result.articles;
    });
  }
}
