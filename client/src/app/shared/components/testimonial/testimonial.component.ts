import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="testimonial">
      <div class="quote-mark">"</div>
      <p class="quote-text">{{ quote }}</p>
      <div class="testimonial-author">
        <img [src]="image" [alt]="name" class="author-image" />
        <div class="author-info">
          <div class="author-name">{{ name }}</div>
          <div class="author-role">{{ role }}</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .testimonial {
      background-color: white;
      border-radius: var(--border-radius-lg);
      padding: 32px 24px;
      box-shadow: var(--shadow-md);
      position: relative;
      overflow: hidden;
      transition: transform var(--transition-medium);
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .testimonial:hover {
      transform: translateY(-8px);
    }
    
    .quote-mark {
      font-size: 5rem;
      line-height: 1;
      position: absolute;
      top: 12px;
      left: 16px;
      color: var(--color-gray-200);
      font-family: Georgia, serif;
    }
    
    .quote-text {
      font-style: italic;
      margin-bottom: 24px;
      position: relative;
      z-index: 1;
      flex-grow: 1;
      color: var(--color-gray-800);
    }
    
    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: auto;
    }
    
    .author-image {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .author-name {
      font-weight: 600;
      color: var(--color-gray-900);
    }
    
    .author-role {
      font-size: 0.875rem;
      color: var(--color-gray-600);
    }
  `]
})
export class TestimonialComponent {
  @Input() quote: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() image: string = '';
}