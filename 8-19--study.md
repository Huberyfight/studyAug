### 过渡
1. splice 和 split区别  
arrayObject.splice(index,howmany,item1,.....,itemX)  
- index ：整数位置，负数从尾部开始
- howmany : 个数，0 不删除项目
- item ： 替换的值，可以新添
arrayObject.slice(start,end)  
- start：开始位置，-1为最后一个
- end：结束位置
- 返回的数组（start,end]
splice:直接操作数组
2. transition
css动画属性，有四个值
- transition-property:应用属性，一般all
- transition-duration:持续时间
- transition-timing-function:时间曲线，ease立方贝塞尔曲线
- transition-delay:延迟时间
