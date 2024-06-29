import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../services/post.service";
import {SnackBarService} from "../../services/snack-bar.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  list:Array<any>=[];

  /*constructor(private postService:PostService,private http:HttpClient,private _snackBar: MatSnackBar ) {
  }*/
  constructor(private postService:PostService,private _snackBar: SnackBarService ) {
  }
  ngOnInit(): void {

    /*this.postService.findAll()
      .subscribe(response=>{
        console.log(response);
        this.list=response;
        console.log(this.list)
      });*/

    // this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
    //   .subscribe(response=>{
    //     console.log(response);
    //     this.list=response;
    //     console.log(this.list)
    //   });
  }

  delete(id:any) {
    if(confirm('are you sure '+id)){
      //this.http.delete<any>('https://jsonplaceholder.typicode.com/posts/'+id)
      /*this.postService.delete(id)
        .subscribe(response=>{
         if (response){
           this._snackBar.trigger('Deleted','close');*/

           /*this._snackBar.open('Deleted','close',{
             horizontalPosition:'end',
             verticalPosition:'top',
             duration:5000,
             direction:'ltr'
           });*/

          /* for (let i=0; i<this.list.length; i++){
             if(this.list[i].id==id){
               this.list.splice(i,1);
               return;
             }
           }

         }
        });*/
    }
  }
}
