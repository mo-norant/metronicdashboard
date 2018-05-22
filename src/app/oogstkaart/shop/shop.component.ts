import { OogstKaartItem } from './../../Utils/Models/models';
import { OogstkaartService } from './../oogstkaart.service';
import { Component, OnInit } from '@angular/core';
import { Utils } from '../../Utils/Util';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {


  items : OogstKaartItem[];
  root: string;
  categories = [];
  constructor(private service: OogstkaartService) { }

  ngOnInit() {
    this.service.getOogstkaartItems().subscribe(data => {
      this.items = data;
      this.getcategories(data);
      console.log(data);
    });

    this.root = Utils.getRoot().replace("/api", "");

  }


  mapview(){
    console.log("pressed")
  }

   getcategories(items: OogstKaartItem[]){
      items.forEach(item => {
        if(!this.categories.includes(item.category)){
            this.categories.push(item.category);
        }
      });
  }

}
