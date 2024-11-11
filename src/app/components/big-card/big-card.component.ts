import { Component, Input, OnInit } from '@angular/core';
import { data } from '../../data/dataFake'

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})

export class BigCardComponent implements OnInit {
  @Input() Id: string = ""

  photoCover: string = ""
  cardTitle: string = ""
  cardDescription: string = ""

  constructor() {}

  ngOnInit(): void {
    const int_id = parseInt(this.Id)
    const result = data.filter(article => article.id == int_id)[0]

    if (result) {
      this.photoCover = result.photo
      this.cardTitle = result.title
      this.cardDescription = result.description
    }
  }
}
