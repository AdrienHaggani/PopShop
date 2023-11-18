//Methode vanilla pour faire un constructeur
// export class TopShopComponent{
//   title!: string;
//   description!: string;
//   createdDate!: Date;
//   snaps!: number;
//   imageURL!: string;

//   constructor(title: string, description: string, createdDate: Date, snaps: number, imageURL: string){
//     this.title = title;
//     this.description = description;
//     this.createdDate = createdDate;
//     this.snaps = snaps;
//     this.imageURL = imageURL;
//   }
// }

export class TopShopComponent{
  constructor(
  public snaps: number,
  public buttonText: string,
  public title: string,
  public description: string,
  public createdDate: Date,
  public imageURL: string) {

  }

}
