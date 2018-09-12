import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,   
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
