import * as yup from "yup";

yup.setLocale({
  mixed: {
      required: 'Это обязательное поле'
    }
});

export const emailPasswordSchema = yup.object().shape({
  email: yup.string().email().max(200).required(),
  password: yup.string().min(3).max(128).required(),
});

export const registrationSchema = emailPasswordSchema.shape({
  privacyPolicyAgreement: yup
    .bool()
    .default(false)
    .oneOf([true], "Должно быть отмечено"),
});

export const userDetailedInfoSchema = yup.object().shape({
  firstName: yup.string().max(200).required(),
  middleName: yup.string().max(200),
  lastName: yup.string().max(200).required(),
  telegram: yup
    .string()
    .matches(/^@(?=\w{5,64}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/, {
      message: "Требуется telegram-id, начинающийся с @",
    })
    .required(),
  dateOfBirth: yup.date().max(new Date(), "Дата должна быть в прошлом"),
  workPlace: yup.string().max(200).required(),
  resume: yup.string().max(5000),
  otherInfo: yup.string().max(5000),
});
