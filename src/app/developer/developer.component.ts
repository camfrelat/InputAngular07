import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  public developer!: Developer;

  constructor() {}

  ngOnInit(): void {
    this.developer = new Developer(
      'Rogers',
      'Steve',
      38,
      'Male',
      'Je suis un nouveau developeur',
      [
        new Skill('JS', 'Js Logo', 'url my website'),
        new Skill('Java', 'Java Logo', 'url my website in Java'),
      ]
    );
  }
}
