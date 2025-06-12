import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { Knob } from 'primeng/knob';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [Menu, ImageModule, ButtonModule, CardModule, DividerModule, 
    Knob, FormsModule]
})
export class AppComponent {
  title = 'port';

  items: MenuItem[] | undefined;

  html: number = 80;
  javaScript: number = 95;
  typeScript: number = 90;
  cSharp: number = 90;
  python: number = 75;

  mySql: number = 90;
  mongoDB: number = 70;

  angular: number = 95;
  django: number = 70;
  nodeJs: number = 90;

  VisualStudio: number = 70;
  VisualStudioCode: number = 95;
  PostGreSQL: number = 85;
  git: number = 70;

  adobePhotoshop: number = 65;
  VegasPro: number = 85;
  Unity: number = 90;

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: PrimeIcons.HOME, command: () => this.scrollToSection('section-1')},
      { label: 'Perfil', icon: PrimeIcons.USER, command: () => this.scrollToSection('section-2')},
      { label: 'Portafolio', icon: PrimeIcons.BRIEFCASE, command: () => this.scrollToSection('section-3')},
      { label: 'Habilidades', icon: PrimeIcons.STAR_FILL, command: () => this.scrollToSection('section-4')},
      { label: 'Contacto', icon: PrimeIcons.PHONE, command: () => this.scrollToSection('section-5')}
    ];
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'public/Curriculum Andres Mora ING.pdf' // Ruta al archivo PDF
    link.download = 'CV Andres Mora.pdf'; // Nombre del archivo al descargar
    link.click();
    link.remove();
  }

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
