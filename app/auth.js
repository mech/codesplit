const auth = {
  login(email, password) {
    fetch('http://192.168.1.10:3000/auth/token', {
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
