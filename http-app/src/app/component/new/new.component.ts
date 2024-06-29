import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../services/post.service";
import {SnackBarService} from "../../services/snack-bar.service";
import Post from "../../dto/Post";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {

  /*constructor(private http:HttpClient,private _snackBar: MatSnackBar) {
  }*/
  constructor(private postService:PostService,private _snackBar: SnackBarService) {
  }

  form = new FormGroup({
    id:new FormControl('',[Validators.required,Validators.maxLength(5)]),
    userId:new FormControl('',Validators.required),
    title:new FormControl('',Validators.required),
    body:new FormControl('',Validators.required)
  });
  createData(){
    /*this.http.post<any>('https://jsonplaceholder.typicode.com/posts',{
      id:this.form.get('id')?.value,
      userId:this.form.get('userId')?.value,
      title:this.form.get('title')?.value,
      body:this.form.get('body')?.value
    })*/
    // this.postService.create(
    //   this.form.get('id')?.value,
    //   this.form.get('userId')?.value,
    //   this.form.get('title')?.value,
    //   this.form.get('body')?.value
    // )
    //   .subscribe(response=>{
    //     if (response){
    //       this._snackBar.trigger('Saved','close');
          /*this._snackBar.open('Saved','close',{
            horizontalPosition:'end',
            verticalPosition:'top',
            duration:5000,
            direction:'ltr'
          })*/
        //}
      //});

    let post=new Post(
      this.form.get('id')?.value!,
      this.form.get('userId')?.value!,
      this.form.get('title')?.value!,
      this.form.get('body')?.value!,
    );
  }

}
