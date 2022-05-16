import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";


import {IAlbums} from "../../../model_inrefaces/albums.interface";

@Component({
  selector: 'app-single-album-page',
  templateUrl: './single-album-page.component.html',
  styleUrls: ['./single-album-page.component.css']
})
export class SingleAlbumPageComponent implements OnInit {
album:IAlbums
  constructor(private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(value => {
      let {state:{data}}=history
      this.album=data as IAlbums
    })
  }

}
