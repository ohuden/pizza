import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import * as actions from "../pizza.actions";
import * as formPizza from "../pizza.reducer";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.css']
})
export class PizzaOrderComponent implements OnInit {

  pizzas: Observable<any>;

  constructor(private store: Store<formPizza.State>) { }

  ngOnInit() {
    this.pizzas = this.store.select(formPizza.selectAll)
  }
  createPizza() {
    const pizza: formPizza.Pizza = {
      id: new Date().getUTCMilliseconds().toString(),
      size: 'small'
    }
    this.store.dispatch(new actions.Create(pizza))
  }
  updatePizza(id, size) {
        this.store.dispatch(new actions.Update(id, {size: size}))
  }
  deletePizza(id) {
    this.store.dispatch(new actions.Delete(id))
}
}
