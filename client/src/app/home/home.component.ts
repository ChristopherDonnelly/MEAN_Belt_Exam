import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { PetsService } from '../pets.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService,
    public pets: PetsService
  ) {
    this.pets.clear();
  }

  ngOnInit() {
    this.getPets();
  }

	getPets(){
    let getAllPets = this._httpService.getAllPets();
    getAllPets.subscribe(data => {
      this.pets.all = data['data'];
    });
  }

  routeTo(route, id){
    this._router.navigate([route, id]);
  }
}
