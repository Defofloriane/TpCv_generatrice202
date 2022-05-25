import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {
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
public name: string ="";
input(value:string){
  localStorage.setItem("nom",value);
}
  ngOnInit(): void {
    var noms = localStorage.getItem("nom");
    if(noms!= null){
      this.data.all.nomCompetence0 = noms;
    }
   
   let data1 = '' + localStorage.getItem('donnee');
    this.data = JSON.parse(JSON.parse(data1));
    console.log(this.data);
  
  }

 

}
