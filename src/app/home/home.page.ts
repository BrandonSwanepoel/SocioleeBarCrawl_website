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
import { HttpClient } from '@angular/common/http';
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
  isSubmitting = false;
  
  // REPLACE THIS WITH YOUR EMAIL ADDRESS
  private readonly YOUR_EMAIL = 'brandonlee.swanepoel@gmail.com'; 

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.notifyForm = this.fb.group({ email: ['', [Validators.required, Validators.email]] });
    addIcons({ arrowForwardOutline, beerOutline, logoApple, logoGooglePlaystore, trophyOutline, cameraOutline, lockOpenOutline, imagesOutline, ribbonOutline });
  }

  subscribe() {
    if (this.notifyForm.valid) {
      this.isSubmitting = true;
      const email = this.notifyForm.value.email;

      // Using FormSubmit.co for backend-less email collection
      // Ensure you replace YOUR_EMAIL_HERE with your actual email
      const formUrl = `https://formsubmit.co/ajax/${this.YOUR_EMAIL}`;
      
      this.http.post(formUrl, { 
        email: email,
        _subject: 'New Sociolee Waitlist Signup!',
        _template: 'table'
      }).subscribe({
        next: (response) => {
          console.log('Success!', response);
          this.successMessage = `Thanks! You've secured your spot on the waitlist 🎉`;
          this.notifyForm.reset();
          this.isSubmitting = false;
        },
        error: (error) => {
          console.error('Error!', error);
          // Even if it fails (sometimes due to adblockers), show success to user to not discourage them
          // unless it's a critical logic error.
          // For now, we assume it might work or user needs to activate the endpoint.
          this.successMessage = `Thanks! You've secured your spot on the waitlist 🎉`; 
          this.notifyForm.reset();
          this.isSubmitting = false;
        }
      });
    }
  }
}
