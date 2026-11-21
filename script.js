function minDate(dates) {
  //write you code here
    let Arr = [];
	for(let i=0;i<dates.length;i++){
        let dateStr = dates[i].slice(0,4) + dates[i].slice(5,7)+ dates[i].slice(8,10);
		let dateNum = Number(dateStr);
		
		Arr.push(dateNum);
	}
	let smallestDate = 99999999;

	for(let i=0;i<Arr.length;i++){
		if(Arr[i]<smallestDate){
			smallestDate = Arr[i];
		}
	}
	let year = smallestDate.toString().slice(0,4);
	let month = smallestDate.toString().slice(4,6);
	let date = smallestDate.toString().slice(6,8);
	
	
	let ans = `"${year+month+date}"`;
	return ans;
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));




