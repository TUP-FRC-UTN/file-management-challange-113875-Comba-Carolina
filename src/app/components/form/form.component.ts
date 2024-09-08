import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    this.cargarCombo();
  }

  file: FileItem = new FileItem();

  carpetasExistentes: FileItem[] = [];
  files: FileItem[] = FILE_LIST;

  duenios: FileOwner[] = OWNERS;

  constructor() {}

  cargarCombo() {
    for (let i = 0; i < this.files.length; i++) {
      if (this.files[i].type == FileType.FOLDER) {
        this.carpetasExistentes.push(this.files[i]);
      }
    }
  }

  enviarForm(_t5: NgForm) {}
  agregarDuenio() {}
}
