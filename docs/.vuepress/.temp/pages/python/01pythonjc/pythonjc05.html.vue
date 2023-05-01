<template><div><h1 id="面向对象编程" tabindex="-1"><a class="header-anchor" href="#面向对象编程" aria-hidden="true">#</a> 面向对象编程  🎉</h1>
<figure><img src="@source/../.vuepress/public/images/python/py13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Python完全采用了面向对象的思想，是真正面向对象的编程语言，完全支持面向对象的基本功能，例如：继承、多态、封装等。</p>
<p>Python中，一切皆对象。我们在前面学习的数据类型、函数等，都是对象。</p>
<blockquote>
<ul>
<li>面向对象（Object oriented Programming，OOP）编程的思想主要是针对大型软件设计而来的。</li>
<li>面向对象编程使程序的扩展性更强、可读性更好，使编程可以像搭积木一样简单。</li>
<li>面向对象编程将数据和操作数据相关的方法封装到对象中，组织代码和数据的方式更加接近人的思维，从而大大提高了编程的效率。</li>
<li>❤️Python支持面向过程、面向对象、函数式编程等多种编程范式。</li>
</ul>
</blockquote>
<h2 id="面向过程和面向对象的区别" tabindex="-1"><a class="header-anchor" href="#面向过程和面向对象的区别" aria-hidden="true">#</a> 面向过程和面向对象的区别💎</h2>
<p>面向过程和面向对象都是对软件分析、设计和开发的一种思想,它指导着人们以不同的方式去分析、设计和开发软件。C语言是一种典型的面向过程语言，Java是一种典型的面向对象语言。</p>
<h3 id="面向过程是什么" tabindex="-1"><a class="header-anchor" href="#面向过程是什么" aria-hidden="true">#</a> 面向过程是什么？👻</h3>
<p>面向过程适合简单、不需要协作的事务，重点关注如何执行。面向过程时，我们首先思考“怎么按步骤实现？”。比如，如何开车？我们很容易就列出实现步骤：</p>
<figure><img src="@source/../.vuepress/public/images/python/py14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>再比如：把大象装冰箱分几步？</p>
<figure><img src="@source/../.vuepress/public/images/python/py15.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="面向对象是什么" tabindex="-1"><a class="header-anchor" href="#面向对象是什么" aria-hidden="true">#</a> 面向对象是什么？👻</h3>
<p>面向对象(Oriented-Object)思想更契合人的思维模式。我们首先思考的是&quot;怎么设计这个事物？”。比如思考造车，我们就会先思考“车怎么设计？”，而不是“怎么按步骤造车的问题”。这就是思维方式的转变。</p>
<p>天然的，我们就会从“车由什么组成”开始思考：</p>
<figure><img src="@source/../.vuepress/public/images/python/py16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>为了协作，我们找轮胎厂完成制造轮胎的步骤，发动机厂完成制造发动机的步骤；这样，发现大家可以同时进行车的制造，最终进行组装，大大提高了效率。</p>
<p>具体到轮胎厂的一个流水线操作，仍然是有步骤的，还是离不开执行者、离不开面向过程！</p>
<p>我们千万不要把面向过程和面向对象对立起来。他们是相辅相成的。面向对象离不开面向过程！</p>
<blockquote>
<p>面向对象可以帮助我们从宏观上把握、从整体上分析整个系统。 但是，具体到实现部分的微观操作（就是一个个方法），仍然需要面向过程的思路去处理。</p>
</blockquote>
<h3 id="面向对象和面向过程总结" tabindex="-1"><a class="header-anchor" href="#面向对象和面向过程总结" aria-hidden="true">#</a> <strong>面向对象和面向过程总结</strong>👻</h3>
<ol>
<li>都是解决问题的思维方式，都是代码组织的方式。</li>
<li>面向过程是一种“执行者思维&quot;，解决简单问题可以使用面向过程</li>
<li>面向对象是一种“设计者思维”，解决复杂、需要协作的问题可以使用面向对象</li>
</ol>
<blockquote>
<p>面向对象离不开面向过程：</p>
<ul>
<li>宏观上：通过面向对象进行整体设计</li>
<li>微观上：执行和处理数据，仍然是面向过程</li>
</ul>
</blockquote>
<h2 id="类的定义" tabindex="-1"><a class="header-anchor" href="#类的定义" aria-hidden="true">#</a> 类的定义💎</h2>
<figure><img src="@source/../.vuepress/public/images/python/py17.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>类可以看做是一个模版，或者图纸，系统根据类的定义来造出对象。我们要造一个汽车，怎么样造？类就是这个图纸，规定了汽车的详细信息，然后根据图纸将汽车造出来。</p>
<blockquote>
<p>类：我们叫做<code v-pre>class</code>。 对象：我们叫做<code v-pre>object</code>、<code v-pre>instance</code>(实例)。以后我们说某个类的对象，某个类的实例。是一样的意思。</p>
</blockquote>
<p>定义类的语法格式如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> 类名：
    类体
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ol>
<li>类名必须符合“标识符”的规则；一般规定，首字母大写，多个单词使用“驼峰原则”。</li>
<li>类体中我们可以定义属性和方法</li>
<li>属性用来描述数据，方法(即函数)用来描述这些数据相关的操作</li>
</ol>
</blockquote>
<h3 id="属性和方法" tabindex="-1"><a class="header-anchor" href="#属性和方法" aria-hidden="true">#</a> 属性和方法👻</h3>
<p>我们通过类定义数据类型的属性（数据）和方法（行为）,也就是说，“类将行为和状态打包在一起”。</p>
<div style="display:flex;justify-content:space-around;flex-wrap:wrap;">
    <img src="@source/../.vuepress/public/images/python/py18.png" style="width:350px"/>
    <img src="@source/../.vuepress/public/images/python/py19.png" style="width:350px"/>
