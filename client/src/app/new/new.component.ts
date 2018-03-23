import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { PetsService } from '../pets.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {

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
  }

  add(){
    console.log(this.pets)
    let createPet = this._httpService.createPet({name:this.pets.name, type:this.pets.type, description:this.pets.description, skills:this.pets.skills});
    createPet.subscribe(data => {
      if(data['message']=="Error"){
        this.errors = {name: '', type: '', description: ''}
        if(data['error'].errors['name'])
          this.errors.name=data['error'].errors['name'];
        if(data['error'].errors['type'])
          this.errors.type=data['error'].errors['type'];
        if(data['error'].errors['description'])
          this.errors.description=data['error'].errors['description'];
      }else{
        console.log('here')
        // this.pets = data['data'];
        // this.pets.skills = data['data'].skills;
        // console.log(this.pets);
        this._router.navigate(['/']);
      }
    });
  }

  cancel(){
    this._router.navigate(['/']);
  }

}
