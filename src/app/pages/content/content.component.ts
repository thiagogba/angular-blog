import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent implements OnInit {
  photoCover: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  private id: string = "0"

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => {
        const temp_val = value.get("id")
        if (temp_val) {
          this.id = temp_val
        }
      }
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string) {
    const int_id: number = parseInt(id)
    const result = data.filter(article => article.id == int_id)[0]

    if (result) {
      this.photoCover = result.photo
      this.contentTitle = result.title
      this.contentDescription = result.description
    }
  }
}