</div>
<p>对象是类的具体实体，一般称为“类的实例”。类看做“饼干模具”，对象就是根据这个“模具”制造出的“饼干”。</p>
<p>从一个类创建对象时，每个对象会共享这个类的行为（类中定义的方法），但会有自己的属性值（不共享状态）。更具体一点：“方法代码是共享的，属性数据不共享”。</p>
<figure><img src="@source/../.vuepress/public/images/python/py20.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="基本示例" tabindex="-1"><a class="header-anchor" href="#基本示例" aria-hidden="true">#</a> 基本示例👻</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">:</span>
    company <span class="token operator">=</span> <span class="token string">"SXT"</span>  <span class="token comment"># 类属性</span>
    count <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 类属性</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 构造方法第一个参数必须为self</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name  <span class="token comment"># 实例属性</span>
        self<span class="token punctuation">.</span>score <span class="token operator">=</span> score

    <span class="token keyword">def</span> <span class="token function">say_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 实例方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"我的公司是：</span><span class="token interpolation"><span class="token punctuation">{</span>Student<span class="token punctuation">.</span>company<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">,</span> <span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">的分数是：</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>score<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">say_haha</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 实例方法</span>
        <span class="token keyword">pass</span>


s1 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span>   <span class="token comment"># 实例对象,自动调用__init__()方法</span>
s1<span class="token punctuation">.</span>say_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>pass</code>为空语句。就是表示什么都不做，只是作为一个占位符存在。当你写代码时，遇到暂时不知道往方法或者类中加入什么时，可以先用pass占位，后期再补上。</p>
</blockquote>
<h2 id="构造函-init-和-new-方法" tabindex="-1"><a class="header-anchor" href="#构造函-init-和-new-方法" aria-hidden="true">#</a> <strong>构造函_init_和_new_方法</strong>💎</h2>
<p>初始化对象，我们需要定义构造函数<code v-pre>__init__()</code>方法。构造方法用于执行“实例对象的初始化工作”，即对象创建后，初始化当前对象的相关属性，无返回值。</p>
<p>构造方法是负责初始化（装修），不是建对象(房子)</p>
<blockquote>
<p><code v-pre>__init__()</code>的要点如下：</p>
<ol>
<li>
<p>名称固定，必须为：<code v-pre>__init__()</code></p>
</li>
<li>
<p>第一个参数固定，必须为：<code v-pre>self</code>。 <code v-pre>self</code>指的就是刚刚创建好的实例对象</p>
</li>
<li>
<p>构造函数通常用来初始化实例对象的实例属性，如下代码就是初始化实例属性：<code v-pre>name</code>和<code v-pre>score</code></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>name<span class="token punctuation">,</span>score<span class="token punctuation">)</span><span class="token punctuation">:</span>
   self<span class="token punctuation">.</span>name <span class="token operator">=</span> name     <span class="token comment">#实例属性</span>
   self<span class="token punctuation">.</span>score <span class="token operator">=</span> score
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>通过“类名(参数列表)”来调用构造函数。调用后，将创建好的对象返回给相应的变量。 比如：<code v-pre>s1 = Student('张三', 80)</code></p>
</li>
<li>
<p><code v-pre>__init__()</code>方法：初始化创建好的对象，初始化指的是：“给实例属性赋值”</p>
</li>
<li>
<p><code v-pre>__new__()</code>方法: 用于创建对象，但我们一般无需重定义该方法</p>
</li>
<li>
<p>如果我们不定义<code v-pre>__init__</code>方法，系统会提供一个默认的<code v-pre>__init__</code>方法。如果我们定义了带参的<code v-pre>__init__</code>方法，系统不创建默认的<code v-pre>__init__</code>方法</p>
</li>
</ol>
<p>❤️Python中的<code v-pre>self</code>相当于C++中的<code v-pre>self指针</code>，JAVA和C#中的<code v-pre>this</code>关键字。Python中，<code v-pre>self</code>必须为构造函数的第一个参数，名字可以任意修改。但一般惯例，都叫做<code v-pre>self</code></p>
<figure><img src="@source/../.vuepress/public/images/python/py21.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</blockquote>
<h2 id="实例属性和实例方法" tabindex="-1"><a class="header-anchor" href="#实例属性和实例方法" aria-hidden="true">#</a> 实例属性和实例方法💎</h2>
<h3 id="实例属性" tabindex="-1"><a class="header-anchor" href="#实例属性" aria-hidden="true">#</a> 实例属性👻</h3>
<p>实例属性是从属于实例对象的属性，也称为“实例变量”。他的使用有如下几个要点：</p>
<ol>
<li>
<p>实例属性一般在<code v-pre>__init__()</code>方法中通过如下代码定义：</p>
<p><code v-pre>self.实例属性名 = 初始值</code></p>
</li>
<li>
<p>在本类的其他实例方法中，也是通过<code v-pre>self</code>进行访问： <code v-pre>self.实例属性名</code></p>
</li>
<li>
<p>创建实例对象后，通过实例对象访问：</p>
<p><code v-pre>obj01 = 类名()</code> #创建和初始化对象，调用<code v-pre>__init__()</code>初始化属性</p>
<p><code v-pre>obj01.实例属性名 = 值</code> #可以给已有属性赋值，也可以新加属性</p>
</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name  <span class="token comment"># 增加name实例属性</span>
        self<span class="token punctuation">.</span>score <span class="token operator">=</span> score  <span class="token comment"># 增加score实例属性</span>

    <span class="token keyword">def</span> <span class="token function">say_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>  <span class="token comment"># 增加新的age实例属性</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{0}的分数是{1}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">)</span>


