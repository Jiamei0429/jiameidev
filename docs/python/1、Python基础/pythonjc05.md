# 1.5 面向对象编程  :tada:

![](/images/python/py13.png)

Python完全采用了面向对象的思想，是真正面向对象的编程语言，完全支持面向对象的基本功能，例如：继承、多态、封装等。

Python中，一切皆对象。我们在前面学习的数据类型、函数等，都是对象。

> - 面向对象（Object oriented Programming，OOP）编程的思想主要是针对大型软件设计而来的。
> - 面向对象编程使程序的扩展性更强、可读性更好，使编程可以像搭积木一样简单。
> - 面向对象编程将数据和操作数据相关的方法封装到对象中，组织代码和数据的方式更加接近人的思维，从而大大提高了编程的效率。
> - ❤️Python支持面向过程、面向对象、函数式编程等多种编程范式。

## 面向过程和面向对象的区别:gem:

面向过程和面向对象都是对软件分析、设计和开发的一种思想,它指导着人们以不同的方式去分析、设计和开发软件。C语言是一种典型的面向过程语言，Java是一种典型的面向对象语言。

### 面向过程是什么？:ghost:

面向过程适合简单、不需要协作的事务，重点关注如何执行。面向过程时，我们首先思考“怎么按步骤实现？”。比如，如何开车？我们很容易就列出实现步骤：

![](/images/python/py14.png)

再比如：把大象装冰箱分几步？

![](/images/python/py15.png)

### 面向对象是什么？:ghost:

面向对象(Oriented-Object)思想更契合人的思维模式。我们首先思考的是"怎么设计这个事物？”。比如思考造车，我们就会先思考“车怎么设计？”，而不是“怎么按步骤造车的问题”。这就是思维方式的转变。

天然的，我们就会从“车由什么组成”开始思考：

![](/images/python/py16.png)

为了协作，我们找轮胎厂完成制造轮胎的步骤，发动机厂完成制造发动机的步骤；这样，发现大家可以同时进行车的制造，最终进行组装，大大提高了效率。

具体到轮胎厂的一个流水线操作，仍然是有步骤的，还是离不开执行者、离不开面向过程！

我们千万不要把面向过程和面向对象对立起来。他们是相辅相成的。面向对象离不开面向过程！

> 面向对象可以帮助我们从宏观上把握、从整体上分析整个系统。 但是，具体到实现部分的微观操作（就是一个个方法），仍然需要面向过程的思路去处理。

### **面向对象和面向过程总结**:ghost:

1. 都是解决问题的思维方式，都是代码组织的方式。
2. 面向过程是一种“执行者思维"，解决简单问题可以使用面向过程
3. 面向对象是一种“设计者思维”，解决复杂、需要协作的问题可以使用面向对象

> 面向对象离不开面向过程：
>
> - 宏观上：通过面向对象进行整体设计
> - 微观上：执行和处理数据，仍然是面向过程

## 类的定义:gem:

![](/images/python/py17.png)

类可以看做是一个模版，或者图纸，系统根据类的定义来造出对象。我们要造一个汽车，怎么样造？类就是这个图纸，规定了汽车的详细信息，然后根据图纸将汽车造出来。

> 类：我们叫做`class`。 对象：我们叫做`object`、`instance`(实例)。以后我们说某个类的对象，某个类的实例。是一样的意思。

定义类的语法格式如下：

```python
class 类名：
    类体
```

> 1. 类名必须符合“标识符”的规则；一般规定，首字母大写，多个单词使用“驼峰原则”。
> 2. 类体中我们可以定义属性和方法
> 3. 属性用来描述数据，方法(即函数)用来描述这些数据相关的操作

### 属性和方法:ghost:

我们通过类定义数据类型的属性（数据）和方法（行为）,也就是说，“类将行为和状态打包在一起”。

<div style="display:flex;justify-content:space-around;flex-wrap:wrap;">
    <img src="/images/python/py18.png" style="width:350px"/>
    <img src="/images/python/py19.png" style="width:350px"/>
</div>

对象是类的具体实体，一般称为“类的实例”。类看做“饼干模具”，对象就是根据这个“模具”制造出的“饼干”。

