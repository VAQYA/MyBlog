(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{651:function(t,a,e){"use strict";e.r(a);var n=e(5),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"spring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring"}},[t._v("#")]),t._v(" Spring")]),t._v(" "),e("h3",{attrs:{id:"english"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#english"}},[t._v("#")]),t._v(" English")]),t._v(" "),e("p",[t._v("definition 定义\nprocessor 处理器\ntransactional 事务性\npropagation 传播\nisolation 隔离")]),t._v(" "),e("h3",{attrs:{id:"事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" 事务")]),t._v(" "),e("p",[t._v("事务开启方式：编程式手动开启、提交、回滚事务；SpringAOP配置；使用xml；使用注解")]),t._v(" "),e("p",[t._v("下面只介绍注解方式： 先在启动类上加@EnableTransactionManagement，因为 SpringBoot 在 TransactionAutoConfiguration 类里为我们自动配置启用了 @EnableTransactionManagement 注解，但建议加上；"),e("br"),t._v("\n然后在业务实现类的相关方法上声明事务@Transactional(propagation = Propagation.REQUIRED)，只能用在public的方法上，其他修饰不报错但也不起作用。只有方法抛出运行时异常(RuntimeException)或error事务才进行回滚，非运行时异常不会回滚")]),t._v(" "),e("p",[t._v("propagation，事务传播行为Propagation.REQUIRED"),e("br"),t._v("\nisolation，事务的隔离度，默认DEFAULT"),e("br"),t._v("\ntimeout，事务超时时间，默认-1不超时，若设置了超时时间(单位为秒)，事务还没完成则回滚事务"),e("br"),t._v("\nreadOnly，指定事务是否为只读，默认false，为了忽略不需要事务的方法，如只读取数据"),e("br"),t._v("\nrollbackForClassName，指定事务回滚的异常类型"),e("br"),t._v("\nnoRollbackForClassName，抛出指定异常，不回滚事务")]),t._v(" "),e("h3",{attrs:{id:"事务-传播属性-propagation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事务-传播属性-propagation"}},[t._v("#")]),t._v(" 事务-传播属性 propagation")]),t._v(" "),e("p",[t._v("即多个事务同时存在时，Spring怎么处理这些行为")]),t._v(" "),e("p",[t._v("@Transactional(propagation = Propagation.REQUIRED)在B方法上声明")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("propagation.REQUIRED 默认\n如果外层有事务，则当前事务加入到外层事务，如果没有，则创建一个外层事务，一起提交，一起回滚"),e("br"),t._v("\n如果当前没有事务，则新建一个事务；如果当前有事务，则加入到这个事务中。"),e("br"),t._v("\nA方法调用B方法，A、B任一出错，则一起回滚")])]),t._v(" "),e("li",[e("p",[t._v("propagation.REQUIRES_NEW"),e("br"),t._v("\n新建一个事务，如果当前存在事务，就将事务挂起，这两个事务互不影响。"),e("br"),t._v("\nA方法调用B方法，A事务挂起，B新建一个事务，B出错不影响A，B出错只是B回滚，只有A内不包括B的代码出错A才回滚")])]),t._v(" "),e("li",[e("p",[t._v("propagation.SUPPORTS"),e("br"),t._v("\n支持当前事务，如果当前没有事务，则按照非事务形式执行。"),e("br"),t._v("\nA方法调用B方法，如果A声明了事务，则B按照事务执行，如果A没有声明事务，B就按照非事务形式执行")])]),t._v(" "),e("li",[e("p",[t._v("propagation.NOT_SUPPORTED"),e("br"),t._v("\n不支持当前事务，以非事务方式执行，如果当前存在事务，就将事务挂起。"),e("br"),t._v("\n不支持事务，无论是否异常都不回滚")])]),t._v(" "),e("li",[e("p",[t._v("propagation.MANDATORY"),e("br"),t._v("\n使用当前的事务，如果当前没有事务，就抛出异常。"),e("br"),t._v("\nA方法调用B方法，A必须也声明了事务，否则就抛出异常(运行时异常)，必须在一个已有的事务中调用")])]),t._v(" "),e("li",[e("p",[t._v("propagation.NEVER"),e("br"),t._v("\n以非事务执行，如果当前存在事务，就抛出异常。"),e("br"),t._v("\nA方法调用B方法，A必须不能声明事务，否则就抛出异常，与MANDATORY相反")])]),t._v(" "),e("li",[e("p",[t._v("propagation.NESTED"),e("br"),t._v("\n如果当前存在事务，则嵌套在当前事务中，如果当前没有事务，则按REQUIRED属性执行。"),e("br"),t._v("\n该传播机制的特点是可以保存状态保存点，当前事务回滚到某一个点，从而避免所有的嵌套事务都回滚，即各自回滚各自的，如果子事务没有把异常吃掉，基本还是会引起全部回滚的。")])])]),t._v(" "),e("h3",{attrs:{id:"事务-隔离级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事务-隔离级别"}},[t._v("#")]),t._v(" 事务-隔离级别")]),t._v(" "),e("p",[t._v("@Transactional(isolation = Isolation.DEFAULT)在B方法上声明")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Isolation.DEFAULT 使用数据库的隔离级别")])]),t._v(" "),e("li",[e("p",[t._v("Isolation.READ_UNCOMMITTED 读未提交 最低的隔离级别，事务未提交前就可以被其他事务读取（会出现 脏读、不可重复读、幻读）")])]),t._v(" "),e("li",[e("p",[t._v("Isolation.READ_COMMITTED 读已提交 一个事务提交后才能被其他事务读取 （会出现 不可重复读、幻读） SQL Server的默认级别")])]),t._v(" "),e("li",[e("p",[t._v("Isolation.REPEATABLE_READ 可重复读 保证多次读取同一数据时，其值都和开始时的数据一致，禁止读取到别的事务未提交的数据 （会出现幻读） MySQL的默认级别")])]),t._v(" "),e("li",[e("p",[t._v("Isolation.SERIALIZABLE 序列化 写会加写锁，读会加读锁，表级共享锁，代价最高最可靠。")])])]),t._v(" "),e("h3",{attrs:{id:"事务安全问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事务安全问题"}},[t._v("#")]),t._v(" 事务安全问题")]),t._v(" "),e("p",[t._v("脏读：一个事务读取了另一个事务未提交的数据\n不可重复读：同一事务中，根据同一条件查询出的同一行记录的值不一致\n幻读：同一事务中，根据同一条件查询出的记录行数不一致")]),t._v(" "),e("h3",{attrs:{id:"编程式手动回滚事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编程式手动回滚事务"}},[t._v("#")]),t._v(" 编程式手动回滚事务")]),t._v(" "),e("p",[t._v("TransactionAspectSupport.currentTransactionStatus().setRollbackOnly()")]),t._v(" "),e("h3",{attrs:{id:"springaop事务问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springaop事务问题"}},[t._v("#")]),t._v(" SpringAOP事务问题")]),t._v(" "),e("p",[t._v("在 Spring 的 AOP 代理下，只有目标方法由外部调用，目标方法才由 Spring 生成的代理对象来管理，这会造成自调用问题。"),e("br"),t._v("\n若同一类中的其他没有@Transactional 注解的方法内部调用有@Transactional 注解的方法，有@Transactional 注解的方法的事务被忽略，不会发生回滚。")]),t._v(" "),e("h3",{attrs:{id:"spring由那些模块组成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring由那些模块组成"}},[t._v("#")]),t._v(" Spring由那些模块组成？")]),t._v(" "),e("blockquote"),t._v(" "),e("ul",[e("li",[t._v("Core module")]),t._v(" "),e("li",[t._v("bean module")]),t._v(" "),e("li",[t._v("Context module")]),t._v(" "),e("li",[t._v("Expression language module")])]),t._v(" "),e("blockquote"),t._v(" "),e("ul",[e("li",[t._v("JDBC  module")]),t._v(" "),e("li",[t._v("ORM module")]),t._v(" "),e("li",[t._v("OXM module")]),t._v(" "),e("li",[t._v("Java Message Service module")]),t._v(" "),e("li",[t._v("Transaction module")]),t._v(" "),e("li",[t._v("Web module")]),t._v(" "),e("li",[t._v("Web-Servlet module")]),t._v(" "),e("li",[t._v("Web-Struts module")]),t._v(" "),e("li",[t._v("Web-Portlet module")])]),t._v(" "),e("h3",{attrs:{id:"容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[t._v("#")]),t._v(" 容器")]),t._v(" "),e("blockquote",[e("p",[t._v("BeanFactory，Spring中最底层的接口，只提供了最简单的容器功能，实例化对象和拿对象。启动时不会实例化，从容器中拿Bean时才会，占用资源较少\nApplicationContext，高级容器，间接实现了BeanFactory接口，具备了更多的功能，如资源的获取(URL或文件)。启动时就把所有Bean实例化了，运行速度较快")])]),t._v(" "),e("h3",{attrs:{id:"ioc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ioc"}},[t._v("#")]),t._v(" IOC")]),t._v(" "),e("p",[t._v("Inversion of Control,控制反转。负责创建对象、通过DI（依赖注入）管理对象、装配对象、配置对象，并管理这些对象的生命周期。\n优点：把应用的代码量降到最低，更容易测试，最小的侵入性实现松散耦合。这里的解耦合指的是接口和实现类之间的解耦，在实现类中声明引用型属性，并添加它的setter方法，直接用引用型属性调用实现类。")]),t._v(" "),e("p",[t._v("serviceimpl中添加引用型属性dao,用dao直接调用dao的A方法，就能实现daoImpl调用它的A方法（即service的实现类直接使用dao接口，不知道dao具体的实现类，Spring容器内部完成了这些）。\n之前的方式：Dao dao = new DaoImpl( );\n现在的Spring方式：Dao dao;  dao的setter方法，这两步。")]),t._v(" "),e("h3",{attrs:{id:"di依赖注入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#di依赖注入"}},[t._v("#")]),t._v(" DI依赖注入")]),t._v(" "),e("p",[t._v("Dependency Injection，IOC容器初始化bean的实例对象后，会对对象的属性进行初始化，这个过程就是依赖注入\n两种方式：")]),t._v(" "),e("ol",[e("li",[t._v("构造器注入\n通过容器触发一个类的构造器来实现，构造器中有一系列参数，每个参数代表对其他类的依赖。建议用于强制依赖\n缺点：代码多影响可读性不好维护")]),t._v(" "),e("li",[t._v("setter方法注入\n容器通过调用无参构造器或无参静态工厂方法实例化bean之后，调用该bean的setter方法实现属性的注入。建议用于可选依赖\n缺点：不能将对象设为final")]),t._v(" "),e("li",[t._v("属性注入"),e("br"),t._v("\n@Autowirde\n缺点：可能会NPE、不能final修饰、不通过反射不能被实例化")])]),t._v(" "),e("p",[t._v("推荐：强制依赖用构造器方式，可选可变的依赖用setter方法注入")]),t._v(" "),e("h3",{attrs:{id:"aop面向切面编程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aop面向切面编程"}},[t._v("#")]),t._v(" AOP面向切面编程")]),t._v(" "),e("p",[t._v("把应用业务逻辑和系统服务（如日志、事务管理）分开，底层使用动态代理方式实现\nSpring AOP仅支持方法级别的PointCut")]),t._v(" "),e("ul",[e("li",[t._v("连接点(joinPoint)：类里面可以被增强的方法")]),t._v(" "),e("li",[t._v("切入点(Pointcut)：类里面实际增强的方法")]),t._v(" "),e("li",[t._v("通知/增强(Advice)：实际增强的逻辑功能\n1. 前置通知(before)：在方法前执行                                                   - - - - - - -@Before            @annotation表示标注了某个注解的所有方法\n2. 后置通知(after)：在方法后执行，无论是方法正常退出还是异常返回，类似于finally      - - - - - - @After\n3. 最终通知(after-returning)：后置之后执行，方法正常返回后执行                      - - - - - - -@AfterReturning\n4. 异常通知(after-throwing)：方法抛出异常退出时执行                                   - - - - - -@AfterThrowing\n5. 环绕通知(aroud)：分别在方法执行之前和之后执行                                      - - - - -  @Around")]),t._v(" "),e("li",[t._v("切面(Aspect)：把增强应用到切入点的过程")]),t._v(" "),e("li",[t._v("引入(Introduction)：引入新的接口以及一个对应的实现到任何被代理的对象")]),t._v(" "),e("li",[t._v("目标对象(Target Object)：被一个或多个切面所通知的对象，又叫被通知对象")]),t._v(" "),e("li",[t._v("织入(Weaving):把增强应用到目标对象，来创建新的代理对象的过程，是在运行时执行的。")])]),t._v(" "),e("h3",{attrs:{id:"如何理解spring中的代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何理解spring中的代理"}},[t._v("#")]),t._v(" 如何理解Spring中的代理")]),t._v(" "),e("p",[t._v("将Advice应用在目标对象创建的对象称为代理\ntagart + Advice = Proxy")]),t._v(" "),e("h3",{attrs:{id:"spring-beans"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-beans"}},[t._v("#")]),t._v(" Spring beans")]),t._v(" "),e("p",[t._v("是被Spring IOC容器中配置的元数据初始化并管理的对象，不是线程安全的。\n一般来说很少在spring bean里放一些实例变量，一般都是多组件互相调用，最终访问数据库")]),t._v(" "),e("h3",{attrs:{id:"如何给spring提供配置元数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何给spring提供配置元数据"}},[t._v("#")]),t._v(" 如何给Spring提供配置元数据？")]),t._v(" "),e("ul",[e("li",[t._v("XML配置文件")]),t._v(" "),e("li",[t._v("基于注解")]),t._v(" "),e("li",[t._v("基于Java的配置")])]),t._v(" "),e("h3",{attrs:{id:"bean的作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean的作用域"}},[t._v("#")]),t._v(" bean的作用域")]),t._v(" "),e("ol",[e("li")]),t._v(" "),e("ul",[e("li",[t._v("singleton 只有一个实例（默认）")]),t._v(" "),e("li",[t._v("prototype 一个bean可以有多个实例")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("只在基于Web的Spring ApplicationContext情形下有效")])]),t._v(" "),e("ul",[e("li",[t._v("request 每个请求都会创建一个bean")]),t._v(" "),e("li",[t._v("session 在一个Http Session中，一个bean定义对应一个实例")]),t._v(" "),e("li",[t._v("global-session 在一个全局的Session中，一个bean定义对应一个实例")])]),t._v(" "),e("h3",{attrs:{id:"bean的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean的生命周期"}},[t._v("#")]),t._v(" bean的生命周期")]),t._v(" "),e("blockquote",[e("p",[t._v("有两种：Bean工厂对bean的管理、上下文对bean的管理")])]),t._v(" "),e("ol",[e("li",[t._v("（由beanFactory读取bean的定义文件）实例化bean")]),t._v(" "),e("li",[t._v("依赖注入bean的属性")]),t._v(" "),e("li",[t._v("如果bean实现了org.springframework.beans.factory.BeanNameAware接口，则执行其setBeanName()方法")]),t._v(" "),e("li",[t._v("如果bean实现了org.sprignframework.beans.factory.BeanFactoryAware接口，则执行其setBeanFactory()方法")]),t._v(" "),e("li",[t._v("如果bean实现了ApplicationContextAware接口，则执行其setApplicationContext()方法。//线程只是帮我们去做一些事情，不要让线程去获取数据（例如applicationContext），最好是就这样在开启线程前就将数据给线程")]),t._v(" "),e("li",[t._v("如果bean实现了org.springframework.beans.factory.BeanPostProcessors接口，\n则Bean在初始化之前都会执行这个实例的postProcessBeforeInitialization(Object obj, String s)方法，即前置增强方法。")]),t._v(" "),e("li",[t._v("如果bean实现了InitializingBean接口，Spring将调用它们的afterPropertiesSet()方法。\n同样，如果在配置文件中声明了初始化方法，指定了bean的init-method，则调用它。")]),t._v(" "),e("li",[t._v("如果bean实现了org.springframework.beans.factory.BeanPostProcessors接口，则Spring将调用它的postprocessAfterInitialization(Object obj, String s)方法")]),t._v(" "),e("li",[t._v("此时bean已经准备就绪，可以被应用程序使用了，将一直驻留在应用上下文中，直到应用上下文被销毁")]),t._v(" "),e("li",[t._v("如果bean实现了DisposableBean接口，Spring将调用它们的destroy()方法。同样，如果配置文件中声明了bean的销毁方法destroy-method，则调用它。")])]),t._v(" "),e("h3",{attrs:{id:"注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注解"}},[t._v("#")]),t._v(" 注解")]),t._v(" "),e("ul",[e("li",[t._v('开启注解扫描：<context: component-scan base-package=""></context: component-scan>')]),t._v(" "),e("li",[t._v("@Configuration 功能同@Component，但是所有带@bean的方法都会被动态代理，所以调用该方法返回的都是同一个实例")]),t._v(" "),e("li",[t._v("@Component 用于类上，实例化bean，相当于配置文件中的"),e("bean",{staticClass:" ",attrs:{id:" "}})],1),t._v(" "),e("li",[t._v("@Bean 表示此方法会返回一个对象，作为一个bean注册进上下文")]),t._v(" "),e("li",[t._v("@Required 用在setter方法上，表明当前bean的这个属性必须在配置的时候设置值，否则会报错")]),t._v(" "),e("li",[t._v("@Autowrited  以类型方式依赖注入属性，可用在构造器、Setter方法及其他普通方法上，如果方法没有bean参数，将会抛出异常，如果有多个bean，则抛出异常没有表明指定哪个bean进行自动装配; 它替代了配置文件中的 "),e("property"),t._v("元素")],1),t._v(" "),e("li",[t._v("@PathVariable - 用于将动态值从URI映射到处理程序方法的参数")]),t._v(" "),e("li",[t._v("@Autowirde 用于Spring bean自动装配依赖项")]),t._v(" "),e("li",[t._v("@Qualifier value属性，指定bean的名称，避免用@Autowirde时存在多个bean实例出现混淆")]),t._v(" "),e("li",[t._v("@Scope 配置bean的使用范围")]),t._v(" "),e("li",[t._v("@Configuration 定义扫描的路径从中找出标识了需要装配的类自动装配到spring的bean容器中，默认扫描@Component, @Repository, @Service, @Controller注解的类，相对应XML配置的"),e("RouterLink",{attrs:{to:"context:component-scan/"}},[t._v("context:component-scan/")])],1),t._v(" "),e("li",[t._v("@Aspect，@Before，@After，@Around，@Pointcut - 用于切面编程（AOP）")]),t._v(" "),e("li",[t._v("@RequestMapping 将HTTP请求的URL映射到对应控制器中的特定类/方法上，可用在类和方法上。")])]),t._v(" "),e("blockquote",[e("p",[t._v("@Autowired和@Resource")]),t._v(" "),e("blockquote",[e("p",[t._v("都可以用来装配Bean，可用于属性或set方法上\n@Autowired 按照类型装配。   required属性，默认true，不允许为null\n@Resource 按照名称装配，找不到名称了就按照类型。 name属性指定bean的名称，type属性指定bean的类型")])])]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("@Qualifier value属性，指定bean的名称\n@Autowired + @Qualifier = @Resource")])])]),t._v(" "),e("h3",{attrs:{id:"component在接口上时会报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component在接口上时会报错"}},[t._v("#")]),t._v(" @Component在接口上时会报错")]),t._v(" "),e("p",[t._v("原因接口不能实例化")]),t._v(" "),e("h3",{attrs:{id:"component、-controller、-service、-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component、-controller、-service、-repository"}},[t._v("#")]),t._v(" @Component、@Controller、@Service、@Repository")]),t._v(" "),e("p",[t._v("@Component 实例化Bean，将Bean注入到Spring容器进行管理。 其他三个是@Component的功能扩展，针对不同的场景用相应的注解")]),t._v(" "),e("p",[t._v("@Controller 作用于表现层， 将请求进行转发、重定向。\n@Service 作用于业务逻辑层， 处理业务逻辑。 接口实现类上\n@Repository 作用于持久层， 作为DAO对象，可直接对数据库进行操作。 能够将数据库操作抛出的原生异常转化为Spring的数据访问异常。")]),t._v(" "),e("h3",{attrs:{id:"动态代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态代理"}},[t._v("#")]),t._v(" 动态代理")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("jdk动态代理\n要求被代理的类必须实现接口，利用反射技术，调用了Proxy.newProxyInstance(ClassLoader loader,Class<?>[] interfaces,InvocationHandler h) 方法生成字节码，动态创建一个代理类。")])]),t._v(" "),e("li",[e("p",[t._v("cglib动态代理，可以在运行期扩展Java类和实现Java接口，底层实现是通过ASM字节码处理框架来转换字节码并生成新的class（被代理类的子类）；速度上比jdk动态代理要快。")])])]),t._v(" "),e("p",[t._v("Spring AOP 中的代理使用逻辑：\n如果目标对象实现了接口，默认情况下会采用 JDK 的动态代理实现 AOP；\n如果目标对象没有实现了接口，则采用 CGLIB 库；\nSpring 会自动在 JDK 动态代理和 CGLIB 动态代理之间转换。")]),t._v(" "),e("h3",{attrs:{id:"spring都用到了哪些设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring都用到了哪些设计模式"}},[t._v("#")]),t._v(" Spring都用到了哪些设计模式？")]),t._v(" "),e("ul",[e("li",[t._v("工厂模式：BeanFactory就是简单工厂模式，用来创建对象实例")]),t._v(" "),e("li",[t._v("单例模式：Bean默认为单例模式")]),t._v(" "),e("li",[t._v("代理模式：Spring的AOP功能用到了jdk动态代理模式和cglib字节码生成技术,实现了接口的类采用JDK动态代理否则采用cglib")]),t._v(" "),e("li",[t._v("模板方法：用来解决代码重复的问题，如RestTemplate，JmsTemplate，JdbcTemplate")]),t._v(" "),e("li",[t._v("观察者模式：定义对象一对多的依赖关系，当一个对象的状态发生改变时，其他对象都会得到通知被制动更新，在Spring中listener的实现，如ApplicationListener")])]),t._v(" "),e("h2",{attrs:{id:"springboot-validation-over-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springboot-validation-over-json"}},[t._v("#")]),t._v(" springboot-validation-over-json")]),t._v(" "),e("h3",{attrs:{id:"restcontrolleradvice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restcontrolleradvice"}},[t._v("#")]),t._v(" @RestControllerAdvice")]),t._v(" "),e("p",[t._v("作用在类上，表示增强某个逻辑功能")]),t._v(" "),e("h3",{attrs:{id:"exceptionhandler-value-globalerrorinfoexception-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exceptionhandler-value-globalerrorinfoexception-class"}},[t._v("#")]),t._v(" @ExceptionHandler(value = GlobalErrorInfoException.class)")]),t._v(" "),e("p",[t._v("作用在方法上，当创建一个GlobalErrorInfoException对象时，此方法会被调用")]),t._v(" "),e("h3",{attrs:{id:"web-xml配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-xml配置"}},[t._v("#")]),t._v(" web.xml配置")]),t._v(" "),e("p",[t._v("在web.xml中配置Spring的配置文件applicationContext.xml,需要为其配置ContextLoaderListener监听器")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<context-param>\n\t<param-name>contextConfigLocation</param-name>\n\t<param-value>classpath:applicationContext.xml</param-value>\n</context-param>\n\n<listener>\n\t<listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>\n</listener>\n\n\t\n")])])]),e("blockquote",[e("p",[t._v("Spring提供ServletContextListener的一个实现类ContextLoaderListener监听器，启动tomcat容器时，该类的作用就是自动装载ApplicationContext的配置信息，如果没有设置contextConfigLocation的初始参数，则会使用默认WEB_INF路径下的application.xml文件。")])]),t._v(" "),e("blockquote",[e("p",[t._v("ContextLoaderListener会读取这些xml文件产生的WebApplicationContext对象，然后将这些对象放置在ServletContext的属性里，这样我们只要可以得到Servlet就可以得到WebApplicationContext对象，并利用对象访问Spring容器管理的bean。")])]),t._v(" "),e("p",[t._v("ps: web.xml中元素的加载顺序：context-param--\x3elisteners--\x3efilters--\x3eservlets(load on startup)")]),t._v(" "),e("h2",{attrs:{id:"spring-security"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-security"}},[t._v("#")]),t._v(" Spring Security")]),t._v(" "),e("p",[t._v("HttpSecurity http")]),t._v(" "),e("p",[t._v("添加登录和验证filter，不再以session作为登录验证的标准，而是从请求中获取token，如果token正确，则解析出用户信息并交给Spring Security进行下一步操作")]),t._v(" "),e("h3",{attrs:{id:"securitycontextholder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#securitycontextholder"}},[t._v("#")]),t._v(" SecurityContextHolder")]),t._v(" "),e("p",[t._v("存放身份信息的容器"),e("br"),t._v("\n最基本的组件，存储了安全上下文(Security Context)的信息，用户是谁、是否已被认证、拥有哪些角色权限等，都是些静态方法、静态属性"),e("br"),t._v("\nSecurityContextHolder.getContext().getAuthentication().getPrincipal();")]),t._v(" "),e("h3",{attrs:{id:"authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),e("p",[t._v("用户信息的抽象"),e("br"),t._v("\n认证主体，是spring security包中的接口，继承了Principal接口，")]),t._v(" "),e("h3",{attrs:{id:"authenticationmanager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authenticationmanager"}},[t._v("#")]),t._v(" AuthenticationManager")]),t._v(" "),e("p",[t._v("身份认证器")]),t._v(" "),e("h2",{attrs:{id:"others"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[t._v("#")]),t._v(" Others")]),t._v(" "),e("h3",{attrs:{id:"静态方法中使用service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态方法中使用service"}},[t._v("#")]),t._v(" 静态方法中使用Service")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@Component  // 1.类上加此注解\npublic class EnergyMathUtil {\n \nprivate static INuclideService iNuclideService;  // 2.声明\n\n@Autowired\npublic void setINuclideService(INuclideService iNuclideService) {  // 3.set属性  \n\tEnergyMathUtil.iNuclideService = iNuclideService;\n}\n\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);