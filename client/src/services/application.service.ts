import { isPlatformServer } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID, signal, WritableSignal } from "@angular/core";
import { environment } from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  baseURL: WritableSignal<string> = signal('');

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    if (!environment.production) {
      this.baseURL.set('');
    } else {
      if (isPlatformServer(platformId)) {
        this.baseURL.set(environment.apiURL);
      } else {
        this.baseURL.set('');
      }
    }
  }

  getBaseURL() {
    return this.baseURL();
  }
} 