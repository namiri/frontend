export default function ({ store, redirect, route }) {
  const userIsLoggedIn = !!store.state.auth.user
  if (!userIsLoggedIn) {
    return redirect('/login')
  }
  if (userIsLoggedIn) {
    return redirect('/inspire')
  }
  return Promise.resolve()
}
