import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { PetsService } from '../pets.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  errors: any;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService,
    public pets: PetsService
  ) {
    this.pets.clear();
  }

  ngOnInit() {
  	this.errors = {name: '', type: '', description: ''}
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

  edit(){
    delete this.pets['__v'];
    console.log(this.pets)
    let updatePetById = this._httpService.updatePet(this.pets._id, this.pets);
    updatePetById.subscribe(data => {
	if(data['message']=="Error"){
        this.errors = {name: '', type: '', description: ''}
        if(data['error'].errors['name'])
          this.errors.name=data['error'].errors['name'];
        if(data['error'].errors['type'])
          this.errors.type=data['error'].errors['type'];
        if(data['error'].errors['description'])
          this.errors.description=data['error'].errors['description'];
      }else{
      this.pets = data['data'];
      this.pets.skills = data['data'].skills;
      console.log(this.pets);
      this._router.navigate(['/']);
	}
    });
  }

  cancel(){
    this._router.navigate(['/']);
  }

}
