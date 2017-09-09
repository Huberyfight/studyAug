### <center>js 编程精解</center>
**1. arguments**

- 每个function都有一个arguments对象，可以通过arguments.length来判断函数传进的参数个数
- 通过arguments[i]来获取传进的参数。  

**2. 取随机数**

- Math.random()函数，随机取0~10的整数：不包括10，`Math.floor(Math.random()*10)`;包括10，`Math.round(Math.random()*10)`
- Math.ceil()上取整  
- Math.sort(),本身是靠ASCII升序的，可以在sort中添加比较函数
```js
var x=[ 0, 9, 2, 5, 4, 3, 6, 7, 8, 1, 10 ]
console.log(Math.sort(function(a,b){
  if(a > b){
    return 1;
  }else if (a < b) {
    return -1;
  }else{
    return 0;
  }
}));
```
**3. 全局对象**

- 所有的全局变量都存储在window中，通过`window.myVar`可以取到全局变量

**4. <font color='red'>不要用</font>myT in T的形式判断元素在数组中是否存在**

```js
var t = [1, 3, 2, 9, 5]
for (var i = 0; i < t.length; i++) {
  if (t[i] in t)
    console.log(t[i] + ' true')
  else
    console.log(t[i] + ' false')
}
console:
  1 true
  3 true
  2 true
  9 false
  5 false
  [Finished in 0.209s]
```
**5. 访问值属性**

- value.propName
- value['propName']  
- 