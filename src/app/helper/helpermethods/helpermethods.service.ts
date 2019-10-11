import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { ObservableMedia, MediaChange } from '@angular/flex-layout'

@Injectable()
export class HelpermethodsService {

  BASE64_MARKER = ';base64,';

  constructor(
    private dialog: MatDialog,
    private cookieService: CookieService,
    public media: ObservableMedia
  ) { }

  convertDataURIToBinary(dataURI) {
    var base64Index = dataURI.indexOf(this.BASE64_MARKER) + this.BASE64_MARKER.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }
  convertDataURIToFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    };

    try {
      return new File([u8arr], filename || 'test', { type: mime });
    } catch (e) {
      //create a second blob that uses the first blob in its array
      return new Blob([new Blob([u8arr], { type: mime })]);
    };
  }
  openCommonDialog(component, dialogStyle, closeCallBack: Function) {

    let dialogRef = this.dialog.open(component, dialogStyle);
    dialogRef.afterClosed().subscribe(result => { closeCallBack(); });

  }
  focusItem(ev) {
    var selectedlist = document.getElementsByClassName('focusItem');
    if (selectedlist.length > 0) {
      (selectedlist[0]).classList.remove('focusItem')
    }
    ev.currentTarget && ev.currentTarget.classList.add("focusItem");
  }

  signInCheck(toOpen) {
    let isSignedIn = this.cookieService.check('airtmd');
    return isSignedIn;
  }

  windowState(callback: Function) {
    this.media.asObservable().subscribe((change: MediaChange) => {
      callback(change.mqAlias);
    });
  }
}
