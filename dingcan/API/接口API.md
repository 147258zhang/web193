# 顾客版

## 首页 ok

### 搜索

​	URL:     /home/search?text=xxxxxx

​	方法:   GET

​	参数:  text = xxxxx

​	返回示例:      返回的跟商家列表的很像



​	元素 和 标签的区别,  在多数情况下, 我们认为他们是一样的.

​	如果硬要找出.    元素相对比较光一点 , 包括标签名呀  ,  属性 和属性值.  标签的感觉旧相对来说 更窄一些,  就是指 div  h1 p 这些

```javascript



[
    {
        sid: '商家ID',        ok
        logo：‘商家图片’,      ok
        shopname: '店名',     ok
        score: '商家平均得分',  
        category: 最多两个      
        canteen： ‘餐厅’，     ok
        slogan： ‘标语’，      ok
        reserveNum： ‘预定量’   2
    },
    {},
    {},
]
```

​	另外操作:    字符串去除首尾空格,  插入 search 表中，用于做 热搜

​	， 去 shop_category  shop_menu 表中找.   都没有找到去,   商家表中 找店名

​	背后的逻辑是:   查找 shopname \  content (shop_category)  然后以 sid 分组. 目的是防止重复.



 

### 热搜

​	URL:  /home/hot

​	方法:  GET

​	参数: 无

​	返回示例:

```javascript
[ '鱼香肉丝', '自选餐', .... ]  
// 前端
```

​	逻辑思路: 

​	把每一次的搜索都放入到一个 搜索记录表中,   然后以 content 字段分组 求和  再desc（降序） limit



### 轮播图

​	静态资源路径

​	/public/img/home/bander1.jpg

​	........

​    餐厅图片



### 分类  

​	URL:	/home/category?cate=xxxx | canteen=xxxx

​	参数: 	cate=xxx | canteen=西西里

​	方法:	GET

​	返回示例:	

```javascript
[
    {
        商家列表中的属性
    },
    {},
    {},
    ......
]
```

​	逻辑提示:	去 shop_category表中 模糊查询，还有去

​	用  /home/search?text=xxx  这个  不行.  因为有多个 

​	写的  乱!!!

​	**SQL** 写的很垃圾，怎么联查  聚合表？



### 预定 TOP榜 [本月]   

​	URL:	/home/reservetop？page =xx & num=xxx &month=xxx （11|12） 为了方便测试

​	方法:  GET

​	参数： 无

​	返回示例：

```javascript
[
    {},    // 商品列表里的东西。   稍微有点不一样
    {},
    ......
]
    

// 
```



​	待修改 ！！！

​	预定流程:   注册/登录   ->   选择商家   ->  预定.



### 商家列表  

​	URL:	/home/shoplist

​	方法:	GET

​	参数： page=xx & num=xxxx & order=xxx & direction=xxx

​	参数说明:  page, 第几页     num,每页多少条数据。他们都有默认值， 1，10

​						order，指定排序的字段默认没有、 direction，字段是升序还是降序 默认升序

​	返回示例:

```javascript
[
    {
        sid: 'sid'
        content: '关键字'
        shopname: '商家名字',
        scanteen: '餐厅'
        slogo: 'logo 图片URL',
        slogan: '标语',
        score: '评分',
        reserve: '月预定量'
    },
    {},
    {},
    {},
    ......
]
```

​	



## 我的订单 ok

​	这个应该 放到  我的, 我想做的显眼一点.   |    还是做成  购物车呢？



​	URL:   order/   用来返回页面



​	操作  shop_order 表

​	概括: 	这个路由是用来查看用户预定的有哪些菜

​	URL：	/order/all

​	参数:	uid=xxx 用户ID    & page=1 & num= 50

​	方法: 	GET

​	返回示例:	结构类似于 商家版-订单管理 



​	isremove    是否能取消预约?

​	iscomment  是否能评论?

```javascript
[	  
    “sid”：          // 点击订单， 进入对应的详情页
	"id": 34,       // 订单ID
    "price": 10,
    "time": "2020-10-08T01:34:00.000Z",  
    "mname": ‘菜名’，
    "shopname":  '商家名'
    "canteen": '餐厅'
    
    img: '图片.  菜的图片'
]
```





