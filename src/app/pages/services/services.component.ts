import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  carIllustration = `
    <svg width="500" height="350" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Road -->
      <rect x="0" y="280" width="500" height="70" fill="#f3f4f6"/>
      <line x1="0" y1="315" x2="500" y2="315" stroke="#d1d5db" stroke-width="2" stroke-dasharray="20,10"/>

      <!-- Main car -->
      <ellipse cx="250" cy="300" rx="80" ry="30" stroke="#374151" stroke-width="3" fill="none"/>
      <rect x="190" y="275" width="120" height="25" stroke="#374151" stroke-width="3" fill="none"/>
      <rect x="210" y="260" width="40" height="15" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="250" y="260" width="30" height="15" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Car wheels -->
      <circle cx="210" cy="320" r="15" stroke="#374151" stroke-width="3" fill="none"/>
      <circle cx="290" cy="320" r="15" stroke="#374151" stroke-width="3" fill="none"/>
      <circle cx="210" cy="320" r="8" stroke="#374151" stroke-width="2" fill="none"/>
      <circle cx="290" cy="320" r="8" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Background cars -->
      <ellipse cx="100" cy="300" rx="50" ry="20" stroke="#9ca3af" stroke-width="2" fill="none"/>
      <rect x="70" y="285" width="60" height="15" stroke="#9ca3af" stroke-width="2" fill="none"/>
      <circle cx="85" cy="315" r="8" stroke="#9ca3af" stroke-width="2" fill="none"/>
      <circle cx="115" cy="315" r="8" stroke="#9ca3af" stroke-width="2" fill="none"/>

      <ellipse cx="400" cy="300" rx="45" ry="18" stroke="#9ca3af" stroke-width="2" fill="none"/>
      <rect x="375" y="287" width="50" height="13" stroke="#9ca3af" stroke-width="2" fill="none"/>
      <circle cx="385" cy="313" r="7" stroke="#9ca3af" stroke-width="2" fill="none"/>
      <circle cx="415" cy="313" r="7" stroke="#9ca3af" stroke-width="2" fill="none"/>

      <!-- Environment elements -->
      <!-- Trees -->
      <line x1="50" y1="280" x2="50" y2="200" stroke="#374151" stroke-width="3"/>
      <circle cx="50" cy="200" r="20" stroke="#374151" stroke-width="2" fill="none"/>

      <line x1="450" y1="280" x2="450" y2="220" stroke="#374151" stroke-width="3"/>
      <circle cx="450" cy="220" r="18" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Buildings in background -->
      <rect x="150" y="180" width="40" height="100" stroke="#9ca3af" stroke-width="2" fill="none"/>
      <rect x="160" y="190" width="8" height="12" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <rect x="175" y="190" width="8" height="12" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <rect x="160" y="210" width="8" height="12" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <rect x="175" y="210" width="8" height="12" stroke="#9ca3af" stroke-width="1" fill="none"/>

      <rect x="310" y="150" width="50" height="130" stroke="#9ca3af" stroke-width="2" fill="none"/>
      <rect x="320" y="160" width="10" height="15" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <rect x="340" y="160" width="10" height="15" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <rect x="320" y="185" width="10" height="15" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <rect x="340" y="185" width="10" height="15" stroke="#9ca3af" stroke-width="1" fill="none"/>

      <!-- Sun -->
      <circle cx="80" cy="80" r="20" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="80" y1="50" x2="80" y2="35" stroke="#374151" stroke-width="2"/>
      <line x1="110" y1="80" x2="125" y2="80" stroke="#374151" stroke-width="2"/>
      <line x1="80" y1="110" x2="80" y2="125" stroke="#374151" stroke-width="2"/>
      <line x1="50" y1="80" x2="35" y2="80" stroke="#374151" stroke-width="2"/>
      <line x1="101" y1="59" x2="112" y2="48" stroke="#374151" stroke-width="2"/>
      <line x1="101" y1="101" x2="112" y2="112" stroke="#374151" stroke-width="2"/>
      <line x1="59" y1="101" x2="48" y2="112" stroke="#374151" stroke-width="2"/>
      <line x1="59" y1="59" x2="48" y2="48" stroke="#374151" stroke-width="2"/>

      <!-- Clouds -->
      <circle cx="300" cy="70" r="12" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <circle cx="315" cy="70" r="10" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <circle cx="285" cy="70" r="8" stroke="#9ca3af" stroke-width="1" fill="none"/>

      <circle cx="420" cy="90" r="10" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <circle cx="432" cy="90" r="8" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <circle cx="408" cy="90" r="6" stroke="#9ca3af" stroke-width="1" fill="none"/>
    </svg>
  `;
}
