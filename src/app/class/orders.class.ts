export class Orders {
  id: number;
  date: string;
  addressee: string;
  mail: string;
  products: Array<any>;

  constructor(id: number, date: string, addressee: string, mail: string, products: Array<any>) {
    this.id = id;
    this.date = date;
    this.addressee = addressee;
    this.mail = mail;
    this.products = products
  }
}
