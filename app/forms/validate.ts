import {InferType} from 'yup';

export type ValidationError = {
  field: string;
  message: string;
};

async function validateForm(
  form: InferType<typeof data>,
  data: any,
): Promise<boolean | ValidationError> {
  try {
    await form.validate(data);

    return true;
  } catch (error: any) {
    console.log(error, 'oioioio');
    const validationError = {
      field: error.path,
      message: error.message,
    } as ValidationError;

    return validationError;
  }
}

export default validateForm;
