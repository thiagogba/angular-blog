import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router ) {
      
    this.activeRoute.params.subscribe(
      res => {
        if (res['id']) console.log(`id: ${res['id']}`, '\n');
        if (res['token']) console.log(`token: ${res['token']}`, '\n');
      }
    )

    this.activeRoute.firstChild?.params.subscribe(
      res => {
        if (res['id']) console.log(`id: ${res['id']}`, '\n');
        if (res['token']) console.log(`token: ${res['token']}`, '\n');
      }
    )

    this.activeRoute.firstChild?.queryParams.subscribe(
      res => {
        if (res['name']) console.log(`name: ${res['name']}`, '\n');
        if (res['token']) console.log(`token: ${res['token']}`, '\n');
      }
    )
  }

  ngOnInit(): void {
    /* setInterval(() => {
      this.navegador.navigate(['/title'])
    }, 5000) */
  }
}
