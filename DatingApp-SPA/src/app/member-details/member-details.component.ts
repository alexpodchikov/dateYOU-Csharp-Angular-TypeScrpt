import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.loadUser();

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
    this.galleryImages = this.getImages();
  }

  // tslint:disable-next-line: typedef
  getImages(){
    const imageUrls = [];
    for (const photo of this.user.photos) {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description
      });
    }
    return imageUrls;
  }

  // tslint:disable-next-line: typedef
  loadUser() {
    this.userService.getUser(this.route.snapshot.params.id).subscribe((user: User) => {
      this.user = user;
    }, error => {
      this.alertify.error(error);
    });
  }

}
