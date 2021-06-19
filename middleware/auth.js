export default function ({ store, redirect, route }) {
  const userIsLoggedIn = store.state.auth.loggedIn

  if (!userIsLoggedIn) {
    console.log('redirecting to login and userIsloggedIn is', userIsLoggedIn)
    return redirect('/login')
  }
  // if (userIsLoggedIn) {
  //   console.log('redirecting to admin and userIsloggedIn is', userIsLoggedIn)
  //   return redirect('/admin')
  // }
}
