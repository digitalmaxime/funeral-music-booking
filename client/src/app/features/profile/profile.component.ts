import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="profile-container">
      <div class="profile-header">
        <div class="profile-avatar-container">
          <img [src]="userData.avatar" alt="Profile" class="profile-avatar">
          <button class="avatar-edit-btn">
            <span class="edit-icon">✏️</span>
          </button>
        </div>
        <div class="profile-intro">
          <h1 class="profile-name">{{ userData.name }}</h1>
          <p class="profile-type">{{ userData.accountType === 'artist' ? 'Artist/Musician' : 'Event Organizer' }}</p>
          <p class="profile-subtitle">Member since {{ userData.joinDate }}</p>
          <div class="profile-stats">
            <div class="stat-item">
              <span class="stat-value">{{ userData.numBookings }}</span>
              <span class="stat-label">Bookings</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">{{ userData.numReviews }}</span>
              <span class="stat-label">Reviews</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="profile-content">
        <div class="profile-tabs">
          <button 
            *ngFor="let tab of tabs" 
            class="tab-btn" 
            [class.active]="currentTab === tab.id"
            (click)="switchTab(tab.id)"
          >
            {{ tab.name }}
          </button>
        </div>
        
        <!-- Personal Information Tab -->
        <div class="tab-content" *ngIf="currentTab === 'personal'">
          <form class="profile-form" (ngSubmit)="savePersonalInfo()">
            <div class="form-section">
              <h3 class="section-title">Personal Information</h3>
              
              <div class="form-group">
                <label for="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  class="form-control" 
                  [(ngModel)]="personalInfo.name"
                >
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    class="form-control" 
                    [(ngModel)]="personalInfo.email"
                  >
                </div>
                
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    class="form-control" 
                    [(ngModel)]="personalInfo.phone"
                  >
                </div>
              </div>
              
              <div class="form-group">
                <label for="location">Location</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  class="form-control" 
                  [(ngModel)]="personalInfo.location"
                  placeholder="City, State"
                >
              </div>
              
              <div class="form-group">
                <label for="bio">Bio</label>
                <textarea 
                  id="bio" 
                  name="bio" 
                  rows="4" 
                  class="form-control" 
                  [(ngModel)]="personalInfo.bio"
                  placeholder="Tell us a bit about yourself"
                ></textarea>
              </div>
            </div>
            
            <div class="form-section" *ngIf="userData.accountType === 'artist'">
              <h3 class="section-title">Artist Information</h3>
              
              <div class="form-group">
                <label for="genre">Primary Genre</label>
                <select 
                  id="genre" 
                  name="genre" 
                  class="form-control" 
                  [(ngModel)]="artistInfo.genre"
                >
                  <option value="Rock">Rock</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Classical">Classical</option>
                  <option value="Pop">Pop</option>
                  <option value="Electronic">Electronic</option>
                  <option value="Hip Hop">Hip Hop</option>
                  <option value="R&B">R&B</option>
                  <option value="Country">Country</option>
                  <option value="Folk">Folk</option>
                  <option value="World">World</option>
                </select>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="price">Base Price ($)</label>
                  <input 
                    type="number" 
                    id="price" 
                    name="price" 
                    class="form-control" 
                    [(ngModel)]="artistInfo.price"
                  >
                </div>
                
                <div class="form-group">
                  <label for="experienceYears">Years of Experience</label>
                  <input 
                    type="number" 
                    id="experienceYears" 
                    name="experienceYears" 
                    class="form-control" 
                    [(ngModel)]="artistInfo.experienceYears"
                  >
                </div>
              </div>
              
              <div class="form-group">
                <label for="description">Description</label>
                <textarea 
                  id="description" 
                  name="description" 
                  rows="4" 
                  class="form-control" 
                  [(ngModel)]="artistInfo.description"
                  placeholder="Describe your music, style, and performance"
                ></textarea>
              </div>
            </div>
            
            <div class="form-actions">
              <button type="submit" class="btn-primary save-btn">Save Changes</button>
              <button type="button" class="btn-outline cancel-btn">Cancel</button>
            </div>
          </form>
        </div>
        
        <!-- Account Settings Tab -->
        <div class="tab-content" *ngIf="currentTab === 'account'">
          <div class="form-section">
            <h3 class="section-title">Change Password</h3>
            <form class="profile-form" (ngSubmit)="changePassword()">
              <div class="form-group">
                <label for="currentPassword">Current Password</label>
                <input 
                  type="password" 
                  id="currentPassword" 
                  name="currentPassword" 
                  class="form-control" 
                  [(ngModel)]="passwordData.current"
                >
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="newPassword">New Password</label>
                  <input 
                    type="password" 
                    id="newPassword" 
                    name="newPassword" 
                    class="form-control" 
                    [(ngModel)]="passwordData.new"
                  >
                </div>
                
                <div class="form-group">
                  <label for="confirmPassword">Confirm New Password</label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    class="form-control" 
                    [(ngModel)]="passwordData.confirm"
                  >
                </div>
              </div>
              
              <button type="submit" class="btn-primary save-btn">Update Password</button>
            </form>
          </div>
          
          <div class="form-section">
            <h3 class="section-title">Notification Settings</h3>
            <div class="notification-settings">
              <div class="notification-option">
                <div>
                  <h4>Email Notifications</h4>
                  <p>Receive booking updates and site announcements via email</p>
                </div>
                <label class="toggle-switch">
                  <input 
                    type="checkbox" 
                    [(ngModel)]="notificationSettings.email" 
                    (change)="updateNotificationSettings()"
                  >
                  <span class="toggle-slider"></span>
                </label>
              </div>
              
              <div class="notification-option">
                <div>
                  <h4>SMS Notifications</h4>
                  <p>Receive booking alerts via text messages</p>
                </div>
                <label class="toggle-switch">
                  <input 
                    type="checkbox" 
                    [(ngModel)]="notificationSettings.sms" 
                    (change)="updateNotificationSettings()"
                  >
                  <span class="toggle-slider"></span>
                </label>
              </div>
              
              <div class="notification-option">
                <div>
                  <h4>Marketing Communications</h4>
                  <p>Receive promotional offers and updates about new features</p>
                </div>
                <label class="toggle-switch">
                  <input 
                    type="checkbox" 
                    [(ngModel)]="notificationSettings.marketing" 
                    (change)="updateNotificationSettings()"
                  >
                  <span class="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
          
          <div class="form-section danger-zone">
            <h3 class="section-title">Danger Zone</h3>
            <div class="danger-action">
              <div>
                <h4>Deactivate Account</h4>
                <p>Temporarily disable your account</p>
              </div>
              <button class="btn-outline danger-btn" (click)="deactivateAccount()">Deactivate</button>
            </div>
            
            <div class="danger-action">
              <div>
                <h4>Delete Account</h4>
                <p>Permanently delete your account and all data</p>
              </div>
              <button class="btn-outline danger-btn delete-btn" (click)="deleteAccount()">Delete</button>
            </div>
          </div>
        </div>
        
        <!-- Payment Methods Tab -->
        <div class="tab-content" *ngIf="currentTab === 'payment'">
          <div class="payment-methods">
            <h3 class="section-title">Payment Methods</h3>
            
            <div class="payment-card" *ngFor="let card of paymentMethods; let i = index">
              <div class="card-info">
                <div class="card-type" [class]="card.type.toLowerCase()">{{ card.type }}</div>
                <div class="card-number">•••• •••• •••• {{ card.last4 }}</div>
                <div class="card-expiry">Expires {{ card.expiryMonth }}/{{ card.expiryYear }}</div>
                <div class="default-badge" *ngIf="card.isDefault">Default</div>
              </div>
              <div class="card-actions">
                <button class="btn-outline card-btn" *ngIf="!card.isDefault" (click)="setDefaultCard(i)">
                  Set as Default
                </button>
                <button class="btn-outline card-btn remove-btn" (click)="removeCard(i)">
                  Remove
                </button>
              </div>
            </div>
            
            <button class="btn-primary add-payment-btn" (click)="showAddPaymentForm = !showAddPaymentForm">
              {{ showAddPaymentForm ? 'Cancel' : 'Add Payment Method' }}
            </button>
            
            <form *ngIf="showAddPaymentForm" class="payment-form" (ngSubmit)="addPaymentMethod()">
              <div class="form-group">
                <label for="cardNumber">Card Number</label>
                <input 
                  type="text" 
                  id="cardNumber" 
                  name="cardNumber" 
                  class="form-control" 
                  [(ngModel)]="newCard.number"
                  placeholder="1234 5678 9012 3456"
                >
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="cardName">Name on Card</label>
                  <input 
                    type="text" 
                    id="cardName" 
                    name="cardName" 
                    class="form-control" 
                    [(ngModel)]="newCard.name"
                  >
                </div>
                
                <div class="form-group">
                  <label for="expiryDate">Expiry Date</label>
                  <input 
                    type="text" 
                    id="expiryDate" 
                    name="expiryDate" 
                    class="form-control" 
                    [(ngModel)]="newCard.expiry"
                    placeholder="MM/YY"
                  >
                </div>
                
                <div class="form-group">
                  <label for="cvv">CVV</label>
                  <input 
                    type="text" 
                    id="cvv" 
                    name="cvv" 
                    class="form-control" 
                    [(ngModel)]="newCard.cvv"
                    placeholder="123"
                  >
                </div>
              </div>
              
              <div class="form-group">
                <label for="billingAddress">Billing Address</label>
                <input 
                  type="text" 
                  id="billingAddress" 
                  name="billingAddress" 
                  class="form-control" 
                  [(ngModel)]="newCard.billingAddress"
                >
              </div>
              
              <div class="form-group checkbox-group">
                <input 
                  type="checkbox" 
                  id="setDefault" 
                  name="setDefault" 
                  [(ngModel)]="newCard.setDefault"
                >
                <label for="setDefault">Set as default payment method</label>
              </div>
              
              <button type="submit" class="btn-primary save-btn">Add Card</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
      animation: fadeIn var(--transition-medium);
    }
    
    .profile-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;
      text-align: center;
    }
    
    .profile-avatar-container {
      position: relative;
      margin-bottom: 24px;
    }
    
    .profile-avatar {
      width: 128px;
      height: 128px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid white;
      box-shadow: var(--shadow-md);
    }
    
    .avatar-edit-btn {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: var(--color-primary);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid white;
      cursor: pointer;
      transition: transform var(--transition-quick);
    }
    
    .avatar-edit-btn:hover {
      transform: scale(1.1);
    }
    
    .profile-name {
      font-size: 1.8rem;
      margin-bottom: 4px;
      color: var(--color-primary);
    }
    
    .profile-type {
      font-size: 1.1rem;
      color: var(--color-gray-700);
      margin-bottom: 8px;
    }
    
    .profile-subtitle {
      color: var(--color-gray-600);
      font-size: 0.9rem;
      margin-bottom: 16px;
    }
    
    .profile-stats {
      display: flex;
      gap: 32px;
      justify-content: center;
    }
    
    .stat-item {
      text-align: center;
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
    
    .profile-content {
      background-color: white;
      border-radius: var(--border-radius-lg);
      box-shadow: var(--shadow-md);
      overflow: hidden;
    }
    
    .profile-tabs {
      display: flex;
      overflow-x: auto;
      border-bottom: 1px solid var(--color-gray-200);
    }
    
    .tab-btn {
      padding: 16px 24px;
      background: none;
      border: none;
      font-weight: 500;
      color: var(--color-gray-700);
      cursor: pointer;
      transition: all var(--transition-quick);
      border-bottom: 3px solid transparent;
    }
    
    .tab-btn:hover {
      color: var(--color-primary);
    }
    
    .tab-btn.active {
      color: var(--color-primary);
      border-bottom-color: var(--color-primary);
    }
    
    .tab-content {
      padding: 32px;
    }
    
    .form-section {
      margin-bottom: 32px;
      padding-bottom: 32px;
      border-bottom: 1px solid var(--color-gray-200);
    }
    
    .form-section:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
    
    .section-title {
      font-size: 1.25rem;
      margin-bottom: 24px;
      color: var(--color-gray-900);
    }
    
    .profile-form {
      max-width: 100%;
    }
    
    .form-group {
      margin-bottom: 20px;
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
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
    }
    
    .form-actions {
      display: flex;
      gap: 12px;
      margin-top: 24px;
    }
    
    .save-btn {
      padding: 12px 24px;
    }
    
    .cancel-btn {
      padding: 12px 24px;
    }
    
    .notification-settings {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .notification-option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      background-color: var(--color-gray-50);
      border-radius: var(--border-radius-md);
    }
    
    .notification-option h4 {
      margin-bottom: 4px;
      color: var(--color-gray-900);
    }
    
    .notification-option p {
      font-size: 0.875rem;
      color: var(--color-gray-600);
      margin-bottom: 0;
    }
    
    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 24px;
    }
    
    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .toggle-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--color-gray-300);
      transition: var(--transition-quick);
      border-radius: 34px;
    }
    
    .toggle-slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: var(--transition-quick);
      border-radius: 50%;
    }
    
    input:checked + .toggle-slider {
      background-color: var(--color-primary);
    }
    
    input:checked + .toggle-slider:before {
      transform: translateX(26px);
    }
    
    .danger-zone {
      border: 1px solid var(--color-error);
      border-radius: var(--border-radius-md);
      padding: 24px;
    }
    
    .danger-zone .section-title {
      color: var(--color-error);
    }
    
    .danger-action {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      background-color: var(--color-gray-50);
      border-radius: var(--border-radius-md);
      margin-bottom: 16px;
    }
    
    .danger-action:last-child {
      margin-bottom: 0;
    }
    
    .danger-action h4 {
      margin-bottom: 4px;
      color: var(--color-gray-900);
    }
    
    .danger-action p {
      font-size: 0.875rem;
      color: var(--color-gray-600);
      margin-bottom: 0;
    }
    
    .danger-btn {
      color: var(--color-error);
      border-color: var(--color-error);
    }
    
    .danger-btn:hover {
      background-color: var(--color-error);
      color: white;
    }
    
    .delete-btn {
      color: white;
      background-color: var(--color-error);
      border-color: var(--color-error);
    }
    
    .delete-btn:hover {
      background-color: #d32f2f;
    }
    
    .payment-methods {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .payment-card {
      display: flex;
      flex-direction: column;
      padding: 16px;
      background-color: var(--color-gray-50);
      border-radius: var(--border-radius-md);
      border: 1px solid var(--color-gray-200);
    }
    
    .card-info {
      position: relative;
    }
    
    .card-type {
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .card-type.visa {
      color: #1a1f71;
    }
    
    .card-type.mastercard {
      color: #eb001b;
    }
    
    .card-type.amex {
      color: #006fcf;
    }
    
    .card-number {
      font-size: 1.1rem;
      margin-bottom: 4px;
    }
    
    .card-expiry {
      font-size: 0.875rem;
      color: var(--color-gray-600);
    }
    
    .default-badge {
      position: absolute;
      top: 0;
      right: 0;
      background-color: var(--color-primary);
      color: white;
      font-size: 0.75rem;
      padding: 4px 8px;
      border-radius: var(--border-radius-sm);
    }
    
    .card-actions {
      display: flex;
      gap: 8px;
      margin-top: 16px;
      justify-content: flex-end;
    }
    
    .card-btn {
      font-size: 0.875rem;
      padding: 6px 12px;
    }
    
    .remove-btn {
      color: var(--color-error);
      border-color: var(--color-error);
    }
    
    .remove-btn:hover {
      background-color: var(--color-error);
      color: white;
    }
    
    .add-payment-btn {
      margin-top: 16px;
    }
    
    .payment-form {
      margin-top: 24px;
      padding: 24px;
      background-color: var(--color-gray-50);
      border-radius: var(--border-radius-md);
    }
    
    .checkbox-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .checkbox-group input {
      width: auto;
    }
    
    @media (min-width: 768px) {
      .profile-header {
        flex-direction: row;
        text-align: left;
        gap: 32px;
      }
      
      .profile-avatar-container {
        margin-bottom: 0;
      }
      
      .profile-stats {
        justify-content: flex-start;
      }
      
      .form-row {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .payment-card {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      
      .card-actions {
        margin-top: 0;
      }
    }
  `]
})
export class ProfileComponent {
  userData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
    accountType: 'organizer', // 'organizer' or 'artist'
    joinDate: 'April 2024',
    numBookings: 5,
    numReviews: 3
  };
  
  tabs = [
    { id: 'personal', name: 'Personal Information' },
    { id: 'account', name: 'Account Settings' },
    { id: 'payment', name: 'Payment Methods' }
  ];
  
  currentTab = 'personal';
  
  personalInfo = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '(555) 123-4567',
    location: 'Seattle, WA',
    bio: 'Event organizer with 5+ years of experience in planning corporate events and private parties.'
  };
  
  artistInfo = {
    genre: 'Jazz',
    price: 1200,
    experienceYears: 8,
    description: 'Professional musician specializing in jazz and blues performances for upscale events and private gatherings.'
  };
  
  passwordData = {
    current: '',
    new: '',
    confirm: ''
  };
  
  notificationSettings = {
    email: true,
    sms: false,
    marketing: true
  };
  
  paymentMethods = [
    {
      type: 'Visa',
      last4: '4242',
      expiryMonth: '12',
      expiryYear: '25',
      isDefault: true
    },
    {
      type: 'Mastercard',
      last4: '5678',
      expiryMonth: '06',
      expiryYear: '26',
      isDefault: false
    }
  ];
  
  newCard = {
    number: '',
    name: '',
    expiry: '',
    cvv: '',
    billingAddress: '',
    setDefault: false
  };
  
  showAddPaymentForm = false;
  
  switchTab(tabId: string): void {
    this.currentTab = tabId;
  }
  
  savePersonalInfo(): void {
    // In a real app, this would call a service
    console.log('Saving personal info:', this.personalInfo);
    if (this.userData.accountType === 'artist') {
      console.log('Saving artist info:', this.artistInfo);
    }
    alert('Profile information updated successfully!');
  }
  
  changePassword(): void {
    // In a real app, this would validate and call a service
    if (this.passwordData.new !== this.passwordData.confirm) {
      alert('New passwords do not match!');
      return;
    }
    
    console.log('Changing password');
    alert('Password changed successfully!');
    
    // Reset form
    this.passwordData = {
      current: '',
      new: '',
      confirm: ''
    };
  }
  
  updateNotificationSettings(): void {
    console.log('Updating notification settings:', this.notificationSettings);
    // In a real app, this would call a service
  }
  
  deactivateAccount(): void {
    if (confirm('Are you sure you want to deactivate your account? You can reactivate it later.')) {
      console.log('Deactivating account');
      // In a real app, this would call a service
    }
  }
  
  deleteAccount(): void {
    if (confirm('Are you sure you want to permanently delete your account? This action cannot be undone.')) {
      if (confirm('All your data will be permanently removed. This action CANNOT be undone. Type "DELETE" to confirm.')) {
        console.log('Deleting account');
        // In a real app, this would call a service
      }
    }
  }
  
  addPaymentMethod(): void {
    // In a real app, this would validate and call a service
    console.log('Adding payment method:', this.newCard);
    
    // Simple validation
    if (!this.newCard.number || !this.newCard.name || !this.newCard.expiry || !this.newCard.cvv) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Add new card (in a real app, this would be handled by a payment processor)
    const [expiryMonth, expiryYear] = this.newCard.expiry.split('/');
    
    const newPaymentMethod = {
      type: 'Visa', // In a real app, would be determined by the card number
      last4: this.newCard.number.slice(-4),
      expiryMonth,
      expiryYear,
      isDefault: this.newCard.setDefault
    };
    
    if (this.newCard.setDefault) {
      // Update existing cards to not be default
      this.paymentMethods = this.paymentMethods.map(card => ({
        ...card,
        isDefault: false
      }));
    }
    
    this.paymentMethods.push(newPaymentMethod);
    
    // Reset form
    this.newCard = {
      number: '',
      name: '',
      expiry: '',
      cvv: '',
      billingAddress: '',
      setDefault: false
    };
    
    this.showAddPaymentForm = false;
    
    alert('Payment method added successfully!');
  }
  
  setDefaultCard(index: number): void {
    this.paymentMethods = this.paymentMethods.map((card, i) => ({
      ...card,
      isDefault: i === index
    }));
  }
  
  removeCard(index: number): void {
    if (confirm('Are you sure you want to remove this payment method?')) {
      const isDefault = this.paymentMethods[index].isDefault;
      this.paymentMethods.splice(index, 1);
      
      // If we removed the default card and there are other cards, set the first one as default
      if (isDefault && this.paymentMethods.length > 0) {
        this.paymentMethods[0].isDefault = true;
      }
    }
  }
}