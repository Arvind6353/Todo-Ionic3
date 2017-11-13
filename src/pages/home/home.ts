import { Component } from "@angular/core";
import {
  NavController,
  reorderArray,
  ItemSliding,
  AlertController,
  ToastController
} from "ionic-angular";
import { TodoProvider } from "../../providers/todo/todo";
import { ArchivedtodoPage } from "../archivedtodo/archivedtodo";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  todos: string[] = [];
  allowReorder = false;

  constructor(
    public alertController: AlertController,
    public todoProvider: TodoProvider,
    public navCtrl: NavController,
    public toastCtrl : ToastController
  ) {
    this.todos = this.todoProvider.getTodos();
  }

  toggleReorder() {
    this.allowReorder = !this.allowReorder;
  }

  reorderItems($event) {
    reorderArray(this.todos, $event);
  }

  addTodo(todo: string) {
    this.todoProvider.addTodo(todo);
  }

  archiveTodo(todo: string, todoIndex: number, slidingItem: ItemSliding) {
    this.todoProvider.archiveTodo(todo, todoIndex);
    slidingItem.close();
    let deleteTodoToast = this.toastCtrl.create({
      message: "Todo Deleted Successfully!",
      duration: 2000
    });
    deleteTodoToast.present();
  }

  openTodoAlert() {
    let todoAlert = this.alertController.create({
      title: "Add Todo",
      message: "Enter text to add Todo",
      inputs: [
        {
          name: "todoText",
          placeholder: "Enter Todo"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Add",
          handler: inputData => {
            this.todoProvider.addTodo(inputData.todoText);

            todoAlert.onDidDismiss(()=> {
                let addTodoToast = this.toastCtrl.create({
                message: "Todo Added Successfully!",
                duration: 2000
              });
              addTodoToast.present();
            });

          }
        }
      ]
    });
    todoAlert.present();
  }

  goToArchivePage() {
    this.navCtrl.push(ArchivedtodoPage);
  }

  editTodo(todo: string, todoIndex: number, slidingItem: ItemSliding) {

    let editTodoAlert = this.alertController.create({
      title: "Edit Todo",
      message: "Modify the text to edit todo",
      inputs: [
        {
          name: "todoText",
          placeholder: "Enter Todo",
          value : todo
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Edit",
          handler: inputData => {
            this.todoProvider.editTodo(inputData.todoText, todoIndex);

            editTodoAlert.onDidDismiss(()=> {
                let editTodoToast = this.toastCtrl.create({
                message: "Todo Edited Successfully!",
                duration: 2000
              });
              editTodoToast.present();
            });
          }
        }
      ]
    });
    editTodoAlert.present();
    slidingItem.close();
  }
}
