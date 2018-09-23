import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // params for the path
  name = '';
  id;

  // route to give name to the link
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route)
    this.name = this.route.snapshot.params.name;
    this.id = this.route.snapshot.params.id;
  }

}
