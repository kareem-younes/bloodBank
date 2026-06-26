import { Component, EventEmitter, Output } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-search-box',
  imports: [NgClass],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css'
})
export class SearchBox {
  listMapChecked: boolean = true;
  @Output() listViewOut = new EventEmitter<boolean>;
  @Output() searchInput = new EventEmitter<string>;
  constructor() {}
  emitOut() {
    this.listViewOut.emit(this.listMapChecked)
  }
  sendSearchInput(value:string) {
    this.searchInput.emit(value);
  }
}
