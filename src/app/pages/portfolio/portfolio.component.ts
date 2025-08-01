import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  petIllustration = `
    <svg width="400" height="320" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Dog -->
      <ellipse cx="180" cy="260" rx="40" ry="25" stroke="#374151" stroke-width="2" fill="none"/>
      <circle cx="180" cy="230" r="20" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Dog ears -->
      <ellipse cx="165" cy="220" rx="8" ry="15" stroke="#374151" stroke-width="2" fill="none"/>
      <ellipse cx="195" cy="220" rx="8" ry="15" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Dog eyes -->
      <circle cx="175" cy="225" r="2" fill="#374151"/>
      <circle cx="185" cy="225" r="2" fill="#374151"/>

      <!-- Dog nose -->
      <circle cx="180" cy="235" r="2" fill="#374151"/>

      <!-- Dog mouth -->
      <path d="M 180 237 Q 175 240 170 238" stroke="#374151" stroke-width="1" fill="none"/>
      <path d="M 180 237 Q 185 240 190 238" stroke="#374151" stroke-width="1" fill="none"/>

      <!-- Dog legs -->
      <line x1="160" y1="280" x2="160" y2="300" stroke="#374151" stroke-width="3"/>
      <line x1="170" y1="285" x2="170" y2="300" stroke="#374151" stroke-width="3"/>
      <line x1="190" y1="285" x2="190" y2="300" stroke="#374151" stroke-width="3"/>
      <line x1="200" y1="280" x2="200" y2="300" stroke="#374151" stroke-width="3"/>

      <!-- Dog tail -->
      <path d="M 220 250 Q 240 240 245 260" stroke="#374151" stroke-width="3" fill="none"/>

      <!-- Cat -->
      <ellipse cx="300" cy="280" rx="25" ry="15" stroke="#374151" stroke-width="2" fill="none"/>
      <circle cx="300" cy="260" r="15" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Cat ears (triangular) -->
      <polygon points="290,250 295,240 300,250" stroke="#374151" stroke-width="2" fill="none"/>
      <polygon points="300,250 305,240 310,250" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Cat eyes -->
      <circle cx="295" cy="255" r="2" fill="#374151"/>
      <circle cx="305" cy="255" r="2" fill="#374151"/>

      <!-- Cat nose -->
      <polygon points="300,260 298,262 302,262" stroke="#374151" stroke-width="1" fill="#374151"/>

      <!-- Cat whiskers -->
      <line x1="285" y1="258" x2="275" y2="256" stroke="#374151" stroke-width="1"/>
      <line x1="285" y1="262" x2="275" y2="264" stroke="#374151" stroke-width="1"/>
      <line x1="315" y1="258" x2="325" y2="256" stroke="#374151" stroke-width="1"/>
      <line x1="315" y1="262" x2="325" y2="264" stroke="#374151" stroke-width="1"/>

      <!-- Cat legs -->
      <line x1="285" y1="290" x2="285" y2="305" stroke="#374151" stroke-width="2"/>
      <line x1="295" y1="295" x2="295" y2="305" stroke="#374151" stroke-width="2"/>
      <line x1="305" y1="295" x2="305" y2="305" stroke="#374151" stroke-width="2"/>
      <line x1="315" y1="290" x2="315" y2="305" stroke="#374151" stroke-width="2"/>

      <!-- Cat tail -->
      <path d="M 325 270 Q 350 250 360 280 Q 350 290 340 285" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Vet clinic building -->
      <rect x="50" y="150" width="100" height="80" stroke="#374151" stroke-width="2" fill="none"/>
      <polygon points="50,150 100,120 150,150" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Clinic sign -->
      <rect x="70" y="130" width="60" height="20" stroke="#374151" stroke-width="2" fill="none"/>
      <text x="100" y="143" text-anchor="middle" font-size="8" fill="#374151">VET CLINIC</text>

      <!-- Clinic windows -->
      <rect x="60" y="165" width="15" height="20" stroke="#374151" stroke-width="1" fill="none"/>
      <rect x="85" y="165" width="15" height="20" stroke="#374151" stroke-width="1" fill="none"/>
      <rect x="125" y="165" width="15" height="20" stroke="#374151" stroke-width="1" fill="none"/>

      <!-- Clinic door -->
      <rect x="105" y="190" width="20" height="40" stroke="#374151" stroke-width="2" fill="none"/>
      <circle cx="120" cy="210" r="1" fill="#374151"/>

      <!-- Cross symbol on clinic -->
      <line x1="100" y1="200" x2="100" y2="210" stroke="#FF2B85" stroke-width="2"/>
      <line x1="95" y1="205" x2="105" y2="205" stroke="#FF2B85" stroke-width="2"/>

      <!-- Person walking dog -->
      <circle cx="120" cy="270" r="8" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="120" y1="278" x2="120" y2="300" stroke="#374151" stroke-width="2"/>
      <line x1="120" y1="290" x2="110" y2="285" stroke="#374151" stroke-width="2"/>
      <line x1="120" y1="290" x2="130" y2="295" stroke="#374151" stroke-width="2"/>
      <line x1="120" y1="300" x2="110" y2="315" stroke="#374151" stroke-width="2"/>
      <line x1="120" y1="300" x2="130" y2="315" stroke="#374151" stroke-width="2"/>

      <!-- Leash -->
      <path d="M 130 295 Q 145 290 160 280" stroke="#374151" stroke-width="1" fill="none"/>

      <!-- Ground line -->
      <line x1="0" y1="315" x2="400" y2="315" stroke="#374151" stroke-width="2"/>

      <!-- Heart symbols (love) -->
      <path d="M 250 180 C 248 175 240 175 245 185 C 250 175 258 175 255 180 C 252 185 250 190 250 180" fill="#FF2B85"/>
      <path d="M 70 100 C 68 95 60 95 65 105 C 70 95 78 95 75 100 C 72 105 70 110 70 100" fill="#FF2B85"/>

      <!-- Sun -->
      <circle cx="350" cy="60" r="12" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="350" y1="40" x2="350" y2="30" stroke="#374151" stroke-width="2"/>
      <line x1="370" y1="60" x2="380" y2="60" stroke="#374151" stroke-width="2"/>
      <line x1="350" y1="80" x2="350" y2="90" stroke="#374151" stroke-width="2"/>
      <line x1="330" y1="60" x2="320" y2="60" stroke="#374151" stroke-width="2"/>

      <!-- Trees -->
      <line x1="30" y1="315" x2="30" y2="280" stroke="#374151" stroke-width="3"/>
      <circle cx="30" cy="280" r="12" stroke="#374151" stroke-width="2" fill="none"/>

      <line x1="370" y1="315" x2="370" y2="290" stroke="#374151" stroke-width="3"/>
      <circle cx="370" cy="290" r="10" stroke="#374151" stroke-width="2" fill="none"/>
    </svg>
  `;
}
