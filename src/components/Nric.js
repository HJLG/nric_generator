export function Nric() {
  const first_letter = "STFG";
  const digits = "0123456789";
  const last_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let first = first_letter[Math.floor(Math.random() * first_letter.length)];
  let number = "";
  for (let i = 0; i < 7; i++) {
    number += digits[Math.floor(Math.random() * digits.length)];
  }
  let last = last_letter[Math.floor(Math.random() * last_letter.length)];
  let random_nric = `${first}${number}${last}`;
  return random_nric;
}
