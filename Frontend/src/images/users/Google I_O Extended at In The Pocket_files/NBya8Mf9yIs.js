if (self.CavalryLogger) { CavalryLogger.start_js(["gU1aA"]); }

__d('SignalsTabCountColor',['keyMirror'],(function a(b,c,d,e,f,g){'use strict';var h=c('keyMirror')({GREY:null,BLUE:null,YELLOW:null,RED:null});f.exports=h;}),null);
__d('SignalsTab.react',['React','SignalsTabCountColor'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PureComponent,k=c('React').PropTypes;h=babelHelpers.inherits(l,j);i=h&&h.prototype;l.prototype.render=function(){return c('React').createElement('div',null,this.props.children);};function l(){h.apply(this,arguments);}l.propTypes={children:k.any,count:k.number,countColor:k.oneOf(Object.keys(c('SignalsTabCountColor'))),maxCountToDisplay:k.number,title:k.node.isRequired};l.defaultProps={countColor:c('SignalsTabCountColor').GREY};f.exports=l;}),null);
__d('SignalsTabGroupHeaderSize',['keyMirror'],(function a(b,c,d,e,f,g){'use strict';var h=c('keyMirror')({MEDIUM:null,LARGE:null});f.exports=h;}),null);
__d('SignalsTabHeader.react',['cx','React','SignalsTabCountColor','SignalsTabGroupHeaderSize','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k,l=c('React').PureComponent,m=(k={},k[c('SignalsTabCountColor').GREY]="_hvx",k[c('SignalsTabCountColor').BLUE]="_hvy",k[c('SignalsTabCountColor').YELLOW]="_hvz",k[c('SignalsTabCountColor').RED]="_hv-",k);i=babelHelpers.inherits(n,l);j=i&&i.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=j.constructor).call.apply(o,[this].concat(r)),this.$SignalsTabHeader1=function(){this.props.onSelect(this.props.index);}.bind(this),p;}n.prototype.render=function(){var o=this.props,p=o.count,q=o.countColor,r=o.headerSize,s=o.maxCountToDisplay,t=o.selected,u=o.title,v="_7wr"+(r===c('SignalsTabGroupHeaderSize').LARGE?' '+"_hw0":'')+(t?' '+"_hwa":'')+(!t?' '+"_hwb":''),w=p!=null&&s!=null&&p>s?s+'+':p,x=p==null?null:c('React').createElement('div',{className:c('joinClasses')("_7wq",m[q])},w);return c('React').createElement('div',{className:v,role:'tab',onClick:this.$SignalsTabHeader1},c('React').createElement('div',{className:"_hwd"},u,x));};f.exports=n;}),null);
__d('SignalsTabGroup.react',['cx','invariant','React','SignalsTab.react','SignalsTabGroupHeaderSize','SignalsTabHeader.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').Children,m=c('React').PureComponent,n=c('React').PropTypes,o='';j=babelHelpers.inherits(p,m);k=j&&j.prototype;function p(q){k.constructor.call(this,q);this.$SignalsTabGroup4=function(){var s=this.$SignalsTabGroup5();if(this.state.selectedIndex!==s)this.setState({selectedIndex:s},function(){return this.$SignalsTabGroup6();}.bind(this));}.bind(this);this.$SignalsTabGroup7=function(s){if(this.state.selectedIndex!==s)this.setState({selectedIndex:s},function(){this.$SignalsTabGroup6();this.$SignalsTabGroup3();}.bind(this));}.bind(this);var r=q.children;r&&r.length>0||i(0);this.$SignalsTabGroup1=r.map(function(s,t){return s.props.path||String(t);});this.state={selectedIndex:this.$SignalsTabGroup2(q)};this.$SignalsTabGroup3(true);}p.prototype.componentWillReceiveProps=function(q){if(q.initiallySelectedIndex!=null&&q.initiallySelectedIndex!=this.state.selectedIndex){var r=this.$SignalsTabGroup2(q);if(this.state.selectedIndex!==r)this.setState({selectedIndex:r},function(){this.$SignalsTabGroup3();}.bind(this));}};p.prototype.componentDidMount=function(){var q=this.props.usePaths;if(q)window.addEventListener('popstate',this.$SignalsTabGroup4);};p.prototype.componentWillUnmount=function(){window.removeEventListener('popstate',this.$SignalsTabGroup4);};p.prototype.$SignalsTabGroup2=function(q){var r=q.children,s=q.initiallySelectedIndex,t=q.usePaths,u=this.$SignalsTabGroup5(),v=t&&u>-1,w=0;if(!v){if(s!=null)w=s;}else w=u;0<=w&&r&&w<r.length||i(0);return w;};p.prototype.$SignalsTabGroup3=function(){var q=arguments.length<=0||arguments[0]===undefined?false:arguments[0],r=this.props.usePaths;if(r){var s=this.state.selectedIndex,t=this.$SignalsTabGroup1,u=this.props.basePath||o,v=document,w=v.location,x=v.title,y=w.search;if(q){history.replaceState(history.state,x,''+u+t[s]+y);}else history.pushState(history.state,x,''+u+t[s]+y);}};p.prototype.$SignalsTabGroup5=function(){var q=this.$SignalsTabGroup1,r=this.props.basePath||o,s=document.location.pathname.replace(''+r,'');return q.indexOf(s);};p.prototype.$SignalsTabGroup6=function(){var q=this.props.onSelectionChanged;if(q!=null)q.bind(this)(this.state.selectedIndex);};p.prototype.getSelectedIndex=function(){return this.state.selectedIndex;};p.prototype.render=function(){var q=l.toArray(this.props.children),r=this.state.selectedIndex,s=this.props,t=s.rightContent,u=s.leftContent,v=s.className,w=s.headerSize,x=[];for(var y=0;y<q.length;y++){var z=q[y],aa=c('React').createElement(c('SignalsTabHeader.react'),{count:z.props.count,countColor:z.props.countColor,headerSize:w,index:y,key:'header'+y,maxCountToDisplay:z.props.maxCountToDisplay,selected:y===r,title:z.props.title,onSelect:this.$SignalsTabGroup7});x.push(aa);if(y<q.length-1){var ba=c('React').createElement('div',{className:"_58-m",key:'separator'+y});x.push(ba);}}var ca=q[r],da=this.props.maxBodyHeight!=null?{maxHeight:this.props.maxBodyHeight}:null;return c('React').createElement('div',{className:v},c('React').createElement('div',{className:"_58-n"+(w===c('SignalsTabGroupHeaderSize').LARGE?' '+"_g_z":'')},u,x,t),c('React').createElement('div',{className:"_58-o",style:da},ca));};p.propTypes={children:n.array,className:n.string,headerSize:n.oneOf(['MEDIUM','LARGE']),initiallySelectedIndex:n.number,leftContent:n.any,maxBodyHeight:n.number,rightContent:n.any,usePaths:n.bool,onSelectionChanged:n.func};p.defaultProps={headerSize:c('SignalsTabGroupHeaderSize').MEDIUM};f.exports=p;}),null);
__d('XUICardPhotoSection.react',['cx','React','XUIBlock','XUICardFullBleedSection.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement(c('XUICardFullBleedSection.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_4-u4")}),this.props.children);};function k(){'use strict';i.apply(this,arguments);}k.propTypes=c('XUIBlock').propTypes;k.defaultProps=c('XUIBlock').getDefaultProps();f.exports=k;}),null);