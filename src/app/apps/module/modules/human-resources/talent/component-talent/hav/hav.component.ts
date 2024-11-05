import { Component, ViewChild } from '@angular/core';
import { DropzoneComponent, DropzoneConfigInterface, DropzoneDirective } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-hav',
  templateUrl: './hav.component.html',
  styleUrl: './hav.component.css'
})
export class HavComponent {
  public showDropdownIndex: number | null = null; // Menyimpan index baris yang aktif

  toggleDropdown(index: number) {
    this.showDropdownIndex = this.showDropdownIndex === index ? null : index;
  }

  closeDropdown() {
    this.showDropdownIndex = null;
  }

  showModal = false;

  openModal() {
    this.showModal = true;
    document.getElementById('uploadModal')!.style.display = 'flex';
  }

  closeModal() {
    this.showModal = false;
    document.getElementById('uploadModal')!.style.display = 'none';
  }




  public disabled: boolean = false;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  @ViewChild(DropzoneComponent, { static: false }) componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;



  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public toggleAutoReset(): void {
    this.config.autoReset = this.config.autoReset ? null : 5000;
    this.config.errorReset = this.config.errorReset ? null : 5000;
    this.config.cancelReset = this.config.cancelReset ? null : 5000;
  }

  public toggleMultiUpload(): void {
    this.config.maxFiles = this.config.maxFiles ? 0 : 1;
  }

  public toggleClickAction(): void {
    this.config.clickable = !this.config.clickable;
  }
  type: string = 'component'
  public resetDropzoneUploads(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.reset();
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.reset();
    }
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args);
  }
}
