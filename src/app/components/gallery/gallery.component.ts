import { Component, OnInit } from '@angular/core';

import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit(): void {     

    this.galleryOptions = [
      {
        width: '700px',
        height: '500px',
        thumbnailsColumns: 4,
        lazyLoading :false,
        imageArrowsAutoHide:true,
        imageSwipe:true,
        imageAutoPlay:true,
        imageAutoPlayPauseOnHover:true,
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
        small: 'https://www.thepundits.co.za/wp-content/uploads/2015/03/SA-Cricket-Knockouts.jpg',
        medium: 'https://www.thepundits.co.za/wp-content/uploads/2015/03/SA-Cricket-Knockouts.jpg',
        big: 'https://www.thepundits.co.za/wp-content/uploads/2015/03/SA-Cricket-Knockouts.jpg'
      },
      {
        small: 'https://www.specsavers.co.za/img/cricketsa/home-banner.jpg',
        medium: 'https://www.specsavers.co.za/img/cricketsa/home-banner.jpg',
        big: 'https://www.specsavers.co.za/img/cricketsa/home-banner.jpg'
      },
      {
        small: 'http://ysn.co.za/sites/default/files/styles/main_feature/public/field/image/bfgghr.jpg?itok=dFRRPGbO',
        medium: 'http://ysn.co.za/sites/default/files/styles/main_feature/public/field/image/bfgghr.jpg?itok=dFRRPGbO',
        big: 'http://ysn.co.za/sites/default/files/styles/main_feature/public/field/image/bfgghr.jpg?itok=dFRRPGbO'
      }, 


      {
        small: 'https://www.aljazeera.com/mritems/Images/2014/2/24/2014224132848755580_20.jpg',
        medium: 'https://www.aljazeera.com/mritems/Images/2014/2/24/2014224132848755580_20.jpg',
        big: 'https://www.aljazeera.com/mritems/Images/2014/2/24/2014224132848755580_20.jpg'
      },
      {
        small: 'https://lh3.googleusercontent.com/jXeCeAOYkkeH84nSMxCoEFTFSf31ay0MBVsdup4mJIdr6LgjGjfptLgvc6ewesOTJWrFrwSvxuCBCXc6qkOuOA=s750',
        medium: 'https://lh3.googleusercontent.com/jXeCeAOYkkeH84nSMxCoEFTFSf31ay0MBVsdup4mJIdr6LgjGjfptLgvc6ewesOTJWrFrwSvxuCBCXc6qkOuOA=s750',
        big: 'https://lh3.googleusercontent.com/jXeCeAOYkkeH84nSMxCoEFTFSf31ay0MBVsdup4mJIdr6LgjGjfptLgvc6ewesOTJWrFrwSvxuCBCXc6qkOuOA=s750'
      },
      {
        small: 'https://www.thepundits.co.za/wp-content/uploads/2015/03/SA-Cricket-Knockouts.jpg',
        medium: 'https://www.thepundits.co.za/wp-content/uploads/2015/03/SA-Cricket-Knockouts.jpg',
        big: 'https://www.thepundits.co.za/wp-content/uploads/2015/03/SA-Cricket-Knockouts.jpg'
      },
      {
        small: 'http://sport.iafrica.com/apps/imageUtil/view/article/1057530/1/630x385/',
        medium: 'http://sport.iafrica.com/apps/imageUtil/view/article/1057530/1/630x385/',
        big: 'http://sport.iafrica.com/apps/imageUtil/view/article/1057530/1/630x385/'
      },
      {
        small: 'https://www.sapromo.com/wp-content/uploads/2016/07/south-african-team1.jpg',
        medium: 'https://www.sapromo.com/wp-content/uploads/2016/07/south-african-team1.jpg',
        big: 'https://www.sapromo.com/wp-content/uploads/2016/07/south-african-team1.jpg'
      }      
    ];
  }

}
