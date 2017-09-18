1. 多表插入语句

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

2. 