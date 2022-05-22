import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IAlbums} from "../../models/albums-interface";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
@Input()
  album:IAlbums
  constructor(private Router: Router,
              private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Router.navigate([this.album.id],{relativeTo: this.ActivatedRoute})
  }

}
