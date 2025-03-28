import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  private _selectedTab = new FormControl(0);
  public get selectedTab() {
    return this._selectedTab;
  }
  public set selectedTab(value) {
    this._selectedTab = value;
  }

  openWhatsApp(){
    window.open("https://wa.me/+917977283119?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.", 'blank')
  }


}
