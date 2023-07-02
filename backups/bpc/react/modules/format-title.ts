export const formatToTitle = (str?:string) => {
  if (!Boolean(str)) return str

  return str?.replace(/-/g, ' ')?.replace(/^\w/, (match:string) => {
    return match?.toUpperCase();
  });
}
