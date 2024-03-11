import { Component, OnInit} from '@angular/core';
import { NewsapiService } from '../Service/newsapi.service';
@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {

  constructor(private _service:NewsapiService){}

  sportsNewsDisplay:any=[];

  ngOnInit():void{
    this._service.sportsNews().subscribe((result) =>{
      console.log(result);
      this.sportsNewsDisplay = result.articles;
    });
  }
}
