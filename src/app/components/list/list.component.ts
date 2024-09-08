import { FileOwner } from './../../../models/file.item.model';
import { Component, Input } from '@angular/core';
import { FileItem } from '../../../models/file.item.model';
import { CommonModule } from '@angular/common';
import { FILE_LIST } from '../../../data/file.storage';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() files: FileItem[] = [];

}