### 取消预约

​	概括:	删除当前的订单,  需要做个判断,   大于**3小时** 不能删除.           

​	URL:	/order/remove?id=xxxx

​	参数	id=xxx    _id 是那个  shop_order _id字段

​	方法:	POST

​	返回:   字符串1表示取消成功,      字符串0表示  时间超时 就是超过3小时了.  



​	返回： 200，说明取消预约成功

​	返回： 400， 说明时间超时

​		返回 500，说明程序出错



## 我的 ok



### 	设置头像

​	概括：	设置用户头像。

​	URL：	/profile/img?src=xxx & uid=xxx

​	参数：	src=xxxxx  uid=xxxx    src 是图片的编号

​	方法：	POST

​	返回：	字符串1，成功；字符串0失败



### 	昵称

​	概括:	更改昵称

​	URL:	 /profile/nickname ？ name=xxx & uid=xxx

​	参数：   name=xxx & uid=xxx    URL传参

​	方法：	POST

​	返回：	字符串1成功；字符串0失败（昵称不符合要求 6个字符）

### 	收藏 

​	概括:	获取用户的 收藏

​	URL:	/profile/like ？uid=xxx

​	参数：	uid=xxx

​	方法:	GET

​	返回示例:	

```
[
	{
		sid,
		slogo，
		shopname,
		scanteen
	},
	{},
	{},
]
```



### 我的订单



### 	更改密码 

​	概括:	原密码，新密码

​	方法:	POST

​	URL：	/profile/pwd

​	参数：	uid=xxx&pwd=xxx&newpwd=xxxxx

​	返回：	字符串1，修改成功。 0修改失败（旧密码错误）   -1 就是新的密码不符合规范

其他情况就是  服务器报错了。



​	密码要求， 6-20未字符。

### 	退出登录 

​	概括:	就是退出登录呀

​	URL:	/profile/exit?uid

​	参数：	uid=xxxx

​	方法:	POST

​	返回:	字符串 1，退出成功； 字符串0失败



## 详情页    ok

### 详情页 ok

​	概述：	进入详情页 

​	URL：	/detail？sid

​	进入    访问 /detail 路由时， shop_browser 表会插入

### 收藏功能 ok

​	URL：	/detail/collect？uid=xx & sid=xxx

​	方法：	POST

​	参数：	？uid=xx & sid=xxx   

​	返回：	字符串1， 收藏成功； 字符串0未知错误 500； 字符串-1 400请登录



### 	点赞功能 ok

​	概括：	点赞。因为是 放入数据，所以用POST

​	URL：	/detail/like？sid=xxxxlike=true|false&  商家ID

​	方法：	POST

​	参数：	sid=xxxxlike=true|false&  商家ID  uid=xx

​	说明， like=true | false   true说明 是点赞.   false 说明取消点赞   。注意这时  字符串

​	返回：  字符串1， 操作成功。 字符串 0 操作失败（重复操作）



​	数据表：  新建一个 shop_like 表

​	还有一种思路是， 这个路由里，然后更新 商家表中的相关字段。耦合度高 不太好



### 	头部    ok

​	概括：	商家名、评分、评价人数、点赞人数、 是否点赞、是否收藏、展示图片、餐厅。因为是拿数据  所以用GET，语义明确。

​	URL：	/detail/top?sid=xxxxx & uid=xxxx

​	方法：	GET

​	参数：	sid=xxxx & uid=xxx

​	依赖：    评论表、商家后台

​	返回示例： 

```javascript
[
    {
        shopname: '天下好面',
        score:   '评分'                // shop_comment 表
        commentNum: '评论人数'          // shop_comment
        likeNum: 点赞人数
        isLike:  true|false                   // 是否点赞  // shop_like
        isCollect: true|false                  // 是否收藏
        showList: ['http://', 'http://']    // shop_show
		canteen：  '哪个餐厅'
    }
]
```

可以在  商家表， 加些字段    评分、评价人数、点赞人数、展示图片字段

