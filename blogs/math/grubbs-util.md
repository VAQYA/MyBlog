---
title: Grubbs剔除法
date: 2020-10-01
tags: 数学
categories: 计算相关
---

``` Java

import lombok.Data;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;

/**
 * 1、排列数据 Collections.sort(dataArrayList);
 * 2、求平均值、标准差
 * 3、计算Gi值：每个数据与平均数的残差 / 标准差
 * 4、⽤这个Gi 值 与 格拉布斯临界表表中的 临界值⽐较，越⼤，越异常，需剔除
 * 注：
 * 1. 这个临界值 与 顶尖⽔平(alpha)有关 在0.01 - 0.99中选，越⼩越严格 ，以及测量次数(数组集合长度)
 * 2. 查格拉布斯表获得临界值： 根据 置信概率(1-alpha) 和测验次数 横纵交得临界值
 */
@Data
public class GrubbsUtil {
    private ArrayList<Double> oldDataArrayList = new ArrayList<>();
    private ArrayList<Double> dataArrayList;
    private int length;
    private final double alpha = 0.05;
    // 被剔除的值
    private Double removedValue;
    // 第n个数被删除
    private int n;

    //传⼊⼀组数据，我们要做的是剔除最⼤或最⼩的异常值
    public GrubbsUtil(ArrayList<Double> arrayList) {
        this.oldDataArrayList.addAll(arrayList);
        this.dataArrayList = arrayList;
        this.length = arrayList.size();
    }

    public ArrayList<Double> calc() {
    //因为格拉布斯准则只能对⼤于等于3个数据进⾏判断，所以数据量⼩于3时，直接返回
        if (dataArrayList.size() < 3) {
            return dataArrayList;
        }
    //⾸先对数据进⾏排序
        Collections.sort(dataArrayList);
    //求出数据平均值和标准差
        double average = calcAverage(dataArrayList);
        double standard = calcStandard(dataArrayList, length, average);
    // 循环取每个数据和平均数据的标准差，过了就剔除！
        Iterator<Double> it = dataArrayList.iterator();
        while (it.hasNext()) {
            Double item = it.next();
    //与平均值之差
            double diffAvg = (item > average) ? (item - average) : (average - item);
    //差值/标准差
            double waveValue = diffAvg / standard;//波动
    //做⽐较，是否剔除
            if (waveValue > calcG(alpha, length)) {
                it.remove();
                removedValue = item;
                n = getIndex();
                break;
            }
        }
        return dataArrayList;
    }

    //求平均
    public double calcAverage(ArrayList<Double> sample) {
        double sum = 0;
        int cnt = 0;
        for (int i = 0; i < sample.size(); i++) {
            sum += sample.get(i);
            cnt++;
        }
        return  sum / cnt;
    }

    //求样品标准偏差
    private double calcStandard(ArrayList<Double> array, int n, double average) {
        double sum = 0;
        for (int i = 0; i < n; i++) {
            sum += ( array.get(i) - average) * ( array.get(i) - average);
        }
        return Math.sqrt((sum / (n - 1)));
    }


    private double calcG(double alpha, int n) {

        //算临界值的表，这⾥alpha为0.005
        // double[] N = {1.1546847100299753, 1.4962499999999703,
        //         1.763678479497787, 1.9728167175443088, 2.1391059896012203,
        //         2.2743651271139984, 2.386809875078279, 2.4820832497170997,
        //         2.564121252001767, 2.6357330437346365, 2.698971864039854,
        //         2.755372404941574, 2.8061052912205966, 2.8520798130619083,
        //         2.894013795424427, 2.932482154393285, 2.9679513293748547,
        //         3.0008041587489247, 3.031358153993366, 3.0598791335206963,
        //         3.086591582831163, 3.1116865231590722, 3.135327688211162,
        //         3.157656337622164, 3.178795077984819, 3.198850919445483,
        //         3.2179177419513314, 3.2360783011390764, 3.2534058719727748,
        //         3.26996560491852, 3.2858156522011304, 3.301008108808857,
        //         3.31558980320037, 3.329602965279218, 3.3430857935316243,
        //         3.356072938839107, 3.368595919061223, 3.3806834758032323,
        //         3.3923618826659503, 3.403655212591846, 3.41458557057518,
        //         3.4251732969213213, 3.435437145364717, 3.4453944396432576,
        //         3.4550612115453876, 3.464452322969104, 3.4735815741386,
        //         3.482461799798589, 3.491104954935569, 3.4995221913492585,
        //         3.507723926208097, 3.5157199035634887, 3.5235192496631433,
        //         3.5311305227901078, 3.5385617582575746, 3.5458205091071684,
        //         3.5529138829882037, 3.5598485756350797};

        //算临界值的表，这⾥alpha为0.05
        double[] N = {1.153, 1.463, 1.672, 1.822, 1.938, 2.032, 2.11, 2.176, 2.234, 2.285, 2.331, 2.371, 2.409, 2.443, 2.475, 2.501,
                2.532, 2.557, 2.58, 2.603, 2.624, 2.644, 2.663, 2.681, 2.698, 2.714, 2.73, 2.745, 2.759, 2.773, 2.786, 2.799,
                2.811, 2.823, 2.835, 2.846, 2.857, 2.866, 2.877, 2.887, 2.896, 2.905, 2.914, 2.923, 2.931, 2.94, 2.948, 2.956,
                2.943, 2.971, 2.978, 2.986, 2.992, 3, 3.006, 3.013, 3.019, 3.025, 3.032, 3.037, 3.044, 3.049, 3.055, 3.061,
                3.066, 3.071, 3.076, 3.082, 3.087, 3.092, 3.098, 3.102, 3.107, 3.111, 3.117, 3.121, 3.125, 3.13, 3.134, 3.139,
                3.143, 3.147, 3.151, 3.155, 3.16, 3.163, 3.167, 3.171, 3.174, 3.179, 3.182, 3.186, 3.189, 3.193, 3.196, 3.201,
                3.204, 3.207};
        return N[n - 3];
    }
    // 根据被剔除的数值得到位置（索引+1）
    private int getIndex(){
        if(oldDataArrayList.size()==dataArrayList.size()){
            return 0;
        }
        for (int i = 0; i<oldDataArrayList.size();i++){
            if(oldDataArrayList.get(i).equals(this.removedValue)){
                return i+1;
            }
        }
        return 0;
    }

}
```