export const calcAge = (birthDate: string) => {
  const date1 = new Date(birthDate);
  const date2 = new Date(new Date().toISOString().split("T")[0]);
  const diff = date2.getFullYear() - date1.getFullYear();
  const isAboveMonth = date1.getMonth() > date2.getMonth();
  const isAboveDay = date1.getDate() > date2.getDate();

  if (isAboveMonth || (!isAboveMonth && isAboveDay)) return (diff - 1)
  else return diff;
}
