# oracle 数据库学习

### 1.多表插入语句

```sql
insert first when sal > 2000 then into cemp1
values (empno,
        ename,
        sal,
        comm) when deptno = '20' then into cemp2
values (empno,
        hiredate,
        deptno) when comm is null thne into cemp3
values (empno,
        ename,
        job,
        deptno)
select *
from emp;
```
### 2.事务

- 由一组DML组成的逻辑工作单元  
- 或者一个DDL(create table|view|index|syn|cluster)  
- 或者一个DCL（grant|rollback|commit）

特性：原子性、一致性、独立性、持久性

状态：提交、回滚

- commit
- rollback
- savepoint name 
- rollback to [savepoint] name;

### 触发器

- DDL触发器（create table|view|index|syn|cluster）
- DML触发器（insert|update|delete）
- instead-of 触发器：替代某个动作的触发器
- 系统触发器

#### 触发器的限制
- 触发器的body部分不能超过32760个字节
- 一般情况下非系统触发器是不能调用DDL,DCL,TCL
- 尽量避免使用LONG,LONG RAW
```sql
create or replace trigger trig1
  before delete on emp
declare
  x number := 10;
begin
  dbms_output.put_line('delete on emp' || x);
end trig1;


```
测试语句

```sql
delete from emp where empno=9999;
```