import { Injectable } from '@angular/core';
import { Module } from '../models/module.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private modules: Module[] = [];

  setModules(modules: Module[]): void {
    this.modules = modules;
  }

  getModules(): Module[] {
    return this.modules;
  }
}
