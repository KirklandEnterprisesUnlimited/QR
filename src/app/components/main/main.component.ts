import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

import { VCard } from "ngx-vcard";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public imageService: ImageService) { }

  firstName = "Stephen";
  lastName = "Kirkland";

  occupation = "CEO and Founder of Kirkland Enterprises Unlimited, LLC";
  phoneNumber = "912-536-7419";
  email = "kirklandenterprisesunlimited@gmail.com";

  ngOnInit() {
  }

  public vCard: VCard = {
    name: {
      firstNames: this.firstName,
      lastNames: this.lastName,
    },
    telephone: [this.phoneNumber],
    email: [this.email],
    workEmail: [this.email],
    role: this.occupation,
    url: "https://BigMoneyKirk.github.io/QR/",
    sound: "../../assets/sounds/Stephen_Kirkland.m4a",
    logo: "../../assets/images/logos/KEU_Logo_FullColor.png",
    photo: "Li4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvcy9LRVVfTG9nb19GdWxsQ29sb3IucG5n",
    note: "Creator of the vCard (Virtual Business Card)"
  };

  public goToForm() {
    window.open(`https://docs.google.com/forms/d/e/1FAIpQLSe5K2m4nwe89oWBzhw2gkXpgIpufygNnPnR9g-46-dHfsAb0g/viewform?vc=0&c=0&w=1&flr=0`, "_blank");
  }

}
