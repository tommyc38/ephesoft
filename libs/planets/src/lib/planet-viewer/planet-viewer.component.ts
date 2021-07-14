import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Person, Planet } from '@ephesoft/utilities';

@Component({
  selector: 'planet-viewer',
  templateUrl: './planet-viewer.component.html',
  styleUrls: ['./planet-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetViewerComponent  {

  @Input() planet: Planet | undefined = undefined
  @Input() residents: Person[] | undefined = undefined
  @Output() residentSelected = new EventEmitter<Person>()

  constructor() {}

  selectResident(resident: Person){
    this.residentSelected.emit(resident)
  }

}