从一个类创建对象时，每个对象会共享这个类的行为（类中定义的方法），但会有自己的属性值（不共享状态）。更具体一点：“方法代码是共享的，属性数据不共享”。

![](/images/python/py20.png)

### 基本示例:ghost:

```python
class Student:
    company = "SXT"  # 类属性
    count = 0  # 类属性

    def __init__(self, name, score):  # 构造方法第一个参数必须为self
        self.name = name  # 实例属性
        self.score = score

    def say_score(self):  # 实例方法
        print(f"我的公司是：{Student.company}", )
        print(f"{self.name}的分数是：{self.score}")

    def say_haha(self):  # 实例方法
        pass


s1 = Student("张三", 19)   # 实例对象,自动调用__init__()方法
s1.say_score()
```

> `pass`为空语句。就是表示什么都不做，只是作为一个占位符存在。当你写代码时，遇到暂时不知道往方法或者类中加入什么时，可以先用pass占位，后期再补上。

## **构造函_init_和_new_方法**:gem:

初始化对象，我们需要定义构造函数`__init__()`方法。构造方法用于执行“实例对象的初始化工作”，即对象创建后，初始化当前对象的相关属性，无返回值。

构造方法是负责初始化（装修），不是建对象(房子)

> `__init__()`的要点如下：
>
> 1. 名称固定，必须为：`__init__()`
>
> 2. 第一个参数固定，必须为：`self`。 `self`指的就是刚刚创建好的实例对象
>
> 3. 构造函数通常用来初始化实例对象的实例属性，如下代码就是初始化实例属性：`name`和`score`
>
>    ```python
>    def __init__(self,name,score):
>       self.name = name     #实例属性
>       self.score = score
>    ```
>
> 4. 通过“类名(参数列表)”来调用构造函数。调用后，将创建好的对象返回给相应的变量。 比如：`s1 = Student('张三', 80)`
>
> 5. `__init__()`方法：初始化创建好的对象，初始化指的是：“给实例属性赋值”
>
> 6. `__new__()`方法: 用于创建对象，但我们一般无需重定义该方法
>
> 7. 如果我们不定义`__init__`方法，系统会提供一个默认的`__init__`方法。如果我们定义了带参的`__init__`方法，系统不创建默认的`__init__`方法
>
> ❤️Python中的`self`相当于C++中的`self指针`，JAVA和C#中的`this`关键字。Python中，`self`必须为构造函数的第一个参数，名字可以任意修改。但一般惯例，都叫做`self`
>
> ![](/images/python/py21.png)

## 实例属性和实例方法:gem:

### 实例属性:ghost:

实例属性是从属于实例对象的属性，也称为“实例变量”。他的使用有如下几个要点：

1. 实例属性一般在`__init__()`方法中通过如下代码定义：

   `self.实例属性名 = 初始值`

2. 在本类的其他实例方法中，也是通过`self`进行访问： `self.实例属性名`

3. 创建实例对象后，通过实例对象访问：

   `obj01 = 类名()` #创建和初始化对象，调用`__init__()`初始化属性

   `obj01.实例属性名 = 值` #可以给已有属性赋值，也可以新加属性

```python
class Student:
    def __init__(self, name, score):
        self.name = name  # 增加name实例属性
        self.score = score  # 增加score实例属性

    def say_score(self):
        self.age = 18  # 增加新的age实例属性
        print("{0}的分数是{1}".format(self.name, self.score))


s1 = Student("张三", 80)
s1.say_score()
print(s1.age)
s1.salary = 3000  # s1对象增加salary属性
```

### 实例方法:ghost:

实例方法是从属于实例对象的方法。实例方法的定义格式如下：

```python
def 方法名(self [, 形参列表])：
    函数体
```

要点：

1. 定义实例方法时，第一个参数必须为`self`。和前面一样，`self`指当前的实例对象。

2. 调用实例方法时，不需要也不能给`self`传参。`self`由解释器自动传参

3. 方法的调用格式如下： `对象.方法名([实参列表])`

4. 实例对象的方法调用本质:

   ![](/images/python/py22.png)

其他操作:

1. `dir(obj)`可以获得对象的所有属性、方法
2. `obj.__dict__` 对象的属性字典
3. `pass` 空语句
4. `isinstance（对象,类型）` 判断“对象”是不是“指定类型”

