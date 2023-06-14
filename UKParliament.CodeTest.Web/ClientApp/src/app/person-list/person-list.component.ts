import { Component, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PersonViewModel } from "../../models/person-view-model";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {

  // Below is some sample code to help get you started calling the API

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.getPersonById(1);
  }

  personList: PersonViewModel[] = [];
  personToEdit?: PersonViewModel;
  listLenght: number = 0;
  
  getPersonById(id: number): void {
    this.http.get<PersonViewModel[]>(this.baseUrl + `api/person/${id}`).subscribe((result: PersonViewModel[]) => {
      //console.log(result);
      this.listLenght = result.length;
      this.personList = result;
    }, error => console.error(error));
  }

  updatePersonList(person: PersonViewModel) {
    if (person.existingPerson) {
      let updateAtIndex = person.id - 1;
      this.personList[updateAtIndex] = person;
    } else {
      this.listLenght++;
      person.id = this.listLenght;
      this.personList.push(person);
    }
    this.personToEdit = undefined;
  }

  createPerson() {
    this.personToEdit = new PersonViewModel();
  }


  editPerson(person: PersonViewModel) {
    this.personToEdit = person;
  }
}
