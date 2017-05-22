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
    // Or we can just check for JWT expiry time
    return tokenNotExpired()
  },

  getToken() {
    localStorage.getItem('token')
  },

  getUserRole() {
    return jwtDecode(this.getToken()).scope
  }
}

export default auth
