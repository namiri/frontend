export default function ({ store, redirect, route }) {
  console.log(store.state.auth.user)
  const userIsLoggedIn = !!store.state.auth.user
  // const urlRequiresAuth = /^\/admin(\/|$)/.test(route.fullPath)
  // const urlRequiresNonAuth = /^\/login(\/|$)/.test(route.fullPath)
  if (!userIsLoggedIn) {
    return redirect('/login')
  }
  // if (userIsLoggedIn) {
  //   return redirect('/index')
  // }
  return Promise.resolve()
}
