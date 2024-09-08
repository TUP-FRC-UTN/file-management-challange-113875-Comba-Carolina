import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileItem } from '../../../models/file.item.model';
import { CommonModule } from '@angular/common';
import { FileType } from './../../../models/file.item.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  ngOnInit(): void {
    this.listaDeArchivos();
  }

  @Input() files: FileItem[] = [];

  @Output() nuevoItem = new EventEmitter<Event>();

  filesTypeFolder: FileItem[] = [];
  filesTypeFile: FileItem[] = [];

  itemsSeleccionados: FileItem[] = [];

  listaDeArchivos() {
    for (let i = 0; i < this.files.length; i++) {
      if (this.files[i].type == FileType.FOLDER) {
        this.filesTypeFolder.push(this.files[i]);
        this.filesTypeFolder.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (this.files[i].type == FileType.FILE) {
        this.filesTypeFile.push(this.files[i]);
        this.filesTypeFile.sort((a, b) => a.name.localeCompare(b.name));
      }
    }
  }

  itemSeleccionado(item: FileItem) {
    const index = this.itemsSeleccionados.indexOf(item);
    if (index > -1) {
      this.itemsSeleccionados.splice(index, 1);
    } else {
      this.itemsSeleccionados.push(item);
    }
  }

  borrarItems() {
    if (this.itemsSeleccionados.length == 1) {
      this.removerItem(this.itemsSeleccionados[0]);
      this.itemsSeleccionados = [];
    }
    if (this.itemsSeleccionados.length > 1) {
      if (confirm('¿Desea borrar los archivos seleccionados?')) {
        this.itemsSeleccionados.forEach((item) => {
          this.removerItem(item);
        });
        this.itemsSeleccionados = [];
      }
    }
  }

  removerItem(item: FileItem) {
    this.filesTypeFolder.splice(this.filesTypeFolder.indexOf(item), 1);
    this.filesTypeFile.splice(this.filesTypeFile.indexOf(item), 1);
  }

  nuevoItemEmitter() {
    this.nuevoItem.emit();
  }
}
