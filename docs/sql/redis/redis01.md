---
category: [数据库]
tag: [redis]
---

# 2.1 初体验Redis :tada:

## Redis概述_什么是NoSQL:gem:

![](/images/redis/redis1.png)

NoSQL(NoSQL = **Not Only SQL**)，意即“不仅仅是SQL”，泛指**非关系型的数据库**。随着互联网web2.0网站的兴起，传统的关系数据库在应付特别是超大规模和高并发类型纯动态网站已经显得力不从心，暴露了很多难以克服的问题。

### 结构化数据和非结构化数据:ghost:

![](/images/redis/redis2.png)

- 结构化数据指的是由二维表结构来逻辑表达和实现的数据，严格遵循数据格式与长度规范，也称作为行数据。
- 非结构化数据，指的是**数据结构不规则或不完整，没有任何预定义的数据模型，不方便用二维逻辑表来表现的数据**，例如办公文档（Word）、文本、图片、HTML、各类报表、视频音频等。

### NoSQL的四大分类:ghost:

- #### **KV型NoSql（代表----Redis）**

  KV型NoSql顾名思义就是以键值对形式存储的非关系型数据库，是最简单、最容易理解也是大家最熟悉的一种NoSql，因此比较快地带过。

  ::: tip  注意
  KV型NoSql最大的优点就是**高性能**，利用Redis自带的BenchMark做基准测试，TPS可达到10万的级别，性能非常强劲。
  :::

- #### **列式NoSql（代表----HBase）**

  列式NoSql，大数据时代最具代表性的技术之一了，以HBase为代表。
  
  ![](/images/redis/redis3.png)
  
  ::: tip  注意
  在关系型数据库数据中看到每行有name、phone、address三个字段，这是行式存储的方式，且可以观察id = 2的这条数据，即使phone字段没有，它也是占空间的。
  :::
  
  而使用列式NoSql,就会像如下这样
  
  <div style="display:flex;justify-content:space-around;flex-wrap:wrap;">
      <img src="/images/redis/redis4.png" style="width:350px"/>
      <img src="/images/redis/redis5.png" style="width:350px"/>
  </div>
  ::: tip  注意
  1、查询时只有指定的列会被读取，不会读取所有列
  
  2、列数据被组织到一起，一次磁盘IO可以将一列数据一次性读取到内存中
  :::
  
- #### **文档型NoSql（代表----MongoDB）**

  什么是文档型NoSql呢，文档型NoSql指的是将半结构化数据存储为文档的一种NoSql，文档型NoSql通常以JSON或者XML格式存储数据。

  ![](/images/redis/redis6.png)

  ::: tip  注意
  关系型数据库是按部就班地每个字段一列存，在MongDB里面就是一个JSON字符串存储。
  :::

- #### **搜索型NoSql（代表----ElasticSearch）**

  传统关系型数据库主要通过索引来达到快速查询的目的，但是在全文搜索的场景下，索引是无能为力的，like查询一来无法满足所有模糊匹配需求，二来使用限制太大且使用不当容易造成慢查询，**搜索型NoSql的诞生正是为了解决关系型数据库全文搜索能力较弱的问题**，ElasticSearch是搜索型NoSql的代表产品。

  ![](/images/redis/redis7.png)

## 关系型数据库和非关系型数据及其区别:gem:

**关系型数据库最典型的数据结构是表，由二维表及其之间的联系所组成的一个数据组织** 

**优点：**

![](/images/redis/redis8.png)

- 易于维护：都是使用表结构，格式一致；
- 使用方便：SQL语言通用，可用于复杂查询；
- 复杂操作：支持SQL，可用于一个表以及多个表之间非常复杂的查询。

**缺点：**

- 读写性能比较差，尤其是海量数据的高效率读写；
- 固定的表结构，灵活度稍欠；

**非关系型数据库**

**优点：**

![](/images/redis/redis9.png)

- 格式灵活：存储数据的格式可以是key,value形式、文档形式、图片形式等等，文档形式、图片形式等等，使用灵活，应用场景广泛，而关系型数据库则只支持基础类型。
- 速度快：nosql可以使用硬盘或者随机存储器作为载体，而关系型数据库只能使用硬盘；
- 高扩展性；
- 成本低：nosql数据库部署简单，基本都是开源软件。

**缺点：**

- 不提供sql支持，学习和使用成本较高；
- 无事务处理；
- 数据结构相对复杂，复杂查询方面稍欠。



