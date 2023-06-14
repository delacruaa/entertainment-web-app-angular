import { Component, OnInit } from '@angular/core';
import { IFilms } from 'src/app/models/IFilms';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit{
  films!:IFilms[]
  loading= false
  errorMessage=''
  regularFIlms!:IFilms[]
  constructor(private filmsService:FilmsService) {}
  ngOnInit(): void {
    this.loading= true
    this.filmsService.getFilmsList().subscribe(
      (data)=> {
      //@ts-ignore
      this.films =data
      this.regularFIlms=this.films.filter(item=>item.category=="TV Series")
      this.loading= false
    }, (error)=> {
      this.errorMessage='Something went wrong... try later'
      this.loading= false
    })
  }
}
