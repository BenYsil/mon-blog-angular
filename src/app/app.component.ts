import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  lastUpdate = new Date();
  posts =  [
    {
      name: 'Mon Premier post',
      date : this.lastUpdate,
      contenu : 'Tafgdgta titi toto',
      lovelevel : 0,
    },
    {
      name: 'Mon Premier post',
      date : this.lastUpdate,
      contenu : 'Tafgdgta titi toto',
      lovelevel : 0,
    },
    {
      name: 'Mon Premier post',
      date: new Date() ,
      contenu : 'Comme vous le constaterez, le CLI a créé un nouveau sous-dossier',
      lovelevel : 0,
    },
    {
      name: 'Mon Deuxième post',
      date: new Date() ,
      contenu : 'Tata titi toto',
      lovelevel : 0,
   },
   {
    name: 'Mon Post N°3',
      date: new Date() ,
      contenu : 'Tata titi toto',
      lovelevel : 0,
   },
   {
     name: 'Mon dernier post',
     date : new Date(),
     contenu : 'Tata titi toto',
     lovelevel : 0,
   }
  ];
}
