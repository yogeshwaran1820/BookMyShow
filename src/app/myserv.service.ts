import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyservService {

  constructor() { }

  datas:any

  getData(){
    return this.movieAllImages
  }

  userData:any
  myData(){
    return this.userData
  }

  movieAllImages = [
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA1MzBLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352941-qdafpgypxr-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Kalki 2898 AD",
      title2:"UA",
      lang:"Tamil/Telugu/Hindi/Punjabi"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA3LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374797-kqytbtqgwb-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Kill",
      title2:"A",
      lang:"tamil/Punjabi"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICBFYXJseSBSYXRpbmdz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386901-sgjlyfvnkl-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Despicable Me 4",
      title2:"U",
      lang:"Tamil/Telugu/Hindi/Mala...."
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA4OS4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398936-rmwsksawqv-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Muniya",
      title2:"UA",
      lang:"Hindi/Punjabi/Chattisgarthi/Punjabi"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICA2MS45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00363650-tlyjxxawja-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Chandu Champion",
      title2:"UA",
      lang:"Hindi, Punjabi, Marathi, Chattisgarthi"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjI2LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00064311-ezaumvmxfn-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Indian 2",
      title2:"UA",
      lang:"Tamil, Chattisgarthi, Marathi"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS41LzEwICAyLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00402946-xqumtsgrmu-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Maharaja",
      title2:"UA",
      lang:"Tamil/Punjabi/Chattisgarthi"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICAxMi41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00387250-hjchcztghv-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Sarfira",
      title2:"U",
      lang:"Tamil, Chattisgarthi, Marathi"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjgwLjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00341295-ayyygulgvn-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Deadpool & Wolverine",
      title2:"A",
      lang:"Tamil, English, Hindi, Telugu"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAyOS41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384010-ztzeumakky-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Inside Out 2",
      title2:"U",
      lang:"Tamil, English, Hindi, Bengali"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICAxLjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00397621-cjwdjjzams-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Longlegs",
      title2:"U",
      lang:"English,Chattisgarthi, Marathi"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA1LjRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00395059-pshvkzmcaq-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Fly me to the Moon",
      title2:"UA",
      lang:"English,Telugu, Marathi, Chattisgarthi"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICAySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00399544-eckkfpnsft-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Builder Boys",
      title2:"UA",
      lang:"Tamil, English, Hindi,Telugu"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni42LzEwICAyLjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00403757-cvayxdqybx-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Rangada",
      title2:"UA",
      lang:"Marathi/Bengali/Telugu/Marathi"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni40LzEwICA1LjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00390813-gexewexzur-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"A Quiet Place - Day One",
      title2:"UA",
      lang:"English/Bengali/Chattisgarthi"
    },
    {
      url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTcuOUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00387070-qkbcnzlegv-portrait.jpg",
      alt:"Please Connect to Internet!!!!",
      title:"Twisters",
      title2:"UA",
      lang:"English, Hindi, Bengali, Marathi"
    },
  ] 

}
