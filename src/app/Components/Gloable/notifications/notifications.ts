import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrls: ['./notifications.css'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  @Input() title: string = '';
  @Input() message: string = '';

  visible = false;
  private timeoutId: any;
  private hovered = false;

  ngOnInit(): void {
    // Show notification smoothly
    setTimeout(() => (this.visible = true), 50);

    // Auto hide after 3s
    this.startAutoHide();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hovered = true;
    clearTimeout(this.timeoutId);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hovered = false;
    this.startAutoHide();
  }

  startAutoHide() {
    this.timeoutId = setTimeout(() => {
      if (!this.hovered) this.close();
    }, 6000);
  }

  close() {
    this.visible = false;
    setTimeout(() => {
      const el = document.getElementById('notification-popup');
      el?.remove();
    }, 400);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }
}
