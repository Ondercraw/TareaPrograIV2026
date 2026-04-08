import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';


@Component({
  selector: 'app-registro',
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  
  errorRegistro = false;
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private auth:AuthService) {

    this.form = this.fb.group({

      nombre: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(4)]]

    });

  }

  registrarse(){

  if(this.form.valid){

    const ok = this.auth.registro({

      nombre: this.form.value.nombre,

      email: this.form.value.email,

      password: this.form.value.password

    });

    if(ok){

      this.errorRegistro = false;

      this.router.navigate(['/login']);

    }else{

      this.errorRegistro = true;

    }

  }else{

    this.form.markAllAsTouched();

  }

}

}
