import { Component, Input, OnInit } from '@angular/core';
import { data } from '../../data/dataFake'

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})

export class SmallCardComponent implements OnInit{
  @Input() Id: string = "0"

  photoCover: string = ""
  cardTitle: string = ""

  constructor() {}

  ngOnInit(): void {
    const int_id = parseInt(this.Id)
    const result = data.filter(article => article.id == int_id)[0]

    if (result) {
      this.photoCover = result.photo
      this.cardTitle = result.title
    }
  }

}
