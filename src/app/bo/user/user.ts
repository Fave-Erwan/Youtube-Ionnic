export class User {
  id: number;
  firstname: string;
  lastname: string;
  nickname: string;
  age: number;

  constructor(
    id: number,
    firstname: string,
    lastname: string,
    nickname: string,
    age: number
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.nickname = nickname;
    this.age = age;
  }
}
