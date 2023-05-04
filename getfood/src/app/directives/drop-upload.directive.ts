import {
  Directive,
  HostBinding,
  Output,
  HostListener,
  EventEmitter,
} from '@angular/core';

// Ref from https://medium.com/@tarekabdelkhalek/how-to-create-a-drag-and-drop-file-uploading-in-angular-78d9eba0b854

@Directive({
  selector: '[appDropUpload]'
})
export class DropUploadDirective {
  @HostBinding('class.file-over') fileOver: boolean;
  @Output() fileDropped = new EventEmitter<FileList>();
  @Output() folderDropped = new EventEmitter<any>();

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    this.fileOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    this.fileOver = false;
  }
  async parseDirectoryEntry(directoryEntry: FileSystemDirectoryEntry,
    directoryReader: FileSystemDirectoryReader): Promise<FileSystemEntry[]> {
    return new Promise((resolve, reject) => {
      directoryReader.readEntries(
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        async (entries) => {
          // in some browser readEntries will unly return max 100 entries, docs:
          // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
          const maxNumberOfEntries = 100;
          if (entries?.length === maxNumberOfEntries) {
            const additionalEntries = await this.parseDirectoryEntry(
              directoryEntry,
              directoryReader
            );
            for (const entry of additionalEntries) {
              entries.push(entry);
            }
          }
          resolve(entries);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  async handleDir(entries): Promise<FileSystemFileEntry[]> {
    const files = [];
    for (const entry of entries) {
      if (entry.isFile) {
        files.push(entry);
      } else if (entry.isDirectory) {
        const directoryReader: FileSystemDirectoryReader = entry.createReader();
        const entries: FileSystemEntry[] = await this.parseDirectoryEntry(entry, directoryReader);
        const res: FileSystemFileEntry[] = await this.handleDir(entries);
        res.forEach((x) => files.push(x));
      }
    }
    return files;
  }

  async handleDirectoryDrop(dataTransferItems) {
    const entries = [];
    for (const item of dataTransferItems) {
      entries.push(item.webkitGetAsEntry());
    }
    const files: FileSystemEntry[] = await this.handleDir(entries);
    this.folderDropped.emit(files);
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    this.fileOver = false;
    const files = evt.dataTransfer.files;
    const items = evt.dataTransfer.items;
    const itemsList: DataTransferItem[] = Object.values(items);
    const anyDirectory = itemsList.some(
      (x) => x.webkitGetAsEntry()?.isDirectory
    );
    if (anyDirectory) {
      void this.handleDirectoryDrop(items);
    } else {
      if (files.length > 0) this.fileDropped.emit(files);
    }
  }
}
