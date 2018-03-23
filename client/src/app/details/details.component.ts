import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { PetsService } from '../pets.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService,
    public pets: PetsService
  ) {
    this.pets.clear();
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.getPet(params['id']);
    });
  }

  getPet(id){
    let getPetById = this._httpService.getPet(id);
    getPetById.subscribe(data => {
      this.pets = data['data'];
      this.pets.skills = data['data'].skills;
      console.log(this.pets);
    });
  }

  like(){
    this.pets.likes++;
    let updatePetById = this._httpService.updatePet(this.pets._id, { likes: this.pets.likes });
    updatePetById.subscribe(data => {
      this.pets = data['data'];
      this.pets.skills = data['data'].skills;
      this.pets.liked = true;
      console.log(this.pets);
    });
  }

  adopt(){
    let deletePetById = this._httpService.removePet(this.pets._id);
    deletePetById.subscribe(data => {
      console.log('Successfully adopted '+this.pets.name);
      this._router.navigate(['/']);
    });
  }

}
