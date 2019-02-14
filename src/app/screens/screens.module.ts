import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ScreensRoutingModule } from "./screens-routing.module";
import { TabComponent } from "./tab/tab.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        ScreensRoutingModule
    ],
    declarations: [
        TabComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ScreensModule { }