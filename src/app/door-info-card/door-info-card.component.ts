import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-door-info-card',
  templateUrl: './door-info-card.component.html',
  styleUrls: ['./door-info-card.component.css'],
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent]
})
export class DoorInfoCardComponent implements OnInit {
  faCoffee = faCoffee;
  doorNumber: number = 1;
  doorStatus: string = 'بسته';
  lastAction: string = 'هیچ';
  history: { status: string, time: string }[] = [];

  ngOnInit(): void {
    this.fetchDoorStatus();
  }

  fetchDoorStatus(): void {
    setTimeout(() => {
      this.doorStatus = 'باز'; // وضعیت فرضی
      this.lastAction = new Date().toLocaleString();
      this.history.push({ status: this.doorStatus, time: this.lastAction });
    }, 1000);
  }

  toggleDoor(action: string): void {
    this.doorStatus = action === 'open' ? 'باز' : 'بسته';
    this.lastAction = new Date().toLocaleString();
    this.history.push({ status: this.doorStatus, time: this.lastAction });
    this.notifyUser(`درب ${this.doorStatus} شد.`);
  }

  notifyUser(message: string): void {
    alert(message); // برای نمونه از alert استفاده شده
  }
}
