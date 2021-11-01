import { Skill } from './skill.model';

export class Developer {
  public lastname: string;
  public firstname: string;
  public age: number;
  public sexe: string;
  public bio: string;
  public skills: Skill[];

  constructor(
    lastname: string,
    firstname: string,
    age: number,
    sexe: string,
    bio: string,
    skills: Skill[]
  ) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.age = age;
    this.sexe = sexe;
    this.bio = bio;
    this.skills = skills;
  }
}
