import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith, pipe } from 'rxjs';
import { MyservService } from '../myserv.service';

export interface Item {
  url: string;
  alt: string;
  title: string;
  title2: string;
  lang: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images = [
    { url: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg', alt: 'Image 1' },
    { url: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1719294100427_u1chennaiandcoimbatoreshowcasebannerswebshowcase1240x300.jpg', alt: 'Image 2' },
    { url: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1719988678089_furiosaamadmaxsagaweb.jpg', alt: 'Image 3' },
  ];
  
  currentSlideIndex = 0;
  slideInterval: any;

  myvar:any = []
  myInput:any
  condition = false

  // ngOnInit() {
  // }

  control:any

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  constructor(private myse:MyservService) {}

  data(){
    this.myvar = this.myse.getData()
    console.log("output",this.myvar)  
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Change slide every 3 seconds
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  }
  

  show:any = true 

  myCondition:any = false
  myCondition2:any = false
  movieViewDetails1:any = true
  movieViewDetails2:any = false
  movieViewDetails3:any = false
  // hide(){
  //   this.myCondition = false
  // }

  seeall(){
    this.myCondition = true
    this.myCondition2 = false
  }
  sports(){
    this.myCondition2 = true
    this.myCondition = false
    this.movieViewDetails1 = true
    this.movieViewDetails2 = false
    this.movieViewDetails3 = false
  }
  movies(){
    this.show = true
    this.myCondition = false
    this.myCondition2 = false
    this.movieViewDetails1 = true
    this.movieViewDetails2 = false
    this.movieViewDetails3 = false
  }

  movieImages = [
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA1MzBLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352941-qdafpgypxr-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Kalki 2898 AD",
      title2:"Action/Sci-Fi/Thriller"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA3LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374797-kqytbtqgwb-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Kill",
      title2:"Action/Thriller"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICBFYXJseSBSYXRpbmdz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386901-sgjlyfvnkl-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Despicable Me 4",
      title2:"Action/Adventure/Animation...."
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA4OS4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398936-rmwsksawqv-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Muniya",
      title2:"Comedy/Horror"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICA2MS45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00363650-tlyjxxawja-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Chandu Champion",
      title2:"Biography/Drama/Sports"
    }
  ]

  // movie(event:any){
  //   this.myvar = [...event]
  // }

  myControl = new FormControl();

  filteredOptions: Observable<Item[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value:any) => this._filter(value || ''))
    );
    this.startAutoSlide();
    this.data()
    console.log("this filter" ,this.filteredOptions)
  }

  private _filter(value: string): Item[] {
    const filterValue = value.toLowerCase();

    return this.myvar.filter((option:any) => option.title.toLowerCase().includes(filterValue));
  }

  onOptionSelected(event: any) {
    console.log(event.option.value); // This will log the selected value
  }

  selectedmovie2:any = []
suggestion(i:any){
  this.movieViewDetails2 = false
  this.movieViewDetails1 = false
  this.movieViewDetails3 = true
  this.selectedmovie2 = []
  this.selectedmovie2.push(i)
}

  selectedmovie:any = []

  movieView(image:any){ 
    this.movieViewDetails2 = true
    this.movieViewDetails1 = false
    this.movieViewDetails3 = false
    this.detailsArray.forEach((i:any)=>{
      if(i.movieName === image){
        this.selectedmovie.push(i)    
      }
    })
    // console.log(this.selectedmovie)
  }
  
  detailsArray = [
    {
      // bgImage:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg",
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg",
      movieName:"Kalki 2898 AD",
      rate:"8.7/10 (638.4K Votes) > ",
      rate2:"2D, IMAX 2D, 3D, IMAX 3D",
      lang:"Telugu, Malayalam ,Hindi, Tamil, Kannada",
      rate3:"3h 1m • Action, Sci-Fi, Thriller • UA • 27 Jun, 2024"
    },
    {
      // bgImage:"",
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kill-et00374797-1718179453.jpg",
      movieName:"Kill",
      rate:"9/10 26.9K Votes >",
      rate2:"2D",
      lang:"Hindi",
      rate3:"1h 46m • Action, Thriller • A • 5 Jul, 2024"
    },
    {
      // bgImage:"",
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/despicable-me-4-et00386901-1715335701.jpg",
      movieName:"Despicable Me 4",
      rate:"8.7/10 (638.4K Votes) > ",
      rate2:"2D, IMAX 2D, 3D, IMAX 3D",
      lang:"Telugu, Malayalam ,Hindi, Tamil, Kannada",
      rate3:"3h 1m • Action, Sci-Fi, Thriller • UA • 27 Jun, 2024"
    },
    {
      // bgImage:"",
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/munjya-et00398936-1716358299.jpg",
      movieName:"Muniya",
      rate:"8.7/10 (638.4K Votes) > ",
      rate2:"2D",
      lang:"Hindi",
      rate3:"3h 1m • Action, Sci-Fi, Thriller • UA • 27 Jun, 2024"
    },
    {
      // bgImage:"",
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chandu-champion-et00363650-1715754023.jpg",
      movieName:"Chandu Champion",
      rate:"8.7/10 (638.4K Votes) > ",
      rate2:"2D, IMAX 2D, 3D, IMAX 3D",
      lang:"Telugu, Malayalam ,Hindi, Tamil, Kannada",
      rate3:"3h 1m • Action, Sci-Fi, Thriller • UA • 27 Jun, 2024"
    },
  ]

  selectedImageData(event:any){
    this.movieViewDetails2 = false
    this.movieViewDetails1 = false
    this.movieViewDetails3 = true
    this.selectedmovie2 = []
    this.selectedmovie2.push(event)
    console.log("selectedmovie ",this.selectedmovie2);
    
  }

}
