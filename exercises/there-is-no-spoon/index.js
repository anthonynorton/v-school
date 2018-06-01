// There is no spoon
class Thing {
  get instanceOf() {
    return this.constructor.name
  }

  get instanceArticle() {
    return ['AEIOUaeiou'].includes(this.instanceOf.substr(0, 1)) ? 'an' : 'a';
  }

  get instanceDeclaration() {
    return `I am ${this.instanceArticle} ${this.instanceOf} instance.`;
  }
}

class Furniture extends Thing{
  constructor(config) {
    super(config);
    this.type = config.type;
    this.numLegs = config.numLegs;
    this.purpose = config.purpose;
  }

  write() {
    console.log(`${this.instanceDeclaration} I am ${this.typeArticle} ${this.type}. I have ${this.numLegs} legs. My purpose is ${this.purpose}.`);
  }

  get typeArticle() {
    return ['AEIOUaeiou'].includes(this.type.substr(0, 1)) ? 'an' : 'a';
  }
}

const table = new Furniture({
  type: 'table',
  numLegs: 4,
  purpose: 'to be a convinient place to set things',
});

const chair = new Furniture({
  type: 'chair',
  numLegs: 4,
  purpose: 'to give people a place to sit'
});

table.write();
chair.write();
