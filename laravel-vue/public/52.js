(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1918:function(t,e,i){"use strict";i.r(e);var s=i(16),a={name:"Invoice",mounted:function(){s.c.index()},data:function(){return{image:i(341),title:"Invoice",invoice:{name:"Hello, Nik Jones",summary:"Order Summary",detail:"Order Detail",description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",order:[{orderDate:"Jan 17, 2016",orderStatus:2,orderID:"250028",billingAddress:"PO Box 16122 Collins Street West <br> Victoria 8007 Australia <br> Phone: +123 456 7890 <br> Email: demo@vito.com <br> Web: www.vito.com",shippingAddress:"PO Box 16122 Collins Street West <br> Victoria 8007 Australia <br> Phone: +123 456 7890 <br> Email: demo@vito.com <br> Web: www.vito.com"}],orderSummaryFields:[{key:"id",label:"#"},{key:"item",label:"Item"},{key:"quantity",label:"Quantity"},{key:"price",label:"Price"},{key:"total",label:"Total"}],orderSummary:[{id:1,item:{title:"Web Design",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},quantity:"5",price:"$120",total:"$2,880.00"},{id:2,item:{title:"Web Design",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},quantity:"5",price:"$120",total:"$2,880.00"},{id:3,item:{title:"Web Design",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},quantity:"5",price:"$120",total:"$2,880.00"},{id:4,item:{title:"Web Design",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},quantity:"5",price:"$120",total:"$2,880.00"}],OrderDetailField:[{key:"bank",label:"Bank"},{key:"accNo",label:"Acc.No"},{key:"dueDate",label:"Due Date"},{key:"subTotal",label:"Sub-total"},{key:"discount",label:"Discount"},{key:"total",label:"Total"}],OrderDetails:[{bank:"Threadneedle St",accNo:"12333456789",dueDate:"12 November 2019",subTotal:"$4597.50",discount:"10%",total:"$4137.75 USD"}],note:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}}}},r=i(8),n=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",{attrs:{lg:"12"}},[i("iq-card",{scopedSlots:t._u([{key:"body",fn:function(){return[i("b-row",[i("b-col",{attrs:{cols:"6"}},[i("img",{staticClass:"img-fluid w-20",attrs:{src:t.image,alt:"logo"}})]),t._v(" "),i("b-col",{attrs:{cols:"6","align-self":"center"}},[i("h4",{staticClass:"mb-0 float-right"},[t._v(t._s(t.title))])]),t._v(" "),i("b-col",{attrs:{sm:"12"}},[i("hr",{staticClass:"mt-3"}),t._v(" "),i("h5",{staticClass:"mb-0"},[t._v(t._s(t.invoice.name))]),t._v(" "),i("p",[t._v(t._s(t.invoice.description))])])],1),t._v(" "),i("b-row",[i("b-col",{attrs:{lg:"12"}},[i("div",{staticClass:"table-responsive-sm"},[i("b-table",{attrs:{items:t.invoice.order},scopedSlots:t._u([{key:"cell(orderStatus)",fn:function(e){return[i("span",{staticClass:"badge badge-danger"},[t._v("Unpaid")])]}},{key:"cell(billingAddress)",fn:function(e){return[i("p",{domProps:{innerHTML:t._s(e.value)}})]}},{key:"cell(shippingAddress)",fn:function(e){return[i("p",{domProps:{innerHTML:t._s(e.value)}})]}}])})],1)])],1),t._v(" "),i("b-row",[i("b-col",{attrs:{lg:"12"}},[i("h5",[t._v(t._s(t.invoice.summary))]),t._v(" "),i("div",{staticClass:"table-responsive-sm"},[i("b-table-simple",{staticClass:"text-center",attrs:{striped:""}},[i("thead",[i("tr",t._l(t.invoice.orderSummaryFields,(function(e,s){return i("th",{key:s,class:"item"===e.key?"text-left":""},[t._v(t._s(e.label))])})),0)]),t._v(" "),i("tbody",t._l(t.invoice.orderSummary,(function(e,s){return i("tr",{key:s},[t._l(t.invoice.orderSummaryFields,(function(s,a){return["id"===s.key?i("th",{key:s.key+a},[t._v(t._s(e[s.key]))]):"item"===s.key?i("td",{key:s.key+a,staticClass:"text-left"},[i("h6",{staticClass:"mb-0"},[t._v(t._s(e[s.key].title))]),t._v(" "),i("p",{staticClass:"mb-0"},[t._v(t._s(e[s.key].description))])]):i("td",{key:s.key+a,class:"total"===s.key?"font-weight-bold":""},[t._v(t._s(e[s.key]))])]}))],2)})),0)])],1),t._v(" "),i("h5",[t._v(t._s(t.invoice.detail))]),t._v(" "),i("div",{staticClass:"table-responsive-sm"},[i("b-table-simple",{attrs:{striped:""}},[i("thead",[i("tr",t._l(t.invoice.OrderDetailField,(function(e,s){return i("th",{key:s,class:"bank"===e.key?"text-left":""},[t._v(t._s(e.label))])})),0)]),t._v(" "),i("tbody",t._l(t.invoice.OrderDetails,(function(e,s){return i("tr",{key:s},[t._l(t.invoice.OrderDetailField,(function(s,a){return["bank"===s.key?i("th",{key:s.key+a},[t._v(t._s(e[s.key]))]):i("td",{key:s.key+a,class:"total"===s.key?"font-weight-bold":""},[t._v(t._s(e[s.key]))])]}))],2)})),0)])],1)]),t._v(" "),i("b-col",{staticClass:"text-right",attrs:{offset:"6",cols:"6"}},[i("b-button",{attrs:{variant:"link mr-3"}},[i("i",{staticClass:"ri-printer-line"}),t._v("\n                Download Print\n              ")]),t._v(" "),i("b-button",{attrs:{variant:"primary"}},[t._v("Submit")])],1),t._v(" "),i("b-col",{staticClass:"mt-3"},[i("b",{staticClass:"text-danger"},[t._v("Note")]),t._v(" "),i("p",[t._v(t._s(t.invoice.note))])])],1)]},proxy:!0}])})],1)],1)],1)}),[],!1,null,null,null);e.default=n.exports},341:function(t,e){t.exports="/images/logo.png?3991290d506d8a72174236635990f01d"}}]);
//# sourceMappingURL=52.js.map