import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OogstkaartService } from './oogstkaart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { Route, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';


const routes: Route[] = [
  {
    path: 'oogstkaart',
    component: ShopComponent,
  },
  {
    path: 'oogstkaart/:id',
    component: ItemComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProgressSpinnerModule
  ],
  providers:[OogstkaartService],
  declarations: [ShopComponent, ItemComponent],
  exports:[ShopComponent, ItemComponent]
})
export class OogstkaartModule { }
