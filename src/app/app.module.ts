import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { WhoComponent } from './who/who.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { MapWrapperComponent } from './map-wrapper/map-wrapper.component';
import { SnapScrollComponent } from './snap-scroll/snap-scroll.component';
import { SnapScrollDirective } from './snap-scroll.directive';
import { RobothelloComponent } from './robothello/robothello.component';
import { HomeComponent } from './home/home.component';
import { FinadvisComponent } from './finadvis/finadvis.component';
import { DataanalComponent } from './dataanal/dataanal.component';
import { InvesComponent } from './inves/inves.component';
import { BuildComponent } from './build/build.component';
import { CommunityComponent } from './community/community.component';
import { NewPageComponent } from './new-page/new-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    WhoComponent,
    WorksComponent,
    ContactComponent,
    NavbarComponent,
    TestComponent,
    MapWrapperComponent,
    SnapScrollComponent,
    SnapScrollDirective,
    RobothelloComponent,
    HomeComponent,
    FinadvisComponent,
    DataanalComponent,
    InvesComponent,
    BuildComponent,
    CommunityComponent,
    NewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
