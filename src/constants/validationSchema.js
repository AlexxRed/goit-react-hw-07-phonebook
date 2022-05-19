import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().min(8).positive().required(),
});