import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-c-header',
  templateUrl: './c-header.component.html',
  styleUrls: ['./c-header.component.scss'],
})


export class CHeaderComponent  implements OnInit {


  @Input() titulo!: string;

  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
    }

  ngOnInit() {}

}