```python
class Student:
    def __init__(self, name):
        self.name = name

    def say_score(self):   # 实例方法
        pass


s1 = Student("张三")
s1.say_score()
print(dir(s1))
print(s1.__dict__)
print(isinstance(s1, object))
```

## 类属性和类方法:gem:

### 类属性:ghost:

类属性是从属于“类对象”的属性，也称为“类变量”。由于，类属性从属于类对象，可以被所有实例对象共享。

类属性的定义方式：

```python
class 类名：
   类变量名= 初始值
```

在类中或者类的外面，我们可以通过：`类名.类变量名`来读写

```python
class Student:
    count = 0  # 类属性

    def __init__(self, name):
        self.name = name   # 实例属性

    def say_score(self):   # 实例方法
        Student.count += 1


s1 = Student("张三")
s1.say_score()
print(Student.count)  # 1
```

### 类方法:ghost:

类方法，是从属于“类对象”的方法。类方法通过装饰器`@classmethod`来定义，格式如下：

```python
@classmethod
def 类方法名(cls  [，形参列表]) ：
    方法体
```

要点如下：

1. `@classmethod`必须位于方法上面一行
2. 第一个`cls`必须有；`cls`指的就是“类对象”本身
3. 调用类方法格式：`类名.类方法名(参数列表)`。 参数列表中，不需要也不能给`cls`传值
4. 类方法中访问实例属性和实例方法会导致错误
5. 子类继承父类方法时，传入`cls`是子类对象，而非父类对象(⚠️讲完继承再说)

```python
class Student:
    count = 0  # 类属性
    company = "JIAMEI"  # 类属性

    def __init__(self, name):
        self.name = name   # 实例属性

    def say_score(self):   # 实例方法
        Student.count += 1

    @classmethod
    def printCompany(cls):  # 类方法
        print(cls.company)


s1 = Student("张三")
s1.say_score()
Student.printCompany()
```

## 静态方法:gem:

Python中允许定义与“类对象”无关的方法，称为“静态方法”。

“静态方法”和在模块中定义普通函数没有区别，只不过“静态方法”放到了“类的名字空间里面”，即在你名下，与你无关，需要通过“类调用”。

静态方法通过装饰器`@staticmethod`来定义，格式如下：

```python
@staticmethod
def 静态方法名([形参列表]) ：
    方法体
```

要点如下：

1. `@staticmethod`必须位于方法上面一行
2. 调用静态方法格式：`类名.静态方法名(参数列表)`
3. 静态方法中访问实例属性和实例方法会导致错误

```python
class Student:
    count = 0  # 类属性
    company = "JIAMEI"  # 类属性

    def __init__(self, name):
        self.name = name   # 实例属性

    def say_score(self):   # 实例方法
        Student.count += 1

    @classmethod
    def printCompany(cls):  # 类方法
        print(cls.company)

    @staticmethod
    def add(a, b):  # 静态方法
        print(a+b)


s1 = Student("张三")
s1.say_score()
Student.printCompany()
Student.add(1, 2)
```

## `_del_方法`和`_call_`方法:gem:

### `_del_方法`:ghost:

![](/images/python/py23.png)

`__del__()`称为“析构方法”，用于实现对象被销毁时所需的操作。比如：释放对象占用的资源，例如：打开的文件资源、网络连接等。

Python实现自动的垃圾回收，当对象没有被引用时（引用计数为0），由垃圾回收器调用`__del__()`。

我们也可以通过`del语句`删除对象，从而保证调用`__del__()`。

系统会自动提供`__del__方法`，一般不需要自定义析构方法。

```python
# 析构函数
class Person:

    def __del__(self):
        print(f"销毁对象：{self}")


p1 = Person()
p2 = Person()
del p2
print("程序结束")
```

运算结果：

```python
# 销毁对象：<__main__.Person object at 0x02175610>
# 程序结束
# 销毁对象：<__main__.Person object at 0x021755D0>
```

### `_call_方法`:ghost:

