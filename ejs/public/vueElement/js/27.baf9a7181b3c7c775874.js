webpackJsonp([27],{"1y+h":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("BO1k"),l=i.n(a),n=i("woOf"),r=i.n(n),s=i("viA7"),o=i("cAgV"),c=i("0xDb"),p=[{key:"2",display_name:"审核通过"},{key:"1",display_name:"待审核"},{key:"0",display_name:"退回"}],u=p.reduce(function(t,e){return t[e.key]=e.display_name,t},{}),m=i("GkC/"),d={name:"complexTable",directives:{waves:o.a},data:function(){return{tableKey:0,list:m.data,total:20,listLoading:!1,listQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:p,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},filters:{statusFilter:function(t){return{published:"success",draft:"info",deleted:"danger"}[t]},typeFilter:function(t){return u[t]}},methods:{productType:function(t,e){return 1==t.productType?"正常":2==t.productType?"积分":"未知"},limitType:function(t,e){return 1==t.limitType?"间隔时间":"未知"},limitType2:function(t,e){return 1==t.limitType?"已启用":"未知"},getList:function(){var t=this;this.listLoading=!0,Object(s.b)(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作成功",type:"success"}),t.status=e},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&(t.temp.id=parseInt(100*Math.random())+1024,t.temp.author="vue-element-admin",Object(s.a)(t.temp).then(function(){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))})},handleUpdate:function(t){var e=this;this.temp=r()({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){if(e){var i=r()({},t.temp);i.timestamp=+new Date(i.timestamp),Object(s.d)(i).then(function(){var e=!0,i=!1,a=void 0;try{for(var n,r=l()(t.list);!(e=(n=r.next()).done);e=!0){var s=n.value;if(s.id===t.temp.id){var o=t.list.indexOf(s);t.list.splice(o,1,t.temp);break}}}catch(t){i=!0,a=t}finally{try{!e&&r.return&&r.return()}finally{if(i)throw a}}t.dialogFormVisible=!1,t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},handleFetchPv:function(t){var e=this;Object(s.c)(t).then(function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0})},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([i.e(65),i.e(64)]).then(i.bind(null,"zWO4")).then(function(e){var i=t.formatJson(["timestamp","title","type","importance","status"],t.list);e.export_json_to_excel(["timestamp","title","type","importance","status"],i,"table-list"),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(c.b)(e[t]):e[t]})})}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticClass:"filter-container"},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:"请选择运营区"},model:{value:t.listQuery.importance,callback:function(e){t.$set(t.listQuery,"importance",e)},expression:"listQuery.importance"}},t._l(t.importanceOptions,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})})),t._v(" "),i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"商品编码"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"商品名称"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"货主名称"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:"--限购类型--"},model:{value:t.listQuery.importance,callback:function(e){t.$set(t.listQuery,"importance",e)},expression:"listQuery.importance"}},t._l(t.importanceOptions,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})})),t._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:"--数据状态--"},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},t._l(t.calendarTypeOptions,function(t){return i("el-option",{key:t.key,attrs:{label:t.display_name+"("+t.key+")",value:t.key}})})),t._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s(t.$t("table.search")))]),t._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.add}},[t._v(t._s(t.$t("premiss.filter.add")))])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"给我一点时间",border:"",stripe:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{type:"selection","min-width":"55",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"operateAreaCode",label:"运营区编码","min-width":"150",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"operateAreaName",label:"运营区名称","min-width":"150",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"productOwnerCode",label:"货主编码","min-width":"150",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"productOwnerName",label:"货主名称","min-width":"150",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"productCode",label:"商品编码","min-width":"150",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"",label:"商品条码","min-width":"150",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"productName",label:"商品名称","min-width":"150",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"productType",label:"商品类型","min-width":"150",formatter:t.productType,align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"limitQty",label:"限购数量","min-width":"150",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"limitType",label:"限购类型","min-width":"150",formatter:t.limitType,align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"intervalDay",label:"间隔天数","min-width":"150",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"startTime",label:"开始时间","min-width":"150",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"endTime",label:"结束时间","min-width":"150",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"createdTime",label:"创建时间","min-width":"150",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"limitType",label:"状态","min-width":"150",formatter:t.limitType2,align:"center"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:t.$t("supplier.table.actions"),fixed:"right","min-width":"180","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(i){t.handleUpdate(e.row)}}},[t._v(t._s(t.$t("supplier.table.edit")))]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(i){t.handleModifyStatus(e.row,"deleted")}}},[t._v(t._s(t.$t("supplier.table.delete")))])]}}])})],1),t._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1),t._v(" "),i("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"70px"}},[i("el-form-item",{attrs:{label:t.$t("table.type"),prop:"type"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.type,callback:function(e){t.$set(t.temp,"type",e)},expression:"temp.type"}},t._l(t.calendarTypeOptions,function(t){return i("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.date"),prop:"timestamp"}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"Please pick a date"},model:{value:t.temp.timestamp,callback:function(e){t.$set(t.temp,"timestamp",e)},expression:"temp.timestamp"}})],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.title"),prop:"title"}},[i("el-input",{model:{value:t.temp.title,callback:function(e){t.$set(t.temp,"title",e)},expression:"temp.title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.status")}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.status,callback:function(e){t.$set(t.temp,"status",e)},expression:"temp.status"}},t._l(t.statusOptions,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.importance")}},[i("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"],max:3},model:{value:t.temp.importance,callback:function(e){t.$set(t.temp,"importance",e)},expression:"temp.importance"}})],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.remark")}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"Please input"},model:{value:t.temp.remark,callback:function(e){t.$set(t.temp,"remark",e)},expression:"temp.remark"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("table.cancel")))]),t._v(" "),"create"==t.dialogStatus?i("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v(t._s(t.$t("table.confirm")))]):i("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v(t._s(t.$t("table.confirm")))])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"Reading statistics",visible:t.dialogPvVisible},on:{"update:visible":function(e){t.dialogPvVisible=e}}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{prop:"key",label:"Channel"}}),t._v(" "),i("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v(t._s(t.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]},b=i("VU/8")(d,y,!1,null,null,null);e.default=b.exports},"GkC/":function(t,e){t.exports={}}});