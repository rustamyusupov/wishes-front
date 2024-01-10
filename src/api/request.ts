export const fetchJSON = async <Result>(
  info: RequestInfo,
  init: RequestInit = {}
): Promise<Result> => {
  const token = localStorage.getItem('token');

  const response = await fetch(info, {
    ...init,
    headers: {
      ...(init.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init.method && init.method.toUpperCase() !== 'GET'
        ? { 'Content-Type': 'application/json' }
        : {}),
      Accept: 'application/json',
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw json;
  }

  return json;
};
