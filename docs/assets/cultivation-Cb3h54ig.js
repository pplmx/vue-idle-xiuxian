const e=e=>Math.floor(1*Math.pow(1.2,e-1)),t=(t,s)=>{let a=e(t);return Math.random()<.3*s&&(a*=2),a};self.onmessage=({data:s})=>{const{type:a,playerData:o}=s;if("cultivateUntilBreakthrough"===a)try{const{level:s,spirit:a,cultivation:r,maxCultivation:i,luck:l}=o,n=(e=>Math.floor(10*Math.pow(1.5,e-1)))(s),c=e(s);if(c<=0)return void self.postMessage({type:"error",message:"修炼效率异常"});const p=Math.max(0,i-r),u=Math.ceil(p/c),f=u*n;if(a<f)return void self.postMessage({type:"error",message:`灵力不足！突破需要${f}灵力，当前灵力：${a.toFixed(1)}`});let M=0,h=0;for(let e=0;e<u;e++){const e=t(s,l);e>c&&h++,M+=e}self.postMessage({type:"success",result:{spiritCost:f,cultivationGain:M,doubleGainTimes:h}})}catch(r){self.postMessage({type:"error",message:"修炼计算出错"})}};