1. Python 中，凡是可以将 () 直接应用到自身并执行，都称为可调用对象。
2. 可调用对象包括自定义的函数、Python 内置函数、以及本节所讲的实例对象。
3. 定义了`__call__()`的对象，称为“可调用对象”，即该对象可以像函数一样被调用。
4. 该方法使得实例对象可以像调用普通函数那样，以“对象名()”的形式使用。

```python
def f1():
    print("f1")

f1()  # 本质也是调用了__call__()方法


class Car:
    def __call__(self, age, money):
        print("__call__方法")
        print(f"车龄：{age},金额：{money}")

f2 = Car()
f2(3, 200000)  # 像调用函数那样调用，本质也是调用了__call__()
```

## 方法没有重载:gem:

![](/images/python/py24.png)

如果我们在类体中定义了多个重名的方法，只有最后一个方法有效。

建议：不要使用重名的方法！Python中方法没有重载。

> - 在其他一些语言(比如：Java)中，可以定义多个重名的方法，只要保证方法签名唯一即可。方法签名包含3个部分：方法名、参数数量、参数类型。
> - Python中，方法的的参数没有声明类型（调用时确定参数的类型），参数的数量也可以由可变参数控制。因此，Python中是没有方法的重载的。

```python
class Person:
    def say_hi(self):
        print("hello")

    def say_hi(self, name):
        print(f"{name}")

p1 = Person()
# p1.say_hi()   # 报错
p1.say_hi("JAIMEI")
```

### 方法的动态性:ghost:

![](/images/python/py25.png)

Python是动态语言，我们可以动态的为类添加新的方法，或者动态的修改类的已有的方法

```python
class Person:
    def work(self):
        print("努力上班！")


def play_game(s):   # s参数代表必传的self参数
    print("玩游戏")


def work2(s):
    print("好好工作，努力上班！")


Person.play = play_game  # 新增
Person.work = work2   # 覆盖
p = Person()
p.play()
p.work()
```

我们可以看到，`Person`动态的新增了`play_game`方法，以及用`work2`替换了`work`方法

## 私有属性和私有方法:gem:

![](/images/python/py26.png)

Python对于类的成员没有严格的访问控制限制，这与其他面向对象语言有区别。关于私有属性和私有方法，有如下要点：

1. 通常我们约定，两个下划线开头的属性是私有的(private)。其他为公共的(public)。
2. 类内部可以访问私有属性(方法)
3. 类外部不能直接访问私有属性(方法)
4. 类外部可以通过`_类名__私有属性(方法)名`”访问私有属性(方法)

> ⚠️【注】方法本质上也是属性！只不过是可以通过()执行而已。
>
> 所以，此处私有属性和私有方法的使用基本一致。

### 私有属性:ghost:

```python
class Employee:
    count = 26  # 公有类属性
    __company = "WEB"  # 私有类属性

    def __init__(self, name, age):
        self.name = name  # 公有实例属性
        self.__age = age  # 私有实例属性

    def say_company(self):
        print(f"我的公司是：{Employee.__company}")  # 类内部可以直接访问私有类属性
        print(f"{self.name}的年龄是：{self.__age}")  # 类内部可以直接访问私有实例属性


p1 = Employee("小米", 32)
print(Employee.count)    # 类外部直接访问公有类属性
print(p1.name)  # 类外部直接访问公有实例属性

print(Employee._Employee__company)  # 外部强行访问私有类属性
print(p1._Employee__age)  # 外部强行访问私有实例属性
```

### 私有方法:ghost:

```python
class Employee:
    count = 26
    __company = "WEB"

    def __init__(self, name, age):
        self.name = name
        self.__age = age

    def __say_work(self):  # 私有实例方法
        print(f"我的公司是：{Employee.__company}")
        print(f"{self.name}的年龄是：{self.__age}")

    def say_company(self):  # 公有实例方法
        print(f"我的公司是：{Employee.__company}")
        print(f"{self.name}的年龄是：{self.__age}")
        self.__say_work()    # 类内部直接调用私有实例方法


p1 = Employee("小米", 32)
p1.say_company()  # 类外部直接访问公有实例方法
p1._Employee__say_work()  # 外部强行访问私有实例方法
```

## `@property`装饰器:gem:

`@property`可以将一个方法的调用方式变成“属性调用(不加括号)”。