但是这样做， 就需要再其他路由 操作的时候，进行 修改。

综上考虑，我决定 不用这种 耦合度高的了。



### 菜品展示  ok

​	概括：	用来获取 商家的菜品列表

​	URL：	/detail/menu？sid=xxx

​	方法：	GET

​	返回示例：	

```javascript
[
    {
        mname: '菜名',
        mprice: '价格',
        mimg: '菜的图片URL'
        mid：    mid
    }
]
```

​	注意：	只取 上架的菜品

​	

### 	预定[功能]   ok

​	URL：	detail/order/add ? sid=xxxx & uid=xxx & mid=xx & time=xxx

​	

​	方法:	POST

​	

​	弹出一个 框，让选择日期。 对这个日期要有限制：

​	1、若当前时间是 12：00 之前，则可以预定晚上的；否则 只能预定明天的。

​	2、也不能预定太远的。

​	

​	返回:  字符串1 预定成功.   字符串 0, 重复预定.   字符串 -1 请不要省略时间





### 评论展示  ok

​	概述：	获取评论

​	URL：	/detail/comment？sid=xxx  分页

​	方法：	GET

​	返回：	

```javascript
{
    totalNum: 450, // 中评价人数
    goodNum: 400, // 好评
    middleNum: 10, // 中评
    badNum: 5 // 差评
    list: [
        {
            img: '用户头像',
            nickname: '用户昵称',
            time: '评论时间'，
            score: '评分',
            content: '内容',
            imglist: '评论的图片列表'
            
            response: '商家回复'
        },

        {
            一样的
        },

        ......
    ]
}
```

​	不足之处：	没有加分页功能，

### 评论[功能]

​	概括:	学生端用来发表评论的接口

​	URL:	/comment?sid=xxxx & uid=xxx

​	参数:	score=xxx & content=xxxx & **imglist**=二进制  必须得用 content-type: multipart/form-data    4张

​	方法:	POST

