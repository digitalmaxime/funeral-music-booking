import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <h1 class="auth-title">Create Your MusicBook Account</h1>
        <p class="auth-subtitle">Join our community to book or list musical talent.</p>
        
        <form class="auth-form" (ngSubmit)="onSubmit()">
          <div class="account-type-selector">
            <p class="selector-label">I want to:</p>
            <div class="type-buttons">
              <button 
                type="button" 
                class="type-button" 
                [class.active]="accountType === 'organizer'"
                (click)="selectAccountType('organizer')"
              >
                Book Artists
              </button>
              <button 
                type="button" 
                class="type-button" 
                [class.active]="accountType === 'artist'"
                (click)="selectAccountType('artist')"
              >
                List My Services
              </button>
            </div>
          </div>
          
          <div class="form-group">
            <label for="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              class="form-control" 
              [(ngModel)]="userData.name"
              required
              placeholder="Your full name"
            >
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              class="form-control" 
              [(ngModel)]="userData.email"
              required
              placeholder="Your email address"
              autocomplete="email"
            >
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                class="form-control" 
                [(ngModel)]="userData.password"
                required
                placeholder="Create a password"
                autocomplete="new-password"
              >
            </div>
            
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                class="form-control" 
                [(ngModel)]="userData.confirmPassword"
                required
                placeholder="Confirm your password"
                autocomplete="new-password"
              >
            </div>
          </div>
          
          <div *ngIf="accountType === 'artist'" class="artist-fields">
            <div class="form-group">
              <label for="genre">Primary Genre</label>
              <select 
                id="genre" 
                name="genre" 
                class="form-control" 
                [(ngModel)]="artistData.genre"
              >
                <option value="">Select a genre</option>
                <option value="Rock">Rock</option>
                <option value="Jazz">Jazz</option>
                <option value="Classical">Classical</option>
                <option value="Pop">Pop</option>
                <option value="Electronic">Electronic</option>
                <option value="Hip Hop">Hip Hop</option>
                <option value="R&B">R&B</option>
                <option value="Country">Country</option>
                <option value="Folk">Folk</option>
                <option value="World">World</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="location">Location</label>
              <input 
                type="text" 
                id="location" 
                name="location" 
                class="form-control" 
                [(ngModel)]="artistData.location"
                placeholder="City, State"
              >
            </div>
          </div>
          
          <div class="terms-privacy">
            <input type="checkbox" id="terms" name="terms" [(ngModel)]="termsAccepted">
            <label for="terms">
              I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>
          
          <button 
            type="submit" 
            class="btn-primary auth-button" 
            [disabled]="!termsAccepted"
          >
            Create Account
          </button>
          
          <div class="auth-divider">
            <span>OR</span>
          </div>
          
          <button type="button" class="btn-outline social-button">
            Sign up with Google
          </button>
        </form>
        
        <div class="auth-footer">
          Already have an account? <a routerLink="/auth/login">Log in</a>
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
      animation: fadeIn var(--transition-medium);
    }
    
    .auth-card {
      background: white;
      border-radius: var(--border-radius-lg);
      box-shadow: var(--shadow-lg);
      padding: 32px;
      width: 100%;
      max-width: 580px;
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
    
    .account-type-selector {
      margin-bottom: 24px;
    }
    
    .selector-label {
      margin-bottom: 8px;
      font-weight: 500;
      color: var(--color-gray-800);
    }
    
    .type-buttons {
      display: flex;
      gap: 12px;
    }
    
    .type-button {
      flex: 1;
      padding: 12px;
      border: 2px solid var(--color-gray-300);
      background-color: white;
      border-radius: var(--border-radius-md);
      font-weight: 500;
      color: var(--color-gray-700);
      transition: all var(--transition-quick);
    }
    
    .type-button.active {
      border-color: var(--color-primary);
      background-color: var(--color-primary-light);
      color: white;
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
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
    }
    
    .artist-fields {
      padding: 16px;
      background-color: var(--color-gray-50);
      border-radius: var(--border-radius-md);
      border-left: 3px solid var(--color-primary);
      margin: 8px 0;
    }
    
    .terms-privacy {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin: 16px 0;
      font-size: 0.875rem;
    }
    
    .terms-privacy input {
      margin-top: 3px;
    }
    
    .terms-privacy a {
      color: var(--color-primary);
      font-weight: 500;
    }
    
    .auth-button {
      width: 100%;
      padding: 12px;
      font-size: 1rem;
      font-weight: 600;
      margin: 8px 0;
    }
    
    .auth-button:disabled {
      background-color: var(--color-gray-400);
      cursor: not-allowed;
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
    
    /* Responsive */
    @media (min-width: 640px) {
      .form-row {
        grid-template-columns: 1fr 1fr;
      }
    }
  `]
})
export class RegisterComponent {
  accountType: 'organizer' | 'artist' = 'organizer';
  termsAccepted: boolean = false;
  
  userData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  
  artistData = {
    genre: '',
    location: ''
  };
  
  selectAccountType(type: 'organizer' | 'artist'): void {
    this.accountType = type;
  }
  
  onSubmit(): void {
    // In a real app, this would validate and call a service
    if (this.userData.password !== this.userData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    console.log('Registration submitted:', { 
      ...this.userData, 
      accountType: this.accountType,
      ...(this.accountType === 'artist' && { artistData: this.artistData })
    });
    
    // In a real app, this would call an auth service to register the user
    alert('Account created successfully! You can now log in.');
  }
}