`@property`主要用于帮助我们处理属性的读操作、写操作。对于某一个属性，我们可以直接通过：`emp1.salary = 30000`

如上的操作读操作、写操作。但是，这种做法不安全。比如，我需要限制薪水必须为`1-10000`的数字。这时候，我们就需要通过使用装饰器`@property`来处理。

```python
class Employee:
    age = 26
    __company = "WEB"

    def __init__(self, name, salary):
        self.name = name
        self.__salary = salary

    @property  # 相当于salary属性的getter方法
    def salary(self):
        print(f"月薪为:{self.__salary}")
        return self.__salary

    @salary.setter
    def salary(self, val):
        if 0 < val < 100000:
            self.__salary = val
        else:
            print("工资不合理")


p1 = Employee("小米", 8000)
print(p1._Employee__salary)  # 外部强行访问私有实例属性
p1.salary  # 外部通过装饰器强行访问私有实例属性
p1.salary = 1000000   # 外部对私有实例属性赋值
```

## 面向对象三大特征介绍:gem:

![](/images/python/py27.png)

Python是面向对象的语言，支持面向对象编程的三大特性：继承、封装（隐藏）、多态。

**封装（隐藏）**

> 隐藏对象的属性和实现细节，只对外提供必要的方法。相当于将“细节封装起来”，只对外暴露“相关调用方法”。
>
> 通过前面学习的“私有属性、私有方法”的方式，实现“封装”。Python追求简洁的语法，没有严格的语法级别的“访问控制符”，更多的是依靠程序员自觉实现。

**继承**

> 继承可以让子类具有父类的特性，提高了代码的重用性。
>
> 从设计上是一种增量进化，原有父类设计不变的情况下，可以增加新的功能，或者改进已有的算法。

**多态**

> 多态是指同一个方法调用由于对象不同会产生不同的行为。生活中这样的例子比比皆是：同样是休息方法，人不同休息方法不同。张三休息是睡觉，李四休息是玩游戏，程序员休息是“敲几行代码”。

## **继承**:gem:

![](/images/python/py28.png)

继承是面向对象编程的三大特征之一。继承让我们更加容易实现类的扩展。实现代码的重用，不用再重新发明轮子。

如果一个新类继承自一个设计好的类，就直接具备了已有类的特征，就大大降低了工作难度。已有的类，我们称为“父类或者基类”，新的类，我们称为“子类或者派生类”。

![](/images/python/py29.png)

### **语法格式**:ghost:

Python支持多重继承，一个子类可以继承多个父类。继承的语法格式如下：

```python
class 子类类名(父类1[，父类2，...])：
    类体
```

> 如果在类定义中没有指定父类，则默认父类是`object类`。也就是说，`object`是所有类的父类，里面定义了一些所有类共有的默认实现，比如：`__new__()`

关于构造函数：

1. 子类不重写 **`__init__`**，实例化子类时，会自动调用父类定义的 **`__init__`**。
2. 子类重写了**`__init__`** 时，实例化子类，就不会调用父类已经定义的 **`__init__`**
3. 如果重写了**`__init__`** 时，要使用父类的构造方法，可以使用 **`super`** 关键字，也可以使用如下格式调用：`父类名.__init__(self, 参数列表)`

```python
class Person:
    def __init__(self, name, age):
        print("Person的构造方法")
        self.name = name
        self.age = age

    def say_age(self):
        print(f"{self.name} 的年龄是：{self.age}")

class Student(Person):  # 继承了Person
    def __init__(self, name, age, score):
        super(Student, self).__init__(name, age) # 继承父类的属性
        print("Student的构造方法")
        self.score = score

    def say(self):
        print(self.name, self.age, self.score)

s1 = Student("小妮", 10, 90)
s1.say()
```

### 类成员的继承和重写:ghost:

1. 成员继承：子类继承了父类除构造方法之外的所有成员。

   > ⚠️(私有属性、私有方法也被继承)

2. 方法重写：子类可以重新定义父类中的方法，这样就会覆盖父类的方法，也称为“重写”

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_age(self):
        print(f"{self.name}的年龄是：{self.age}")

    def say_name(self):
        print(f"我是{self.name}")


