import { Component, OnInit } from "@angular/core";
import { NewsapiService } from "../Service/newsapi.service";

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  constructor(private _service:NewsapiService){}
  
  techNewsDisplay:any=[];
  ngOnInit(): void {
    this._service.businessNews().subscribe((result) =>{
      console.log(result);
      this.techNewsDisplay= result.articles;
    });
  }
}