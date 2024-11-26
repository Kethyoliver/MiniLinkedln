import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { HeaderComponent } from './header/header.component';
import { CurriculoPerfilComponent } from './curriculo/curriculo-perfil/curriculo-perfil.component';
import { CurriculoSobreComponent } from './curriculo/curriculo-sobre/curriculo-sobre.component';
import { CurriculoExperienciaComponent } from './curriculo/curriculo-experiencia/curriculo-experiencia.component';
import { CurriculoFormacaoComponent } from './curriculo/curriculo-formacao/curriculo-formacao.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FeedComponent } from './feed/feed.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CurriculoComponent,
    HeaderComponent,
    CurriculoPerfilComponent,
    CurriculoSobreComponent,
    CurriculoExperienciaComponent,
    CurriculoFormacaoComponent,
    FeedComponent,
    ChatComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }