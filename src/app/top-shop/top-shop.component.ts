import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-shop',
  templateUrl: './top-shop.component.html',
  styleUrls: ['./top-shop.component.scss']
})
export class TopShopComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageURL!: string;

  ngOnInit() {

  this.title = 'Lambena'
  this.description = 'Lambena le meilleur ennemi des point noirs !';
  this.createdDate = new Date();
  this.snaps = 6;
  this.imageURL = 'https://m.media-amazon.com/images/I/61lhze5owSL._SL1500_.jpg';
  }
}
