declare interface Window {
  showDirectoryPicker: (options?: DirectoryPickerOptions) => Promise<FileSystemEntry>;
}
