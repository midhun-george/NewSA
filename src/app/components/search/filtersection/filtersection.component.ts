import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

//import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-filtersection',
  templateUrl: './filtersection.component.html',
  styleUrls: ['./filtersection.component.css']
})

export class FiltersectionComponent implements OnInit {
  runs;
  balls;
  p;
  filterArray = [];
  addDetailsBool = false;
  format = "";
  updatedRuns;
  updatedStrikeRate;
  strikeRateToday;
  totalBalls;
  choosed;
  id;
  constructor(
    //private myNewServiceService: SearchService, 
    public dialogRef: MatDialogRef<FiltersectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
   ) { }

  ngOnInit() {
    //this.getAllData();
    this.filterArray = this.data.item;
    console.log(this.data.searchList)
    
    this.id = this.data.item.id;
  }

  // filterList(item, category) {
  //   var filterobj = {};
  //   if (item.checked) {
  //     for (var i = 0; i < this.filterArray.length; i++) {
  //       if (this.filterArray[i][category] == item[category]) {
  //         this.filterArray.splice(i, 1);
  //         break;
  //       }
  //     }
  //   }
  //   else {
  //     filterobj[category] = item[category];
  //     this.filterArray.push(filterobj);
  //   }
  //   this.p = 1;
  // }

  // closeDialog() {
  //   this.dialogRef.close(this.filterArray);
  // }

  // getAllData() {
  //   this.searchList = this.data.searchList;
  //   this.allLocations = this.data.locations;
  //   this.partnerLists = this.data.partners;
  // }

  addDetails(format){
    
    this.addDetailsBool = true;
    this.choosed = format;
  }
  SelectedFormat(flag){
    this.format = flag;
  }
  updateRuns(){
    debugger;
    this.updatedRuns = this.data.item[this.choosed].runs + Number(this.runs);
    this.data.item[this.choosed].runs = this.data.item[this.choosed].runs + Number(this.runs);
  }
  getStrikeRateDetails(){
    this.data.item[this.choosed].balls = this.data.item[this.choosed].balls + Number(this.balls);
    this.data.item[this.choosed].match = this.data.item[this.choosed].match+1;
    this.totalBalls = this.data.item[this.choosed].balls + Number(this.balls);
    this.strikeRateToday = (this.runs*100)/this.balls;
    this.updatedStrikeRate = (this.updatedRuns/this.totalBalls)*100
  }
  updateData(){
    
    for(var i=0; i<this.data.searchList.length;i++){
      if(this.data.searchList[i].id == this.id){
        this.data.searchList[i] = this.data.item;
        break;
      }
    }
    let dataTostore = JSON.stringify(this.data.searchList);
    localStorage.setItem("SATeamData",dataTostore)
  }
   
  
}
