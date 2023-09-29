(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{685:function(e,n,a){"use strict";a.r(n);var t=a(5),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"打包报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包报错"}},[e._v("#")]),e._v(" 打包报错")]),e._v(" "),a("p",[e._v("[ERROR]Failed to execute goal on project qm-mobile-api:Could not resolve dependencies for project com.qm:qm-mobile-api:jar:1.0.0-SNAPSHOT:Could not find artifact com.qm:qm-services:jar:1.0.0-SNAPSHOT->[Help 1]")]),e._v(" "),a("p",[e._v("A模块引入了B和C，B中依赖C，只是把C从A中的引入去掉，则打包时会提示Could not resolve dependencies for project B:jar Could not find artifact C:jar")]),e._v(" "),a("p",[e._v("解决：")]),e._v(" "),a("p",[e._v("方式一：不要去掉A中对C的引用")]),e._v(" "),a("p",[e._v("方式二：把B中对C的依赖也同时去掉")]),e._v(" "),a("h2",{attrs:{id:"war"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#war"}},[e._v("#")]),e._v(" "),a("packaging",[e._v("war")])],1),e._v(" "),a("p",[e._v("默认为jar，可改为war")]),e._v(" "),a("h2",{attrs:{id:"一体化jar包部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一体化jar包部署"}},[e._v("#")]),e._v(" 一体化jar包部署")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n")])])]),a("h2",{attrs:{id:"分离式部署项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分离式部署项目"}},[e._v("#")]),e._v(" 分离式部署项目")]),e._v(" "),a("p",[e._v("SpringBoot项目默认会把开发的代码和依赖包都打到一个war包里，导致每次打的包很大，升级很费时；\n分离lib这样能够快速部署项目，第一次将全部jar包上传到服务器，后续再新增或修改jar时，只需要将新打包的jar上传到服务器即可")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\x3c!--     采用动静分离的方式打包，方便后续增量更新：--\x3e\n\x3c!--    将静态资源与配置文件分离到 resources、将依赖的jar包分离到 lib--\x3e\n    <build>\n        \x3c!--        <finalName>${name}</finalName>--\x3e\n        <plugins>\n            \x3c!-- 分离第三方 jar 包引用 --\x3e\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-dependency-plugin</artifactId>\n                \x3c!--                <version>3.1.2</version>--\x3e\n                <executions>\n                    <execution>\n                        <id>copy-dependencies</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>copy-dependencies</goal>\n                        </goals>\n                        <configuration>\n\t\t\t\t\t\t\t\x3c!--将外部依赖的JAR包复制到target/lib路径下，target/lib是依赖jar包的输出目录，根据自己喜好配置--\x3e\n                            <outputDirectory>target/lib</outputDirectory>\n                            <excludeTransitive>false</excludeTransitive>\n                            <stripVersion>false</stripVersion>\n                            <includeScope>runtime</includeScope>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n            \x3c!-- 分离静态文件与配置文件 --\x3e\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-jar-plugin</artifactId>\n                <configuration>\n                    <excludes>\n                        <exclude>static/**</exclude>\n                        <exclude>*.properties</exclude>\n                        <include>*.yml</include>\n                        <include>*.xml</include>\n                    </excludes>\n                    <archive>\n                        <manifest>\n                            <addClasspath>true</addClasspath>\n                            \x3c!-- MANIFEST.MF 中 Class-Path 加入前缀 --\x3e\n                            <classpathPrefix>lib/</classpathPrefix>\n                            \x3c!-- jar包不包含唯一版本标识 --\x3e\n                            <useUniqueVersions>false</useUniqueVersions>\n                            \x3c!--指定入口类 --\x3e\n                            <mainClass>com.qm.boot.Bootstrap</mainClass>\n                        </manifest>\n                        <manifestEntries>\n                            \x3c!--MANIFEST.MF 中 Class-Path 加入资源文件目录 --\x3e\n                            <Class-Path>./resources/</Class-Path>\n                        </manifestEntries>\n                    </archive>\n                    <outputDirectory>${project.build.directory}</outputDirectory>\n                </configuration>\n            </plugin>\n            <plugin>\n                <artifactId>maven-resources-plugin</artifactId>\n                <executions>\n                    <execution>\n                        <id>copy-resources</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>copy-resources</goal>\n                        </goals>\n                        <configuration>\n                            <resources>\n                                <resource>\n                                    <directory>src/main/resources</directory>\n                                    <includes>\n                                        <include>*.properties</include>\n                                        <include>*.yml</include>\n                                        <include>*.xml</include>\n                                        <include>static/**</include>\n                                    </includes>\n                                </resource>\n                            </resources>\n                            <outputDirectory>${project.build.directory}/resources</outputDirectory>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);