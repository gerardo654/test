import { NgModule, ModuleWithProviders  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Angular material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

// components

import { PrincipalComponent } from './pages/principal/principal.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { DetailsComponent } from './shared/details/details.component';
import { HeadComponent } from './shared/head/head.component';
import { ContactComponent } from './pages/contact/contact.component';

// module contact form
import { ContactFormModule } from './pages/contact-form/contact-form.module';
import { environment } from '../environments/environment';

const configData = {
  url: environment.URL
};

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CarouselComponent,
    FooterComponent,
    WelcomeComponent,
    DetailsComponent,
    HeadComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MdbCarouselModule,
    MatDialogModule,
    MatToolbarModule,
    ContactFormModule.forRoot(configData)
  ],
  providers: [
    WelcomeComponent,
    DetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
