---
title: 时间相关
date: 2020-10-01
tags: tag1
categories: Java
---
# 时间相关

@JsonFormat主要是后台到前台的时间格式的转换
@DateTimeFormat主要是前端到后台的时间格式的转换

## LocalDateTime 与 String 相互转换

```
	 DateTimeFormatter df = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
	 LocalDateTime time = LocalDateTime.now();
	 String localTime = df.format(time);
	 LocalDateTime ldt = LocalDateTime.parse("2018-01-12 17:07:05",df);
	 System.out.println("LocalDateTime转成String类型的时间："+localTime);
	 System.out.println("String类型的时间转成LocalDateTime："+ldt);
```


## Date 与 String 相互转换
```
	DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
	Date date = format.parse("2018-01-12 17:07:05");
	System.out.println("String类型的时间转成Date："+date);
	
	SimpleDateFormat sdf = new SimpleDateFormat(“yyyy-MM-dd”);
	String s = sdf.format(date)
	System.out.println("Date类型的时间转成String："+s);
```

## Date 与 LocalDateTime 相互转换 
```
LocalDateTime createTime = LocalDateTime.now();
ZoneId zoneId = ZoneId.systemDefault();
ZonedDateTime zdt = createTime.atZone(zoneId);
Date date = Date.from(zdt.toInstant());

```

## 两个时间相差的天数
```
	Duration durationD = Duration.between(startTime, endTime);
	long days = durationD.toDays();
```

## 从1970-01-01 00:00:00到当前时间的毫秒数
System.currentTimeMillis();

LocalDateTime.now().toInstant(ZoneOffset.of("+8")).toEpochMilli();

## 获取两个日期相差的年、天、小时、分钟、秒数
```
    /**
     * 获取两个日期相差的年、天、小时、分钟、秒数
     * diffType相差的时间类型数
     */
    public static BigDecimal getDateTimeDiff(LocalDateTime beginTime, LocalDateTime endTime, String diffType) {

        //获取第一个时间点的时间戳对应的秒数
        long beginTimeMillis = beginTime.toEpochSecond(ZoneOffset.ofHours(0));
        BigDecimal begin = new BigDecimal(beginTimeMillis);

        //获取第二个时间点的时间戳对应的秒数
        long endTimeMillis = endTime.toEpochSecond(ZoneOffset.ofHours(0));
        BigDecimal end = new BigDecimal(endTimeMillis);

        //获取第一个时间点在是1970年1月1日后的第几天
        BigDecimal t1;

        //获取第二个时间点在是1970年1月1日后的第几天
        BigDecimal t2;

        BigDecimal temp ;
        switch (diffType) {
            case "YEAR": {
                temp = new BigDecimal(60 * 60 * 24 * 365);
                break;
            }
            case "DAY": {
                temp = new BigDecimal(60 * 60 * 24);
                break;
            }
            case "HOUR": {
                temp = new BigDecimal(60 * 60);
                break;
            }
            case "MINUTE": {
                temp = new BigDecimal(60);
                break;
            }
            case "SECOND": {
                temp = BigDecimal.ONE;
                break;
            }
            default:
                temp = BigDecimal.ONE;
                break;
        }
        t1 = begin.divide(temp, MathContext.DECIMAL128);
        t2 = end.divide(temp,MathContext.DECIMAL128);
        //返回两个时间点的差值
        return t2.subtract(t1);
    }
```

## 获取两个时间点的中间时刻
```
    /**
     * 获取两个时间点的中间时刻
     *
     * @param beginTime
     * @param endTime
     * @return
     */
    public static LocalDateTime getMiddleTime(LocalDateTime beginTime, LocalDateTime endTime) {

        Long milliSecond = (endTime.toInstant(ZoneOffset.of("+8")).toEpochMilli() + beginTime.toInstant(ZoneOffset.of("+8")).toEpochMilli()) / 2;
        Instant instant = Instant.ofEpochMilli(milliSecond);
        return LocalDateTime.ofInstant(instant, ZoneId.systemDefault());
    }
```

