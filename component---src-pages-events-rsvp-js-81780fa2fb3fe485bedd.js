(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{539:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));n(17),n(9);var a=n(1),r=n.n(a),o=n(557),i=n(558),l=n(232),s=n.n(l),c=n(195),u=n(533);var h=n(535),d=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={loading:!0,error:!1,success:!1,eventInfo:{},rsvp:""},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=a.prototype;return l.getUrlVars=function(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,n,a){e[n]=a}));return e},l.componentDidMount=function(){var e=this,t=this.getUrlVars().id,n=this.getUrlVars().token;t&&n?s.a.getEvent(t).then((function(a){s.a.getRSVP(t,n).then((function(t){e.setState({success:!0,loading:!1,eventInfo:a,rsvp:t})}))})).catch((function(t){e.setState({error:!0})})):this.setState({error:!0})},l.render=function(){return r.a.createElement(u.a,{showLogo:!0},r.a.createElement(o.a,{container:!0,justify:"center"},r.a.createElement(i.a,{pt:25},r.a.createElement("div",null,this.state.loading&&!this.state.error&&r.a.createElement("div",null,r.a.createElement(h,{isLoading:this.state.loading,width:80,height:80,strokeWidth:4}),r.a.createElement(i.a,{pt:5},r.a.createElement("h1",null,"Loading event details..."))),this.state.error&&r.a.createElement("div",null,r.a.createElement("h1",null,"Couldn't fetch the details of that event"),r.a.createElement("br",null),r.a.createElement("p",null,"That event may have been deleted, or may be a private one.")),this.state.success&&!this.state.error&&r.a.createElement("div",null,r.a.createElement("h1",null,this.state.eventInfo.name),r.a.createElement("br",null),r.a.createElement("h3",null,"invited"==this.state.rsvp&&"You are currently invited for this event, will you be going for this event?","going"==this.state.rsvp&&"All good! You are going for this event.","not_going"==this.state.rsvp&&"You've responded with Not Going for this event"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(o.a,{container:!0,justify:"center"},r.a.createElement(i.a,{p:2},r.a.createElement(c.a,{variant:"contained",theme:"blue",id:"going_button"},"Yes, I'm going!")),r.a.createElement(i.a,{p:2},r.a.createElement(c.a,{variant:"contained",theme:"red",id:"not_going_button"},"Nope, I can't go :("))))))))},a}(r.a.Component)}}]);
//# sourceMappingURL=component---src-pages-events-rsvp-js-81780fa2fb3fe485bedd.js.map