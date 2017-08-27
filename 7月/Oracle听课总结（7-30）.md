### oracle 总结

1. null值会导致运算结果也为空；
2. 列表名中区分大小写、包含空格、包含特殊字符需要加英文双引号；
3. nvl函数，nv（参数1，参数2）参数1不为空时，结果为参数1,；为空，结果为参数2；
4. 连接符||，需要连接连接非字段值的时候需要单引号；
5. 日期进行比较，需要加单引号；
6. %代表任意多个字符，_代表一位字符，如果想下划线就是代表下划线，加入@，然后去除@；
```
select ename from emp where ename like 'S@_%' escape '@'
```
如果字段值中包含单引号，直接加入单引号进行标识：

```
select ename from emp where ename like's''%'
```
7. 不要用like取通配时间，not in，not like,is null;
8. desc降序，asc升序；
9. upper,lower,切换大小写；
10. concat连接符效果等同于||；可以从一个虚表中显示结果。

```
select concat('hello','world')
```
substr(para,n1,n2)

para：要操作的字符

n1：从第几个开始截取（左包右不包）可以为负数（从倒数第几个开始截）

n2:截取的长度（不能为负数,省略等于一直截取到尾）

11.length（参数），查看字符长度；
12.instr(s1,s2,s3,s4)返回s1中s2从s3开始第s4次出现的位置，s3，s4省略默认为1；


```
select ename from emp where substr(ename,3,1)='A';
等价于
select ename from emp where instr(ename,'A',3,1)=3;
不包含A
select ename from emp where instr(ename,'A',1,1)=0;
包含A
select ename from emp where instr(ename,'A',1,1)<>0;
```
13.trim功能类似Java中的trim

```
select trim(' 'from ' he llo   ') from dual;
```
14.replace(s1,s2,s3,s4)将s1中的s2用s3替换
15.四舍五入

round(99.345,2)  99.36

trunc(99.345,2)  99.34

mod(200,-1220)   200

mod(-200,-1220)  -200

mod(-200,-1220)  -200

16.单行函数--日期型

add_months(time,number)

months_between(time1,time2)

next_day(time,str)str为星期，1~7或者英文，中文星期

```
select next_day(sysdate,'星期五') from dual
```
last_day当月的最后一天

17.

```
---round  将月份四舍五入，不够的保留x月1日
select hirdate,round(hirdate,'month') from emp

---extract

select hiredate,extract(month from hiredate) from emp
```
18.

```
---日期型
select hiredate,to_char(hiredate,'YYYY')，
to_char(hiredate,'YEAR'),
to_char(hiredate,'MM'),--03
to_char(hiredate,'MONTH'),---3月
to_char(hiredate,'DAY'),
to_char(hiredate,'DY'),
to_char(hiredate,'HH24:MI:SS AM'),---上午
to_char(hiredate,'DD "of" MONTH'),
from dual


---字符型
select sal,to_char(sal,'$9999,999.99') from emp 


---数字型
select to_number('123455.44','999999.999') from dual

---to_date

select sysdate-to_date('1982 1月 2日','YYYY  MONTH DD "日"') from dual

---通用函数
---nvl参数数据类型必须一致

select ename,comm,nvl(comm,0) from emp

---nvl2(n1,n2,n3)不为空返回n2,否则返回n3
---nullif(n1,n2)相等返回空值，否则返回n1
---coalesce(n1,n2,n...)函数 无限多个参数，返回一个不为空的值
---case、decode

select ename,deptno,(case deptno
                        when 10 then '技术部'
                        when 20 then '销售部'
                        when 30 then '管理部'
                        else '小卖部' end)部门名称
from emp

select ename,deptno,decode(deptno,
                            10,'技术部',
                            20,'销售部',
                            30,'管理部',
                            '小卖部')部门名称
from emp                            
```
19.多表连接

```
---笛卡尔积现象：一张表中的所有行与另一张表中的所有行都发生连接的现象。需要避免
---等值连接

select emp.ename,emp.deptno from emp,dept where emp.deptno=dept.deptno

---非等值连接

select ename,sal,grade from emp,salgrade where emp.sal between low and high;

---外部连接 (+)oracle 特殊写法，查询没有员工的部门，哪边缺数据加号在哪边

select e.ename,d.deptno from emp e,dept d where e.deptno(+)=d.deptno

---自连接（内连接）

select e.ename,m.ename from emp e, emp m where e.mgr=m.empno(+)

---on子句,,on一般后面只接连接条件，非连接条件加在where后面

select ename,dname from emp join dept d on e.deptno=d.deptno

---左外连接 left outer join左边的为主表，主表的内容全部显示，从表中没有匹配的空行显示

select ename,dname from emp e left outer join  on e.depno=d.deptno

---右外连接 right outer join 

---full outer join 全外连接

select ename,dname from emp e full outer join dept d on e.deptno=d.deptno

---显示king和Ford管理的员工姓名和经理姓名:显示员工姓名，经理，经理的经理的姓名

select e.ename,m.ename,mm.ename from emp e,emp m,emp mm whhere e.mgr=m=empno and m.mgr = mm.empno(+) and m.ename in ('king','ford')

select e.ename,m.ename from emp e,emp m join on e.mgr=m.empno left outer join emp mm on m.mgr= mm.empno where m.ename in ('king','ford')
```
20.分组函数

```
---count,min,max,sum,avg
---count 空值不参与运算

select count(distinct job) from emp;

---group by 中select后面有几列，group by 后面就应该有几列,除了分组函数

select d.name,d.deptno avl(sal) from emp,dept d group by d.name,d.deptno ;

---查询每个部门每个工作岗位的工资和

select dptno,job sum(sal) from emp group by dptno,job;

---排除组内结果
---where 不可能出现分组函数
---having 子句
---where指定分组前条件

select deptno,avg(sal) from emp where deptno <> 20 group by detno having avg(sal) > 2000;

---组函数嵌套
---组函数只能嵌套两层

select max(avg(sal)) from emp group by deptno;

--不能写成：

select deptno,max(avg(sal)) from emp group by deptno;

---显示经理编号和经理姓名，及管理员工的最低工资，包括没有经理的king，最低工资不包括小于3000，

select e.mgr,m.ename,min(sal) from emp e,emp m group where e.mgr= m.ename (+) group by e.mgr,m.ename having min(sal) >=3000 order by desc;

---子查询中存在控制不允许使用not in

select *from emp where empno not in (select distinct mgr from emp)错误！

---多行子查询
--- = any 就是 in
--- < all 等价于 小于最小值
--- > all 等价于 大于最大值

---查询出与1981入职的任意一个员工的部门和职位完全相同的员工的姓名、部门、职位、入职日期 不包括1981入职的

select ename,deptno,job,hiredate from emp where (deptno,job) in (select deptno,job from emp where to_char(hiredate,'YYYY')='1981') AND to_char(hiredate,'YYYY') <>'1981' 

---查询比自己部门平均工资高的员工姓名，工资，部门编号，部门平均工资

select ename, sal, e.deptno, aversal from emp e, (select deptno, avg(sal) aversal from emp group by deptno) f where e.deptno= f.deptno and sal > aversal;

f:select deptno, avg(sal) aversal from emp group by deptno
```




