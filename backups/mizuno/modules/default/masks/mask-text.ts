export const maskText = (text: string | undefined) => {
  return text
    ? (text as any)
    .replace(/[ÈÉÊËéèê]/g, "e")
        .replace(/[ÌÍÎíìî]/g, "i")
        .replace(/[ÒÓÔÕòóôõ]/g, "o")
        .replace(/[ÚÙÛúùû]/g, "u")
        .replace(/[Çç]/g, "c")
        .replace(/-/g, " ")
        .toLowerCase()
    : ""
}
