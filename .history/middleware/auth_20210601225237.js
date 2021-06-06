export default function ({ store, redirect, route }) {
  const userIsLoggedIn = !!store.state.auth.user
  // const urlRequiresAuth = /^\/admin(\/|$)/.test(route.fullPath)
  // const urlRequiresNonAuth = /^\/login(\/|$)/.test(route.fullPath)
  if (!userIsLoggedIn) {
    return redirect('/index')
  }
  if (userIsLoggedIn) {
    return redirect('/profile')
  }
  return Promise.resolve()
}