class Student(Person):

    def __init__(self, name, age, score):
        super(Student, self).__init__(name, age)
        self.score = score

    def say_score(self):
        print(f"{self.name}的分数是：{self.score}")

    def say_name(self):  # 重写父类的方法
        print(f"报告老师，我是{self.name}")


s1 = Student("张三", 15, 85)
s1.say_score()  # 子类新扩展方法
s1.say_age()  # 子类继承自父类的方法
s1.say_name()  # 子类重写父类的方法
```

#### 查看类的继承层次结构:revolving_hearts:

通过类的方法`mro()`或者类的属性`__mro__`可以输出这个类的继承层次结构。

```python
class A:
	pass
class B(A):
	pass
class C(B):
	pass
print(C.mro())
```

> 执行结果：
>
> [<class '__main__.C'>, <class '__main__.B'>, <class '__main__.A'>, <class 'object'>] 

![](/images/python/py30.png)

### object根类:ghost:

![](/images/python/py31.png)

`object`类是所有类的父类，因此所有的类都有`object`类的属性和方法。我们显然有必要深入研究一下`object`类的结构。对于我们继续深入学习Python很有好处。

#### `dir()`查看对象属性:revolving_hearts:

为了深入学习对象，先学习内置函数`dir()`，他可以让我们方便的看到指定对象所有的属性

```python
class Person:
  def __init__(self,name,age):
    self.name = name
    self.age = age
  def say_age(self):
    print(self.name,"的年龄是：",self.age)
obj = object()
print(dir(obj))
s2 = Person("高淇",18)
print(dir(s2))
```

运行结果：

> ['__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']
>
> ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'age', 'name', 'say_age']

从上面我们可以发现这样几个要点：

1. `Person`对象增加了六个属性：

   `__dict__` `__module__` `__weakref__` `age` `name` `say_age`

2. `object`的所有属性，`Person`类作为`object`的子类，显然包含了所有的属性

3. 我们打印`age`、`name`、`say_age`，发现`say_age`虽然是方法，实际上也是属性。只不过，这个属性的类型是`method`而已。

### 重写`__str__()`方法:ghost:

1. `object`有一个`__str__()`方法，用于返回一个对于“对象的描述”。内置函数`str(对象)`,调用的就是`__str__()`
2. `__str__()`经常用于`print()`方法，帮助我们查看对象的信息。`__str__()`可以重写

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.__age = age

    def __str__(self):
        '''将对象转化成一个字符串，一般用于print方法'''
        print("重写__str__方法")
        return "名字是：{0},年龄是{1}".format(self.name, self.__age)


p = Person("小米", 18)
print(p)
s = str(p)
```

### 多重继承:ghost:

![](/images/python/py32.png)

Python支持多重继承，一个子类可以有多个“直接父类”。这样，就具备了“多个父类”的特点。但是由于，这样会被“类的整体层次”搞的异常复杂，尽量避免使用。

```python
class A:
    def aa(self):
        print("aa")

class B:
    def bb(self):
        print("bb")

class C(B, A):
    def cc(self):
        print("cc")

c = C()
c.cc()
c.bb()
c.aa()
```

#### MRO方法解析顺序:revolving_hearts:

如果父类中有相同名字的方法，在子类没有指定父类名时，解释器将“从左向右”按顺序搜索。

MRO（Method Resolution Order）：方法解析顺序。 我们可以通过`mro()`方法获得“类的层次结构”，方法解析顺序也是按照这个“类的层次结构”寻找的。

```python
class A:
    def say(self):
        print("say AAA!")

class B:
    def say(self):
        print("say BBB!")

class C(A, B):
    def cc(self):
        print("cc")

c = C()
print(C.mro())  # 打印类的层次结构
c.say()  # 解释器寻找方法是“从左到右”的方式寻找，此时会执行B类中的say()
```

> - [<class '__main__.C'>, <class '__main__.A'>, <class '__main__.B'>, <class 'object'>]
> - say AAA!

### super()获得父类定义:ghost:

在子类中，如果想要获得父类的方法时，我们可以通过`super()`来做。

`super()`代表父类的定义，不是父类对象。

