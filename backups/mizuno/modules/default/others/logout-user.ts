// função responsavel por fazer o logout do usuário corretamente.
export const logoutUser = (account: string, to: string) => {
  window.location.href = `/api/vtexid/pub/logout?scope=${account}&returnUrl=/${to}`
}
