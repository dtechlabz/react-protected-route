class FakeAuthService {
  authenticate = cb => {
    this.authenticated = true;
    setTimeout(cb, 100); // fake async
  };
  signout = cb => {
    this.authenticated = false;
    setTimeout(cb, 100); // fake async
  };

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new FakeAuthService();
