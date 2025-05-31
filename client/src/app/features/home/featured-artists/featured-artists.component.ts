import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArtistCardComponent } from '../../../shared/components/artist-card/artist-card.component';
import { Artist } from '../../../core/models/artist.model';

@Component({
  selector: 'app-featured-artists',
  standalone: true,
  imports: [CommonModule, RouterLink, ArtistCardComponent],
  template: `
    <div class="featured-artists-container">
      <div class="featured-artists-grid">
        <app-artist-card
          *ngFor="let artist of featuredArtists"
          [artist]="artist"
        ></app-artist-card>
      </div>
      
      <div class="view-all-container">
        <a routerLink="/artists" class="btn-outline">View All Artists</a>
      </div>
    </div>
  `,
  styles: [`
    .featured-artists-container {
      margin-top: 24px;
    }
    
    .featured-artists-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
    }
    
    .view-all-container {
      margin-top: 40px;
      text-align: center;
    }
    
    @media (min-width: 640px) {
      .featured-artists-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 992px) {
      .featured-artists-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    @media (min-width: 1280px) {
      .featured-artists-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `]
})
export class FeaturedArtistsComponent {
  featuredArtists: Artist[] = [
    {
      id: '1',
      name: 'The Modern Jazz Quartet',
      genre: 'Jazz',
      location: 'New York, NY',
      rating: 4.9,
      price: 1200,
      image: 'https://images.pexels.com/photos/4062561/pexels-photo-4062561.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A world-class jazz quartet specializing in elegant, sophisticated jazz for upscale events.',
      featured: true
    },
    {
      id: '2',
      name: 'Electric Pulse',
      genre: 'Electronic',
      location: 'Los Angeles, CA',
      rating: 4.8,
      price: 1500,
      image: 'https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Cutting-edge electronic music performers with stunning visual projections.',
      featured: true
    },
    {
      id: '3',
      name: 'Acoustic Harmony',
      genre: 'Folk',
      location: 'Portland, OR',
      rating: 4.7,
      price: 800,
      image: 'https://images.pexels.com/photos/7095517/pexels-photo-7095517.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Heartfelt folk music with soulful vocals and acoustic instruments.',
      featured: true
    },
    {
      id: '4',
      name: 'The Groove Collective',
      genre: 'Funk/Soul',
      location: 'Chicago, IL',
      rating: 4.9,
      price: 1800,
      image: 'https://images.pexels.com/photos/5117913/pexels-photo-5117913.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'High-energy funk and soul band guaranteed to get the dance floor moving.',
      featured: true
    }
  ];
}