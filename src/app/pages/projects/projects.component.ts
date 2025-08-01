import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  lifeIllustration = `
    <svg width="450" height="320" viewBox="0 0 450 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Family group -->
      <!-- Father -->
      <circle cx="150" cy="180" r="15" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="150" y1="195" x2="150" y2="240" stroke="#374151" stroke-width="3"/>
      <line x1="150" y1="210" x2="135" y2="200" stroke="#374151" stroke-width="2"/>
      <line x1="150" y1="210" x2="165" y2="220" stroke="#374151" stroke-width="2"/>
      <line x1="150" y1="240" x2="135" y2="270" stroke="#374151" stroke-width="3"/>
      <line x1="150" y1="240" x2="165" y2="270" stroke="#374151" stroke-width="3"/>

      <!-- Mother -->
      <circle cx="200" cy="185" r="12" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="200" y1="197" x2="200" y2="235" stroke="#374151" stroke-width="3"/>
      <line x1="200" y1="210" x2="185" y2="205" stroke="#374151" stroke-width="2"/>
      <line x1="200" y1="210" x2="215" y2="215" stroke="#374151" stroke-width="2"/>
      <line x1="200" y1="235" x2="185" y2="265" stroke="#374151" stroke-width="3"/>
      <line x1="200" y1="235" x2="215" y2="265" stroke="#374151" stroke-width="3"/>

      <!-- Child 1 -->
      <circle cx="170" cy="220" r="8" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="170" y1="228" x2="170" y2="250" stroke="#374151" stroke-width="2"/>
      <line x1="170" y1="235" x2="160" y2="240" stroke="#374151" stroke-width="2"/>
      <line x1="170" y1="235" x2="180" y2="240" stroke="#374151" stroke-width="2"/>
      <line x1="170" y1="250" x2="160" y2="270" stroke="#374151" stroke-width="2"/>
      <line x1="170" y1="250" x2="180" y2="270" stroke="#374151" stroke-width="2"/>

      <!-- Child 2 -->
      <circle cx="225" cy="225" r="6" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="225" y1="231" x2="225" y2="245" stroke="#374151" stroke-width="2"/>
      <line x1="225" y1="235" x2="218" y2="240" stroke="#374151" stroke-width="1"/>
      <line x1="225" y1="235" x2="232" y2="240" stroke="#374151" stroke-width="1"/>
      <line x1="225" y1="245" x2="218" y2="265" stroke="#374151" stroke-width="2"/>
      <line x1="225" y1="245" x2="232" y2="265" stroke="#374151" stroke-width="2"/>

      <!-- House in background -->
      <rect x="50" y="120" width="80" height="60" stroke="#9ca3af" stroke-width="2" fill="none"/>
      <polygon points="50,120 90,90 130,120" stroke="#9ca3af" stroke-width="2" fill="none"/>
      <rect x="70" y="145" width="15" height="25" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <rect x="100" y="145" width="15" height="15" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <circle cx="107" cy="152" r="1" fill="#9ca3af"/>

      <!-- Protection umbrella -->
      <path d="M 120 100 Q 175 80 230 100" stroke="#FF2B85" stroke-width="3" fill="none"/>
      <path d="M 120 100 Q 175 85 230 100" stroke="#FF2B85" stroke-width="2" fill="rgba(255, 43, 133, 0.1)"/>
      <line x1="175" y1="100" x2="175" y2="140" stroke="#374151" stroke-width="2"/>
      <path d="M 170 135 Q 175 140 180 135" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Hearts floating above family -->
      <path d="M 160 150 C 158 145 150 145 155 155 C 160 145 168 145 165 150 C 162 155 160 160 160 150" fill="#FF2B85"/>
      <path d="M 210 160 C 208 155 200 155 205 165 C 210 155 218 155 215 160 C 212 165 210 170 210 160" fill="#FF2B85"/>
      <path d="M 185 140 C 183 135 175 135 180 145 C 185 135 193 135 190 140 C 187 145 185 150 185 140" fill="#FF2B85"/>

      <!-- Money/Dollar signs (financial security) -->
      <text x="300" y="150" font-size="20" fill="#374151">$</text>
      <text x="320" y="170" font-size="16" fill="#9ca3af">$</text>
      <text x="340" y="140" font-size="18" fill="#374151">$</text>
      <text x="360" y="160" font-size="14" fill="#9ca3af">$</text>

      <!-- Education symbols -->
      <rect x="280" y="200" width="25" height="20" stroke="#374151" stroke-width="2" fill="none"/>
      <polygon points="280,200 292,185 305,200" stroke="#374151" stroke-width="2" fill="none"/>
      <text x="292" y="212" text-anchor="middle" font-size="8" fill="#374151">📚</text>

      <!-- Retirement/Future symbols -->
      <circle cx="350" cy="220" r="15" stroke="#374151" stroke-width="2" fill="none"/>
      <circle cx="350" cy="220" r="10" stroke="#374151" stroke-width="1" fill="none"/>
      <line x1="350" y1="210" x2="350" y2="220" stroke="#374151" stroke-width="1"/>
      <line x1="350" y1="220" x2="355" y2="225" stroke="#374151" stroke-width="1"/>

      <!-- Trees -->
      <line x1="30" y1="270" x2="30" y2="230" stroke="#374151" stroke-width="3"/>
      <circle cx="30" cy="230" r="12" stroke="#374151" stroke-width="2" fill="none"/>

      <line x1="400" y1="270" x2="400" y2="240" stroke="#374151" stroke-width="3"/>
      <circle cx="400" cy="240" r="10" stroke="#374151" stroke-width="2" fill="none"/>

      <!-- Ground line -->
      <line x1="0" y1="270" x2="450" y2="270" stroke="#374151" stroke-width="2"/>

      <!-- Sun -->
      <circle cx="380" cy="50" r="12" stroke="#374151" stroke-width="2" fill="none"/>
      <line x1="380" y1="30" x2="380" y2="20" stroke="#374151" stroke-width="2"/>
      <line x1="400" y1="50" x2="410" y2="50" stroke="#374151" stroke-width="2"/>
      <line x1="380" y1="70" x2="380" y2="80" stroke="#374151" stroke-width="2"/>
      <line x1="360" y1="50" x2="350" y2="50" stroke="#374151" stroke-width="2"/>
      <line x1="396" y1="34" x2="403" y2="27" stroke="#374151" stroke-width="2"/>
      <line x1="396" y1="66" x2="403" y2="73" stroke="#374151" stroke-width="2"/>
      <line x1="364" y1="66" x2="357" y2="73" stroke="#374151" stroke-width="2"/>
      <line x1="364" y1="34" x2="357" y2="27" stroke="#374151" stroke-width="2"/>

      <!-- Clouds -->
      <circle cx="100" cy="60" r="8" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <circle cx="112" cy="60" r="6" stroke="#9ca3af" stroke-width="1" fill="none"/>
      <circle cx="88" cy="60" r="5" stroke="#9ca3af" stroke-width="1" fill="none"/>

      <!-- Holding hands connection -->
      <path d="M 165 220 Q 175 215 185 220" stroke="#374151" stroke-width="2" fill="none"/>
      <path d="M 215 215 Q 220 210 225 215" stroke="#374151" stroke-width="2" fill="none"/>
    </svg>
  `;
}
