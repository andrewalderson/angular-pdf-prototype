import {
  Directive,
  EventEmitter,
  HostListener,
  Output,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appFileOpenButton]',
  standalone: true,
})
export class FileOpenButtonDirective {
  #renderer = inject(Renderer2);

  @HostListener('click') async clickHandler() {
    // if only Firefox and Safari didn't suck
    if ('showOpenFilePicker' in window) {
      this.#showFilePicker();
      return;
    } else {
      this.#showFallbackFilePicker();
    }
  }

  @Output() fileSelected = new EventEmitter<File | FileSystemFileHandle>();

  async #showFilePicker() {
    const pickerOpts = {
      types: [
        {
          description: 'PDF',
          accept: {
            'application/pdf': ['.pdf'],
          },
        },
      ],
    };
    try {
      const [fileHandle] = await (window as any).showOpenFilePicker(pickerOpts);
      this.fileSelected.emit(fileHandle);
    } catch {
      // catch AbortError if user cancels action
    }
  }

  #showFallbackFilePicker() {
    const input: HTMLInputElement = this.#renderer.createElement('input');
    input.type = 'file';
    input.accept = 'application/pdf';
    input.addEventListener(
      'change',
      () => {
        if (input.files?.length) {
          this.fileSelected.emit(input.files[0]);
        }
      },
      false
    );
    input.click();
  }
}
