const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODM0MTNlYmQ3YmM0ZTRmZWViNzYyMjRiMTgzNTUzMSIsIm5iZiI6MTcyNTM2Mzc1Ni45MjAwNDEsInN1YiI6IjY2ZDZkOGM0NGFhZjUyN2RiOWJkMjZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YKl_p4dE2lHM4TsaZML_C2UwAA8ryj3cWDo5vI7Wh1Q',
  },
};

export const request = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`Fetching failed ${res.status}: ${res.statusText}`);
  return await res.json();
};
