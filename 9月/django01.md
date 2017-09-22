### Django问题

#### 问题1：  
- Article.objects.values('author_id').annotate(avg_score=Avg('score')).values('author_id', 'avg_score')   

注意：author_id 是一个小横杠  
问题2：Article.objects.all().values('author__name').annotate(count=Count('author')).values('author__name', 'count')  
注意： author__name 是两个小横杠  
区别：name是author表中设置的字段，而id可能是自动生成的

#### 问题2：
- django 中 annotate和aggregate的区别

Book.objects.aggregate(average_price=Avg('price'))返回的是一个dict，没有query属性；  
q = Book.objects.annotate(num_authors=Count('authors'))返回的是一个列表