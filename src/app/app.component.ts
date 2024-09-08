import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem, FileOwner } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
}