s1 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span>
s1<span class="token punctuation">.</span>say_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
s1<span class="token punctuation">.</span>salary <span class="token operator">=</span> <span class="token number">3000</span>  <span class="token comment"># s1对象增加salary属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法👻</h3>
<p>实例方法是从属于实例对象的方法。实例方法的定义格式如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> 方法名<span class="token punctuation">(</span>self <span class="token punctuation">[</span><span class="token punctuation">,</span> 形参列表<span class="token punctuation">]</span><span class="token punctuation">)</span>：
    函数体
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要点：</p>
<ol>
<li>
<p>定义实例方法时，第一个参数必须为<code v-pre>self</code>。和前面一样，<code v-pre>self</code>指当前的实例对象。</p>
</li>
<li>
<p>调用实例方法时，不需要也不能给<code v-pre>self</code>传参。<code v-pre>self</code>由解释器自动传参</p>
</li>
<li>
<p>方法的调用格式如下： <code v-pre>对象.方法名([实参列表])</code></p>
</li>
<li>
<p>实例对象的方法调用本质:</p>
<figure><img src="@source/../.vuepress/public/images/python/py22.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<p>其他操作:</p>
<ol>
<li><code v-pre>dir(obj)</code>可以获得对象的所有属性、方法</li>
<li><code v-pre>obj.__dict__</code> 对象的属性字典</li>
<li><code v-pre>pass</code> 空语句</li>
<li><code v-pre>isinstance（对象,类型）</code> 判断“对象”是不是“指定类型”</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">say_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>   <span class="token comment"># 实例方法</span>
        <span class="token keyword">pass</span>


s1 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">)</span>
s1<span class="token punctuation">.</span>say_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">dir</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>__dict__<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类属性和类方法" tabindex="-1"><a class="header-anchor" href="#类属性和类方法" aria-hidden="true">#</a> 类属性和类方法💎</h2>
<h3 id="类属性" tabindex="-1"><a class="header-anchor" href="#类属性" aria-hidden="true">#</a> 类属性👻</h3>
<p>类属性是从属于“类对象”的属性，也称为“类变量”。由于，类属性从属于类对象，可以被所有实例对象共享。</p>
<p>类属性的定义方式：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> 类名：
   类变量名<span class="token operator">=</span> 初始值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在类中或者类的外面，我们可以通过：<code v-pre>类名.类变量名</code>来读写</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">:</span>
    count <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 类属性</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name   <span class="token comment"># 实例属性</span>

    <span class="token keyword">def</span> <span class="token function">say_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>   <span class="token comment"># 实例方法</span>
        Student<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span>


s1 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">)</span>
s1<span class="token punctuation">.</span>say_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Student<span class="token punctuation">.</span>count<span class="token punctuation">)</span>  <span class="token comment"># 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类方法" tabindex="-1"><a class="header-anchor" href="#类方法" aria-hidden="true">#</a> 类方法👻</h3>
<p>类方法，是从属于“类对象”的方法。类方法通过装饰器<code v-pre>@classmethod</code>来定义，格式如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token decorator annotation punctuation">@classmethod</span>
<span class="token keyword">def</span> 类方法名<span class="token punctuation">(</span>cls  <span class="token punctuation">[</span>，形参列表<span class="token punctuation">]</span><span class="token punctuation">)</span> ：
    方法体
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要点如下：</p>
<ol>
<li><code v-pre>@classmethod</code>必须位于方法上面一行</li>
<li>第一个<code v-pre>cls</code>必须有；<code v-pre>cls</code>指的就是“类对象”本身</li>
<li>调用类方法格式：<code v-pre>类名.类方法名(参数列表)</code>。 参数列表中，不需要也不能给<code v-pre>cls</code>传值</li>
<li>类方法中访问实例属性和实例方法会导致错误</li>
<li>子类继承父类方法时，传入<code v-pre>cls</code>是子类对象，而非父类对象(⚠️讲完继承再说)</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">:</span>
    count <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 类属性</span>
    company <span class="token operator">=</span> <span class="token string">"JIAMEI"</span>  <span class="token comment"># 类属性</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name   <span class="token comment"># 实例属性</span>

    <span class="token keyword">def</span> <span class="token function">say_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>   <span class="token comment"># 实例方法</span>
        Student<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">printCompany</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 类方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>cls<span class="token punctuation">.</span>company<span class="token punctuation">)</span>


s1 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">)</span>
s1<span class="token punctuation">.</span>say_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
Student<span class="token punctuation">.</span>printCompany<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法💎</h2>
<p>Python中允许定义与“类对象”无关的方法，称为“静态方法”。</p>
<p>“静态方法”和在模块中定义普通函数没有区别，只不过“静态方法”放到了“类的名字空间里面”，即在你名下，与你无关，需要通过“类调用”。</p>
<p>静态方法通过装饰器<code v-pre>@staticmethod</code>来定义，格式如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token decorator annotation punctuation">@staticmethod</span>
<span class="token keyword">def</span> 静态方法名<span class="token punctuation">(</span><span class="token punctuation">[</span>形参列表<span class="token punctuation">]</span><span class="token punctuation">)</span> ：
    方法体
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要点如下：</p>
<ol>
<li><code v-pre>@staticmethod</code>必须位于方法上面一行</li>
<li>调用静态方法格式：<code v-pre>类名.静态方法名(参数列表)</code></li>
<li>静态方法中访问实例属性和实例方法会导致错误</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">:</span>
    count <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 类属性</span>
    company <span class="token operator">=</span> <span class="token string">"JIAMEI"</span>  <span class="token comment"># 类属性</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name   <span class="token comment"># 实例属性</span>

    <span class="token keyword">def</span> <span class="token function">say_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>   <span class="token comment"># 实例方法</span>
        Student<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">printCompany</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 类方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>cls<span class="token punctuation">.</span>company<span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 静态方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span>


