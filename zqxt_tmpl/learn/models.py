from django.db import models


# Create your models here.
class Dept(models.Model):
    deptno = models.IntegerField(primary_key=True)
    dname = models.CharField(max_length=14, null=True)
    loc = models.CharField(max_length=13, null=True)

    class Meta:
        db_table = "DEPT"
    def __int__(self):
        return self.deptno


class Emp(models.Model):
    class Meta:
        db_table = "Emp"

    empno = models.IntegerField(primary_key=True)
    ename = models.CharField(null=True, max_length=10)
    job = models.CharField(null=True, max_length=9)
    mgr = models.IntegerField()
    hiredate = models.DateField(null=True)
    sal = models.DecimalField(null=True, max_digits=7, decimal_places=2)
    comm = models.DecimalField(null=True, max_digits=7, decimal_places=2)
    deptno = models.ForeignKey(Dept,db_column='deptno', null=True)
    def __int__(self):
        return self.empno