/**
 * @param {string[]} emails
 * @return {number}
 */

const replaceDotsAndPlus = (email) => {
  let [localName, domainName] = email.split('@');
  if (localName.includes('.')) {
    localName = localName.replace(/\./g, '');
  }
  if (localName.includes('+')) {
    localName = localName.substring(0, localName.indexOf('+'));
  }
  return `${localName}@${domainName}`;
};

const numUniqueEmails = function (emails) {
  const normalEmails = emails.map(replaceDotsAndPlus);
  return new Set([...normalEmails]).size;
};

export default numUniqueEmails;
