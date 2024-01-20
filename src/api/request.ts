export const fetchJSON = async <Result>(
  info: RequestInfo,
  init: RequestInit = {}
): Promise<Result> => {
  const response = await fetch(info, {
    ...init,
    headers: {
      ...(init.headers || {}),
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
