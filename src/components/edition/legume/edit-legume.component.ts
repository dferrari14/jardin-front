import {  Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 

@Component({
  standalone: true,
  selector: 'app-edit-legume-jardin',
  templateUrl: './edit-legume.component.html',
  styleUrls: ['./edit-legume.component.scss']
})
export class EditLegumeComponent implements OnInit {
  idLegume:number;
 

  constructor(private route: ActivatedRoute,private router: Router) { 
    console.log("constructeur EditLegumeComponent");
    this.idLegume=0;
 
  }

   
  ngOnInit(): void {
    console.log("ngOnInit EditLegumeComponent");
    
  }

   

   
}