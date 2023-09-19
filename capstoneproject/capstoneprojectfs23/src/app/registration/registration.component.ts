import { Component } from '@angular/core';
import { Registration } from './registration.model';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationData: Registration = { name: '', email: '', password: ''};
register: any;

}
