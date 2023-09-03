import { Injectable, Renderer2, RendererFactory2, Signal, WritableSignal, signal } from '@angular/core';

/*
  We create a service that manages our entire app's dark and light mode.

  The theme switcher component will inject this service into it so that it can toggle light and dark!
*/

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  /*
    We define an isDark$ signal - writable from inside this service, of a boolean type.
    We are using signals because it's new and it's way less bloat than BehaviorSubject.
  */
  private isDark$: WritableSignal<boolean> = signal<boolean>(false)

  /*
    We declare a Renderer2 for adding/removing the "dark" class to/from our entire app's body tag.
  */
  private renderer!: Renderer2;

  /*
    Since we are in a service, we cannot just inject Renderer2 in our constructor. We must inject the RendererFactory2.
    From that, we can create the renderer we want.
  */
  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null)
  }

  /*
    This is where the switching of the theme happens.

    We update the isDark$ signal to the opposite of what it was. Then, based on the new value, we add/remove the dark class
    from document.body.

    Note that we put the .dark class on document.body so that the dark mode will automatically be applied to popup components
    like menus and dialogs.
  */

  toggleIsDark() {
    this.isDark$.update(isDark => !isDark)

    if (this.isDark$())
      this.renderer.addClass(document.body, 'dark')
    else
      this.renderer.removeClass(document.body, 'dark')


  }

  /*
    We also provde a signal that listeners can "subscribe" to. We return a Signal<boolean>, not a WritableSignal<boolean> so that the listening client
    will not be able to update it directly.

    Tip: The listener "subscribes" to a signal with the new effect(() => { ... }) function. In that callback, we reference the signals we want -
    those we want to get the value out of for necessary logic within that callback. The effect() will run once on component load, and for every time
    any of the signals it references inside the callback change values!

    Tip: If the listener simply wants to display the value of a signal to the screen, or use it to show and hide components, no "subscription" is necessary.
    The signal must be declared as a property, though, at the component, and set to the Signal<boolean> returned by this function.
  */
  getIsDarkSignal(): Signal<boolean> {
    return this.isDark$.asReadonly()
  }
}
