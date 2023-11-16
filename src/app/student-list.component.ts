import { Component } from '@angular/core';
import { Student } from './student';
@Component({
    selector: 'student-list',
    templateUrl: './student-list.component.html'
  })
  export class StudentListComponent
{
  students: Student[] = [
 
    {name: 'Rahuld Dravid',age:'50',class:'2',mobile:'908823456789' },
    {name: 'Prashant Dravid',age:'24',class:'3',mobile:'9835672726' },
    {name: 'Rahuld Dravid',age:'50',class:'4',mobile:'893626326667' },
    
   
 
  ]
}
 