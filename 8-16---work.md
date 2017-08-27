<center><h1> Spring Cloud读书笔记</h1></center>  

### 微服务
**简介**：微服务架构强调的第一个重点就是业务系统需要彻底的组件化和服务化，原有的单个业务系统会拆分为多个可以独立开发，设计，运行和运维的小应用。这些小应用之间通过服务完成交互和集成。每个小应用从前端web ui，到控制层，逻辑层，数据库访问，数据库都完全是独立的一套。我们不用组件而用小应用这个词更加合适，每个小应用除了完成自身本身的业务功能外，重点就是还需要消费外部其他应用暴露的服务，同时自身也将自身的能力朝外部发布为服务。  
### SOA架构
**简介**:&ensp;&ensp;面向服务的体系结构，是一个组件模型，它将应用程序的不同功能单元（称为服务）通过这些服务之间定义良好的接口和契约联系起来。接口是采用中立的方式进行定义的，它应该独立于实现服务的硬件平台、操作系统和编程语言。这使得构建在各种这样的系统中的服务可以以一种统一和通用的方式进行交互。
### ESB企业服务总线
**简介**:&ensp;&ensp;企业服务总线，即ESB全称为Enterprise Service Bus，指的是传统中间件技术与XML、Web服务等技术结合的产物。ESB提供了网络中最基本的连接中枢，是构筑企业神经系统的必要元素。  
&ensp;&ensp;&ensp;面向服务的体系结构已经逐渐成为IT集成的主流技术。面向服务的体系结构(service-oriented architecture，SOA)是一种软件系统设计方法，通过已经发布的和可发现的接口为终端用户应用程序或其它服务提供服务。
###SOA和微服务的区别：即微服务不再强调传统SOA架构里面比较重的ESB企业服务总线，同时SOA的思想进入到的单个业务系统内部实现真正的组件化。  
---
### URL和URI
&ensp;&ensp;URI，是uniform resource identifier，统一资源标识符，用来唯一的标识一个资源。而URL是uniform resource locator，统一资源定位器，它是一种具体的URI，即URL可以用来标识一个资源，而且还指明了如何locate这个资源。而URN，uniform resource name，统一资源命名，是通过名字来标识资源，比如`mailto:java-net@java.sun.com`。也就是说，URI是以一种抽象的，高层次概念定义统一资源标识，而URL和URN则是具体的资源标识的方式。URL和URN都是一种URI。  
&ensp;&ensp;总结一下：URL是一种具体的URI，它不仅唯一标识资源，而且还提供了定位该资源的信息。URI是一种语义上的抽象概念，可以是绝对的，也可以是相对的，而URL则必须提供足够的信息来定位，所以，是绝对的，而通常说的relative URL，则是针对另一个absolute URL，本质上还是绝对的。  
注：这里的绝对(absolute)是指包含scheme，而相对(relative)则不包含scheme。  
### 什么是[REST](http://www.runoob.com/w3cnote/restful-architecture.html )？
可以总结为一句话：REST是所有Web应用都应该遵守的架构设计指导原则。  
Representational State Transfer，翻译是”表现层状态转化”。面向资源是REST最明显的特征，对于同一个资源的一组不同的操作。资源是服务器上一个可命名的抽象概念，资源是以名词为核心来组织的，首先关注的是名词。REST要求，必须通过统一的接口来对资源执行各种操作。对于每个资源只能执行一组有限的操作。（7个HTTP方法：GET/POST/PUT/DELETE/PATCH/HEAD/OPTIONS）
### 什么是RESTful API？
符合REST架构设计的API  
### 幂等
幂等操作的特点是其任意多次执行所产生的影响均与一次执行的影响相同
