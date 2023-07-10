import Joi from "joi";
import ValidationException from "../exceptions/ValidationException";

export const userCreateSchema = Joi.object({
    name: Joi
        .string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    age: Joi
        .number()
        .integer()
        .min(10)
        .max(65).required(),
    gender: Joi.string(),
    id: Joi.number().required(),
})

export const userGetSchema = Joi.object({
    id: Joi.number()
})

export const userUpdateSchema = Joi.object({
    name: Joi
        .string()
        .alphanum()
        .min(3)
        .max(30),
    age: Joi
        .number()
        .integer()
        .min(10)
        .max(65),
})

function validateReq (obj, schema, next) {
    try {
        let error = schema.validate(obj).error;
        if (error) {
            const message = error.details.map(i => i.message).join(',');
            throw new ValidationException(message);
        } else {
            next();
        }
    } catch (e) {
        next(e);
    }
}

export function validate (schema, property = 'body') {
    return (req, res, next) => {
        validateReq(req[property], schema, next);
    }
}
