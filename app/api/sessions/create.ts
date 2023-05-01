import ApplicationApi from '../applicationApi';

type Props = {
  email: string;
  password: string;
};

class CreateSession extends ApplicationApi {
  email: string;
  password: string;

  constructor({email, password}: Props) {
    super();
    this.email = email;
    this.password = password;
  }

  async run(): Promise<Response | void> {
    const response = await this.request({
      method: 'POST',
      url: 'users/sign_in',
      body: {
        user: {
          email: this.email,
          password: this.password,
        },
      },
    });

    return response;
  }
}

export default CreateSession;
