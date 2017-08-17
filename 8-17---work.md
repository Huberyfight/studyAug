## 第一章
1、js六种基本数据类型：number，string,boolean,object,function,undefiend;  
2、js使用固定长度为64的为序列存储数字值，十进制N位，可以表示10^N个数字；  
3、三个特殊值：infinity，-infinity，NaN(数值型，表示‘非数值’的意思，只有NaN不等于本身)；  
4、一元运算符，typeof，-；字符串进行运算比较标准是Unicode；  
&ensp;&ensp;&ensp;关系运算符：`===`，`!===`，严格相等和严格不等。  
   ```js
   console.log(0==false);//true
   console.log(""==false);//true
   console.log(0===false);//false
   console.log(""===false);//false
   console.log(NaN==false);//false
   console.log(null==false);//false
   console.log(undefined==null);//true
```  
&ensp;&ensp;&ensp;运算符的优先级：|| < && < 其他运算符，其中||，&&具有短路特性`console.log(false||'hello')`,返回右侧的值，如果左侧的值不为false，返回左侧的值；同理，`console.log(true && null)`返回true。  

---
## 第二章
```js
var arr = new Array('1', '2', '3');  
if (!Array.indexOf) {  
    Array.prototype.indexOf = function (obj) {  
        for (var i = 0; i < this.length; i++) {  
            if (this[i] == obj) {  
                return i;  
            }  
        }  
        return -1;  
    }  
}  
var index = arr.indexOf('1');//为index赋值为0  
```
