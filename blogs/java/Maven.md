---
title: Maven
date: 2020-10-01
tags: tag1
categories: Java
---

## 打包报错

[ERROR]Failed to execute goal on project qm-mobile-api:Could not resolve dependencies for project com.qm:qm-mobile-api:jar:1.0.0-SNAPSHOT:Could not find artifact com.qm:qm-services:jar:1.0.0-SNAPSHOT->[Help 1]

A模块引入了B和C，B中依赖C，只是把C从A中的引入去掉，则打包时会提示Could not resolve dependencies for project B:jar Could not find artifact C:jar  

解决：

方式一：不要去掉A中对C的引用  

方式二：把B中对C的依赖也同时去掉

## <packaging>war</packaging>
默认为jar，可改为war

## 一体化jar包部署
```
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
```

## 分离式部署项目
SpringBoot项目默认会把开发的代码和依赖包都打到一个war包里，导致每次打的包很大，升级很费时；
分离lib这样能够快速部署项目，第一次将全部jar包上传到服务器，后续再新增或修改jar时，只需要将新打包的jar上传到服务器即可

```
<!--     采用动静分离的方式打包，方便后续增量更新：-->
<!--    将静态资源与配置文件分离到 resources、将依赖的jar包分离到 lib-->
    <build>
        <!--        <finalName>${name}</finalName>-->
        <plugins>
            <!-- 分离第三方 jar 包引用 -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-dependency-plugin</artifactId>
                <!--                <version>3.1.2</version>-->
                <executions>
                    <execution>
                        <id>copy-dependencies</id>
                        <phase>package</phase>
                        <goals>
                            <goal>copy-dependencies</goal>
                        </goals>
                        <configuration>
							<!--将外部依赖的JAR包复制到target/lib路径下，target/lib是依赖jar包的输出目录，根据自己喜好配置-->
                            <outputDirectory>target/lib</outputDirectory>
                            <excludeTransitive>false</excludeTransitive>
                            <stripVersion>false</stripVersion>
                            <includeScope>runtime</includeScope>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
            <!-- 分离静态文件与配置文件 -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jar-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>static/**</exclude>
                        <exclude>*.properties</exclude>
                        <include>*.yml</include>
                        <include>*.xml</include>
                    </excludes>
                    <archive>
                        <manifest>
                            <addClasspath>true</addClasspath>
                            <!-- MANIFEST.MF 中 Class-Path 加入前缀 -->
                            <classpathPrefix>lib/</classpathPrefix>
                            <!-- jar包不包含唯一版本标识 -->
                            <useUniqueVersions>false</useUniqueVersions>
                            <!--指定入口类 -->
                            <mainClass>com.qm.boot.Bootstrap</mainClass>
                        </manifest>
                        <manifestEntries>
                            <!--MANIFEST.MF 中 Class-Path 加入资源文件目录 -->
                            <Class-Path>./resources/</Class-Path>
                        </manifestEntries>
                    </archive>
                    <outputDirectory>${project.build.directory}</outputDirectory>
                </configuration>
            </plugin>
            <plugin>
                <artifactId>maven-resources-plugin</artifactId>
                <executions>
                    <execution>
                        <id>copy-resources</id>
                        <phase>package</phase>
                        <goals>
                            <goal>copy-resources</goal>
                        </goals>
                        <configuration>
                            <resources>
                                <resource>
                                    <directory>src/main/resources</directory>
                                    <includes>
                                        <include>*.properties</include>
                                        <include>*.yml</include>
                                        <include>*.xml</include>
                                        <include>static/**</include>
                                    </includes>
                                </resource>
                            </resources>
                            <outputDirectory>${project.build.directory}/resources</outputDirectory>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
```






























