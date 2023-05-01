import {object, string} from 'yup';

const createSessionForm = object({
  email: string().required().email(),
  password: string().required().min(8),
});

export default createSessionForm;
