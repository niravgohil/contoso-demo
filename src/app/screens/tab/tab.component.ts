import { Component, OnInit, OnDestroy } from "@angular/core";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { Router } from "@angular/router";

@Component({
    selector: "ns-tab",
    moduleId: module.id,
    templateUrl: "./tab.component.html",
    styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, OnDestroy {

    tabSelectedIndex = 0;

    todayDate = new Date();

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        if (args.oldIndex !== -1) {
            this.tabSelectedIndex = 0;
        }
        if (args.newIndex === 1) {
            this.router.navigate(["login"]);
        }
    }

    ngOnDestroy() {
        this.tabSelectedIndex = 0;
    }

}
