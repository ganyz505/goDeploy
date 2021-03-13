(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(t,e,n){"use strict";n.r(e);var r=n(41),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"call"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#call"}},[t._v("#")]),t._v(" call")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("    Function.prototype.call2 = function(context,...args){\n    \n        let context = context || window\n        //获取调用call的函数，用this可以获取到\n        context.fn = this\n        let result = eval('context.fn(...args)')\n        delete context.fn\n        return result\n    }\n")])])]),n("h2",{attrs:{id:"apply"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apply"}},[t._v("#")]),t._v(" apply")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("    Function.prototype.apply2 = function(context,args){\n    \n        let context = context || window\n        context.fn = this\n        let result = eval('context.fn(...args)')\n        delete context.fn\n        return result\n    }\n")])])]),n("h2",{attrs:{id:"bind"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bind"}},[t._v("#")]),t._v(" bind")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('    Function.prototype.bind2 = function(context,...args) {\n        \x3c!--异常处理--\x3e\n        if(typeof this !== "function") {\n            throw new Error("Function.prototype.bind - what is trying to be bound is not callable")\n        }\n        \x3c!--保存this的值，他代表调用bind的函数--\x3e\n        var self = this;\n        \x3c!--空函数中转--\x3e\n        var fNop = function() {}\n        var fbound = function () {\n            self.apply(this instanceof self ? this : context,args.concat(Array.prototype.slice.call(arguments)))\n        }\n        fNop.prototype = this.prototype;\n        fbound.prototype = new fNop;\n        return fbound;\n    }\n')])])]),n("h2",{attrs:{id:"new"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new"}},[t._v("#")]),t._v(" new")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("    function newFactory(ctor,...args) {\n        if(typeof ctor !== 'function') {\n            throw 'newOperator function the first param must be a function'\n        }\n        let obj = new Object();\n        obj.__proto__ = Object.create(ctor.prototype);\n        let res = ctor.apply(obj,...args);\n        \n        let isObject = typeof res === 'object' && typeof res !== null;\n        let isFunction = typeof res === 'function';\n        return isObject || isFunction ? res : obj\n    }\n")])])]),n("h2",{attrs:{id:"寄生组合继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#寄生组合继承"}},[t._v("#")]),t._v(" 寄生组合继承")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("    function Parent (name) {\n        this.name = name;\n        this.colors = ['red', 'blue', 'green'];\n    }\n    Parent.prototype.getName = function () {\n        console.log(this.name)\n    }\n    function Child (name, age) {\n        Parent.call(this, name);\n        this.age = age;\n    }\n    Child.prototype = Object.create(Parent.prototype);\n    Child.prototype.constructor = Child;\n    \n    const child1 = new Child('kevin', '18');\n    \n    console.log(child1);\n")])])]),n("h2",{attrs:{id:"防抖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#防抖"}},[t._v("#")]),t._v(" 防抖")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("    function debounce(func,wait,immediate) {\n        let timeout,result\n        return function() {\n            const context = this\n            const args = arguments\n            if(timeout) clearTimeout(timeout)\n            if(immediate) {\n                let callNow = !timeout\n                timeout = setTimeout(function(){\n                    timeout = null;\n                },wait)\n                if(callNow) result = func.apply(context,args)\n            }else{\n                timeout = setTimeout(function(){\n                    func.apply(context,args)\n                },wait)\n            }\n        }\n    }\n")])])]),n("h2",{attrs:{id:"节流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#节流"}},[t._v("#")]),t._v(" 节流")]),t._v(" "),n("h2",{attrs:{id:"深拷贝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝"}},[t._v("#")]),t._v(" 深拷贝")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('    function deepClone(target) {\n        // is Object???\n        if (typeof target == "object") {\n            // array or object\n            const result = Array.isArray(target) ? [] : {}\n            for (let key in target) {\n                if (target.hasOwnProperty(key)) {\n                    // 引用类型需要再次递归\n                    result[key] = typeof target[key] == "object" ? deepClone(target[key]) : target[key]\n                }\n            }\n            return result\n        }\n        return target\n    }\n')])])]),n("h2",{attrs:{id:"promise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" promise")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('    //定义三种状态\n    const PENDING = "pending";\n    const FULFILLED = "fulfilled";\n    const REJECTED = "rejected";\n    \n    function MyPromise(executor){\n        const self = this;          // 缓存当前promise实例\n        self.state = PENDING;       // 默认状态\n        self.value = null;          // 成功的值\n        self.error = null;          // 失败的值\n        self.onFulfilled = null;    // 保存then中的回调\n        self.onRejected = null;     // 保存catch中的回调\n    \n        const resolve = (value) => {\n            if(self.state == PENDING){\n                setTimeout(() => {\n                    self.state = FULFILLED;\n                    self.value = value;\n                    self.onFulfilled(self.value)\n                })\n            }\n        }\n        \n        const reject = (error) => {\n            if(self.state == PENDING){\n                setTimeout(() => {\n                    self.state = REJECTED;\n                    self.error = error;\n                    self.onRejected(self.value)\n                })\n            }\n        }\n    \n        // 如果executor执行报错，直接执行reject\n        try{\n            executor(resolve, reject)\n        }catch(err){\n            reject(err)\n        }\n    }\n    \n    MyPromise.prototype.then = function(onFulfilled, onRejected){\n        if(this.state == PENDING){\n            this.onFulfilled = onFulfilled\n            this.onRejected = onRejected\n        }\n        else if(this.state == FULFILLED){\n            onFulfilled(this.value)\n        }\n        else{\n            onRejected(this.error)\n        }\n        return this;\n    }\n    \n    //执行promise\n    new MyPromise((resolve, reject) => {\n        setTimeout(() => {\n            resolve(1)\n        }, 1000)\n    }).then(res => {\n        console.log(res) // 1\n    })\n')])])]),n("h2",{attrs:{id:"instanceof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#instanceof"}},[t._v("#")]),t._v(" instanceof")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("    function myInstanceof(left, right) {\n        //基本数据类型直接返回false\n        if(typeof left !== 'object' || left === null) return false;\n        //getProtypeOf是Object对象自带的一个方法，能够拿到参数的原型对象\n        let proto = Object.getPrototypeOf(left);\n        while(true) {\n            //查找到尽头，还没找到\n            if(proto == null) return false;\n            //找到相同的原型对象\n            if(proto == right.prototype) return true;\n            proto = Object.getPrototypeOf(proto);\n        }\n    }")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);