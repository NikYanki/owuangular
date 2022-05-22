import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlbumsService} from "./service/albums.service";
import {AlbumsComponent} from "./components/albums/albums.component";
import {HttpClientModule} from "@angular/common/http";
import {SingleAlbumComponent} from "./components/single-album/single-album.component";

const routes: Routes = [
  {path: '', component: AlbumsComponent, children:[
      {path: 'albums/:id', component: SingleAlbumComponent}
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule],
  exports: [RouterModule],
  providers: [AlbumsService]
})
export class AlbumsRoutingModule {
}
