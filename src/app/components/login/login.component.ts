import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login({ email: this.email, senha: this.senha }).subscribe(
      (response) => {
        // Lógica de redirecionamento após login
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.errorMessage = error.error.message || 'Erro no login.';
      }
    );
  }
}
