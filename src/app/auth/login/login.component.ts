import { Component, OnInit, OnDestroy } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";
import { UserModel, UserPostModel, UserMetaDataModel, LoginPostModel } from "../model/user.model";
import { AuthODetail } from "~/app/config/api";

import { UserService } from "../services/user.service";


@Component({
    selector: "ns-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    user: UserModel = new UserModel({});
    page: Page;

    isSubmitButtonClicked = false;

    constructor(
        private _page: Page,
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.isSubmitButtonClicked = false;
        this._page.actionBarHidden = true;

    }

    submit() {
        if (this.user.username === undefined || this.user.username === '') {
            alert("Please enter user name");
        } else if (this.user.password === undefined || this.user.password === '') {
            alert("Please enter password");
        } else {
            this.isSubmitButtonClicked = true;

            const loginData = new LoginPostModel({});
            loginData.username = this.user.username.trim();
            loginData.password = this.user.password.trim();

            console.log(JSON.stringify(loginData));

            this.userService.login(loginData).subscribe((res) => {

                console.log("Response => " + JSON.stringify(res));

                this.router.navigate(["/screens"]);
                setTimeout(() => {
                    this.isSubmitButtonClicked = false;
                }, 500);

            }, error => {
                this.isSubmitButtonClicked = false;
                console.error("Error While Register User => ", JSON.stringify(error.error));
                alert(error.error.error_description);
            });
        }
    }

    goToRegister() {
        this.router.navigate(["/register"]);
    }

    ngOnDestroy() {
        this.isSubmitButtonClicked = false;
    }
}
