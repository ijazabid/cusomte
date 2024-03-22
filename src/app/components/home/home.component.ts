import { Component, OnInit } from '@angular/core';
import { OrginalApiService } from '../../services/orginal-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  responseData: any;

  constructor(private apiService: OrginalApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      (response: any) => {
        
        this.responseData = response;
        console.log('Response data:', this.responseData);
      },
      (error: any) => {
        
        console.error('Error:', error);
      }
    );
  }

  // simulate401(): void {
  //   this.apiService.simulate401().subscribe(
  //     () => { },
  //     (error) => {
  //       console.error('Simulated 401 Error:', error);
  //     }
  //   );
  // }

  // simulate403(): void {
  //   this.apiService.simulate403().subscribe(
  //     () => { },
  //     (error) => {
  //       console.error('Simulated 403 Error:', error);
  //     }
  //   );
  // }



}
