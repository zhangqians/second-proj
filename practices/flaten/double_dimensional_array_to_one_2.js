'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var arr=[];
  for(var i=0;i<collection.length;i++)
  {
	  var arrs=new Array();
	  arrs=collection[i];
  for(var j=0;j<arrs.length;j++)
  {
	  var mytmp=arrs[j];
	  if(arr.indexOf(mytmp)==-1)
	  arr.push(mytmp);
	  }
	  }
	return arr;
}

module.exports = double_to_one;
