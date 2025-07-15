import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  //[tarea]: Crear un nuevo guard para cuando intente entrar al home validar si estoy logeada si no redireccionar a login
  loginForm: FormGroup;

  errorMessage: string = "";

  // Añadir los validation_message para password
  validation_messages = {
    email: [
      {
        type: "required", message: "El email es obligatorio."
      },
      {
        type: "email", message: "Email invalido."
      }
    ]
  }

  constructor( private formBuilder: FormBuilder, private authService: AuthService, private navCtrl: NavController) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required, //Campo obligatorio
          Validators.email //Valida el correo electrinico
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required, //Campo obligatorio
          Validators.minLength(6)
        ])
    )
    })
   }

  ngOnInit() {
  }

  loginUser(credentials: any){
    console.log(credentials)
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = "";
      this.navCtrl.navigateForward("/home")
    }).catch(error =>{
      this.errorMessage = error;
    })
  }

}
