webpackJsonp([48],{U4mc:function(e,t){e.exports={draw:1,recordsTotal:88,recordsFiltered:88,data:[{updateId:1,delFlag:"1",createId:1,audits:null,billNo:"MC20180102115311",checkStatus:"2",opType:"2",updateDate:1514908396e3,createDate:1514908391e3,createName:"admin",updateName:"admin",merNum:1,reason:null,id:108},{updateId:1,delFlag:"1",createId:1,audits:null,billNo:"MC20171222094207",checkStatus:"1",opType:"1",updateDate:1513950128e3,createDate:1513950128e3,createName:"admin",updateName:"admin",merNum:1,reason:null,id:107},{updateId:1,delFlag:"1",createId:1,audits:null,billNo:"MC20171222093452",checkStatus:"1",opType:"1",updateDate:1513949693e3,createDate:1513949693e3,createName:"admin",updateName:"admin",merNum:1,reason:null,id:106},{updateId:1,delFlag:"1",createId:1,audits:null,billNo:"MC20171219111405",checkStatus:"2",opType:"1",updateDate:151369645e4,createDate:1513696445e3,createName:"admin",updateName:"admin",merNum:1,reason:null,id:105},{updateId:1,delFlag:"1",createId:1,audits:null,billNo:"MC20171219044759",checkStatus:"2",opType:"2",updateDate:1513673283e3,createDate:1513673279e3,createName:"admin",updateName:"admin",merNum:1,reason:null,id:104},{updateId:1,delFlag:"1",createId:1,audits:null,billNo:"MC20171219044442",checkStatus:"2",opType:"1",updateDate:1513673086e3,createDate:1513673082e3,createName:"admin",updateName:"admin",merNum:1,reason:null,id:103},{updateId:1,delFlag:"1",createId:1,audits:null,billNo:"MC20171218052128",checkStatus:"2",opType:"1",updateDate:1513588892e3,createDate:1513588888e3,createName:"admin",updateName:"admin",merNum:1,reason:null,id:102},{updateId:1,delFlag:"1",createId:1,audits:null,billNo:"MC20171211104918",checkStatus:"2",opType:"1",updateDate:1513254547e3,createDate:1513003758e3,createName:"admin",updateName:"admin",merNum:2,reason:null,id:101},{updateId:1,delFlag:"1",createId:1,audits:null,billNo:"MC20171209020546",checkStatus:"1",opType:"2",updateDate:1512756347e3,createDate:1512756347e3,createName:"admin",updateName:"admin",merNum:1,reason:null,id:100},{updateId:1,delFlag:"1",createId:1,audits:null,billNo:"MC20171209120858",checkStatus:"1",opType:"1",updateDate:1512749339e3,createDate:1512749339e3,createName:"admin",updateName:"admin",merNum:1,reason:null,id:99}]}},xcju:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("BO1k"),i=a.n(l),n=a("woOf"),s=a.n(n),r=a("viA7"),o=a("cAgV"),d=a("0xDb"),u=a("kdCj"),c=[{key:"2",display_name:"审核通过"},{key:"1",display_name:"待审核"},{key:"0",display_name:"退回"}],p=c.reduce(function(e,t){return e[t.key]=t.display_name,e},{}),m=a("U4mc"),y={name:"complexTable",directives:{waves:o.a},data:function(){return{tableKey:0,list:m.data,total:20,listLoading:!1,listQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:c,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogadd:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1,addContent:{title:"新增数据字典信息",width:"90%",type:1,label:[{type:0,label:"商品名称",width:"150"},{type:0,label:"全称",width:"150"},{type:1,label:"类别",width:"150",options:["系统管理员","录入员","审核员","测试员","123"]},{type:0,label:"长（cm）",width:"100"},{type:0,label:"宽（cm）",width:"100"},{type:0,label:"高（cm）",width:"100"},{type:1,label:"品牌",width:"100",options:["系统管理员","录入员","审核员","测试员","123"]},{type:0,label:"毛重",width:"100"},{type:0,label:"条码",width:"100"},{type:0,label:"保质期",width:"100"},{type:0,label:"基本单位",width:"100"},{type:0,label:"备注",width:"100"},{type:0,label:"小图",width:"100"},{type:0,label:"主图",width:"100"},{type:0,label:"详情图",width:"100"},{type:0,label:"操作",width:"100"}],content:[{model:[]}]}}},filters:{statusFilter:function(e){return{published:"success",draft:"info",deleted:"danger"}[e]},typeFilter:function(e){return p[e]}},methods:{add:function(){this.$refs.addDialog.add()},opType:function(e){return 2==e.opType?"修改":1==e.opType?"增加":"未知"},getList:function(){var e=this;this.listLoading=!0,Object(r.b)(this.listQuery).then(function(t){e.list=t.data.items,e.total=t.data.total,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作成功",type:"success"}),e.status=t},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&(e.temp.id=parseInt(100*Math.random())+1024,e.temp.author="vue-element-admin",Object(r.a)(e.temp).then(function(){e.list.unshift(e.temp),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))})},handleUpdate:function(e){var t=this;this.temp=s()({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},updateData:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var a=s()({},e.temp);a.timestamp=+new Date(a.timestamp),Object(r.d)(a).then(function(){var t=!0,a=!1,l=void 0;try{for(var n,s=i()(e.list);!(t=(n=s.next()).done);t=!0){var r=n.value;if(r.id===e.temp.id){var o=e.list.indexOf(r);e.list.splice(o,1,e.temp);break}}}catch(e){a=!0,l=e}finally{try{!t&&s.return&&s.return()}finally{if(a)throw l}}e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(e){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var t=this.list.indexOf(e);this.list.splice(t,1)},handleFetchPv:function(e){var t=this;Object(r.c)(e).then(function(e){t.pvData=e.data.pvData,t.dialogPvVisible=!0})},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e(65),a.e(64)]).then(a.bind(null,"zWO4")).then(function(t){var a=e.formatJson(["timestamp","title","type","importance","status"],e.list);t.export_json_to_excel(["timestamp","title","type","importance","status"],a,"table-list"),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(d.b)(t[e]):t[e]})})}},components:{addDialog:u.a}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:e.$t("bill.filter.billNo")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:e.$t("bill.filter.checkStatus")},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.calendarTypeOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name+"("+e.key+")",value:e.key}})})),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:e.$t("bill.filter.goodsName")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:e.$t("bill.filter.goodsCode")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:e.$t("bill.filter.createName")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:e.$t("bill.filter.updateName")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:e.$t("bill.filter.startTime")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:e.$t("bill.filter.endTime")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n      "+e._s(e.$t("bill.filter.search"))+"\n    ")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.add}},[e._v("\n      "+e._s(e.$t("premiss.filter.add"))+"\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"给我一点时间",border:"",stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("bill.table.billNo"),width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.billNo))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"150px",align:"center",label:e.$t("bill.table.merNum")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.merNum))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"150",align:"center",label:e.$t("bill.table.createName")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.createName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"150",align:"center",label:e.$t("bill.table.updateName")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.updateName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"150",align:"center",label:e.$t("bill.table.checkStatus")},scopedSlots:e._u([{key:"default",fn:function(t){return["2"==t.row.checkStatus?a("span",{staticStyle:{color:"green"}},[e._v("审核通过")]):1==t.row.checkStatus?a("span",{staticStyle:{color:"orange"}},[e._v("待审核")]):a("span",{staticStyle:{color:"red"}},[e._v("退回")])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"150",align:"center",label:e.$t("bill.table.createDate")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.createDate))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"opType",align:"center",label:e.$t("bill.table.opType"),formatter:e.opType,width:"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("bill.table.actions"),fixed:"right","min-width":"180","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v("\n          "+e._s(e.$t("bill.table.edit"))+"\n        ")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(a){e.handleModifyStatus(t.row,"deleted")}}},[e._v("\n          "+e._s(e.$t("bill.table.delete"))+"\n        ")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:e.$t("table.type"),prop:"type"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.type,callback:function(t){e.$set(e.temp,"type",t)},expression:"temp.type"}},e._l(e.calendarTypeOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.date"),prop:"timestamp"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"Please pick a date"},model:{value:e.temp.timestamp,callback:function(t){e.$set(e.temp,"timestamp",t)},expression:"temp.timestamp"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.title"),prop:"title"}},[a("el-input",{model:{value:e.temp.title,callback:function(t){e.$set(e.temp,"title",t)},expression:"temp.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.status")}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}},e._l(e.statusOptions,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.importance")}},[a("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"],max:3},model:{value:e.temp.importance,callback:function(t){e.$set(e.temp,"importance",t)},expression:"temp.importance"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.remark")}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"Please input"},model:{value:e.temp.remark,callback:function(t){e.$set(e.temp,"remark",t)},expression:"temp.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"Reading statistics",visible:e.dialogPvVisible},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),e._v(" "),a("add-dialog",{ref:"addDialog",attrs:{addContent:e.addContent}})],1)},staticRenderFns:[]},f=a("VU/8")(y,b,!1,null,null,null);t.default=f.exports}});