import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

import { VCard } from "ngx-vcard";

@Component({
  selector: 'ed-burns-selector',
  templateUrl: './ed-burns.component.html',
  styleUrls: ['./ed-burns.component.scss']
})
export class EdBurnsComponent implements OnInit {
  constructor(public imageService: ImageService) {}

  firstName = "Edward";
  lastName = "Burns";

  occupation = "Inside Sales Rep";
  phoneNumber = "678-483-7310";
  email = "edward.burns@lightstream.tech";

  website = `www.lightstream.tech`;

  note = `vCard's first official prototype model`;

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
    url: this.website,
    note: this.note
  };

  public goToForm() {
    window.open(`https://forms.gle/SBqvsStZRe8oEQQD9`, "_blank");
  }

  public goToWebsite() {
    window.open(`${this.website}`, "_blank");
  }

}