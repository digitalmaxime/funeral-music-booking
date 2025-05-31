import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Artist } from '../../../core/models/artist.model';

@Component({
  selector: 'app-artist-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './artist-detail.component.html',
  styles: [`
    .artist-detail-container {
      margin-top: -24px;
    }
    
    .artist-header {
      height: 50vh;
      min-height: 300px;
      max-height: 500px;
      background-size: cover;
      background-position: center;
      position: relative;
      color: white;
      display: flex;
      align-items: flex-end;
    }
    
    .artist-header-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
      z-index: 1;
    }
    
    .artist-header-content {
      position: relative;
      z-index: 2;
      padding-bottom: 48px;
    }
    
    .back-link {
      margin-bottom: 24px;
    }
    
    .back-link a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      opacity: 0.9;
      transition: opacity var(--transition-quick);
    }
    
    .back-link a:hover {
      opacity: 1;
      text-decoration: none;
    }
    
    .artist-name {
      font-size: 3rem;
      margin-bottom: 8px;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .artist-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      align-items: center;
    }
    
    .artist-genre, .artist-location {
      font-size: 1.1rem;
      opacity: 0.9;
    }
    
    .artist-rating {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .rating-stars {
      display: flex;
    }
    
    .star {
      color: var(--color-accent);
    }
    
    .rating-value {
      font-weight: 600;
    }
    
    .artist-content {
      margin-top: -48px;
      position: relative;
      z-index: 3;
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding-top: 24px;
    }
    
    .artist-main {
      background: white;
      border-radius: var(--border-radius-lg);
      box-shadow: var(--shadow-md);
      overflow: hidden;
      padding: 24px;
    }
    
    .artist-gallery {
      margin-bottom: 32px;
    }
    
    .artist-main-image {
      width: 100%;
      border-radius: var(--border-radius-md);
      margin-bottom: 16px;
    }
    
    .image-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 16px;
    }
    
    .gallery-image {
      width: 100%;
      height: 100px;
      object-fit: cover;
      border-radius: var(--border-radius-sm);
      cursor: pointer;
      transition: transform var(--transition-quick);
    }
    
    .gallery-image:hover {
      transform: scale(1.05);
    }
    
    .artist-section {
      margin-bottom: 40px;
    }
    
    .section-title {
      font-size: 1.5rem;
      margin-bottom: 16px;
      color: var(--color-primary);
      position: relative;
      padding-bottom: 8px;
    }
    
    .section-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 64px;
      height: 3px;
      background-color: var(--color-primary);
    }
    
    .artist-description {
      line-height: 1.6;
      color: var(--color-gray-800);
    }
    
    .services-list {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
    }
    
    .service-item {
      background-color: var(--color-gray-50);
      border-radius: var(--border-radius-md);
      padding: 16px;
      position: relative;
    }
    
    .service-title {
      font-size: 1.2rem;
      margin-bottom: 8px;
      color: var(--color-gray-900);
    }
    
    .service-description {
      margin-bottom: 16px;
      color: var(--color-gray-700);
    }
    
    .service-price {
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--color-primary);
    }
    
    .reviews-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
    }
    
    .review-card {
      background-color: var(--color-gray-50);
      border-radius: var(--border-radius-md);
      padding: 16px;
    }
    
    .review-header {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }
    
    .reviewer-image {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 12px;
    }
    
    .reviewer-info {
      flex: 1;
    }
    
    .reviewer-name {
      font-weight: 600;
      color: var(--color-gray-900);
    }
    
    .review-date {
      font-size: 0.875rem;
      color: var(--color-gray-600);
    }
    
    .review-rating {
      font-size: 0.875rem;
    }
    
    .review-text {
      color: var(--color-gray-800);
      font-size: 0.95rem;
      line-height: 1.6;
    }
    
    .booking-sidebar {
      z-index: 3;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    
    .booking-card, .contact-card {
      background: white;
      border-radius: var(--border-radius-lg);
      padding: 24px;
      box-shadow: var(--shadow-md);
    }
    
    .booking-title {
      margin-bottom: 16px;
      font-size: 1.5rem;
      color: var(--color-primary);
    }
    
    .booking-price {
      margin-bottom: 24px;
      display: flex;
      align-items: baseline;
    }
    
    .price-value {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--color-primary);
    }
    
    .price-unit {
      margin-left: 4px;
      color: var(--color-gray-600);
      font-size: 0.875rem;
    }
    
    .form-group {
      margin-bottom: 16px;
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
    
    .booking-btn {
      width: 100%;
      padding: 12px;
      font-size: 1rem;
      font-weight: 600;
      margin-top: 16px;
    }
    
    .booking-info {
      margin-top: 16px;
      font-size: 0.875rem;
      color: var(--color-gray-600);
    }
    
    .booking-info p {
      margin-bottom: 8px;
    }
    
    .contact-title {
      margin-bottom: 16px;
      color: var(--color-gray-800);
    }
    
    .contact-btn {
      width: 100%;
    }
    
    /* Responsive */
    @media (min-width: 992px) {
      .artist-content {
        flex-direction: row;
      }
      
      .artist-main {
        flex: 3;
      }
      
      .booking-sidebar {
        flex: 1;
      }
      
      .services-list {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .reviews-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class ArtistDetailComponent implements OnInit {
  artist: Artist | undefined;
  artistId: string = '';
  
  additionalImages: string[] = [
    'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];
  
  artistLongDescription: string = `
    We are a versatile and dynamic musical group with over 10 years of professional experience performing at a wide range of events including weddings, corporate functions, festivals, and private parties.
    
    Our repertoire spans multiple genres and decades, ensuring we can adapt our performance to suit your event's atmosphere and audience preferences. We pride ourselves on delivering high-energy, engaging performances that create unforgettable experiences for our clients and their guests.
    
    With professional-grade equipment, reliable transportation, and a commitment to punctuality and professionalism, we take the stress out of live entertainment planning. Our flexible setup options allow us to perform in venues of any size, from intimate gatherings to large outdoor events.
    
    We offer customizable packages to meet your specific requirements and budget, including options for ceremony music, cocktail hour performances, and full reception entertainment.
  `;
  
  services = [
    {
      title: 'Full Band Performance',
      description: 'Complete band setup with professional sound system, perfect for weddings, corporate events, and parties.',
      price: 1800
    },
    {
      title: 'Acoustic Set',
      description: 'Intimate acoustic performance ideal for cocktail hours, smaller venues, or background music.',
      price: 1200
    },
    {
      title: 'Extended Performance',
      description: '4+ hour performance for extended events or festivals with expanded song selection.',
      price: 2400
    },
    {
      title: 'Custom Song',
      description: 'Custom arrangement of a special song for your event, including one rehearsal session.',
      price: 500
    }
  ];
  
  reviews = [
    {
      id: 1,
      userName: 'Jennifer L.',
      userImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      date: '2 months ago',
      text: 'Absolutely amazing! They made our wedding reception unforgettable. Every guest commented on how fantastic the music was. Highly recommend!'
    },
    {
      id: 2,
      userName: 'Michael T.',
      userImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4,
      date: '3 months ago',
      text: 'Great performance at our corporate event. Professional, punctual, and talented. Would book again for future events.'
    },
    {
      id: 3,
      userName: 'Sarah K.',
      userImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      date: '1 month ago',
      text: 'Incredible musicians! They learned our first dance song and performed it beautifully. Their energy kept the dance floor packed all night!'
    },
    {
      id: 4,
      userName: 'David R.',
      userImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      date: '2 weeks ago',
      text: 'Hired them for our company holiday party and they exceeded all expectations. Very accommodating with our song requests and schedule changes.'
    }
  ];
  
  bookingData = {
    date: '',
    time: '',
    duration: '2',
    venue: '',
    notes: ''
  };
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.artistId = this.route.snapshot.params['id'];
    this.loadArtistDetails();
    
    // Set artist header background dynamically
    setTimeout(() => {
      const header = document.querySelector('.artist-header') as HTMLElement;
      if (header && this.artist) {
        header.style.backgroundImage = `url('${this.artist.image}')`;
      }
    });
  }
  
  loadArtistDetails(): void {
    // In a real app, this would be a service call
    // For now, we'll use our mock data
    this.artist = {
      id: '1',
      name: 'The Modern Jazz Quartet',
      genre: 'Jazz',
      location: 'New York, NY',
      rating: 4.9,
      price: 1200,
      image: 'https://images.pexels.com/photos/4062561/pexels-photo-4062561.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A world-class jazz quartet specializing in elegant, sophisticated jazz for upscale events.',
      featured: true
    };
  }
  
  getStars(rating: number): number[] {
    const fullStars = Math.floor(rating);
    return Array(fullStars).fill(0);
  }
  
  submitBookingRequest(): void {
    console.log('Booking request submitted:', this.bookingData);
    // In a real app, this would call a service to create the booking
    alert('Booking request sent! The artist will respond to your request soon.');
  }
}