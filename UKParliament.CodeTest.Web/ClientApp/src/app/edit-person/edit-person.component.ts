import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PersonViewModel } from "../../models/person-view-model";


@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent {

  @Input() person?: PersonViewModel;
  @Output() newPersonEvent = new EventEmitter<PersonViewModel>();
  constructor() {

  }

  ngOnInit(): void { }

  addPerson(person: PersonViewModel) {
    this.newPersonEvent.emit(person);
  } 

  editPerson(person: PersonViewModel) {
    person.existingPerson = true; //Difference between new and existing person
    this.newPersonEvent.emit(person);
  }
}
