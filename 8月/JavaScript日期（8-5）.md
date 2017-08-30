<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<div>
	<p id="f" style="color:green">
		
	</p>
	<p id='l'>
		
	</p>
	<p id='m'>
		
	</p>
	<p id="q" style="color:red"></p>
</div>
	<script>
		var dateThree=new Date();
		var date = new Date(dateThree.getYear(),dateThree.getMonth(),dateThree.getDate());
		var dateMiniTime=date.getTime();
		var dateone= new Date(2013,11,2);
		var datetwo=new Date(date.getTime());

		document.getElementById('f').innerText=date;
		document.getElementById('l').innerText=new Date().getTime();//获取当前时间的时间戳
		//将时间戳转为日期型，注意只有date对象才能调用toLocaleString对象
		document.getElementById('m').innerText=new Date(new Date().getTime()).toLocaleString();
		document.getElementById('q').innerText=dateThree;
		console.log(dateMiniTime);
		console.log(dateMiniTime.toLocaleString());
	</script>
</body>
</html>