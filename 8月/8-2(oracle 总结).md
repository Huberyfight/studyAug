# Oracle

1.两张表结构相同

```
insert into emp2 select *from emp1 where deptno=10;

insert into emp2(ename,deptno) select ename,deptno from emp1 where deptno=10;


```
2.update

```
update emp2 set deptno=10 where deptno is null;

---涨工资

update emp2 set sal=sal+500 ;

update emp2 set sal=null where deptno=20;


--delete与其他表有关联的不能删除。

delete from emp2 where deptno=20;

---锁：执行修改时，其他人不能进行操作

update emp2 set sal=sal+200 where deptno=10;

---其他针对10部门的操作不能进行
```
3.建立表

```
---建表的同时将数据插入

create table emp3 as select empno,ename from emp;

---建一张空表

create table emp4 as select *from emp where 1=0;

---改变列名

create table emp5 as select ename(名字),deptno（部门） from emp;


```
4.修改表

```
alter table emp2 add(学号 number(10), 学籍 varchar2(20))

alter table emp2 modify(学号 varchar2(23));

alter table emp2 drop(学号，学籍);

drop table emp2;
```
5.序列

```
---修改序列的最大值不能小于当前序列的值；
---rowid 标示数据库中每一行数据的物理地址；
---index 是对数据库中的一列或多列进行排序的一种数据库对象；经常出现在where子句中的条件适合索引。主键和唯一键自带索引

create index indexname on table(column,..)

create index idx_emp_ename on emp(ename);

---为什么不给每一列加入索引？
---占内存；降低增删改速度；

---视图是自一个或者多个表的数据集合

create view emp10 as select *from emp where=10;

---集合运算
---联合  union  ;union all 不去重
---相交  intersect
---相减  minus
---联合查询 列的数量必须一致

selecte ename,deptno from emp where deptno=10 union  select ename,deptno from emp where deptno=20;

---错误

selecte ename,deptno from emp where deptno=10 union  select ename,deptno,sal from emp where deptno=20;

---高级子查询,子查询中涉及到外表

select ename,sal from emp e where sal > (select avg(sal) from emp where deptno=e.deptno)
```



