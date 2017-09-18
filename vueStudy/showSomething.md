# 安装

- Win10：直接去官网下载，百度软件中心下载的安装包不允许选择安装路径（眼瞎没看见？。。。！）
- Ubuntu：[官网有指导](https://www.sublimetext.com/docs/3/linux_repositories.html)

#激活（请大家购买正版）

```
—– BEGIN LICENSE —–
TwitterInc
200 User License
EA7E-890007
1D77F72E 390CDD93 4DCBA022 FAF60790
61AA12C0 A37081C5 D0316412 4584D136
94D7F7D4 95BC8C1C 527DA828 560BB037
D1EDDD8C AE7B379F 50C9D69D B35179EF
2FE898C4 8E4277A8 555CE714 E1FB0E43
D5D52613 C3D12E98 BC49967F 7652EED2
9D2D2E61 67610860 6D338B72 5CF95C69
E36B85CC 84991F19 7575D828 470A92AB
—— END LICENSE ——
```
# 下载插件

快捷键：Ctrl+shift+p
1. Package Control
2. HTML5
3. CSS3
4. Emmet
5. AutoFileName
6. FileDiffs
7. SideBarEnhancements
8. BracketHighlighter
9. SublimeCodeIntel
10. ColorPicker
11. Git
12. DocBlockr
13. ConvertToUTF8
14. HTML-CSS-JS Prettify
15. Color Highlighter
16. Material Theme（安装期间会提示需要安装A FILE ICON，不同的文件可以显示不同的文件图标）
17. LiveReload
18. Bootstrap 3 Snippets
19. Vuejs Snippets
20. Vue Syntax Highlight
21. Boxy Theme
22. OmniMarkupPreviewer
23. Color Highlighter
24. Git Gutter  

[官方插件库地址](https://packagecontrol.io/)  

#配置

### Color Highlighter

效果图（有瑕疵，直接引用的(*^__^*) 嘻嘻……css文件中需要单击才能显示颜色，直接显示颜色？
![原来效果](https://packagecontrol.io/readmes/img/c1c3366d514483d12c6e038b56a0aab6b453c03f.gif)
**更改配置文件:**
`Package Settings -> Color Highlighter -> Settings-User`加入
```json
{
	"ha_style": "Filled",
}
```
**重新启动sublime 3**

### HTML-CSS-JS Prettify

随便在一个文件**右键**，`HTML-CSS-JS Prettify -> set node path`
设置nodejs安装位置，Ubuntu不知道自己nodejs安装位置？命令行`whereis node`第一个路径就是

### LiveReload

网页自动刷新，方便前端开发  
`Package Settings -> LiveReload -> Settings-User`加入
```json
{
    "enabled_plugins": [
        "SimpleReloadPlugin",
        "SimpleRefresh"
    ]
}
```
chrome浏览器应用商店下载livereload扩展程序，[应用商店打不开](https://laod.cn/hosts/2017-google-hosts.html),开启插件（插件图标空心变实心）

### Git

Ubuntu安装毛的git插件呀！
win10：Settings-User加入
```json
{
    "git_command": "git安装目录\\Git\\cmd\\git.exe"
}
```

### OmniMarkupPreviewer

mardown实时预览，只要局域网内的人都可以预览呦！很赞的功能，不过我觉得对讲师一类的人可能比较有用
直接在default配置文件中更改，  
- server_host属性默认是本机地址，可以更改为局域网地址Ubuntu（`ip route show`)  Win10（`ipconfig` 192.168.X.X）就是了
- 右键-preview markup in Browser，如果提示404，`"extensions": ["tables","strikeout", "fenced_code", "codehilite","attr_list"]`将“strikeout”删除

### sublime选中的文字的背景色

本人使用的选中的背景色：#778899  
修改方法：
`preferences->Browse Packages->路径[color themes:主题下面就是路径啦]`  
找到.tmTheme文件，搜索selection,改变颜色  

### Ubuntu sublime不能输入中文
[百度经验地址](http://jingyan.baidu.com/article/f3ad7d0ff8731609c3345b3b.html)  
不要改desktop文件，不然你的open in browser，open containning folder等命令会失效的，个人认为就到subl那步就行了，如果实在想用中文写马克笔记，那就用atom，不用这么麻烦的。
