import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './src/app/home/home.component';
import { CadastroComponent } from './src/app/cadastro/cadastro.component';
import { ListaComponent } from './src/app/lista/lista.component';
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'lista', component: ListaComponent}
]

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);