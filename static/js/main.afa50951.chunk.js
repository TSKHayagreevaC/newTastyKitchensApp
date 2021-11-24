(this["webpackJsonptasty-kitchens"]=this["webpackJsonptasty-kitchens"]||[]).push([[0],{42:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(32),c=a.n(r),i=a(6),o=a(4),l=a(11),u=a.n(l),d=a(18),j=a(7),m=a(8),b=a(10),h=a(9),g=a(14),p=a.n(g),O=(a(42),a(1)),x=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",displayErrorMessage:!1,errorMessage:""},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onChangePassword=function(){var t=Object(d.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({password:a.target.value});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onLoginSuccess=function(t){var a=e.props.history;p.a.set("jwt_token",t,{expires:30,path:"/"}),a.replace("/")},e.onLoginFailure=function(t){e.setState({displayErrorMessage:!0,errorMessage:t})},e.onSubmitLoginForm=function(){var t=Object(d.a)(u.a.mark((function t(a){var n,s,r,c,i,o,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,s=n.username,r=n.password,c={username:s,password:r},"https://apis.ccbp.in/login",i={method:"POST",body:JSON.stringify(c)},t.next=7,fetch("https://apis.ccbp.in/login",i);case 7:return o=t.sent,t.next=10,o.json();case 10:l=t.sent,o.ok?e.onLoginSuccess(l.jwt_token):e.onLoginFailure(l.error_msg);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.errorMessage,a=e.displayErrorMessage;return void 0!==p.a.get("jwt_token")?Object(O.jsx)(o.a,{to:"/"}):Object(O.jsxs)("div",{className:"login-bg-container",children:[Object(O.jsx)("img",{className:"small-login-image",src:"https://res.cloudinary.com/tskhayagreevac/image/upload/v1634731916/Rectangle_1457_v0vynx.jpg",alt:"website logo"}),Object(O.jsxs)("div",{className:"login-form-container",children:[Object(O.jsxs)("form",{className:"login-form",onSubmit:this.onSubmitLoginForm,children:[Object(O.jsx)("img",{className:"login-form-logo",src:"https://res.cloudinary.com/tskhayagreevac/image/upload/v1635642150/Group_7420_1_foidv5.png",alt:"website logo"}),Object(O.jsx)("h1",{className:"login-tasty-kitchens-heading",children:"Tasty Kitchens"}),Object(O.jsx)("h1",{className:"login-form-heading",children:"Login"}),Object(O.jsx)("label",{htmlFor:"formUsername",className:"login-form-label",children:"USERNAME"}),Object(O.jsx)("input",{id:"formUsername",className:"login-input-style",type:"text",onChange:this.onChangeUsername}),Object(O.jsx)("label",{htmlFor:"formPassword",className:"login-form-label",children:"PASSWORD"}),Object(O.jsx)("input",{id:"formPassword",className:"login-input-style",type:"password",onChange:this.onChangePassword}),Object(O.jsx)("button",{type:"submit",className:"submit-button",children:"Login"})]}),a?Object(O.jsxs)("p",{className:"login-error-message",children:["*",t]}):null]}),Object(O.jsx)("img",{src:"https://res.cloudinary.com/tskhayagreevac/image/upload/v1634663585/Rectangle_1456_dyotst.jpg",alt:"website login",className:"login-body-image"})]})}}]),a}(n.Component),f=x,v=a(17),N=a(34),y=a.n(N),k=a(22),S=a.n(k),C=a(16),w=a(36),_=a(35),I=(a(81),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isHamburgerActive:!1,isCartRouteActive:!1},e.onClickHamburgers=function(){e.setState((function(e){return{isHamburgerActive:!e.isHamburgerActive}}))},e.onClickHamburgersCloseButton=function(){e.setState((function(e){return{isHamburgerActive:!e.isHamburgerActive}}))},e.onClickLogout=function(){var t=e.props.history;p.a.remove("jwt_token"),t.replace("/login")},e.displayHamburgerMenu=function(){var t=e.state.isCartRouteActive?"active":null;return Object(O.jsx)("div",{className:"header-small-links-bg-container",children:Object(O.jsxs)("ul",{className:"header-links-list-small",children:[Object(O.jsx)("li",{className:"larger-header-link-item",children:Object(O.jsx)(i.b,{to:"/",className:"nav-link-style ".concat(t),children:"Home"})}),Object(O.jsx)(i.b,{to:"/cart",className:"nav-link-style ".concat(t),children:Object(O.jsx)("li",{className:"larger-header-link-item",children:"Cart"})}),Object(O.jsx)("li",{className:"larger-header-link-item",children:Object(O.jsx)("button",{className:"logout-button",type:"button",onClick:e.onClickLogout,children:"Logout"})}),Object(O.jsx)("li",{className:"larger-header-link-item",children:Object(O.jsx)("button",{className:"hamburger-exit-button",type:"button",onClick:e.onClickHamburgersCloseButton,children:Object(O.jsx)("img",{src:"https://res.cloudinary.com/tskhayagreevac/image/upload/v1634812708/Shape_vgjjz5.jpg",alt:"exitButton",className:"exit-image"})})})]})})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isHamburgerActive,a=e.activeLinkClassName;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("nav",{children:Object(O.jsxs)("div",{className:"header-content-container",children:[Object(O.jsx)(i.b,{to:"/",className:"header-logo-link",children:Object(O.jsxs)("div",{className:"header-logo-link-container",children:[Object(O.jsx)("img",{className:"header-logo-image",src:"https://res.cloudinary.com/tskhayagreevac/image/upload/v1635642150/Group_7420_1_foidv5.png",alt:"website logo"}),Object(O.jsx)("h1",{className:"header-logo-text",children:"Tasty Kitchens"})]})}),Object(O.jsxs)("ul",{className:"header-links-list",children:[Object(O.jsx)(i.b,{to:"/",className:"nav-link-style ".concat(a),children:Object(O.jsx)("li",{className:"larger-header-link-item",children:"Home"})}),Object(O.jsx)(i.b,{to:"/cart",className:"nav-link-style ".concat(a),children:Object(O.jsx)("li",{className:"larger-header-link-item",children:"Cart"})}),Object(O.jsx)("li",{className:"larger-header-link-item",children:Object(O.jsx)("button",{className:"logout-button",type:"button",onClick:this.onClickLogout,children:"Logout"})})]}),Object(O.jsx)("button",{className:"hamburger-button",type:"button",onClick:this.onClickHamburgers,children:Object(O.jsx)(_.a,{size:"32"})})]})}),t?this.displayHamburgerMenu():null]})}}]),a}(n.Component)),R=Object(o.g)(I),L=a(20),P=(a(82),function(e){var t=e.restaurantItem;return Object(O.jsx)(i.b,{to:"/restaurant/".concat(t.id),className:"restaurant-link-style",children:Object(O.jsx)("li",{className:"restaurant-list-item",testid:"restaurant-item",children:Object(O.jsxs)("div",{className:"restaurant-cart-bg-container",children:[Object(O.jsx)("img",{className:"restaurant-card-image",src:t.imageUrl,alt:"restaurant"}),Object(O.jsxs)("div",{className:"restaurant-card-content",children:[Object(O.jsx)("p",{className:"restaurant-name",children:t.name}),Object(O.jsx)("p",{className:"restaurant-cuisine",children:t.cuisine}),Object(O.jsxs)("div",{className:"restaurant-card-rating-star",children:[Object(O.jsx)(L.a,{color:"#FFCC00"}),Object(O.jsx)("p",{className:"restaurant-card-rating-text",children:t.userRating.rating}),Object(O.jsxs)("p",{className:"restaurants-reviews-number",children:["(",t.userRating.totalReviews," rating)"]})]})]})]})})})}),D=a(23),T=(a(83),function(){return Object(O.jsxs)("div",{className:"footer-bg-container",children:[Object(O.jsxs)("div",{className:"footer-icon-container",children:[Object(O.jsx)("img",{className:"footer-icon",src:"https://res.cloudinary.com/tskhayagreevac/image/upload/v1635043150/Vector_yyxamo.png",alt:"website-footer-logo"}),Object(O.jsx)("h1",{className:"footer-heading",children:"Tasty Kitchens"})]}),Object(O.jsx)("p",{className:"footer-para",children:"The only thing we are serious about is food. Contact us on"}),Object(O.jsxs)("div",{className:"social-icons-container",children:[Object(O.jsx)(D.c,{className:"social-icon-style",testid:"pintrest-social-icon"}),Object(O.jsx)(D.b,{className:"social-icon-style",testid:"instagram-social-icon"}),Object(O.jsx)(D.d,{className:"social-icon-style",testid:"twitter-social-icon"}),Object(O.jsx)(D.a,{className:"social-icon-style",testid:"facebook-social-icon"})]})]})}),A=(a(84),[{id:0,displayText:"Highest",value:"Highest"},{id:2,displayText:"Lowest",value:"Lowest"}]),F="INITIAL",H="SUCCESS",U="FAILURE",B="IN_PROGRESS",E=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={apiStatus:F,activePage:1,LIMIT:9,sortByRatingValue:A[1].value,searchValue:"",carouselImageList:[],restaurantsList:[]},e.getRestaurantsList=Object(d.a)(u.a.mark((function t(){var a,n,s,r,c,i,o,l,d,j,m,b;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:B}),a=e.state,n=a.activePage,s=a.LIMIT,r=a.searchValue,c=a.sortByRatingValue,i=(n-1)*s,o="https://apis.ccbp.in/restaurants-list?search=".concat(r,"&offset=").concat(i,"&limit=").concat(s,"&sort_by_rating=").concat(c),l=p.a.get("jwt_token"),d={headers:{Authorization:"Bearer ".concat(l)},method:"GET"},t.next=8,fetch(o,d);case 8:if(!(j=t.sent).ok){t.next=17;break}return t.next=12,j.json();case 12:m=t.sent,b=m.restaurants.map((function(e){return{costForTwo:e.cost_for_two,name:e.name,cuisine:e.cuisine,groupByTime:e.group_by_time,hasOnlineDelivery:e.has_online_delivery,hasTableBooking:e.has_table_booking,id:e.id,imageUrl:e.image_url,isDeliveredNow:e.is_delivering_now,location:e.location,menuType:e.menu_type,opensAt:e.opens_at,userRating:{rating:e.user_rating.rating,ratingColor:e.user_rating.rating_color,ratingText:e.user_rating.rating_text,totalReviews:e.user_rating.total_reviews}}})),e.setState({apiStatus:H,restaurantsList:b}),t.next=18;break;case 17:e.setState({apiStatus:U});case 18:case"end":return t.stop()}}),t)}))),e.getCarouselImages=Object(d.a)(u.a.mark((function t(){var a,n,s,r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:B}),"https://apis.ccbp.in/restaurants-list/offers",a=p.a.get("jwt_token"),n={headers:{Authorization:"Bearer ".concat(a)},method:"GET"},t.next=6,fetch("https://apis.ccbp.in/restaurants-list/offers",n);case 6:if(!(s=t.sent).ok){t.next=17;break}return t.next=10,s.json();case 10:return r=t.sent,t.next=13,r.offers.map((function(e){return{id:e.id,imageUlr:e.image_url}}));case 13:c=t.sent,e.setState({carouselImageList:c,apiStatus:H}),t.next=18;break;case 17:e.setState({apiStatus:U});case 18:case"end":return t.stop()}}),t)}))),e.onClickTryAgainButton=function(){e.getCarouselImages()},e.renderOffersFailureContainer=function(){return Object(O.jsx)("div",{className:"slick-not-found-bg-container",children:Object(O.jsxs)("div",{className:"slick-not-found-content-container",children:[Object(O.jsx)("img",{src:"https://res.cloudinary.com/tskhayagreevac/image/upload/v1634989299/erroring_1_vevkhn.jpg",alt:"not found",className:"slick-not-found-image"}),Object(O.jsx)("h1",{className:"not-found-heading",children:"Offers Not Found"}),Object(O.jsx)("p",{className:"not-found-para",children:"we are sorry, the offers are not found. Please try again..."}),Object(O.jsx)("button",{type:"button",className:"home-page-button",onClick:e.onClickTryAgainButton,children:"Try Again"})]})})},e.renderSlickLoader=function(){return Object(O.jsx)("div",{className:"slick-loader-bg-container",testid:"restaurants-offers-loader",children:Object(O.jsx)(S.a,{type:"TailSpin",color:"#334155"})})},e.renderReactSlider=function(){var t=e.state.carouselImageList;return Object(O.jsx)(y.a,Object(v.a)(Object(v.a)({className:"react-slick-slider-style"},{className:"slider-style",infinite:!0,dots:!0,autoplay:!0,speed:2e3,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e){return Object(O.jsx)("div",{className:"react-slider-list-item",children:Object(O.jsx)("img",{className:"carousel-image-style",src:e.imageUlr,alt:"offer"})},e.id)}))}))},e.renderReactSliderContainer=function(){switch(e.state.apiStatus){case H:return e.renderReactSlider();case U:return e.renderOffersFailureContainer();case B:return e.renderSlickLoader();default:return null}},e.onChangeSelectValue=function(t){e.setState({sortByRatingValue:t.target.value},e.getRestaurantsList)},e.incrementPageNumber=function(){e.state.activePage<4&&e.setState((function(e){return{activePage:e.activePage+1}}),e.getRestaurantsList)},e.decrementPageNumber=function(){e.state.activePage>1&&e.setState((function(e){return{activePage:e.activePage-1}}),e.getRestaurantsList)},e.renderLoader=function(){return Object(O.jsx)("div",{className:"loader-bg-container",testid:"restaurants-list-loader",children:Object(O.jsx)(S.a,{type:"TailSpin",color:"#334155",size:"22px"})})},e.renderFailureContainer=function(){return Object(O.jsx)("div",{className:"not-found-bg-container",children:Object(O.jsxs)("div",{className:"not-found-content-container",children:[Object(O.jsx)("img",{src:"https://res.cloudinary.com/tskhayagreevac/image/upload/v1634989299/erroring_1_vevkhn.jpg",alt:"not found"}),Object(O.jsx)("h1",{className:"not-found-heading",children:"Page Not Found"}),Object(O.jsx)("p",{className:"not-found-para",children:"we are sorry, the page you requested could not be found. Please go back to the homepage"}),Object(O.jsx)("button",{type:"button",className:"home-page-button",onClick:e.onClickHomeButton,children:"Home Page"})]})})},e.renderRestaurantsList=function(){var t=e.state,a=t.restaurantsList,n=t.activePage;return Object(O.jsxs)("div",{className:"home-content-container",children:[Object(O.jsx)("ul",{className:"restaurants-list",children:a.map((function(e){return Object(O.jsx)(P,{restaurantItem:e},e.id)}))}),Object(O.jsxs)("div",{className:"pagination-container",children:[Object(O.jsx)("button",{className:"pagination-button",type:"button",onClick:e.decrementPageNumber,testid:"pagination-left-button",children:Object(O.jsx)(C.a,{size:"24px",color:"#334155"})}),Object(O.jsxs)("p",{className:"pagination-text",children:[Object(O.jsx)("span",{testid:"active-page-number",children:"".concat(n)})," of 4"]}),Object(O.jsx)("button",{className:"pagination-button",type:"button",onClick:e.incrementPageNumber,testid:"pagination-right-button",children:Object(O.jsx)(C.b,{size:"24px",color:"#334155"})})]})]})},e.renderHome=function(){switch(e.state.apiStatus){case H:return e.renderRestaurantsList();case U:return e.renderFailureContainer();case B:return e.renderLoader();default:return null}},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getCarouselImages(),this.getRestaurantsList()}},{key:"render",value:function(){var e=this.state.sortByRatingValue;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(R,{}),Object(O.jsxs)("div",{className:"home-main-content-container",children:[this.renderReactSliderContainer(),Object(O.jsxs)("div",{className:"home-content-container",children:[Object(O.jsxs)("div",{className:"home-top-container",children:[Object(O.jsxs)("div",{className:"home-heading-para-container",children:[Object(O.jsx)("h1",{className:"home-container-heading",children:"Popular Restaurants"}),Object(O.jsx)("p",{className:"home-content-para",children:"Select Your favourite restaurant special dish and make your day happy..."})]}),Object(O.jsxs)("div",{className:"dropdown-container",children:[Object(O.jsx)(w.a,{size:"24px"}),Object(O.jsx)("p",{className:"sort-by-para",children:"Sort By"}),Object(O.jsx)("select",{value:e,onChange:this.onChangeSelectValue,className:"drop-down-select",children:A.map((function(e){return Object(O.jsx)("option",{className:"drop-down-option",value:e.value,children:"".concat(e.displayText)},e.id)}))})]})]}),Object(O.jsx)("hr",{className:"hr-style"})]}),this.renderHome()]}),Object(O.jsx)(T,{})]})}}]),a}(n.Component),J=E,M=(a(85),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onDecrement=function(){var t=e.props,a=t.cartListItem,n=t.reloadCart,s=JSON.parse(localStorage.getItem("cartData")),r=s.find((function(e){return e.id===a.id}));if(r.quantity>1){var c=r.quantity-1,i=Object(v.a)(Object(v.a)({},a),{},{quantity:c}),o=s.filter((function(e){return e.id!==a.id})),l=s.findIndex((function(e){return e.id===a.id}));o.splice(l,0,i);var u=JSON.stringify(o);localStorage.setItem("cartData",u),n()}else{var d=s.filter((function(e){return e.id!==a.id})),j=JSON.stringify(d);localStorage.setItem("cartData",j),n()}},e.onIncrement=function(){var t=e.props,a=t.cartListItem,n=t.reloadCart,s=JSON.parse(localStorage.getItem("cartData")),r=s.find((function(e){return e.id===a.id})).quantity+1,c=Object(v.a)(Object(v.a)({},a),{},{quantity:r}),i=s.filter((function(e){return e.id!==a.id})),o=s.findIndex((function(e){return e.id===a.id}));i.splice(o,0,c);var l=JSON.stringify(i);localStorage.setItem("cartData",l),n()},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.cartListItem,t=JSON.parse(localStorage.getItem("cartData")).find((function(t){return t.id===e.id}));return Object(O.jsxs)("div",{className:"item-counter-container",children:[Object(O.jsx)("button",{className:"cart-item-decrement-button",type:"button",onClick:this.onDecrement,testid:"decrement-count",children:"-"}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"item-count",testid:"active-count",children:t.quantity})}),Object(O.jsx)("button",{className:"cart-item-increment-button",type:"button",onClick:this.onIncrement,testid:"increment-count",children:"+"})]})}}]),a}(n.Component)),V=M,q=(a(86),function(e){var t=e.foodItem,a=e.onAddReloadRestaurantDetails,n=function(){var e={cost:t.cost,quantity:1,id:t.id,imageUrl:t.imageUrl,name:t.name};if(null===localStorage.getItem("cartData")){var n=[];n.push(e);var s=JSON.stringify(n);localStorage.setItem("cartData",s)}else{var r=JSON.parse(localStorage.getItem("cartData"));if(void 0!==r.find((function(t){return t.id===e.id})))console.log("item is already saved");else{r.push(e);var c=JSON.stringify(r);localStorage.setItem("cartData",c)}}a()};return Object(O.jsx)("li",{className:"restaurant-details-food-item",testid:"foodItem",children:Object(O.jsxs)("div",{className:"restaurant-details-food-item-container",children:[Object(O.jsx)("img",{className:"restaurant-details-food-item-image",src:t.imageUrl,alt:"foodItem"}),Object(O.jsxs)("div",{className:"restaurant-details-food-item-content-container",children:[Object(O.jsx)("h1",{className:"food-item-head-text",children:t.name}),Object(O.jsxs)("div",{className:"cost-symbol-row-container",children:[Object(O.jsx)(C.c,{}),Object(O.jsx)("p",{className:"restaurant-details-food-item-cost-text",children:t.cost})]}),Object(O.jsxs)("div",{className:"restaurant-details-rating-row-container",children:[Object(O.jsx)(L.a,{color:"#FFCC00"}),Object(O.jsx)("p",{className:"restaurant-details-food-item-rating-text",children:t.rating})]}),function(){var e=JSON.parse(localStorage.getItem("cartData"));return null===e||void 0===e.find((function(e){return e.id===t.id}))?Object(O.jsx)("button",{className:"add-food-item-button",type:"button",onClick:n,children:"Add"}):Object(O.jsx)(V,{cartListItem:t,reloadCart:a})}()]})]})})}),z=(a(87),"SUCCESS"),G="FAILURE",Y="IN_PROGRESS",K=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={apiStatus:z,restaurantDetails:[],foodItems:[],reloadRestaurantDetails:!1},e.getRestaurantDetails=Object(d.a)(u.a.mark((function t(){var a,n,s,r,c,i,o,l,d,j;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:Y}),a=e.props.match,n=a.params,s=n.id,r=p.a.get("jwt_token"),c="https://apis.ccbp.in/restaurants-list/".concat(s),i={headers:{Authorization:"Bearer ".concat(r)},method:"GET"},t.next=9,fetch(c,i);case 9:if(!(o=t.sent).ok){t.next=19;break}return t.next=13,o.json();case 13:l=t.sent,d={costForTwo:l.cost_for_two,cuisine:l.cuisine,id:l.id,imageUrl:l.image_url,itemsCount:l.items_count,location:l.location,name:l.name,opensAt:l.opens_at,rating:l.rating,reviewsCount:l.reviews_count},j=l.food_items.map((function(e){return{cost:e.cost,foodType:e.food_type,id:e.id,imageUrl:e.image_url,name:e.name,rating:e.rating}})),e.setState({restaurantDetails:d,foodItems:j,apiStatus:z}),t.next=20;break;case 19:e.setState({apiStatus:G});case 20:case"end":return t.stop()}}),t)}))),e.onAddReloadRestaurantDetails=function(){e.setState((function(e){return{reloadRestaurantDetails:!e.reloadRestaurantDetails}}))},e.renderLoader=function(){return Object(O.jsx)("div",{className:"loader-bg-container",testid:"restaurant-details-loader",children:Object(O.jsx)(S.a,{type:"TailSpin",color:"#334155",size:"22px"})})},e.renderFailureContainer=function(){return Object(O.jsx)("div",{className:"not-found-bg-container",children:Object(O.jsxs)("div",{className:"not-found-content-container",children:[Object(O.jsx)("img",{src:"https://res.cloudinary.com/tskhayagreevac/image/upload/v1634989299/erroring_1_vevkhn.jpg",alt:"not found"}),Object(O.jsx)("h1",{className:"not-found-heading",children:"Page Not Found"}),Object(O.jsx)("p",{className:"not-found-para",children:"we are sorry, the page you requested could not be found. Please go back to the homepage"}),Object(O.jsx)("button",{type:"button",className:"home-page-button",onClick:e.onClickHomeButton,children:"Home Page"})]})})},e.renderRestaurantDetails=function(){var t=e.state,a=t.restaurantDetails,n=t.foodItems;return Object(O.jsxs)("div",{className:"restaurant-details-container",children:[Object(O.jsxs)("div",{className:"restaurant-details-top-container",children:[Object(O.jsx)("img",{className:"restaurant-details-top-image",src:a.imageUrl,alt:"restaurant"}),Object(O.jsxs)("div",{className:"restaurant-details-top-content-container",children:[Object(O.jsx)("h1",{className:"restaurant-details-top-heading",children:a.name}),Object(O.jsx)("p",{className:"restaurant-details-top-para",children:a.cuisine}),Object(O.jsx)("p",{className:"restaurant-details-top-para",children:a.location}),Object(O.jsxs)("div",{className:"restaurant-details-rating-cost-container",children:[Object(O.jsxs)("div",{className:"restaurant-details-rating-container",children:[Object(O.jsxs)("div",{className:"restaurant-details-rating-row-container",children:[Object(O.jsx)(L.a,{color:"#ffffff"}),Object(O.jsx)("p",{className:"restaurant-details-rating-text",children:a.rating})]}),Object(O.jsx)("p",{className:"restaurant-details-rating-count",children:"".concat(a.reviewsCount,"+ Rating")})]}),Object(O.jsx)("hr",{className:"restaurant-details-line"}),Object(O.jsxs)("div",{className:"restaurant-details-cost-container",children:[Object(O.jsxs)("div",{className:"cost-symbol-row-container",children:[Object(O.jsx)(C.c,{color:"#ffffff"}),Object(O.jsx)("p",{className:"restaurant-details-cost-text",children:a.costForTwo})]}),Object(O.jsx)("p",{className:"cost-for-two-text",children:"Cost for two"})]})]})]})]}),Object(O.jsx)("ul",{className:"restaurant-details-food-items-list",children:n.map((function(t){return Object(O.jsx)(q,{foodItem:t,onAddReloadRestaurantDetails:e.onAddReloadRestaurantDetails},t.id)}))}),Object(O.jsx)(T,{})]})},e.renderRestaurantDetailsPage=function(){switch(e.state.apiStatus){case z:return e.renderRestaurantDetails();case G:return e.renderFailureContainer();case Y:return e.renderLoader();default:return null}},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getRestaurantDetails()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"restaurant-details-bg-container",children:[Object(O.jsx)(R,{}),this.renderRestaurantDetailsPage()]})}}]),a}(n.Component),Q=K,W=(a(88),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cartListItem,a=e.reloadCart;return Object(O.jsx)("li",{className:"cart-list-item",children:Object(O.jsxs)("div",{className:"cart-list-item-container",testid:"cartItem",children:[Object(O.jsx)("img",{className:"cart-item-image-small",src:t.imageUrl,alt:"cartImage"}),Object(O.jsxs)("div",{className:"cart-item-container",children:[Object(O.jsxs)("div",{className:"cart-item-image-name-container",children:[Object(O.jsx)("img",{className:"cart-list-item-image",src:t.imageUrl,alt:"cartImage"}),Object(O.jsx)("h1",{className:"cart-item-name",children:t.name})]}),Object(O.jsx)("div",{className:"cart-item-quantity-container",children:Object(O.jsx)(V,{cartListItem:t,reloadCart:a})}),Object(O.jsxs)("div",{className:"cart-item-price-container",children:[Object(O.jsx)(C.c,{size:"20px"}),Object(O.jsx)("p",{className:"cart-item-price-text",children:t.cost})]})]})]})})}}]),a}(n.Component)),X=W,Z=(a(89),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={reloadCart:!1,placedOrderSuccessfully:!1},e.reloadCart=function(){e.setState((function(e){return{reloadCart:!e.reloadCart}}))},e.onClickPlaceOrder=function(){e.setState({placedOrderSuccessfully:!0}),localStorage.removeItem("cartData")},e.renderSuccessFullyPlacedOrderPage=function(){return Object(O.jsxs)("div",{className:"placed-order-success-page",children:[Object(O.jsx)("img",{className:"placed-order-success-image",src:"https://res.cloudinary.com/tskhayagreevac/image/upload/v1635641160/Vector_1_xgk7ng.png",alt:"placedOrder"}),Object(O.jsx)("h1",{className:"placed-order-success-heading",children:"Payment Successful"}),Object(O.jsx)("p",{className:"placed-order-success-para",children:"Thank you for ordering Your payment is successfully completed."}),Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)("button",{className:"empty-cart-button",type:"button",children:"Go To Home Page"})})]})},e.renderEmptyCartView=function(){return Object(O.jsxs)("div",{className:"empty-cart-container",children:[Object(O.jsx)("img",{className:"empty-cart-image",src:"https://res.cloudinary.com/tskhayagreevac/image/upload/v1635614049/OBJECTS_prg6sc.png",alt:"empty cart"}),Object(O.jsx)("h1",{className:"empty-cart-heading",children:"No Order Yet!"}),Object(O.jsx)("p",{className:"empty-cart-text",children:"Your cart is empty. Add something from the menu."}),Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)("button",{className:"empty-cart-button",type:"button",children:"Order Now"})})]})},e.renderCartListView=function(){var t=JSON.parse(localStorage.getItem("cartData")),a=t.map((function(e){return e.cost*e.quantity})),n=0;return a.forEach((function(e){n+=e})),Object(O.jsx)("div",{className:"cart-list-bg-container",children:Object(O.jsxs)("div",{className:"cart-items-list-container",children:[Object(O.jsxs)("div",{className:"cart-items-list-heading-container",children:[Object(O.jsx)("p",{className:"cart-list-heading",children:"Item"}),Object(O.jsx)("p",{className:"cart-list-heading",children:"Quantity"}),Object(O.jsx)("p",{className:"cart-list-heading",children:"Price"})]}),Object(O.jsx)("ul",{className:"cart-items-list",children:t.map((function(t){return Object(O.jsx)(X,{cartListItem:t,reloadCart:e.reloadCart},t.id)}))}),Object(O.jsx)("hr",{className:"cart-list-line"}),Object(O.jsxs)("div",{className:"order-price-container",children:[Object(O.jsx)("h1",{className:"order-items-heading",children:"Order Total:"}),Object(O.jsxs)("div",{className:"order-total-count-container",children:[Object(O.jsx)(C.c,{size:"32px",color:"#3e4c59"}),Object(O.jsx)("h1",{className:"order-total-count",testid:"total-price",children:n})]})]}),Object(O.jsx)("button",{className:"place-order-button",type:"button",onClick:e.onClickPlaceOrder,children:"Place Order"})]})})},e.renderCartPage=function(){var t=localStorage.getItem("cartData"),a=JSON.parse(t),n=null===a||0===a.length;return Object(O.jsx)(O.Fragment,{children:n?e.renderEmptyCartView():e.renderCartListView()})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.placedOrderSuccessfully;return Object(O.jsxs)("div",{className:"cart-bg-container",children:[Object(O.jsx)(R,{}),e?this.renderSuccessFullyPlacedOrderPage():this.renderCartPage()]})}}]),a}(n.Component)),$=Z,ee=(a(90),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"not-found-bg-container",children:[Object(O.jsx)(R,{}),Object(O.jsx)("div",{className:"page-not-found-bg-container",children:Object(O.jsxs)("div",{className:"page-not-found-content-container",children:[Object(O.jsx)("img",{src:"https://res.cloudinary.com/tskhayagreevac/image/upload/v1634989299/erroring_1_vevkhn.jpg",alt:"not found",className:"page-not-found-image"}),Object(O.jsx)("h1",{className:"page-not-found-heading",children:"Page Not Found"}),Object(O.jsx)("p",{className:"page-not-found-para",children:"we are sorry, the page you requested could not be found Please go back to the homepage"}),Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)("button",{type:"button",className:"home-page-button",children:"Home Page"})})]})}),Object(O.jsx)(T,{})]})}}]),a}(n.Component)),te=ee,ae=function(e){return void 0===p.a.get("jwt_token")?Object(O.jsx)(o.a,{to:"/login"}):Object(O.jsx)(o.b,Object(v.a)({},e))},ne=(a(91),function(){return Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{exact:!0,path:"/login",component:f}),Object(O.jsx)(ae,{exact:!0,path:"/",component:J}),Object(O.jsx)(ae,{exact:!0,path:"/restaurant/:id",component:Q}),Object(O.jsx)(ae,{exact:!0,path:"/cart",component:$}),Object(O.jsx)(o.b,{exact:!0,path:"/not-found",component:te}),Object(O.jsx)(o.a,{to:"/not-found"})]})});c.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(ne,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.afa50951.chunk.js.map