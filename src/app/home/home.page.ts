import { Component, OnInit } from "@angular/core";
import { AdmobService } from "src/services/admob/admob.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private admobService: AdmobService) {}

  onShowInterstitial() {
    this.admobService.showInterstitialAd();
  }
}
