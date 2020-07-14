import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    const usr = 'user';
    this.route.data.subscribe(data => {
      this.user = data[usr];
    });
  }
}
