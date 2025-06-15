import { Component, HostListener } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { Knob } from 'primeng/knob';
import { FormsModule } from '@angular/forms';
import { DrawerModule } from 'primeng/drawer';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  // encapsulation: ViewEncapsulation.None,
  imports: [Menu, ImageModule, ButtonModule, CardModule, DividerModule, 
    Knob, FormsModule, DrawerModule]
})
export class AppComponent {
  title = 'port';

  items: MenuItem[] | undefined;
  pdvisible: boolean = false;

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

  sectionIds = [
    'section-1',
    'section-2',
    'section-3',
    'section-4',
    'section-5'
  ];

  currentSectionIndex = 0;
  isScrolling = false;
  displaypd: boolean = true

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: PrimeIcons.HOME, command: () => this.scrollToSection('section-1')},
      { label: 'Perfil', icon: PrimeIcons.USER, command: () => this.scrollToSection('section-2')},
      { label: 'Portafolio', icon: PrimeIcons.BRIEFCASE, command: () => this.scrollToSection('section-3')},
      { label: 'Habilidades', icon: PrimeIcons.STAR_FILL, command: () => this.scrollToSection('section-4')},
      { label: 'Contacto', icon: PrimeIcons.PHONE, command: () => this.scrollToSection('section-5')}
    ];

    if (typeof window !== 'undefined') {
      this.displaypd != window.innerWidth >= 1200; // Mostrar el panel de habilidades en pantallas pequeñas
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1200) {
          this.displaypd = false; // Ocultar el panel de habilidades en pantallas pequeñas
        }
        else {
          this.displaypd = true; // Mostrar el panel de habilidades en pantallas pequeñas
        }
      });
    }
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'public/Curriculum Andres Mora ING.pdf' // Ruta al archivo PDF
    link.download = 'CV Andres Mora.pdf'; // Nombre del archivo al descargar
    link.click();
    link.remove();
  }

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (this.isScrolling) return;
    const direction = event.deltaY > 0 ? 1 : -1;
    let newIndex = this.currentSectionIndex + direction;
    newIndex = Math.max(0, Math.min(this.sectionIds.length - 1, newIndex));
    if (newIndex !== this.currentSectionIndex) {
      this.currentSectionIndex = newIndex;
      this.scrollToSection(this.sectionIds[this.currentSectionIndex]);
    }
  }

  scrollToSection(sectionId: string) {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const el = document.getElementById(sectionId);
      if (el instanceof HTMLElement) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`No se encontró el elemento con id: ${sectionId}`);
      }
    }
  }

  ngAfterViewInit() {
    this.updateCurrentSectionIndex();
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.updateCurrentSectionIndex.bind(this));
    }
  }

  updateCurrentSectionIndex() {
    for (let i = 0; i < this.sectionIds.length; i++) {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const el = document.getElementById(this.sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            this.currentSectionIndex = i;
            break;
          }
        }
      }
    }
  }
}
