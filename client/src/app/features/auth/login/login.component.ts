import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <h1 class="auth-title">Log in to MusicBook</h1>
        <p class="auth-subtitle">Welcome back! Log in to access your account.</p>
        
        <form class="auth-form" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              class="form-control" 
              [(ngModel)]="email"
              required
              placeholder="Your email address"
              autocomplete="email"
            >
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              class="form-control" 
              [(ngModel)]="password"
              required
              placeholder="Your password"
              autocomplete="current-password"
            >
          </div>
          
          <div class="form-options">
            <div class="remember-me">
              <input type="checkbox" id="remember" [(ngModel)]="rememberMe" name="remember">
              <label for="remember">Remember me</label>
            </div>
            <a href="#" class="forgot-password">Forgot password?</a>
          </div>
          
          <button type="submit" class="btn-primary auth-button">Log In</button>
          
          <div class="auth-divider">
            <span>OR</span>
          </div>
          
          <button type="button" class="btn-outline social-button">
            Continue with Google
          </button>
        </form>
        
        <div class="auth-footer">
          Don't have an account? <a routerLink="/auth/register">Sign up</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 80vh;
      padding: 24px;
    }
    
    .auth-card {
      background: white;
      border-radius: var(--border-radius-lg);
      box-shadow: var(--shadow-lg);
      padding: 32px;
      width: 100%;
      max-width: 480px;
      animation: fadeIn var(--transition-medium);
    }
    
    .auth-title {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--color-primary);
      text-align: center;
    }
    
    .auth-subtitle {
      color: var(--color-gray-600);
      margin-bottom: 32px;
      text-align: center;
    }
    
    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .form-group {
      margin-bottom: 8px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: var(--color-gray-800);
    }
    
    .form-control {
      width: 100%;
      padding: 12px;
      border: 1px solid var(--color-gray-300);
      border-radius: var(--border-radius-md);
      transition: border-color var(--transition-quick);
      font-family: inherit;
    }
    
    .form-control:focus {
      outline: none;
      border-color: var(--color-primary);
    }
    
    .form-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 8px 0;
    }
    
    .remember-me {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--color-gray-700);
      font-size: 0.875rem;
    }
    
    .forgot-password {
      font-size: 0.875rem;
      color: var(--color-primary);
    }
    
    .auth-button {
      width: 100%;
      padding: 12px;
      font-size: 1rem;
      font-weight: 600;
      margin: 16px 0;
    }
    
    .auth-divider {
      display: flex;
      align-items: center;
      margin: 16px 0;
      color: var(--color-gray-500);
      font-size: 0.875rem;
    }
    
    .auth-divider::before,
    .auth-divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background-color: var(--color-gray-300);
    }
    
    .auth-divider span {
      padding: 0 16px;
    }
    
    .social-button {
      width: 100%;
      padding: 12px;
      font-size: 1rem;
    }
    
    .auth-footer {
      margin-top: 32px;
      text-align: center;
      font-size: 0.875rem;
      color: var(--color-gray-700);
    }
    
    .auth-footer a {
      font-weight: 600;
      color: var(--color-primary);
    }
  `]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  
  onSubmit(): void {
    console.log('Login submitted:', { email: this.email, password: this.password, rememberMe: this.rememberMe });
    // In a real app, this would call an auth service to log in the user
  }
}