`

​	返回： 500错误， 图片过大 ， 不超过 5MB 或者 程序有误。

​	字符串1, ok.    其他错误, 请重试

​	

## 账号

### 登录

​	URL: 	/user/login

​	方法: 	POST

​	参数: uname=xxxx&upwd=xxxxx

```javascript
{
    uname: '',
    upwd: ''
}
```

​	返回示例: 

```javascript
1  代表登录成功
0  代表密码错误
-1  此用户不存在
```



### 注册

#### 验证重复

​	概括:   这个 接口用来验证   用户名是否重复	

​	URL:   /user/sigincheck?uname=xxxxx

​	方法:  POST

​	返回:  字符串 1代表用户名没有重复,    0代表用户名重复



​	6 - 12 个长度    用户名

​	2 - 6 昵称

​	密码长度 6 - 16

​	

#### 插入数据库

​	概括:	就是注册功能的本质

​	URL:	/user/sigin

​	方法:	POST

​	参数:	uname=xxxxx&upwd=xxxxxx   

​					uname 

​					nickname

​				     upwd 

​	返回:	字符串 1代表插入成功(注册成功),    0代表重新注册

​	安全：	为了安全起见， 把 uname 设置为 唯一约束



















# 商家版

## 注册用户名判断

​	URL： /user/sigincheck?mname

​	方法： GET

​	参数:    mname=xxxx

​	返回： 字符串1代表用户名可以使用。    0代表不能使用



## 注册

​	概括:   

​	URL:  /user/sigin

​	

​	方法: POST

​	返回:   字符串1代表插入成功(注册成功),   0反之



## 登录

​	URL： /user/login

​	方法： POST

​	返回： 字符串1代表登录成功，0反之



## 首页

高武杰做

### 查看操作

​	`今日订单数`、`今日预收入`、`点赞数`   有新增点赞数  显示小提示文字

![image-20201108164033126](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\image-20201108164033126.png)

​	交易额  -  预收入

​	订单数 、点赞数 、 浏览量

​	订单动态 - 



​	图表 - 每日预记收入 

​	商品预定



可以 优化.   传递 时间参数,   如果为空 , 那就是查询  所有

### 顶部

​	概括： 预收入、订单量、点赞数、浏览量   

​	需要:      shop_order表,  把id替换成 对应的吧  

​	URL： /home/base           base 基础信息

​	方法： GET

​	参数： sid=xxx

​	返回：

```
{
	income: ‘预收入’，
	Monthincome: '月预收入',
	totalOrderNum: '总订单量'，
	noworderNum: '今日订单量'，
	totalLikeNum： ‘总点赞数’，
	nowLikeNum： ‘今日’
	totalBrowseNum： ‘总浏览量’，
	nowBrowseNum： ‘今日’
}
```



### 实时订单状态

​	概括： 实时订单, 

​	URL： /home/order?sid=xxx

​	参数:  sid = xx

​	方法:  GET

​	返回： 

​		两个

​		查询数据库( shop_order )， 取出最近时间的两个订单   - MySQL排序 和 limit

```
[
	{
		time：   ’下单时间‘
		uname：  ’下单用户名‘
		mname：  ’商品名字‘ 
	},
	{
	
	}
]
```

​	

### 预收入图表

​	概括：  应该去查那个表?

​	URL：/home/income?sid=xxx

​	方法： GET

​	参数： sid=xxxx

​	返回： 

```
[
	{
		time: '2020-11-1',
		income: 290
	},
	{
		time: '2020-11-2',
		income: 290
	},
	{
	
	},
	......
]
```



### 菜品销售榜

​	概括： 

​	URL： /home/top?sid=xxxx

​	方法： GET

​	参数： sid=xxx

​	返回： 

​		显示5个

```
[
	{
		name: '商品名字'，
		reserveNum： ’预定量‘
	},
	{},
	{}
]
```





## 订单管理

陈梦佳,  shop_order   订单表是空的,   得自己手动模拟数据 .

currenttime,   这个

### 查看-默认显示今天的订单 

​	概括： 返回该商家的，按菜的名字分组 - 今天 - 昨天- 啥时候的订单都可以看

​				日期选择,   选择哪个日期, 就显示哪个日期的订单.  

   			 月选择 , 选择哪个月就显示哪个月的订单  

​				日期段查询 ，start=2020-12-1   end=2020-12-14

​	URL： /order?sid=xxxx&type=month&time=12

​				/order?sid=xxxx&type=date&time=2020-3-2

​				/order?sid=xxxxx&type=range & start=2020-10-12 23:00:00& end=2020-10-13 24:00:00

​	方法： GET

​	参数： sid=xxx&time=xxxx .  time可以省略, 则表示全部

​	返回： 

```javascript
[
	{	
		"id": 34,
        "price": 10,
        "time": "2020-10-08T01:34:00.000Z",
        "uname": "TEST用户名"
	},
	{},
	....
]


// 优先考虑
[	// 按照 name 菜名分类
	{
		name: '黑椒鸡柳饭',
		list: [
			{
                "id": 34,
                "price": 10,
                "time": "2020-10-08T01:34:00.000Z",
                "uname": "TEST用户名"
            },
            {},
            .....
		]
	},
	{
		name： ‘’
	}
]
```





## 菜品管理 

李小威

#### 查看

​	概括： 把所有的菜都查询出来

​	URL： /menu?sid

​	参数: 	sid=xxx

​	方法： GET

​	返回： 

```javascript
[
    {
        
    },
    {}
]
```



#### 添加

​	概括： 添加一个新的菜

​	URL：/menu/add

​	参数： 菜的图片、名称、价格、商家ID

​	方法： POST

​	返回： 字符串1， 添加成功，返回插入失败



#### 修改

​	概括： 修改价格、图片、名字等

​	URL： /menu/update

​	方法： POST

​	参数： newPrice= & newName & newImg 

​	返回： 字符串1，修改成功。 0反之



#### 删除

​	URL：/menu/remove

​	方法： GET

​	参数： sid=xxxx&mid=xxx

​	返回： 字符串1删除成功， 否则失败



## 评论管理

张磊

### 	查看

​		URL： /comment?sid=xxx

​		方法： GET

​		参数： sid=xxx

​		返回： 	

```javascript
[
    {
        unickname: '',  // 用户昵称,   -- 用户信息
        uimg: '用户头像URL'            -- 用户信息
        imgList: ['htp://', 'http://'], // 先不做图片 JSON
        score: 3.5,
       	content: 'xxxxxx',
        response: 'xxx'
        time: '自动的',
    },
    {
        
    },
    {},
]
```



​	**数据表**

```

