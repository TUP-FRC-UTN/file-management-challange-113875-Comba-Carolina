export class FileItem {
  id: string;
  name: string;
  creation?: Date;
  owners: FileOwner[];
  type?: FileType;
  parentId?: string;

  constructor() {
    this.owners = [];
    this.id = '';
    this.name = '';
  }
}

export class FileOwner {
  name: string;
  avatarUrl: string;

  constructor() {
    this.name = '';
    this.avatarUrl = '';
  }
}

export enum FileType {
  FOLDER,
  FILE,
}