export class FileItem {
  id: string;
  name: string;
  creation: Date;
  owners: FileOwner[];
  type: FileType;
  parentId?: string;

  constructor() {
    this.owners = [];
    this.creation = new Date();
    this.type = FileType.FILE;
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
