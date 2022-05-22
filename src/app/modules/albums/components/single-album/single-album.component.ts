import { Component, OnInit } from '@angular/core';
import {IAlbums} from "../../models/albums-interface";
import {AlbumsService} from "../../service/albums.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-album',
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.css']
})
export class SingleAlbumComponent implements OnInit {

  album:IAlbums
  constructor(private AlbumsService:AlbumsService,
              private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(({id})=>{

     this.AlbumsService.getSingleAlbum(id).subscribe(album =>this.album=album)});
  }

}
