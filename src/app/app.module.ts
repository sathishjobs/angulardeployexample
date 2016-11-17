import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { S1Component } from './s1.component';
import { S2Component } from './s2.component';
import { DataService } from './data.service';
import { LogService } from './log.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { routing } from "./app.routing";
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';
import { UserDetailGuard } from "./user/user-detail.guard"; 
import { UserEditGuard } from "./user/user-edit.guard";
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { PipeComponent } from './pipe/pipe.component';
import { DoublePipe } from './pipe/double.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { HttpComponent } from './http/http.component';
import { HttpService } from "./http/http.service";
import { NgtutComponent } from './ngtut/ngtut.component';
import { Ngtut2Component } from './ngtut2/ngtut2.component';
import { CounterComponent } from './counter/counter.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    S1Component,
    S2Component,
    HomeComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    DataDrivenComponent,
    TemplateDrivenComponent,
    PipeComponent,
    DoublePipe,
    FilterPipe,
    HttpComponent,
    NgtutComponent,
    Ngtut2Component,
    CounterComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [HttpService,DataService,LogService,UserDetailGuard,UserEditGuard,DoublePipe,FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
