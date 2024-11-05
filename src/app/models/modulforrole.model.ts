
export interface ModuleForRole {
    module_id: string;
    module_name: string;
    module_parent: string;
    have_children: boolean;
    url: string;
    icon: string;
    checked: boolean;
    children: ModuleForRole[]; // Tipe rekursif untuk mendukung struktur anak
  }
  