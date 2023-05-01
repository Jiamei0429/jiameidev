---
category: [TypeScript,WEB前端]
tag: typescript
---

# 6.9 面向对象编程:tada:

## 类的概念:gem:

![](/images/typescript/ts1.png)

虽然 JavaScript 中有类的概念，但是可能大多数 JavaScript 程序员并不是非常熟悉类，这里对类相关的概念做一个简单的介绍

- 类（Class）：定义了一件事物的抽象特点，包含它的属性和方法
- 对象（Object）：类的实例，通过 `new` 生成
- 面向对象（OOP）的三大特性：封装、继承、多态
- 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
- 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
- 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 `Cat` 和 `Dog` 都继承自 `Animal`，但是分别实现了自己的 `eat` 方法。此时针对某一个实例，我们无需了解它是 `Cat` 还是 `Dog`，就可以直接调用 `eat` 方法，程序会自动判断出来应该如何执行 `eat`
- 存取器（getter & setter）：用以改变属性的读取和赋值行为
- 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 `public` 表示公有属性或方法
- 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
- 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口

```typescript
class Animal {
    public name;   // 类属性
    constructor(name: string) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
    get _name() {       //存取器
        return 'Jack';
    }
    set _name(value) {      //存取器
        console.log('setter: ' + value);
    }
}
let a = new Animal('Jack');  // 实例化


class Cat extends Animal {
    constructor(name: string) {
        super(name);  // 调用父类的 constructor(name)
        console.log(this.name);
    }
    sayHi() {
        return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
}
let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom
```

## 类的创建:gem:

![](/images/typescript/ts2.png)

传统的 JavaScript 程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从 ECMAScript 2015，也就是 ECMAScript 6 开始，JavaScript 程序员将能够使用基于类的面向对象的方式。 使用 TypeScript，我们允许开发者现在就使用这些特性，并且编译后的 JavaScript 可以在所有主流浏览器和平台上运行

```typescript
class Greeter {
    message: string;
    constructor(message: string) {
        this.message = message;
    }
    greet() {
        return "Hello, " + this.message;
    }
}

let s1 = new Greeter("world");
console.log(s1.greet());
```

## 类的继承:gem:

![](/images/typescript/ts3.png)

在 TypeScript 里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式，是允许使用继承来扩展现有的类

```typescript
class Animal {
    move(distanceInMeters: number = 0) {  // 移动
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {                        // 叫
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
```

因为 `Dog` 继承了 `Animal` 的功能，因此我们可以创建一个 `Dog` 的实例，它能够 `bark()` 和 `move()`

### super关键字:ghost:

```typescript
class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    move() {
        console.log(`Animal moved`);
    }
}

class Dog extends Animal {
    public age: number;
    constructor(name: string, age: number) {
        super(name)    // 继承父类的属性
        this.age = age;  //子类新增的属性
    }
    bark() {
        console.log('Woof! Woof!');
        super.move()   //  调用父类的方法
    }
}

const dog = new Dog("哈士奇", 12);
dog.bark();
```

> 温馨提示：子类继承父类，父类存在构造函数，子类必须实现构造函数

## 访问修饰符:gem:

![](/images/typescript/ts4.png)

在类中声明的属性与方法，可以添加访问修饰符控制可被访问的范围

TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 `public`、`private` 和 `protected`

- `public` 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 `public` 的
- `private` 修饰的属性或方法是私有的，不能在声明它的类的外部访问
- `protected` 修饰的属性或方法是受保护的，它和 `private` 类似，区别是它在子类中也是允许被访问的

###  `public`:ghost:

我们可以自由的访问程序里定义的成员，在 TypeScript 里，成员都默认为 `public`

`name` 被设置为了 `public`，所以直接访问实例的 `name` 属性是允许的

```typescript
class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
let dog = new Animal("哈士奇")
dog.move(30)
```

###  `private`:ghost:

当成员被标记成 `private` 时，它就不能在声明它的类的外部访问

