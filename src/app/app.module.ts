import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"mybotulenh","appId":"1:354729627375:web:5b556b7627c3a64cac551a","storageBucket":"mybotulenh.appspot.com","apiKey":"AIzaSyD5ueE17-3oH404h4TGnNKfDej5fyXi1N8","authDomain":"mybotulenh.firebaseapp.com","messagingSenderId":"354729627375","measurementId":"G-058QENJJN4"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
