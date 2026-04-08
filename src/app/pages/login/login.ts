import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  errorLogin=false;

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth:AuthService) {
    
    

    this.form = this.fb.group({
      

      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(4)]]

      
    });

  }

  ingresar(){

    if(this.form.valid){

      const user = this.auth.login(

        this.form.value.email!,

        this.form.value.password!

      );

      if(user){

        this.router.navigate(['/bienvenida']);

      }else{

        this.errorLogin=true;

      }

    }


}
}