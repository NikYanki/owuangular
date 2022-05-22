import {Component, Input, OnInit} from '@angular/core';
import {IAlbums} from "../../models/albums-interface";
import {AlbumsService} from "../../service/albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums:IAlbums[];

  constructor(private AlbumsService:AlbumsService) { }

  ngOnInit(): void {
    this.AlbumsService.getAllAlbums().subscribe(albums=>this.albums=albums)
  }

}
