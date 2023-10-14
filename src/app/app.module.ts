import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {ProductsModule} from "./views/products/products.module";
// import {MainModule} from "./views/main/main.module";
// import {OrderModule} from "./views/order/order.module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {NavbarComponent} from "./shared/layout/navbar/navbar.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import { LayoutComponent } from './views/layout.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
