import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Router, Route, NavigationExtras, ActivatedRoute, Params } from '@angular/router';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material'
import { FiltersectionComponent} from './filtersection/filtersection.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  contentTypes = [
    { value: 'Batsmen', viewValue: 'Batsmen' },
    { value: 'Bowlers', viewValue: 'Bowler' },
    { value: 'All', viewValue: 'All' }
  ];
  item = "All";
  searchList = [];
  searchBackUp=[]
  itemsPerpage = 4;
  page = 1;
  filterArr;
  constructor(private player:PlayersService,
  private dialog:MatDialog,
) { }

  ngOnInit() {
    this.player.getSearch().subscribe(items => {
      this.searchList = this.searchBackUp =  items;
    })
  }

  MoreInfo(item){
    let width = '100%';
    let filter = this.dialog.open(FiltersectionComponent, {
      data: { item: item, searchList:this.searchList },
      width: width,
      panelClass: ['FiltersectionComponent'],
      disableClose: false,
      hasBackdrop: true
    })
    filter.afterClosed().subscribe(result => {
      this.filterArr = result;
    })
  }
  categoryMenuClick(val){
    this.item = val.viewValue;
  }  
  search(searchVal){
    console.log(searchVal);
    this.searchList = this.searchBackUp;
    if(searchVal!=''){
    this.searchList = this.searchList.filter(function (item) {
      return (item.title).toUpperCase().startsWith((searchVal).toUpperCase());
    })
  }
  else{
    this.searchList = this.searchBackUp;
  }
  }
}
