import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FeaturedArtistsComponent } from './featured-artists/featured-artists.component';
import { GenreFilterComponent } from '../../shared/components/genre-filter/genre-filter.component';
import { TestimonialComponent } from '../../shared/components/testimonial/testimonial.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FeaturedArtistsComponent,
    GenreFilterComponent,
    TestimonialComponent
  ],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Find and Book the Perfect Music for Your Event</h1>
          <p class="hero-subtitle">
            Connect with talented musicians and bands to make your next event unforgettable
          </p>
          <div class="hero-cta">
            <a routerLink="/artists" class="btn-primary hero-btn">Browse Artists</a>
            <a routerLink="/auth/register" class="btn-outline hero-btn">List Your Band</a>
          </div>
        </div>
      </div>
    </section>
    
    <section class="search-section">
      <div class="container">
        <app-genre-filter (genreSelected)="onGenreSelected($event)"></app-genre-filter>
      </div>
    </section>
    
    <section class="featured-section">
      <div class="container">
        <h2 class="section-title">Featured Artists</h2>
        <app-featured-artists></app-featured-artists>
      </div>
    </section>
    
    <section class="how-it-works">
      <div class="container">
        <h2 class="section-title">How It Works</h2>
        <div class="steps-container">
          <div class="step">
            <div class="step-number">1</div>
            <h3 class="step-title">Browse Artists</h3>
            <p class="step-description">
              Explore our extensive catalog of talented musicians and bands
              filtered by genre, location, and availability.
            </p>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <h3 class="step-title">Request Booking</h3>
            <p class="step-description">
              Send booking requests to your favorite artists with your event details,
              venue information, and budget.
            </p>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <h3 class="step-title">Confirm and Enjoy</h3>
            <p class="step-description">
              Finalize details with your chosen artist, make secure payments,
              and enjoy amazing live music at your event.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="testimonials">
      <div class="container">
        <h2 class="section-title">What Our Customers Say</h2>
        <div class="testimonials-container">
          <app-testimonial
            name="Sarah Johnson"
            role="Event Planner"
            image="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300"
            quote="MusicBook made finding the perfect jazz band for our corporate event so easy. The booking process was seamless, and the band exceeded our expectations!"
          ></app-testimonial>
          
          <app-testimonial
            name="Michael Chen"
            role="Wedding Coordinator"
            image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
            quote="I've used MusicBook for multiple weddings, and they never disappoint. Great selection of artists and responsive customer service."
          ></app-testimonial>
          
          <app-testimonial
            name="Jamie Rivera"
            role="Festival Organizer"
            image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
            quote="As someone who books dozens of bands each year, MusicBook has become my go-to platform. It's revolutionized how I discover and book talent."
          ></app-testimonial>
        </div>
      </div>
    </section>
    
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Book Amazing Music?</h2>
          <p class="cta-description">
            Join thousands of satisfied customers who have found the perfect musical match for their events.
          </p>
          <div class="cta-buttons">
            <a routerLink="/auth/register" class="btn-primary">Sign Up Now</a>
            <a routerLink="/artists" class="btn-outline">Browse Artists</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
      color: white;
      padding: 80px 0;
      position: relative;
      overflow: hidden;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750');
      background-size: cover;
      background-position: center;
      opacity: 0.2;
      z-index: 0;
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      animation: fadeIn var(--transition-medium) ease-in;
    }
    
    .hero-title {
      font-size: 2.5rem;
      margin-bottom: 16px;
      color: white;
      font-weight: bold;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      margin-bottom: 32px;
      color: rgba(255, 255, 255, 0.9);
    }
    
    .hero-cta {
      display: flex;
      flex-direction: column;
      gap: 16px;
      justify-content: center;
      align-items: center;
    }
    
    .hero-btn {
      padding: 12px 24px;
      font-size: 1rem;
      min-width: 200px;
      border-radius: var(--border-radius-md);
      font-weight: 500;
      transition: all var(--transition-quick);
      text-align: center;
    }
    
    .hero-btn.btn-outline {
      border: 2px solid white;
      color: white;
    }
    
    .hero-btn.btn-outline:hover {
      background-color: white;
      color: var(--color-primary);
    }
    
    .hero-btn.btn-primary {
      background-color: var(--color-accent);
      color: var(--color-gray-900);
      font-weight: 600;
    }
    
    .hero-btn.btn-primary:hover {
      background-color: var(--color-accent-dark);
    }
    
    /* Search Section */
    .search-section {
      padding: 40px 0;
      background-color: white;
      box-shadow: var(--shadow-sm);
    }
    
    /* Featured Section */
    .featured-section {
      padding: 80px 0;
    }
    
    /* How It Works Section */
    .how-it-works {
      padding: 80px 0;
      background-color: var(--color-gray-100);
    }
    
    .section-title {
      text-align: center;
      margin-bottom: 48px;
      color: var(--color-primary);
      font-weight: bold;
      position: relative;
      padding-bottom: 16px;
    }
    
    .section-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background-color: var(--color-accent);
    }
    
    .steps-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 32px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .step {
      background-color: white;
      padding: 32px 24px;
      border-radius: var(--border-radius-lg);
      box-shadow: var(--shadow-md);
      text-align: center;
      transition: transform var(--transition-medium);
    }
    
    .step:hover {
      transform: translateY(-8px);
    }
    
    .step-number {
      background-color: var(--color-primary);
      color: white;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px;
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .step-title {
      margin-bottom: 12px;
      color: var(--color-primary);
    }
    
    /* Testimonials */
    .testimonials {
      padding: 80px 0;
    }
    
    .testimonials-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 32px;
      margin-top: 48px;
    }
    
    /* CTA Section */
    .cta-section {
      padding: 80px 0;
      background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%);
      color: white;
    }
    
    .cta-content {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }
    
    .cta-title {
      font-size: 2.2rem;
      margin-bottom: 16px;
      color: white;
    }
    
    .cta-description {
      font-size: 1.2rem;
      margin-bottom: 32px;
      color: rgba(255, 255, 255, 0.9);
    }
    
    .cta-buttons {
      display: flex;
      flex-direction: column;
      gap: 16px;
      justify-content: center;
    }
    
    .cta-buttons a {
      padding: 12px 24px;
      min-width: 200px;
    }
    
    .cta-buttons .btn-outline {
      border: 2px solid white;
      color: white;
    }
    
    .cta-buttons .btn-outline:hover {
      background-color: white;
      color: var(--color-primary);
      text-decoration: none;
    }
    
    /* Responsive Styles */
    @media (min-width: 768px) {
      .hero-title {
        font-size: 3.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.5rem;
      }
      
      .hero-cta {
        flex-direction: row;
      }
      
      .steps-container {
        grid-template-columns: repeat(3, 1fr);
      }
      
      .testimonials-container {
        grid-template-columns: repeat(3, 1fr);
      }
      
      .cta-buttons {
        flex-direction: row;
        justify-content: center;
      }
    }
  `]
})
export class HomeComponent {
  onGenreSelected(genre: string): void {
    console.log('Selected genre:', genre);
    // This would typically navigate to filtered artists
  }
}