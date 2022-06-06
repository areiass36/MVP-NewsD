import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "src/models/User";
import { UserService } from "src/services/user.service";

@Component({
    selector: 'nd-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    loginForm: FormGroup;

    constructor(private fb: FormBuilder,
        private userService: UserService,
        private router: Router) {

        this.loginForm = this.fb.group({
            email: this.fb.control('', [Validators.required]),
            password: this.fb.control('', [Validators.required])
        });
    }

    public login(): void {
        if (this.loginForm.valid) {
            const user: User = this.loginForm.value;

            this.userService.loginUser(user).subscribe(() => this.router.navigate(['/']));
        }
    }
}