s1 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">)</span>
s1<span class="token punctuation">.</span>say_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
Student<span class="token punctuation">.</span>printCompany<span class="token punctuation">(</span><span class="token punctuation">)</span>
Student<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="del-方法和-call-方法" tabindex="-1"><a class="header-anchor" href="#del-方法和-call-方法" aria-hidden="true">#</a> <code v-pre>_del_方法</code>和<code v-pre>_call_</code>方法💎</h2>
<h3 id="del-方法" tabindex="-1"><a class="header-anchor" href="#del-方法" aria-hidden="true">#</a> <code v-pre>_del_方法</code>👻</h3>
<figure><img src="@source/../.vuepress/public/images/python/py23.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>__del__()</code>称为“析构方法”，用于实现对象被销毁时所需的操作。比如：释放对象占用的资源，例如：打开的文件资源、网络连接等。</p>
<p>Python实现自动的垃圾回收，当对象没有被引用时（引用计数为0），由垃圾回收器调用<code v-pre>__del__()</code>。</p>
<p>我们也可以通过<code v-pre>del语句</code>删除对象，从而保证调用<code v-pre>__del__()</code>。</p>
<p>系统会自动提供<code v-pre>__del__方法</code>，一般不需要自定义析构方法。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 析构函数</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__del__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"销毁对象：</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>


p1 <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token punctuation">)</span>
p2 <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">del</span> p2
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"程序结束"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运算结果：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 销毁对象：&lt;__main__.Person object at 0x02175610></span>
<span class="token comment"># 程序结束</span>
<span class="token comment"># 销毁对象：&lt;__main__.Person object at 0x021755D0></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="call-方法" tabindex="-1"><a class="header-anchor" href="#call-方法" aria-hidden="true">#</a> <code v-pre>_call_方法</code>👻</h3>
<ol>
<li>Python 中，凡是可以将 () 直接应用到自身并执行，都称为可调用对象。</li>
<li>可调用对象包括自定义的函数、Python 内置函数、以及本节所讲的实例对象。</li>
<li>定义了<code v-pre>__call__()</code>的对象，称为“可调用对象”，即该对象可以像函数一样被调用。</li>
<li>该方法使得实例对象可以像调用普通函数那样，以“对象名()”的形式使用。</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"f1"</span><span class="token punctuation">)</span>

f1<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 本质也是调用了__call__()方法</span>


<span class="token keyword">class</span> <span class="token class-name">Car</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> age<span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"__call__方法"</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"车龄：</span><span class="token interpolation"><span class="token punctuation">{</span>age<span class="token punctuation">}</span></span><span class="token string">,金额：</span><span class="token interpolation"><span class="token punctuation">{</span>money<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>

f2 <span class="token operator">=</span> Car<span class="token punctuation">(</span><span class="token punctuation">)</span>
f2<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">200000</span><span class="token punctuation">)</span>  <span class="token comment"># 像调用函数那样调用，本质也是调用了__call__()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法没有重载" tabindex="-1"><a class="header-anchor" href="#方法没有重载" aria-hidden="true">#</a> 方法没有重载💎</h2>
<figure><img src="@source/../.vuepress/public/images/python/py24.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果我们在类体中定义了多个重名的方法，只有最后一个方法有效。</p>
<p>建议：不要使用重名的方法！Python中方法没有重载。</p>
<blockquote>
<ul>
<li>在其他一些语言(比如：Java)中，可以定义多个重名的方法，只要保证方法签名唯一即可。方法签名包含3个部分：方法名、参数数量、参数类型。</li>
<li>Python中，方法的的参数没有声明类型（调用时确定参数的类型），参数的数量也可以由可变参数控制。因此，Python中是没有方法的重载的。</li>
</ul>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">say_hi</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">say_hi</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>

p1 <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># p1.say_hi()   # 报错</span>
p1<span class="token punctuation">.</span>say_hi<span class="token punctuation">(</span><span class="token string">"JAIMEI"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法的动态性" tabindex="-1"><a class="header-anchor" href="#方法的动态性" aria-hidden="true">#</a> 方法的动态性👻</h3>
<figure><img src="@source/../.vuepress/public/images/python/py25.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Python是动态语言，我们可以动态的为类添加新的方法，或者动态的修改类的已有的方法</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">work</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"努力上班！"</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">play_game</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>   <span class="token comment"># s参数代表必传的self参数</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"玩游戏"</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">work2</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"好好工作，努力上班！"</span><span class="token punctuation">)</span>


