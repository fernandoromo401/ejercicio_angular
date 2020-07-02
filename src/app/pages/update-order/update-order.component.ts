import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Orders } from '../../class/orders.class';


@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

  public order: Orders;

  constructor(private orderService: OrdersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOrderbyId()
  }


  updateOrder(addresse, date, mail) {

    this.order = {
      id: this.order.id,
      addressee: addresse.value,
      mail: mail.value,
      date: date.value,
      products: this.order.products
    }
    this.orderService.update(this.order).then(
      data => {
        console.log(data)
        alert("Update successful!");
        this.router.navigate(["profile"])
      },
      err => {
        alert("Error");
      }
    )
  }


  getOrderbyId() {
    this.orderService.getById(parseInt(this.route.snapshot.paramMap.get("id"))).then(data => {
      this.order = data
    })
  }

}
