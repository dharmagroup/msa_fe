import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  private tabsSubject = new BehaviorSubject<{ title: string, path: string }[]>([]);
  private selectedTabSubject = new BehaviorSubject<number>(0);

  tabs$ = this.tabsSubject.asObservable();
  selectedTab$ = this.selectedTabSubject.asObservable();

  constructor(private router: Router, private title: Title) { }
  addTab(title: string, path: string): void {
    const currentTabs = this.tabsSubject.value;

    // Check for duplicate path
    const isDuplicate = currentTabs.some(tab => tab.path === path);
    this.title.setTitle(title)
    if (isDuplicate) {
      this.router.navigate([path]);
      return; // Do not add the tab if path is duplicated
    }

    // Add new tab if no duplicate
    currentTabs.push({ title, path });
    this.tabsSubject.next(currentTabs);
    this.selectedTabSubject.next(currentTabs.length - 1); // Set the newly added tab as active
    this.router.navigate([path]);
    
  }

  removeTab(index: number): void {
    const currentTabs = this.tabsSubject.value;
    if (currentTabs.length > 0) {
      currentTabs.splice(index, 1);
      this.tabsSubject.next(currentTabs);
      // Adjust selectedTab index if needed
      this.selectedTabSubject.next(index >= currentTabs.length ? currentTabs.length - 1 : index);
      this.router.navigate([currentTabs[index-1].path]);
    }
  }

  selectTab(index: number): void {
    this.selectedTabSubject.next(index);
  }
}
