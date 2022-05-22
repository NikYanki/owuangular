import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './components/albums/albums.component';
import { SingleAlbumComponent } from './components/single-album/single-album.component';
import { AlbumComponent } from './components/album/album.component';
import {PostsRoutingModule} from "../posts/posts-routing.module";


@NgModule({
  declarations: [
    AlbumsComponent,
    SingleAlbumComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    PostsRoutingModule
  ]
})
export class AlbumsModule { }
