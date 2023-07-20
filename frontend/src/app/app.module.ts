import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';
import { CardProdutoComponent } from './card-produto/card-produto.component'; // Certifique-se de ter o caminho correto aqui

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HeaderComponent,
    LayoutComponent,
    HomeComponent,
    CardProdutoComponent // Adicione o componente ao array "declarations"
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule,
    PaginatorModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
