export const profileSystemApiGet = async function () {
  const response = await fetch('/no-cache/profileSystem/getProfile')
  const profile = await response.json();

  return profile
}

await profileSystemApiGet()