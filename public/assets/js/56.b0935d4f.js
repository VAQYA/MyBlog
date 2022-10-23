(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{658:function(n,t,s){"use strict";s.r(t);var e=s(5),i=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("和15题三数之和解题思路差不多")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("class Solution {\n    public int threeSumClosest(int[] nums, int target) {\n        Arrays.sort(nums);\n        int len = nums.length;\n        int before = nums[0] + nums[1] + nums[len-1];\n\n        for(int i=0; i<len-2; i++){\n            if(i>0 && nums[i]==nums[i-1]){\n                continue;\n            }\n            for(int L=i+1, R=len-1;L<R;){\n                int sum = nums[i]+nums[L]+nums[R];\n                if(sum - target == 0){\n                    return sum;\n                }else if(sum>target){\n                    R--;\n                    while(L<R && nums[R]==nums[R+1]){//不用判断R<len-1,因为上一步刚R--;\n                        R--; \n                    }\n                }else {\n                    L++;\n                    while(L<R && nums[L]==nums[L-1]){//不用判断L>0,因为上一步刚L++;\n                        L++;\n                    }\n                }\n                if(Math.abs(sum - target)<Math.abs(before-target)){\n                    before = sum; \n                }\n            }\n        }\n        return before;\n    }\n}\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);