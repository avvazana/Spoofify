export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const fetchCurrentUser = user => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}`
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
