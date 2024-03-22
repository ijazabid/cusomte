import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {

  public getJsonvalue : any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.getMethod();
  }

  public getMethod() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data) =>{
      console.log("data ===>", data);
      this.getJsonvalue = data;
    })
  }

}
