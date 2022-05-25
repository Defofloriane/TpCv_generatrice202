import { Component } from '@angular/core';
import { ThemeService } from './theme.service';




 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  isCollapsed = false;

  constructor(private themeService: ThemeService) {
  
 
  }

  toggleTheme(): void {
    this.themeService.toggleTheme().then();
  }
  title = 'TpCvAngularge202';
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
 
  
    // console.log(file.files[0]);
}





