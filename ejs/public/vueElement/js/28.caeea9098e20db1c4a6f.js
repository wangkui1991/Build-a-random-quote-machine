webpackJsonp([28],{"5NwD":function(t,e){t.exports={draw:1,recordsTotal:5753,recordsFiltered:5753,data:[{id:10324,sort:-1,bar_code:"6944649700058",goods_name:"景田纯净水 360ml*24/件",classify_name:"饼干/威化"},{id:10321,sort:0,bar_code:"1231",goods_name:"1234",classify_name:"饮用水"},{id:10333,sort:0,bar_code:"6918423050035",goods_name:"美年达橙味600ml*15/件",classify_name:"饮料牛奶"},{id:70,sort:1,bar_code:"6922255451427",goods_no:"AP0028",goods_name:"景田百岁山570ml",classify_name:"11111"},{id:72,sort:1,bar_code:"4003363",goods_name:"三元 极致 脱脂巴氏杀菌鲜牛乳 鲜牛奶950ml/盒",classify_name:"蒙牛"},{id:2126,sort:1,bar_code:"6941499101219",goods_name:"福临门压榨一级葵花籽油1.8L*6/箱",classify_name:"葵花油"},{id:2127,sort:1,bar_code:"6902402186808",goods_name:"雅士利正味营养麦片 600g/包",classify_name:"冲调粥糊类"},{id:2128,sort:1,bar_code:"6902402500277",goods_name:"雅士利红枣枸杞燕麦片 600g/包",classify_name:"冲调粥糊类"},{id:2129,sort:1,bar_code:"6902402500284",goods_name:"雅士利真果仁燕麦片 600g/包",classify_name:"冲调粥糊类"},{id:2130,sort:1,bar_code:"6902402032105",goods_name:"雅士利核桃高钙燕麦片 600g/包",classify_name:"冲调粥糊类"}]}},bn4O:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("BO1k"),l=a.n(i),s=a("woOf"),n=a.n(s),r=a("viA7"),o=a("cAgV"),c=a("0xDb"),d=[{key:"2",display_name:"审核通过"},{key:"1",display_name:"待审核"},{key:"0",display_name:"退回"}],p=d.reduce(function(t,e){return t[e.key]=e.display_name,t},{}),m=a("5NwD"),u={name:"complexTable",directives:{waves:o.a},data:function(){return{tableKey:0,list:m.data,total:20,listLoading:!1,listQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:d,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},filters:{statusFilter:function(t){return{published:"success",draft:"info",deleted:"danger"}[t]},typeFilter:function(t){return p[t]}},methods:{opType:function(t,e){return 2==t.opType?"修改":1==t.opType?"增加":"未知"},getList:function(){var t=this;this.listLoading=!0,Object(r.b)(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作成功",type:"success"}),t.status=e},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&(t.temp.id=parseInt(100*Math.random())+1024,t.temp.author="vue-element-admin",Object(r.a)(t.temp).then(function(){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))})},handleUpdate:function(t){var e=this;this.temp=n()({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){if(e){var a=n()({},t.temp);a.timestamp=+new Date(a.timestamp),Object(r.d)(a).then(function(){var e=!0,a=!1,i=void 0;try{for(var s,n=l()(t.list);!(e=(s=n.next()).done);e=!0){var r=s.value;if(r.id===t.temp.id){var o=t.list.indexOf(r);t.list.splice(o,1,t.temp);break}}}catch(t){a=!0,i=t}finally{try{!e&&n.return&&n.return()}finally{if(a)throw i}}t.dialogFormVisible=!1,t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},handleFetchPv:function(t){var e=this;Object(r.c)(t).then(function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0})},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e(65),a.e(64)]).then(a.bind(null,"zWO4")).then(function(e){var a=t.formatJson(["timestamp","title","type","importance","status"],t.list);e.export_json_to_excel(["timestamp","title","type","importance","status"],a,"table-list"),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(c.b)(e[t]):e[t]})})}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"商品条码"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"商品编码"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"商品名称"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("\n      "+t._s(t.$t("table.search"))+"\n    ")]),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.add}},[t._v(t._s(t.$t("premiss.filter.add")))])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"给我一点时间",border:"",stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"selection","min-width":"55",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"classify_name",label:"展示分类","min-width":"150",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"bar_code",label:"商品条码","min-width":"150",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"goods_no",label:"商品编码","min-width":"150",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"goods_name",label:"商品名称","min-width":"150",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":"150",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:t.$t("supplier.table.actions"),"min-width":"230","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("\n          "+t._s(t.$t("supplier.table.edit"))+"\n        ")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(a){t.handleModifyStatus(e.row,"deleted")}}},[t._v("\n          "+t._s(t.$t("supplier.table.delete"))+"\n        ")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:t.$t("table.type"),prop:"type"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.type,callback:function(e){t.$set(t.temp,"type",e)},expression:"temp.type"}},t._l(t.calendarTypeOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.date"),prop:"timestamp"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"Please pick a date"},model:{value:t.temp.timestamp,callback:function(e){t.$set(t.temp,"timestamp",e)},expression:"temp.timestamp"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.title"),prop:"title"}},[a("el-input",{model:{value:t.temp.title,callback:function(e){t.$set(t.temp,"title",e)},expression:"temp.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.status")}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.status,callback:function(e){t.$set(t.temp,"status",e)},expression:"temp.status"}},t._l(t.statusOptions,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.importance")}},[a("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"],max:3},model:{value:t.temp.importance,callback:function(e){t.$set(t.temp,"importance",e)},expression:"temp.importance"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.remark")}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"Please input"},model:{value:t.temp.remark,callback:function(e){t.$set(t.temp,"remark",e)},expression:"temp.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("table.cancel")))]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v(t._s(t.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v(t._s(t.$t("table.confirm")))])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"Reading statistics",visible:t.dialogPvVisible},on:{"update:visible":function(e){t.dialogPvVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v(t._s(t.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]},b=a("VU/8")(u,f,!1,null,null,null);e.default=b.exports}});