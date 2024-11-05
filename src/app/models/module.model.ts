// src/app/models/module.model.ts

export interface Module {
    module_id: string;
    module_name: string;
    module_parent: string;
    have_children: boolean;
    url: string;
    icon: string;
    children: Module[]; // Tipe rekursif untuk mendukung struktur anak
  }
  