(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{466:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"emacs安装配置yasnippet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#emacs安装配置yasnippet"}},[s._v("#")]),s._v(" Emacs安装配置yasnippet")]),s._v(" "),t("h2",{attrs:{id:"简单介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单介绍"}},[s._v("#")]),s._v(" 简单介绍")]),s._v(" "),t("p",[s._v("yasnippet是Emacs上的模板系统，可以利用 yasnippet 来定制一些代码的模板，例如 Elisp 的setq、Java 中的 main 函数、以及代码的注释的模板等等。")]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("h3",{attrs:{id:"安装最新的yasnippet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装最新的yasnippet"}},[s._v("#")]),s._v(" 安装最新的yasnippet")]),s._v(" "),t("p",[s._v("clone github中的代码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ cd ~/.emacs.d/plugins\n$ git clone https://github.com/joaotavora/yasnippet\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("将以下配置加入到init.el中")]),s._v(" "),t("div",{staticClass:"language-Elisp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-elisp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token car"}},[s._v("add-to-list")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token quoted-symbol variable symbol"}},[s._v("'load-path")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~/.emacs.d/plugins/yasnippet"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token quoted-symbol variable symbol"}},[s._v("'yasnippet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token car"}},[s._v("yas-global-mode")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";;设置为全局模式，在任何mode中是生效的")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("strong",[s._v("注意：在最新版中安装完yasnippet之后还需要下载snippet")])]),s._v(" "),t("h3",{attrs:{id:"安装snippet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装snippet"}},[s._v("#")]),s._v(" 安装snippet")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("M-x package-install RET yasnippet-snippets")]),s._v(" 进行安装，如果出现not found，用 "),t("code",[s._v("M-x package-list-packages")]),s._v(" 进入到list-package界面查找 yasnippet-snippets,然后就可以使用一些已经定制好的代码模板")]),s._v(" "),t("p",[s._v("安装完成后需要将snippets的地址加入到 yas-snippet-dirs 变量中，否则可能会出现无法使用yasnippet的情况。配置如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('(setq yas-snippet-dirs\n      \'("~/.emacs.d/snippets"                 ;; personal snippets\n        "~/.emacs.d/elpa-26.1/yasnippet-snippets-20200425.1210/snippets"\n        ))\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"定制代码模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定制代码模板"}},[s._v("#")]),s._v(" 定制代码模板")]),s._v(" "),t("p",[t("strong",[s._v("注意：定制代码模板需要在对应的mode下面，例如要定制markdown模板，就需要在markdown-mode下")])]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("M-x yas-new-snippet")]),s._v(" 打开一个新的buffer，会出现以下信息")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# -*- mode: snippet -*-\n# name:\n# key:\n# --\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("name：指的是snippet的名字")]),s._v(" "),t("p",[s._v("key：快捷键，使用"),t("code",[s._v("<TAB>")]),s._v("进行补全")]),s._v(" "),t("p",[s._v("完成后使用"),t("code",[s._v("C-c C-c")]),s._v("进行保存。")])])}),[],!1,null,null,null);a.default=n.exports}}]);