import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-live-scores',
  templateUrl: './live-scores.component.html',
  styleUrls: ['./live-scores.component.css']
})
export class LiveScoresComponent implements OnInit {
  @Input("searchPart") searchPart:boolean =true;
  constructor() { }

  ngOnInit() {
    
  }
}
