import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Services/user';
import { IUser } from '../../Modles/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent implements OnInit {
  user: IUser | null = null;
  loading = false;
  error: string | null = null;
  editing = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUserData();
  }

  /** ✅ Load user info from storage */
  loadUserData(): void {
    this.loading = true;
    try {
      const stored =
        localStorage.getItem('user-data') ||
        sessionStorage.getItem('user-data');

      if (stored) {
        this.user = JSON.parse(stored);
      } else {
        this.error = 'No user data found.';
      }
    } catch (e) {
      this.error = 'Error reading user data.';
    } finally {
      this.loading = false;
    }
  }

  /** ✅ Toggle edit mode */
  toggleEdit(): void {
    this.editing = !this.editing;
  }

  /** ✅ Save profile updates */
  saveProfile(): void {
    if (!this.user) return;

    this.loading = true;
    this.error = null;

    this.userService.updateUserData(this.user).subscribe({
      next: (response: IUser) => {
        // Store updated data
        if (localStorage.getItem('user-data')) {
          localStorage.setItem('user-data', JSON.stringify(response));
        } else {
          sessionStorage.setItem('user-data', JSON.stringify(response));
        }

        this.user = response;
        this.editing = false;
        this.loading = false;
      },
      error: (err) => {
        console.error('Update failed:', err);
        this.error = 'Failed to update profile on server.';
        this.loading = false;
      }
    });
  }
}
