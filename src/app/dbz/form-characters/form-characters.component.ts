import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-form-characters',
  templateUrl: './form-characters.component.html',

})
export class FormCharactersComponent {
  @Input() characters: Character[] = [];

  @Input() newCharacter: Character = {
    name: '', 
    power: 0 ,
  }

  constructor( private dbzService : DbzService) {}
  // with ngSubmit, prevnt refresh, controlling eventDefault
  add(){
    if(this.newCharacter.name.trim().length === 0){
      return;
    }

      // this.characters.push( this.newCharacter);
      this.dbzService.addCharacterOne(this.newCharacter)
      this.newCharacter ={
        name: '',
        power: 0
      }
  }
  
}