```



### 	查看 - 前端需要新功能图片展示 和 回复



### 	回复

​		URL： /comment/response

​		方法： POST

​		参数： **id**=xxxx&response=xxxxxxxxxxxx    id 是 评论表 的主键ID,  字段是 _id   

​		返回： 字符串1 回复成功，0遇到错误

​		说明:	需要对 response 限制 50个字符.



## 商家信息

李阳做



#### 查看

​	概括：点进去显示商家的   各种信息，比如

​	`店名`，`餐厅`,  `标语` , `分类关键字`，`logo`，`展示图片`，

​	展示图片  3 - 6张

​	 数据渲染

​	URL： /info?sid=xxx

​	参数:  sid=xxx

​	方法： GET

​	返回： JSON对象

```javascript
{
    shopname: '天下好面'，
    。。。。。。
}
```



#### 修改

​	概括： /info， POST负责逻辑处理

​	方法： POST

​	参数： sid，控件name（对应后端表中的字段），值



​	`标语`, `展示图片` , `logo` , `分类关键字`

​	商家信息不涉及删除。



# 任务

​	陈梦佳： 详情页的 字体图标

​	发表评论。

​	



# 问题

​	预定砍掉  

​	筛选不好弄啊.   layui

​	搜索出问题了.  搜索 餐厅没有反应.



详情页 - 预约日期  -  只能预约 近以后 7天的时间呢   并且标注  早上  中午  晚上.



李阳：	图片路径 只要 /public/。。。。



​	Vue 不用脚手架环境 --- 怎么用哪些插件呢。





​	让他们把 所以的静态页面写完。 

​	不要动态的东西。  



 为了方便测试   我把  reservetop 这个接口的  月约定量。    用一个  month 问好传参

我还是在 停留在之前的思想上,     对于当前这个项目.   使用 Layui  +  原生 基本可以搞定.

还有就是  数据库的 SQL 语句,   以后要考虑优化,  多使用联表.   



之后   培训后  用 Vue 小程序做一遍.     在用 MongoDB做一遍.

现在就是 如果使用 Vue,  那么 像 懒加载  流加载  弹出层  这些东西  应该是有人专门写的有.  在工作中能快速开发.



总之  这个项目我认为能做的很大.   唯一不足的是 确实 UI设计师.   对于 字体大小  各种颜色   以及边距  都是自己看着感觉写的.

还有就是  用习惯了  flex ,  有些文字块 文字过多会溢出,  这就很头疼了.





有些表中  没有必要需要 主键

​    







# 新的需求

​	把   预定TOP榜      



​    [count(*) 预定 mid]  菜的图片、 菜名 、商家标语、 价格、 商家SID、

​      mimg   mname  price    slogan  sid

```
select 
	ming as img, mname as name, price, slogan, sid
from (
	shop_order left join shop_menu on shop_order.sid=shop_menu.sid 
	left join shopkeeper on shop_order.sid = shopkeeper.sid
)
group by mid
```



​	以后可以考虑 做个  单个菜品的描述。 有商家描述（标语 ）和菜的标语



字体图标

​	搜索图标   关闭图标（x）

​	> 图标  < 返回图标  

​	星星图标 (得分)

​	刷新 \  首页 \  订单  \  我的        

​	

​	用户名  密码   昵称

​	成功  (对号)   感叹号的失败   首页的图标

​	

**详情页**

​	点赞 (空心和实心)  

   位置图标

​	API  /detail/top?sid=xxxxx    加个点赞人数

​	收藏   status=true | false



**提示登录的页面**



**我的订单**

​	是否能 评论.   iscomment 字段