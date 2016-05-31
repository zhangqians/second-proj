'use strict';
var arr=[];
function double_to_one(collection) 
{
//在这里写入代码

for(var i=0;i<collection.length;i++)
{
	if(collection[i] instanceof Array)
	{
	double_to_one(collection[i]);
	}
	else
	{
		arr.push(collection[i]);
		}
}
	return arr;
}

module.exports = double_to_one;
