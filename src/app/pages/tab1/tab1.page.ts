import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  //Creamos el objeto de tipo Article, para verlo presionamos CTRL y damos clic sobre este
  noticias: Article[] = [];

  constructor( private noticiasservice: NoticiasService) {}

  ngOnInit(){
    this.noticiasservice.getTopHeadslines().
        subscribe( resp => {
          console.log('noticias', resp );
          // this.noticias = resp.articles;
          // De esta manera insertamos de manera independeinte cada elemento en el arreglo nocias
          this.noticias.push( ...resp.articles );
        });
  }

}
