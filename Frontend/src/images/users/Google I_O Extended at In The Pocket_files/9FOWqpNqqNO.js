if (self.CavalryLogger) { CavalryLogger.start_js(["vQmBY"]); }

__d('NotificationJewelReminder',['cx','fbt','Arbiter','DOMQuery','Image.react','ImageBlock.react','LayerFadeOnHide','LayerFadeOnShow','NotificationStore','NotificationUpdates','React','ReactDOM','Toggler','WorkFocusModeController','XUIContextualDialog.react','ge','idx','ifRequired','injectSubscriptionsHandler.react','intlList','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('WorkFocusModeController').WorkFocusMode,m=2,n='fbRequestsJewel',o='fbNotificationsJewel';j=babelHelpers.inherits(p,c('React').Component);k=j&&j.prototype;function p(s){'use strict';k.constructor.call(this,s);this.$JewelReminderDialogImpl3=function(){this.setState({shown:false},function(){this.props.onHide&&this.props.onHide();}.bind(this));}.bind(this);this.$JewelReminderDialogImpl4=function(){clearTimeout(this.$JewelReminderDialogImpl1);}.bind(this);this.$JewelReminderDialogImpl5=function(){this.$JewelReminderDialogImpl4();}.bind(this);this.$JewelReminderDialogImpl6=function(){this.$JewelReminderDialogImpl3();}.bind(this);this.$JewelReminderDialogImpl7=function(t){this.$JewelReminderDialogImpl3();this.props.onClick&&this.props.onClick(t);}.bind(this);this.state={shown:true};}p.prototype.componentWillMount=function(){'use strict';this.$JewelReminderDialogImpl1=c('setTimeoutAcrossTransitions')(this.$JewelReminderDialogImpl3,this.props.showTime);this.props.subscriptionsHandler.addSubscriptions(c('Arbiter').subscribe('layer_shown',function(s,t){if(t&&t.type==='Jewel')this.$JewelReminderDialogImpl3();}.bind(this)));c('ifRequired')('ClientChromeStore',function(s){this.$JewelReminderDialogImpl2=s.subscribe(function(){var t=s.getState();if(t.bluebar.activeFlyout.type!=null)this.$JewelReminderDialogImpl3();}.bind(this));}.bind(this));};p.prototype.componentWillUnmount=function(){'use strict';this.$JewelReminderDialogImpl4();if(this.$JewelReminderDialogImpl2){this.$JewelReminderDialogImpl2();this.$JewelReminderDialogImpl2=null;}};p.prototype.$JewelReminderDialogImpl8=function(){'use strict';var s=this.props,t=s.names,u=s.jewelType,v=s.unreadCount,w=t.map(function(x){return c('React').createElement('b',null,x);});if(u==='notification')return i._({"*":{"notifications":"{number} notifications from {notification senders}","notification":"{number} notification from {notification senders}"}},[i.param('number',v,[0]),i['enum'](v>1?'notifications':'notification',{notifications:'notifications',notification:'notification'}),i.param('notification senders',c('intlList')(w))]);return i._({"*":{"requests":"{number} friend requests from {request senders}","request":"{number} friend request from {request senders}"}},[i.param('number',v,[0]),i['enum'](v>1?'requests':'request',{requests:'requests',request:'request'}),i.param('request senders',c('intlList')(w))]);};p.prototype.render=function(){'use strict';var s=this.props,t=s.context,u=s.photoURI;return c('React').createElement(c('XUIContextualDialog.react'),{context:t,dialogRole:'alert',shown:this.state.shown,offsetY:-10,position:'below',alignment:'right',autoFocus:false,focusContextOnHide:false,behaviors:{LayerFadeOnShow:c('LayerFadeOnShow'),LayerFadeOnHide:c('LayerFadeOnHide')},width:210},c('React').createElement('div',{className:"_5bov",onClick:this.$JewelReminderDialogImpl7,onMouseEnter:this.$JewelReminderDialogImpl5,onMouseLeave:this.$JewelReminderDialogImpl6,role:'presentation'},c('React').createElement(c('ImageBlock.react'),null,c('React').createElement(c('Image.react'),{className:"_5bow",src:u}),c('React').createElement('div',null,this.$JewelReminderDialogImpl8()))));};var q=c('injectSubscriptionsHandler.react')(p);function r(s){'use strict';if(s.request.count>0&&s.show_request){this.$NotificationJewelReminder2(s.request,s.show_notif,s.show_time);}else this.$NotificationJewelReminder3(s.show_notif,s.show_time);}r.prototype.$NotificationJewelReminder4=function(s){'use strict';return s!=null&&!c('Toggler').getInstance(s).isShown();};r.prototype.$NotificationJewelReminder2=function(s,t,u){'use strict';this.$NotificationJewelReminder5(s.pics[0],s.names,s.count,n,u,function(){return this.$NotificationJewelReminder3(t,u);}.bind(this));};r.prototype.$NotificationJewelReminder3=function(s,t){'use strict';var u=l&&l.currentViewerInFocusMode();if(u||!s)return;this.$NotificationJewelReminder1=c('NotificationUpdates').subscribe('update-notifications',function(v,w){if(w.nodes){var x=w.nodes.reduce(function(y,z){y[z.alert_id]=z;return y;},{});this.$NotificationJewelReminder6(x,t);}}.bind(this));c('NotificationStore').getNotifications(Number.isInteger(s)?s:0,function(v){return this.$NotificationJewelReminder6(v,t);}.bind(this));};r.prototype.$NotificationJewelReminder6=function(s,t){'use strict';if(this.$NotificationJewelReminder1){this.$NotificationJewelReminder1.unsubscribe();this.$NotificationJewelReminder1=null;}var u=[],v=void 0,w=Object.keys(s);for(var x=0;x<w.length;x++){var y=s[w[x]];if(!y.showBeep||y.seen_state!=='UNSEEN_AND_UNREAD'||y.actors.length===0)continue;var z=y.actors;for(var aa=0;aa<z.length;aa++){var ba;v=v||((ba=z[aa])!=null?(ba=ba.profile_picture)!=null?ba.uri:ba:ba);if(u.length<m&&z[aa].name&&u.indexOf(z[aa].name)===-1)u.push(z[aa].name);}if(u.length===m)break;}if(u.length===0||!v)return;this.$NotificationJewelReminder5(v,u,w.length,o,t);};r.prototype.$NotificationJewelReminder5=function(s,t,u,v,w,x){'use strict';var y=c('ge')(v);if(!this.$NotificationJewelReminder4(y))return;c('ReactDOM').render(c('React').createElement(q,{showTime:w,context:c('DOMQuery').scry(y,'.jewelButton')[0],names:t,photoURI:s,unreadCount:u,jewelType:v===o?'notification':'request',onClick:function z(){c('Toggler').show(y);c('ifRequired')('ClientChromeStore',function(aa){aa.dispatch({type:'UPDATE_ACTIVE_FLYOUT',data:v===o?'notification':'request'});});},onHide:x}),document.createElement('div'));};f.exports=r;}),null);