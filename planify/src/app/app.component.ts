import { ApplicationModule, Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';




@Component({
  selector: 'app-root',
  imports: [NavbarComponent,FooterComponent,HomeComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
}