Person<span class="token punctuation">.</span>play <span class="token operator">=</span> play_game  <span class="token comment"># 新增</span>
Person<span class="token punctuation">.</span>work <span class="token operator">=</span> work2   <span class="token comment"># 覆盖</span>
p <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span>play<span class="token punctuation">(</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span>work<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到，<code v-pre>Person</code>动态的新增了<code v-pre>play_game</code>方法，以及用<code v-pre>work2</code>替换了<code v-pre>work</code>方法</p>
<h2 id="私有属性和私有方法" tabindex="-1"><a class="header-anchor" href="#私有属性和私有方法" aria-hidden="true">#</a> 私有属性和私有方法💎</h2>
<figure><img src="@source/../.vuepress/public/images/python/py26.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Python对于类的成员没有严格的访问控制限制，这与其他面向对象语言有区别。关于私有属性和私有方法，有如下要点：</p>
<ol>
<li>通常我们约定，两个下划线开头的属性是私有的(private)。其他为公共的(public)。</li>
<li>类内部可以访问私有属性(方法)</li>
<li>类外部不能直接访问私有属性(方法)</li>
<li>类外部可以通过<code v-pre>_类名__私有属性(方法)名</code>”访问私有属性(方法)</li>
</ol>
<blockquote>
<p>⚠️【注】方法本质上也是属性！只不过是可以通过()执行而已。</p>
<p>所以，此处私有属性和私有方法的使用基本一致。</p>
</blockquote>
<h3 id="私有属性" tabindex="-1"><a class="header-anchor" href="#私有属性" aria-hidden="true">#</a> 私有属性👻</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Employee</span><span class="token punctuation">:</span>
    count <span class="token operator">=</span> <span class="token number">26</span>  <span class="token comment"># 公有类属性</span>
    __company <span class="token operator">=</span> <span class="token string">"WEB"</span>  <span class="token comment"># 私有类属性</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name  <span class="token comment"># 公有实例属性</span>
        self<span class="token punctuation">.</span>__age <span class="token operator">=</span> age  <span class="token comment"># 私有实例属性</span>

    <span class="token keyword">def</span> <span class="token function">say_company</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"我的公司是：</span><span class="token interpolation"><span class="token punctuation">{</span>Employee<span class="token punctuation">.</span>__company<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>  <span class="token comment"># 类内部可以直接访问私有类属性</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">的年龄是：</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>__age<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>  <span class="token comment"># 类内部可以直接访问私有实例属性</span>


p1 <span class="token operator">=</span> Employee<span class="token punctuation">(</span><span class="token string">"小米"</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Employee<span class="token punctuation">.</span>count<span class="token punctuation">)</span>    <span class="token comment"># 类外部直接访问公有类属性</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>name<span class="token punctuation">)</span>  <span class="token comment"># 类外部直接访问公有实例属性</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>Employee<span class="token punctuation">.</span>_Employee__company<span class="token punctuation">)</span>  <span class="token comment"># 外部强行访问私有类属性</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>_Employee__age<span class="token punctuation">)</span>  <span class="token comment"># 外部强行访问私有实例属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="私有方法" tabindex="-1"><a class="header-anchor" href="#私有方法" aria-hidden="true">#</a> 私有方法👻</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Employee</span><span class="token punctuation">:</span>
    count <span class="token operator">=</span> <span class="token number">26</span>
    __company <span class="token operator">=</span> <span class="token string">"WEB"</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>__age <span class="token operator">=</span> age

    <span class="token keyword">def</span> <span class="token function">__say_work</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 私有实例方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"我的公司是：</span><span class="token interpolation"><span class="token punctuation">{</span>Employee<span class="token punctuation">.</span>__company<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">的年龄是：</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>__age<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">say_company</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 公有实例方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"我的公司是：</span><span class="token interpolation"><span class="token punctuation">{</span>Employee<span class="token punctuation">.</span>__company<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">的年龄是：</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>__age<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>__say_work<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 类内部直接调用私有实例方法</span>


p1 <span class="token operator">=</span> Employee<span class="token punctuation">(</span><span class="token string">"小米"</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span>
p1<span class="token punctuation">.</span>say_company<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 类外部直接访问公有实例方法</span>
p1<span class="token punctuation">.</span>_Employee__say_work<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 外部强行访问私有实例方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="property装饰器" tabindex="-1"><a class="header-anchor" href="#property装饰器" aria-hidden="true">#</a> <code v-pre>@property</code>装饰器💎</h2>
<p><code v-pre>@property</code>可以将一个方法的调用方式变成“属性调用(不加括号)”。</p>
<p><code v-pre>@property</code>主要用于帮助我们处理属性的读操作、写操作。对于某一个属性，我们可以直接通过：<code v-pre>emp1.salary = 30000</code></p>
<p>如上的操作读操作、写操作。但是，这种做法不安全。比如，我需要限制薪水必须为<code v-pre>1-10000</code>的数字。这时候，我们就需要通过使用装饰器<code v-pre>@property</code>来处理。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Employee</span><span class="token punctuation">:</span>
    age <span class="token operator">=</span> <span class="token number">26</span>
    __company <span class="token operator">=</span> <span class="token string">"WEB"</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> salary<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>__salary <span class="token operator">=</span> salary

    <span class="token decorator annotation punctuation">@property</span>  <span class="token comment"># 相当于salary属性的getter方法</span>
    <span class="token keyword">def</span> <span class="token function">salary</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"月薪为:</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>__salary<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__salary

    <span class="token decorator annotation punctuation">@salary<span class="token punctuation">.</span>setter</span>
    <span class="token keyword">def</span> <span class="token function">salary</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token number">0</span> <span class="token operator">&lt;</span> val <span class="token operator">&lt;</span> <span class="token number">100000</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>__salary <span class="token operator">=</span> val
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"工资不合理"</span><span class="token punctuation">)</span>


p1 <span class="token operator">=</span> Employee<span class="token punctuation">(</span><span class="token string">"小米"</span><span class="token punctuation">,</span> <span class="token number">8000</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>_Employee__salary<span class="token punctuation">)</span>  <span class="token comment"># 外部强行访问私有实例属性</span>
p1<span class="token punctuation">.</span>salary  <span class="token comment"># 外部通过装饰器强行访问私有实例属性</span>
p1<span class="token punctuation">.</span>salary <span class="token operator">=</span> <span class="token number">1000000</span>   <span class="token comment"># 外部对私有实例属性赋值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面向对象三大特征介绍" tabindex="-1"><a class="header-anchor" href="#面向对象三大特征介绍" aria-hidden="true">#</a> 面向对象三大特征介绍💎</h2>
<figure><img src="@source/../.vuepress/public/images/python/py27.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Python是面向对象的语言，支持面向对象编程的三大特性：继承、封装（隐藏）、多态。</p>
<p><strong>封装（隐藏）</strong></p>
<blockquote>
<p>隐藏对象的属性和实现细节，只对外提供必要的方法。相当于将“细节封装起来”，只对外暴露“相关调用方法”。</p>
<p>通过前面学习的“私有属性、私有方法”的方式，实现“封装”。Python追求简洁的语法，没有严格的语法级别的“访问控制符”，更多的是依靠程序员自觉实现。</p>
</blockquote>
<p><strong>继承</strong></p>
<blockquote>
<p>继承可以让子类具有父类的特性，提高了代码的重用性。</p>
<p>从设计上是一种增量进化，原有父类设计不变的情况下，可以增加新的功能，或者改进已有的算法。</p>
</blockquote>
<p><strong>多态</strong></p>
<blockquote>
<p>多态是指同一个方法调用由于对象不同会产生不同的行为。生活中这样的例子比比皆是：同样是休息方法，人不同休息方法不同。张三休息是睡觉，李四休息是玩游戏，程序员休息是“敲几行代码”。</p>
</blockquote>
<h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> <strong>继承</strong>💎</h2>
<figure><img src="@source/../.vuepress/public/images/python/py28.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>继承是面向对象编程的三大特征之一。继承让我们更加容易实现类的扩展。实现代码的重用，不用再重新发明轮子。</p>
<p>如果一个新类继承自一个设计好的类，就直接具备了已有类的特征，就大大降低了工作难度。已有的类，我们称为“父类或者基类”，新的类，我们称为“子类或者派生类”。</p>
<figure><img src="@source/../.vuepress/public/images/python/py29.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> <strong>语法格式</strong>👻</h3>
<p>Python支持多重继承，一个子类可以继承多个父类。继承的语法格式如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> 子类类名<span class="token punctuation">(</span>父类<span class="token number">1</span><span class="token punctuation">[</span>，父类<span class="token number">2</span>，<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">)</span>：
    类体
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>如果在类定义中没有指定父类，则默认父类是<code v-pre>object类</code>。也就是说，<code v-pre>object</code>是所有类的父类，里面定义了一些所有类共有的默认实现，比如：<code v-pre>__new__()</code></p>
</blockquote>
<p>关于构造函数：</p>
<ol>
<li>子类不重写 <strong><code v-pre>__init__</code></strong>，实例化子类时，会自动调用父类定义的 <strong><code v-pre>__init__</code></strong>。</li>
<li>子类重写了**<code v-pre>__init__</code>** 时，实例化子类，就不会调用父类已经定义的 <strong><code v-pre>__init__</code></strong></li>
<li>如果重写了**<code v-pre>__init__</code>** 时，要使用父类的构造方法，可以使用 <strong><code v-pre>super</code></strong> 关键字，也可以使用如下格式调用：<code v-pre>父类名.__init__(self, 参数列表)</code></li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Person的构造方法"</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

    <span class="token keyword">def</span> <span class="token function">say_age</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> 的年龄是：</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>age<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 继承了Person</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>Student<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token comment"># 继承父类的属性</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Student的构造方法"</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>score <span class="token operator">=</span> score

    <span class="token keyword">def</span> <span class="token function">say</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>age<span class="token punctuation">,</span> self<span class="token punctuation">.</span>score<span class="token punctuation">)</span>

s1 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">"小妮"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span>
s1<span class="token punctuation">.</span>say<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类成员的继承和重写" tabindex="-1"><a class="header-anchor" href="#类成员的继承和重写" aria-hidden="true">#</a> 类成员的继承和重写👻</h3>
<ol>
<li>
<p>成员继承：子类继承了父类除构造方法之外的所有成员。</p>
<blockquote>
<p>⚠️(私有属性、私有方法也被继承)</p>
</blockquote>
</li>
<li>
<p>方法重写：子类可以重新定义父类中的方法，这样就会覆盖父类的方法，也称为“重写”</p>
</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

    <span class="token keyword">def</span> <span class="token function">say_age</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">的年龄是：</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>age<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">say_name</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"我是</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>Student<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>score <span class="token operator">=</span> score

    <span class="token keyword">def</span> <span class="token function">say_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">的分数是：</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>score<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">say_name</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 重写父类的方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"报告老师，我是</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>


s1 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">)</span>
s1<span class="token punctuation">.</span>say_score<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 子类新扩展方法</span>
s1<span class="token punctuation">.</span>say_age<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 子类继承自父类的方法</span>
s1<span class="token punctuation">.</span>say_name<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 子类重写父类的方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看类的继承层次结构" tabindex="-1"><a class="header-anchor" href="#查看类的继承层次结构" aria-hidden="true">#</a> 查看类的继承层次结构💞</h4>
<p>通过类的方法<code v-pre>mro()</code>或者类的属性<code v-pre>__mro__</code>可以输出这个类的继承层次结构。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>
	<span class="token keyword">pass</span>
<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">pass</span>
<span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>B<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">pass</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>C<span class="token punctuation">.</span>mro<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>执行结果：</p>
<p>[&lt;class '<strong>main</strong>.C'&gt;, &lt;class '<strong>main</strong>.B'&gt;, &lt;class '<strong>main</strong>.A'&gt;, &lt;class 'object'&gt;]</p>
</blockquote>
<figure><img src="@source/../.vuepress/public/images/python/py30.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="object根类" tabindex="-1"><a class="header-anchor" href="#object根类" aria-hidden="true">#</a> object根类👻</h3>
<figure><img src="@source/../.vuepress/public/images/python/py31.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>object</code>类是所有类的父类，因此所有的类都有<code v-pre>object</code>类的属性和方法。我们显然有必要深入研究一下<code v-pre>object</code>类的结构。对于我们继续深入学习Python很有好处。</p>
<h4 id="dir-查看对象属性" tabindex="-1"><a class="header-anchor" href="#dir-查看对象属性" aria-hidden="true">#</a> <code v-pre>dir()</code>查看对象属性💞</h4>
<p>为了深入学习对象，先学习内置函数<code v-pre>dir()</code>，他可以让我们方便的看到指定对象所有的属性</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
  <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
    self<span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token keyword">def</span> <span class="token function">say_age</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token string">"的年龄是："</span><span class="token punctuation">,</span>self<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
obj <span class="token operator">=</span> <span class="token builtin">object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">dir</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
s2 <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">"高淇"</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">dir</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<blockquote>
<p>['<strong>class</strong>', '<strong>delattr</strong>', '<strong>dir</strong>', '<strong>doc</strong>', '<strong>eq</strong>', '<strong>format</strong>', '<strong>ge</strong>', '<strong>getattribute</strong>', '<strong>gt</strong>', '<strong>hash</strong>', '<strong>init</strong>', '<strong>init_subclass</strong>', '<strong>le</strong>', '<strong>lt</strong>', '<strong>ne</strong>', '<strong>new</strong>', '<strong>reduce</strong>', '<strong>reduce_ex</strong>', '<strong>repr</strong>', '<strong>setattr</strong>', '<strong>sizeof</strong>', '<strong>str</strong>', '<strong>subclasshook</strong>']</p>
<p>['<strong>class</strong>', '<strong>delattr</strong>', '<strong>dict</strong>', '<strong>dir</strong>', '<strong>doc</strong>', '<strong>eq</strong>', '<strong>format</strong>', '<strong>ge</strong>', '<strong>getattribute</strong>', '<strong>gt</strong>', '<strong>hash</strong>', '<strong>init</strong>', '<strong>init_subclass</strong>', '<strong>le</strong>', '<strong>lt</strong>', '<strong>module</strong>', '<strong>ne</strong>', '<strong>new</strong>', '<strong>reduce</strong>', '<strong>reduce_ex</strong>', '<strong>repr</strong>', '<strong>setattr</strong>', '<strong>sizeof</strong>', '<strong>str</strong>', '<strong>subclasshook</strong>', '<strong>weakref</strong>', 'age', 'name', 'say_age']</p>
</blockquote>
<p>从上面我们可以发现这样几个要点：</p>
<ol>
<li>
<p><code v-pre>Person</code>对象增加了六个属性：</p>
<p><code v-pre>__dict__</code> <code v-pre>__module__</code> <code v-pre>__weakref__</code> <code v-pre>age</code> <code v-pre>name</code> <code v-pre>say_age</code></p>
</li>
<li>
<p><code v-pre>object</code>的所有属性，<code v-pre>Person</code>类作为<code v-pre>object</code>的子类，显然包含了所有的属性</p>
</li>
<li>
<p>我们打印<code v-pre>age</code>、<code v-pre>name</code>、<code v-pre>say_age</code>，发现<code v-pre>say_age</code>虽然是方法，实际上也是属性。只不过，这个属性的类型是<code v-pre>method</code>而已。</p>
</li>
</ol>
<h3 id="重写-str-方法" tabindex="-1"><a class="header-anchor" href="#重写-str-方法" aria-hidden="true">#</a> 重写<code v-pre>__str__()</code>方法👻</h3>
<ol>
<li><code v-pre>object</code>有一个<code v-pre>__str__()</code>方法，用于返回一个对于“对象的描述”。内置函数<code v-pre>str(对象)</code>,调用的就是<code v-pre>__str__()</code></li>
<li><code v-pre>__str__()</code>经常用于<code v-pre>print()</code>方法，帮助我们查看对象的信息。<code v-pre>__str__()</code>可以重写</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>__age <span class="token operator">=</span> age

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">'''将对象转化成一个字符串，一般用于print方法'''</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"重写__str__方法"</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token string">"名字是：{0},年龄是{1}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__age<span class="token punctuation">)</span>


p <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">"小米"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
s <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多重继承" tabindex="-1"><a class="header-anchor" href="#多重继承" aria-hidden="true">#</a> 多重继承👻</h3>
<figure><img src="@source/../.vuepress/public/images/python/py32.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Python支持多重继承，一个子类可以有多个“直接父类”。这样，就具备了“多个父类”的特点。但是由于，这样会被“类的整体层次”搞的异常复杂，尽量避免使用。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">aa</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"aa"</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">bb</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"bb"</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>B<span class="token punctuation">,</span> A<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">cc</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"cc"</span><span class="token punctuation">)</span>

c <span class="token operator">=</span> C<span class="token punctuation">(</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>cc<span class="token punctuation">(</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>bb<span class="token punctuation">(</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>aa<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mro方法解析顺序" tabindex="-1"><a class="header-anchor" href="#mro方法解析顺序" aria-hidden="true">#</a> MRO方法解析顺序💞</h4>
<p>如果父类中有相同名字的方法，在子类没有指定父类名时，解释器将“从左向右”按顺序搜索。</p>
<p>MRO（Method Resolution Order）：方法解析顺序。 我们可以通过<code v-pre>mro()</code>方法获得“类的层次结构”，方法解析顺序也是按照这个“类的层次结构”寻找的。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">say</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"say AAA!"</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">say</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"say BBB!"</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> B<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">cc</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"cc"</span><span class="token punctuation">)</span>

c <span class="token operator">=</span> C<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>C<span class="token punctuation">.</span>mro<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 打印类的层次结构</span>
c<span class="token punctuation">.</span>say<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 解释器寻找方法是“从左到右”的方式寻找，此时会执行B类中的say()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ul>
<li>[&lt;class '<strong>main</strong>.C'&gt;, &lt;class '<strong>main</strong>.A'&gt;, &lt;class '<strong>main</strong>.B'&gt;, &lt;class 'object'&gt;]</li>
<li>say AAA!</li>
</ul>
</blockquote>
<h3 id="super-获得父类定义" tabindex="-1"><a class="header-anchor" href="#super-获得父类定义" aria-hidden="true">#</a> super()获得父类定义👻</h3>
<p>在子类中，如果想要获得父类的方法时，我们可以通过<code v-pre>super()</code>来做。</p>
<p><code v-pre>super()</code>代表父类的定义，不是父类对象。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A的构造方法"</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">say</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"say AAA"</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>B<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 调用父类的构造方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"B的构造方法"</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">say</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># A.say(self)   调用父类的say方法</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>say<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 通过super()调用父类的方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"say BBB"</span><span class="token punctuation">)</span>

b <span class="token operator">=</span> B<span class="token punctuation">(</span><span class="token punctuation">)</span>
b<span class="token punctuation">.</span>say<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态💎</h2>
<figure><img src="@source/../.vuepress/public/images/python/py33.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>多态（polymorphism）是指同一个方法调用由于对象不同可能会产生不同的行为，比如：现实生活中，同一个方法，具体实现会完全不同。 比如：同样是调用人“吃饭”的方法，中国人用筷子吃饭，英国人用刀叉吃饭，印度人用手吃饭。</p>
<p>关于多态要注意以下2点：</p>
<ol>
<li>多态是方法的多态，属性没有多态。</li>
<li>多态的存在有2个必要条件：继承、方法重写</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">shout</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"动物叫了一声"</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">shout</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"小狗，汪汪汪"</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">shout</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"小猫，喵喵喵"</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">animalShout</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">:</span>
    a<span class="token punctuation">.</span>shout<span class="token punctuation">(</span><span class="token punctuation">)</span>

animalShout<span class="token punctuation">(</span>Dog<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
animalShout<span class="token punctuation">(</span>Cat<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
cat <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span>
animalShout<span class="token punctuation">(</span>dog<span class="token punctuation">)</span>
animalShout<span class="token punctuation">(</span>cat<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上边的例子中，我们定义了一个Animal类，实现了一个叫的方法，之后我们又定义了一个Dog和Cat的类并分别继承了Animal类，这样Dog和Cat都有了叫的方法，但是猫的叫法和狗的叫法是不同的，所以在Dog和Cat类中又分别重写了叫的方法。最终实现了多态，这也满足了多态的两个必要条件。</p>
<h2 id="对象的浅拷贝和深拷贝" tabindex="-1"><a class="header-anchor" href="#对象的浅拷贝和深拷贝" aria-hidden="true">#</a> 对象的浅拷贝和深拷贝💎</h2>
<figure><img src="@source/../.vuepress/public/images/python/py34.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a> 浅拷贝👻</h3>
<p>Python拷贝一般都是浅拷贝。</p>
<p>浅拷贝：拷贝时，拷贝源对象，但对象包含的子对象内容不拷贝。</p>
<h3 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝👻</h3>
<p>使用<code v-pre>copy</code>模块的<code v-pre>deepcopy</code>函数，递归拷贝对象中包含的子对象。</p>
<p>深拷贝：拷贝时，拷贝源对象，也递归拷贝对象中包含的子对象</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> copy

<span class="token keyword">class</span> <span class="token class-name">MobilePhone</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> cpu<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>cpu <span class="token operator">=</span> cpu
        
<span class="token keyword">class</span> <span class="token class-name">CPU</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

c <span class="token operator">=</span> CPU<span class="token punctuation">(</span><span class="token punctuation">)</span>
m <span class="token operator">=</span> MobilePhone<span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"----浅拷贝-------"</span><span class="token punctuation">)</span>
m2 <span class="token operator">=</span> copy<span class="token punctuation">.</span>copy<span class="token punctuation">(</span>m<span class="token punctuation">)</span>  <span class="token comment"># m2是新拷贝的另一个手机对象</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"m："</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"m2："</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">(</span>m2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"m的cpu："</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>cpu<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"m2的cpu："</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">(</span>m2<span class="token punctuation">.</span>cpu<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># m2和m拥有了一样的cpu对象</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"----深拷贝--------"</span><span class="token punctuation">)</span>
m3 <span class="token operator">=</span> copy<span class="token punctuation">.</span>deepcopy<span class="token punctuation">(</span>m<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"m："</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"m3："</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">(</span>m3<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"m的cpu："</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>cpu<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"m3的cpu："</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">(</span>m3<span class="token punctuation">.</span>cpu<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># m3和m拥有不一样的cpu对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合" tabindex="-1"><a class="header-anchor" href="#组合" aria-hidden="true">#</a> 组合💎</h2>
<p>结婚就是组合。两人组合后，可以复用对方的属性和方法！</p>
<p>除了继承，“组合”也能实现代码的复用！“组合”核心是“将父类对象作为子类的属性”。</p>
<blockquote>
<ol>
<li><code v-pre>is-a</code>关系，我们可以使用“继承”。从而实现子类拥有的父类的方法和属性。<code v-pre>is-a</code>关系指的是类似这样的关系：狗是动物，dog is animal。狗类就应该继承动物类。</li>
<li><code v-pre>has-a</code>关系，我们可以使用“组合”，也能实现一个类拥有另一个类的方法和属性。<code v-pre>has-a</code>关系指的是这样的关系：手机拥有CPU。 MobilePhone has a CPU</li>
</ol>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MobilePhone</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> cpu<span class="token punctuation">,</span> screen<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>cpu <span class="token operator">=</span> cpu
        self<span class="token punctuation">.</span>screen <span class="token operator">=</span> screen


<span class="token keyword">class</span> <span class="token class-name">CPU</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">calculate</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"计算，算个12345"</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Screen</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">show</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"显示一个好看的画面，亮瞎你的钛合金大眼"</span><span class="token punctuation">)</span>


c <span class="token operator">=</span> CPU<span class="token punctuation">(</span><span class="token punctuation">)</span>
s <span class="token operator">=</span> Screen<span class="token punctuation">(</span><span class="token punctuation">)</span>
m <span class="token operator">=</span> MobilePhone<span class="token punctuation">(</span>c<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
m<span class="token punctuation">.</span>cpu<span class="token punctuation">.</span>calculate<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 通过组合，我们也能调用cpu对象的方法。相当于手机对象间接拥有了“cpu的方法”</span>
m<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运算结果：</p>
<blockquote>
<ul>
<li>计算，算个12345</li>
<li>显示一个好看的画面，亮瞎你的钛合金大眼</li>
</ul>
</blockquote>
<p><strong>视频教程</strong>📽️</p>
<p><video  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" width="100%" controls></video></p>
<p>至此，我们已经结束了Python面向对象的学习了，如有疑惑，请对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>。</p>
</div></template>


