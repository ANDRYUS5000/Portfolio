import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [Menu]
})
export class AppComponent {
  title = 'port';

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'New', icon: 'pi pi-plus' },
            { label: 'Search', icon: PrimeIcons.SEARCH },
            { label: 'Delete', icon: PrimeIcons.TRASH, disabled: true },
        ];
    }
}
