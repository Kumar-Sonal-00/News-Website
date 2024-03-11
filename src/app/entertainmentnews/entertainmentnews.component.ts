import { Component, OnInit} from '@angular/core';
import { NewsapiService } from '../Service/newsapi.service';
@Component({
  selector: 'app-entertainmentnews',
  templateUrl: './entertainmentnews.component.html',
  styleUrls: ['./entertainmentnews.component.css']
})
export class EntertainmentnewsComponent implements OnInit {
  constructor(private _service:NewsapiService){}
  entertainmentNewsDisplay:any =[];

  ngOnInit(): void {
    this._service.entertainmentNews().subscribe((result) =>{
      console.log(result);
      this.entertainmentNewsDisplay = result.articles;
    })
  }

}
