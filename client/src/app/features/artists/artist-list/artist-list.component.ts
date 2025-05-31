import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArtistCardComponent } from '../../../shared/components/artist-card/artist-card.component';
import { GenreFilterComponent } from '../../../shared/components/genre-filter/genre-filter.component';
import { Artist } from '../../../core/models/artist.model';

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ArtistCardComponent,
    GenreFilterComponent
  ],
  template: `
    <div class="artist-list-container">
      <header class="list-header">
        <h1 class="list-title">Find Respectful Musical Accompaniment</h1>
        <p class="list-subtitle">Professional musicians for memorial services in Montreal</p>
      </header>
      
      <section class="filters-section">
        <div class="filter-row">
          <app-genre-filter (genreSelected)="filterByGenre($event)"></app-genre-filter>
        </div>
        
        <div class="filter-row">
          <div class="filter-group">
            <label for="location" class="filter-label">Location</label>
            <select id="location" [(ngModel)]="selectedLocation" class="filter-select" (change)="applyFilters()">
              <option value="">Any Montreal Area</option>
              <option *ngFor="let location of locations" [value]="location">{{ location }}</option>
            </select>
          </div>
          
          <div class="filter-group">
            <label for="price" class="filter-label">Max Price</label>
            <select id="price" [(ngModel)]="maxPrice" class="filter-select" (change)="applyFilters()">
              <option value="0">Any Price</option>
              <option value="500">Up to $500</option>
              <option value="1000">Up to $1000</option>
              <option value="1500">Up to $1500</option>
            </select>
          </div>
          
          <div class="filter-group">
            <label for="rating" class="filter-label">Min Rating</label>
            <select id="rating" [(ngModel)]="minRating" class="filter-select" (change)="applyFilters()">
              <option value="0">Any Rating</option>
              <option value="4">4+ Stars</option>
              <option value="4.5">4.5+ Stars</option>
            </select>
          </div>
        </div>
      </section>
      
      <section class="artists-grid-section">
        <div class="artists-count" *ngIf="filteredArtists.length > 0">
          Showing {{ filteredArtists.length }} of {{ allArtists.length }} musicians
        </div>
        
        <div class="no-results" *ngIf="filteredArtists.length === 0">
          <p>No musicians found matching your criteria. Please adjust your search.</p>
          <button class="btn-outline" (click)="resetFilters()">Reset Filters</button>
        </div>
        
        <div class="artists-grid" *ngIf="filteredArtists.length > 0">
          <app-artist-card 
            *ngFor="let artist of filteredArtists" 
            [artist]="artist"
          ></app-artist-card>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .artist-list-container {
      padding: 40px 0;
    }
    
    .list-header {
      text-align: center;
      margin-bottom: 40px;
      animation: fadeIn var(--transition-medium) ease-in;
    }
    
    .list-title {
      font-size: 2rem;
      color: var(--color-primary);
      margin-bottom: 16px;
    }
    
    .list-subtitle {
      font-size: 1.1rem;
      color: var(--color-gray-700);
      max-width: 600px;
      margin: 0 auto;
    }
    
    .filters-section {
      margin-bottom: 32px;
      animation: slideUp var(--transition-medium) ease-out;
    }
    
    .filter-row {
      margin-bottom: 24px;
    }
    
    .filter-row:last-child {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
    }
    
    .filter-group {
      display: flex;
      flex-direction: column;
    }
    
    .filter-label {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-gray-700);
      margin-bottom: 8px;
    }
    
    .filter-select {
      padding: 10px;
      border-radius: var(--border-radius-md);
      border: 1px solid var(--color-gray-300);
      background-color: white;
      transition: border-color var(--transition-quick);
    }
    
    .filter-select:focus {
      outline: none;
      border-color: var(--color-primary);
    }
    
    .artists-grid-section {
      animation: fadeIn var(--transition-medium) ease-in;
    }
    
    .artists-count {
      margin-bottom: 16px;
      font-size: 0.875rem;
      color: var(--color-gray-600);
    }
    
    .artists-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
    }
    
    .no-results {
      text-align: center;
      padding: 40px;
      background-color: var(--color-gray-100);
      border-radius: var(--border-radius-md);
    }
    
    .no-results p {
      margin-bottom: 16px;
      color: var(--color-gray-700);
    }
    
    @media (min-width: 640px) {
      .artists-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .filter-row:last-child {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    @media (min-width: 992px) {
      .artists-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `]
})
export class ArtistListComponent {
  allArtists: Artist[] = [
    {
      id: '1',
      name: 'Montreal Chamber Ensemble',
      genre: 'Classical',
      location: 'Downtown Montreal',
      rating: 4.9,
      price: 800,
      image: 'https://images.pexels.com/photos/7097470/pexels-photo-7097470.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Elegant string quartet specializing in classical memorial services and celebrations of life.',
      featured: true
    },
    {
      id: '2',
      name: 'Ambient Reflections',
      genre: 'Ambient',
      location: 'Westmount',
      rating: 4.8,
      price: 600,
      image: 'https://images.pexels.com/photos/4087991/pexels-photo-4087991.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Peaceful ambient music creating a serene atmosphere for memorial services.',
      featured: true
    },
    {
      id: '3',
      name: 'Jazz Memorial Quartet',
      genre: 'Jazz',
      location: 'Plateau Mont-Royal',
      rating: 4.9,
      price: 750,
      image: 'https://images.pexels.com/photos/4062561/pexels-photo-4062561.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Respectful jazz arrangements for memorial services and celebrations of life.',
      featured: true
    },
    {
      id: '4',
      name: 'Classical Strings Montreal',
      genre: 'Classical',
      location: 'Outremont',
      rating: 4.7,
      price: 700,
      image: 'https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional string duo offering classical compositions for memorial services.',
      featured: false
    },
    {
      id: '5',
      name: 'Ambient Solace',
      genre: 'Ambient',
      location: 'Mile End',
      rating: 4.8,
      price: 500,
      image: 'https://images.pexels.com/photos/4087992/pexels-photo-4087992.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gentle ambient soundscapes creating a peaceful atmosphere.',
      featured: false
    },
    {
      id: '6',
      name: 'Montreal Jazz Trio',
      genre: 'Jazz',
      location: 'Old Montreal',
      rating: 4.8,
      price: 650,
      image: 'https://images.pexels.com/photos/4101137/pexels-photo-4101137.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Dignified jazz arrangements perfect for memorial services.',
      featured: false
    }
  ];
  
