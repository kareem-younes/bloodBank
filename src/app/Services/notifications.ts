import { Injectable, ApplicationRef, ComponentRef, createComponent } from '@angular/core';
import { NotificationComponent } from '../Components/Gloable/notifications/notifications';
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private currentRef?: ComponentRef<NotificationComponent>;

  constructor(private appRef: ApplicationRef) { }

  show(title: string, message: string) {
    // Remove old one if exists
    this.currentRef?.destroy();

    const componentRef = createComponent(NotificationComponent, { environmentInjector: this.appRef.injector });
    componentRef.instance.title = title;
    componentRef.instance.message = message;

    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.currentRef = componentRef;
  }
}
