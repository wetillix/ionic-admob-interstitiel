import { Injectable } from "@angular/core";
import {
  AdMobFree,
  AdMobFreeInterstitialConfig,
} from "@ionic-native/admob-free/ngx";
import { Platform } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class AdmobService {
  RewardInterstitial: AdMobFreeInterstitialConfig = {
    isTesting: true, // Supprimez cette ligne une fois en production
    autoShow: false,
    // id: "ca-app-pub-3940256099942544/1033173712", // ID d'une régie interstitiel que vous devez créer. Décommentez cette ligne une fois en production.
  };
  constructor(private admobFree: AdMobFree, private platform: Platform) {
    this.platform.ready().then(() => {
      this.admobFree.interstitial.config(this.RewardInterstitial);
      this.admobFree.interstitial
        .prepare()
        .then(() => {})
        .catch((e) => {
          alert(JSON.stringify(e));
        });
    });

    this.admobFree
      .on(this.admobFree.events.INTERSTITIAL_CLOSE)
      .subscribe(() => {
        this.admobFree.interstitial
          .prepare()
          .then(() => {})
          .catch((e) => {});
      });
  }
  showInterstitialAd() {
    this.admobFree.interstitial
      .isReady()
      .then(() => {
        this.admobFree.interstitial
          .show()
          .then(() => {})
          .catch((e) => {});
      })
      .catch((e) => {});
  }
}
