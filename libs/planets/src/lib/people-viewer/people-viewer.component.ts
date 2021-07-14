import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Person } from '@ephesoft/utilities';

@Component({
  selector: 'planet-people-viewer',
  templateUrl: './people-viewer.component.html',
  styleUrls: ['./people-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleViewerComponent implements OnInit {

  @Input() person: Person | undefined = undefined

  constructor() { }

  ngOnInit(): void {
  }

}
