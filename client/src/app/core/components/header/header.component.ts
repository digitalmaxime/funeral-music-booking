import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container header-container">
        <div class="logo">
          <a routerLink="/" class="logo-link">
            <span class="logo-text">MusicBook</span>
          </a>
        </div>
        
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a routerLink="/artists" routerLinkActive="active" class="nav-link">Artists</a>
            </li>
            <li class="nav-item">
              <a routerLink="/bookings" routerLinkActive="active" class="nav-link">Bookings</a>
            </li>
          </ul>
        </nav>
        
        <div class="auth-buttons">
          <a routerLink="/auth/login" class="btn-outline">Log In</a>
          <a routerLink="/auth/register" class="btn-primary">Sign Up</a>
        </div>
        
        <button class="mobile-menu-btn" (click)="toggleMobileMenu()">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        
        <div class="mobile-menu" [class.open]="isMobileMenuOpen">
          <ul class="mobile-nav-list">
            <li class="mobile-nav-item">
              <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="mobile-nav-link" (click)="closeMobileMenu()">Home</a>
            </li>
            <li class="mobile-nav-item">
              <a routerLink="/artists" routerLinkActive="active" class="mobile-nav-link" (click)="closeMobileMenu()">Artists</a>
            </li>
            <li class="mobile-nav-item">
              <a routerLink="/bookings" routerLinkActive="active" class="mobile-nav-link" (click)="closeMobileMenu()">Bookings</a>
            </li>
            <li class="mobile-nav-item">
              <a routerLink="/auth/login" class="mobile-nav-link" (click)="closeMobileMenu()">Log In</a>
            </li>
            <li class="mobile-nav-item">
              <a routerLink="/auth/register" class="btn-primary mobile-signup" (click)="closeMobileMenu()">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: sticky;
      top: 0;
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      z-index: 100;
      padding: 16px 0;
    }
    
    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .logo-link {
      text-decoration: none;
    }
    
    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-primary);
      letter-spacing: -0.5px;
    }
    
    .main-nav {
      display: none;
    }
    
    .nav-list {
      display: flex;
      list-style: none;
    }
    
    .nav-item {
      margin-right: 24px;
    }
    
    .nav-link {
      color: var(--color-gray-800);
      text-decoration: none;
      font-weight: 500;
      padding: 8px 0;
      position: relative;
      transition: color var(--transition-quick);
    }
    
    .nav-link:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--color-primary);
      transition: width var(--transition-medium);
    }
    
    .nav-link:hover, .nav-link.active {
      color: var(--color-primary);
    }
    
    .nav-link:hover:after, .nav-link.active:after {
      width: 100%;
    }
    
    .auth-buttons {
      display: none;
    }
    
    .auth-buttons a {
      margin-left: 16px;
      padding: 8px 16px;
    }
    
    .btn-outline {
      background-color: transparent;
      border: 1px solid var(--color-primary);
      color: var(--color-primary);
      border-radius: var(--border-radius-md);
      transition: all var(--transition-quick);
      text-decoration: none;
      font-weight: 500;
    }
    
    .btn-outline:hover {
      background-color: var(--color-primary);
      color: white;
      text-decoration: none;
    }
    
    .mobile-menu-btn {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 24px;
      height: 20px;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    
    .bar {
      width: 100%;
      height: 2px;
      background-color: var(--color-gray-800);
      transition: transform var(--transition-medium), opacity var(--transition-medium);
    }
    
    .mobile-menu {
      position: fixed;
      top: 64px;
      left: 0;
      width: 100%;
      height: calc(100vh - 64px);
      background-color: white;
      padding: 24px;
      transform: translateX(100%);
      transition: transform var(--transition-medium);
      z-index: 99;
    }
    
    .mobile-menu.open {
      transform: translateX(0);
    }
    
    .mobile-nav-list {
      list-style: none;
    }
    
    .mobile-nav-item {
      margin-bottom: 16px;
    }
    
    .mobile-nav-link {
      color: var(--color-gray-800);
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 500;
      display: block;
      padding: 8px 0;
    }
    
    .mobile-nav-link.active {
      color: var(--color-primary);
    }
    
    .mobile-signup {
      display: inline-block;
      margin-top: 16px;
      text-decoration: none;
    }
    
    @media (min-width: 768px) {
      .mobile-menu-btn {
        display: none;
      }
      
      .main-nav, .auth-buttons {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}