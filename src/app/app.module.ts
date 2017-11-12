import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { YourAccountComponent } from './your-account/your-account.component';
import { AccountFormComponent } from './forms/account-form/account-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountFormComponent,
    YourAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
