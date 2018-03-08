webpackJsonp([3],{"139j":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=a("bOdI"),r=a.n(n),i={data:function(){var e;return{tags:[],txt:"",ruleForm:{classify:[],brand:"",batchnumber:"",productname:"",consignor:"",supplier:"",unit:"",unitMin:"",unitMax:""},rules:{classify:[(e={required:!0},r()(e,"required",!0),r()(e,"message","请添加产品分类"),e)],brand:[{required:!0,message:"请输入品牌",trigger:"blur"},{min:1,max:10,message:"长度在 1 到 10 个字符",trigger:"change,blur"}],batchnumber:[{required:!0,message:"请输入批号/型号/货号",trigger:"blur"},{min:1,max:30,message:"长度在 1 到 30 个字符",trigger:"change,blur"}],productname:[{required:!0,message:"请输入批号/型号/货号",trigger:"blur"},{min:1,max:30,message:"长度在 1 到 30 个字符",trigger:"change,blur"}],consignor:[{required:!0,message:"请选择货主",trigger:"change"}],supplier:[{required:!0,message:"请选择供应商",trigger:"change"}],unit:[{required:!0,message:"请选择单位",trigger:"change"}],unitMin:[{required:!0,message:"请输入单位库位库存最小量",trigger:"blur"}],unitMax:[{required:!0,message:"请输入单位库位库存最大量",trigger:"blur"}],inventoryMin:[{required:!0,message:"请输入总库存库存最小量",trigger:"blur"}],inventoryMax:[{required:!0,message:"请输入总库存库存最大量",trigger:"blur"}]},tableData:[],quantityText:"",dialogVisible:!1,options:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}]}},deactivated:function(){this.$refs.ruleForm.resetFields()},methods:(l={goback:function(){this.$emit("c","true")},handleClose:function(e){this.tags.splice(this.tags.indexOf(e),1)},enterAdd:function(){this.txt&&(this.tags.push({quantity:this.txt}),this.txt="")},doAdd:function(){this.tags.length>0?(this.$emit("doAdd",this.tags),this.tags=[]):this.$message({type:"warning",message:"请添加规格"})},doCancel:function(){this.$emit("doCancel"),this.tags=[]},submitForm:function(e){var t=this;console.log(this.ruleForm.classify),this.$refs[e].validate(function(e){if(!(e&&t.tableData.length>0))return t.tableData.length>0?t.quantityText="":t.quantityText="请添加规格",console.log("error submit!!"),!1;t.tableData.length>0?(t.quantityText="",alert("submit!")):t.quantityText="请添加规格"})},resetForm:function(e){this.$refs[e].resetFields(),this.quantityText="",this.tableData=[]},add:function(){this.dialogVisible=!0},deleteRow:function(e,t){t.splice(e,1),0==this.tableData.length&&(this.quantityText="请添加规格")}},r()(l,"doAdd",function(e){for(var t=0;t<e.length;t++)this.tableData.push(e[t]);this.quantityText="",this.dialogVisible=!1}),r()(l,"doCancel",function(){this.dialogVisible=!1}),l)},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-container"},[a("div",{staticClass:"form-content"},[a("el-form",{ref:"ruleForm",staticClass:"form-wraper",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"140px"}},[a("el-form-item",{attrs:{label:"产品分类",prop:"classify"}},[a("el-cascader",{attrs:{options:e.options},model:{value:e.ruleForm.classify,callback:function(t){e.$set(e.ruleForm,"classify",t)},expression:"ruleForm.classify"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"品牌",prop:"brand"}},[a("el-input",{model:{value:e.ruleForm.brand,callback:function(t){e.$set(e.ruleForm,"brand",t)},expression:"ruleForm.brand"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"批号/型号/货号",prop:"batchnumber"}},[a("el-input",{model:{value:e.ruleForm.batchnumber,callback:function(t){e.$set(e.ruleForm,"batchnumber",t)},expression:"ruleForm.batchnumber"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"产品名称",prop:"productname"}},[a("el-input",{model:{value:e.ruleForm.productname,callback:function(t){e.$set(e.ruleForm,"productname",t)},expression:"ruleForm.productname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"货主",prop:"consignor"}},[a("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"请选择货主"},model:{value:e.ruleForm.consignor,callback:function(t){e.$set(e.ruleForm,"consignor",t)},expression:"ruleForm.consignor"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"供应商",prop:"supplier"}},[a("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"请选择供应商"},model:{value:e.ruleForm.supplier,callback:function(t){e.$set(e.ruleForm,"supplier",t)},expression:"ruleForm.supplier"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"单位",prop:"unit"}},[a("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"请选择单位"},model:{value:e.ruleForm.unit,callback:function(t){e.$set(e.ruleForm,"unit",t)},expression:"ruleForm.unit"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"拣货区库存上下限",required:""}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"unitMin"}},[a("el-input",{attrs:{placeholder:"单位库位库存最小量"},model:{value:e.ruleForm.unitMin,callback:function(t){e.$set(e.ruleForm,"unitMin",t)},expression:"ruleForm.unitMin"}})],1)],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"unitMax"}},[a("el-input",{attrs:{placeholder:"单位库位库存最大量"},model:{value:e.ruleForm.unitMax,callback:function(t){e.$set(e.ruleForm,"unitMax",t)},expression:"ruleForm.unitMax"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"总库存上下限",required:""}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"inventoryMin"}},[a("el-input",{attrs:{placeholder:"总库存库存最小量"},model:{value:e.ruleForm.inventoryMin,callback:function(t){e.$set(e.ruleForm,"inventoryMin",t)},expression:"ruleForm.inventoryMin"}})],1)],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"inventoryMax"}},[a("el-input",{attrs:{placeholder:"总库存库存最大量"},model:{value:e.ruleForm.inventoryMax,callback:function(t){e.$set(e.ruleForm,"inventoryMax",t)},expression:"ruleForm.inventoryMax"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"规格",required:""}},[a("el-button",{attrs:{type:"primary",size:"small",icon:"plus"},on:{click:e.add}},[e._v("新增规格")]),e._v(" "),a("div",{staticClass:"simple-grid"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"quantity",label:"规格"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"action-column"},[a("el-button",{attrs:{type:"text",size:"small"}},[e._v("\n\t\t\t\t\t\t          \t\t编辑\n\t\t\t\t\t\t        \t")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.deleteRow(t.$index,e.tableData)}}},[e._v("\n\t\t\t\t\t\t          \t\t删除\n\t\t\t\t\t\t        \t")])],1)]}}])})],1)],1),e._v(" "),a("div",{staticClass:"el-form-item__error"},[e._v(e._s(e.quantityText))])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:e.goback}},[e._v("取消")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"添加规格",visible:e.dialogVisible,size:"dl-small","modal-append-to-body":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"add-quantity"},[a("div",{staticClass:"quantity-content"},[a("div",{staticClass:"list"},e._l(e.tags,function(t){return a("el-tag",{key:t.quantity,attrs:{closable:!0,type:"primary"},on:{close:function(a){e.handleClose(t)}}},[e._v("\n\t\t\t\t\t\t\t"+e._s(t.quantity)+"\n\t\t\t\t\t\t")])})),e._v(" "),a("div",{staticClass:"input-control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.txt,expression:"txt"}],attrs:{type:"text",placeholder:"请输入规格名称"},domProps:{value:e.txt},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.enterAdd(t)},input:function(t){t.target.composing||(e.txt=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"quantity-footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.doAdd}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:e.doCancel}},[e._v("取消")])],1)])])],1)},staticRenderFns:[]};var s=a("VU/8")(i,o,!1,function(e){a("ej9N"),a("vuDL")},"data-v-3e5c885a",null);t.default=s.exports},"9bBU":function(e,t,a){a("mClu");var l=a("FeBl").Object;e.exports=function(e,t,a){return l.defineProperty(e,t,a)}},C4MV:function(e,t,a){e.exports={default:a("9bBU"),__esModule:!0}},VjyH:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.add-quantity[data-v-3e5c885a] {\n  height: auto;\n  overflow: hidden;\n}\n.add-quantity .quantity-content[data-v-3e5c885a] {\n  height: auto;\n  overflow: hidden;\n  border: 1px solid #bfcbd9;\n  border-radius: 5px;\n  margin-bottom: 25px;\n}\n.add-quantity .quantity-content .list[data-v-3e5c885a] {\n  min-height: 80px;\n  padding: 5px;\n}\n.add-quantity .quantity-content .list .el-tag[data-v-3e5c885a] {\n  margin: 5px;\n}\n.add-quantity .quantity-content .input-control[data-v-3e5c885a] {\n  height: 30px;\n  line-height: 30px;\n  padding: 10px;\n}\n.add-quantity .quantity-content .input-control input[data-v-3e5c885a] {\n  display: block;\n  line-height: 30px;\n  border: none;\n  outline: none;\n}\n.add-quantity .quantity-footer[data-v-3e5c885a] {\n  height: auto;\n  overflow: hidden;\n  text-align: center;\n}\n\n",""])},bOdI:function(e,t,a){"use strict";t.__esModule=!0;var l,n=a("C4MV"),r=(l=n)&&l.__esModule?l:{default:l};t.default=function(e,t,a){return t in e?(0,r.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},ej9N:function(e,t,a){var l=a("fEav");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("a7e2b364",l,!0)},fEav:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.form-container {\n  height: auto;\n  overflow: hidden;\n}\n.form-container .form-content {\n  height: auto;\n  overflow: hidden;\n  padding: 15px;\n  background: #fff;\n}\n.form-container .form-content .form-wraper {\n  width: 500px;\n}\n.form-container .form-content .form-wraper .line {\n  text-align: center;\n}\n.simple-grid {\n  height: auto;\n  overflow: hidden;\n}\n.el-dialog--dl-small {\n  width: 400px;\n}\n.el-cascader {\n  display: block;\n}\n\n",""])},mClu:function(e,t,a){var l=a("kM2E");l(l.S+l.F*!a("+E39"),"Object",{defineProperty:a("evD5").f})},vuDL:function(e,t,a){var l=a("VjyH");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("b10ac7b0",l,!0)}});