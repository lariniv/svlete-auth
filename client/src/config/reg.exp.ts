export const EMAIL_REGEXP: RegExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
export const PASSWORD_REGEXP: RegExp = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/
);
