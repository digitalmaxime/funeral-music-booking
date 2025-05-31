import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">MusicBook</h3>
            <p class="footer-description">
              Connect with top musicians and bands for your events. 
              Book with confidence and make your event extraordinary.
            </p>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-subtitle">Quick Links</h4>
            <ul class="footer-links">
              <li><a routerLink="/" class="footer-link">Home</a></li>
              <li><a routerLink="/artists" class="footer-link">Artists</a></li>
              <li><a routerLink="/bookings" class="footer-link">Bookings</a></li>
              <li><a routerLink="/auth/login" class="footer-link">Log In</a></li>
              <li><a routerLink="/auth/register" class="footer-link">Sign Up</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-subtitle">Support</h4>
            <ul class="footer-links">
              <li><a href="#" class="footer-link">Help Center</a></li>
              <li><a href="#" class="footer-link">Contact Us</a></li>
              <li><a href="#" class="footer-link">Terms of Service</a></li>
              <li><a href="#" class="footer-link">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-subtitle">Stay Connected</h4>
            <div class="social-links">
              <a href="#" class="social-link">Facebook</a>
              <a href="#" class="social-link">Twitter</a>
              <a href="#" class="social-link">Instagram</a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p class="copyright">
            © {{ currentYear }} MusicBook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--color-gray-900);
      color: white;
      padding: 48px 0 24px;
      margin-top: 48px;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 32px;
    }
    
    .footer-title {
      color: var(--color-primary-light);
      margin-bottom: 16px;
      font-size: 1.5rem;
    }
    
    .footer-description {
      color: var(--color-gray-400);
      max-width: 300px;
      line-height: 1.6;
    }
    
    .footer-subtitle {
      color: white;
      margin-bottom: 16px;
      font-size: 1.1rem;
    }
    
    .footer-links {
      list-style: none;
    }
    
    .footer-link {
      color: var(--color-gray-400);
      text-decoration: none;
      display: block;
      padding: 6px 0;
      transition: color var(--transition-quick);
    }
    
    .footer-link:hover {
      color: white;
      text-decoration: none;
    }
    
    .social-links {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    
    .social-link {
      color: var(--color-gray-400);
      text-decoration: none;
      transition: color var(--transition-quick);
    }
    
    .social-link:hover {
      color: white;
    }
    
    .footer-bottom {
      margin-top: 48px;
      padding-top: 24px;
      border-top: 1px solid var(--color-gray-800);
    }
    
    .copyright {
      color: var(--color-gray-500);
      font-size: 0.875rem;
      text-align: center;
    }
    
    @media (min-width: 768px) {
      .footer-content {
        grid-template-columns: 2fr 1fr 1fr 1fr;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}