import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  fg = new FormGroup({
    amount: new FormControl(),
    pos: new FormControl(),
    label: new FormControl(),
    category: new FormControl(),
    date: new FormControl(),
  });

  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
