import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { fadeInUpAnimation } from '../../../../@fury/animations/fade-in-up.animation';
import {ApiClientService} from "../../../service/api-client.service";
import {environment} from "../../../../environments/environment";
import {SidenavService} from "../../../layout/sidenav/sidenav.service";

@Component({
  selector: 'fury-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInUpAnimation]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  inputType = 'password';
  visible = false;

  constructor(private router: Router,
              private cd: ChangeDetectorRef,
              private apiService: ApiClientService,
              private sidenavService: SidenavService) {}

  ngOnInit() {
    this.form = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  send() {
    const login = this.form.value
    console.info(environment.backend + environment.apiLogin)
    this.apiService.postRequest(environment.apiLogin, {username: login.usuario, password: login.password})
      .subscribe({
        next: ({data}) => {
          localStorage.setItem('auth', JSON.stringify(data))
          this.sidenavService.reloadResources();
          this.router.navigate([''])
          // this.apiService.getRequest('/api/v1/user/user-resource-list', {'Authorization': `Bearer ${token}`})
          //   .subscribe({
          //     next: ({data}) => {
          //       console.info(data)
          //       // this.router.navigate([''])
          //     },
          //     error: (error) => {
          //       console.error(error)
          //     }
          //   })
        },
        error: (error) => {
          console.error(error)
        }
      })

  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
