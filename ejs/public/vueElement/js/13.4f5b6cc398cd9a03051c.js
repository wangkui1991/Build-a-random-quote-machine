webpackJsonp([13],{GMSd:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.grid-container {\n  height: auto;\n  overflow: hidden;\n}\n.grid-container .detail-content {\n  height: auto;\n  overflow: hidden;\n  padding: 22px 15px 0;\n  background: #fff;\n}\n.grid-container .simple-form {\n  width: 315px;\n}\n.grid-container .action-column {\n  text-align: right;\n}\n.grid-container .color-gred {\n  color: #999;\n}\n.grid-container .footer-bar {\n  height: auto;\n  overflow: hidden;\n  padding: 15px 0;\n  text-align: center;\n}\n.el-dialog--d-grid {\n  width: 750px;\n}\n",""])},Ydnx:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={data:function(){return{gridData:[],multipleSelection:[],params:{supplier:"",brand:"",classify:"",keywords:""},ruleForm:{orderNum:"",consignor:"",orderTime:""},rules:{orderNum:[{required:!0,message:"请输入客户单号",trigger:"blur"}],consignor:[{required:!0,message:"请输入货主",trigger:"blur"}],orderTime:[{required:!0,message:"请选择日期",trigger:"blur"}]},loading:!0,tableData:[],dialogTableVisible:!1}},mounted:function(){console.log(this.$route.params),this.loadData(),this.getdata()},methods:{goback:function(){this.$emit("c","true")},loadData:function(){console.log(this.params),this.gridData=[{id:"1",goodsBarCode:"SP20179841",supplier:"中华书局",productNo:"SP-9078002",classify:"电子配件",brand:"中华书局",batchNo:"2017-sanguo",productName:"三国演义线装本 4册 收藏版",specification:"sdsa",unit:"2"},{id:"2",goodsBarCode:"SP20179842",supplier:"中华书局",productNo:"SP-9078002",classify:"电子配件",brand:"中华书局",batchNo:"2017-sanguo",productName:"三国演义线装本 4册 收藏版",specification:"sdsa",unit:"2"},{id:"3",goodsBarCode:"SP20179843",supplier:"中华书局",productNo:"SP-9078002",classify:"电子配件",brand:"中华书局",batchNo:"2017-sanguo",productName:"三国演义线装本 4册 收藏版",specification:"sdsa",unit:"2"},{id:"4",goodsBarCode:"SP20179844",supplier:"中华书局",productNo:"SP-9078002",classify:"电子配件",brand:"中华书局",batchNo:"2017-sanguo",productName:"三国演义线装本 4册 收藏版",specification:"sdsa",unit:"2"},{id:"5",goodsBarCode:"SP20179845",supplier:"中华书局",productNo:"SP-9078002",classify:"电子配件",brand:"中华书局",batchNo:"2017-sanguo",productName:"三国演义线装本 4册 收藏版",specification:"sdsa",unit:"2"}]},handleSelectionChange:function(e){this.multipleSelection=e},doSure:function(){this.multipleSelection.length>0?this.$emit("sureDialog",this.multipleSelection):this.$message({message:"请选择商品",type:"warning"})},doCancel:function(){this.$emit("cancelDialog")},getdata:function(){var e=this;this.loading=!0,this.tableData=[],setTimeout(function(){e.loading=!1},100)},deleteRow:function(e,t){t.splice(e,1)},onSearch:function(){this.currentPage=1,console.log("onSearch!"),this.getdata()},addGoods:function(){this.dialogTableVisible=!0},sureDialog:function(e){this.tableData.length>0?this.tableData=this.tableData.concat(e):this.tableData=e,this.dialogTableVisible=!1},cancelDialog:function(){this.dialogTableVisible=!1}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid-container"},[a("div",{staticClass:"page-bread"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[e._v("采购入库交接")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(this.$route.params.id?"编辑采购单":"新建采购单"))])],1)],1),e._v(" "),a("div",{staticClass:"detail-content"},[a("el-tabs",{attrs:{activeName:"detail"}},[a("el-tab-pane",{attrs:{label:this.$route.params.id?"编辑采购单":"新建采购单",name:"detail"}},[a("el-form",{ref:"ruleForm",staticClass:"simple-form",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"客户单号",prop:"orderNum"}},[a("el-input",{model:{value:e.ruleForm.orderNum,callback:function(t){e.$set(e.ruleForm,"orderNum",t)},expression:"ruleForm.orderNum"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"货主",prop:"consignor"}},[a("el-input",{model:{value:e.ruleForm.consignor,callback:function(t){e.$set(e.ruleForm,"consignor",t)},expression:"ruleForm.consignor"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"预约到库时间",prop:"orderTime"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.orderTime,callback:function(t){e.$set(e.ruleForm,"orderTime",t)},expression:"ruleForm.orderTime"}})],1)],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"detail-content"},[a("el-tabs",{attrs:{activeName:"table"}},[a("el-tab-pane",{attrs:{label:"选择并添加商品",name:"table"}},[a("el-form",{attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"供应商"}},[a("el-select",{attrs:{placeholder:"请选择供应商"},model:{value:e.params.supplier,callback:function(t){e.$set(e.params,"supplier",t)},expression:"params.supplier"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"产品分类"}},[a("el-select",{attrs:{placeholder:"请选择产品分类"},model:{value:e.params.classify,callback:function(t){e.$set(e.params,"classify",t)},expression:"params.classify"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"产品品牌"}},[a("el-select",{attrs:{placeholder:"请选择产品品牌"},model:{value:e.params.brand,callback:function(t){e.$set(e.params,"brand",t)},expression:"params.brand"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"关键字"}},[a("el-input",{attrs:{placeholder:"产品名称关键字"},model:{value:e.params.keywords,callback:function(t){e.$set(e.params,"keywords",t)},expression:"params.keywords"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.addGoods}},[e._v("添加商品")])],1)],1),e._v(" "),e.tableData.length>0?a("div",[a("div",{staticClass:"statistic-content"},[a("p",[e._v("\n\t\t\t\t\t\t\t\t统计：\n\t\t\t\t\t\t\t\t"),a("span",[e._v("供应商数量：N")]),e._v(" "),a("span",[e._v("产品数量：M")]),e._v(" "),a("span",[e._v("商品数量：L")])])]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"goodsBarCode",label:"商品条码",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"supplier",label:"供应商",width:"250"}}),e._v(" "),a("el-table-column",{attrs:{prop:"classify",label:"产品分类",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"brand",label:"品牌",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"batchNo",label:"批号/型号/货号",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"productName",label:"产品名称",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"specification",label:"规格",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"单位",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"purchaseNum",label:"采购数量",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.deleteRow(t.$index,e.tableData)}}},[e._v("\n\t\t\t\t\t\t          \t\t删除\n\t\t\t\t\t\t        \t")])]}}])})],1)],1):e._e(),e._v(" "),a("div",{staticClass:"footer-bar"},[a("el-button",{attrs:{type:"primary"}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:e.goback}},[e._v("取消")])],1)],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"添加商品",size:"d-grid",visible:e.dialogTableVisible,"modal-append-to-body":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("div",{attrs:{params:e.params,dialogTableVisible:e.dialogTableVisible},on:{sureDialog:e.sureDialog,cancelDialog:e.cancelDialog}},[a("el-table",{ref:"multipleTable",attrs:{data:e.gridData,height:"300"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsBarCode",label:"商品条码",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"supplier",label:"供应商",width:"250"}}),e._v(" "),a("el-table-column",{attrs:{prop:"productNo",label:"产品编号",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"classify",label:"产品分类",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"brand",label:"品牌",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"batchNo",label:"批号/型号/货号",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"productName",label:"产品名称",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"specification",label:"规格",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"单位",width:"100"}})],1),e._v(" "),a("div",{staticClass:"footer-bar"},[a("el-button",{attrs:{type:"primary"},on:{click:e.doSure}},[e._v("确定")]),e._v(" "),a("el-button",{on:{click:e.doCancel}},[e._v("取消")])],1)],1)])],1)},staticRenderFns:[]};var i=a("VU/8")(l,o,!1,function(e){a("xDah")},null,null);t.default=i.exports},xDah:function(e,t,a){var l=a("GMSd");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("5a13e1c0",l,!0)}});