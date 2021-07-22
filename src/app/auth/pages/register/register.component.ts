import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService) { }

  registro(){
    const { name, email, password } = this.miFormulario.value

    this.authService.registro( name, email, password)
        .subscribe( ok => {
          console.log(ok)
          if ( ok === true ) {
            this.router.navigateByUrl('/dashboard/home')
          }else{
              Swal.fire('Error', ok, 'error')
          }
        })
  }

}
