import * as yup from 'yup';

let schema = yup.object().shape({
    name: yup.string().min(2).max(255).required(),
    username: yup.string().min(2).max(255).required(),
    password: yup.string().min(2).max(16).required(),
    gender: yup.string().required(),
    birthDate: yup.date().required(),
    about: yup.string()
});

export default schema;