(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{712:function(n,t,e){"use strict";e.r(t);var s=e(5),i=Object(s.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("方法一")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("class Solution {\n    public boolean search(int[] nums, int target) {\n        boolean result = false;\n        int i = 0;\n        while(i<nums.length){\n            if(nums[i]==target){\n                result = true;\n                break;\n            }else if(nums[i]>target){\n                int j = i;\n                i = nums.length - 1;\n                while(i>j){\n                    if(target == nums[i]){\n                        result = true;\n                        break;\n                    }\n                    i-=1;\n                }\n\n            }\n            i+=1;\n        }\n        return result; \n    }\n}\n")])])]),t("p",[this._v("方法二：二分查找")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("public boolean search(int[] nums, int target) {\n        if (nums == null || nums.length == 0) {\n            return false;\n        }\n        int start = 0;\n        int end = nums.length - 1;\n        int mid;\n        while (start <= end) {\n            mid = start + (end - start) / 2;\n            if (nums[mid] == target) {\n                return true;\n            }\n            if (nums[start] == nums[mid]) {\n                start++;\n                continue;\n            }\n            //前半部分有序\n            if (nums[start] < nums[mid]) {\n                //target在前半部分\n                if (nums[mid] > target && nums[start] <= target) {\n                    end = mid - 1;\n                } else {  //否则，去后半部分找\n                    start = mid + 1;\n                }\n            } else {\n                //后半部分有序\n                //target在后半部分\n                if (nums[mid] < target && nums[end] >= target) {\n                    start = mid + 1;\n                } else {  //否则，去后半部分找\n                    end = mid - 1;\n\n                }\n            }\n        }\n        //一直没找到，返回false\n        return false;\n\n    }\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);