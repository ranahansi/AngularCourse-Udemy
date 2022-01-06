import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent{
  title = "List of Courses";
  courses;

  constructor(service : CoursesService){
    this.courses = service.getCourses();
  }

}
