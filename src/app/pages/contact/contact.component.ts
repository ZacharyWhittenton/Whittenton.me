import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  rentersIllustration = `
    <svg width="500" height="350" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Apartment building -->
      <rect x="150" y="100" width="200" height="200" stroke="#374151" stroke-width="3" fill="none"/>

      <!-- Building details -->
      <rect x="160" y="120" width="30" height="40" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="210" y="120" width="30" height="40" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="260" y="120" width="30" height="40" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="310" y="120" width="30" height="40" stroke="#374151" stroke-width="2" fill="none"/>

      <rect x="160" y="180" width="30" height="40" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="210" y="180" width="30" height="40" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="260" y="180" width="30" height="40" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="310" y="180" width="30" height="40" stroke="#374151" stroke-width="2" fill="none"/>

      <rect x="160" y="240" width="30" height="40" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="210" y="240" width="30" height="40" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="260" y="240" width="30" height="40" stroke="#374151" stroke-width="2" fill="none"/>
      <rect x="310" y="240" width="30" height="40" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Window details -->
      <line x1="175" y1="120" x2="175" y2="160" stroke="#374151" stroke-width="1"/>
      <line x1="160" y1="140" x2="190" y2="140" stroke="#374151" stroke-width="1"/>

      <line x1="225" y1="120" x2="225" y2="160" stroke="#374151" stroke-width="1"/>
      <line x1="210" y1="140" x2="240" y2="140" stroke="#374151" stroke-width="1"/>

      <!-- Highlighted apartment -->
      <rect x="260" y="180" width="30" height="40" stroke="#FF2B85" stroke-width="3" fill="rgba(255, 43, 133, 0.1)"/>
      <line x1="275" y1="180" x2="275" y2="220" stroke="#FF2B85" stroke-width="2"/>
      <line x1="260" y1="200" x2="290" y2="200" stroke="#FF2B85" stroke-width="2"/>

      <!-- Entrance -->
      <rect x="220" y="260" width="40" height="40" stroke="#374151" stroke-width="3" fill="none"/>
      <circle cx="255" cy="280" r="2" fill="#374151"/>

      <!-- Person with belongings -->
      <circle cx="100" cy="250" r="12" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="100" y1="262" x2="100" y2="300" stroke="#374151" stroke-width="2"/>
      <line x1="100" y1="280" x2="85" y2="270" stroke="#374151" stroke-width="2"/>
      <line x1="100" y1="280" x2="115" y2="290" stroke="#374151" stroke-width="2"/>
      <line x1="100" y1="300" x2="85" y2="330" stroke="#374151" stroke-width="2"/>
      <line x1="100" y1="300" x2="115" y2="330" stroke="#374151" stroke-width="2"/>

      <!-- Suitcase -->
      <rect x="110" y="315" width="20" height="15" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="115" y1="315" x2="125" y2="315" stroke="#374151" stroke-width="2"/>
      <circle cx="120" cy="312" r="2" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Laptop bag -->
      <ellipse cx="75" cy="285" rx="8" ry="12" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="75" y1="273" x2="85" y2="268" stroke="#374151" stroke-width="2"/>

      <!-- Delivery person -->
      <circle cx="400" cy="240" r="10" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="400" y1="250" x2="400" y2="280" stroke="#374151" stroke-width="2"/>
      <line x1="400" y1="265" x2="385" y2="255" stroke="#374151" stroke-width="2"/>
      <line x1="400" y1="265" x2="415" y2="275" stroke="#374151" stroke-width="2"/>
      <line x1="400" y1="280" x2="385" y2="300" stroke="#374151" stroke-width="2"/>
      <line x1="400" y1="280" x2="415" y2="300" stroke="#374151" stroke-width="2"/>

      <!-- Package -->
      <rect x="410" y="270" width="15" height="15" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="417" y1="270" x2="417" y2="285" stroke="#374151" stroke-width="1"/>
      <line x1="410" y1="277" x2="425" y2="277" stroke="#374151" stroke-width="1"/>

      <!-- Trees/landscaping -->
      <line x1="50" y1="300" x2="50" y2="260" stroke="#374151" stroke-width="3"/>
      <circle cx="50" cy="260" r="15" stroke="#374151" stroke-width="2" fill="none"/>

      <line x1="450" y1="300" x2="450" y2="270" stroke="#374151" stroke-width="3"/>
      <circle cx="450" cy="270" r="12" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Ground line -->
      <line x1="0" y1="300" x2="500" y2="300" stroke="#374151" stroke-width="2"/>

      <!-- Clouds -->
      <circle cx="100" cy="60" r="12" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <circle cx="115" cy="60" r="10" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <circle cx="85" cy="60" r="8" stroke="#9ca3af" stroke-width="1" fill="none"/>

      <circle cx="380" cy="80" r="10" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <circle cx="392" cy="80" r="8" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <circle cx="368" cy="80" r="6" stroke="#9ca3af" stroke-width="1" fill="none"/>
    </svg>
  `;
}
