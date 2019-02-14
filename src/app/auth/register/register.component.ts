import { Component, OnInit, OnDestroy } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";
import { UserModel, UserPostModel, UserMetaDataModel } from "../model/user.model";
import { AuthODetail } from "~/app/config/api";
import { UserService } from "../services/user.service";

@Component({
    selector: "ns-register",
    moduleId: module.id,
    templateUrl: "./register.component.html",
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {


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
        this._page.actionBarHidden = false;
    }

    public goBack() {
        this.router.navigate(["/login"]);
    }


    submit() {
        if (this.user.username === undefined || this.user.username === '') {
            alert("Please enter user name");
        }
        else if (this.user.email === undefined || this.user.email === '') {
            alert("Please enter email");
        } else if (this.user.password === undefined || this.user.password === '') {
            alert("Please enter password");
        } else {
            this.isSubmitButtonClicked = true;

            const userPostData = new UserPostModel({});

            const userMetaDeta = new UserMetaDataModel({});
            userMetaDeta.username = this.user.username;


            userPostData.client_id = AuthODetail.clientID;
            userPostData.connection = AuthODetail.connection;
            userPostData.email = this.user.email;
            userPostData.password = this.user.password;
            userPostData.user_metadata = userMetaDeta;

            console.log(JSON.stringify(userPostData));

            this.userService.register(userPostData).subscribe((res) => {
                this.router.navigate(["/screens"]);
                setTimeout(() => {
                    this.isSubmitButtonClicked = false;
                }, 500);

            }, error => {
                this.isSubmitButtonClicked = false;
                console.error("Error While Register User => ", JSON.stringify(error));
                alert(error.error.error_description);
            });
        }
    }

    ngOnDestroy() {
        this.isSubmitButtonClicked = false;
    }
}
