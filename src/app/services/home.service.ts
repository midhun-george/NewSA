import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpHelper } from '../helper/httphelper.service';
import { Globals } from '../globals.module';
import { MatDialog } from '@angular/material';

@Injectable()
export class HomeService {
  protected baseurl: string;

  constructor(private httphelper: HttpHelper,
    private globals: Globals,
    private dialog: MatDialog) {
    this.baseurl = this.globals.serviceUrl;
  }

  // getCarouselData() {
  //   return this.httphelper.get(this.baseurl + "/content/carousal-images").map(res => {
  //     return res.carousalImages;
  //   });
  // }
  getCarouselData() {
    return this.httphelper.get("../../assets/data/home/carousalImages.json").map(res => res.CarousalImages);
  }

  getEndorsementData() {
    return this.httphelper.get("./assets/data/home/endorsementServices.json").map(res => res.endorsementServices);
  }

  getWishlistData() {
    return this.httphelper.get(this.baseurl + "/wishlist?size=3").map(res => {
      return res.wishlistItems;
    });
  }

  // getTopServicesData() {
  //   return this.httphelper.get(this.baseurl + "/search/services/trending").map(res => res.items);
  // }
  getTopServicesData() {
    return this.httphelper.get("../../assets/data/home/topServices.json").map(res => res.topServices);
  }

  getMediaNewsData() {
    return this.httphelper.get(this.baseurl + "/content/media-articles").map(res => {
      return res.mediaArticles;
    });
  }

  getTestimonialsData() {
    return this.httphelper.get(this.baseurl + "/content/testimonials").map(res => {
      return res.testimonials;
    });
  }

  getAgreement(type) {
    return this.httphelper.get(this.baseurl + "/agreements/" + type + "/latest").map(res => res);
  }

  getNotificationData() {
    return this.httphelper.get("../../assets/data/home/notification.json").map(res => res.notifications);
  }

  getServicesData() {
    return this.httphelper.get("./assets/data/home/services.json").map(res => res.endorsementServices);
  }

  getConfiguration() {
    return this.httphelper.get("./assets/config/config.json").map(res => res);
  }

  contactUs(data) {
    let body = JSON.stringify(data)
    return this.httphelper.put(this.baseurl + '/utilities/web/contactus', body)
      .map((res) => res)
  }
}
