import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent)
  },
  { 
    path: 'artists',
    loadComponent: () => import('./features/artists/artist-list/artist-list.component').then(c => c.ArtistListComponent)
  },
  { 
    path: 'artists/:id',
    loadComponent: () => import('./features/artists/artist-detail/artist-detail.component').then(c => c.ArtistDetailComponent)
  },
  { 
    path: 'bookings',
    loadComponent: () => import('./features/bookings/booking-list/booking-list.component').then(c => c.BookingListComponent)
  },
  { 
    path: 'auth/login',
    loadComponent: () => import('./features/auth/login/login.component').then(c => c.LoginComponent)
  },
  { 
    path: 'auth/register',
    loadComponent: () => import('./features/auth/register/register.component').then(c => c.RegisterComponent)
  },
  { 
    path: 'profile',
    loadComponent: () => import('./features/profile/profile.component').then(c => c.ProfileComponent)
  },
  { 
    path: '**',
    redirectTo: ''
  }
];