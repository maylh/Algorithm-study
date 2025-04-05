function solution(a, b) {
    let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = "2016-" + a + "- " + b;
  let day = new Date(date);
  return week[day.getDay()];
}