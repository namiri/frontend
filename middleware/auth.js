export default function ({ store, redirect, route }) {
  const userIsLoggedIn = !!store.state.auth.user
  if (!userIsLoggedIn) {
    return redirect('/login')
  }
  if (userIsLoggedIn) {
    return redirect('/admin')
  }
  return Promise.resolve()
}
