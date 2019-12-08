function SavingsAccount(accountNumber, email, firstName, lastName) {
  if (accountNumber.length >= 6) {
    this._accountNumber = accountNumber;
  } else {
    throw new Error('Account Number must be a 6-digit number');
  }

  const EMAIL_PATTERN = /\w+@\w+\.\w+/;
  if (EMAIL_PATTERN.test(email)) {
    this._email = email;
  } else {
    throw new Error('Invalid e-mail');
  }
  if (firstName.length >= 3 && firstName.length <= 20) {
    this._firstName = firstName;
  } else {
    throw new Error('First name must be between 3 and 20 characters long');
  }
  const lastNamePattern = /^[a-zA-Z]+$/;
  if (lastNamePattern.test(lastName) === true) {
    this._lastName = lastName;
  } else {
    throw Error('Last name must contain english alphabets only');
  }
  this.products = [];
}

export {
  SavingsAccount,
};
