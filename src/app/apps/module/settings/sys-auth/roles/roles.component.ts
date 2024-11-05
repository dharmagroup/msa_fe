import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModuleService } from '../../../../../services/module.service';
import { Module } from '../../../../../models/module.model';
import { LoadingService } from '../../../../../services/loading.service';
import { ApiService } from '../../../../../services/api.service';
import { AlertService } from '../../../../../services/alert.service';
import { Role } from '../../../../../models/roles.model';
import { ModuleForRole } from '../../../../../models/modulforrole.model';
import { HSAccordion, HSTreeView, IStaticMethods } from 'preline/preline';


declare global {
  interface HSStaticMethods {
    autoInit(): void
  }
  interface Window {
    HSStaticMethods: HSStaticMethods
  }
}

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  constructor(private load: LoadingService, private api: ApiService, private alert: AlertService) {

  }

  ngOnInit(): void {
    this._get_roles_()
  }

  roles: Role[] = []

  _get_roles_() {
    this.load.show('Getting roles...')
    this.api.post('roles', {}).subscribe((data: any) => {
      this.load.hide()
      this.roles = data.roles
    }, (error: any) => {
      this.load.hide()
      this.alert.showAlert('danger', 'Error while loading roles', error.error.message)
    })
  }
  roleActive: string = ''

  module: ModuleForRole[] = []
  _get_modules_(roleId: string) {
    this.roleActive = roleId
    this.load.show('Getting modules...')
    this.api.post('modules-from-role', { role: roleId }).subscribe((data: any) => {
      this.load.hide()
      this.module = data.modules
      setTimeout(() => {
        window.HSStaticMethods.autoInit();
      }, 100);
    }, (error: any) => {
      this.load.hide()
      this.alert.showAlert('danger', 'Error while loading roles', error.error.message)
    })
  }

  toggleCheckbox(module: ModuleForRole) {
    module.checked = !module.checked;
    this.updateChildren(module);
    this.updateParent(module);
  }



  private updateChildren(module: ModuleForRole) {
    if (module.children) {
      module.children.forEach(child => {
        child.checked = module.checked;
        this.updateChildren(child);
      });
    }
  }

  // Update parent function
  private updateParent(module: ModuleForRole) {
    const data: ModuleForRole[] = this.findModulesById(this.module, module.module_parent)
    if (data.length > 0) {
      let checked: any = [];
      data[0].children.forEach(child => {
        if (child.checked) {
          checked.push(child.checked);
        }
      });
      if (checked.length > 0) {
        data[0].checked = true;
      }

      this.updateParent(data[0])
    }
  }

  chechkedParent(module: ModuleForRole) {

  }

  findModulesById(modules: ModuleForRole[], id: string): ModuleForRole[] {
    let result: ModuleForRole[] = [];

    modules.forEach((module: ModuleForRole) => {
      // Cek apakah module_id sama dengan id yang dicari
      if (module.module_id.toString() === id.toString()) {
        result.push(module); // Tambahkan modul yang cocok
      }

      // Cek children secara rekursif
      if (module.children && module.children.length > 0) {
        const childResults = this.findModulesById(module.children, id);
        result = result.concat(childResults); // Gabungkan hasil
      }
    });
    return result;
  }

  getCheckedModules(modules: ModuleForRole[]): ModuleForRole[] {
    let result: any[] = [];

    modules.forEach(module => {
      if (module.checked) {
        result.push(module.module_id); // Tambahkan modul yang dicentang
      }

      // Cek children secara rekursif
      if (module.children && module.children.length > 0) {
        const childResults = this.getCheckedModules(module.children);
        result = result.concat(childResults); // Gabungkan hasil
      }
    });

    return result;
  }

  submit(){
    var data : ModuleForRole[] = this.getCheckedModules(this.module)
    if(this.roleActive){
      this.load.show('Updating...')
      this.api.post('update-role',{role: this.roleActive, data: data}).subscribe((response:any)=>{
        this.load.hide()
        this.alert.showAlert('success', 'Success!','Successfully updated role')
      },(error:any)=>{
        this.load.hide()
        this.alert.showAlert('danger', 'Error updating',error.error.message)
      })
    }
  }
  

  deleteRole(role:string){
    this.load.show('Delete a role...')
    this.api.post('delete-role',{role: role}).subscribe((response:any)=>{
      this.load.hide()
      this.alert.showAlert('success', 'Successfully deleting',response.message)
      this._get_roles_()
    },(error:any)=>{
      this.load.hide()
      this.alert.showAlert('danger', 'Error deleting',error.error.message)
    })
  }

  isOpen : boolean =false
  close(){
    this.isOpen = false
  }
  @ViewChild('text') text!: ElementRef;
  open(){
    this.isOpen = true
    setTimeout(() => {
      this.text.nativeElement.focus();
    }, 0);
  }

  addRole(){
    if(this.text.nativeElement.value){
      this.load.show('Submiting a role...')
      this.api.post('add-role',{role: this.text.nativeElement.value})
      .subscribe((response:any)=>{
        this.load.hide()
        this.alert.showAlert('success','Success', response.message)
        this.close()
        this._get_roles_()
      },(error:any)=>{
        this.load.hide()
        this.alert.showAlert('danger', 'Error',error.error.message)
      })
    }
    else{
      this.alert.showAlert('warning', 'Warning!', 'Please enter a role!')
    }
  }

}
