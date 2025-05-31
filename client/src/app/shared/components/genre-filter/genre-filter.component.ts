import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genre-filter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="genre-filter">
      <h3 class="filter-title">Select musical style</h3>
      <div class="genre-buttons">
        <button 
          *ngFor="let genre of genres" 
          class="genre-button" 
          [class.active]="selectedGenre === genre"
          (click)="selectGenre(genre)"
        >
          {{ genre }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .genre-filter {
      margin-bottom: 24px;
    }
    
    .filter-title {
      margin-bottom: 16px;
      text-align: center;
      font-size: 1.25rem;
      color: var(--color-primary);
    }
    
    .genre-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
    }
    
    .genre-button {
      background-color: white;
      border: 1px solid var(--color-gray-300);
      color: var(--color-gray-700);
      padding: 8px 16px;
      border-radius: var(--border-radius-md);
      font-size: 0.875rem;
      transition: all var(--transition-quick);
      cursor: pointer;
    }
    
    .genre-button:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }
    
    .genre-button.active {
      background-color: var(--color-primary);
      border-color: var(--color-primary);
      color: white;
    }
  `]
})
export class GenreFilterComponent {
  @Output() genreSelected = new EventEmitter<string>();
  
  genres: string[] = [
    'All Genres',
    'Classical',
    'Jazz',
    'Ambient'
  ];
  
  selectedGenre: string = 'All Genres';
  
  selectGenre(genre: string): void {
    this.selectedGenre = genre;
    this.genreSelected.emit(genre);
  }
}