import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SigninSignupComponent } from '../../../customer/signin-signup/signin-signup.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, SigninSignupComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  logged_in: boolean = false;
  language: string = 'English';
  user_role!: any;
  openAuthModal: boolean = false;
  regForm: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngDoCheck() {
    this.user_role = sessionStorage.getItem('role');
    const user_sesson_id = sessionStorage.getItem('user_session_id');
    if (user_sesson_id) {
      this.logged_in = true;
    }
  }
  logout() {
    sessionStorage.removeItem('user_session_id');
    sessionStorage.removeItem('role');
    this.router.navigateByUrl('/sign-in');
    location.reload();
  }

  openLoginModal() {
    this.openAuthModal = true;
    this.regForm = false;
  }

  openSignupModal() {
    this.openAuthModal = true;
    this.regForm = true;
  }

  handleChangeVisiable(value: boolean) {
    this.openAuthModal = value;
  }

  handleChangeRegForm(value: boolean) {
    this.regForm = value;
  }
}
