function func() {
	return (new Date).getDate();
}
let arr = [2025,1  ,31];
let [year=(new Date).getFullYear, month=(new Date).getMonth, day = func()] = arr;
console.log(year)
console.log(month)
console.log(day)