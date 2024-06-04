export function convertToArabicNumber(number: number) {
  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return number
    .toString()
    .split("")
    .map((char) => (/\d/.test(char) ? arabicNumbers[parseInt(char)] : char))
    .join("");
}
