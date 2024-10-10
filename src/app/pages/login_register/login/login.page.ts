import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { validatePassword } from 'firebase/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 formulario_login: FormGroup;

  constructor(private FormBuilder: FormBuilder) {

    this.formulario_login = this.FormBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    })

   }

  ngOnInit() {
  }

}
