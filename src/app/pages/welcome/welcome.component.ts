import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})


export class WelcomeComponent implements OnInit {
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
    
  }

  ngOnInit(): void {
   let data1 = '' + localStorage.getItem('donnee');
    this.data = JSON.parse(JSON.parse(data1));
    console.log(this.data);
    
  }
  
}





