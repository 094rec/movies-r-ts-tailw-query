export const mutationLogin = async () => {
  const res = await fetch('https://api.themoviedb.org/3/authentication/guest_session/new', {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODM0MTNlYmQ3YmM0ZTRmZWViNzYyMjRiMTgzNTUzMSIsIm5iZiI6MTcyNTM2Mzc1Ni45MjAwNDEsInN1YiI6IjY2ZDZkOGM0NGFhZjUyN2RiOWJkMjZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YKl_p4dE2lHM4TsaZML_C2UwAA8ryj3cWDo5vI7Wh1Q'
    },
  });
  return await res.json();
};