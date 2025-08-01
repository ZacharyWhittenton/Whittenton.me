import { Component, Input } from '@angular/core';

export interface Feature {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
}

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.css']
})
export class FeaturesSectionComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() features: Feature[] = [];
  @Input() sectionClass: string = 'bg-white';
}
