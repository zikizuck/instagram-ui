import * as yup from 'yup';

let schema = yup.object().shape({
    username: yup.string().min(2).max(255).required(),
    password: yup.string().min(2).max(16).required(),
});

export default schema;