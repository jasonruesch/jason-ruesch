import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [RouterTestingModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create the app', () => {
    const app = spectator.component;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Jason Ruesch'`, () => {
    const app = spectator.component;
    expect(app.title).toEqual('Jason Ruesch');
  });

  it('should render title', () => {
    spectator.detectChanges();
    const compiled = spectator.element;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'Jason Ruesch app is running!'
    );
  });
});
