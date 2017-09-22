from django.template import Context, loader
from django.shortcuts import render
from django.http import HttpResponse
from django.db.models import Count
from learn.models import Dept,Emp
import json
from django.http import JsonResponse
# Create your views here.

def home(request):
	#string = "我在华强北"
	#TutorialList = ["HTML", "CSS", "jQuery", "Python", "Django"]
	# info_dict = {'site': u'自强学堂', 'content': u'各种IT技术教程'}
	# List = map(str,range(100))
	# List = {'name':'Tom','age'：'12'}
	
	return render(request,'home.html')

def add(request,a,b):
	c = int(a) +int(b)
	return HttpResponse(str(c))

def index(request):
	# dept_list = Dept.objects.all()
	# tmpl = loader.get_template("index.html")
	# cont = Context({'depts':dept_list})
	depts = Emp.objects.all().values('deptno').annotate(count=Count('deptno')).values('deptno','count').order_by('deptno')
	deptname=[]
	deptcount=[]
	for item in depts:
		deptname.append(item.get('deptno'))
		deptcount.append(item.get('count'))
	# tmpl = loader.get_template("home.html")
	# cont = Context({'categories':json.dumps(deptname),'data':json.dumps(deptcount)})
	# return HttpResponse(tmpl.render(cont))
	# return render(request,'home.html',{'categories':json.dumps(deptname),'data':json.dumps(deptcount)})
	return JsonResponse({'categories':deptname,'data':deptcount})