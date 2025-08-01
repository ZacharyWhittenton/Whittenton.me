import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
  @Input() ctaText: string = 'CHECK OUR PRICES';
  @Input() secondaryCtaText: string = '';
  @Input() illustration: string = `
    <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Simple house illustration -->
      <rect x="50" y="150" width="120" height="100" stroke="#374151" stroke-width="2" fill="none"/>
      <polygon points="50,150 110,100 170,150" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="70" y="170" width="30" height="40" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="120" y="170" width="30" height="30" stroke="#374151" stroke-width="2" fill="none"/>
      <circle cx="145" cy="185" r="2" fill="#374151"/>

      <!-- Car illustration -->
      <ellipse cx="250" cy="220" rx="60" ry="25" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="210" y="200" width="80" height="20" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="220" y="190" width="30" height="10" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="260" y="190" width="20" height="10" stroke="#374151" stroke-width="2" fill="none"/>
      <circle cx="225" cy="235" r="8" stroke="#374151" stroke-width="2" fill="none"/>
      <circle cx="275" cy="235" r="8" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Trees -->
      <line x1="320" y1="250" x2="320" y2="200" stroke="#374151" stroke-width="2"/>
      <circle cx="320" cy="200" r="15" stroke="#374151" stroke-width="2" fill="none"/>

      <line x1="30" y1="250" x2="30" y2="210" stroke="#374151" stroke-width="2"/>
      <circle cx="30" cy="210" r="12" stroke="#374151" stroke-width="2" fill="none"/>
    </svg>
  `;
}
