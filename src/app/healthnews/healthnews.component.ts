import { Component, OnInit} from '@angular/core';
import { NewsapiService } from '../Service/newsapi.service';
@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.css']
})
export class HealthnewsComponent implements OnInit {

  constructor(private _service: NewsapiService){}
   healthNewsDisplay:any=[];
   
   ngOnInit(): void {
    this._service.healthNews().subscribe((result) =>{
      console.log(result);
      this.healthNewsDisplay = result.articles;
    })
   }
}
