import { createLittera } from "@assembless/react-littera";

const LOCALES = ["en_US", "pl_PL"] as const;

const PRESET = {
  en_US: {
    Qlanguage: "english",
    yes: "Yes",
    no: "No",
    register: "Register",
    password: "password",
    login: "login",
    confirmPassword: "confirm password",
    name: "name",
    description: "description",
    save: "save",
    Languege: "Languege",
  },
  pl_PL: {
    Qlanguage: "Polski",
    yes: "tak",
    no: "nie",
    register: "rejestracja",
    password: "hasło",
    login: "zaloguj",
    confirmPassword: "potwiedź hasło",
    name: "nazwa",
    description: "opis",
    save: "zapisz",
    Languege: "język",
  },
};
const { LitteraService, makeTranslations, useLitteraMethods } = createLittera(
  LOCALES,
  PRESET
);

export { LitteraService, makeTranslations, useLitteraMethods };
