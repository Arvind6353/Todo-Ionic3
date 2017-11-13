import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';

/**
 * Generated class for the ArchivedtodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archivedtodo',
  templateUrl: 'archivedtodo.html',
})
export class ArchivedtodoPage {

  archivedTodos = [];
  constructor(public todoProvider : TodoProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArchivedtodoPage');
    this.archivedTodos = this.todoProvider.getArchivedTodos();
  }

}
