import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(fileName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      // console.log(res)
      res.map((o) => ({
        status: o.status,
        value: o.status === 'fulfilled' ? o.value : String(o.reason),
      }))));
}
