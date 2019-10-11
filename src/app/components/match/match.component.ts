import { Component, OnInit,Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage,NgxGalleryAnimation  } from 'ngx-gallery';
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }
  UpcomingArr = [{ name: "Two-day practice match, Colombo", date: "Sat, 07 Jul 04:30 GMT", opponent: "TBC" },
  { name: "1st Test, Galle", date: "Thu, 12 Jul 04:30 GMT", opponent: "SL" },
  { name: "2nd Test, Colombo", date: "Fri, 20 Jul 04:30 GMT", opponent: "SL" }]

  recentArray = [{ name: "Australia tour of South Africa, 2018", date: "Mar 30, Fri", opponent: "Australia", place: "New Wanderers Stadium, Johannesburg", result: "South Africa won by 492 runs" },
  { name: "Australia tour of South Africa, 2018", date: "Mar 22, Thu", opponent: "Australia", place: "Newlands, Cape Town", result: "South Africa won by 322 runs" },
  { name: "Australia tour of South Africa, 2018", date: "Mar 09, Fri", opponent: "Australia", place: "St George's Park, Port Elizabeth", result: "South Africa won by 322 runs" }]

  @Input()
  Status: number = 0;
  ngOnInit() {
    this.galleryOptions = [
      {
        width: '500px',
        height: '300px',
        thumbnails:false,
        lazyLoading: false,
        imageArrowsAutoHide: true,
        imageSwipe: true,
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true,
        preview :false,
        imageAnimation: NgxGalleryAnimation.Rotate
      }
    ];

    this.galleryImages = [
      {
        small: 'https://www.capetownmagazine.com//media_lib/r2/9bf60cf26dd089aafd73b00ee9771e75.img.jpg',
        medium: 'https://www.capetownmagazine.com//media_lib/r2/9bf60cf26dd089aafd73b00ee9771e75.img.jpg',
        big: 'https://www.capetownmagazine.com//media_lib/r2/9bf60cf26dd089aafd73b00ee9771e75.img.jpg'
      },
      {
        small: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/10/15/Pictures/cricket-odi-rsa-ban_df9cf4bc-b1b4-11e7-839f-5e4b0d653fbd.jpg',
        medium: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/10/15/Pictures/cricket-odi-rsa-ban_df9cf4bc-b1b4-11e7-839f-5e4b0d653fbd.jpg',
        big: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/10/15/Pictures/cricket-odi-rsa-ban_df9cf4bc-b1b4-11e7-839f-5e4b0d653fbd.jpg'
      },
      {
        small: 'http://st3.cricketcountry.com/wp-content/uploads/2015/06/cl_SA.jpg',
        medium: 'http://st3.cricketcountry.com/wp-content/uploads/2015/06/cl_SA.jpg',
        big: 'http://st3.cricketcountry.com/wp-content/uploads/2015/06/cl_SA.jpg'
      }
    ]
    
  }
}