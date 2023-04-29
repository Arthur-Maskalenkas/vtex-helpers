export const formatPhone = function (phone: string) {
  if (typeof phone != "string") return phone;
  const onlyNumbers = phone?.replace(/\D/g, '');
  if (onlyNumbers.length > 11 || onlyNumbers.length < 10) return phone;
  return onlyNumbers.split("").map((number, index) => {
    if (index == 0) return "(" + number;
    if (index == 1) return number + ") ";
    if (index == onlyNumbers.length - 4) return "-" + number;
    return number;
  }).join("")
};
