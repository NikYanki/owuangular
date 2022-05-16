import { Component, OnInit } from '@angular/core';


import {AlbumsService} from "../../../services/albums.service";
import {IAlbums} from "../../../model_inrefaces/albums.interface";

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.css']
})
export class AlbumsPageComponent implements OnInit {

  albums:IAlbums[]

  constructor(private AlbumsService: AlbumsService) {
    AlbumsService.getAllAlbums().subscribe(albums=>this.albums=albums)
  }

  ngOnInit(): void {
  }

}
