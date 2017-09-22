prompt PL/SQL Developer import file
prompt Created on 2017Äê9ÔÂ22ÈÕ by Administrator
set feedback off
set define off
prompt Disabling triggers for DEPT...
alter table DEPT disable all triggers;
prompt Deleting DEPT...
delete from DEPT;
commit;
prompt Loading DEPT...
insert into DEPT (deptno, dname, loc)
values (10, 'ACCOUNTING', 'NEW YORK');
insert into DEPT (deptno, dname, loc)
values (20, 'RESEARCH', 'DALLAS');
insert into DEPT (deptno, dname, loc)
values (30, 'SALES', 'CHICAGO');
insert into DEPT (deptno, dname, loc)
values (40, 'OPERATIONS', 'BOSTON');
commit;
prompt 4 records loaded
prompt Enabling triggers for DEPT...
alter table DEPT enable all triggers;
set feedback on
set define on
prompt Done.
