export class TestDataGenerator {

  static randomFirstName(): string {
    const names = ['John', 'Alex', 'David', 'Mike'];
    return names[Math.floor(Math.random() * names.length)];
  }

  static randomLastName(): string {
    const names = ['Smith', 'Brown', 'Taylor', 'Wilson'];
    return names[Math.floor(Math.random() * names.length)];
  }

  static randomUsername(): string {
    return `user${Date.now()}`;
  }

  static randomEmail(): string {
    return `user${Date.now()}@gmail.com`;
  }

  static randomPhone(): string {
    return `9${Math.floor(
      100000000 + Math.random() * 900000000
    )}`;
  }

  static randomPassword(): string {
    return `Pass@${Math.floor(
      Math.random() * 10000
    )}`;
  }

  static randomAddress(): string {
    return `${Math.floor(Math.random()*500)} Main Street`;
  }

  static randomCity(): string {
    const cities=['New York','Chicago','Dallas'];
    return cities[Math.floor(Math.random()*cities.length)];
  }

  static randomState(): string {
    const states=['NY','TX','CA'];
    return states[Math.floor(Math.random()*states.length)];
  }

  static randomZipCode(): string {
    return `${Math.floor(
      10000 + Math.random()*90000
    )}`;
  }

  static randomSSN(): string {
    return `${Math.floor(
      100000000 + Math.random()*900000000
    )}`;
  }

}