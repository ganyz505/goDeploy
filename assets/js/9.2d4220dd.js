(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{363:function(n,e,t){"use strict";t.r(e);var r=t(41),s=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栈"}},[n._v("#")]),n._v(" 栈")]),n._v(" "),t("p",[n._v("栈后进先出")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("    function Stack() {\n        this.count = 0;\n        this.storage  = [];\n    \n        // 入栈\n        this.push = (val) => {\n            this.storage[this.count] = val;\n            this.count++;\n        }\n    \n        // 出栈 => 删除栈顶元素，并返回\n        this.pop = () => {\n            if (this.count === 0) {\n                return undefined;\n            }\n            this.count--;\n            return this.storage[this.count];\n        }\n    \n        // 查看 => 查看栈顶元素\n        this.peek = () => {\n            return this.storage[this.count - 1]\n        }\n    \n        // 栈长度\n        this.length = () => {\n            return this.count;\n        }\n    \n        // 清空栈\n        this.clear = () => {\n            this.storage = [];\n            this.count = 0;\n        }\n    }\n")])])]),t("p",[n._v("判断一个字符串是不是回文")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("    function isPalindrome(word) {\n        const stack = new Stack();\n    \n        for (let i = 0; i < word.length; i++) {\n            stack.push(word[i])\n        }\n        \n        let words = '';\n        while(stack.length() > 0) {\n            words += stack.pop();\n        }\n    \n        return word == words;\n    }\n    \n    console.log(isPalindrome('level'))  // true \n    console.log(isPalindrome('1001'))   // true\n    console.log(isPalindrome('word'))   // false\n")])])]),t("h2",{attrs:{id:"队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[n._v("#")]),n._v(" 队列")]),n._v(" "),t("p",[n._v("队列先进先出")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("    function Queue() {\n        this.collection = [];\n        this.enqueue = (val) => {\n            this.collection.push(val)\n        }\n        this.dequeue = () => {\n            return this.collection.shift()\n        }\n        this.front = () => {\n            return this.collection[0]\n        }\n        this.back = () => {\n            return this.collection[this.collection.length - 1]\n        }\n        this.toString = () => {\n            return this.collection.join('-')\n        }\n        this.empty = () => {\n            return this.collection.length === 0;\n        }\n        this.size = () => {\n            return this.collection.length;\n        }\n        this.clear = () => {\n            this.collection = []\n        }\n    }\n")])])]),t("p",[n._v("优先队列 level高的排前面")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("    // 重新定义enqueue方法\n    this.enqueue = (item, level) => {\n        const data = {item, level};\n        if (this.empty()) {\n            this.collection.push(data)\n        } else {\n            let add = false;\n            for (let i = 0; i < this.size(); i++) {\n                if (level < this.collection[i][1]) {\n                    this.collection.splice(i, 0, data)\n                    add = true;\n                    break;\n                }\n            }\n            add && this.collection.push(data)\n        }\n    }\n")])])]),t("p",[n._v("循环队列 队首出队放到队尾 击鼓传花")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("    const drumGame = function(names, number) {\n        const queue = new Queue()\n        for (let i = 0; i < names.length; i++) {\n            queue.enqueue(names[i])\n        }\n    \n        while (queue.size() > 1) {\n            for (let i = 0; i < number; i++) {\n                // 这句是循环队列的核心\n                // 给定一个数字，然后迭代队列。从队列开头移除一项，再将其添加到队列末尾\n                // 模拟击鼓传花（如果你把花传给了旁边的人，你被淘汰的威胁就立刻解除了）\n                queue.enqueue(queue.dequeue())  \n            }\n            const loser = queue.dequeue()\n            console.log(loser + ' 出局')\n        }\n        return queue.dequeue()           // 留下的最后一个就是胜利者\n    }\n    \n    const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']\n    const winner = drumGame(names, 7) // 假设每轮传花 7 次\n    console.log('胜利者是: ' + winner)\n    \n    // Camila 出局\n    // Jack 出局\n    // Carl 出局\n    // Ingrid 出局\n    // 胜利者是: John\n")])])]),t("p",[n._v("实现基数排序")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("分别对个位、十位存进10个队列里再依次取出来\n")])])]),t("h2",{attrs:{id:"链表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[n._v("#")]),n._v(" 链表")]),n._v(" "),t("p",[n._v("如果你发现数组在实际使用时很慢，就可以考虑使用链表来替代它。除了对数据的随机访问，链表几乎可以用在任何可以使用一维数组的情况中。如果需要随机访问，数组仍然是更好的选择。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("    function Node(element) {\n        this.element = element;     // 当前节点的元素\n        this.next = null;           // 下一个节点链接\n    }\n")])])]),t("p",[n._v("操作")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("    function linkedList() {\n        let head = null,                // 第一个链表 默认标识\n            length = 0,                 // 链表长度\n            current;                    // 当前传入元素\n    \n        // 添加\n        this.push = (el) => {\n            const node = new Node(el)\n            if (head === null) {   // 插入第一个链表\n                head = node;\n            } else {\n            \n            //从第一个往下走\n                current = head;\n                while (current.next) {  // 获取最后一个链表\n                    current = current.next\n                }\n                current.next = node     // 将最后一个链表的next赋值为新元素\n            }\n            length++    // 链表长度\n        }\n    \n        // 移除\n        this.removeAt = (index) => {\n            if (index >= 0 && index < length) {     // 是否越界\n                // 移除第一个链表，特殊对待\n                if (index === 0) {\n                    head = head.next\n                } else {\n                    let previous;\n                    current = head;\n                    for (let i = 0; i < index; i++) {\n                        previous = current\n                        current = current.next\n                    }\n                    // 移除当前索引的 current\n                    previous.next = current.next\n                }\n                length--\n                return head\n            }\n            return undefined;\n        }\n    \n        // 指定位置添加\n        this.insert = (el, index) => {\n            if (index >= 0 && index < length) {     // 是否越界\n                const node = new Node(el);\n                if (index === 0) {\n                    current = head\n                    node.next = current\n                    head = node\n                } else {\n                    let previous;\n                    current = head;\n                    for (let i = 0; i < index; i++) {\n                        previous = current\n                        current = current.next\n                    }\n                    // 介于 previous & current 两者间插入\n                    previous.next = node\n                    node.next = current\n                }\n                length++\n                return head\n            }\n            return false;\n        }\n    \n        // 查找是否存在，有 => 索引，否 => -1\n        this.indexOf = (el) => {\n            current = head\n            for (let i = 0; i < length; i++) {\n                if (current.element === el) {\n                    return i\n                }\n                current = current.next\n            }\n            return -1\n        }\n    \n        // 移除\n        this.remove = (element) => {\n            this.removeAt(this.indexOf(element))\n        }\n    \n        // 是否为空\n        this.isEmpty = () => {\n            return length === 0\n        }\n    \n        // 获取长度\n        this.size = () => {\n            return length\n        }\n    \n        // 获取最开头的链表\n        this.getHead = () => {\n            return head\n        }\n    \n        // 打印链表\n        this.toString = () => {\n            if (head === null) {\n                return ''\n            }\n            current = head\n            let str = current.element\n            while (current.next) {\n                current = current.next\n                str += current.element\n            }\n            return str\n        }\n    }\n")])])]),t("h2",{attrs:{id:"二叉树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[n._v("#")]),n._v(" 二叉树")]),n._v(" "),t("p",[n._v("二叉搜索树（BST）是二叉树的一种，但是只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大的值。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("    // 节点定义\n    function Node(key) {\n        this.key = key\n        this.left = null;\n        this.right = null;\n    }\n    function BinarySearchTree() {\n        let root = null;\n        // 插入\n        this.insert = (key) => {\n            const node = new Node(key)\n            if (root == null) {     // 设值当前节点为根节点\n                root = node\n            } else {\n                insertNode(root, node)\n            }\n            function insertNode(parent, node) {\n                if (parent.key > node.key) {            // 当前节点大于新节点，则新节点放左边\n                    if (parent.left === null) {         // 若为空，则直接赋值为新节点, 出栈\n                        parent.left = node\n                    } else {\n                        insertNode(parent.left, node)   // 依次从根节点递归\n                    }\n                } else if (parent.key < node.key) {     // 当前节点小于新节点，则新节点放右边\n                    if (parent.right === null) {\n                        parent.right = node\n                    } else {\n                        insertNode(parent.right, node)\n                    }\n                }\n            }\n            return root\n        } \n    }\n")])])]),t("p",[n._v("树的遍历")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("中序 从最小到最大的顺序访问所有节点\n\n先序 先访问节点本身（1），然后再访问它的左侧子节点（2），最后是右侧子节点（3）\n\n后序 先访问左侧子节点（1），然后是右侧子节点（2），最后是父节点本身（3）。\n")])])]),t("p",[n._v("查找运算")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("最大值&最小值\n\n一直遍历右子树，直到右子树的某个节点的 right 为 null 时，该节点保存的即为最大值\n\n一直遍历左子树，直到左子树的某个节点的 left 为 null 时，该节点保存的即为最小值\n\n指定值\n\n根据上面添加新节点可得知：当前节点小于新节点，则新节点放右边，反之放左边\n查找的时候，根据key值进行判断，该往左右还是右边循环\n")])])]),t("p",[n._v("集合set、字典 （map）")])])}),[],!1,null,null,null);e.default=s.exports}}]);