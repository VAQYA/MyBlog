(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{657:function(n,s,t){"use strict";t.r(s);var e=t(5),i=Object(e.a)({},(function(){var n=this.$createElement,s=this._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("首先对数组进行排序，排序后固定一个数 nums[i]，再使用左右指针指向 nums[i]后面的两端，数字分别为 nums[L] 和 nums[R]，计算三个数的和 temp 判断是否满足为 0，满足则添加进结果集\n如果 nums[i]大于 0，则三数之和必然无法等于 0，结束循环\n如果 nums[i] == nums[i-1]，则说明该数字重复，会导致结果重复，所以应该跳过\n当 temp == 0 ，nums[L] == nums[L+1] 时，会导致结果重复，应该跳过，L++\n当 temp == 0 ，nums[R] == nums[R-1] 时，会导致结果重复，应该跳过，R−−\n时间复杂度：O(n^2)O(n2)，n 为数组长度\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        List<List<Integer>> resultList = new ArrayList<>();\n        Arrays.sort(nums);\n        int len = nums.length;\n        for(int i=0; i<len-2;i++){\n            if(nums[i]>0){\n                return resultList;\n            }\n            if(i>0 && nums[i]==nums[i-1]){\n                continue;\n            }\n            int L=i+1,R=len-1;\n            while(L<R){\n                int temp = nums[i]+nums[L]+nums[R];\n                if(temp==0){\n                    while(L<R && nums[L]==nums[L+1]){\n                        L++;\n                    }\n                    while(L<R && nums[R]==nums[R-1]){\n                        R--;\n                    }\n                    List<Integer> list = new ArrayList(3);\n                    list.add(nums[i]);\n                    list.add(nums[L]);\n                    list.add(nums[R]);\n                    resultList.add(list);\n                    L++;\n                    R--; \n                }else if(temp<0){\n                    L++;\n                }else{\n                    R--;\n                }\n            }\n        }\n        return resultList;\n    }\n}\n\t\n")])])])])}),[],!1,null,null,null);s.default=i.exports}}]);