//
export class TopShopComponent{
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageURL!: string;

  constructor(title: string, description: string, createdDate: Date, snaps: number, imageURL: string){
    this.title = title;
    this.description = description;
    this.createdDate = createdDate;
    this.snaps = snaps;
    this.imageURL = imageURL;
  }
}
