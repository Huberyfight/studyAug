1. 多表插入语句

```sql
INSERT FIRST WHEN sal > 2000 THEN INTO cemp1
VALUES (empno,
        ename,
        sal,
        comm) WHEN deptno = 10 THEN INTO cemp2
VALUES (empno,
        hiredate,
        deptno) WHEN comm IS NULL thne INTO cemp3
VALUES (empno,
        ename,
        job,
        deptno)
SELECT *
FROM emp;
```

2. 