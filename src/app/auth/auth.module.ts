import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { UserService } from "./services/user.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        NativeScriptFormsModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthModule { }