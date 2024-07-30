export default function getStudentsByLocation(arr, city) {
  const newArr = arr.filter((item) => item.location === city);
  return newArr;
}
