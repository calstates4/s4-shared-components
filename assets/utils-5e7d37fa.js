function i(e,r,c){const l=e.currentTarget.closest("form");if(l&&l.elements.length)for(let t=0;t<(l==null?void 0:l.elements.length);t++){const a=l.elements[t];if(a&&!a.checkValidity()){const n=a.closest(`.${r}`);if(n){const o=n.getAttribute("data-panel-index");if(o&&c.current){c.current.setActiveTab(parseInt(o));break}}}}}function s(e){return{draft:{color:e.palette.warning.light,label:"Risk Acknowledgment"},pending:{color:e.palette.warning.main,label:"Pending"},approved:{color:e.palette.success.main,label:"Approved"},declined:{color:e.palette.secondary.main,label:"Declined"},site_staff:{color:e.palette.error.light,label:"Site Staff"},duration:{color:e.palette.teal.main,label:"Duration"},grace_period:{color:e.palette.blue.main,label:"Grace Period"},published:{color:e.palette.success.light,label:"Active"},success:{color:e.palette.success.dark,label:"Success"},incomplete:{color:e.palette.error.main,label:"Incomplete"}}}export{i as c,s as e};
//# sourceMappingURL=utils-5e7d37fa.js.map
