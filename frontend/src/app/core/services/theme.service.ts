import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkClass = 'dark';

  public toggle() {
    const html = document.documentElement;
    html.classList.toggle(this.darkClass);
  }

  setDarkMode(isDarkMode: boolean) {
    const html = document.documentElement;

    if (isDarkMode) {
      html.classList.add(this.darkClass);
    } else {
      html.classList.remove(this.darkClass);
    }
  }

  isDarkMode(): boolean {
    return document.documentElement.classList.contains(this.darkClass);
  }
}
