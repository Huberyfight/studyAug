### 1. 市本级用户
```js
if(orgCode=="130300"||orgCode=="130399"){//add by qigs 20170807
		unieap.byId("KC24_AAB034").setDisabled(false);
	}
```
130300和130399有区别吗？  
130300：城市编码【统筹区，享受市级权限】  
130399：秦皇岛市市本级,权限级别和海港区是一样的  
findAreaCode()：CSBM  
getOrgCode()：经办机构编码  
### 2. 报表
```sql
select a.aae044 county, b.aae044 city
  from ab51 a, ab51 b
 where a.bae024 = b.aab301
   and a.aab301 = '130201'; --区显示市

select a.aae044 town, b.aae044, f.aae044 city
  from ab51 a, ab51 b, ab51 f
 where a.bae024 = b.aab301
   and b.bae024 = f.aab301
   and a.aab301 = '130302011'; --乡镇显示市

select a.aae044 town, c.aae044 city
  from ab51 a, ab51 f, ab51 c
 where f.aab301 = substr(a.aab301, 0, 6)
   and f.bae024 = c.aab301
   and a.aab301 = '130302011'; --乡镇显示市

select a.aae044 town, c.aae044 city
  from ab51 a, ab51 c
 where c.aab301 = concat(substr(a.aab301, 0, 4), '00')
   and a.aab301 = '130302011'; --乡镇市

select a.aae044 cun, b.aae044 town, f.aae044, c.aae044 city
  from ab51 a, ab51 b, ab51 c, ab51 f
 where b.aab301 = substr(a.aab301, 0, 9)
   and f.aab301 = b.bae024
   and f.bae024 = c.aab301
   and a.aab301 = '130302011230'; --村镇市

select (select aae044 from ab51 where aab301 = a.bae024) town,
       c.aae044 city
  from ab51 a, ab51 c
 where c.aab301 = concat(substr(a.aab301, 0, 4), '00')
   and a.aab301 = '130302011230'; --乡镇市
```
### 3. ccrc更新需要的语句
```cmd
xcopy /s/r/y F:\Work-All\河北SIMIS\qigs_KF491004_HBSIMIS_Dev_2\vobs\KF491004_HBSIMIS\java\EAPDomain\WEB-INF\conf\si\dataset\*.*  F:\Work-All\秦皇岛医保\qigs_KF491603_QHDYB_dev_2\vobs\KF491603_QHDYB\java\EAPDomain\WEB-INF\conf\si\dataset\*.*
```
```
xcopy /s/r/y F:\Work-All\河北SIMIS\qigs_KF491004_HBSIMIS_Dev_2\vobs\KF491004_HBSIMIS\java\EAPDomain\WEB-INF\conf\si\dataset\*.*  F:\Work-All\廊坊社保\qigs_KF491410_LFSB_dev_2\vobs\KF491410_LFSB\java\EAPDomain\WEB-INF\conf\si\dataset\*.*
```
### 4. 二次录入程序中
查看数据链_Synonyms  
- 当遇到经办机构编号时,查询表aa10,t_aa10,cs_aa10
### 5. 搭建环境的时候，内部错误
<font color='red'>如果编译后“Problems”中有错误信息：</font>  
“The project was not built due to "内部错误 - 选择的文件是不能修改的系统文件。它将被隐藏。". Fix the problem, then try refreshing this project and building it since it may be inconsistent”  

**处理办法**：在本地磁盘找到项目程序对应的classes目录如：
```cmd
Z:\Projects\SI3 Projects\KF491405_ZJKSB_20150824\vobs\KF491405_ZJKSB\java\EAPDomain\WEB-INF\classes
```
将下面的“.copyarea”文件删除，然后回到workshop，选中当前项目，F5刷新即可
###6. 导出功能
```js
si.clientExport(unieap.byId("ka02grid"),"excel","药品目录");
si.clientExport(grid,fileType,fileName)
si.serverExport(grid,fileType,fileName)
```
- 导出的文件如果格式被破坏，或是不能打开，首要考虑的是**编码问题**，在system.js文件中，设定导出文件的URL，可以改变文档的编码格式，有的是utf-8，有的是gbk


---

This is water: ~~h~~,h<super>2<sup>