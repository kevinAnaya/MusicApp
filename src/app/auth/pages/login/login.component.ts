import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse } from '../../interfaces/auth-response';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email: ['kevin@david.com', [Validators.email, Validators.required]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  })

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService) { }

  login(){
    console.log(this.miFormulario.value);
    
    //extraemos el email y el password del value del formulario 
    const { email, password } = this.miFormulario.value;

    this.authService.login( email, password)
        .subscribe( ok => {
          if ( ok ) {
            this.router.navigateByUrl('/dashboard/home')
          }else{
            //mostrar mensaje de error
          }
        })
  }

}
