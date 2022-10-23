(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{663:function(n,e,t){"use strict";t.r(e);var r=t(5),i=Object(r.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(" 递归调用判断\n boolean类型的二维数组用于判断当前字母是否已使用过  \n int[][] directions = {{0,-1},{0,1},{1,0},{-1,0}}; 用于处理边界问题   \n\nclass Solution {\n    public boolean exist(char[][] board, String word) {\n        boolean result = false;\n        int y = board.length, x = board[0].length;\n        boolean visited[][] = new boolean[y][x];\n        for(int Y = 0; Y<y; Y++){\n            for(int X = 0; X<x; X++){\n                if(board[Y][X] == word.charAt(0)){\n                    boolean flag = check(board, Y, X, visited, word, 0);\n                    if(flag){\n                        return true;\n                    }\n                }\n            }\n        }\n        return result;\n    }\n\n    public boolean check(char[][] board, int Y, int X, boolean[][] visited, String word, int k){\n        boolean checkResult = false;\n        if(board[Y][X] != word.charAt(k)){\n            return false;\n        }else if(k == word.length()-1){\n            return true;\n        }\n\n        visited[Y][X] = true;\n        int[][] directions = {{0,-1},{0,1},{1,0},{-1,0}};\n        for(int[] dir: directions){\n            int newY = Y + dir[0], newX = X + dir[1];\n            if(newY >= 0 && newY < board.length && newX >= 0 && newX < board[0].length){\n                if(!visited[newY][newX]){\n                    boolean flag = check(board, newY, newX, visited, word, k+1);\n                    if(flag){\n                        checkResult = true;\n                        break;\n                    }\n                }\n\n            }\n        }\n        visited[Y][X] = false;  //每次递归调用完后为保证外层方法正确性，要复原本次的修改\n        return checkResult;  \n\n    }\n}\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);