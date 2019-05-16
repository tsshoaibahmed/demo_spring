function convertToDate(javadate){
    	var date;
		if(javadate){
		date=new Date(javadate);
		 dd=date.getDate();
		 mm=date.getMonth()+1;
		 yy=date.getFullYear();		
		 if(dd<10){dd='0'+dd;}
		if(mm<10){mm='0'+mm;}date=dd+"-"+mm+"-"+yy;}
		else{date="";}
	return	date;
		
	}
    
    function convertToDateTime(javadate){
    	//alert("ddddd "+javadate);
		var date;
		if(javadate){
		date=new Date(javadate);
		 dd=date.getDate();
		 mm=date.getMonth()+1;
		 yy=date.getFullYear();
		 hh=date.getHours();
		 mi=date.getMinutes();
		 ampm=hh>=12?'PM':'AM';
		 hh=hh%12;
		 hh=hh?hh:12;
		 mi=mi<10?'0'+mi:mi;
		 time=hh+':'+mi+' '+ampm;
		 if(dd<10){dd='0'+dd;}
		if(mm<10){mm='0'+mm;}date=dd+"-"+mm+"-"+yy+' '+time;}
		else{date="";}
	return	date;
		
	}