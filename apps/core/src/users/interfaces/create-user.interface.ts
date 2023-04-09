export class CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export class CreateUserOutput {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
