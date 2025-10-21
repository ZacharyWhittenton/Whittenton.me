import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  homeownersIllustration!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const rawSvg = `
      <svg width="350" height="280" viewBox="0 0 350 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Main house -->
        <rect x="100" y="150" width="150" height="100" stroke="#374151" stroke-width="3" fill="none"/>
        <polygon points="100,150 175,100 250,150" stroke="#374151" stroke-width="3" fill="none"/>

        <!-- Chimney -->
        <rect x="220" y="110" width="15" height="40" stroke="#374151" stroke-width="2" fill="none"/>

        <!-- Front door -->
        <rect x="160" y="190" width="30" height="60" stroke="#374151" stroke-width="2" fill="none"/>
        <circle cx="185" cy="220" r="3" fill="#374151"/>
        <rect x="165" y="185" width="20" height="8" stroke="#374151" stroke-width="1" fill="none"/>

        <!-- Windows -->
        <rect x="120" y="170" width="25" height="30" stroke="#374151" stroke-width="2" fill="none"/>
        <line x1="132" y1="170" x2="132" y2="200" stroke="#374151" stroke-width="1"/>
        <line x1="120" y1="185" x2="145" y2="185" stroke="#374151" stroke-width="1"/>

        <rect x="205" y="170" width="25" height="30" stroke="#374151" stroke-width="2" fill="none"/>
        <line x1="217" y1="170" x2="217" y2="200" stroke="#374151" stroke-width="1"/>
        <line x1="205" y1="185" x2="230" y2="185" stroke="#374151" stroke-width="1"/>

        <!-- Garage -->
        <rect x="50" y="180" width="50" height="70" stroke="#374151" stroke-width="2" fill="none"/>
        <rect x="60" y="210" width="30" height="40" stroke="#374151" stroke-width="2" fill="none"/>
        <circle cx="85" cy="230" r="2" fill="#374151"/>

        <!-- Driveway -->
        <path d="M 75 250 Q 125 240 175 245 T 275 250" stroke="#9ca3af" stroke-width="3" fill="none"/>

        <!-- Car in driveway -->
        <ellipse cx="300" cy="245" rx="30" ry="12" stroke="#374151" stroke-width="2" fill="none"/>
        <rect x="280" y="235" width="40" height="10" stroke="#374151" stroke-width="2" fill="none"/>
        <circle cx="290" cy="255" r="5" stroke="#374151" stroke-width="2" fill="none"/>
        <circle cx="310" cy="255" r="5" stroke="#374151" stroke-width="2" fill="none"/>

        <!-- Garden/landscaping -->
        <circle cx="50" cy="220" r="15" stroke="#374151" stroke-width="2" fill="none"/>
        <line x1="50" y1="235" x2="50" y2="250" stroke="#374151" stroke-width="3"/>

        <circle cx="280" cy="200" r="12" stroke="#374151" stroke-width="2" fill="none"/>
        <line x1="280" y1="212" x2="280" y2="250" stroke="#374151" stroke-width="3"/>

        <!-- Fence -->
        <line x1="20" y1="250" x2="40" y2="250" stroke="#374151" stroke-width="2"/>
        <line x1="25" y1="245" x2="25" y2="255" stroke="#374151" stroke-width="2"/>
        <line x1="35" y1="245" x2="35" y2="255" stroke="#374151" stroke-width="2"/>

        <!-- Mailbox -->
        <line x1="320" y1="250" x2="320" y2="235" stroke="#374151" stroke-width="2"/>
        <rect x="315" y="230" width="10" height="8" stroke="#374151" stroke-width="2" fill="none"/>

        <!-- Ground line -->
        <line x1="0" y1="250" x2="350" y2="250" stroke="#374151" stroke-width="2"/>

        <!-- Sun -->
        <circle cx="300" cy="50" r="15" stroke="#374151" stroke-width="2" fill="none"/>
        <line x1="300" y1="25" x2="300" y2="15" stroke="#374151" stroke-width="2"/>
        <line x1="325" y1="50" x2="335" y2="50" stroke="#374151" stroke-width="2"/>
        <line x1="300" y1="75" x2="300" y2="85" stroke="#374151" stroke-width="2"/>
        <line x1="275" y1="50" x2="265" y2="50" stroke="#374151" stroke-width="2"/>
        <line x1="318" y1="32" x2="325" y2="25" stroke="#374151" stroke-width="2"/>
        <line x1="318" y1="68" x2="325" y2="75" stroke="#374151" stroke-width="2"/>
        <line x1="282" y1="68" x2="275" y2="75" stroke="#374151" stroke-width="2"/>
        <line x1="282" y1="32" x2="275" y2="25" stroke="#374151" stroke-width="2"/>

        <!-- Birds -->
        <path d="M 50 80 Q 55 75 60 80" stroke="#9ca3af" stroke-width="1" fill="none"/>
        <path d="M 60 80 Q 65 75 70 80" stroke="#9ca3af" stroke-width="1" fill="none"/>
        <path d="M 80 70 Q 85 65 90 70" stroke="#9ca3af" stroke-width="1" fill="none"/>
        <path d="M 90 70 Q 95 65 100 70" stroke="#9ca3af" stroke-width="1" fill="none"/>
      </svg>
    `;

    this.homeownersIllustration = this.sanitizer.bypassSecurityTrustHtml(rawSvg);
  }
}
