import { Component, OnInit } from '@angular/core';
import { users } from '../interface/app.interdace';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  // global variable
  id: number = 0;
  name: string = '';
  password: string = '';
  email: string = '';
  birthday: string = '';
  codemeli: string = '';
  foundUser: Boolean = true;
  // global variable
  // arrays
  user: users[] = [
    {
      id: 1,
      Name: 'Reza',
      password: '12r',
      email: 'reza@gmail.com',
      birthday: '2004-7-10',
      codeMeli: '3861483041',
    },
    {
      id: 2,
      Name: 'ali',
      password: '12a',
      email: 'ali@gmail.com',
      birthday: '2004-7-10',
      codeMeli: '3861483041',
    },
  ];
  // arrays
  // objects
  person: any = {
    id: 0,
    name: '',
    email: '',
    password: '',
    birthday: '',
    codeMeli: '',
  };
  // objects
  // regex section
  haveAtLeastOneNumber: RegExp = /\d/;
  ThreeCharsRegex: RegExp = /^.{3,15}$/;
  tenCharRegex: RegExp = /^.{10,10}$/;
  haveAtLeastOneAlphabet: RegExp = /[a-z]/;
  notEmptyInput: RegExp = /^[^]+$/;
  userNameRegex: boolean = false;
  userPassRegex: boolean = false;
  userEmailRegex: boolean = false;
  userBirthDayRegex: boolean = false;
  userCodeMeliRegex: boolean = false;
  passRegex = new RegExp(
    `^(?=.*${this.haveAtLeastOneNumber.source})(?=.*${this.ThreeCharsRegex.source})(?=.*${this.haveAtLeastOneAlphabet.source})`
  );
  // regex section
  // calculateAge function
  calculateAge(dateString: string): number {
    const date = new Date(dateString);
    const today = new Date();
    let year = today.getFullYear() - date.getFullYear();
    let month = today.getMonth() - date.getMonth();
    let day = today.getDate() - date.getDate();

    // console.log(dateString);

    if (month < 0 || (month === 0 && day < 0)) {
      year--;
    }

    return year;
  }
  // calculateAge function

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}
  // handling overlay movement
  public overlayLeft(container: HTMLElement) {
    container.classList.remove('right-panel-active');
  }
  public overlayRight(container: HTMLElement) {
    container.classList.add('right-panel-active');
  }
  // handling overlay movement
  // check user data for regexs
  public checkUserName(e: Event) {
    this.name = (<HTMLInputElement>e.target).value;
    this.userNameRegex = this.ThreeCharsRegex.test(
      (<HTMLInputElement>e.target).value
    );
  }
  public checkUserPass(e: Event) {
    this.password = (<HTMLInputElement>e.target).value;
    this.userPassRegex = this.passRegex.test(
      (<HTMLInputElement>e.target).value
    );
  }
  public checkUserEmail(e: Event) {
    this.email = (<HTMLInputElement>e.target).value;
    this.userEmailRegex = this.notEmptyInput.test(
      (<HTMLInputElement>e.target).value
    );
  }
  public checkUserBirthday(e: Event) {
    this.birthday = (<HTMLInputElement>e.target).value;

    this.userBirthDayRegex = this.notEmptyInput.test(
      (<HTMLInputElement>e.target).value
    );
    if (
      this.calculateAge(this.birthday) < 18 ||
      this.calculateAge(this.birthday) > 80 ||
      !this.userBirthDayRegex
    ) {
      this.userBirthDayRegex = false;
    }
  }
  public checkUserCodeMeli(e: Event) {
    this.codemeli = (<HTMLInputElement>e.target).value;
    this.userCodeMeliRegex = this.tenCharRegex.test(
      (<HTMLInputElement>e.target).value
    );
  }
  // check user data for regexs
  // check user data for accept user
  public register(
    userName: string,
    userEmail: string,
    userBirthDay: string,
    userCodeMeli: string,
    password: string
  ) {
    if (userName && userEmail && userBirthDay && userCodeMeli && password) {
      this.person.name = userName;
      this.person.email = userEmail;
      this.person.birthday = userBirthDay;
      this.person.password = password;
      this.person.codeMeli = userCodeMeli;
      this.person.id = this.user.length + 1;
      this.user.push(this.person);
    }
  }
  // check user data for accept user
  // check user data for login
  public login(email: string, password: string) {
    this.foundUser = false;
    this.user.forEach((user) => {
      if (user.email === email && user.password === password) {
        this.foundUser = true;
        this.router.navigate(['/doorInfo']);
      }
    });
  }
  // check user data for login
  // const loginBtn = document.querySelector(".loginBtn");
  // @ViewChild('loginBtn') loginBtn!: ElementRef;
  // const submitBtn = document.querySelector(".submitBtn");
  // const userName = document.querySelector(".userName");
  // @ViewChild('userName') userName!: ElementRef;
  // const userEmail = document.querySelector(".email");
  // const userPass = document.querySelector(".pass");
  // const userBirthday = document.querySelector(".birthday");
  // const userCodeMeli = document.querySelector(".codeMeli");
  // const loginUserEmail = document.querySelector(".loginEmail");
  // const loginUserPass = document.querySelector(".loginPass");

  // const formContainer = this.userName.parentNode;
  // const loginFormContainer = loginUserEmail.parentNode;

  // $(document).ready(function () {
  //   $("#signUp").click(function () {
  //     $("#container").addClass("right-panel-active");
  //   });
  //   $("#signIn").click(function () {
  //     $("#container").removeClass("right-panel-active");
  //   });
  // });
  // const haveAtLeastOneNumber = /\d/;
  // const tenCharRegex = /^.{10,10}$/;
  // const haveAtLeastOneAlphabet = /[a-z]/;
  // const notEmptyInput = /^[^]+$/;

  // const passRegex = new RegExp(
  //   `^(?=.*${haveAtLeastOneNumber.source})(?=.*${ThreeCharsRegex.source})(?=.*${haveAtLeastOneAlphabet.source})`
  // );

  // submitBtn.addEventListener("click", function () {
  //   function calculateAge(dateString) {
  //     var date = new Date(dateString);
  //     var today = new Date();
  //     var year = today.getFullYear() - date.getFullYear();
  //     var month = today.getMonth() - date.getMonth();
  //     var day = today.getDate() - date.getDate();
  //     console.log(dateString);
  //     if (month < 0 || (month === 0 && day < 0)) {
  //       year--;
  //     }
  //     return year;
  //   }
  //   var age = calculateAge(userBirthday.value);

  //   const userNameRegex = ThreeCharsRegex.test(userName.value);
  //   const userPassRegex = passRegex.test(userPass.value);
  //   const userEmailRegex = notEmptyInput.test(userEmail.value);
  //   const userCodeMeliRegex = tenCharRegex.test(userCodeMeli.value);
  //   const userBirthdayRegex = notEmptyInput.test(userBirthday.value);
  //   let errorDiv;

  //   if (!userNameRegex) {
  //     if (!document.querySelector(".userNameError")) {
  //       errorDiv = document.createElement("div");
  //       errorDiv.setAttribute("class", "incorrecterror userNameError");
  //       errorDiv.innerHTML = "نام کاربری باید حداقل 3 و حداکثر 15 کاراکتر باشد";
  //       formContainer.insertBefore(errorDiv, userName.nextSibling);
  //     }
  //   } else {
  //     errorDiv = document.querySelector(".userNameError");
  //     if (errorDiv) {
  //       errorDiv.remove();
  //     }
  //   }

  //   if (!userEmailRegex) {
  //     if (!document.querySelector(".userEmailError")) {
  //       errorDiv = document.createElement("div");
  //       errorDiv.setAttribute("class", "incorrecterror userEmailError");
  //       errorDiv.innerHTML = "ایمیل اجباری است و نمیتوان آن را خالی گذاشت";
  //       formContainer.insertBefore(errorDiv, userEmail.nextSibling);
  //     }
  //   } else {
  //     errorDiv = document.querySelector(".userEmailError");
  //     if (errorDiv) {
  //       errorDiv.remove();
  //     }
  //   }

  //   if (!userPassRegex) {
  //     if (!document.querySelector(".userPassError")) {
  //       errorDiv = document.createElement("div");
  //       errorDiv.setAttribute("class", "incorrecterror userPassError");
  //       errorDiv.innerHTML = "کلمه عبور باید ترکیبی از حروف و عدد باشد";
  //       formContainer.insertBefore(errorDiv, userPass.nextSibling);
  //     }
  //   } else {
  //     errorDiv = document.querySelector(".userPassError");
  //     if (errorDiv) {
  //       errorDiv.remove();
  //     }
  //   }

  //   if (age < 18 || age > 80 || !userBirthdayRegex) {
  //     if (!document.querySelector(".userBirthDayError")) {
  //       errorDiv = document.createElement("div");
  //       errorDiv.setAttribute("class", "incorrecterror userBirthDayError");
  //       errorDiv.innerHTML = "سن شما باید بیشتر از 18 و حداکثر 80 باشد";
  //       formContainer.insertBefore(errorDiv, userBirthday.nextSibling);
  //     }
  //   } else {
  //     errorDiv = document.querySelector(".userBirthDayError");
  //     if (errorDiv) {
  //       errorDiv.remove();
  //     }
  //   }

  //   if (!userCodeMeliRegex) {
  //     if (!document.querySelector(".userCodeMeliError")) {
  //       errorDiv = document.createElement("div");
  //       errorDiv.setAttribute("class", "incorrecterror userCodeMeliError");
  //       errorDiv.innerHTML = "کد ملی باید دقیقا 10 کاراکتر باشد";
  //       formContainer.insertBefore(errorDiv, userCodeMeli.nextSibling);
  //     }
  //   } else {
  //     errorDiv = document.querySelector(".userCodeMeliError");
  //     if (errorDiv) {
  //       errorDiv.remove();
  //     }
  //   }

  //   if (
  //     userNameRegex &&
  //     userPassRegex &&
  //     userEmailRegex &&
  //     userCodeMeliRegex &&
  //     userBirthdayRegex &&
  //     age > 18 &&
  //     age < 80
  //   ) {
  //     var alertBox = document.getElementById("alert-box");
  //     alertBox.classList.add("show");
  //     alertBox.innerHTML = "ثبت نام شما با موفقیت انجام شد";
  //     setTimeout(function () {
  //       alertBox.classList.remove("show");
  //     }, 2000);
  //   }
  // });
  // loginBtn.addEventListener("click", function () {
  //   let foundUser = false;
  //   users.forEach(function (user) {
  //     if (
  //       user.email === loginUserEmail.value &&
  //       user.password === loginUserPass.value
  //     ) {
  //       if (document.querySelector(".loginUserPass")) {
  //         logineErrorDiv.remove();
  //       }
  //       foundUser = true;
  //       var alertBox = document.getElementById("alert-box");
  //       alertBox.classList.add("show");
  //       alertBox.innerHTML = "salam " + user.Name + " khosh amadid";
  //       setTimeout(function () {
  //         alertBox.classList.remove("show");
  //       }, 2000);
  //     }
  //   });
  //   if (!foundUser) {
  //     if (!document.querySelector(".loginUserPass")) {
  //       logineErrorDiv = document.createElement("div");
  //       logineErrorDiv.setAttribute("class", "incorrecterror loginUserPass");
  //       logineErrorDiv.innerHTML = "ایمیل یا کلمه عبور اشتباه است";
  //       loginFormContainer.insertBefore(
  //         logineErrorDiv,
  //         loginUserPass.nextSibling
  //       );
  //     }
  //   }
  // });
}
