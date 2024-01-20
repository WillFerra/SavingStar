import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{

  constructor(private router: Router) { }

  @ViewChild(IonModal) modal!: IonModal;

  profilePic: string = 'assets/Profilepic.png'
  name:string = 'Naomi Vella';
  dateOfBirth: string = '23 . 10. 1995';
  email: string = 'naomivella@gmail.com';

  alertButtons = ['Close'];

  deleteAccount() {
    this.router.navigate(['/signup']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  updateProfilePic(imageUrl: string) {
    this.profilePic = imageUrl;
  }
}
