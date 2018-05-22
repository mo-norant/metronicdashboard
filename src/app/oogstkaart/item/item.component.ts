import { OogstkaartService } from './../oogstkaart.service';
import { OogstKaartItem } from './../../Utils/Models/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utils } from '../../Utils/Util';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: OogstKaartItem;
  root: string;

  constructor(private route: ActivatedRoute, private service : OogstkaartService) { }

  ngOnInit() {

    this.root = Utils.getRoot().replace("/api", "");


    this.route.params.subscribe(data => {
      this.service.getItem(data['id']).subscribe(data => {
        this.item = data;
        console.log(data);
      })
    })
  }

}
