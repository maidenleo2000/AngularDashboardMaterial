import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Product } from '../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  //? ANTES con Input
  // @Input({required: true})
  // public product!: Product

  //?AHORA CON input se hace de esta forma SIN decorador
  public product = input.required<Product>();

  //?ANTES con OUTPUT
  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>();

  //?AHORA con output se hace de esta forma SIN decorador
  public onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

  public loginEffect = effect(() =>{
    console.log(this.product().name)
  })
}
