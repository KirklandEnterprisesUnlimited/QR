import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public flamingo: string = "assets/images/people/flamingo.jpg";
  public profile: string = "assets/images/people/profile.jpg";
  public whiteShirt: string = "assets/images/people/meatbellasfuneral.jpg"
  public eddieB: string = "assets/images/people/eddie_b.jpg";

  constructor() { }
}
