import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Existing illustration
  rentersIllustration = `
    <svg width="500" height="350" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Apartment building -->
      <rect x="150" y="100" width="200" height="200" stroke="#374151" stroke-width="3" fill="none"/>
      <!-- (rest of your SVG content omitted for brevity) -->
    </svg>
  `;

  // Contact form state
  sending = false;
  successMessage = '';
  errorMessage = '';

  // EmailJS credentials
  serviceID = 'service_f4pcvo4';
  templateID = 'template_4j8no8c';
  publicKey = 'Z3QwpciWi5zMMpRhy';

  // Send email via EmailJS
  sendEmail(form: NgForm) {
    if (!form.valid) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    this.sending = true;
    this.successMessage = '';
    this.errorMessage = '';

    emailjs.send(
      this.serviceID,
      this.templateID,
      form.value,
      this.publicKey
    ).then(
      (result: EmailJSResponseStatus) => {
        this.sending = false;
        this.successMessage = 'Message sent successfully!';
        form.resetForm();
      },
      (error) => {
        console.error('EmailJS error:', error);
        this.sending = false;
        this.errorMessage = 'Oops! Something went wrong.';
      }
    );
  }
}
