import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowForwardOutline, beerOutline, logoApple, logoGooglePlaystore, trophyOutline, cameraOutline, lockOpenOutline, imagesOutline, ribbonOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class HomePage {
  notifyForm: FormGroup;
  successMessage: string | null = null;
  
  constructor(private fb: FormBuilder) {
    this.notifyForm = this.fb.group({ email: ['', [Validators.required, Validators.email]] });
    addIcons({ arrowForwardOutline, beerOutline, logoApple, logoGooglePlaystore, trophyOutline, cameraOutline, lockOpenOutline, imagesOutline, ribbonOutline });
  }

  subscribe() {
    if (this.notifyForm.valid) {
      const email = this.notifyForm.value.email;
      this.successMessage = `Thanks, ${email}! You'll be notified when Sociolee launches 🎉`;
      this.notifyForm.reset();
    }
  }
}
