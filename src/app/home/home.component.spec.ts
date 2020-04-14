import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory(HomeComponent);

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should render logo for 'Jason Ruesch'`, () => {
    spectator.detectChanges();
    const compiled = spectator.element;
    expect(
      compiled.querySelector('h1.logo').attributes.getNamedItem('aria-label')
        .value
    ).toBe('Jason Ruesch');
  });
});
