import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // tslint:disable-next-line: comment-format
  //Creamos el objeto de tipo Article, para verlo presionamos CTRL y damos clic sobre este
  noticias: Article[] = [];

  constructor( private noticiasservice: NoticiasService) {}

  ngOnInit(){
    this.cargarNoticias();
  }

  loadData(event){
    // console.log(event);
    this.cargarNoticias( event );
  }

  cargarNoticias( event? ){
    this.noticiasservice.getTopHeadslines().
        subscribe( resp => {
          // console.log('noticias', resp );
          // this.noticias = resp.articles;
          // De esta manera insertamos de manera independeinte cada elemento en el arreglo nocias

          if( resp.articles.length === 0 ){
            event.target.disabled = true;
            event.target.complete();
            return;
          }

          this.noticias.push( ...resp.articles );

          if( event ){
            event.target.complete();
          }
        });
  }

}
