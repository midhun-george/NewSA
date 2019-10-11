import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Router, Route } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private player: PlayersService,
    private router:Router
  ) { }
 flag = true
  wishlisDefaultImage = 'assets/img/wishlistprofile.png';
  isCarouselLoading: boolean = true

  carousalData = [];
  endorsementData = [];
  topServicesData = [];
  wishlistData = [];
  mediaNewsData = [];
  testimonialData = [];

  slides = [
    {img: "../../assets/img/banner2.jpg"},
    {img: "../../assets/img/banner1.jpg"},
    {img: "../../assets/img/banner3.jpg"},
    {img: "../../assets/img/banner4.jpg"},
    {img: "../../assets/img/banner5.jpg"},
    {img: "../../assets/img/banner6.jpg"},
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};


  // Carousel and slick configuration
  topServicesConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    arrows: true
  };

  carouselConfig = {
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    fade: false,
    arrows: false,
    dots: true,
    cssEase: 'linear',
    mobileFirst: true
  }

  testmonialConfig = {
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    fade: true,
    arrows: false,
    dots: true,
    cssEase: 'linear',
    adaptiveHeight: true
  }
  ngOnInit() {
    this.getPlayersDetails();
  }
  getPlayersDetails() {
    // Carousel
    this.player.getSearch().subscribe(items => {
      this.topServicesData = items;
    })
  }

  search(val) {
    if (val)
      this.router.navigate(['/searchdetail'], { queryParams: { key: val } })
    else
      this.router.navigate(['/searchdetail']);
  }
  afterChange(test){
    
  }
}
