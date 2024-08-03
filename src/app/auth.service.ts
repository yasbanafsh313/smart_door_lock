import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  founduser: boolean = false;

  constructor() {}

  public login(username: string) {
    this.founduser = true;
    localStorage.setItem('username', username); // ذخیره نام کاربر
}

  public logout() {
    this.founduser = false;
    localStorage.removeItem('username'); // حذف نام کاربر
  }

  public getUsername(): string | null {
    return localStorage.getItem('username'); // دریافت نام کاربر
  }
}