```python
class A:
    def __init__(self):
        print("A的构造方法")

    def say(self):
        print("say AAA")

class B(A):
    def __init__(self):
        super(B, self).__init__()  # 调用父类的构造方法
        print("B的构造方法")

    def say(self):
        # A.say(self)   调用父类的say方法
        super().say()  # 通过super()调用父类的方法
        print("say BBB")

b = B()
b.say()
```

## 多态:gem:

![](/images/python/py33.png)

多态（polymorphism）是指同一个方法调用由于对象不同可能会产生不同的行为，比如：现实生活中，同一个方法，具体实现会完全不同。 比如：同样是调用人“吃饭”的方法，中国人用筷子吃饭，英国人用刀叉吃饭，印度人用手吃饭。

关于多态要注意以下2点：

1. 多态是方法的多态，属性没有多态。
2. 多态的存在有2个必要条件：继承、方法重写

```python
class Animal:
    def shout(self):
        print("动物叫了一声")

class Dog(Animal):
    def shout(self):
        print("小狗，汪汪汪")

class Cat(Animal):
    def shout(self):
        print("小猫，喵喵喵")

def animalShout(a):
    a.shout()

animalShout(Dog())
animalShout(Cat())
dog = Dog()
cat = Cat()
animalShout(dog)
animalShout(cat)
```

在上边的例子中，我们定义了一个Animal类，实现了一个叫的方法，之后我们又定义了一个Dog和Cat的类并分别继承了Animal类，这样Dog和Cat都有了叫的方法，但是猫的叫法和狗的叫法是不同的，所以在Dog和Cat类中又分别重写了叫的方法。最终实现了多态，这也满足了多态的两个必要条件。

## 对象的浅拷贝和深拷贝:gem:

![](/images/python/py34.png)

### 浅拷贝:ghost:

Python拷贝一般都是浅拷贝。

浅拷贝：拷贝时，拷贝源对象，但对象包含的子对象内容不拷贝。

### 深拷贝:ghost:

使用`copy`模块的`deepcopy`函数，递归拷贝对象中包含的子对象。

深拷贝：拷贝时，拷贝源对象，也递归拷贝对象中包含的子对象

```python
import copy

class MobilePhone:
    def __init__(self, cpu):
        self.cpu = cpu
        
class CPU:
    pass

c = CPU()
m = MobilePhone(c)
print("----浅拷贝-------")
m2 = copy.copy(m)  # m2是新拷贝的另一个手机对象
print("m：", id(m))
print("m2：", id(m2))
print("m的cpu：", id(m.cpu))
print("m2的cpu：", id(m2.cpu))  # m2和m拥有了一样的cpu对象
print("----深拷贝--------")
m3 = copy.deepcopy(m)
print("m：", id(m))
print("m3：", id(m3))
print("m的cpu：", id(m.cpu))
print("m3的cpu：", id(m3.cpu))  # m3和m拥有不一样的cpu对象
```

## 组合:gem:

结婚就是组合。两人组合后，可以复用对方的属性和方法！

除了继承，“组合”也能实现代码的复用！“组合”核心是“将父类对象作为子类的属性”。

> 1. `is-a`关系，我们可以使用“继承”。从而实现子类拥有的父类的方法和属性。`is-a`关系指的是类似这样的关系：狗是动物，dog is animal。狗类就应该继承动物类。
> 2. `has-a`关系，我们可以使用“组合”，也能实现一个类拥有另一个类的方法和属性。`has-a`关系指的是这样的关系：手机拥有CPU。 MobilePhone has a CPU

```python
class MobilePhone:
    def __init__(self, cpu, screen):
        self.cpu = cpu
        self.screen = screen


class CPU:
    def calculate(self):
        print("计算，算个12345")


class Screen:
    def show(self):
        print("显示一个好看的画面，亮瞎你的钛合金大眼")


c = CPU()
s = Screen()
m = MobilePhone(c, s)
m.cpu.calculate()  # 通过组合，我们也能调用cpu对象的方法。相当于手机对象间接拥有了“cpu的方法”
m.screen.show()
```

运算结果：

> - 计算，算个12345
> - 显示一个好看的画面，亮瞎你的钛合金大眼

**视频教程**:film_projector:

<video  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" width="100%" controls></video>

至此，我们已经结束了Python面向对象的学习了，如有疑惑，请对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)。