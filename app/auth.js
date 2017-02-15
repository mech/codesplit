const auth = {
  login(email, password) {
    return fetch(`${process.env.BASE_URL}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }).then(res => res.json())
  },

  isAuthenticated() {
    return true
  }
}

export default auth
