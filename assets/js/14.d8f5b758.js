(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{369:function(e,t,a){"use strict";a.r(t);var v=a(41),r=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vue源码笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue源码笔记"}},[e._v("#")]),e._v(" vue源码笔记")]),e._v(" "),a("h2",{attrs:{id:"new-vue发生了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-vue发生了什么"}},[e._v("#")]),e._v(" new Vue发生了什么")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("    new Vue > init > $mount > compile > render > vnode > patch > DOM\n")])])]),a("h2",{attrs:{id:"vue-数据驱动视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-数据驱动视图"}},[e._v("#")]),e._v(" Vue 数据驱动视图")]),e._v(" "),a("p",[e._v("new vue创建一个实例对象。首先调用init方法初始化。Vue 初始化主要就干了几件事情，合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 data、props、computed、watcher 等等。")]),e._v(" "),a("p",[e._v("initState(vm)发生在beforeCreate和created之间")]),e._v(" "),a("p",[e._v("最后调用 vm.$mount 方法挂载vm，挂载的目标就是把模板渲染成最终的 DOM")]),e._v(" "),a("p",[e._v("compile。.vue template 最后都会转化为render函数")]),e._v(" "),a("p",[e._v("vm._render 最终是通过执行 createElement 方法并返回的是 vnode")]),e._v(" "),a("p",[e._v("把这个 VNode 渲染成一个真实的 DOM 并渲染出来，这个过程是通过 vm._update 完成的。它被调用的时机有 2 个，一个是首次渲染，一个是数据更新的时候")]),e._v(" "),a("p",[e._v("update里有patch、insert操作。插入的顺序是先子后父。")]),e._v(" "),a("h2",{attrs:{id:"组件化思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件化思想"}},[e._v("#")]),e._v(" 组件化思想")]),e._v(" "),a("p",[e._v("普通vNode和组件vNode")]),e._v(" "),a("p",[e._v("编写一个组件实际上是编写一个 JavaScript 对象，对象的描述就是各种配置")]),e._v(" "),a("p",[e._v("生命周期。在 created 钩子函数中可以访问到数据，在 mounted 钩子函数中可以访问到 DOM，在 destroy 钩子函数中可以做一些定时器销毁工作")]),e._v(" "),a("h2",{attrs:{id:"响应式原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式原理"}},[e._v("#")]),e._v(" 响应式原理")]),e._v(" "),a("p",[e._v("创建响应式对象\n依赖收集\n派发更新")]),e._v(" "),a("p",[e._v("initState 方法主要是对 props、data等属性做了初始化操作")]),e._v(" "),a("p",[e._v("Dep 是整个 getter 依赖收集的核心，实际上是个数组，保存watcher。 Vue 设计了在每次添加完新的订阅，会移除掉旧的订阅，v-if的情况。")]),e._v(" "),a("p",[e._v("setter触发时遍历Dep里的所有watcher执行它的update")]),e._v(" "),a("p",[e._v("new Vue 的时候首先observe(data)将数据变成响应式的，然后new一个watcher，watcher里会访问data里的属性值，触发getter将自己添加进Dep。setter触发时派发更新。")]),e._v(" "),a("h2",{attrs:{id:"diff算法原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff算法原理"}},[e._v("#")]),e._v(" diff算法原理")]),e._v(" "),a("p",[e._v("当新旧VNode树在同一层具有相同的VNode节点时，才会继续对其子节点进行比较。一旦旧VNode树同层中的节点在新VNode树中不存在或者是多余的，都会在新的真实DOM中进行添加或者删除。")])])}),[],!1,null,null,null);t.default=r.exports}}]);