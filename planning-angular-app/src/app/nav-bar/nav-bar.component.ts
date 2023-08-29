import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  profilePicture!: string;
  name!: string;
  firstName!: string;

  ngOnInit(): void{
    this.profilePicture = 'https://pbs.twimg.com/profile_images/1107089437/800px_400x400.jpg';
    this.name = 'Liszewski';
    this.firstName = 'Benjamin';
  }
}
