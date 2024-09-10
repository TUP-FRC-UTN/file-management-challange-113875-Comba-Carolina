import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileItem, FileOwner, FileType } from '../../../models/file.item.model';
import { FILE_LIST, OWNERS } from '../../../data/file.storage';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  @Output() volver = new EventEmitter();
  @Output() nuevoItem = new EventEmitter<FileItem>();

  ngOnInit(): void {
    this.cargarCombo();
  }

  file: FileItem = new FileItem();

  carpetasExistentes: FileItem[] = [];
  files: FileItem[] = FILE_LIST;

  duenios: FileOwner[] = OWNERS;
  dueniosSeleccionados: FileOwner[] = [];

  duenioSeleccionado: FileOwner = new FileOwner();

  constructor() {}

  cargarCombo() {
    for (let i = 0; i < this.files.length; i++) {
      if (this.files[i].type == FileType.FOLDER) {
        this.carpetasExistentes.push(this.files[i]);
      }
    }
  }

  agregarDuenio(duenio: FileOwner) {
    if (!this.dueniosSeleccionados.includes(duenio)) {
      this.dueniosSeleccionados.push(duenio);
    }
    this.file.owners = this.dueniosSeleccionados;
  }

  enviarForm(form: NgForm) {
    if (form.valid) {
      this.nuevoItem.emit();
      confirm('Guardado con exito');
    }
  }

  volverEmitter() {
    this.volver.emit();
  }

  quitarDuenio(duenio: number) {
    this.dueniosSeleccionados.splice(duenio, 1)
  }
}
