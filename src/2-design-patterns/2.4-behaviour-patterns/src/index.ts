
/**
Tenemos una aplicación en la cual hay un listado de objetos persona cuyas propiedades son (name, surname, age, childrens [número de hijos]). En la aplicación podemos ORDENAR el listado por nombre (alfabético ascendente y descendente), edad (ascendente y descendente) y numero de hijos (ascendente y descendente). Además podemos asociar tanto a un botón como a un shorcut la ordenación (inventarse el shortcut).

Realizar la implementación de varias maneras:

- Enteramente con clases sin importarnos que estamos en JS
- Utilizando JS con funciones generadoras
- Utilizando Symbol.iterator
Pista: Hay dos patrones a implementar en el ejercicio
 */

interface Person {
  name: string;
  surname: string;
  age: number;
  children: number;
}

abstract class ListIterator<T> {
  peopleList: T[];
  currentIndex: number;

  constructor(peopleList: T[]) {
    this.peopleList = peopleList;
    this.currentIndex = 0;
  }

  abstract getNext(): Person;
  abstract hasMore(): boolean;
}

abstract class List<T> {
  list: T[];

  constructor(list: T[]) {
    this.list = list;
  }

  abstract createAgeIterator(_iterator: ListIterator<T>): ListIterator<T>;
  abstract createNameIterator(_iterator: ListIterator<T>): ListIterator<T>;
  abstract createChildrenIterator(_iterator: ListIterator<T>): ListIterator<T>;
}

class PeopleList extends List<Person> {
  // eslint-disable-next-line no-useless-constructor
  constructor(list: Person[]) {
    super(list);
  }

  createAgeIterator(): ListIterator<Person> {
    return new AgeIterator(this.list);
  }

  createNameIterator(): ListIterator<Person> {
    return new NameIterator(this.list);
  }

  createChildrenIterator(): ListIterator<Person> {
    return new ChildrenIterator(this.list);
  }

  createReverseAgeIterator(): ListIterator<Person> {
    return new ReverseAgeIterator(this.list);
  }

  createReverseNameIterator(): ListIterator<Person> {
    return new ReverseNameIterator(this.list);
  }

  createReverseChildrenIterator(): ListIterator<Person> {
    return new ReverseChildrenIterator(this.list);
  }
}

class AgeIterator extends ListIterator<Person> {
  constructor(peopleList: Person[]) {
    super(peopleList.sort((a, b) => a.age - b.age));
  }

  getNext(): Person {
    const person = this.peopleList[this.currentIndex];
    this.currentIndex++;
    return person;
  }

  hasMore(): boolean {
    return this.currentIndex < this.peopleList.length;
  }
}

class NameIterator extends ListIterator<Person> {
  constructor(peopleList: Person[]) {
    super(peopleList.sort((a, b) => a.name.localeCompare(b.name)));
  }

  getNext(): Person {
    const person = this.peopleList[this.currentIndex];
    this.currentIndex++;
    return person;
  }

  hasMore(): boolean {
    return this.currentIndex < this.peopleList.length;
  }
}

class ReverseAgeIterator extends ListIterator<Person> {
  constructor(peopleList: Person[]) {
    super(peopleList.sort((a, b) => b.age - a.age));
  }

  getNext(): Person {
    const person = this.peopleList[this.currentIndex];
    this.currentIndex++;
    return person;
  }

  hasMore(): boolean {
    return this.currentIndex < this.peopleList.length;
  }
}

class ReverseNameIterator extends ListIterator<Person> {
  constructor(peopleList: Person[]) {
    super(peopleList.sort((a, b) => b.name.localeCompare(a.name)));
  }

  getNext(): Person {
    const person = this.peopleList[this.currentIndex];
    this.currentIndex++;
    return person;
  }

  hasMore(): boolean {
    return this.currentIndex < this.peopleList.length;
  }
}

class ChildrenIterator extends ListIterator<Person> {
  constructor(peopleList: Person[]) {
    super(peopleList.sort((a, b) => a.children - b.children));
  }

  getNext(): Person {
    const person = this.peopleList[this.currentIndex];
    this.currentIndex++;
    return person;
  }

  hasMore(): boolean {
    return this.currentIndex < this.peopleList.length;
  }
}

class ReverseChildrenIterator extends ListIterator<Person> {
  constructor(peopleList: Person[]) {
    super(peopleList.sort((a, b) => b.children - a.children));
  }

  getNext(): Person {
    const person = this.peopleList[this.currentIndex];
    this.currentIndex++;
    return person;
  }

  hasMore(): boolean {
    return this.currentIndex < this.peopleList.length;
  }
}

class SortApp {
  #peopleList: PeopleList;

  constructor({ people }: { people: Person[] }) {
    this.#peopleList = new PeopleList(people);
  }

  sortByAge() {
    const orderedList: Person[] = [];
    const ageIterator = this.#peopleList.createAgeIterator();
    while (ageIterator.hasMore()) {
      const nextPerson = ageIterator.getNext();
      orderedList.push(nextPerson);
    }

    return orderedList;
  }
}

abstract class Command<T> {
  abstract execute(): void;

  print(iterator: ListIterator<T>) {
    while (iterator.hasMore()) {
      const nextPerson = iterator.getNext();
      console.log(nextPerson);
    }
  }
}

class SortAgeCommand extends Command<Person> {
  private payload: PeopleList;

  constructor(payload: PeopleList) {
    super();
    this.payload = payload;
  }

  public execute(): void {
    const ageIterator = this.payload.createAgeIterator();
    this.print(ageIterator);
  }
}

class ReverseSortAgeCommand extends Command<Person> {
  private payload: PeopleList;

  constructor(payload: PeopleList) {
    super();
    this.payload = payload;
  }

  public execute(): void {
    const iterator = this.payload.createReverseAgeIterator();
    this.print(iterator);
  }
}

class Button<T> {
  private command : Command<T>;

  constructor(command: Command<T>) {
    this.command = command;
  }

  onClick() {
    this.command.execute();
  }
}

class Shorcut<T> {
  private command : Command<T>;

  constructor(command: Command<T>) {
    this.command = command;
  }

  onShorcutPress() {
    this.command.execute();
  }
}

const button = new Button(new SortAgeCommand(new PeopleList([{ name: 'Hola', age: 1, surname: 'mundo', children: 3 }, { name: 'Adios', age: 2, surname: 'luna', children: 2 }])));

button.onClick();

describe('sort', () => {
  const people: Person[] = [
    { name: 'John', surname: 'Doe', age: 30, children: 2 },
    { name: 'Alice', surname: 'Smith', age: 25, children: 1 },
    { name: 'Bob', surname: 'Johnson', age: 40, children: 3 },
  ];

  it('should sort by age asc', () => {
    const orderedList: Person[] = [];

    const peopleList = new PeopleList(people);
    const ageIterator = peopleList.createAgeIterator();
    while (ageIterator.hasMore()) {
      const nextPerson = ageIterator.getNext();
      orderedList.push(nextPerson);
    }

    expect(orderedList).toEqual([
      { name: 'Alice', surname: 'Smith', age: 25, children: 1 },
      { name: 'John', surname: 'Doe', age: 30, children: 2 },
      { name: 'Bob', surname: 'Johnson', age: 40, children: 3 },
    ]);
  });
});
