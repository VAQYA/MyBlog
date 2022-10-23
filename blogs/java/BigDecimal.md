---
title: BigDecimal
date: 2020-10-01
tags: tag1
categories: Java
---

# BigDeciaml

## 加
add

## 减
subtract

## 乘
multiply

## 除
// MathContext mc = new MathContext(8, RoundingMode.HALF_DOWN);
MathContext mc = MathContext.DECIMAL32;

divide(number, mc);  结果为无限小数时，会报错，所以加上mc精确为8位小数

## 零
BigDecimal.ZERO

## setScale();用于格式化小数点
setScale(1)表示保留一位小数，默认用四舍五入方式
setScale(1,BigDecimal.ROUND_DOWN)直接删除多余的小数位，如2.35会变成2.3
setScale(1,BigDecimal.ROUND_UP)进位处理，2.35变成2.4
setScale(1,BigDecimal.ROUND_HALF_UP)四舍五入，2.35变成2.4
setScale(1,BigDecimal.ROUND_HALF_DOWN)四舍五入，2.35变成2.3，如果是5则向下舍

## .signum(); 判断与0的大小关系
返回-1，说明小于0；  
返回0，说明等于0；  
返回1，说明大于0  


## a.compareTo(b); 判断两个值的大小关系

返回-1，说明a小于b；  
返回0，说明a等于b；  
返回1，说明a大于b  


## 执行顺序
从前到后依次执行  

new BigDecimal("3").subtract(new BigDecimal("2")).pow(2);  //结果为1
new BigDecimal("3").multiply(new BigDecimal("2")).pow(2);  //结果为36

## toPlainString()
BigDecimal数据大于9999999时，就会自动转换为科学计数法。
防止数字自动转化成科学计数法形式

## 保留有效位数和小数点位数
BigDecimal a = new BigDecimal("0.01234");
BigDecimal b = a.setScale(3,RoundingMode.HALF_EVEN);// 0.012 设置保留小数点后3位
BigDecimal c = a.round(new MathContext(3, RoundingMode.HALF_EVEN)); // 0.0123 保留3位有效位数

BigDecimal d = new BigDecimal("1234");
BigDecimal e = a.round(new MathContext(3, RoundingMode.HALF_EVEN)); // 1.23E+3 保留3位有效位数

## 保留2位有效位数，并且后面补0
        DecimalFormat decimalFormat = new DecimalFormat("0.000");
        BigDecimal a = new BigDecimal("1");
        BigDecimal a1 = new BigDecimal(decimalFormat.format(a)); 
        BigDecimal aa = a1.round(new MathContext(2, RoundingMode.HALF_EVEN)); // 1.0

## ulp()
返回末尾的计数单位
new BigDecimal("123").ulp(); // 1
new BigDecimal("1.2").ulp(); // 0.1
new BigDecimal("1.20").ulp(); // 0.01

