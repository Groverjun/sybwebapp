function getWeekAll(begin,end){
    var dateAllArr = new Array();
    var ab = begin.split("-");
    var ae = end.split("-");
    var db = new Date();
    var newArr=[]
    db.setUTCFullYear(ab[0], ab[1]-1, ab[2]);
    var de = new Date();
    de.setUTCFullYear(ae[0], ae[1]-1, ae[2]);
    var unixDb=db.getTime();
    var unixDe=de.getTime();
    for(var k=unixDb;k<=unixDe;){
        dateAllArr.push((new Date(parseInt(k))).format().toString());
        k=k+7*24*60*60*1000;
    }
    for(var i=0;i<=dateAllArr.length;i++){
    	newArr.push(dateAllArr[i]+'——'+dateAllArr[i+1])
    	
    }
    newArr.splice(dateAllArr.length-1,1)
    newArr.splice(dateAllArr.length-1,1)
    console.log(newArr)
    return dateAllArr;
}