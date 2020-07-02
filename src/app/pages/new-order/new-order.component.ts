import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { OrdersService } from 'src/app/services/orders.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  public orderForm = this.formBuilder.group({
    date: [],
    addressee: [''],
    mail: [''],
    products: this.formBuilder.array([])
  });

  constructor(private formBuilder: FormBuilder, private orderService: OrdersService, private router: Router) {

  }
  ngOnInit(): void {
  }

  get date() {
    return this.orderForm.get('date');
  }

  get addressee() {
    return this.orderForm.get('addressee');
  }

  get mail() {
    return this.orderForm.get('mail');
  }

  get products() {
    return this.orderForm.get('products') as FormArray;
  }

  addProduct() {
    const product = this.formBuilder.group({
      name: '',
      quantity: ''
    });
    this.products.push(product);
  }

  removeProduct(indice: number) {
    this.products.removeAt(indice);
  }

  saveOrder() {
    this.orderService.save(this.orderForm.value).then(
      data => {
        alert("Save successful!");
        this.router.navigate(["profile"])
      },
      err => {
        alert("Error");
        this.refresh()
      }
    )
  }

  refresh() {
    this.orderForm.patchValue({
      date: '',
      addressee: '',
      mail: '',
    });
    this.products.controls.splice(0, this.products.length);
  }



}