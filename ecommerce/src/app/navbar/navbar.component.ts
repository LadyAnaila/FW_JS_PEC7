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
  opcioLogin:boolean=false;
  opcioRegister:boolean=false;


  
  mostraArticleList(){
    this.opcioArticleList=true;
    this.opcioFormReactive=false;
    this.opcioLogin=false;
    this.opcioRegister=false; 
  }

  mostraFormReactive(){
    this.opcioArticleList=false;
    this.opcioFormReactive=true; 
    this.opcioLogin=false; 
    this.opcioRegister=false; 
  }


  mostraLogin(){
    this.opcioArticleList=false;
    this.opcioFormReactive=false;
    this.opcioLogin=true;
    this.opcioRegister=false;
}


mostraRegister(){
  this.opcioArticleList=false;
  this.opcioFormReactive=false;
  this.opcioLogin=false;
  this.opcioRegister=true; 
}

}
