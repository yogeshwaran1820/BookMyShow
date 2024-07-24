import { Component, EventEmitter, Output } from '@angular/core';
import { MyservService } from '../myserv.service';

@Component({
  selector: 'app-allcard',
  templateUrl: './allcard.component.html',
  styleUrl: './allcard.component.css'
})
export class AllcardComponent {

  constructor(private myse:MyservService) { }

  movieAllImage:any

  di:any
  myd:any

  ngOnInit(){
    this.getData()
  }



  getData(){
    this.movieAllImage = this.myse.getData()
  }

  imageDetails:any = []
  @Output() imageData:any = new EventEmitter()

  movieView(image:any){
    this.movieAllImage.forEach((i:any)=>{
      if(i.title === image){
        this.imageDetails = i
      }
    })

   this.imageData.emit(this.imageDetails)
    
  }


  buttons:any = [
    {btn:"Tamil"},{btn:"English"},{btn:"Hindi"},{btn:"Marathi"},{btn:"Telugu"},{btn:"Punjabi"},{btn:"Chattisgarthi"},{btn:"Bengali"}
  ]

  value:any = false
  isRotate:any = false

  hide(){
    this.isRotate =! this.isRotate  
    this.value =! this.value
  }

  filterMovies:any = []
  filterImage:any = true

  langButton(i:any){
    this.filterImage = false
    this.filterMovies = this.myse.movieAllImages.filter((ans:any)=> (ans.lang).includes(i.target.textContent))
    console.log(this.filterMovies)
  }

  clear(){
    this.filterImage = true
  }
    


}