```typescript
class Animal {
    private name: string;
    constructor(name: string) {
        this.name = name
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);  //本类中可以访问
    }
}
let dog = new Animal("哈士奇")
dog.move(30)
// console.log(dog.name); // 外面访问不了
```

由于name是私有属性，在Animal类的外面访问就会报错

###  `protected`:ghost:

`protected` 修饰符与 `private` 修饰符的行为很相似，但有一点不同， `protected` 成员在派生类（子类）中仍然可以访问

```typescript
class Animal {
    protected name: string;
    constructor(name: string) {
        this.name = name
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);  //本类中可以访问
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name)
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} 移动了 ${distanceInMeters}m.`);  //子类中也可以访问
    }
}
let c = new Cat("猫")
c.move(10)
// console.log(c.name);  // 外面访问不了
```

## readonly 修饰符:gem:

![](/images/typescript/ts5.png)

你可以使用 `readonly` 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化

```typescript
class Person {
    readonly name: string;
    public readonly age: number;
    job: string
    constructor(name: string, age: number, job: string) {
        this.name = name
        this.age = age
        this.job = job
    }
}
let p = new Person("小米", 30, "WEB");
// p.name="大米"   // 只读属性不允许修改
// p.age=40   // 只读属性不允许修改
p.job = "JAVA"  // 可以修改
```

> 注意如果 `readonly` 和其他访问修饰符同时存在的话，需要写在其后面

## 存取器:gem:

TypeScript 支持通过 getters/setters 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

```typescript
class Person {
    name: string
    private _age: number  // 私有属性，不希望外部直接操作
    constructor(name: string, _age: number) {
        this.name = name
        this._age = _age
    }
    get age(): number {
        return this._age;
    }
    set age(val: number) {
        this._age = val
    }
}
let a = new Person("小米", 30);
a.name = "大米"  // 设置
console.log(a.name);   //读取
a.age = 40  //设置私有属性
console.log(a.age);  //读取私有属性
```

## 实例方法与静态方法:gem:

![](/images/typescript/ts7.png)

实例方法我们很熟悉了，就是在类中定义的方法并且通过实例对象调用

使用 `static` 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用

```typescript
class Person {
    name: string
    private _age: number  // 私有属性，不希望外部直接操作
    constructor(name: string, _age: number) {
        this.name = name
        this._age = _age
    }
    sayHello() {     // 实例方法
        console.log(`${this.name}:Hello`)
    }
    static sayHi() {    // 静态方法
        console.log("Hi")
    }
}
let a = new Person("小米", 30);
a.sayHello()
Person.sayHi()
```

> 静态方法是指与本类不相关的代码片段，只是放在了本类中，即冠你之名，与你无关

## 实例属性与静态属性:gem:

![](/images/typescript/ts8.png)

实例属性我们很熟悉，就是在类中直接定义的属性，可以通过实例对象调用

ES7 提案中，可以使用 `static` 定义一个静态属性，在TypeScript中也同样适用,通过类名调用

```typescript
class Person {
    name: string   
    private _age: number  // 私有实例属性，不希望外部直接操作
    static job = "WEB"   //  静态属性
    constructor(name: string, _age: number) {
        this.name = name
        this._age = _age
    }
    sayHello() {     // 实例方法
        console.log(Person.job)
    }

}
let a = new Person("小米", 30);
a.sayHello()
console.log(a.name);  // 访问实例属性
console.log(Person.job);  // 访问静态属性
```

## 抽象类:gem:

![](/images/typescript/ts9.png)

抽象类要点：

- 首先，抽象类是不允许被实例化的

- 其次，抽象类中的抽象方法必须被子类实现

- `abstract` 用于定义抽象类和其中的抽象方法

```typescript
abstract class Person {    //抽象类
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract satHi(): void;  // 抽象方法
    sayHello() {              // 实例方法
        console.log("hello");
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name)
    }
    satHi() {
        console.log("hi");
    }
}

let s = new Student("小明")
s.satHi()
```

**视频教程**:film_projector:

<video  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" width="100%" controls></video>

至此，我们已经结束面向对象编程的学习了，如有疑惑，请对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)。