export const toPersianDigits = (value) => {
  const id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return value.replace(/[0-9]/g, (x) => id[+x]);
};
export const toEnglishDigits = (value) => {
  const id = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
  for (let i = 0; i < 10; i++) {
    value = value.replace(id[i], i);
  }
  return value;
};