  filteredArtists: Artist[] = [];
  selectedGenre: string = 'All Genres';
  selectedLocation: string = '';
  maxPrice: number = 0;
  minRating: number = 0;
  
  locations: string[] = [
    'Downtown Montreal',
    'Westmount',
    'Plateau Mont-Royal',
    'Outremont',
    'Mile End',
    'Old Montreal'
  ];
  
  constructor() {
    this.filteredArtists = [...this.allArtists];
  }
  
  filterByGenre(genre: string): void {
    this.selectedGenre = genre;
    this.applyFilters();
  }
  
  applyFilters(): void {
    this.filteredArtists = this.allArtists.filter(artist => {
      if (this.selectedGenre !== 'All Genres' && artist.genre !== this.selectedGenre) {
        return false;
      }
      
      if (this.selectedLocation && artist.location !== this.selectedLocation) {
        return false;
      }
      
      if (this.maxPrice > 0 && artist.price > this.maxPrice) {
        return false;
      }
      
      if (this.minRating > 0 && artist.rating < this.minRating) {
        return false;
      }
      
      return true;
    });
  }
  
  resetFilters(): void {
    this.selectedGenre = 'All Genres';
    this.selectedLocation = '';
    this.maxPrice = 0;
    this.minRating = 0;
    this.filteredArtists = [...this.allArtists];
  }
}