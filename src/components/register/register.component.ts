import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "src/models/User";
import { UserService } from "src/services/user.service";
import { CustomValidators } from "src/utils/CustomValidators";

@Component({
    selector: 'nd-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    registerForm: FormGroup;

    constructor(private fb: FormBuilder,
        private userService: UserService,
        private router: Router) {

        this.registerForm = this.fb.group({
            name: this.fb.control('', [Validators.required]),
            email: this.fb.control('', [Validators.required, Validators.email]),
            role: this.fb.control('', [Validators.required]),
            password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
            passwordRepeat: this.fb.control('', [Validators.required])
        },
            {
                validator: CustomValidators.mustMatch('password', 'passwordRepeat')
            });
    }

    register(): void {
        if (this.registerForm.valid) {
            const user: User = this.registerForm.value;

            this.userService.createUser(user).subscribe(() => {
                this.router.navigate(["/"]);
            })
        }
    }

}