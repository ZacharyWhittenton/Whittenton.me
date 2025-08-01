import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeIllustration = `
    <svg width="500" height="350" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Left house -->
      <rect x="20" y="200" width="100" height="80" stroke="#374151" stroke-width="2" fill="none"/>
      <polygon points="20,200 70,150 120,200" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="35" y="220" width="25" height="35" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="80" y="220" width="25" height="25" stroke="#374151" stroke-width="2" fill="none"/>
      <circle cx="95" cy="232" r="2" fill="#374151"/>

      <!-- Main house -->
      <rect x="180" y="170" width="140" height="110" stroke="#374151" stroke-width="2" fill="none"/>
      <polygon points="180,170 250,120 320,170" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="200" y="200" width="30" height="50" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="260" y="200" width="40" height="30" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="280" y="240" width="20" height="30" stroke="#374151" stroke-width="2" fill="none"/>
      <circle cx="290" cy="255" r="2" fill="#374151"/>

      <!-- Right house -->
      <rect x="380" y="190" width="90" height="90" stroke="#374151" stroke-width="2" fill="none"/>
      <polygon points="380,190 425,140 470,190" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="395" y="210" width="20" height="40" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="430" y="210" width="25" height="25" stroke="#374151" stroke-width="2" fill="none"/>
      <circle cx="442" cy="222" r="2" fill="#374151"/>

      <!-- Car -->
      <ellipse cx="280" cy="310" rx="50" ry="20" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="250" y="295" width="60" height="15" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="260" y="285" width="25" height="10" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="285" y="285" width="15" height="10" stroke="#374151" stroke-width="2" fill="none"/>
      <circle cx="260" cy="320" r="6" stroke="#374151" stroke-width="2" fill="none"/>
      <circle cx="300" cy="320" r="6" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Person working -->
      <circle cx="420" cy="280" r="8" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="420" y1="288" x2="420" y2="320" stroke="#374151" stroke-width="2"/>
      <line x1="420" y1="300" x2="430" y2="290" stroke="#374151" stroke-width="2"/>
      <line x1="420" y1="300" x2="410" y2="310" stroke="#374151" stroke-width="2"/>
      <line x1="420" y1="320" x2="410" y2="340" stroke="#374151" stroke-width="2"/>
      <line x1="420" y1="320" x2="430" y2="340" stroke="#374151" stroke-width="2"/>

      <!-- Laptop -->
      <rect x="425" y="310" width="20" height="15" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="425" y1="310" x2="445" y2="305" stroke="#374151" stroke-width="2"/>

      <!-- Dog -->
      <ellipse cx="350" cy="320" rx="12" ry="8" stroke="#374151" stroke-width="2" fill="none"/>
      <circle cx="355" cy="315" r="4" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="350" y1="328" x2="345" y2="335" stroke="#374151" stroke-width="2"/>
      <line x1="355" y1="328" x2="360" y2="335" stroke="#374151" stroke-width="2"/>
      <line x1="340" y1="328" x2="335" y2="335" stroke="#374151" stroke-width="2"/>
      <line x1="365" y1="328" x2="370" y2="335" stroke="#374151" stroke-width="2"/>

      <!-- Trees -->
      <line x1="50" y1="280" x2="50" y2="240" stroke="#374151" stroke-width="2"/>
      <circle cx="50" cy="240" r="12" stroke="#374151" stroke-width="2" fill="none"/>

      <line x1="150" y1="280" x2="150" y2="250" stroke="#374151" stroke-width="2"/>
      <circle cx="150" cy="250" r="10" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Sun -->
      <circle cx="450" cy="50" r="15" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="450" y1="25" x2="450" y2="15" stroke="#374151" stroke-width="2"/>
      <line x1="475" y1="50" x2="485" y2="50" stroke="#374151" stroke-width="2"/>
      <line x1="450" y1="75" x2="450" y2="85" stroke="#374151" stroke-width="2"/>
      <line x1="425" y1="50" x2="415" y2="50" stroke="#374151" stroke-width="2"/>
    </svg>
  `;
}
