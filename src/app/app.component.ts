import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [Menu, ImageModule, ButtonModule, CardModule]
})
export class AppComponent {
  title = 'port';

  items: MenuItem[] | undefined;

    ngOnInit() {
      this.items = [
        { label: 'Inicio', icon: PrimeIcons.HOME, href: '#section-1' },
        { label: 'Perfil', icon: PrimeIcons.USER, href: '#section-2' },
        { label: 'Portafolio', icon: PrimeIcons.BRIEFCASE, href: '#section-3' },
        { label: 'Educacion', icon: PrimeIcons.GRADUATION_CAP, href: '#section-4' },
        { label: 'Habilidades', icon: PrimeIcons.STAR_FILL, href: '#section-5' },
        { label: 'Contacto', icon: PrimeIcons.PHONE, href: '#section-6' },
      ];
    }

    downloadCV() {
      const link = document.createElement('a');
      link.href = 'public/Curriculum Andres Mora ING.pdf' // Ruta al archivo PDF
      link.download = 'CV Andres Mora.pdf'; // Nombre del archivo al descargar
      link.click();
      link.remove();
    }
}
