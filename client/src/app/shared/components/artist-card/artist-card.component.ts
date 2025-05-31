import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Artist } from '../../../core/models/artist.model';

@Component({
  selector: 'app-artist-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="artist-card">
      <div class="artist-image-container">
        <img [src]="artist.image" [alt]="artist.name" class="artist-image" />
        <div class="artist-badge" *ngIf="artist.featured">Featured</div>
      </div>
      <div class="artist-content">
        <h3 class="artist-name">{{ artist.name }}</h3>
        <div class="artist-meta">
          <span class="artist-genre">{{ artist.genre }}</span>
          <span class="artist-location">{{ artist.location }}</span>
        </div>
        <div class="artist-rating">
          <div class="rating-stars">
            <span class="star" *ngFor="let star of getStars(artist.rating)">★</span>
          </div>
          <span class="rating-value">{{ artist.rating.toFixed(1) }}</span>
        </div>
        <p class="artist-description">{{ artist.description }}</p>
        <div class="artist-footer">
          <div class="artist-price">{{ artist.price | currency }}/event</div>
          <a [routerLink]="['/artists', artist.id]" class="btn-primary view-profile-btn">View Profile</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .artist-card {
      background: white;
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: transform var(--transition-medium), box-shadow var(--transition-medium);
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .artist-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
    }
    
    .artist-image-container {
      position: relative;
      padding-bottom: 66.67%; /* 3:2 Aspect ratio */
      overflow: hidden;
    }
    
    .artist-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-medium);
    }
    
    .artist-card:hover .artist-image {
      transform: scale(1.05);
    }
    
    .artist-badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background-color: var(--color-accent);
      color: var(--color-gray-900);
      font-weight: 600;
      font-size: 0.75rem;
      padding: 4px 8px;
      border-radius: var(--border-radius-sm);
      z-index: 1;
    }
    
    .artist-content {
      padding: 16px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    
    .artist-name {
      font-size: 1.25rem;
      margin-bottom: 8px;
      color: var(--color-gray-900);
    }
    
    .artist-meta {
      display: flex;
      gap: 8px;
      margin-bottom: 12px;
      font-size: 0.875rem;
    }
    
    .artist-genre {
      color: var(--color-primary);
      font-weight: 500;
    }
    
    .artist-location {
      color: var(--color-gray-600);
      position: relative;
      padding-left: 16px;
    }
    
    .artist-location::before {
      content: '•';
      position: absolute;
      left: 4px;
      top: 0;
    }
    
    .artist-rating {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }
    
    .rating-stars {
      display: flex;
    }
    
    .star {
      color: var(--color-accent);
    }
    
    .rating-value {
      font-weight: 600;
      color: var(--color-gray-700);
    }
    
    .artist-description {
      color: var(--color-gray-700);
      font-size: 0.875rem;
      line-height: 1.5;
      margin-bottom: 16px;
      flex-grow: 1;
    }
    
    .artist-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
    }
    
    .artist-price {
      font-weight: 700;
      color: var(--color-primary);
    }
    
    .view-profile-btn {
      font-size: 0.875rem;
      padding: 6px 12px;
    }
  `]
})
export class ArtistCardComponent {
  @Input() artist!: Artist;
  
  getStars(rating: number): number[] {
    const fullStars = Math.floor(rating);
    return Array(fullStars).fill(0);
  }
}