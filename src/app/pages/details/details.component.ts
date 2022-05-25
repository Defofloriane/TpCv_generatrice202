import { Component, OnInit } from '@angular/core';

// declare function changeImage():void;
@Component({
  selector: '.app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  myScriptElement : HTMLScriptElement;
  constructor() {
    // changeImage();
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "......";
    document.body.appendChild(this.myScriptElement);

  }

  titl = 'TpCvAngularge202';
  data: any;
  fileToText(file: any) {
    const reader = new FileReader();
    reader.readAsText(file.files[0]);
    reader.onload = () => {
      localStorage.setItem('donnee', JSON.stringify(reader.result));
      this.data = JSON.parse(JSON.parse('' + localStorage.getItem('donnee')));
      console.log(reader.result);
    };
    // console.log(file.files[0]);
    //  console.log(data);
    
  }
  

  ngOnInit(): void {
   let data1 = '' + localStorage.getItem('donnee');
    this.data = JSON.parse(JSON.parse(data1));
    console.log(this.data);
    
  }
  
}

 





