import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  opcioArticleList:boolean =true;
  opcioFormTemplate:boolean=false;
  opcioFormReactive:boolean=false;
  opcioLogin=false;

  
  mostraArticleList(){

    this.opcioArticleList=true;
    this.opcioFormReactive=false;
    this.opcioLogin=false;

  }

  mostraFormReactive(){
    this.opcioArticleList=false;
    this.opcioFormReactive=true; 
    this.opcioLogin=false; 

  }


  mostraLogin(){
    this.opcioArticleList=false;
    this.opcioFormReactive=false;
    this.opcioLogin=true;


}


}
