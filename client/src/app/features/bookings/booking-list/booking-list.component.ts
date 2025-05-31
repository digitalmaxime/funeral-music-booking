import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Booking {
  id: string;
  artistId: string;
  artistName: string;
  artistImage: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price: number;
  duration: number;
}

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="bookings-container">
      <header class="bookings-header">
        <h1 class="page-title">Your Bookings</h1>
        <p class="page-subtitle">Manage your upcoming and past event bookings</p>
      </header>
      
      <div class="filters-bar">
        <div class="filter-controls">
          <div class="search-box">
            <input 
              type="text" 
              placeholder="Search by artist or venue" 
              [(ngModel)]="searchQuery" 
              (input)="applyFilters()"
              class="search-input"
            >
          </div>
          
          <div class="status-filter">
            <label for="statusFilter">Status:</label>
            <select 
              id="statusFilter" 
              [(ngModel)]="statusFilter" 
              (change)="applyFilters()"
              class="filter-select"
            >
              <option value="all">All Bookings</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
        
        <div class="booking-stats">
          <div class="stat-item">
            <span class="stat-value">{{ countBookingsByStatus('confirmed') }}</span>
            <span class="stat-label">Upcoming</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ countBookingsByStatus('pending') }}</span>
            <span class="stat-label">Pending</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ countBookingsByStatus('completed') }}</span>
            <span class="stat-label">Past</span>
          </div>
        </div>
      </div>
      
      <div class="bookings-list">
        <div *ngIf="filteredBookings.length === 0" class="empty-state">
          <div class="empty-icon">📅</div>
          <h3>No bookings found</h3>
          <p>{{ getEmptyStateMessage() }}</p>
          <a routerLink="/artists" class="btn-primary">Browse Artists</a>
        </div>
        
        <div *ngFor="let booking of filteredBookings" class="booking-card" [class]="'status-' + booking.status">
          <div class="booking-status">{{ formatStatus(booking.status) }}</div>
          
          <div class="booking-main">
            <div class="artist-info">
              <img [src]="booking.artistImage" [alt]="booking.artistName" class="artist-image">
              <div>
                <h3 class="artist-name">{{ booking.artistName }}</h3>
                <a [routerLink]="['/artists', booking.artistId]" class="view-profile">View Profile</a>
              </div>
            </div>
            
            <div class="booking-details">
              <div class="detail-item">
                <div class="detail-label">Date & Time</div>
                <div class="detail-value">{{ formatDate(booking.eventDate) }} at {{ booking.eventTime }}</div>
              </div>
              
              <div class="detail-item">
                <div class="detail-label">Duration</div>
                <div class="detail-value">{{ booking.duration }} hour{{ booking.duration > 1 ? 's' : '' }}</div>
              </div>
              
              <div class="detail-item">
                <div class="detail-label">Venue</div>
                <div class="detail-value">{{ booking.venue }}</div>
              </div>
              
              <div class="detail-item">
                <div class="detail-label">Price</div>
                <div class="detail-value price">{{ booking.price | currency }}</div>
              </div>
            </div>
          </div>
          
          <div class="booking-actions">
            <button *ngIf="booking.status === 'pending'" class="btn-outline action-btn cancel-btn" (click)="cancelBooking(booking)">
              Cancel Request
            </button>
            <button *ngIf="booking.status === 'confirmed'" class="btn-outline action-btn contact-btn">
              Contact Artist
            </button>
            <button *ngIf="booking.status === 'confirmed'" class="btn-primary action-btn">
              View Details
            </button>
            <button *ngIf="booking.status === 'completed'" class="btn-outline action-btn">
              Leave Review
            </button>
            <button *ngIf="booking.status === 'completed'" class="btn-primary action-btn">
              Book Again
            </button>
          </div>
        </div>
      </div>
      
      <div class="pagination" *ngIf="filteredBookings.length > 0">
        <button class="pagination-btn" [disabled]="currentPage === 1">Previous</button>
        <span class="page-indicator">Page {{ currentPage }} of {{ totalPages }}</span>
        <button class="pagination-btn" [disabled]="currentPage === totalPages">Next</button>
      </div>
    </div>
  `,
  styles: [`
    .bookings-container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px 0;
      animation: fadeIn var(--transition-medium);
    }
    
    .bookings-header {
      margin-bottom: 32px;
    }
    
    .page-title {
      font-size: 2rem;
      color: var(--color-primary);
      margin-bottom: 8px;
    }
    
    .page-subtitle {
      color: var(--color-gray-600);
    }
    
    .filters-bar {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 24px;
      padding: 16px;
      background-color: white;
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-sm);
    }
    
    .filter-controls {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .search-box {
      flex: 1;
    }
    
    .search-input {
      width: 100%;
      padding: 10px 16px;
      border: 1px solid var(--color-gray-300);
      border-radius: var(--border-radius-md);
      font-size: 0.95rem;
    }
    
    .status-filter {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .status-filter label {
      font-weight: 500;
      color: var(--color-gray-700);
    }
    
    .filter-select {
      padding: 8px 12px;
      border: 1px solid var(--color-gray-300);
      border-radius: var(--border-radius-md);
      min-width: 140px;
    }
    
    .booking-stats {
      display: flex;
      gap: 16px;
      border-top: 1px solid var(--color-gray-200);
      padding-top: 16px;
    }
    
    .stat-item {
      text-align: center;
      flex: 1;
    }
    
    .stat-value {
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-primary);
    }
    
    .stat-label {
      font-size: 0.85rem;
      color: var(--color-gray-600);
    }
    
    .bookings-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .booking-card {
      background: white;
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-md);
      overflow: hidden;
      transition: transform var(--transition-quick), box-shadow var(--transition-quick);
      position: relative;
    }
    
    .booking-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }
    
    .booking-status {
      position: absolute;
      top: 0;
      right: 0;
      padding: 6px 12px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      border-bottom-left-radius: var(--border-radius-sm);
    }
    
    .status-pending .booking-status {
      background-color: var(--color-warning);
      color: var(--color-gray-900);
    }
    
    .status-confirmed .booking-status {
      background-color: var(--color-primary);
      color: white;
    }
    
    .status-completed .booking-status {
      background-color: var(--color-success);
      color: white;
    }
    
    .status-cancelled .booking-status {
      background-color: var(--color-error);
      color: white;
    }
    
    .booking-main {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .artist-info {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    
    .artist-image {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .artist-name {
      font-size: 1.2rem;
      margin-bottom: 4px;
      color: var(--color-gray-900);
    }
    
    .view-profile {
      font-size: 0.85rem;
      color: var(--color-primary);
    }
    
    .booking-details {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
    }
    
    .detail-item {
      display: flex;
      flex-direction: column;
    }
    
    .detail-label {
      font-size: 0.8rem;
      color: var(--color-gray-600);
      margin-bottom: 4px;
    }
    
    .detail-value {
      font-size: 0.95rem;
      color: var(--color-gray-900);
    }
    
    .price {
      font-weight: 700;
      color: var(--color-primary);
    }
    
    .booking-actions {
      background-color: var(--color-gray-50);
      padding: 16px;
      display: flex;
      gap: 12px;
      border-top: 1px solid var(--color-gray-200);
      flex-wrap: wrap;
    }
    
    .action-btn {
      flex: 1;
      padding: 8px 12px;
      font-size: 0.9rem;
      min-width: 120px;
    }
    
    .cancel-btn {
      color: var(--color-error);
      border-color: var(--color-error);
    }
    
    .cancel-btn:hover {
      background-color: var(--color-error);
      color: white;
    }
    
    .empty-state {
      text-align: center;
      padding: 48px 24px;
      background-color: white;
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-sm);
    }
    
    .empty-icon {
      font-size: 3rem;
      margin-bottom: 16px;
    }
    
    .empty-state h3 {
      margin-bottom: 8px;
      color: var(--color-gray-800);
    }
    
    .empty-state p {
      margin-bottom: 24px;
      color: var(--color-gray-600);
    }
    
    .pagination {
      margin-top: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }
    
    .pagination-btn {
      padding: 8px 16px;
      background-color: white;
      border: 1px solid var(--color-gray-300);
      border-radius: var(--border-radius-md);
      color: var(--color-gray-700);
      transition: all var(--transition-quick);
    }
    
    .pagination-btn:not(:disabled):hover {
      background-color: var(--color-primary);
      color: white;
      border-color: var(--color-primary);
    }
    
    .pagination-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .page-indicator {
      font-size: 0.9rem;
      color: var(--color-gray-600);
    }
    
    @media (min-width: 768px) {
      .filters-bar {
        flex-direction: row;
        justify-content: space-between;
      }
      
      .filter-controls {
        flex-direction: row;
        width: 60%;
      }
      
      .booking-details {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .booking-actions {
        justify-content: flex-end;
      }
      
      .action-btn {
        flex: 0 0 auto;
      }
    }
    
    @media (min-width: 992px) {
      .booking-main {
        flex-direction: row;
        justify-content: space-between;
      }
      
      .artist-info {
        flex: 0 0 25%;
      }
      
      .booking-details {
        flex: 0 0 70%;
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `]
})
export class BookingListComponent {
  searchQuery: string = '';
  statusFilter: string = 'all';
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 5;
  
  bookings: Booking[] = [
    {
      id: '1',
      artistId: '1',
      artistName: 'The Modern Jazz Quartet',
      artistImage: 'https://images.pexels.com/photos/4062561/pexels-photo-4062561.jpeg?auto=compress&cs=tinysrgb&w=300',
      eventDate: '2025-07-15',
      eventTime: '19:00',
      venue: 'Grand Ballroom, Hilton Hotel',
      status: 'confirmed',
      price: 1200,
      duration: 3
    },
    {
      id: '2',
      artistId: '4',
      artistName: 'The Groove Collective',
      artistImage: 'https://images.pexels.com/photos/5117913/pexels-photo-5117913.jpeg?auto=compress&cs=tinysrgb&w=300',
      eventDate: '2025-08-03',
      eventTime: '20:30',
      venue: 'Riverside Park Amphitheater',
      status: 'pending',
      price: 1800,
      duration: 2
    },
    {
      id: '3',
      artistId: '6',
      artistName: 'Classical Strings',
      artistImage: 'https://images.pexels.com/photos/7097470/pexels-photo-7097470.jpeg?auto=compress&cs=tinysrgb&w=300',
      eventDate: '2025-05-22',
      eventTime: '18:00',
      venue: 'Garden Wedding Venue',
      status: 'completed',
      price: 1100,
      duration: 4
    },
    {
      id: '4',
      artistId: '3',
      artistName: 'Acoustic Harmony',
      artistImage: 'https://images.pexels.com/photos/7095517/pexels-photo-7095517.jpeg?auto=compress&cs=tinysrgb&w=300',
      eventDate: '2025-04-10',
      eventTime: '17:00',
      venue: 'Mountain View Resort',
      status: 'cancelled',
      price: 800,
      duration: 2
    },
    {
      id: '5',
      artistId: '2',
      artistName: 'Electric Pulse',
      artistImage: 'https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&w=300',
      eventDate: '2025-09-20',
      eventTime: '21:00',
      venue: 'Tech Conference After Party',
      status: 'confirmed',
      price: 1500,
      duration: 3
    }
  ];
  
  filteredBookings: Booking[] = [];
  
  constructor() {
    this.filteredBookings = [...this.bookings];
  }
  
  applyFilters(): void {
    this.filteredBookings = this.bookings.filter(booking => {
      // Filter by status
      if (this.statusFilter !== 'all' && booking.status !== this.statusFilter) {
        return false;
      }
      
      // Filter by search query
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        return (
          booking.artistName.toLowerCase().includes(query) ||
          booking.venue.toLowerCase().includes(query)
        );
      }
      
      return true;
    });
    
    this.calculatePagination();
  }
  
  calculatePagination(): void {
    this.totalPages = Math.ceil(this.filteredBookings.length / this.itemsPerPage);
    this.currentPage = 1;
  }
  
  countBookingsByStatus(status: string): number {
    if (status === 'confirmed') {
      return this.bookings.filter(b => b.status === 'confirmed').length;
    } else if (status === 'pending') {
      return this.bookings.filter(b => b.status === 'pending').length;
    } else if (status === 'completed') {
      return this.bookings.filter(b => b.status === 'completed').length;
    }
    return 0;
  }
  
  formatStatus(status: string): string {
    return status.charAt(0).toUpperCase() + status.slice(1);
  }
  
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
  
  cancelBooking(booking: Booking): void {
    if (confirm('Are you sure you want to cancel this booking request?')) {
      // In a real app, this would call a service
      const index = this.bookings.findIndex(b => b.id === booking.id);
      if (index !== -1) {
        this.bookings[index].status = 'cancelled';
        this.applyFilters();
      }
    }
  }
  
  getEmptyStateMessage(): string {
    if (this.searchQuery) {
      return 'No bookings match your search criteria. Try different keywords.';
    } else if (this.statusFilter !== 'all') {
      return `You don't have any ${this.statusFilter} bookings.`;
    } else {
      return 'You have not made any bookings yet. Start by browsing artists.';
    }
  }
}