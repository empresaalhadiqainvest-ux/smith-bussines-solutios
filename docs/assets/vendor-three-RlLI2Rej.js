var Pr=1e3,ti=1001,Lr=1002,Tt=1003,Ja=1004,$a=1005,Vt=1006,Qa=1007,Jn=1008,ui=1009,ja=1010,eo=1011,ea=1012,to=1013,xi=1014,$n=1015,di=1016,ta=1017,ia=1018,Br=1020,io=35902,no=35899,ro=1021,so=1022,kn=1023,rn=1026,Wn=1027,ao=1028,na=1029,Xn=1030,ra=1031,sa=1033,oo=33776,lo=33777,co=33778,ho=33779,uo=35840,fo=35841,po=35842,mo=35843,go=36196,_o=37492,vo=37496,Mo=37488,So=37489,xo=37490,Eo=37491,yo=37808,To=37809,Ao=37810,bo=37811,Ro=37812,wo=37813,Co=37814,Po=37815,Lo=37816,Io=37817,No=37818,Do=37819,Uo=37820,Oo=37821,Fo=36492,Bo=36494,zo=36495,Go=36283,Ho=36284,Vo=36285,ko=36286,qn=2300,Ir=2301,nr=2302,ts=2303,is=2400,ns=2401,rs=2402,Wo=3200;var Gt="srgb",Nr="srgb-linear",Yn="linear",Kn="srgb",rr=7680;var Xo=35044;var Ei=2e3;function qo(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Yo(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Zn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Ko(){const e=Zn("canvas");return e.style.display="block",e}var ss={},ki=null;function as(...e){const t="THREE."+e.shift();ki?ki("log",t,...e):console.log(t,...e)}function aa(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ce(...e){e=aa(e);const t="THREE."+e.shift();if(ki)ki("warn",t,...e);else{const i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Pe(...e){e=aa(e);const t="THREE."+e.shift();if(ki)ki("error",t,...e);else{const i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function zn(...e){const t=e.join(" ");t in ss||(ss[t]=!0,Ce(...e))}function Zo(e,t,i){return new Promise(function(n,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var Jo={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sr=Math.PI/180,Dr=180/Math.PI;function an(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[e&255]+Mt[e>>8&255]+Mt[e>>16&255]+Mt[e>>24&255]+"-"+Mt[t&255]+Mt[t>>8&255]+"-"+Mt[t>>16&15|64]+Mt[t>>24&255]+"-"+Mt[i&63|128]+Mt[i>>8&255]+"-"+Mt[i>>16&255]+Mt[i>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function ze(e,t,i){return Math.max(t,Math.min(i,e))}function $o(e,t){return(e%t+t)%t}function ar(e,t,i){return(1-i)*e+i*t}function Qo(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function zr(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function jo(e,t){if(t.constructor===Float32Array)return e;const i=zr(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function el(e,t){if(t.constructor===Float32Array)return e;const i=zr(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}var Ve=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,a){let o=i[n+0],c=i[n+1],l=i[n+2],h=i[n+3],f=r[s+0],d=r[s+1],m=r[s+2],M=r[s+3];if(h!==M||o!==f||c!==d||l!==m){let S=o*f+c*d+l*m+h*M;S<0&&(f=-f,d=-d,m=-m,M=-M,S=-S);let g=1-a;if(S<.9995){const u=Math.acos(S),T=Math.sin(u);g=Math.sin(g*u)/T,a=Math.sin(a*u)/T,o=o*g+f*a,c=c*g+d*a,l=l*g+m*a,h=h*g+M*a}else{o=o*g+f*a,c=c*g+d*a,l=l*g+m*a,h=h*g+M*a;const u=1/Math.sqrt(o*o+c*c+l*l+h*h);o*=u,c*=u,l*=u,h*=u}}e[t]=o,e[t+1]=c,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,s){const a=i[n],o=i[n+1],c=i[n+2],l=i[n+3],h=r[s],f=r[s+1],d=r[s+2],m=r[s+3];return e[t]=a*m+l*h+o*d-c*f,e[t+1]=o*m+l*f+c*h-a*d,e[t+2]=c*m+l*d+a*f-o*h,e[t+3]=l*m-a*h-o*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,c=a(i/2),l=a(n/2),h=a(r/2),f=o(i/2),d=o(n/2),m=o(r/2);switch(s){case"XYZ":this._x=f*l*h+c*d*m,this._y=c*d*h-f*l*m,this._z=c*l*m+f*d*h,this._w=c*l*h-f*d*m;break;case"YXZ":this._x=f*l*h+c*d*m,this._y=c*d*h-f*l*m,this._z=c*l*m-f*d*h,this._w=c*l*h+f*d*m;break;case"ZXY":this._x=f*l*h-c*d*m,this._y=c*d*h+f*l*m,this._z=c*l*m+f*d*h,this._w=c*l*h-f*d*m;break;case"ZYX":this._x=f*l*h-c*d*m,this._y=c*d*h+f*l*m,this._z=c*l*m-f*d*h,this._w=c*l*h+f*d*m;break;case"YZX":this._x=f*l*h+c*d*m,this._y=c*d*h+f*l*m,this._z=c*l*m-f*d*h,this._w=c*l*h-f*d*m;break;case"XZY":this._x=f*l*h-c*d*m,this._y=c*d*h-f*l*m,this._z=c*l*m+f*d*h,this._w=c*l*h+f*d*m;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(l-o)*d,this._y=(r-c)*d,this._z=(s-n)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(l-o)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(o+l)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(s-n)/d,this._x=(r+c)/d,this._y=(o+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,s=e._w,a=t._x,o=t._y,c=t._z,l=t._w;return this._x=i*l+s*a+n*c-r*o,this._y=n*l+s*o+r*a-i*c,this._z=r*l+s*c+i*o-n*a,this._w=s*l-i*a-n*o-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,r=-r,s=-s,a=-a);let o=1-t;if(a<.9995){const c=Math.acos(a),l=Math.sin(c);o=Math.sin(o*c)/l,t=Math.sin(t*c)/l,this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(os.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(os.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,s=e.y,a=e.z,o=e.w,c=2*(s*n-a*i),l=2*(a*t-r*n),h=2*(r*i-s*t);return this.x=t+o*c+s*h-a*l,this.y=i+o*l+a*c-r*h,this.z=n+o*h+r*l-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,s=t.x,a=t.y,o=t.z;return this.x=n*o-r*a,this.y=r*s-i*o,this.z=i*a-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return or.copy(this).projectOnVector(e),this.sub(or)}reflect(e){return this.sub(or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},or=new V,os=new bi,Ne=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,n,r,s,a,o,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,s,a,o,c)}set(e,t,i,n,r,s,a,o,c){const l=this.elements;return l[0]=e,l[1]=n,l[2]=a,l[3]=t,l[4]=r,l[5]=o,l[6]=i,l[7]=s,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,s=i[0],a=i[3],o=i[6],c=i[1],l=i[4],h=i[7],f=i[2],d=i[5],m=i[8],M=n[0],S=n[3],g=n[6],u=n[1],T=n[4],A=n[7],x=n[2],b=n[5],R=n[8];return r[0]=s*M+a*u+o*x,r[3]=s*S+a*T+o*b,r[6]=s*g+a*A+o*R,r[1]=c*M+l*u+h*x,r[4]=c*S+l*T+h*b,r[7]=c*g+l*A+h*R,r[2]=f*M+d*u+m*x,r[5]=f*S+d*T+m*b,r[8]=f*g+d*A+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],l=e[8];return t*s*l-t*a*c-i*r*l+i*a*o+n*r*c-n*s*o}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],l=e[8],h=l*s-a*c,f=a*o-l*r,d=c*r-s*o,m=t*h+i*f+n*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return e[0]=h*M,e[1]=(n*c-l*i)*M,e[2]=(a*i-n*s)*M,e[3]=f*M,e[4]=(l*t-n*o)*M,e[5]=(n*r-a*t)*M,e[6]=d*M,e[7]=(i*o-c*t)*M,e[8]=(s*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,a){const o=Math.cos(r),c=Math.sin(r);return this.set(i*o,i*c,-i*(o*s+c*a)+s+e,-n*c,n*o,-n*(-c*s+o*a)+a+t,0,0,1),this}scale(e,t){return zn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lr.makeScale(e,t)),this}rotate(e){return zn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lr.makeRotation(-e)),this}translate(e,t){return zn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lr=new Ne,ls=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cs=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tl(){const e={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer==="srgb"&&(r.r=ii(r.r),r.g=ii(r.g),r.b=ii(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Yn:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return e.define({[Nr]:{primaries:t,whitePoint:n,transfer:Yn,toXYZ:ls,fromXYZ:cs,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:t,whitePoint:n,transfer:Kn,toXYZ:ls,fromXYZ:cs,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),e}var Be=tl();function ii(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Vi(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ri,il=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ri===void 0&&(Ri=Zn("canvas")),Ri.width=e.width,Ri.height=e.height;const n=Ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Ri}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zn("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=ii(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ii(t[i]/255)*255):t[i]=ii(t[i]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nl=0,Gr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nl++}),this.uuid=an(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,a=n.length;s<a;s++)n[s].isDataTexture?r.push(cr(n[s].image)):r.push(cr(n[s]))}else r=cr(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function cr(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?il.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var rl=0,hr=new V,Nt=class Gn extends Ai{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,n=ti,r=ti,s=Vt,a=Jn,o=kn,c=ui,l=Gn.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rl++}),this.uuid=an(),this.name="",this.source=new Gr(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hr).x}get height(){return this.source.getSize(hr).y}get depth(){return this.source.getSize(hr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const n=t[i];if(n===void 0){Ce(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const r=this[i];if(r===void 0){Ce(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[i]=n}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pr:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case Pr:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=300;Nt.DEFAULT_ANISOTROPY=1;var nt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const o=e.elements,c=o[0],l=o[4],h=o[8],f=o[1],d=o[5],m=o[9],M=o[2],S=o[6],g=o[10];if(Math.abs(l-f)<.01&&Math.abs(h-M)<.01&&Math.abs(m-S)<.01){if(Math.abs(l+f)<.1&&Math.abs(h+M)<.1&&Math.abs(m+S)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,A=(d+1)/2,x=(g+1)/2,b=(l+f)/4,R=(h+M)/4,p=(m+S)/4;return T>A&&T>x?T<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(T),n=b/i,r=R/i):A>x?A<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(A),i=b/n,r=p/n):x<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(x),i=R/r,n=p/r),this.set(i,n,r,t),this}let u=Math.sqrt((S-m)*(S-m)+(h-M)*(h-M)+(f-l)*(f-l));return Math.abs(u)<.001&&(u=1),this.x=(S-m)/u,this.y=(h-M)/u,this.z=(f-l)/u,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sl=class extends Ai{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t),this.textures=[];const n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Nt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Gr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends sl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},oa=class extends Nt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},al=class extends Nt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},tt=class la{static{this.prototype.isMatrix4=!0}constructor(t,i,n,r,s,a,o,c,l,h,f,d,m,M,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,n,r,s,a,o,c,l,h,f,d,m,M,S,g)}set(t,i,n,r,s,a,o,c,l,h,f,d,m,M,S,g){const u=this.elements;return u[0]=t,u[4]=i,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=M,u[11]=S,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new la().fromArray(this.elements)}copy(t){const i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(t){const i=this.elements,n=t.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,n){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,i,n){return this.set(t.x,i.x,n.x,0,t.y,i.y,n.y,0,t.z,i.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,n=t.elements,r=1/wi.setFromMatrixColumn(t,0).length(),s=1/wi.setFromMatrixColumn(t,1).length(),a=1/wi.setFromMatrixColumn(t,2).length();return i[0]=n[0]*r,i[1]=n[1]*r,i[2]=n[2]*r,i[3]=0,i[4]=n[4]*s,i[5]=n[5]*s,i[6]=n[6]*s,i[7]=0,i[8]=n[8]*a,i[9]=n[9]*a,i[10]=n[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*h,m=a*f,M=o*h,S=o*f;i[0]=c*h,i[4]=-c*f,i[8]=l,i[1]=m+M*l,i[5]=d-S*l,i[9]=-o*c,i[2]=S-d*l,i[6]=M+m*l,i[10]=a*c}else if(t.order==="YXZ"){const d=c*h,m=c*f,M=l*h,S=l*f;i[0]=d+S*o,i[4]=M*o-m,i[8]=a*l,i[1]=a*f,i[5]=a*h,i[9]=-o,i[2]=m*o-M,i[6]=S+d*o,i[10]=a*c}else if(t.order==="ZXY"){const d=c*h,m=c*f,M=l*h,S=l*f;i[0]=d-S*o,i[4]=-a*f,i[8]=M+m*o,i[1]=m+M*o,i[5]=a*h,i[9]=S-d*o,i[2]=-a*l,i[6]=o,i[10]=a*c}else if(t.order==="ZYX"){const d=a*h,m=a*f,M=o*h,S=o*f;i[0]=c*h,i[4]=M*l-m,i[8]=d*l+S,i[1]=c*f,i[5]=S*l+d,i[9]=m*l-M,i[2]=-l,i[6]=o*c,i[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*l,M=o*c,S=o*l;i[0]=c*h,i[4]=S-d*f,i[8]=M*f+m,i[1]=f,i[5]=a*h,i[9]=-o*h,i[2]=-l*h,i[6]=m*f+M,i[10]=d-S*f}else if(t.order==="XZY"){const d=a*c,m=a*l,M=o*c,S=o*l;i[0]=c*h,i[4]=-f,i[8]=l*h,i[1]=d*f+S,i[5]=a*h,i[9]=m*f-M,i[2]=M*f-m,i[6]=o*h,i[10]=S*f+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ol,t,ll)}lookAt(t,i,n){const r=this.elements;return Pt.subVectors(t,i),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),si.crossVectors(n,Pt),si.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),si.crossVectors(n,Pt)),si.normalize(),pn.crossVectors(Pt,si),r[0]=si.x,r[4]=pn.x,r[8]=Pt.x,r[1]=si.y,r[5]=pn.y,r[9]=Pt.y,r[2]=si.z,r[6]=pn.z,r[10]=Pt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const n=t.elements,r=i.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],m=n[13],M=n[2],S=n[6],g=n[10],u=n[14],T=n[3],A=n[7],x=n[11],b=n[15],R=r[0],p=r[4],E=r[8],L=r[12],G=r[1],N=r[5],B=r[9],q=r[13],P=r[2],H=r[6],K=r[10],z=r[14],ce=r[3],X=r[7],Y=r[11],ne=r[15];return s[0]=a*R+o*G+c*P+l*ce,s[4]=a*p+o*N+c*H+l*X,s[8]=a*E+o*B+c*K+l*Y,s[12]=a*L+o*q+c*z+l*ne,s[1]=h*R+f*G+d*P+m*ce,s[5]=h*p+f*N+d*H+m*X,s[9]=h*E+f*B+d*K+m*Y,s[13]=h*L+f*q+d*z+m*ne,s[2]=M*R+S*G+g*P+u*ce,s[6]=M*p+S*N+g*H+u*X,s[10]=M*E+S*B+g*K+u*Y,s[14]=M*L+S*q+g*z+u*ne,s[3]=T*R+A*G+x*P+b*ce,s[7]=T*p+A*N+x*H+b*X,s[11]=T*E+A*B+x*K+b*Y,s[15]=T*L+A*q+x*z+b*ne,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],m=t[14],M=t[3],S=t[7],g=t[11],u=t[15],T=c*m-l*d,A=o*m-l*f,x=o*d-c*f,b=a*m-l*h,R=a*d-c*h,p=a*f-o*h;return i*(S*T-g*A+u*x)-n*(M*T-g*b+u*R)+r*(M*A-S*b+u*p)-s*(M*x-S*R+g*p)}determinantAffine(){const t=this.elements,i=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return i*(a*h-o*l)-n*(s*h-o*c)+r*(s*l-a*c)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=i,r[14]=n),this}invert(){const t=this.elements,i=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],m=t[11],M=t[12],S=t[13],g=t[14],u=t[15],T=i*o-n*a,A=i*c-r*a,x=i*l-s*a,b=n*c-r*o,R=n*l-s*o,p=r*l-s*c,E=h*S-f*M,L=h*g-d*M,G=h*u-m*M,N=f*g-d*S,B=f*u-m*S,q=d*u-m*g,P=T*q-A*B+x*N+b*G-R*L+p*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/P;return t[0]=(o*q-c*B+l*N)*H,t[1]=(r*B-n*q-s*N)*H,t[2]=(S*p-g*R+u*b)*H,t[3]=(d*R-f*p-m*b)*H,t[4]=(c*G-a*q-l*L)*H,t[5]=(i*q-r*G+s*L)*H,t[6]=(g*x-M*p-u*A)*H,t[7]=(h*p-d*x+m*A)*H,t[8]=(a*B-o*G+l*E)*H,t[9]=(n*G-i*B-s*E)*H,t[10]=(M*R-S*x+u*T)*H,t[11]=(f*x-h*R-m*T)*H,t[12]=(o*L-a*N-c*E)*H,t[13]=(i*N-n*L+r*E)*H,t[14]=(S*A-M*b-g*T)*H,t[15]=(h*b-f*A+d*T)*H,this}scale(t){const i=this.elements,n=t.x,r=t.y,s=t.z;return i[0]*=n,i[4]*=r,i[8]*=s,i[1]*=n,i[5]*=r,i[9]*=s,i[2]*=n,i[6]*=r,i[10]*=s,i[3]*=n,i[7]*=r,i[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,n,r))}makeTranslation(t,i,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const n=Math.cos(i),r=Math.sin(i),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,i,n){return this.set(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,i,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,i,r,1,0,0,0,0,1),this}compose(t,i,n){const r=this.elements,s=i._x,a=i._y,o=i._z,c=i._w,l=s+s,h=a+a,f=o+o,d=s*l,m=s*h,M=s*f,S=a*h,g=a*f,u=o*f,T=c*l,A=c*h,x=c*f,b=n.x,R=n.y,p=n.z;return r[0]=(1-(S+u))*b,r[1]=(m+x)*b,r[2]=(M-A)*b,r[3]=0,r[4]=(m-x)*R,r[5]=(1-(d+u))*R,r[6]=(g+T)*R,r[7]=0,r[8]=(M+A)*p,r[9]=(g-T)*p,r[10]=(1-(d+S))*p,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,i,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),i.identity(),this;let a=wi.set(r[0],r[1],r[2]).length();const o=wi.set(r[4],r[5],r[6]).length(),c=wi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ft.copy(this);const l=1/a,h=1/o,f=1/c;return Ft.elements[0]*=l,Ft.elements[1]*=l,Ft.elements[2]*=l,Ft.elements[4]*=h,Ft.elements[5]*=h,Ft.elements[6]*=h,Ft.elements[8]*=f,Ft.elements[9]*=f,Ft.elements[10]*=f,i.setFromRotationMatrix(Ft),n.x=a,n.y=o,n.z=c,this}makePerspective(t,i,n,r,s,a,o=Ei,c=!1){const l=this.elements,h=2*s/(i-t),f=2*s/(n-r),d=(i+t)/(i-t),m=(n+r)/(n-r);let M,S;if(c)M=s/(a-s),S=a*s/(a-s);else if(o===2e3)M=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===2001)M=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=M,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,n,r,s,a,o=Ei,c=!1){const l=this.elements,h=2/(i-t),f=2/(n-r),d=-(i+t)/(i-t),m=-(n+r)/(n-r);let M,S;if(c)M=1/(a-s),S=a/(a-s);else if(o===2e3)M=-2/(a-s),S=-(a+s)/(a-s);else if(o===2001)M=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=M,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const i=this.elements,n=t.elements;for(let r=0;r<16;r++)if(i[r]!==n[r])return!1;return!0}fromArray(t,i=0){for(let n=0;n<16;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){const n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t[i+9]=n[9],t[i+10]=n[10],t[i+11]=n[11],t[i+12]=n[12],t[i+13]=n[13],t[i+14]=n[14],t[i+15]=n[15],t}},wi=new V,Ft=new tt,ol=new V(0,0,0),ll=new V(1,1,1),si=new V,pn=new V,Pt=new V,hs=new tt,us=new bi,Wi=class ca{constructor(t=0,i=0,n=0,r=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,n,r=this._order){return this._x=t,this._y=i,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(i){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,n){return hs.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hs,i,n)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return us.setFromEuler(this),this.setFromQuaternion(us,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var ha=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cl=0,ds=new V,Ci=new bi,Jt=new tt,mn=new V,Ji=new V,hl=new V,ul=new bi,fs=new V(1,0,0),ps=new V(0,1,0),ms=new V(0,0,1),gs={type:"added"},dl={type:"removed"},Pi={type:"childadded",child:null},ur={type:"childremoved",child:null},kt=class Hn extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cl++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const t=new V,i=new Wi,n=new bi,r=new V(1,1,1);function s(){n.setFromEuler(i,!1)}function a(){i.setFromQuaternion(n,void 0,!1)}i._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ne}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ci.setFromAxisAngle(t,i),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,i){return Ci.setFromAxisAngle(t,i),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(fs,t)}rotateY(t){return this.rotateOnAxis(ps,t)}rotateZ(t){return this.rotateOnAxis(ms,t)}translateOnAxis(t,i){return ds.copy(t).applyQuaternion(this.quaternion),this.position.add(ds.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(fs,t)}translateY(t){return this.translateOnAxis(ps,t)}translateZ(t){return this.translateOnAxis(ms,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(t,i,n){t.isVector3?mn.copy(t):mn.set(t,i,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(Ji,mn,this.up):Jt.lookAt(mn,Ji,this.up),this.quaternion.setFromRotationMatrix(Jt),r&&(Jt.extractRotation(r.matrixWorld),Ci.setFromRotationMatrix(Jt),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gs),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(dl),ur.child=t,this.dispatchEvent(ur),ur.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jt.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jt),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gs),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(t,i);if(s!==void 0)return s}}getObjectsByProperty(t,i,n=[]){this[t]===i&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,i,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,hl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,ul,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*n-s[8]*r,s[13]+=n-s[1]*i-s[5]*n-s[9]*r,s[14]+=r-s[2]*i-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].updateMatrixWorld(t)}updateWorldMatrix(t,i,n=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),i===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(i){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),M=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),M.length>0&&(n.nodes=M)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kt.DEFAULT_UP=new V(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},fl={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,s=null;const a=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,i),M=this._getHandJoint(c,d);m!==null&&(M.matrix.fromArray(m.transform.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=m.radius),M.visible=m!==null}const l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=l.position.distanceTo(h.position);c.inputState.pinching&&f>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fl)))}return a!==null&&(a.visible=n!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ua={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},_n={h:0,s:0,l:0};function fr(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Be.workingColorSpace){return this.r=e,this.g=t,this.b=i,Be.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Be.workingColorSpace){if(e=$o(e,1),t=ze(t,0,1),i=ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=fr(s,r,e+1/3),this.g=fr(s,r,e),this.b=fr(s,r,e-1/3)}return Be.colorSpaceToWorking(this,n),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const i=ua[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Be.workingToColorSpace(St.copy(this),e),Math.round(ze(St.r*255,0,255))*65536+Math.round(ze(St.g*255,0,255))*256+Math.round(ze(St.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Be.workingColorSpace){Be.workingToColorSpace(St.copy(this),t);const i=St.r,n=St.g,r=St.b,s=Math.max(i,n,r),a=Math.min(i,n,r);let o,c;const l=(a+s)/2;if(a===s)o=0,c=0;else{const h=s-a;switch(c=l<=.5?h/(s+a):h/(2-s-a),s){case i:o=(n-r)/h+(n<r?6:0);break;case n:o=(r-i)/h+2;break;case r:o=(i-n)/h+4}o/=6}return e.h=o,e.s=c,e.l=l,e}getRGB(e,t=Be.workingColorSpace){return Be.workingToColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Gt){Be.workingToColorSpace(St.copy(this),e);const t=St.r,i=St.g,n=St.b;return e!=="srgb"?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(_n);const i=ar(ai.h,_n.h,t),n=ar(ai.s,_n.s,t),r=ar(ai.l,_n.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},St=new Ge;Ge.NAMES=ua;var xu=class da{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(t),this.density=i}clone(){return new da(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Eu=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bt=new V,$t=new V,pr=new V,Qt=new V,Li=new V,Ii=new V,_s=new V,mr=new V,gr=new V,_r=new V,vr=new nt,Mr=new nt,Sr=new nt,$i=class Gi{constructor(t=new V,i=new V,n=new V){this.a=t,this.b=i,this.c=n}static getNormal(t,i,n,r){r.subVectors(n,i),Bt.subVectors(t,i),r.cross(Bt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,i,n,r,s){Bt.subVectors(r,i),$t.subVectors(n,i),pr.subVectors(t,i);const a=Bt.dot(Bt),o=Bt.dot($t),c=Bt.dot(pr),l=$t.dot($t),h=$t.dot(pr),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-o*h)*d,M=(a*h-o*c)*d;return s.set(1-m-M,M,m)}static containsPoint(t,i,n,r){return this.getBarycoord(t,i,n,r,Qt)===null?!1:Qt.x>=0&&Qt.y>=0&&Qt.x+Qt.y<=1}static getInterpolation(t,i,n,r,s,a,o,c){return this.getBarycoord(t,i,n,r,Qt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Qt.x),c.addScaledVector(a,Qt.y),c.addScaledVector(o,Qt.z),c)}static getInterpolatedAttribute(t,i,n,r,s,a){return vr.setScalar(0),Mr.setScalar(0),Sr.setScalar(0),vr.fromBufferAttribute(t,i),Mr.fromBufferAttribute(t,n),Sr.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(vr,s.x),a.addScaledVector(Mr,s.y),a.addScaledVector(Sr,s.z),a}static isFrontFacing(t,i,n,r){return Bt.subVectors(n,i),$t.subVectors(t,i),Bt.cross($t).dot(r)<0}set(t,i,n){return this.a.copy(t),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(t,i,n,r){return this.a.copy(t[i]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,i,n,r){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bt.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),Bt.cross($t).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,n,r,s){return Gi.getInterpolation(t,this.a,this.b,this.c,i,n,r,s)}containsPoint(t){return Gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const n=this.a,r=this.b,s=this.c;let a,o;Li.subVectors(r,n),Ii.subVectors(s,n),mr.subVectors(t,n);const c=Li.dot(mr),l=Ii.dot(mr);if(c<=0&&l<=0)return i.copy(n);gr.subVectors(t,r);const h=Li.dot(gr),f=Ii.dot(gr);if(h>=0&&f<=h)return i.copy(r);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),i.copy(n).addScaledVector(Li,a);_r.subVectors(t,s);const m=Li.dot(_r),M=Ii.dot(_r);if(M>=0&&m<=M)return i.copy(s);const S=m*l-c*M;if(S<=0&&l>=0&&M<=0)return o=l/(l-M),i.copy(n).addScaledVector(Ii,o);const g=h*M-m*f;if(g<=0&&f-h>=0&&m-M>=0)return _s.subVectors(s,r),o=(f-h)/(f-h+(m-M)),i.copy(r).addScaledVector(_s,o);const u=1/(g+S+d);return a=S*u,o=d*u,i.copy(n).addScaledVector(Li,a).addScaledVector(Ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},on=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,zt):zt.fromBufferAttribute(r,s),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vn.copy(i.boundingBox)),vn.applyMatrix4(e.matrixWorld),this.union(vn)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qi),Mn.subVectors(this.max,Qi),Ni.subVectors(e.a,Qi),Di.subVectors(e.b,Qi),Ui.subVectors(e.c,Qi),oi.subVectors(Di,Ni),li.subVectors(Ui,Di),gi.subVectors(Ni,Ui);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-gi.z,gi.y,oi.z,0,-oi.x,li.z,0,-li.x,gi.z,0,-gi.x,-oi.y,oi.x,0,-li.y,li.x,0,-gi.y,gi.x,0];return!xr(t,Ni,Di,Ui,Mn)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,Ni,Di,Ui,Mn))?!1:(Sn.crossVectors(oi,li),t=[Sn.x,Sn.y,Sn.z],xr(t,Ni,Di,Ui,Mn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},jt=[new V,new V,new V,new V,new V,new V,new V,new V],zt=new V,vn=new on,Ni=new V,Di=new V,Ui=new V,oi=new V,li=new V,gi=new V,Qi=new V,Mn=new V,Sn=new V,_i=new V;function xr(e,t,i,n,r){for(let s=0,a=e.length-3;s<=a;s+=3){_i.fromArray(e,s);const o=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),c=t.dot(_i),l=i.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var at=new V,xn=new Ve,pl=0,Si=class extends Ai{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pl++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xo,this.updateRanges=[],this.gpuType=$n,this.version=0,this._normalizationScale=e!==void 0?zr(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXY(t,xn.x,xn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):jo(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):el(e,this.array)}},fa=class extends Si{constructor(e,t,i){super(new Uint16Array(e),t,i)}},pa=class extends Si{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ut=class extends Si{constructor(e,t,i){super(new Float32Array(e),t,i)}},ml=new on,ji=new V,Er=new V,Qn=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ml.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);const t=ji.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ji,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Er.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(Er)),this.expandByPoint(ji.copy(e.center).sub(Er))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gl=0,It=new tt,yr=new kt,Oi=new V,Lt=new on,en=new on,ht=new V,ni=class ma extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qo(t)?pa:fa)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,n=0){this.groups.push({start:t,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return It.makeRotationFromQuaternion(t),this.applyMatrix4(It),this}rotateX(t){return It.makeRotationX(t),this.applyMatrix4(It),this}rotateY(t){return It.makeRotationY(t),this.applyMatrix4(It),this}rotateZ(t){return It.makeRotationZ(t),this.applyMatrix4(It),this}translate(t,i,n){return It.makeTranslation(t,i,n),this.applyMatrix4(It),this}scale(t,i,n){return It.makeScale(t,i,n),this.applyMatrix4(It),this}lookAt(t){return yr.lookAt(t),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(n,3))}else{const n=Math.min(t.length,i.count);for(let r=0;r<n;r++){const s=t[r];i.setXYZ(r,s.x,s.y,s.z||0)}t.length>i.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let n=0,r=i.length;n<r;n++){const s=i[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(t),i)for(let s=0,a=i.length;s<a;s++){const o=i[s];en.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(Lt.min,en.min),Lt.expandByPoint(ht),ht.addVectors(Lt.max,en.max),Lt.expandByPoint(ht)):(Lt.expandByPoint(en.min),Lt.expandByPoint(en.max))}Lt.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)ht.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ht));if(i)for(let s=0,a=i.length;s<a;s++){const o=i[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ht.fromBufferAttribute(o,l),c&&(Oi.fromBufferAttribute(t,l),ht.add(Oi)),r=Math.max(r,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=i.position,r=i.normal,s=i.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Si(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new V,c[L]=new V;const h=new V,f=new V,d=new V,m=new Ve,M=new Ve,S=new Ve,g=new V,u=new V;function T(L,G,N){l[L]=l[G]=l[N]=1,h.fromBufferAttribute(n,L),f.fromBufferAttribute(n,G),d.fromBufferAttribute(n,N),m.fromBufferAttribute(s,L),M.fromBufferAttribute(s,G),S.fromBufferAttribute(s,N),f.sub(h),d.sub(h),M.sub(m),S.sub(m);const B=1/(M.x*S.y-S.x*M.y);isFinite(B)&&(g.copy(f).multiplyScalar(S.y).addScaledVector(d,-M.y).multiplyScalar(B),u.copy(d).multiplyScalar(M.x).addScaledVector(f,-S.x).multiplyScalar(B),o[L].add(g),o[G].add(g),o[N].add(g),c[L].add(u),c[G].add(u),c[N].add(u))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let L=0,G=A.length;L<G;++L){const N=A[L],B=N.start,q=N.count;for(let P=B,H=B+q;P<H;P+=3)T(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const x=new V,b=new V,R=new V,p=new V;function E(L){R.fromBufferAttribute(r,L),p.copy(R);const G=o[L];x.copy(G),x.sub(R.multiplyScalar(R.dot(G))).normalize(),b.crossVectors(p,G);const N=b.dot(c[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,N)}for(let L=0,G=n.count;L<G;++L)l[L]&&E(L);this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==i.count)n=new Si(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new V,s=new V,a=new V,o=new V,c=new V,l=new V,h=new V,f=new V;if(t)for(let d=0,m=t.count;d<m;d+=3){const M=t.getX(d+0),S=t.getX(d+1),g=t.getX(d+2);r.fromBufferAttribute(i,M),s.fromBufferAttribute(i,S),a.fromBufferAttribute(i,g),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(M,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,m=i.count;d<m;d+=3)r.fromBufferAttribute(i,d+0),s.fromBufferAttribute(i,d+1),a.fromBufferAttribute(i,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,n=t.count;i<n;i++)ht.fromBufferAttribute(t,i),ht.normalize(),t.setXYZ(i,ht.x,ht.y,ht.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let m=0,M=0;for(let S=0,g=c.length;S<g;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*h;for(let u=0;u<h;u++)d[M++]=l[m++]}return new Si(d,h,f)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ma,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);i.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],m=t(d,n);c.push(m)}i.morphAttributes[o]=c}i.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];i.addGroup(l.start,l.count,l.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(i))}const s=t.morphAttributes;for(const l in s){const h=[],f=s[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(i));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tr=new V,_l=new V,vl=new Ne,hi=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Tr.subVectors(i,t).cross(_l.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const n=e.delta(Tr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vl.getNormalMatrix(e),n=this.coplanarPoint(Tr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ml=0,Yi=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ml++}),this.uuid=an(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(t){const r=n(e.textures),s=n(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new hi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ei=new V,Ar=new V,En=new V,yn=new V,ga=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ar.copy(e).add(t).multiplyScalar(.5),En.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(Ar);const r=e.distanceTo(t)*.5,s=-this.direction.dot(En),a=yn.dot(this.direction),o=-yn.dot(En),c=yn.lengthSq(),l=Math.abs(1-s*s);let h,f,d,m;if(l>0)if(h=s*o-a,f=s*a-o,m=r*l,h>=0)if(f>=-m)if(f<=m){const M=1/l;h*=M,f*=M,d=h*(h+s*f+2*a)+f*(s*h+f+2*o)+c}else f=r,h=Math.max(0,-(s*f+a)),d=-h*h+f*(f+2*o)+c;else f=-r,h=Math.max(0,-(s*f+a)),d=-h*h+f*(f+2*o)+c;else f<=-m?(h=Math.max(0,-(-s*r+a)),f=h>0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+f*(f+2*o)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-o),r),d=f*(f+2*o)+c):(h=Math.max(0,-(s*r+a)),f=h>0?r:Math.min(Math.max(-r,-o),r),d=-h*h+f*(f+2*o)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+a)),d=-h*h+f*(f+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Ar).addScaledVector(En,f),d}intersectSphere(e,t){if(e.radius<0)return null;ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),n=ei.dot(ei)-i*i,r=e.radius*e.radius;if(n>r)return null;const s=Math.sqrt(r-n),a=i-s,o=i+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,s,a,o;const c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),l>=0?(r=(e.min.y-f.y)*l,s=(e.max.y-f.y)*l):(r=(e.max.y-f.y)*l,s=(e.min.y-f.y)*l),i>s||r>n||((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),h>=0?(a=(e.min.z-f.z)*h,o=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,o=(e.min.z-f.z)*h),i>o||a>n)||((a>i||i!==i)&&(i=a),(o<n||n!==n)&&(n=o),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,n,r){const s=this.origin,a=this.direction,o=a.x,c=a.y,l=a.z,h=e.x-s.x,f=e.y-s.y,d=e.z-s.z,m=t.x-s.x,M=t.y-s.y,S=t.z-s.z,g=i.x-s.x,u=i.y-s.y,T=i.z-s.z,A=Math.abs(o),x=Math.abs(c),b=Math.abs(l);let R,p,E,L,G,N,B,q,P,H,K,z;if(A>=x&&A>=b?(E=o,N=h,P=m,z=g,o>=0?(R=c,p=l,L=f,G=d,B=M,q=S,H=u,K=T):(R=l,p=c,L=d,G=f,B=S,q=M,H=T,K=u)):x>=b?(E=c,N=f,P=M,z=u,c>=0?(R=l,p=o,L=d,G=h,B=S,q=m,H=T,K=g):(R=o,p=l,L=h,G=d,B=m,q=S,H=g,K=T)):(E=l,N=d,P=S,z=T,l>=0?(R=o,p=c,L=h,G=f,B=m,q=M,H=g,K=u):(R=c,p=o,L=f,G=h,B=M,q=m,H=u,K=g)),E===0)return null;const ce=R/E,X=p/E,Y=1/E,ne=L-ce*N,ye=G-X*N,Z=B-ce*P,te=q-X*P,ve=H-ce*z,Te=K-X*z,Ae=ve*te-Te*Z,he=ne*Te-ye*ve,Ue=Z*ye-te*ne;if(n){if(Ae<0||he<0||Ue<0)return null}else if((Ae<0||he<0||Ue<0)&&(Ae>0||he>0||Ue>0))return null;const We=Ae+he+Ue;if(We===0)return null;const be=Y*(Ae*N+he*P+Ue*z);return(We>0?be<0:be>0)?null:this.at(be/We,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Sl=class extends Yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vs=new tt,vi=new ga,Tn=new Qn,Ms=new V,An=new V,bn=new V,Rn=new V,br=new V,wn=new V,Ss=new V,Cn=new V,yi=class extends kt{constructor(e=new ni,t=new Sl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(r&&a){wn.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const l=a[o],h=r[o];l!==0&&(br.fromBufferAttribute(h,e),s?wn.addScaledVector(br,l):wn.addScaledVector(br.sub(t),l))}t.add(wn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tn.copy(i.boundingSphere),Tn.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(Tn.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Tn,Ms)===null||vi.origin.distanceToSquared(Ms)>(e.far-e.near)**2))&&(vs.copy(r).invert(),vi.copy(e.ray).applyMatrix4(vs),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,i){let n;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,M=f.length;m<M;m++){const S=f[m],g=s[S.materialIndex],u=Math.max(S.start,d.start),T=Math.min(a.count,Math.min(S.start+S.count,d.start+d.count));for(let A=u,x=T;A<x;A+=3){const b=a.getX(A),R=a.getX(A+1),p=a.getX(A+2);n=Pn(this,g,e,i,c,l,h,b,R,p),n&&(n.faceIndex=Math.floor(A/3),n.face.materialIndex=S.materialIndex,t.push(n))}}else{const m=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let S=m,g=M;S<g;S+=3){const u=a.getX(S),T=a.getX(S+1),A=a.getX(S+2);n=Pn(this,s,e,i,c,l,h,u,T,A),n&&(n.faceIndex=Math.floor(S/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(s))for(let m=0,M=f.length;m<M;m++){const S=f[m],g=s[S.materialIndex],u=Math.max(S.start,d.start),T=Math.min(o.count,Math.min(S.start+S.count,d.start+d.count));for(let A=u,x=T;A<x;A+=3){const b=A,R=A+1,p=A+2;n=Pn(this,g,e,i,c,l,h,b,R,p),n&&(n.faceIndex=Math.floor(A/3),n.face.materialIndex=S.materialIndex,t.push(n))}}else{const m=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let S=m,g=M;S<g;S+=3){const u=S,T=S+1,A=S+2;n=Pn(this,s,e,i,c,l,h,u,T,A),n&&(n.faceIndex=Math.floor(S/3),t.push(n))}}}};function xl(e,t,i,n,r,s,a,o){let c;if(t.side===1?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===0,o),c===null)return null;Cn.copy(o),Cn.applyMatrix4(e.matrixWorld);const l=i.ray.origin.distanceTo(Cn);return l<i.near||l>i.far?null:{distance:l,point:Cn.clone(),object:e}}function Pn(e,t,i,n,r,s,a,o,c,l){e.getVertexPosition(o,An),e.getVertexPosition(c,bn),e.getVertexPosition(l,Rn);const h=xl(e,t,i,n,An,bn,Rn,Ss);if(h){const f=new V;$i.getBarycoord(Ss,An,bn,Rn,f),r&&(h.uv=$i.getInterpolatedAttribute(r,o,c,l,f,new Ve)),s&&(h.uv1=$i.getInterpolatedAttribute(s,o,c,l,f,new Ve)),a&&(h.normal=$i.getInterpolatedAttribute(a,o,c,l,f,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new V,materialIndex:0};$i.getNormal(An,bn,Rn,d.normal),h.face=d,h.barycoord=f}return h}var El=class extends Nt{constructor(e=null,t=1,i=1,n,r,s,a,o,c=Tt,l=Tt,h,f){super(null,s,a,o,c,l,n,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mi=new Qn,yl=new Ve(.5,.5),Ln=new V,sn=class{constructor(e=new hi,t=new hi,i=new hi,n=new hi,r=new hi,s=new hi){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ei,i=!1){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],f=r[6],d=r[7],m=r[8],M=r[9],S=r[10],g=r[11],u=r[12],T=r[13],A=r[14],x=r[15];if(n[0].setComponents(c-s,d-l,g-m,x-u).normalize(),n[1].setComponents(c+s,d+l,g+m,x+u).normalize(),n[2].setComponents(c+a,d+h,g+M,x+T).normalize(),n[3].setComponents(c-a,d-h,g-M,x-T).normalize(),i)n[4].setComponents(o,f,S,A).normalize(),n[5].setComponents(c-o,d-f,g-S,x-A).normalize();else if(n[4].setComponents(c-o,d-f,g-S,x-A).normalize(),t===2e3)n[5].setComponents(c+o,d+f,g+S,x+A).normalize();else if(t===2001)n[5].setComponents(o,f,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=yl.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ln.x=n.normal.x>0?e.max.x:e.min.x,Ln.y=n.normal.y>0?e.max.y:e.min.y,Ln.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ln)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xs=new tt,Tl=class _a{constructor(){this.coordinateSystem=Ei,this._frustums=[],this._count=0}setFromArrayCamera(t){const i=t.cameras,n=this._frustums;for(let r=0;r<i.length;r++){const s=i[r];xs.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new sn),n[r].setFromProjectionMatrix(xs,s.coordinateSystem,s.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsBox(t))return!0;return!1}containsPoint(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const i=this._frustums,n=t._frustums;for(let r=0;r<t._count;r++)i[r]===void 0&&(i[r]=new sn),i[r].copy(n[r]);return this._count=t._count,this}clone(){return new _a().copy(this)}},Al=class extends Yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Es=new tt,Ur=new ga,In=new Qn,Nn=new V,yu=class extends kt{constructor(e=new ni,t=new Al){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),In.copy(i.boundingSphere),In.applyMatrix4(n),In.radius+=r,e.ray.intersectsSphere(In)===!1)return;Es.copy(n).invert(),Ur.copy(e.ray).applyMatrix4(Es);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,c=i.index,l=i.attributes.position;if(c!==null){const h=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let d=h,m=f;d<m;d++){const M=c.getX(d);Nn.fromBufferAttribute(l,M),ys(Nn,M,o,n,e,t,this)}}else{const h=Math.max(0,s.start),f=Math.min(l.count,s.start+s.count);for(let d=h,m=f;d<m;d++)Nn.fromBufferAttribute(l,d),ys(Nn,d,o,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function ys(e,t,i,n,r,s,a){const o=Ur.distanceSqToPoint(e);if(o<i){const c=new V;Ur.closestPointToPoint(e,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var va=class extends Nt{constructor(e=[],t=301,i,n,r,s,a,o,c,l){super(e,t,i,n,r,s,a,o,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Tu=class extends Nt{constructor(e,t,i,n,r,s,a,o,c){super(e,t,i,n,r,s,a,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xi=class extends Nt{constructor(e,t,i=xi,n,r,s,a=Tt,o=Tt,c,l=rn,h=1){if(l!==1026&&l!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:h},n,r,s,a,o,l,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ma=class extends Xi{constructor(e,t=xi,i=301,n,r,s=Tt,a=Tt,o,c=rn){const l={width:e,height:e,depth:1},h=[l,l,l,l,l,l];super(e,e,t,i,n,r,s,a,o,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sa=class extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Hr=class xa extends ni{constructor(t=1,i=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let d=0,m=0;M("z","y","x",-1,-1,n,i,t,a,s,0),M("z","y","x",1,-1,n,i,-t,a,s,1),M("x","z","y",1,1,t,n,i,r,a,2),M("x","z","y",1,-1,t,n,-i,r,a,3),M("x","y","z",1,-1,t,i,n,r,s,4),M("x","y","z",-1,-1,t,i,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(f,2));function M(S,g,u,T,A,x,b,R,p,E,L){const G=x/p,N=b/E,B=x/2,q=b/2,P=R/2,H=p+1,K=E+1;let z=0,ce=0;const X=new V;for(let Y=0;Y<K;Y++){const ne=Y*N-q;for(let ye=0;ye<H;ye++)X[S]=(ye*G-B)*T,X[g]=ne*A,X[u]=P,l.push(X.x,X.y,X.z),X[S]=0,X[g]=0,X[u]=R>0?1:-1,h.push(X.x,X.y,X.z),f.push(ye/p),f.push(1-Y/E),z+=1}for(let Y=0;Y<E;Y++)for(let ne=0;ne<p;ne++){const ye=d+ne+H*Y,Z=d+ne+H*(Y+1),te=d+(ne+1)+H*(Y+1),ve=d+(ne+1)+H*Y;c.push(ye,Z,ve),c.push(Z,te,ve),ce+=6}o.addGroup(m,ce,L),m+=ce,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},bl=class Ea extends ni{constructor(t=1,i=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],m=[];let M=0;const S=[],g=n/2;let u=0;T(),a===!1&&(t>0&&A(!0),i>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(m,2));function T(){const x=new V,b=new V;let R=0;const p=(i-t)/n;for(let E=0;E<=s;E++){const L=[],G=E/s,N=G*(i-t)+t;for(let B=0;B<=r;B++){const q=B/r,P=q*c+o,H=Math.sin(P),K=Math.cos(P);b.x=N*H,b.y=-G*n+g,b.z=N*K,f.push(b.x,b.y,b.z),x.set(H,p,K).normalize(),d.push(x.x,x.y,x.z),m.push(q,1-G),L.push(M++)}S.push(L)}for(let E=0;E<r;E++)for(let L=0;L<s;L++){const G=S[L][E],N=S[L+1][E],B=S[L+1][E+1],q=S[L][E+1];(t>0||L!==0)&&(h.push(G,N,q),R+=3),(i>0||L!==s-1)&&(h.push(N,B,q),R+=3)}l.addGroup(u,R,0),u+=R}function A(x){const b=M,R=new Ve,p=new V;let E=0;const L=x===!0?t:i,G=x===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,g*G,0),d.push(0,G,0),m.push(.5,.5),M++;const N=M;for(let B=0;B<=r;B++){const q=B/r*c+o,P=Math.cos(q),H=Math.sin(q);p.x=L*H,p.y=g*G,p.z=L*P,f.push(p.x,p.y,p.z),d.push(0,G,0),R.x=P*.5+.5,R.y=H*.5*G+.5,m.push(R.x,R.y),M++}for(let B=0;B<r;B++){const q=b+B,P=N+B;x===!0?h.push(P,P+1,q):h.push(P+1,P,q),E+=3}l.addGroup(u,E,x===!0?1:2),u+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Au=class ya extends bl{constructor(t=1,i=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,i,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ya(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ta=class Aa extends ni{constructor(t=1,i=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:n,heightSegments:r};const s=t/2,a=i/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,f=t/o,d=i/c,m=[],M=[],S=[],g=[];for(let u=0;u<h;u++){const T=u*d-a;for(let A=0;A<l;A++){const x=A*f-s;M.push(x,-T,0),S.push(0,0,1),g.push(A/o),g.push(1-u/c)}}for(let u=0;u<c;u++)for(let T=0;T<o;T++){const A=T+l*u,x=T+l*(u+1),b=T+1+l*(u+1),R=T+1+l*u;m.push(A,x,R),m.push(x,b,R)}this.setIndex(m),this.setAttribute("position",new ut(M,3)),this.setAttribute("normal",new ut(S,3)),this.setAttribute("uv",new ut(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.width,t.height,t.widthSegments,t.heightSegments)}},bu=class ba extends ni{constructor(t=.5,i=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],h=[];let f=t;const d=(i-t)/r,m=new V,M=new Ve;for(let S=0;S<=r;S++){for(let g=0;g<=n;g++){const u=s+g/n*a;m.x=f*Math.cos(u),m.y=f*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),M.x=(m.x/i+1)/2,M.y=(m.y/i+1)/2,h.push(M.x,M.y)}f+=d}for(let S=0;S<r;S++){const g=S*(n+1);for(let u=0;u<n;u++){const T=u+g,A=T,x=T+n+1,b=T+n+2,R=T+1;o.push(A,x,R),o.push(x,b,R)}}this.setIndex(o),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ru=class Ra extends ni{constructor(t=1,i=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},i=Math.max(3,Math.floor(i)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new V,d=new V,m=[],M=[],S=[],g=[];for(let u=0;u<=n;u++){const T=[],A=u/n,x=a+A*o,b=t*Math.cos(x),R=Math.sqrt(t*t-b*b);let p=0;u===0&&a===0?p=.5/i:u===n&&c===Math.PI&&(p=-.5/i);for(let E=0;E<=i;E++){const L=E/i,G=r+L*s;f.x=-R*Math.cos(G),f.y=b,f.z=R*Math.sin(G),M.push(f.x,f.y,f.z),d.copy(f).normalize(),S.push(d.x,d.y,d.z),g.push(L+p,1-A),T.push(l++)}h.push(T)}for(let u=0;u<n;u++)for(let T=0;T<i;T++){const A=h[u][T+1],x=h[u][T],b=h[u+1][T],R=h[u+1][T+1];(u!==0||a>0)&&m.push(A,x,R),(u!==n-1||c<Math.PI)&&m.push(x,b,R)}this.setIndex(m),this.setAttribute("position",new ut(M,3)),this.setAttribute("normal",new ut(S,3)),this.setAttribute("uv",new ut(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function qi(e){const t={};for(const i in e){t[i]={};for(const n in e[i]){const r=e[i][n];if(Ts(r))r.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null):t[i][n]=r.clone();else if(Array.isArray(r))if(Ts(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[i][n]=s}else t[i][n]=r.slice();else t[i][n]=r}}return t}function yt(e){const t={};for(let i=0;i<e.length;i++){const n=qi(e[i]);for(const r in n)t[r]=n[r]}return t}function Ts(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Rl(e){const t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function wa(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Be.workingColorSpace}var wl={clone:qi,merge:yt},Cl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ti=class extends Yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cl,this.fragmentShader=Pl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=Rl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(n.value);break;case"v2":this.uniforms[i].value=new Ve().fromArray(n.value);break;case"v3":this.uniforms[i].value=new V().fromArray(n.value);break;case"v4":this.uniforms[i].value=new nt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(n.value);break;case"m4":this.uniforms[i].value=new tt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ll=class extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},wu=class extends Yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Il=class extends Yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nl=class extends Yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Dn(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ln=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let s;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break e}s=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let o=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(n=r,r=t[--i-1],e>=r)break e}s=i,i=0;break t}break i}for(;i<s;){const a=i+s>>>1;e<t[a]?s=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dl=class extends ln{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:is,endingEnd:is}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,s=e+1,a=n[r],o=n[s];if(a===void 0)switch(this.getSettings_().endingStart){case ns:r=e,a=2*t-i;break;case rs:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(o===void 0)switch(this.getSettings_().endingEnd){case ns:s=e,o=2*i-t;break;case rs:s=1,o=i+n[1]-n[0];break;default:s=e-1,o=t}const c=(i-t)*.5,l=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(o-i),this._offsetPrev=r*l,this._offsetNext=s*l}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,l=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-t)/(n-t),M=m*m,S=M*m,g=-f*S+2*f*M-f*m,u=(1+f)*S+(-1.5-2*f)*M+(-.5+f)*m+1,T=(-1-d)*S+(1.5+d)*M+.5*m,A=d*S-d*M;for(let x=0;x!==a;++x)r[x]=g*s[l+x]+u*s[c+x]+T*s[o+x]+A*s[h+x];return r}},Ul=class extends ln{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,l=(i-t)/(n-t),h=1-l;for(let f=0;f!==a;++f)r[f]=s[c+f]*h+s[o+f]*l;return r}},Ol=class extends ln{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Fl=class extends ln{interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,l=this.inTangents,h=this.outTangents;if(!l||!h){const m=(i-t)/(n-t),M=1-m;for(let S=0;S!==a;++S)r[S]=s[c+S]*M+s[o+S]*m;return r}const f=a*2,d=e-1;for(let m=0;m!==a;++m){const M=s[c+m],S=s[o+m],g=d*f+m*2,u=h[g],T=h[g+1],A=e*f+m*2,x=l[A],b=l[A+1],R=zl(i,t,u,x,n);r[m]=Ca(R,M,T,b,S)}return r}};function Ca(e,t,i,n,r){const s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*n+e*e*e*r}function Bl(e,t,i,n,r){const s=1-e;return 3*s*s*(i-t)+6*s*e*(n-i)+3*e*e*(r-n)}function zl(e,t,i,n,r){let s=(e-t)/(r-t);for(let a=0;a<8;a++){const o=Ca(s,t,i,n,r)-e;if(Math.abs(o)<1e-10)break;const c=Bl(s,t,i,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Kt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fi(t,this.TimeBufferType),this.values=Fi(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fi(e.times,Array),values:Fi(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),Dn(e.settings)&&(i.settings={inTangents:Fi(e.settings.inTangents,Array),outTangents:Fi(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Fl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qn:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case nr:t=this.InterpolantFactoryMethodSmooth;break;case ts:t=this.InterpolantFactoryMethodBezier}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ce("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qn;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return nr;case this.InterpolantFactoryMethodBezier:return ts}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;Dn(this.settings)&&(As(this.settings.inTangents,e),As(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;Dn(this.settings)&&(bs(this.settings.inTangents,e),bs(this.settings.outTangents,e))}return this}trim(e,t){const i=this.times,n=i.length;let r=0,s=n-1;for(;r!==n&&i[r]<e;)++r;for(;s!==-1&&i[s]>t;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const o=i[a];if(typeof o=="number"&&isNaN(o)){Pe("KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(s!==null&&s>o){Pe("KeyframeTrack: Out of order keys.",this,a,o,s),e=!1;break}s=o}if(n!==void 0&&Yo(n))for(let a=0,o=n.length;a!==o;++a){const c=n[a];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===nr,r=e.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const c=e[a];if(c!==e[a+1]&&(a!==1||c!==e[0]))if(n)o=!0;else{const l=a*i,h=l-i,f=l+i;for(let d=0;d!==i;++d){const m=t[l+d];if(m!==t[h+d]||m!==t[f+d]){o=!0;break}}}if(o){if(a!==s){e[s]=e[a];const l=a*i,h=s*i;for(let f=0;f!==i;++f)t[h+f]=t[l+f]}++s}}if(r>0){e[s]=e[r];for(let a=r*i,o=s*i,c=0;c!==i;++c)t[o+c]=t[a+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,Dn(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function As(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]+=t}function bs(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]*=t}Kt.prototype.ValueTypeName="";Kt.prototype.TimeBufferType=Float32Array;Kt.prototype.ValueBufferType=Float32Array;Kt.prototype.DefaultInterpolation=Ir;var cn=class extends Kt{constructor(e,t,i){super(e,t,i)}};cn.prototype.ValueTypeName="bool";cn.prototype.ValueBufferType=Array;cn.prototype.DefaultInterpolation=qn;cn.prototype.InterpolantFactoryMethodLinear=void 0;cn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends Kt{constructor(e,t,i,n){super(e,t,i,n)}};Gl.prototype.ValueTypeName="color";var Hl=class extends Kt{constructor(e,t,i,n){super(e,t,i,n)}};Hl.prototype.ValueTypeName="number";var Vl=class extends ln{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(i-t)/(n-t);let c=e*a;for(let l=c+a;c!==l;c+=4)bi.slerpFlat(r,0,s,c-a,s,c,o);return r}},Pa=class extends Kt{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Vl(this.times,this.values,this.getValueSize(),e)}};Pa.prototype.ValueTypeName="quaternion";Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var hn=class extends Kt{constructor(e,t,i){super(e,t,i)}};hn.prototype.ValueTypeName="string";hn.prototype.ValueBufferType=Array;hn.prototype.DefaultInterpolation=qn;hn.prototype.InterpolantFactoryMethodLinear=void 0;hn.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends Kt{constructor(e,t,i,n){super(e,t,i,n)}};kl.prototype.ValueTypeName="vector";var Wl=class{constructor(e,t,i){const n=this;let r=!1,s=0,a=0,o;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(l){a++,r===!1&&n.onStart!==void 0&&n.onStart(l,s,a),r=!0},this.itemEnd=function(l){s++,n.onProgress!==void 0&&n.onProgress(l,s,a),s===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(l){n.onError!==void 0&&n.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),o?o(l):l},this.setURLModifier=function(l){return o=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){const h=c.indexOf(l);return h!==-1&&c.splice(h,2),this},this.getHandler=function(l){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(l))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xl=new Wl,ql=class{constructor(e){this.manager=e!==void 0?e:Xl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ql.DEFAULT_MATERIAL_NAME="__DEFAULT";var La=class extends kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Rr=new tt,Rs=new V,ws=new V,Yl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sn,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Rs.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rs),ws.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ws),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Rr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=n?n.z/r.x:1,a=n?n.w/r.y:1,o=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*s,0,0,.5*s+o,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+o,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Un=new V,On=new bi,Wt=new V,Ia=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Un,On,Wt),Wt.x===1&&Wt.y===1&&Wt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Un,On,Wt.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Un,On,Wt),Wt.x===1&&Wt.y===1&&Wt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Un,On,Wt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new V,Cs=new Ve,Ps=new Ve,Ht=class extends Ia{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Cs,Ps),t.subVectors(Ps,Cs)}setViewOffset(e,t,i,n,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,c=s.fullHeight;r+=s.offsetX*n/o,t-=s.offsetY*i/c,n*=s.width/o,i*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Kl=class extends Yl{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},Cu=class extends La{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Kl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Zl=class extends Ia{constructor(e=-1,t=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,s=i+e,a=n+t,o=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=l*this.view.offsetY,o=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pu=class extends La{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Bi=-90,zi=1,Or=class extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ht(Bi,zi,e,t);n.layers=this.layers,this.add(n);const r=new Ht(Bi,zi,e,t);r.layers=this.layers,this.add(r);const s=new Ht(Bi,zi,e,t);s.layers=this.layers,this.add(s);const a=new Ht(Bi,zi,e,t);a.layers=this.layers,this.add(a);const o=new Ht(Bi,zi,e,t);o.layers=this.layers,this.add(o);const c=new Ht(Bi,zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,a,o]=t;for(const c of t)this.remove(c);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,c,l]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,n),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,n),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=M,e.setRenderTarget(i,5,n),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(h,f,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Jl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},$l="\\[\\]\\.:\\/",Ql=new RegExp("[\\[\\]\\.:\\/]","g"),Vr="[^\\[\\]\\.:\\/]",jl="[^"+$l.replace("\\.","")+"]",ec=/((?:WC+[\/:])*)/.source.replace("WC",Vr),tc=/(WCOD+)?/.source.replace("WCOD",jl),ic=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vr),nc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vr),rc=new RegExp("^"+ec+tc+ic+nc+"$"),sc=["material","materials","bones","map"],ac=class{constructor(e,t,i){const n=i||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},et=class Hi{constructor(t,i,n){this.path=i,this.parsedPath=n||Hi.parseTrackName(i),this.node=Hi.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,n){return t&&t.isAnimationObjectGroup?new Hi.Composite(t,i,n):new Hi(t,i,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ql,"")}static parseTrackName(t){const i=rc.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);sc.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(i);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===i||o.uuid===i)return o;const c=n(o.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[i++]=n[r]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++]}_setValue_array_setNeedsUpdate(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node;const i=this.parsedPath,n=i.objectName,r=i.propertyName;let s=i.propertyIndex;if(t||(t=Hi.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=i.objectIndex;switch(n){case"materials":if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[r];if(a===void 0){const l=i.nodeName;Pe("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=ac;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Iu=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};function Ls(e,t,i,n){const r=oc(n);switch(i){case ro:return e*t;case ao:return e*t/r.components*r.byteLength;case na:return e*t/r.components*r.byteLength;case Xn:return e*t*2/r.components*r.byteLength;case ra:return e*t*2/r.components*r.byteLength;case so:return e*t*3/r.components*r.byteLength;case kn:return e*t*4/r.components*r.byteLength;case sa:return e*t*4/r.components*r.byteLength;case oo:case lo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case co:case ho:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fo:case mo:return Math.max(e,16)*Math.max(t,8)/4;case uo:case po:return Math.max(e,8)*Math.max(t,8)/2;case go:case _o:case Mo:case So:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case vo:case xo:case Eo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case bo:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case wo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Co:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Po:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Io:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case No:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Do:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Uo:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Fo:case Bo:case zo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Go:case Ho:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Vo:case ko:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function oc(e){switch(e){case ui:case ja:return{byteLength:1,components:1};case ea:case eo:case di:return{byteLength:2,components:1};case ta:case ia:return{byteLength:2,components:4};case xi:case to:case $n:return{byteLength:4,components:1};case io:case no:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Na(){let e=null,t=!1,i=null,n=null;function r(s,a){n=e.requestAnimationFrame(r),i(s,a)}return{start:function(){t!==!0&&i!==null&&e!==null&&(n=e.requestAnimationFrame(r),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function lc(e){const t=new WeakMap;function i(o,c){const l=o.array,h=o.usage,f=l.byteLength,d=e.createBuffer();e.bindBuffer(c,d),e.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=e.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=e.SHORT;else if(l instanceof Uint32Array)m=e.UNSIGNED_INT;else if(l instanceof Int32Array)m=e.INT;else if(l instanceof Int8Array)m=e.BYTE;else if(l instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(e.bindBuffer(l,o),f.length===0)e.bufferSubData(l,0,h);else{f.sort((m,M)=>m.start-M.start);let d=0;for(let m=1;m<f.length;m++){const M=f[d],S=f[m];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++d,f[d]=S)}f.length=d+1;for(let m=0,M=f.length;m<M;m++){const S=f[m];e.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(e.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,i(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var De={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},pe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},qt={basic:{uniforms:yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:yt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:yt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:yt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:yt([pe.points,pe.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:yt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:yt([pe.common,pe.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:yt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:yt([pe.sprite,pe.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:yt([pe.common,pe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:yt([pe.lights,pe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};qt.physical={uniforms:yt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var Fn={r:0,b:0,g:0},cc=new tt,Da=new Ne;Da.set(-1,0,0,0,1,0,0,0,1);function hc(e,t,i,n,r,s){const a=new Ge(0);let o=r===!0?0:1,c,l,h=null,f=0,d=null;function m(T){let A=T.isScene===!0?T.background:null;if(A&&A.isTexture){const x=T.backgroundBlurriness>0;A=t.get(A,x)}return A}function M(T){let A=!1;const x=m(T);x===null?g(a,o):x&&x.isColor&&(g(x,1),A=!0);const b=e.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function S(T,A){const x=m(A);x&&x.isCubeTexture?(l===void 0&&(l=new yi(new Hr(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:qi(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,R,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(cc.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Da),l.material.toneMapped=Be.getTransfer(x.colorSpace)!==Kn,(h!==x||f!==x.version||d!==e.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,d=e.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new yi(new Ta(2,2),new Ti({name:"BackgroundMaterial",uniforms:qi(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Be.getTransfer(x.colorSpace)!==Kn,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=e.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function g(T,A){T.getRGB(Fn,wa(e)),i.buffers.color.setClear(Fn.r,Fn.g,Fn.b,A,s)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,A=1){a.set(T),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,g(a,o)},render:M,addToRenderList:S,dispose:u}}function uc(e,t){const i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(N,B,q,P,H){let K=!1;const z=f(N,P,q,B);s!==z&&(s=z,l(s.object)),K=m(N,P,q,H),K&&M(N,P,q,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,x(N,B,q,P),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return e.createVertexArray()}function l(N){return e.bindVertexArray(N)}function h(N){return e.deleteVertexArray(N)}function f(N,B,q,P){const H=P.wireframe===!0;let K=n[B.id];K===void 0&&(K={},n[B.id]=K);const z=N.isInstancedMesh===!0?N.id:0;let ce=K[z];ce===void 0&&(ce={},K[z]=ce);let X=ce[q.id];X===void 0&&(X={},ce[q.id]=X);let Y=X[H];return Y===void 0&&(Y=d(c()),X[H]=Y),Y}function d(N){const B=[],q=[],P=[];for(let H=0;H<i;H++)B[H]=0,q[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:P,object:N,attributes:{},index:null}}function m(N,B,q,P){const H=s.attributes,K=B.attributes;let z=0;const ce=q.getAttributes();for(const X in ce)if(ce[X].location>=0){const Y=H[X];let ne=K[X];if(ne===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor)),Y===void 0||Y.attribute!==ne||ne&&Y.data!==ne.data)return!0;z++}return s.attributesNum!==z||s.index!==P}function M(N,B,q,P){const H={},K=B.attributes;let z=0;const ce=q.getAttributes();for(const X in ce)if(ce[X].location>=0){let Y=K[X];Y===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor));const ne={};ne.attribute=Y,Y&&Y.data&&(ne.data=Y.data),H[X]=ne,z++}s.attributes=H,s.attributesNum=z,s.index=P}function S(){const N=s.newAttributes;for(let B=0,q=N.length;B<q;B++)N[B]=0}function g(N){u(N,0)}function u(N,B){const q=s.newAttributes,P=s.enabledAttributes,H=s.attributeDivisors;q[N]=1,P[N]===0&&(e.enableVertexAttribArray(N),P[N]=1),H[N]!==B&&(e.vertexAttribDivisor(N,B),H[N]=B)}function T(){const N=s.newAttributes,B=s.enabledAttributes;for(let q=0,P=B.length;q<P;q++)B[q]!==N[q]&&(e.disableVertexAttribArray(q),B[q]=0)}function A(N,B,q,P,H,K,z){z===!0?e.vertexAttribIPointer(N,B,q,H,K):e.vertexAttribPointer(N,B,q,P,H,K)}function x(N,B,q,P){S();const H=P.attributes,K=q.getAttributes(),z=B.defaultAttributeValues;for(const ce in K){const X=K[ce];if(X.location>=0){let Y=H[ce];if(Y===void 0&&(ce==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),ce==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor)),Y!==void 0){const ne=Y.normalized,ye=Y.itemSize,Z=t.get(Y);if(Z===void 0)continue;const te=Z.buffer,ve=Z.type,Te=Z.bytesPerElement,Ae=ve===e.INT||ve===e.UNSIGNED_INT||Y.gpuType===1013;if(Y.isInterleavedBufferAttribute){const he=Y.data,Ue=he.isInterleavedBuffer===!0?he.stride:he.itemSize,We=Y.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let be=0;be<X.locationSize;be++)u(X.location+be,he.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let be=0;be<X.locationSize;be++)g(X.location+be);e.bindBuffer(e.ARRAY_BUFFER,te);for(let be=0;be<X.locationSize;be++)A(X.location+be,ye/X.locationSize,ve,ne,Ue*Te,(We+ye/X.locationSize*be)*Te,Ae)}else{if(Y.isInstancedBufferAttribute){for(let he=0;he<X.locationSize;he++)u(X.location+he,Y.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let he=0;he<X.locationSize;he++)g(X.location+he);e.bindBuffer(e.ARRAY_BUFFER,te);for(let he=0;he<X.locationSize;he++)A(X.location+he,ye/X.locationSize,ve,ne,ye*Te,ye/X.locationSize*he*Te,Ae)}}else if(z!==void 0){const ne=z[ce];if(ne!==void 0)switch(ne.length){case 2:e.vertexAttrib2fv(X.location,ne);break;case 3:e.vertexAttrib3fv(X.location,ne);break;case 4:e.vertexAttrib4fv(X.location,ne);break;default:e.vertexAttrib1fv(X.location,ne)}}}}T()}function b(){L();for(const N in n){const B=n[N];for(const q in B){const P=B[q];for(const H in P){const K=P[H];for(const z in K)h(K[z].object),delete K[z];delete P[H]}}delete n[N]}}function R(N){if(n[N.id]===void 0)return;const B=n[N.id];for(const q in B){const P=B[q];for(const H in P){const K=P[H];for(const z in K)h(K[z].object),delete K[z];delete P[H]}}delete n[N.id]}function p(N){for(const B in n){const q=n[B];for(const P in q){const H=q[P];if(H[N.id]===void 0)continue;const K=H[N.id];for(const z in K)h(K[z].object),delete K[z];delete H[N.id]}}}function E(N){for(const B in n){const q=n[B],P=N.isInstancedMesh===!0?N.id:0,H=q[P];if(H!==void 0){for(const K in H){const z=H[K];for(const ce in z)h(z[ce].object),delete z[ce];delete H[K]}delete q[P],Object.keys(q).length===0&&delete n[B]}}}function L(){G(),a=!0,s!==r&&(s=r,l(s.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:G,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfObject:E,releaseStatesOfProgram:p,initAttributes:S,enableAttribute:g,disableUnusedAttributes:T}}function dc(e,t,i){let n;function r(c){n=c}function s(c,l){e.drawArrays(n,c,l),i.update(l,n,1)}function a(c,l,h){h!==0&&(e.drawArraysInstanced(n,c,l,h),i.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];i.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function fc(e,t,i,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const p=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(p){return!(p!==1023&&n.convert(p)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(p){const E=p===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(p!==1009&&p!==1015&&!E&&n.convert(p)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(p){if(p==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=i.precision!==void 0?i.precision:"highp";const h=c(l);h!==l&&(Ce("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.logarithmicDepthBuffer===!0&&f===!1;i.reversedDepthBuffer===!0&&f===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&f===!0&&Ce("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),R=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:x,maxSamples:b,samples:R}}function pc(e){const t=this;let i=null,n=0,r=!1,s=!1;const a=new hi,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){i=h(f,d,0)},this.setState=function(f,d,m){const M=f.clippingPlanes,S=f.clipIntersection,g=f.clipShadows,u=e.get(f);if(!r||M===null||M.length===0||s&&!g)s?h(null):l();else{const T=s?0:n,A=T*4;let x=u.clippingState||null;c.value=x,x=h(M,d,A,m);for(let b=0;b!==A;++b)x[b]=i[b];u.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==i&&(c.value=i,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,m,M){const S=f!==null?f.length:0;let g=null;if(S!==0){if(g=c.value,M!==!0||g===null){const u=m+S*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<u)&&(g=new Float32Array(u));for(let A=0,x=m;A!==S;++A,x+=4)a.copy(f[A]).applyMatrix4(T,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}var kr=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new va(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Hr(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const s=new yi(n,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=Vt),new Or(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}},Is=256,mc=3,gc=20,Ua=256,Oa=16,_c=3,vc=new V,Mc=new Ge,Ns=class Fa{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Or(1,10,null),this._boxMesh=new yi(new Hr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,n=.1,r=100,s={}){const{size:a=256,position:o=vc}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),h=this._getSourceTarget(!0);i>0&&(h.texture.mipmapsAutoUpdate=!1);const f=c.autoClear,d=c.autoClearColor,m=c.autoClearDepth,M=c.autoClearStencil,S=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(t.background=c.getClearColor(Mc));const g=new Or(n,r,h);return g.position.copy(o),g.update(c,t),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=m,c.autoClearStencil=M,t.background=S,i>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,i)),this._applyPMREM(l),l}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Os(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Us(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(Is,Qo(t))}_fromTexture(t,i){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?Is:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,i=Ds(t,!1,!1),n=Math.log2(t)-mc;for(let r=0;r<=n;r++)i.texture.mipmaps.push({width:t>>r,height:t>>r});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){const i=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==i||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ds(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=t,s.activeMipmapLevel=i;const a=t.width>>i;t.viewport.set(0,0,a,a),s.update(this._renderer,r),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===301||t.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Os()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Us()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Sc(),this._integrationMaterial=xc());const i=this._cubeSize,n=t.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(i/Oa);for(let a=0;a<=n;a++){const o=Fa.lodToRoughness(a,n);if(a>n-_c)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const c=o>0?Math.log2(i)+.5*Math.log2(6/(Ua*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=Ec());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(t,0,n),r.envMap.value=t.texture,this._renderCube(s,0,n)}};function Ds(e,t,i){return new kr(e,{minFilter:Jn,generateMipmaps:t,type:di,colorSpace:Nr,depthBuffer:i})}function un(e,t,i){return new Ti({name:e,uniforms:t,vertexShader:De.cube_vert,fragmentShader:i,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Sc(){return un("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ua}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xc(){return un("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Oa}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ec(){return un("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gc}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Us(){return un("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Os(){return un("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function yc(e){let t=new WeakMap,i=new WeakMap,n=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===303||m===304)if(t.has(d)){const M=t.get(d).texture;return o(M,d.mapping)}else{const M=d.image;if(M&&M.height>0){const S=new kr(M.height);return S.fromEquirectangularTexture(e,d),t.set(d,S),d.addEventListener("dispose",l),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const m=d.mapping,M=m===303||m===304,S=m===301||m===302;if(M||S){let g=i.get(d);const u=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return n===null&&(n=new Ns(e)),g=M?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,i.set(d,g),g.texture;if(g!==void 0)return g.texture;{const T=d.image;return M&&T&&T.height>0||S&&T&&c(T)?(n===null&&(n=new Ns(e)),g=M?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,i.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,m){return m===303?d.mapping=301:m===304&&(d.mapping=302),d}function c(d){let m=0;const M=6;for(let S=0;S<M;S++)d[S]!==void 0&&m++;return m===M}function l(d){const m=d.target;m.removeEventListener("dispose",l);const M=t.get(m);M!==void 0&&(t.delete(m),M.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const M=i.get(m);M!==void 0&&(i.delete(m),M.dispose())}function f(){t=new WeakMap,i=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Tc(e){const t={};function i(n){if(t[n]!==void 0)return t[n];const r=e.getExtension(n);return t[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){const r=i(n);return r===null&&zn("WebGLRenderer: "+n+" extension not supported."),r}}}function Ac(e,t,i,n){const r={},s=new WeakMap,a=new FinalizationRegistry(M=>delete r[M]);function o(M){c(M.target)}function c(M){M.index!==null&&t.remove(M.index);for(const g in M.attributes)t.remove(M.attributes[g]);M.removeEventListener("dispose",o),delete r[M.id],a.unregister(M);const S=s.get(M);S&&(t.remove(S),s.delete(M)),n.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,i.memory.geometries--}function l(M,S){return r[S.id]!==void 0||(S.addEventListener("dispose",o),r[S.id]=new WeakRef(S),a.register(S,S.id,S),i.memory.geometries++),S}function h(M){const S=M.attributes;for(const g in S)t.update(S[g],e.ARRAY_BUFFER)}function f(M){const S=M.index,g=M.attributes.position;let u=0;if(g===void 0)return;const T=S!==null?S.array.length:g.array.length/3-1,A=new(g.count>=65535?pa:fa)(Math.ceil(T/3)*6,1),x=A.array;if(S!==null){const R=S.array;u=S.version;for(let p=0,E=0;p<T;p+=3){const L=R[p+0],G=R[p+1],N=R[p+2];x[E++]=L,x[E++]=G,x[E++]=G,x[E++]=N,x[E++]=N,x[E++]=L}}else{u=g.version;for(let R=0,p=0;R<T;R+=3){const E=R+0,L=R+1,G=R+2;x[p++]=E,x[p++]=L,x[p++]=L,x[p++]=G,x[p++]=G,x[p++]=E}}A.version=u;const b=s.get(M);b&&t.remove(b),s.set(M,A)}function d(M){const S=s.get(M);if(S){const g=M.index;g!==null&&S.version<g.version&&f(M)}else f(M);return s.get(M)}function m(){for(const M in r){const S=r[M].deref();S!==void 0&&c(S)}}return{get:l,update:h,getWireframeAttribute:d,dispose:m}}function bc(e,t,i){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){e.drawElements(n,d,s,f*a),i.update(d,n,1)}function l(f,d,m){m!==0&&(e.drawElementsInstanced(n,d,s,f*a,m),i.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let M=0;for(let S=0;S<m;S++)M+=d[S];i.update(M,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Rc(e){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(i.calls++,a){case e.TRIANGLES:i.triangles+=o*(s/3);break;case e.LINES:i.lines+=o*(s/2);break;case e.LINE_STRIP:i.lines+=o*(s-1);break;case e.LINE_LOOP:i.lines+=o*s;break;case e.POINTS:i.points+=o*s;break;default:Pe("WebGLInfo: Unknown draw mode:",a)}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:n}}function wc(e,t,i){const n=new WeakMap,r=new nt;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let L=function(){p.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),M===!0&&(A=2),S===!0&&(A=3);let x=o.attributes.position.count*A,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const R=new Float32Array(x*b*4*f),p=new oa(R,x,b,f);p.type=$n,p.needsUpdate=!0;const E=A*4;for(let G=0;G<f;G++){const N=g[G],B=u[G],q=T[G],P=x*b*4*G;for(let H=0;H<N.count;H++){const K=H*E;m===!0&&(r.fromBufferAttribute(N,H),R[P+K+0]=r.x,R[P+K+1]=r.y,R[P+K+2]=r.z,R[P+K+3]=0),M===!0&&(r.fromBufferAttribute(B,H),R[P+K+4]=r.x,R[P+K+5]=r.y,R[P+K+6]=r.z,R[P+K+7]=0),S===!0&&(r.fromBufferAttribute(q,H),R[P+K+8]=r.x,R[P+K+9]=r.y,R[P+K+10]=r.z,R[P+K+11]=q.itemSize===4?r.w:1)}}d={count:f,texture:p,size:new Ve(x,b)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",a.morphTexture,i);else{let m=0;for(let S=0;S<l.length;S++)m+=l[S];const M=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(e,"morphTargetBaseInfluence",M),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),c.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:s}}function Cc(e,t,i,n,r){let s=new WeakMap;function a(l){const h=r.render.frame,f=l.geometry,d=t.get(l,f);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:a,dispose:o}}var Pc={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Lc(e,t,i,n,r,s){const a=new Yt(t,i,{type:e,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const h=new ni;h.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ut([0,2,0,0,2,0],2));const f=new Ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new yi(h,f),m=new Zl(-1,1,1,-1,0,1);let M=null,S=null,g=!1,u,T=null,A=[],x=!1;this.setSize=function(b,R){a.setSize(b,R),o!==null&&o.setSize(b,R),c!==null&&c.setSize(b,R);for(let p=0;p<A.length;p++){const E=A[p];E.setSize&&E.setSize(b,R)}},this.setEffects=function(b){A=b,x=A.length>0&&A[0].isRenderPass===!0;const R=a.width,p=a.height;A.length>0&&o===null&&(o=new Yt(R,p,{type:di,depthBuffer:!1,stencilBuffer:!1}),c=new Yt(R,p,{type:di,depthBuffer:!1,stencilBuffer:!1}));const E=r===!0&&A.some(L=>L.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&l===null&&(l=new Xi(R,p),s===!0&&(l.format=Wn,l.type=Br)),a.dispose(),a.depthTexture=E?l:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let L=0;L<A.length;L++){const G=A[L];G.setSize&&G.setSize(R,p),E&&G.needsDepthTexture===!0&&G.setDepthTexture&&G.setDepthTexture(l)}},this.begin=function(b,R){if(g||b.toneMapping===0&&A.length===0)return!1;if(T=R,R!==null){const p=R.width,E=R.height;(a.width!==p||a.height!==E)&&this.setSize(p,E)}return x===!1&&b.setRenderTarget(a),u=b.toneMapping,b.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(b,R){b.toneMapping=u,g=!0;let p=a,E=o;for(let L=0;L<A.length;L++){const G=A[L];G.enabled!==!1&&(G.render(b,E,p,R),G.needsSwap!==!1&&(p=E,E=E===o?c:o))}if(M!==b.outputColorSpace||S!==b.toneMapping){M=b.outputColorSpace,S=b.toneMapping,f.defines={},Be.getTransfer(M)==="srgb"&&(f.defines.SRGB_TRANSFER="");const L=Pc[S];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=p.texture,b.setRenderTarget(T),b.render(d,m),T=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Ba=new Nt,za=new Xi(1,1),Ga=new Ma(1),Ha=new oa,Va=new al,ka=new va,Fs=[],Bs=[],zs=new Float32Array(16),Gs=new Float32Array(9),Hs=new Float32Array(4);function Ki(e,t,i){const n=e[0];if(n<=0||n>0)return e;const r=t*i;let s=Fs[r];if(s===void 0&&(s=new Float32Array(r),Fs[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=i,e[a].toArray(s,o)}return s}function ot(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function lt(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function jn(e,t){let i=Bs[t];i===void 0&&(i=new Int32Array(t),Bs[t]=i);for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function Ic(e,t){const i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Nc(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ot(i,t))return;e.uniform2fv(this.addr,t),lt(i,t)}}function Dc(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ot(i,t))return;e.uniform3fv(this.addr,t),lt(i,t)}}function Uc(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ot(i,t))return;e.uniform4fv(this.addr,t),lt(i,t)}}function Oc(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(ot(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),lt(i,t)}else{if(ot(i,n))return;Hs.set(n),e.uniformMatrix2fv(this.addr,!1,Hs),lt(i,n)}}function Fc(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(ot(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),lt(i,t)}else{if(ot(i,n))return;Gs.set(n),e.uniformMatrix3fv(this.addr,!1,Gs),lt(i,n)}}function Bc(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(ot(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),lt(i,t)}else{if(ot(i,n))return;zs.set(n),e.uniformMatrix4fv(this.addr,!1,zs),lt(i,n)}}function zc(e,t){const i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Gc(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ot(i,t))return;e.uniform2iv(this.addr,t),lt(i,t)}}function Hc(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ot(i,t))return;e.uniform3iv(this.addr,t),lt(i,t)}}function Vc(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ot(i,t))return;e.uniform4iv(this.addr,t),lt(i,t)}}function kc(e,t){const i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Wc(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ot(i,t))return;e.uniform2uiv(this.addr,t),lt(i,t)}}function Xc(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ot(i,t))return;e.uniform3uiv(this.addr,t),lt(i,t)}}function qc(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ot(i,t))return;e.uniform4uiv(this.addr,t),lt(i,t)}}function er(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Yc(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?s=er(za):s=Ba,i.setTexture2D(t||s,r)}function Kc(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture3D(t||Va,r)}function Zc(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r);let s;this.type===e.SAMPLER_CUBE_SHADOW?s=er(Ga):s=ka,i.setTextureCube(t||s,r)}function Jc(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture2DArray(t||Ha,r)}function $c(e){switch(e){case 5126:return Ic;case 35664:return Nc;case 35665:return Dc;case 35666:return Uc;case 35674:return Oc;case 35675:return Fc;case 35676:return Bc;case 5124:case 35670:return zc;case 35667:case 35671:return Gc;case 35668:case 35672:return Hc;case 35669:case 35673:return Vc;case 5125:return kc;case 36294:return Wc;case 36295:return Xc;case 36296:return qc;case 35678:case 36198:case 36298:case 36306:case 35682:return Yc;case 35679:case 36299:case 36307:return Kc;case 35680:case 36300:case 36308:case 36293:return Zc;case 36289:case 36303:case 36311:case 36292:return Jc}}function Qc(e,t){e.uniform1fv(this.addr,t)}function jc(e,t){const i=Ki(t,this.size,2);e.uniform2fv(this.addr,i)}function eh(e,t){const i=Ki(t,this.size,3);e.uniform3fv(this.addr,i)}function th(e,t){const i=Ki(t,this.size,4);e.uniform4fv(this.addr,i)}function ih(e,t){const i=Ki(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function nh(e,t){const i=Ki(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function rh(e,t){const i=Ki(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function sh(e,t){e.uniform1iv(this.addr,t)}function ah(e,t){e.uniform2iv(this.addr,t)}function oh(e,t){e.uniform3iv(this.addr,t)}function lh(e,t){e.uniform4iv(this.addr,t)}function ch(e,t){e.uniform1uiv(this.addr,t)}function hh(e,t){e.uniform2uiv(this.addr,t)}function uh(e,t){e.uniform3uiv(this.addr,t)}function dh(e,t){e.uniform4uiv(this.addr,t)}function fh(e,t,i){const n=this.cache,r=t.length,s=jn(i,r);ot(n,s)||(e.uniform1iv(this.addr,s),lt(n,s));let a;this.type===e.SAMPLER_2D_SHADOW?a=er(za):a=Ba;for(let o=0;o!==r;++o)i.setTexture2D(t[o]||a,s[o])}function ph(e,t,i){const n=this.cache,r=t.length,s=jn(i,r);ot(n,s)||(e.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)i.setTexture3D(t[a]||Va,s[a])}function mh(e,t,i){const n=this.cache,r=t.length,s=jn(i,r);ot(n,s)||(e.uniform1iv(this.addr,s),lt(n,s));let a;this.type===e.SAMPLER_CUBE_SHADOW?a=er(Ga):a=ka;for(let o=0;o!==r;++o)i.setTextureCube(t[o]||a,s[o])}function gh(e,t,i){const n=this.cache,r=t.length,s=jn(i,r);ot(n,s)||(e.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)i.setTexture2DArray(t[a]||Ha,s[a])}function _h(e){switch(e){case 5126:return Qc;case 35664:return jc;case 35665:return eh;case 35666:return th;case 35674:return ih;case 35675:return nh;case 35676:return rh;case 5124:case 35670:return sh;case 35667:case 35671:return ah;case 35668:case 35672:return oh;case 35669:case 35673:return lh;case 5125:return ch;case 36294:return hh;case 36295:return uh;case 36296:return dh;case 35678:case 36198:case 36298:case 36306:case 35682:return fh;case 35679:case 36299:case 36307:return ph;case 35680:case 36300:case 36308:case 36293:return mh;case 36289:case 36303:case 36311:case 36292:return gh}}var vh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$c(t.type)}},Mh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_h(t.type)}},Sh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const a=n[r];a.setValue(e,t[a.id],i)}}},wr=/(\w+)(\])?(\[|\.)?/g;function Vs(e,t){e.seq.push(t),e.map[t.id]=t}function xh(e,t,i){const n=e.name,r=n.length;for(wr.lastIndex=0;;){const s=wr.exec(n),a=wr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Vs(i,l===void 0?new vh(o,e,t):new Mh(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new Sh(o),Vs(i,h)),i=h}}}var Vn=class{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s);xh(a,e.getUniformLocation(t,a.name),this)}const n=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):r.push(s);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){const a=t[r],o=i[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.id in t&&i.push(s)}return i}};function ks(e,t,i){const n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var Eh=37297,yh=0;function Th(e,t){const i=e.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${i[a]}`)}return n.join(`
`)}var Ws=new Ne;function Ah(e){Be._getMatrix(Ws,Be.workingColorSpace,e);const t=`mat3( ${Ws.elements.map(i=>i.toFixed(4))} )`;switch(Be.getTransfer(e)){case Yn:return[t,"LinearTransferOETF"];case Kn:return[t,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Xs(e,t,i){const n=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return i.toUpperCase()+`

`+r+`

`+Th(e.getShaderSource(t),a)}else return r}function bh(e,t){const i=Ah(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Rh={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function wh(e,t){const i=Rh[t];return i===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Bn=new V;function Ch(){return Be.getLuminanceCoefficients(Bn),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Bn.x.toFixed(4)}, ${Bn.y.toFixed(4)}, ${Bn.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ph(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nn).join(`
`)}function Lh(e){const t=[];for(const i in e){const n=e[i];n!==!1&&t.push("#define "+i+" "+n)}return t.join(`
`)}function Ih(e,t){const i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=e.getActiveAttrib(t,r),a=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),i[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:o}}return i}function nn(e){return e!==""}function qs(e,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ys(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Nh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fr(e){return e.replace(Nh,Dh)}function Dh(e,t){const i=De[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Fr(i)}var Uh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ks(e){return e.replace(Uh,Oh)}function Oh(e,t,i,n){let r="";for(let s=parseInt(t);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zs(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Fh={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Bh(e){return Fh[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zh={302:"ENVMAP_MODE_REFRACTION"};function Gh(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":zh[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Hh={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Vh(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Hh[e.combine]||"ENVMAP_BLENDING_NONE"}function kh(e,t,i,n){const r=e.getContext(),s=i.defines;let a=i.vertexShader,o=i.fragmentShader;const c=Bh(i),l=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Gh(i),f=Vh(i),d=Ph(i),m=Lh(s),M=r.createProgram();let S,g,u=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(nn).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(nn).join(`
`),g.length>0&&(g+=`
`)):(S=[Zs(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+c:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nn).join(`
`),g=[Zs(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+l:"",i.envMap?"#define "+h:"",i.envMap?"#define "+f:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+c:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==0?"#define TONE_MAPPING":"",i.toneMapping!==0?De.tonemapping_pars_fragment:"",i.toneMapping!==0?wh("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,bh("linearToOutputTexel",i.outputColorSpace),Ch(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nn).join(`
`)),a=Fr(a),a=qs(a,i),a=Ys(a,i),o=Fr(o),o=qs(o,i),o=Ys(o,i),a=Ks(a),o=Ks(o),i.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=u+S+a,A=u+g+o,x=ks(r,r.VERTEX_SHADER,T),b=ks(r,r.FRAGMENT_SHADER,A);r.attachShader(M,x),r.attachShader(M,b),i.index0AttributeName!==void 0?r.bindAttribLocation(M,0,i.index0AttributeName):i.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(G){if(e.debug.checkShaderErrors){const N=r.getProgramInfoLog(M)||"",B=r.getShaderInfoLog(x)||"",q=r.getShaderInfoLog(b)||"",P=N.trim(),H=B.trim(),K=q.trim();let z=!0,ce=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,M,x,b);else{const X=Xs(r,x,"vertex"),Y=Xs(r,b,"fragment");Pe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+P+`
`+X+`
`+Y)}else P!==""?Ce("WebGLProgram: Program Info Log:",P):(H===""||K==="")&&(ce=!1);ce&&(G.diagnostics={runnable:z,programLog:P,vertexShader:{log:H,prefix:S},fragmentShader:{log:K,prefix:g}})}r.deleteShader(x),r.deleteShader(b),p=new Vn(r,M),E=Ih(r,M)}let p;this.getUniforms=function(){return p===void 0&&R(this),p};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(M,Eh)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yh++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=x,this.fragmentShader=b,this}var Wh=0,Xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qh(e),t.set(e,i)),i}},qh=class{constructor(e){this.id=Wh++,this.code=e,this.usedTimes=0}};function Yh(e){return e===1030||e===37490||e===36285}function Kh(e,t,i,n,r,s){const a=new ha,o=new Xh,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(p){return c.add(p),p===0?"uv":`uv${p}`}function M(p,E,L,G,N,B){const q=G.fog,P=N.geometry,H=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?G.environment:null,K=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,z=t.get(p.envMap||H,K),ce=d[p.type];let X=n.precision;p.precision!==null&&(X=n.getMaxPrecision(p.precision),X!==p.precision&&Ce("WebGLProgram.getParameters:",p.precision,"not supported, using",X,"instead."));const Y=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ne=Y!==void 0?Y.length:0;let ye=0;P.morphAttributes.position!==void 0&&(ye=1),P.morphAttributes.normal!==void 0&&(ye=2),P.morphAttributes.color!==void 0&&(ye=3);let Z,te,ve,Te;if(ce){const me=qt[ce];Z=me.vertexShader,te=me.fragmentShader}else{Z=p.vertexShader,te=p.fragmentShader;const me=o.getVertexShaderStage(p),Qe=o.getFragmentShaderStage(p);o.update(p,me,Qe),ve=me.id,Te=Qe.id}const Ae=e.getRenderTarget(),he=e.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,We=N.isBatchedMesh===!0,be=!!p.map,dt=!!p.matcap,xt=!!z,ft=xt&&z.isPMREMTexture===!0,rt=!!p.aoMap,At=!!p.lightMap,wt=!!p.bumpMap&&p.wireframe===!1,st=!!p.normalMap,mt=!!p.displacementMap,bt=!!p.emissiveMap,Rt=!!p.metalnessMap,Dt=!!p.roughnessMap,D=p.anisotropy>0,Ut=p.clearcoat>0,Ke=p.diffuseRoughness>0,ct=p.dispersion>0,fe=p.retroreflectivity>0,Ze=p.iridescence>0,Re=p.sheen>0,Ie=p.transmission>0,gt=D&&!!p.anisotropyMap,y=Ut&&!!p.clearcoatMap,_=Ut&&!!p.clearcoatNormalMap,O=Ut&&!!p.clearcoatRoughnessMap,j=Ke&&!!p.diffuseRoughnessMap,J=Ze&&!!p.iridescenceMap,se=Ze&&!!p.iridescenceThicknessMap,ae=Re&&!!p.sheenColorMap,I=Re&&!!p.sheenRoughnessMap,Q=!!p.specularMap,_e=!!p.specularColorMap,w=!!p.specularIntensityMap,W=Ie&&!!p.transmissionMap,$=Ie&&!!p.thicknessMap,ie=!!p.gradientMap,ue=!!p.alphaMap,oe=p.alphaTest>0,xe=!!p.alphaHash,ee=!!p.extensions;let Le=0;p.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Le=e.toneMapping);const we=ft?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Fe={shaderID:ce,shaderType:p.type,shaderName:p.name,vertexShader:Z,fragmentShader:te,defines:p.defines,customVertexShaderID:ve,customFragmentShaderID:Te,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:X,batching:We,batchingColor:We&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:Ae===null?e.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Be.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:be,matcap:dt,envMap:xt,envMapMode:xt&&z.mapping,envMapPMREM:ft,envMapMaxLod:ft?we.length-1:null,envMapSize:ft?we[0].width:null,aoMap:rt,lightMap:At,bumpMap:wt,normalMap:st,displacementMap:mt,emissiveMap:bt,normalMapObjectSpace:st&&p.normalMapType===1,normalMapTangentSpace:st&&p.normalMapType===0,packedNormalMap:st&&p.normalMapType===0&&Yh(p.normalMap.format),metalnessMap:Rt,roughnessMap:Dt,anisotropy:D,anisotropyMap:gt,clearcoat:Ut,clearcoatMap:y,clearcoatNormalMap:_,clearcoatRoughnessMap:O,diffuseRoughness:Ke,diffuseRoughnessMap:j,dispersion:ct,retroreflection:fe,iridescence:Ze,iridescenceMap:J,iridescenceThicknessMap:se,sheen:Re,sheenColorMap:ae,sheenRoughnessMap:I,specularMap:Q,specularColorMap:_e,specularIntensityMap:w,transmission:Ie,transmissionMap:W,thicknessMap:$,gradientMap:ie,opaque:p.transparent===!1&&p.blending===1&&p.alphaToCoverage===!1,alphaMap:ue,alphaTest:oe,alphaHash:xe,combine:p.combine,mapUv:be&&m(p.map.channel),aoMapUv:rt&&m(p.aoMap.channel),lightMapUv:At&&m(p.lightMap.channel),bumpMapUv:wt&&m(p.bumpMap.channel),normalMapUv:st&&m(p.normalMap.channel),displacementMapUv:mt&&m(p.displacementMap.channel),emissiveMapUv:bt&&m(p.emissiveMap.channel),metalnessMapUv:Rt&&m(p.metalnessMap.channel),roughnessMapUv:Dt&&m(p.roughnessMap.channel),anisotropyMapUv:gt&&m(p.anisotropyMap.channel),clearcoatMapUv:y&&m(p.clearcoatMap.channel),clearcoatNormalMapUv:_&&m(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&m(p.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:j&&m(p.diffuseRoughnessMap.channel),iridescenceMapUv:J&&m(p.iridescenceMap.channel),iridescenceThicknessMapUv:se&&m(p.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&m(p.sheenColorMap.channel),sheenRoughnessMapUv:I&&m(p.sheenRoughnessMap.channel),specularMapUv:Q&&m(p.specularMap.channel),specularColorMapUv:_e&&m(p.specularColorMap.channel),specularIntensityMapUv:w&&m(p.specularIntensityMap.channel),transmissionMapUv:W&&m(p.transmissionMap.channel),thicknessMapUv:$&&m(p.thicknessMap.channel),alphaMapUv:ue&&m(p.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(st||D),vertexNormals:!!P.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(be||ue),fog:!!q,useFog:p.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||P.attributes.normal===void 0&&st===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ye,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.filter(me=>me.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:p.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:be&&p.map.isVideoTexture===!0&&Be.getTransfer(p.map.colorSpace)==="srgb",decodeVideoTextureEmissive:bt&&p.emissiveMap.isVideoTexture===!0&&Be.getTransfer(p.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===2,flipSided:p.side===1,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:ee&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&p.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function S(p){const E=[];if(p.shaderID?E.push(p.shaderID):(E.push(p.customVertexShaderID),E.push(p.customFragmentShaderID)),p.defines!==void 0)for(const L in p.defines)E.push(L),E.push(p.defines[L]);return p.isRawShaderMaterial===!1&&(g(E,p),u(E,p),E.push(e.outputColorSpace)),E.push(p.customProgramCacheKey),E.join()}function g(p,E){p.push(E.precision),p.push(E.outputColorSpace),p.push(E.envMapMode),p.push(E.envMapPMREM),p.push(E.envMapMaxLod),p.push(E.envMapSize),p.push(E.mapUv),p.push(E.alphaMapUv),p.push(E.lightMapUv),p.push(E.aoMapUv),p.push(E.bumpMapUv),p.push(E.normalMapUv),p.push(E.displacementMapUv),p.push(E.emissiveMapUv),p.push(E.metalnessMapUv),p.push(E.roughnessMapUv),p.push(E.anisotropyMapUv),p.push(E.clearcoatMapUv),p.push(E.clearcoatNormalMapUv),p.push(E.clearcoatRoughnessMapUv),p.push(E.diffuseRoughnessMapUv),p.push(E.iridescenceMapUv),p.push(E.iridescenceThicknessMapUv),p.push(E.sheenColorMapUv),p.push(E.sheenRoughnessMapUv),p.push(E.specularMapUv),p.push(E.specularColorMapUv),p.push(E.specularIntensityMapUv),p.push(E.transmissionMapUv),p.push(E.thicknessMapUv),p.push(E.combine),p.push(E.fogExp2),p.push(E.sizeAttenuation),p.push(E.morphTargetsCount),p.push(E.numSunLights),p.push(E.numDirLights),p.push(E.numPointLights),p.push(E.numSpotLights),p.push(E.numSpotLightMaps),p.push(E.numHemiLights),p.push(E.numRectAreaLights),p.push(E.numSunLightShadows),p.push(E.numDirLightShadows),p.push(E.numPointLightShadows),p.push(E.numSpotLightShadows),p.push(E.numSpotLightShadowsWithMaps),p.push(E.numLightProbes),p.push(E.numLightProbeGrids),p.push(E.shadowMapType),p.push(E.toneMapping),p.push(E.numClippingPlanes),p.push(E.numClipIntersection),p.push(E.depthPacking)}function u(p,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),p.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),p.push(a.mask)}function T(p){const E=d[p.type];let L;if(E){const G=qt[E];L=wl.clone(G.uniforms)}else L=p.uniforms;return L}function A(p,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new kh(e,E,p,r),l.push(L),h.set(E,L)),L}function x(p){if(--p.usedTimes===0){const E=l.indexOf(p);l[E]=l[l.length-1],l.pop(),h.delete(p.cacheKey),p.destroy()}}function b(p){o.remove(p)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:T,acquireProgram:A,releaseProgram:x,releaseShaderCache:b,programs:l,dispose:R}}function Zh(){let e=new WeakMap;function t(a){return e.has(a)}function i(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function n(a){e.delete(a)}function r(a,o,c){e.get(a)[o]=c}function s(){e=new WeakMap}return{has:t,get:i,remove:n,update:r,dispose:s}}function Jh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Js(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function $s(){const e=[];let t=0;const i=[],n=[],r=[];function s(){t=0,i.length=0,n.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,M,S,g,u){let T=e[t];return T===void 0?(T={id:d.id,object:d,geometry:m,material:M,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:g,group:u},e[t]=T):(T.id=d.id,T.object=d,T.geometry=m,T.material=M,T.materialVariant=a(d),T.groupOrder=S,T.renderOrder=d.renderOrder,T.z=g,T.group=u),t++,T}function c(d,m,M,S,g,u,T){T.reversedDepth===!0&&(g=-g);const A=o(d,m,M,S,g,u);M.transmission>0?n.push(A):M.transparent===!0?r.push(A):i.push(A)}function l(d,m,M,S,g,u){const T=o(d,m,M,S,g,u);M.transmission>0?n.unshift(T):M.transparent===!0?r.unshift(T):i.unshift(T)}function h(d,m){i.length>1&&i.sort(d||Jh),n.length>1&&n.sort(m||Js),r.length>1&&r.sort(m||Js)}function f(){for(let d=t,m=e.length;d<m;d++){const M=e[d];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:h}}function $h(){let e=new WeakMap;function t(n,r){const s=e.get(n);let a;return s===void 0?(a=new $s,e.set(n,[a])):r>=s.length?(a=new $s,s.push(a)):a=s[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function Qh(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new V,color:new Ge};break;case"SpotLight":i={position:new V,direction:new V,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new V,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new V,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":i={color:new Ge,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=i,i}}}function jh(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=i,i}}}var eu=0;function tu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function iu(e){const t=new Qh,i=jh(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);const r=new V,s=new tt,a=new tt;function o(l){let h=0,f=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let m=0,M=0,S=0,g=0,u=0,T=0,A=0,x=0,b=0,R=0,p=0,E=0,L=0,G=0;l.sort(tu);for(let B=0,q=l.length;B<q;B++){const P=l[B],H=P.color,K=P.intensity,z=P.distance;let ce=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===1030?ce=P.shadow.map.texture:ce=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*K,f+=H.g*K,d+=H.b*K;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],K);G++}else if(P.isSunLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,ne=i.get(P);ne.shadowIntensity=Y.intensity,ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[M]=ne,n.sunShadowMap[M]=ce;const ye=Y.getViewportCount();for(let Z=0;Z<ye;Z++)n.sunShadowMatrix[S+Z]=Y.getMatrix(Z),n.sunShadowCascade[S+Z]=Y._cascadeData[Z];S+=ye,M++}n.sun[m]=X,m++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,ne=i.get(P);ne.shadowIntensity=Y.intensity,ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,n.directionalShadow[g]=ne,n.directionalShadowMap[g]=ce,n.directionalShadowMatrix[g]=P.shadow.matrix,b++}n.directional[g]=X,g++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(H).multiplyScalar(K),X.distance=z,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[T]=X;const Y=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,Y.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[T]=Y.matrix,P.castShadow){const ne=i.get(P);ne.shadowIntensity=Y.intensity,ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,n.spotShadow[T]=ne,n.spotShadowMap[T]=ce,p++}T++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(H).multiplyScalar(K),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=X,A++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Y=P.shadow,ne=i.get(P);ne.shadowIntensity=Y.intensity,ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,ne.shadowCameraNear=Y.camera.near,ne.shadowCameraFar=Y.camera.far,n.pointShadow[u]=ne,n.pointShadowMap[u]=ce,n.pointShadowMatrix[u]=P.shadow.matrix,R++}n.point[u]=X,u++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(K),X.groundColor.copy(P.groundColor).multiplyScalar(K),n.hemi[x]=X,x++}}A>0&&(e.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const N=n.hash;(N.sunLength!==m||N.directionalLength!==g||N.pointLength!==u||N.spotLength!==T||N.rectAreaLength!==A||N.hemiLength!==x||N.numSunShadows!==M||N.numDirectionalShadows!==b||N.numPointShadows!==R||N.numSpotShadows!==p||N.numSpotMaps!==E||N.numLightProbes!==G)&&(n.sun.length=m,n.directional.length=g,n.spot.length=T,n.rectArea.length=A,n.point.length=u,n.hemi.length=x,n.sunShadow.length=M,n.sunShadowMap.length=M,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=p,n.spotShadowMap.length=p,n.spotLightMatrix.length=p+E-L,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=G,N.sunLength=m,N.directionalLength=g,N.pointLength=u,N.spotLength=T,N.rectAreaLength=A,N.hemiLength=x,N.numSunShadows=M,N.numDirectionalShadows=b,N.numPointShadows=R,N.numSpotShadows=p,N.numSpotMaps=E,N.numLightProbes=G,n.version=eu++)}function c(l,h){let f=0,d=0,m=0,M=0,S=0,g=0;const u=h.matrixWorldInverse;for(let T=0,A=l.length;T<A;T++){const x=l[T];if(x.isSunLight){const b=n.sun[f];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(u),f++}else if(x.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(u),d++}else if(x.isSpotLight){const b=n.spot[M];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(u),M++}else if(x.isRectAreaLight){const b=n.rectArea[S];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(u),a.identity(),s.copy(x.matrixWorld),s.premultiply(u),a.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(x.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(u),m++}else if(x.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(u),g++}}}return{setup:o,setupView:c,state:n}}function Qs(e){const t=new iu(e),i=[],n=[],r=[];function s(f){h.camera=f,i.length=0,n.length=0,r.length=0}function a(f){f.isLightProbeGrid?r.push(f):i.push(f)}function o(f){n.push(f)}function c(){t.setup(i),r.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function l(f){t.setupView(i,f)}const h={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function nu(e){let t=new WeakMap;function i(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Qs(e),t.set(r,[o])):s>=a.length?(o=new Qs(e),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:i,dispose:n}}var ru=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,su=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,au=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],ou=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],js=new tt,tn=new V,Cr=new V;function lu(e,t,i){let n=new sn;const r=new Ve,s=new Ve,a=new nt,o=new Il,c=new Nl,l={},h=i.maxTextureSize,f={0:1,1:0,2:2},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:ru,fragmentShader:su}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const M=new ni;M.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new yi(M,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let u=this.type;this.render=function(R,p,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;this.type===2&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);const L=e.getRenderTarget(),G=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),B=e.state;B.setBlending(0),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=u!==this.type;q&&p.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=R.length;P<H;P++){const K=R[P],z=K.shadow;if(z===void 0){Ce("WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ce=z.getFrameExtents();r.multiply(ce),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ce.x),r.x=s.x*ce.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ce.y),r.y=s.y*ce.y,z.mapSize.y=s.y));const X=e.state.buffers.depth.getReversed();if(z.camera._reversedDepth=X,z.map===null||q===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===3){if(K.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Yt(r.x,r.y,{format:Xn,type:di,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),z.map.texture.name=K.name+".shadowMap",z.map.depthTexture=new Xi(r.x,r.y,$n),z.map.depthTexture.name=K.name+".shadowMapDepth",z.map.depthTexture.format=rn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Tt,z.map.depthTexture.magFilter=Tt}else K.isPointLight?(z.map=new kr(r.x),z.map.depthTexture=new Ma(r.x,xi)):(z.map=new Yt(r.x,r.y),z.map.depthTexture=new Xi(r.x,r.y,xi)),z.map.depthTexture.name=K.name+".shadowMap",z.map.depthTexture.format=rn,this.type===1?(z.map.depthTexture.compareFunction=X?518:515,z.map.depthTexture.minFilter=Vt,z.map.depthTexture.magFilter=Vt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Tt,z.map.depthTexture.magFilter=Tt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==r.x||z.map.height!==r.y)&&z.map.setSize(r.x,r.y);const Y=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();K.isPointLight!==!0&&z.updateMatrices(K,E);const ne=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:E.layers;for(let ye=0;ye<Y;ye++){const Z=z.getCamera(ye);if(K.isPointLight){const te=z.camera,ve=z.matrix,Te=K.distance||te.far;Te!==te.far&&(te.far=Te,te.updateProjectionMatrix()),tn.setFromMatrixPosition(K.matrixWorld),te.position.copy(tn),Cr.copy(te.position),Cr.add(au[ye]),te.up.copy(ou[ye]),te.lookAt(Cr),te.updateMatrixWorld(),ve.makeTranslation(-tn.x,-tn.y,-tn.z),js.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),z._frustum.setFromProjectionMatrix(js,te.coordinateSystem,te.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)e.setRenderTarget(z.map,ye),e.clear();else{ye===0&&(e.setRenderTarget(z.map),e.clear());const te=z.getViewport(ye);a.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),B.viewport(a)}n=z.getFrustum(ye),x(p,E,Z,K,ne,this.type)}z.isPointLightShadow!==!0&&this.type===3&&T(z,E),z.needsUpdate=!1}u=this.type,g.needsUpdate=!1,e.setRenderTarget(L,G,N)};function T(R,p){const E=t.update(S);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null?R.mapPass=new Yt(r.x,r.y,{format:Xn,type:di}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(p,null,E,d,S,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value.set(R.map.width,R.map.height),m.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(p,null,E,m,S,null)}function A(R,p,E,L){let G=null;const N=E.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)G=N;else if(G=E.isPointLight===!0?c:o,e.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0||p.alphaToCoverage===!0){const B=G.uuid,q=p.uuid;let P=l[B];P===void 0&&(P={},l[B]=P);let H=P[q];H===void 0&&(H=G.clone(),P[q]=H,p.addEventListener("dispose",b)),G=H}if(G.visible=p.visible,G.wireframe=p.wireframe,L===3?G.side=p.shadowSide!==null?p.shadowSide:p.side:G.side=p.shadowSide!==null?p.shadowSide:f[p.side],G.alphaMap=p.alphaMap,G.alphaTest=p.alphaToCoverage===!0?.5:p.alphaTest,G.map=p.map,G.clipShadows=p.clipShadows,G.clippingPlanes=p.clippingPlanes,G.clipIntersection=p.clipIntersection,G.displacementMap=p.displacementMap,G.displacementScale=p.displacementScale,G.displacementBias=p.displacementBias,G.wireframeLinewidth=p.wireframeLinewidth,G.linewidth=p.linewidth,E.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const B=e.properties.get(G);B.light=E}return G}function x(R,p,E,L,G,N){if(R.visible===!1)return;if(R.layers.test(G)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&N===3)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,R.matrixWorld);const q=t.update(R),P=R.material;if(Array.isArray(P)){const H=q.groups;for(let K=0,z=H.length;K<z;K++){const ce=H[K],X=P[ce.materialIndex];if(X&&X.visible){const Y=A(R,X,L,N);R.onBeforeShadow(e,R,p,E,q,Y,ce),e.renderBufferDirect(E,null,q,Y,R,ce),R.onAfterShadow(e,R,p,E,q,Y,ce)}}}else if(P.visible){const H=A(R,P,L,N);R.onBeforeShadow(e,R,p,E,q,H,null),e.renderBufferDirect(E,null,q,H,R,null),R.onAfterShadow(e,R,p,E,q,H,null)}}const B=R.children;for(let q=0,P=B.length;q<P;q++)x(B[q],p,E,L,G,N)}function b(R){R.target.removeEventListener("dispose",b);for(const p in l){const E=l[p],L=R.target.uuid;L in E&&(E[L].dispose(),delete E[L])}}}function cu(e,t){function i(){let w=!1;const W=new nt;let $=null;const ie=new nt(0,0,0,0);return{setMask:function(ue){$!==ue&&!w&&(e.colorMask(ue,ue,ue,ue),$=ue)},setLocked:function(ue){w=ue},setClear:function(ue,oe,xe,ee,Le){Le===!0&&(ue*=ee,oe*=ee,xe*=ee),W.set(ue,oe,xe,ee),ie.equals(W)===!1&&(e.clearColor(ue,oe,xe,ee),ie.copy(W))},reset:function(){w=!1,$=null,ie.set(-1,0,0,0)}}}function n(){let w=!1,W=!1,$=null,ie=null,ue=null;return{setReversed:function(oe){if(W!==oe){const xe=t.get("EXT_clip_control");oe?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),W=oe;const ee=ue;ue=null,this.setClear(ee)}},getReversed:function(){return W},setTest:function(oe){oe?he(e.DEPTH_TEST):Ue(e.DEPTH_TEST)},setMask:function(oe){$!==oe&&!w&&(e.depthMask(oe),$=oe)},setFunc:function(oe){if(W&&(oe=Jo[oe]),ie!==oe){switch(oe){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ie=oe}},setLocked:function(oe){w=oe},setClear:function(oe){ue!==oe&&(ue=oe,W&&(oe=1-oe),e.clearDepth(oe))},reset:function(){w=!1,$=null,ie=null,ue=null,W=!1}}}function r(){let w=!1,W=null,$=null,ie=null,ue=null,oe=null,xe=null,ee=null,Le=null;return{setTest:function(we){w||(we?he(e.STENCIL_TEST):Ue(e.STENCIL_TEST))},setMask:function(we){W!==we&&!w&&(e.stencilMask(we),W=we)},setFunc:function(we,Fe,me){($!==we||ie!==Fe||ue!==me)&&(e.stencilFunc(we,Fe,me),$=we,ie=Fe,ue=me)},setOp:function(we,Fe,me){(oe!==we||xe!==Fe||ee!==me)&&(e.stencilOp(we,Fe,me),oe=we,xe=Fe,ee=me)},setLocked:function(we){w=we},setClear:function(we){Le!==we&&(e.clearStencil(we),Le=we)},reset:function(){w=!1,W=null,$=null,ie=null,ue=null,oe=null,xe=null,ee=null,Le=null}}}const s=new i,a=new n,o=new r;let c={};const l=new WeakMap;let h={},f={},d={},m=new WeakMap,M=[],S=null,g=!1,u=null,T=null,A=null,x=null,b=null,R=null,p=null,E=new Ge(0,0,0),L=0,G=!1,N=null,B=null,q=null,P=null,H=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ce=0;const X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=ce>=1):X.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=ce>=2);let Y=null,ne={};const ye=e.getParameter(e.SCISSOR_BOX),Z=e.getParameter(e.VIEWPORT),te=new nt().fromArray(ye),ve=new nt().fromArray(Z);function Te(w,W,$,ie){const ue=new Uint8Array(4),oe=e.createTexture();e.bindTexture(w,oe),e.texParameteri(w,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(w,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let xe=0;xe<$;xe++)w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY?e.texImage3D(W,0,e.RGBA,1,1,ie,0,e.RGBA,e.UNSIGNED_BYTE,ue):e.texImage2D(W+xe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ue);return oe}const Ae={};Ae[e.TEXTURE_2D]=Te(e.TEXTURE_2D,e.TEXTURE_2D,1),Ae[e.TEXTURE_CUBE_MAP]=Te(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[e.TEXTURE_2D_ARRAY]=Te(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Ae[e.TEXTURE_3D]=Te(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(e.DEPTH_TEST),a.setFunc(3),wt(!1),st(1),he(e.CULL_FACE),rt(0);function he(w){h[w]!==!0&&(e.enable(w),h[w]=!0)}function Ue(w){h[w]!==!1&&(e.disable(w),h[w]=!1)}function We(w,W){return d[w]!==W?(e.bindFramebuffer(w,W),d[w]=W,w===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=W),w===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=W),!0):!1}function be(w,W){let $=M,ie=!1;if(w){$=m.get(W),$===void 0&&($=[],m.set(W,$));const ue=w.textures;if($.length!==ue.length||$[0]!==e.COLOR_ATTACHMENT0){for(let oe=0,xe=ue.length;oe<xe;oe++)$[oe]=e.COLOR_ATTACHMENT0+oe;$.length=ue.length,ie=!0}}else $[0]!==e.BACK&&($[0]=e.BACK,ie=!0);ie&&e.drawBuffers($)}function dt(w){return S!==w?(e.useProgram(w),S=w,!0):!1}const xt={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};xt[103]=e.MIN,xt[104]=e.MAX;const ft={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function rt(w,W,$,ie,ue,oe,xe,ee,Le,we){if(w===0){g===!0&&(Ue(e.BLEND),g=!1);return}if(g===!1&&(he(e.BLEND),g=!0),w!==5){if(w!==u||we!==G){if((T!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),T=100,b=100),we)switch(w){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Pe("WebGLState: Invalid blending: ",w)}else switch(w){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",w)}A=null,x=null,R=null,p=null,E.set(0,0,0),L=0,u=w,G=we}return}ue=ue||W,oe=oe||$,xe=xe||ie,(W!==T||ue!==b)&&(e.blendEquationSeparate(xt[W],xt[ue]),T=W,b=ue),($!==A||ie!==x||oe!==R||xe!==p)&&(e.blendFuncSeparate(ft[$],ft[ie],ft[oe],ft[xe]),A=$,x=ie,R=oe,p=xe),(ee.equals(E)===!1||Le!==L)&&(e.blendColor(ee.r,ee.g,ee.b,Le),E.copy(ee),L=Le),u=w,G=!1}function At(w,W){w.side===2?Ue(e.CULL_FACE):he(e.CULL_FACE);let $=w.side===1;W&&($=!$),wt($),w.blending===1&&w.transparent===!1?rt(0):rt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),s.setMask(w.colorWrite);const ie=w.stencilWrite;o.setTest(ie),ie&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),bt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?he(e.SAMPLE_ALPHA_TO_COVERAGE):Ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function wt(w){N!==w&&(w?e.frontFace(e.CW):e.frontFace(e.CCW),N=w)}function st(w){w!==0?(he(e.CULL_FACE),w!==B&&(w===1?e.cullFace(e.BACK):w===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ue(e.CULL_FACE),B=w}function mt(w){w!==q&&(z&&e.lineWidth(w),q=w)}function bt(w,W,$){w?(he(e.POLYGON_OFFSET_FILL),(P!==W||H!==$)&&(P=W,H=$,a.getReversed()&&(W=-W,$=-$),e.polygonOffset(W,$))):Ue(e.POLYGON_OFFSET_FILL)}function Rt(w){w?he(e.SCISSOR_TEST):Ue(e.SCISSOR_TEST)}function Dt(w){w===void 0&&(w=e.TEXTURE0+K-1),Y!==w&&(e.activeTexture(w),Y=w)}function D(w,W,$){$===void 0&&(Y===null?$=e.TEXTURE0+K-1:$=Y);let ie=ne[$];ie===void 0&&(ie={type:void 0,texture:void 0},ne[$]=ie),(ie.type!==w||ie.texture!==W)&&(Y!==$&&(e.activeTexture($),Y=$),e.bindTexture(w,W||Ae[w]),ie.type=w,ie.texture=W)}function Ut(){const w=ne[Y];w!==void 0&&w.type!==void 0&&(e.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function Ke(){try{e.compressedTexImage2D(...arguments)}catch(w){Pe("WebGLState:",w)}}function ct(){try{e.compressedTexImage3D(...arguments)}catch(w){Pe("WebGLState:",w)}}function fe(){try{e.texSubImage2D(...arguments)}catch(w){Pe("WebGLState:",w)}}function Ze(){try{e.texSubImage3D(...arguments)}catch(w){Pe("WebGLState:",w)}}function Re(){try{e.compressedTexSubImage2D(...arguments)}catch(w){Pe("WebGLState:",w)}}function Ie(){try{e.compressedTexSubImage3D(...arguments)}catch(w){Pe("WebGLState:",w)}}function gt(){try{e.texStorage2D(...arguments)}catch(w){Pe("WebGLState:",w)}}function y(){try{e.texStorage3D(...arguments)}catch(w){Pe("WebGLState:",w)}}function _(){try{e.texImage2D(...arguments)}catch(w){Pe("WebGLState:",w)}}function O(){try{e.texImage3D(...arguments)}catch(w){Pe("WebGLState:",w)}}function j(w){return f[w]!==void 0?f[w]:e.getParameter(w)}function J(w,W){f[w]!==W&&(e.pixelStorei(w,W),f[w]=W)}function se(w){te.equals(w)===!1&&(e.scissor(w.x,w.y,w.z,w.w),te.copy(w))}function ae(w){ve.equals(w)===!1&&(e.viewport(w.x,w.y,w.z,w.w),ve.copy(w))}function I(w,W){let $=l.get(W);$===void 0&&($=new WeakMap,l.set(W,$));let ie=$.get(w);ie===void 0&&(ie=e.getUniformBlockIndex(W,w.name),e.uniformBlockBinding(W,ie,ie),$.set(w,ie))}function Q(w,W,$){const ie=l.get(W).get(w);c[ie]!==$&&(e.bindBufferBase(e.UNIFORM_BUFFER,ie,$),c[ie]=$)}function _e(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},f={},Y=null,ne={},d={},c={},m=new WeakMap,M=[],S=null,g=!1,u=null,T=null,A=null,x=null,b=null,R=null,p=null,E=new Ge(0,0,0),L=0,G=!1,N=null,B=null,q=null,P=null,H=null,te.set(0,0,e.canvas.width,e.canvas.height),ve.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:he,disable:Ue,bindFramebuffer:We,drawBuffers:be,useProgram:dt,setBlending:rt,setMaterial:At,setFlipSided:wt,setCullFace:st,setLineWidth:mt,setPolygonOffset:bt,setScissorTest:Rt,activeTexture:Dt,bindTexture:D,unbindTexture:Ut,compressedTexImage2D:Ke,compressedTexImage3D:ct,texImage2D:_,texImage3D:O,pixelStorei:J,getParameter:j,updateUBOMapping:I,uniformBlockBinding:Q,texStorage2D:gt,texStorage3D:y,texSubImage2D:fe,texSubImage3D:Ze,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ie,scissor:se,viewport:ae,reset:_e}}function hu(e,t,i,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,h=new WeakMap,f=new Set;let d;const m=new WeakMap,M=new Set,S=new FinalizationRegistry(y=>M.delete(y));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(y,_){return g?new OffscreenCanvas(y,_):Zn("canvas")}function T(y,_,O){let j=1;const J=gt(y);if((J.width>O||J.height>O)&&(j=O/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const se=Math.floor(j*J.width),ae=Math.floor(j*J.height);d===void 0&&(d=u(se,ae));const I=_?u(se,ae):d;return I.width=se,I.height=ae,I.getContext("2d").drawImage(y,0,0,se,ae),Ce("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+se+"x"+ae+")."),I}else return"data"in y&&Ce("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),y;return y}function A(y){return y.generateMipmaps}function x(y){e.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?e.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function R(y,_,O,j,J,se=!1){if(y!==null){if(e[y]!==void 0)return e[y];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ae;j&&(ae=t.get("EXT_texture_norm16"),ae||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let I=_;if(_===e.RED&&(O===e.FLOAT&&(I=e.R32F),O===e.HALF_FLOAT&&(I=e.R16F),O===e.UNSIGNED_BYTE&&(I=e.R8),O===e.UNSIGNED_SHORT&&ae&&(I=ae.R16_EXT),O===e.SHORT&&ae&&(I=ae.R16_SNORM_EXT)),_===e.RED_INTEGER&&(O===e.UNSIGNED_BYTE&&(I=e.R8UI),O===e.UNSIGNED_SHORT&&(I=e.R16UI),O===e.UNSIGNED_INT&&(I=e.R32UI),O===e.BYTE&&(I=e.R8I),O===e.SHORT&&(I=e.R16I),O===e.INT&&(I=e.R32I)),_===e.RG&&(O===e.FLOAT&&(I=e.RG32F),O===e.HALF_FLOAT&&(I=e.RG16F),O===e.UNSIGNED_BYTE&&(I=e.RG8),O===e.UNSIGNED_SHORT&&ae&&(I=ae.RG16_EXT),O===e.SHORT&&ae&&(I=ae.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(O===e.UNSIGNED_BYTE&&(I=e.RG8UI),O===e.UNSIGNED_SHORT&&(I=e.RG16UI),O===e.UNSIGNED_INT&&(I=e.RG32UI),O===e.BYTE&&(I=e.RG8I),O===e.SHORT&&(I=e.RG16I),O===e.INT&&(I=e.RG32I)),_===e.RGB_INTEGER&&(O===e.UNSIGNED_BYTE&&(I=e.RGB8UI),O===e.UNSIGNED_SHORT&&(I=e.RGB16UI),O===e.UNSIGNED_INT&&(I=e.RGB32UI),O===e.BYTE&&(I=e.RGB8I),O===e.SHORT&&(I=e.RGB16I),O===e.INT&&(I=e.RGB32I)),_===e.RGBA_INTEGER&&(O===e.UNSIGNED_BYTE&&(I=e.RGBA8UI),O===e.UNSIGNED_SHORT&&(I=e.RGBA16UI),O===e.UNSIGNED_INT&&(I=e.RGBA32UI),O===e.BYTE&&(I=e.RGBA8I),O===e.SHORT&&(I=e.RGBA16I),O===e.INT&&(I=e.RGBA32I)),_===e.RGB&&(O===e.UNSIGNED_SHORT&&ae&&(I=ae.RGB16_EXT),O===e.SHORT&&ae&&(I=ae.RGB16_SNORM_EXT),O===e.UNSIGNED_INT_5_9_9_9_REV&&(I=e.RGB9_E5),O===e.UNSIGNED_INT_10F_11F_11F_REV&&(I=e.R11F_G11F_B10F)),_===e.RGBA){const Q=se?Yn:Be.getTransfer(J);O===e.FLOAT&&(I=e.RGBA32F),O===e.HALF_FLOAT&&(I=e.RGBA16F),O===e.UNSIGNED_BYTE&&(I=Q==="srgb"?e.SRGB8_ALPHA8:e.RGBA8),O===e.UNSIGNED_SHORT&&ae&&(I=ae.RGBA16_EXT),O===e.SHORT&&ae&&(I=ae.RGBA16_SNORM_EXT),O===e.UNSIGNED_SHORT_4_4_4_4&&(I=e.RGBA4),O===e.UNSIGNED_SHORT_5_5_5_1&&(I=e.RGB5_A1)}return(I===e.R16F||I===e.R32F||I===e.RG16F||I===e.RG32F||I===e.RGBA16F||I===e.RGBA32F)&&t.get("EXT_color_buffer_float"),I}function p(y,_){let O;return y?_===null||_===1014||_===1020?O=e.DEPTH24_STENCIL8:_===1015?O=e.DEPTH32F_STENCIL8:_===1012&&(O=e.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===1014||_===1020?O=e.DEPTH_COMPONENT24:_===1015?O=e.DEPTH_COMPONENT32F:_===1012&&(O=e.DEPTH_COMPONENT16),O}function E(y,_){return A(y)===!0||y.isFramebufferTexture&&y.minFilter!==1003&&y.minFilter!==1006?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function L(y){const _=new WeakRef(y);n.get(y).__ref=_,M.add(_),S.register(y,_,_)}function G(y){const _=n.get(y).__ref;_!==void 0&&(M.delete(_),S.unregister(_))}function N(y){q(y.target)}function B(y){P(y.target)}function q(y){y.removeEventListener("dispose",N),G(y),K(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&f.delete(y)}function P(y){y.removeEventListener("dispose",B),G(y),ce(y)}function H(){for(const y of M){const _=y.deref();_!==void 0&&(_.isRenderTarget===!0?P(_):q(_))}M.clear(),f.clear()}function K(y){const _=n.get(y);if(_.__webglInit===void 0)return;const O=y.source,j=m.get(O);if(j){const J=j[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&z(y),Object.keys(j).length===0&&m.delete(O)}n.remove(y)}function z(y){const _=n.get(y);e.deleteTexture(_.__webglTexture);const O=y.source,j=m.get(O);delete j[_.__cacheKey],a.memory.textures--}function ce(y){const _=n.get(y);_.__depthDisposeCallback&&_.__depthDisposeCallback();const O=y.depthTexture;if(O&&O.renderTarget===y&&q(O),y.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let se=0;se<_.__webglFramebuffer[J].length;se++)e.deleteFramebuffer(_.__webglFramebuffer[J][se]);else e.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)e.deleteFramebuffer(_.__webglFramebuffer[J]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const j=y.textures;for(let J=0,se=j.length;J<se;J++){const ae=n.get(j[J]);ae.__webglTexture&&(e.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(j[J])}n.remove(y)}let X=0;function Y(){X=0}function ne(){return X}function ye(y){X=y}function Z(){const y=X;return y>=r.maxTextures&&Ce("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+r.maxTextures),X+=1,y}function te(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.mipmapsAutoUpdate),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function ve(y,_){const O=n.get(y);if(y.isVideoTexture&&Re(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&O.__version!==y.version){const j=y.image;if(j===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{At(O,y,_);return}}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,O.__webglTexture,e.TEXTURE0+_)}function Te(y,_){const O=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){At(O,y,_);return}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,O.__webglTexture,e.TEXTURE0+_)}function Ae(y,_){const O=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){At(O,y,_);return}i.bindTexture(e.TEXTURE_3D,O.__webglTexture,e.TEXTURE0+_)}function he(y,_){const O=n.get(y);if(y.version>0&&O.__version!==y.version){wt(O,y,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+_)}const Ue={[Pr]:e.REPEAT,[ti]:e.CLAMP_TO_EDGE,[Lr]:e.MIRRORED_REPEAT},We={[Tt]:e.NEAREST,[Ja]:e.NEAREST_MIPMAP_NEAREST,[$a]:e.NEAREST_MIPMAP_LINEAR,[Vt]:e.LINEAR,[Qa]:e.LINEAR_MIPMAP_NEAREST,[Jn]:e.LINEAR_MIPMAP_LINEAR},be={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function dt(y,_){if(_.type===1015&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===1006||_.magFilter===1007||_.magFilter===1005||_.magFilter===1008||_.minFilter===1006||_.minFilter===1007||_.minFilter===1005||_.minFilter===1008)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(y,e.TEXTURE_WRAP_S,Ue[_.wrapS]),e.texParameteri(y,e.TEXTURE_WRAP_T,Ue[_.wrapT]),(y===e.TEXTURE_3D||y===e.TEXTURE_2D_ARRAY)&&e.texParameteri(y,e.TEXTURE_WRAP_R,Ue[_.wrapR]),e.texParameteri(y,e.TEXTURE_MAG_FILTER,We[_.magFilter]),e.texParameteri(y,e.TEXTURE_MIN_FILTER,We[_.minFilter]),_.compareFunction&&(e.texParameteri(y,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(y,e.TEXTURE_COMPARE_FUNC,be[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===1003||_.minFilter!==1005&&_.minFilter!==1008||_.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");e.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function xt(y,_){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",N),L(_));const j=_.source;let J=m.get(j);J===void 0&&(J={},m.set(j,J));const se=te(_);if(se!==y.__cacheKey){J[se]===void 0&&(J[se]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[se].usedTimes++;const ae=J[y.__cacheKey];ae!==void 0&&(J[y.__cacheKey].usedTimes--,ae.usedTimes===0&&z(_)),y.__cacheKey=se,y.__webglTexture=J[se].texture}return O}function ft(y,_,O){return Math.floor(Math.floor(y/O)/_)}function rt(y,_,O,j){const se=y.updateRanges;if(se.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,O,j,_.data);else{se.sort((w,W)=>w.start-W.start);let ae=0;for(let w=1;w<se.length;w++){const W=se[ae],$=se[w],ie=W.start+W.count,ue=ft($.start,_.width,4),oe=ft(W.start,_.width,4);$.start<=ie+1&&ue===oe&&ft($.start+$.count-1,_.width,4)===ue?W.count=Math.max(W.count,$.start+$.count-W.start):(++ae,se[ae]=$)}se.length=ae+1;const I=i.getParameter(e.UNPACK_ROW_LENGTH),Q=i.getParameter(e.UNPACK_SKIP_PIXELS),_e=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let w=0,W=se.length;w<W;w++){const $=se[w],ie=Math.floor($.start/4),ue=Math.ceil($.count/4),oe=ie%_.width,xe=Math.floor(ie/_.width),ee=ue,Le=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,oe),i.pixelStorei(e.UNPACK_SKIP_ROWS,xe),i.texSubImage2D(e.TEXTURE_2D,0,oe,xe,ee,Le,O,j,_.data)}y.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,I),i.pixelStorei(e.UNPACK_SKIP_PIXELS,Q),i.pixelStorei(e.UNPACK_SKIP_ROWS,_e)}}function At(y,_,O){let j=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=e.TEXTURE_3D);const J=xt(y,_),se=_.source;i.bindTexture(j,y.__webglTexture,e.TEXTURE0+O);const ae=n.get(se);if(se.version!==ae.__version||J===!0){if(i.activeTexture(e.TEXTURE0+O),!(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)){const ee=Be.getPrimaries(Be.workingColorSpace),Le=_.colorSpace===""?null:Be.getPrimaries(_.colorSpace),we=_.colorSpace===""||ee===Le?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let I=T(_.image,!1,r.maxTextureSize);I=Ie(_,I);const Q=s.convert(_.format,_.colorSpace),_e=s.convert(_.type);let w=R(_.internalFormat,Q,_e,_.normalized,_.colorSpace,_.isVideoTexture);dt(j,_);let W;const $=_.mipmaps,ie=_.isVideoTexture!==!0,ue=ae.__version===void 0||J===!0,oe=se.dataReady,xe=E(_,I);if(_.isDepthTexture)w=p(_.format===Wn,_.type),ue&&(ie?i.texStorage2D(e.TEXTURE_2D,1,w,I.width,I.height):i.texImage2D(e.TEXTURE_2D,0,w,I.width,I.height,0,Q,_e,null));else if(_.isDataTexture)if($.length>0){ie&&ue&&i.texStorage2D(e.TEXTURE_2D,xe,w,$[0].width,$[0].height);for(let ee=0,Le=$.length;ee<Le;ee++)W=$[ee],ie?oe&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,W.width,W.height,Q,_e,W.data):i.texImage2D(e.TEXTURE_2D,ee,w,W.width,W.height,0,Q,_e,W.data);_.generateMipmaps=!1}else ie?(ue&&i.texStorage2D(e.TEXTURE_2D,xe,w,I.width,I.height),oe&&rt(_,I,Q,_e)):i.texImage2D(e.TEXTURE_2D,0,w,I.width,I.height,0,Q,_e,I.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ie&&ue&&i.texStorage3D(e.TEXTURE_2D_ARRAY,xe,w,$[0].width,$[0].height,I.depth);for(let ee=0,Le=$.length;ee<Le;ee++)if(W=$[ee],_.format!==1023)if(Q!==null)if(ie){if(oe)if(_.layerUpdates.size>0){const we=Ls(W.width,W.height,_.format,_.type);for(const Fe of _.layerUpdates){const me=W.data.subarray(Fe*we/W.data.BYTES_PER_ELEMENT,(Fe+1)*we/W.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,Fe,W.width,W.height,1,Q,me)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,0,W.width,W.height,I.depth,Q,W.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ee,w,W.width,W.height,I.depth,0,W.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?oe&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,0,W.width,W.height,I.depth,Q,_e,W.data):i.texImage3D(e.TEXTURE_2D_ARRAY,ee,w,W.width,W.height,I.depth,0,Q,_e,W.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ie&&ue&&i.texStorage2D(e.TEXTURE_2D,xe,w,$[0].width,$[0].height);for(let ee=0,Le=$.length;ee<Le;ee++)W=$[ee],_.format!==1023?Q!==null?ie?oe&&i.compressedTexSubImage2D(e.TEXTURE_2D,ee,0,0,W.width,W.height,Q,W.data):i.compressedTexImage2D(e.TEXTURE_2D,ee,w,W.width,W.height,0,W.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?oe&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,W.width,W.height,Q,_e,W.data):i.texImage2D(e.TEXTURE_2D,ee,w,W.width,W.height,0,Q,_e,W.data)}else if(_.isDataArrayTexture)if(ie){if(ue&&i.texStorage3D(e.TEXTURE_2D_ARRAY,xe,w,I.width,I.height,I.depth),oe)if(_.layerUpdates.size>0){const ee=Ls(I.width,I.height,_.format,_.type);for(const Le of _.layerUpdates){const we=I.data.subarray(Le*ee/I.data.BYTES_PER_ELEMENT,(Le+1)*ee/I.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Le,I.width,I.height,1,Q,_e,we)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,Q,_e,I.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,w,I.width,I.height,I.depth,0,Q,_e,I.data);else if(_.isData3DTexture)ie?(ue&&i.texStorage3D(e.TEXTURE_3D,xe,w,I.width,I.height,I.depth),oe&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,Q,_e,I.data)):i.texImage3D(e.TEXTURE_3D,0,w,I.width,I.height,I.depth,0,Q,_e,I.data);else if(_.isFramebufferTexture){if(ue)if(ie)i.texStorage2D(e.TEXTURE_2D,xe,w,I.width,I.height);else{let ee=I.width,Le=I.height;for(let we=0;we<xe;we++)i.texImage2D(e.TEXTURE_2D,we,w,ee,Le,0,Q,_e,null),ee>>=1,Le>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){const ee=e.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),I.parentNode!==ee){ee.appendChild(I),f.add(_),ee.onpaint=Le=>{const we=Le.changedElements;for(const Fe of f)we.includes(Fe.image)&&(Fe.needsUpdate=!0)},ee.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,I);else{const we=e.RGBA,Fe=e.RGBA,me=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,we,Fe,me,I)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if($.length>0){if(ie&&ue){const ee=gt($[0]);i.texStorage2D(e.TEXTURE_2D,xe,w,ee.width,ee.height)}for(let ee=0,Le=$.length;ee<Le;ee++)W=$[ee],ie?oe&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,Q,_e,W):i.texImage2D(e.TEXTURE_2D,ee,w,Q,_e,W);_.generateMipmaps=!1}else if(ie){if(ue){const ee=gt(I);i.texStorage2D(e.TEXTURE_2D,xe,w,ee.width,ee.height)}oe&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,Q,_e,I)}else i.texImage2D(e.TEXTURE_2D,0,w,Q,_e,I);A(_)&&_.mipmapsAutoUpdate===!0&&x(j),ae.__version=se.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function wt(y,_,O){if(_.image.length!==6)return;const j=xt(y,_),J=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,y.__webglTexture,e.TEXTURE0+O);const se=n.get(J);if(J.version!==se.__version||j===!0){i.activeTexture(e.TEXTURE0+O);const ae=Be.getPrimaries(Be.workingColorSpace),I=_.colorSpace===""?null:Be.getPrimaries(_.colorSpace),Q=_.colorSpace===""||ae===I?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const _e=_.isCompressedTexture||_.image[0].isCompressedTexture,w=_.image[0]&&_.image[0].isDataTexture,W=[];for(let me=0;me<6;me++)!_e&&!w?W[me]=T(_.image[me],!0,r.maxCubemapSize):W[me]=w?_.image[me].image:_.image[me],W[me]=Ie(_,W[me]);const $=W[0],ie=s.convert(_.format,_.colorSpace),ue=s.convert(_.type);let oe=R(_.internalFormat,ie,ue,_.normalized,_.colorSpace);const xe=_.isVideoTexture!==!0,ee=se.__version===void 0||j===!0,Le=J.dataReady;let we=E(_,$);dt(e.TEXTURE_CUBE_MAP,_);let Fe;if(_.isDepthTexture){if(oe=p(_.format===Wn,_.type),ee)if(xe)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,oe,$.width,$.height);else for(let me=0;me<6;me++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,oe,$.width,$.height,0,ie,ue,null)}else if(_e){xe&&ee&&i.texStorage2D(e.TEXTURE_CUBE_MAP,we,oe,$.width,$.height);for(let me=0;me<6;me++){Fe=W[me].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){const je=Fe[Qe];_.format!==1023?ie!==null?xe?Le&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,0,0,je.width,je.height,ie,je.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,oe,je.width,je.height,0,je.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?Le&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,0,0,je.width,je.height,ie,ue,je.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,oe,je.width,je.height,0,ie,ue,je.data)}}}else{if(Fe=_.mipmaps,xe&&ee){Fe.length>0&&we++;const me=gt(W[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,we,oe,me.width,me.height)}for(let me=0;me<6;me++)if(w){xe?Le&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,W[me].width,W[me].height,ie,ue,W[me].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,oe,W[me].width,W[me].height,0,ie,ue,W[me].data);for(let Qe=0;Qe<Fe.length;Qe++){const je=Fe[Qe].image[me].image;xe?Le&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,0,0,je.width,je.height,ie,ue,je.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,oe,je.width,je.height,0,ie,ue,je.data)}}else{xe?Le&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ie,ue,W[me]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,oe,ie,ue,W[me]);for(let Qe=0;Qe<Fe.length;Qe++){const je=Fe[Qe];xe?Le&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,0,0,ie,ue,je.image[me]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,oe,ie,ue,je.image[me])}}}A(_)&&_.mipmapsAutoUpdate===!0&&x(e.TEXTURE_CUBE_MAP),se.__version=J.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function st(y,_,O,j,J,se){const ae=s.convert(O.format,O.colorSpace),I=s.convert(O.type),Q=R(O.internalFormat,ae,I,O.normalized,O.colorSpace),_e=n.get(_),w=n.get(O);if(w.__renderTarget=_,!_e.__hasExternalTextures){const W=Math.max(1,_.width>>se),$=Math.max(1,_.height>>se);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?i.texImage3D(J,se,Q,W,$,_.depth,0,ae,I,null):i.texImage2D(J,se,Q,W,$,0,ae,I,null)}i.bindFramebuffer(e.FRAMEBUFFER,y),Ze(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,J,w.__webglTexture,0,fe(_)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,j,J,w.__webglTexture,se),i.bindFramebuffer(e.FRAMEBUFFER,null)}function mt(y,_,O){if(e.bindRenderbuffer(e.RENDERBUFFER,y),_.depthBuffer){const j=_.depthTexture,J=j&&j.isDepthTexture?j.type:null,se=p(_.stencilBuffer,J),ae=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ze(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(_),se,_.width,_.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(_),se,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,se,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ae,e.RENDERBUFFER,y)}else{const j=_.textures;for(let J=0;J<j.length;J++){const se=j[J],ae=s.convert(se.format,se.colorSpace),I=s.convert(se.type),Q=R(se.internalFormat,ae,I,se.normalized,se.colorSpace);Ze(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(_),Q,_.width,_.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(_),Q,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,Q,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function bt(y,_,O){const j=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(_.depthTexture);J.__renderTarget=_;const se=j?_.depthTexture.image[0]:_.depthTexture.image;(!J.__webglTexture||se.width!==_.width||se.height!==_.height)&&(se.width=_.width,se.height=_.height,_.depthTexture.needsUpdate=!0),j?he(_.depthTexture,0):ve(_.depthTexture,0);const ae=J.__webglTexture,I=fe(_),Q=j?e.TEXTURE_CUBE_MAP_POSITIVE_X+O:e.TEXTURE_2D,_e=_.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===1026)Ze(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,_e,Q,ae,0,I):e.framebufferTexture2D(e.FRAMEBUFFER,_e,Q,ae,0);else if(_.depthTexture.format===1027)Ze(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,_e,Q,ae,0,I):e.framebufferTexture2D(e.FRAMEBUFFER,_e,Q,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(y){const _=n.get(y),O=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const j=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=j}if(y.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let j=0;j<6;j++)bt(_.__webglFramebuffer[j],y,j);else y.texture.mipmaps.length>0?bt(_.__webglFramebuffer[0],y,0):bt(_.__webglFramebuffer,y,0);else if(O){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=e.createRenderbuffer(),mt(_.__webglDepthbuffer[j],y,!1);else{const J=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[j];e.bindRenderbuffer(e.RENDERBUFFER,se),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,se)}}else if(y.texture.mipmaps.length>0?i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),mt(_.__webglDepthbuffer,y,!1);else{const j=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,J),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,J)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Dt(y,_,O){const j=n.get(y);_!==void 0&&st(j.__webglFramebuffer,y,y.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),O!==void 0&&Rt(y)}function D(y){const _=y.texture,O=n.get(y),j=n.get(_);y.addEventListener("dispose",B),L(y);const J=y.textures,se=y.isWebGLCubeRenderTarget===!0,ae=J.length>1;if(ae||(j.__webglTexture===void 0&&(j.__webglTexture=e.createTexture()),j.__version=_.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let I=0;I<6;I++)if(_.mipmaps.length>0){O.__webglFramebuffer[I]=[];for(let Q=0;Q<_.mipmaps.length;Q++)O.__webglFramebuffer[I][Q]=e.createFramebuffer()}else O.__webglFramebuffer[I]=e.createFramebuffer()}else{if(_.mipmaps.length>0){O.__webglFramebuffer=[];for(let I=0;I<_.mipmaps.length;I++)O.__webglFramebuffer[I]=e.createFramebuffer()}else O.__webglFramebuffer=e.createFramebuffer();if(ae)for(let I=0,Q=J.length;I<Q;I++){const _e=n.get(J[I]);_e.__webglTexture===void 0&&(_e.__webglTexture=e.createTexture(),a.memory.textures++)}if(y.samples>0&&Ze(y)===!1){O.__webglMultisampledFramebuffer=e.createFramebuffer(),O.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let I=0;I<J.length;I++){const Q=J[I];O.__webglColorRenderbuffer[I]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,O.__webglColorRenderbuffer[I]);const _e=s.convert(Q.format,Q.colorSpace),w=s.convert(Q.type),W=R(Q.internalFormat,_e,w,Q.normalized,Q.colorSpace,y.isXRRenderTarget===!0),$=fe(y);e.renderbufferStorageMultisample(e.RENDERBUFFER,$,W,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+I,e.RENDERBUFFER,O.__webglColorRenderbuffer[I])}e.bindRenderbuffer(e.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=e.createRenderbuffer(),mt(O.__webglDepthRenderbuffer,y,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(se){i.bindTexture(e.TEXTURE_CUBE_MAP,j.__webglTexture),dt(e.TEXTURE_CUBE_MAP,_);for(let I=0;I<6;I++)if(_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)st(O.__webglFramebuffer[I][Q],y,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+I,Q);else st(O.__webglFramebuffer[I],y,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);A(_)?x(e.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),i.unbindTexture()}else if(ae){for(let I=0,Q=J.length;I<Q;I++){const _e=J[I],w=n.get(_e);let W=e.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(W=y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(W,w.__webglTexture),dt(W,_e),st(O.__webglFramebuffer,y,_e,e.COLOR_ATTACHMENT0+I,W,0),A(_e)&&x(W)}i.unbindTexture()}else{let I=e.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(I=y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(I,j.__webglTexture),dt(I,_),_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)st(O.__webglFramebuffer[Q],y,_,e.COLOR_ATTACHMENT0,I,Q);else st(O.__webglFramebuffer,y,_,e.COLOR_ATTACHMENT0,I,0);A(_)?x(I):_.mipmaps.length>0&&e.texParameteri(I,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),i.unbindTexture()}y.depthBuffer&&Rt(y)}function Ut(y){const _=y.textures;for(let O=0,j=_.length;O<j;O++){const J=_[O];if(A(J)&&J.mipmapsAutoUpdate===!0){const se=b(y),ae=n.get(J).__webglTexture;i.bindTexture(se,ae),x(se),i.unbindTexture()}}}const Ke=[];function ct(y){if(y.samples>0){if(Ze(y)===!1){const _=y.textures,O=y.width,j=y.height;let J=e.COLOR_BUFFER_BIT;const se=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ae=n.get(y),I=_.length>1;if(I)for(let Q=0;Q<_.length;Q++)i.bindFramebuffer(e.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ae.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),y.texture.mipmaps.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Q=0;Q<_.length;Q++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),I){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ae.__webglColorRenderbuffer[Q]);const _e=n.get(_[Q]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,_e,0)}e.blitFramebuffer(0,0,O,j,0,0,O,j,J,e.NEAREST),c===!0&&(Ke.length=0,Ke.push(e.COLOR_ATTACHMENT0+Q),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&Ke.push(se),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ke))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),I)for(let Q=0;Q<_.length;Q++){i.bindFramebuffer(e.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.RENDERBUFFER,ae.__webglColorRenderbuffer[Q]);const _e=n.get(_[Q]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ae.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.TEXTURE_2D,_e,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&c){const _=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function fe(y){return Math.min(r.maxSamples,y.samples)}function Ze(y){const _=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Re(y){const _=a.render.frame;h.get(y)!==_&&(h.set(y,_),y.update())}function Ie(y,_){const O=y.colorSpace,j=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!=="srgb-linear"&&O!==""&&(Be.getTransfer(O)==="srgb"?(j!==1023||J!==1009)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",O)),_}function gt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=Y,this.getTextureUnits=ne,this.setTextureUnits=ye,this.setTexture2D=ve,this.setTexture2DArray=Te,this.setTexture3D=Ae,this.setTextureCube=he,this.rebindTextures=Dt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Ze,this.dispose=H}function uu(e,t){function i(n,r=""){let s;const a=Be.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a==="srgb")if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return s.COMPRESSED_R11_EAC;if(n===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return s.COMPRESSED_RG11_EAC;if(n===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]!==void 0?e[n]:null}return{convert:i}}var du=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ti({vertexShader:du,fragmentShader:fu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yi(new Ta(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mu=class extends Ai{constructor(e,t){super();const i=this;let n=null,r=1,s=null,a="local-floor",o=1,c=null,l=null,h=null,f=null,d=null,m=null;const M=typeof XRWebGLBinding<"u",S=new pu,g={},u=t.getContextAttributes();let T=null,A=null;const x=[],b=[],R=new Ve;let p=null,E=null;const L=new Ht;L.viewport=new nt;const G=new Ht;G.viewport=new nt;const N=[L,G],B=new Jl;let q=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=x[Z];return te===void 0&&(te=new dr,x[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=x[Z];return te===void 0&&(te=new dr,x[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=x[Z];return te===void 0&&(te=new dr,x[Z]=te),te.getHandSpace()};function H(Z){const te=b.indexOf(Z.inputSource);if(te===-1)return;const ve=x[te];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||s),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",K),n.removeEventListener("inputsourceschange",z);for(let Z=0;Z<x.length;Z++){const te=b[Z];te!==null&&(b[Z]=null,x[Z].disconnect(te))}q=null,P=null,S.reset();for(const Z in g)delete g[Z];if(e.setRenderTarget(T),d=null,f=null,h=null,n=null,A=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(p),e.setSize(R.width,R.height,!1),E!==null){const Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(n,t)),h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(T=e.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",K),n.addEventListener("inputsourceschange",z),u.xrCompatible!==!0&&await t.makeXRCompatible(),p=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,ve=null,Te=null;u.depth&&(Te=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=u.stencil?Wn:rn,ve=u.stencil?Br:xi);const Ae={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ae),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Yt(f.textureWidth,f.textureHeight,{format:kn,type:ui,depthTexture:new Xi(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const te={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,te),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Yt(d.framebufferWidth,d.framebufferHeight,{format:kn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(o),c=null,s=await n.requestReferenceSpace(a),ye.setContext(n),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function z(Z){for(let te=0;te<Z.removed.length;te++){const ve=Z.removed[te],Te=b.indexOf(ve);Te>=0&&(b[Te]=null,x[Te].disconnect(ve))}for(let te=0;te<Z.added.length;te++){const ve=Z.added[te];let Te=b.indexOf(ve);if(Te===-1){for(let he=0;he<x.length;he++)if(he>=b.length){b.push(ve),Te=he;break}else if(b[he]===null){b[he]=ve,Te=he;break}if(Te===-1)break}const Ae=x[Te];Ae&&Ae.connect(ve)}}function ce(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let te=Z.near,ve=Z.far;S.texture!==null&&(S.depthNear>0&&(te=S.depthNear),S.depthFar>0&&(ve=S.depthFar)),B.near=G.near=L.near=te,B.far=G.far=L.far=ve,(q!==B.near||P!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),q=B.near,P=B.far),B.layers.mask=Z.layers.mask|6,L.layers.mask=B.layers.mask&-5,G.layers.mask=B.layers.mask&-3;const Te=Z.parent,Ae=B.cameras;ce(B,Te);for(let he=0;he<Ae.length;he++)ce(Ae[he],Te);B.projectionMatrix.copy(L.projectionMatrix),B.projectionMatrixInverse.copy(L.projectionMatrixInverse),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),X(Z,B,Te)};function X(Z,te,ve){ve===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Dr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return o},this.setFoveation=function(Z){o=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(B)},this.getCameraTexture=function(Z){return g[Z]};let Y=null;function ne(Z,te){if(l=te.getViewerPose(c||s),m=te,l!==null){const ve=l.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let Te=!1;ve.length!==B.cameras.length&&(B.cameras.length=0,Te=!0);for(let he=0;he<ve.length;he++){const Ue=ve[he];let We=null;if(d!==null)We=d.getViewport(Ue);else{const dt=h.getViewSubImage(f,Ue);We=dt.viewport,he===0&&(e.setRenderTargetTextures(A,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(A))}let be=N[he];be===void 0&&(be=new Ht,be.layers.enable(he),be.viewport=new nt,N[he]=be),be.matrix.fromArray(Ue.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ue.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(We.x,We.y,We.width,We.height),he===0&&(B.matrix.copy(be.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Te===!0&&B.cameras.push(be)}const Ae=n.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const he=h.getDepthInformation(ve[0]);he&&he.isValid&&he.texture&&S.init(he,n.renderState)}if(Ae&&Ae.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let he=0;he<ve.length;he++){const Ue=ve[he].camera;if(Ue){let We=g[Ue];We||(We=new Sa,g[Ue]=We);const be=h.getCameraImage(Ue);We.sourceTexture=be}}}}for(let ve=0;ve<x.length;ve++){const Te=b[ve],Ae=x[ve];Te!==null&&Ae!==void 0&&Ae.update(Te,te,c||s)}Y&&Y(Z,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),m=null}const ye=new Na;ye.setAnimationLoop(ne),this.setAnimationLoop=function(Z){Y=Z},this.dispose=function(){}}},gu=new tt,Wa=new Ne;Wa.set(-1,0,0,0,1,0,0,0,1);function _u(e,t){function i(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,wa(e)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,T,A,x){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(g,u):u.isMeshLambertMaterial?(s(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(g,u),f(g,u)):u.isMeshPhongMaterial?(s(g,u),h(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&m(g,u,x)):u.isMeshMatcapMaterial?(s(g,u),M(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),S(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?c(g,u,T,A):u.isSpriteMaterial?l(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,i(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,i(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,i(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===1&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,i(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===1&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,i(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,i(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,i(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const T=t.get(u),A=T.envMap,x=T.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(gu.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Wa),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,i(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,i(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,i(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function c(g,u,T,A){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*T,g.scale.value=A*.5,u.map&&(g.map.value=u.map,i(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,i(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function l(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,i(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,i(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,i(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,i(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,T){g.ior.value=u.ior,u.diffuseRoughness>0&&(g.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=u.diffuseRoughnessMap,i(u.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,i(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,i(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,i(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,i(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,i(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===1&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.retroreflectivity>0&&(g.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,i(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,i(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,i(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,i(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,i(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,i(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,i(u.specularIntensityMap,g.specularIntensityMapTransform))}function M(g,u){u.matcap&&(g.matcap.value=u.matcap)}function S(g,u){const T=t.get(u).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function vu(e,t,i,n){let r={},s={};function a(T,A){const x=A.program;n.uniformBlockBinding(T,x,r[T.id])}function o(T,A){let x=r[T.id];x===void 0&&(M(T),x=c(T),r[T.id]=x,T.addEventListener("dispose",g));const b=A.program;n.updateUBOMapping(T,b);const R=t.render.frame;s[T.id]!==R&&(l(T),s[T.id]=R)}function c(T){const A=e.createBuffer(),x=T.__size,b=T.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,x,b),e.bindBuffer(e.UNIFORM_BUFFER,null),A}function l(T){const A=r[T.id],x=T.uniforms,b=T.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let R=0,p=x.length;R<p;R++){const E=x[R];if(Array.isArray(E))for(let L=0,G=E.length;L<G;L++)h(E[L],R,L,b);else h(E,R,0,b)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(T,A,x,b){if(d(T,A,x,b)===!0){const R=T.__offset,p=T.value;if(Array.isArray(p)){let E=0;for(let L=0;L<p.length;L++){const G=p[L],N=S(G,!0);f(G,T.__data,E),E+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(p,T.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,R,T.__data)}}function f(T,A,x){typeof T=="number"||typeof T=="boolean"?A[x]=T:T.isMatrix3?(A[x]=T.elements[0],A[x+1]=T.elements[1],A[x+2]=T.elements[2],A[x+3]=0,A[x+4]=T.elements[3],A[x+5]=T.elements[4],A[x+6]=T.elements[5],A[x+7]=0,A[x+8]=T.elements[6],A[x+9]=T.elements[7],A[x+10]=T.elements[8],A[x+11]=0):ArrayBuffer.isView(T)?A.set(T.subarray(0,A.length-x),x):T.toArray(A,x)}function d(T,A,x,b){const R=T.value,p=A+"_"+x;if(Array.isArray(R)){b[p]===void 0&&(b[p]=[]);const E=b[p];let L=!1;for(let G=0;G<R.length;G++)m(R[G],E,G)===!0&&(L=!0);return L}return m(R,b,p)}function m(T,A,x){if(A[x]===void 0)return typeof T=="number"||typeof T=="boolean"?A[x]=T:ArrayBuffer.isView(T)?A[x]=T.slice():A[x]=T.clone(),!0;{const b=A[x];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return A[x]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(b.equals(T)===!1)return b.copy(T),!0}}return!1}function M(T){const A=T.uniforms;let x=0;const b=16;for(let p=0,E=A.length;p<E;p++){const L=Array.isArray(A[p])?A[p]:[A[p]];for(let G=0,N=L.length;G<N;G++){const B=L[G],q=Array.isArray(B.value)?B.value:[B.value],P=Array.isArray(A[p])||Array.isArray(B.value);let H=x;for(let K=0,z=q.length;K<z;K++){const ce=q[K],X=S(ce,P),Y=x%b,ne=Y%X.boundary,ye=Y+ne;x+=ne,ye!==0&&b-ye<X.storage&&(x+=b-ye),K===0&&(H=x),x+=X.storage}B.__data=new(B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array)((x-H)/Float32Array.BYTES_PER_ELEMENT),B.__offset=H}}const R=x%b;return R>0&&(x+=b-R),T.__size=x,T.__cache={},this}function S(T,A){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=16,x.storage=48):T.isMatrix4?(x.boundary=16,x.storage=64):T.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(x.boundary=16,x.storage=T.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",T),A===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function g(T){const A=T.target;A.removeEventListener("dispose",g),e.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function u(){for(const T in r)e.deleteBuffer(r[T]);r={},s={}}return{bind:a,update:o,dispose:u}}var Mu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xt=null;function Su(){return Xt===null&&(Xt=new El(Mu,16,16,Xn,di),Xt.name="DFG_LUT",Xt.minFilter=Vt,Xt.magFilter=Vt,Xt.wrapS=ti,Xt.wrapT=ti,Xt.generateMipmaps=!1,Xt.needsUpdate=!0),Xt}var Nu=class{constructor(e={}){const{canvas:t=Ko(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=ui}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const M=d,S=new Set([sa,ra,na]),g=new Set([ui,xi,ea,Br,ta,ia]),u=new Uint32Array(4),T=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]};let x=null,b=null;const R=[],p=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let G=!1,N=null,B=null,q=null,P=null;this._outputColorSpace=Gt;let H=0,K=0,z=null,ce=-1,X=null;const Y=new nt,ne=new nt;let ye=null;const Z=new Ge(0);let te=0,ve=t.width,Te=t.height,Ae=1,he=null,Ue=null;const We=new nt(0,0,ve,Te),be=new nt(0,0,ve,Te);let dt=!1;const xt=new sn,ft=new Tl;let rt=!1,At=!1;const wt=new tt,st=new V,mt=new nt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Dt(){return z===null?Ae:1}let D=i;function Ut(v,C){return t.getContext(v,C)}let Ke,ct,fe,Ze,Re,Ie,gt,y,_,O,j,J,se,ae,I,Q,_e,w,W,$,ie,ue,oe;try{const v={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),D===null){const C="webgl2";if(D=Ut(C,v),D===null)throw Ut(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xe()}catch(v){throw t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Pe("WebGLRenderer: "+v.message),v}function xe(){Ke=new Tc(D),Ke.init(),ie=new uu(D,Ke),ct=new fc(D,Ke,e,ie),fe=new cu(D,Ke),ct.reversedDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),B=D.createFramebuffer(),q=D.createFramebuffer(),P=D.createFramebuffer(),Ze=new Rc(D),Re=new Zh,Ie=new hu(D,Ke,fe,Re,ct,ie,Ze),gt=new yc(L),y=new lc(D),ue=new uc(D,y),_=new Ac(D,y,Ze,ue),O=new Cc(D,_,y,ue,Ze),w=new wc(D,ct,Ie),I=new pc(Re),j=new Kh(L,gt,Ke,ct,ue,I),J=new _u(L,Re),se=new $h,ae=new nu(Ke),_e=new hc(L,gt,fe,O,m,o),Q=new lu(L,O,ct),oe=new vu(D,Ze,ct,fe),W=new dc(D,Ke,Ze),$=new bc(D,Ke,Ze),Ze.programs=j.programs,L.capabilities=ct,L.extensions=Ke,L.properties=Re,L.renderLists=se,L.shadowMap=Q,L.state=fe,L.info=Ze}M!==1009&&(E=new Lc(M,t.width,t.height,a,n,r));const ee=new mu(L,D);this.xr=ee,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=Ke.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ke.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(v){v!==void 0&&(Ae=v,this.setSize(ve,Te,!1))},this.getSize=function(v){return v.set(ve,Te)},this.setSize=function(v,C,k=!0){if(ee.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=v,Te=C,t.width=Math.floor(v*Ae),t.height=Math.floor(C*Ae),k===!0&&(t.style.width=v+"px",t.style.height=C+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(ve*Ae,Te*Ae).floor()},this.setDrawingBufferSize=function(v,C,k){ve=v,Te=C,Ae=k,t.width=Math.floor(v*k),t.height=Math.floor(C*k),this.setViewport(0,0,v,C)},this.setEffects=function(v){if(M===1009){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let C=0;C<v.length;C++)if(v[C].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Y)},this.getViewport=function(v){return v.copy(We)},this.setViewport=function(v,C,k,F){v.isVector4?We.set(v.x,v.y,v.z,v.w):We.set(v,C,k,F),fe.viewport(Y.copy(We).multiplyScalar(Dt()).round())},this.getScissor=function(v){return v.copy(be)},this.setScissor=function(v,C,k,F){v.isVector4?be.set(v.x,v.y,v.z,v.w):be.set(v,C,k,F),fe.scissor(ne.copy(be).multiplyScalar(Dt()).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(v){fe.setScissorTest(dt=v)},this.setOpaqueSort=function(v){he=v},this.setTransparentSort=function(v){Ue=v},this.getClearColor=function(v){return v.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,k=!0){let F=0;if(v){let U=!1;if(z!==null){const re=z.texture.format;U=S.has(re)}if(U){const re=z.texture.type,de=g.has(re),le=_e.getClearColor(),ge=_e.getClearAlpha(),Ee=le.r,Oe=le.g,He=le.b;de?(u[0]=Ee,u[1]=Oe,u[2]=He,u[3]=ge,D.clearBufferuiv(D.COLOR,0,u)):(T[0]=Ee,T[1]=Oe,T[2]=He,T[3]=ge,D.clearBufferiv(D.COLOR,0,T))}else F|=D.COLOR_BUFFER_BIT}C&&(F|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),N=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),_e.dispose(),se.dispose(),ae.dispose(),Ie.dispose(),Re.dispose(),gt.dispose(),O.dispose(),_.dispose(),ue.dispose(),oe.dispose(),j.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Xr),ee.removeEventListener("sessionend",qr),fi.stop()};function Le(v){v.preventDefault(),as("WebGLRenderer: Context Lost."),G=!0}function we(){as("WebGLRenderer: Context Restored."),G=!1;const v=Ze.autoReset,C=Q.enabled,k=Q.autoUpdate,F=Q.needsUpdate,U=Q.type;xe(),Ze.autoReset=v,Q.enabled=C,Q.autoUpdate=k,Q.needsUpdate=F,Q.type=U}function Fe(v){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function me(v){const C=v.target;C.removeEventListener("dispose",me),Qe(C)}function Qe(v){je(v),Re.remove(v)}function je(v){const C=Re.get(v).programs;C!==void 0&&(C.forEach(function(k){j.releaseProgram(k)}),v.isShaderMaterial&&j.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,k,F,U,re){C===null&&(C=bt);const de=U.isMesh&&U.matrixWorld.determinantAffine()<0,le=Ya(v,C,k,F,U);fe.setMaterial(F,de);let ge=k.index,Ee=1;if(F.wireframe===!0){if(ge=_.getWireframeAttribute(k),ge===void 0)return;Ee=2}const Oe=k.drawRange,He=k.attributes.position;let Me=Oe.start*Ee,qe=(Oe.start+Oe.count)*Ee;re!==null&&(Me=Math.max(Me,re.start*Ee),qe=Math.min(qe,(re.start+re.count)*Ee)),ge!==null?(Me=Math.max(Me,0),qe=Math.min(qe,ge.count)):He!=null&&(Me=Math.max(Me,0),qe=Math.min(qe,He.count));const it=qe-Me;if(it<0||it===1/0)return;ue.setup(U,F,le,k,ge);let Je,Xe=W;if(ge!==null&&(Je=y.get(ge),Xe=$,Xe.setIndex(Je)),U.isMesh)F.wireframe===!0?(fe.setLineWidth(F.wireframeLinewidth*Dt()),Xe.setMode(D.LINES)):Xe.setMode(D.TRIANGLES);else if(U.isLine){let _t=F.linewidth;_t===void 0&&(_t=1),fe.setLineWidth(_t*Dt()),U.isLineSegments?Xe.setMode(D.LINES):U.isLineLoop?Xe.setMode(D.LINE_LOOP):Xe.setMode(D.LINE_STRIP)}else U.isPoints?Xe.setMode(D.POINTS):U.isSprite&&Xe.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))Xe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const _t=U._multiDrawStarts,Se=U._multiDrawCounts,Ct=U._multiDrawCount,Ye=ge?y.get(ge).bytesPerElement:1,pi=Re.get(F).currentProgram.getUniforms();for(let vt=0;vt<Ct;vt++)pi.setValue(D,"_gl_DrawID",vt),Xe.render(_t[vt]/Ye,Se[vt])}else if(U.isInstancedMesh)Xe.renderInstances(Me,it,U.count);else if(k.isInstancedBufferGeometry){const _t=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Se=Math.min(k.instanceCount,_t);Xe.renderInstances(Me,it,Se)}else Xe.render(Me,it)};function Wr(v,C,k,F){N!==null&&v.isNodeMaterial&&N.setObject(F,v),rt===!0&&I.setState(v,k,!1),v.transparent===!0&&v.side===2&&v.forceSinglePass===!1?(v.side=1,v.needsUpdate=!0,Zi(v,C,F),v.side=0,v.needsUpdate=!0,Zi(v,C,F),v.side=2):Zi(v,C,F)}this.compile=function(v,C,k=null){k===null&&(k=v),N!==null&&N.renderStart(v,C,k),b=ae.get(k),b.init(C),p.push(b),k.traverseVisible(function(U){U.isLight&&U.layers.test(C.layers)&&(b.pushLight(U),U.castShadow&&b.pushShadow(U))}),v!==k&&v.traverseVisible(function(U){U.isLight&&U.layers.test(C.layers)&&(b.pushLight(U),U.castShadow&&b.pushShadow(U))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),At=this.localClippingEnabled,rt=I.init(this.clippingPlanes,At),rt===!0&&I.setGlobalState(this.clippingPlanes,C),N!==null&&Q.render(b.state.shadowsArray,k,C);const F=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const re=U.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){const le=re[de];Wr(le,k,C,U),F.add(le)}else Wr(re,k,C,U),F.add(re)}),b=p.pop(),N!==null&&N.renderEnd(),F},this.compileAsync=function(v,C,k=null){const F=this.compile(v,C,k);return new Promise(U=>{function re(){if(F.forEach(function(de){const le=Re.get(de).currentProgram;(le===void 0||le.isReady())&&F.delete(de)}),F.size===0){U(v);return}setTimeout(re,10)}Ke.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let tr=null;function Xa(v){tr&&tr(v)}function Xr(){fi.stop()}function qr(){fi.start()}const fi=new Na;fi.setAnimationLoop(Xa),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(v){tr=v,ee.setAnimationLoop(v),v===null?fi.stop():fi.start()},ee.addEventListener("sessionstart",Xr),ee.addEventListener("sessionend",qr),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;N!==null&&N.renderStart(v,C);const k=ee.enabled===!0&&ee.isPresenting===!0,F=E!==null&&(z===null||k)&&E.begin(L,z);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(C),C=ee.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,C,z),b=ae.get(v,p.length),b.init(C),b.state.textureUnits=Ie.getTextureUnits(),p.push(b),wt.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?ft.setFromArrayCamera(C):xt.setFromProjectionMatrix(wt,Ei,C.reversedDepth),At=this.localClippingEnabled,rt=I.init(this.clippingPlanes,At),x=se.get(v,R.length),x.init(),R.push(x),this.info.render.frame++,ee.enabled===!0&&ee.isPresenting===!0){const re=L.xr.getDepthSensingMesh();re!==null&&ir(re,C,-1/0,L.sortObjects)}ir(v,C,0,L.sortObjects),x.finish(),N!==null&&N.updateLights(b.state.lightsArray),L.sortObjects===!0&&x.sort(he,Ue),Rt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Rt&&_e.addToRenderList(x,v),this.info.autoReset===!0&&this.info.reset(),rt===!0&&I.beginShadows();const U=b.state.shadowsArray;if(Q.render(U,v,C),rt===!0&&I.endShadows(),(F&&E.hasRenderPass())===!1){const re=x.opaque,de=x.transmissive;if(b.setupLights(),C.isArrayCamera){const le=C.cameras;if(de.length>0)for(let ge=0,Ee=le.length;ge<Ee;ge++){const Oe=le[ge];Kr(re,de,v,Oe)}Rt&&_e.render(v);for(let ge=0,Ee=le.length;ge<Ee;ge++){const Oe=le[ge];Yr(x,v,Oe,Oe.viewport)}}else de.length>0&&Kr(re,de,v,C),Rt&&_e.render(v),Yr(x,v,C)}z!==null&&K===0&&(Ie.updateMultisampleRenderTarget(z),Ie.updateRenderTargetMipmap(z)),F&&E.end(L),v.isScene===!0&&v.onAfterRender(L,v,C),ue.resetDefaultState(),ce=-1,X=null,p.pop(),p.length>0?(b=p[p.length-1],Ie.setTextureUnits(b.state.textureUnits),rt===!0&&I.setGlobalState(L.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?x=R[R.length-1]:x=null,N!==null&&N.renderEnd()};function ir(v,C,k,F){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){const re=C.isArrayCamera?ft:xt;if(!v.frustumCulled||v.intersectsFrustum(re)){F&&mt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(wt);const de=O.update(v),le=v.material;le.visible&&x.push(v,de,le,k,mt.z,null,C)}}else if(v.isMesh||v.isLine||v.isPoints){const re=C.isArrayCamera?ft:xt;if(!v.frustumCulled||v.intersectsFrustum(re)){const de=O.update(v),le=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),mt.copy(v.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),mt.copy(de.boundingSphere.center)),mt.applyMatrix4(v.matrixWorld).applyMatrix4(wt)),Array.isArray(le)){const ge=de.groups;for(let Ee=0,Oe=ge.length;Ee<Oe;Ee++){const He=ge[Ee],Me=le[He.materialIndex];Me&&Me.visible&&x.push(v,de,Me,k,mt.z,He,C)}}else le.visible&&x.push(v,de,le,k,mt.z,null,C)}}}const U=v.children;for(let re=0,de=U.length;re<de;re++)ir(U[re],C,k,F)}function Yr(v,C,k,F){const{opaque:U,transmissive:re,transparent:de}=v;b.setupLightsView(k),rt===!0&&I.setGlobalState(L.clippingPlanes,k),F&&fe.viewport(Y.copy(F)),U.length>0&&dn(U,C,k),re.length>0&&dn(re,C,k),de.length>0&&dn(de,C,k),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Kr(v,C,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[F.id]===void 0){const He=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[F.id]=new Yt(1,1,{generateMipmaps:!0,type:He?di:ui,minFilter:Jn,samples:Math.max(4,ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Be.workingColorSpace})}const U=b.state.transmissionRenderTarget[F.id],re=F.viewport||Y;U.setSize(re.z*L.transmissionResolutionScale,re.w*L.transmissionResolutionScale);const de=L.getRenderTarget(),le=L.getActiveCubeFace(),ge=L.getActiveMipmapLevel();L.setRenderTarget(U),L.getClearColor(Z),te=L.getClearAlpha(),te<1&&L.setClearColor(16777215,.5),L.clear(),Rt&&_e.render(k);const Ee=L.toneMapping;L.toneMapping=0;const Oe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),b.setupLightsView(F),rt===!0&&I.setGlobalState(L.clippingPlanes,F),dn(v,k,F),Ie.updateMultisampleRenderTarget(U),Ie.updateRenderTargetMipmap(U),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Me=0,qe=C.length;Me<qe;Me++){const{object:it,geometry:Je,material:Xe,group:_t}=C[Me];if(Xe.side===2&&it.layers.test(F.layers)){const Se=Xe.side;Xe.side=1,Xe.needsUpdate=!0,Zr(it,k,F,Je,Xe,_t),Xe.side=Se,Xe.needsUpdate=!0,He=!0}}He===!0&&(Ie.updateMultisampleRenderTarget(U),Ie.updateRenderTargetMipmap(U))}L.setRenderTarget(de,le,ge),L.setClearColor(Z,te),Oe!==void 0&&(F.viewport=Oe),L.toneMapping=Ee}function dn(v,C,k){const F=C.isScene===!0?C.overrideMaterial:null;for(let U=0,re=v.length;U<re;U++){const de=v[U],{object:le,geometry:ge,group:Ee}=de;let Oe=de.material;Oe.allowOverride===!0&&F!==null&&(Oe=F),le.layers.test(k.layers)&&Zr(le,C,k,ge,Oe,Ee)}}function Zr(v,C,k,F,U,re){N!==null&&U.isNodeMaterial&&N.setObject(v,U),v.onBeforeRender(L,C,k,F,U,re),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(L,C,k,F,v,re),U.transparent===!0&&U.side===2&&U.forceSinglePass===!1?(U.side=1,U.needsUpdate=!0,L.renderBufferDirect(k,C,F,U,v,re),U.side=0,U.needsUpdate=!0,L.renderBufferDirect(k,C,F,U,v,re),U.side=2):L.renderBufferDirect(k,C,F,U,v,re),v.onAfterRender(L,C,k,F,U,re)}function Jr(v){let C=0;for(const k of v)k.texture!==null&&C++;return C}function Zi(v,C,k){C.isScene!==!0&&(C=bt);const F=Re.get(v),U=b.state.lights,re=b.state.shadowsArray,de=U.state.version,le=j.getParameters(v,U.state,re,C,k,b.state.lightProbeGridArray),ge=j.getProgramCacheKey(le);let Ee=F.programs;F.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,F.fog=C.fog;const Oe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;F.envMap=gt.get(v.envMap||F.environment,Oe),F.envMapRotation=F.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,Ee===void 0&&(v.addEventListener("dispose",me),Ee=new Map,F.programs=Ee,F.programVariants=new Map);let He=Ee.get(ge);if(He!==void 0){if(F.currentProgram===He&&F.lightsStateVersion===de)return Qr(v,le),He}else le.uniforms=j.getUniforms(v),N!==null&&v.isNodeMaterial&&N.build(v,k,le),v.onBeforeCompile(le,L),He=j.acquireProgram(le,ge),Ee.set(ge,He),F.uniforms=le.uniforms;const Me=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Me.clippingPlanes=I.uniform),Qr(v,le),F.needsLights=Za(v),F.lightsStateVersion=de,F.needsLights&&(Me.ambientLightColor.value=U.state.ambient,Me.lightProbe.value=U.state.probe,Me.sunLights.value=U.state.sun,Me.sunLightShadows.value=U.state.sunShadow,Me.directionalLights.value=U.state.directional,Me.directionalLightShadows.value=U.state.directionalShadow,Me.spotLights.value=U.state.spot,Me.spotLightShadows.value=U.state.spotShadow,Me.rectAreaLights.value=U.state.rectArea,Me.ltc_1.value=U.state.rectAreaLTC1,Me.ltc_2.value=U.state.rectAreaLTC2,Me.pointLights.value=U.state.point,Me.pointLightShadows.value=U.state.pointShadow,Me.hemisphereLights.value=U.state.hemi,Me.sunShadowMatrix.value=U.state.sunShadowMatrix,Me.sunShadowCascade.value=U.state.sunShadowCascade,Me.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Me.spotLightMatrix.value=U.state.spotLightMatrix,Me.spotLightMap.value=U.state.spotLightMap,Me.pointShadowMatrix.value=U.state.pointShadowMatrix),F.numLightProbeGrids=Jr(b.state.lightProbeGridArray),F.currentProgram=He,F.uniformsList=null,He}function qa(v,C,k,F,U){const re=Re.get(v),de=re.currentProgram.id+","+F+","+U;let le=re.programVariants.get(de);return le===void 0?(le=Zi(v,C,k),re.programVariants.set(de,le)):(re.currentProgram=le,re.uniformsList=null,re.outputColorSpace=F,re.toneMapping=U),le}function $r(v){if(v.uniformsList===null){const C=v.currentProgram.getUniforms();v.uniformsList=Vn.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function Qr(v,C){const k=Re.get(v);k.outputColorSpace=C.outputColorSpace,k.batching=C.batching,k.batchingColor=C.batchingColor,k.instancing=C.instancing,k.instancingColor=C.instancingColor,k.instancingMorph=C.instancingMorph,k.skinning=C.skinning,k.morphTargets=C.morphTargets,k.morphNormals=C.morphNormals,k.morphColors=C.morphColors,k.morphTargetsCount=C.morphTargetsCount,k.numClippingPlanes=C.numClippingPlanes,k.numIntersection=C.numClipIntersection,k.vertexAlphas=C.vertexAlphas,k.vertexTangents=C.vertexTangents,k.toneMapping=C.toneMapping}function Ya(v,C,k,F,U){C.isScene!==!0&&(C=bt),Ie.resetTextureUnits();const re=C.fog,de=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?C.environment:null,le=z===null?L.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Be.workingColorSpace,ge=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Ee=gt.get(F.envMap||de,ge),Oe=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,He=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Me=!!k.morphAttributes.position,qe=!!k.morphAttributes.normal,it=!!k.morphAttributes.color;let Je=0;F.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Je=L.toneMapping);const Xe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_t=Xe!==void 0?Xe.length:0,Se=Re.get(F),Ct=b.state.lights;if(rt===!0&&(At===!0||v!==X)){const $e=v===X&&F.id===ce;I.setState(F,v,$e)}let Ye=!1,pi=!1;F.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Ct.state.version||U.isBatchedMesh&&Se.batching===!1||!U.isBatchedMesh&&Se.batching===!0||U.isBatchedMesh&&Se.batchingColor===!0&&U._colorsTexture===null||U.isBatchedMesh&&Se.batchingColor===!1&&U._colorsTexture!==null||U.isInstancedMesh&&Se.instancing===!1||!U.isInstancedMesh&&Se.instancing===!0||U.isSkinnedMesh&&Se.skinning===!1||!U.isSkinnedMesh&&Se.skinning===!0||U.isInstancedMesh&&Se.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Se.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Se.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Se.instancingMorph===!1&&U.morphTexture!==null||Se.envMap!==Ee||F.fog===!0&&Se.fog!==re||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==I.numPlanes||Se.numIntersection!==I.numIntersection)||Se.vertexAlphas!==Oe||Se.vertexTangents!==He||Se.morphTargets!==Me||Se.morphNormals!==qe||Se.morphColors!==it||Se.morphTargetsCount!==_t||Se.numLightProbeGrids!==Jr(b.state.lightProbeGridArray)?Ye=!0:(Se.outputColorSpace!==le||Se.toneMapping!==Je)&&(pi=!0):(Ye=!0,Se.__version=F.version);let vt=Se.currentProgram;(Ye===!0||pi===!0)&&(vt=pi===!0?qa(F,C,U,le,Je):Zi(F,C,U),N&&F.isNodeMaterial&&N.onUpdateProgram(F,vt,Se));let fn=!1,ri=!1,mi=!1;const ke=vt.getUniforms(),pt=Se.uniforms;if(fe.useProgram(vt.program)&&(fn=!0,ri=!0,mi=!0),F.id!==ce&&(ce=F.id,ri=!0),fn||X!==v){fe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ke.setValue(D,"projectionMatrix",v.projectionMatrix),ke.setValue(D,"viewMatrix",v.matrixWorldInverse);const $e=ke.map.cameraPosition;$e!==void 0&&$e.setValue(D,st.setFromMatrixPosition(v.matrixWorld)),ct.logarithmicDepthBuffer&&ke.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ke.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),X!==v&&(X=v,ri=!0,mi=!0)}if(Se.needsLights&&(Ct.state.sunShadowMap.length>0&&ke.setValue(D,"sunShadowMap",Ct.state.sunShadowMap,Ie),Ct.state.directionalShadowMap.length>0&&ke.setValue(D,"directionalShadowMap",Ct.state.directionalShadowMap,Ie),Ct.state.spotShadowMap.length>0&&ke.setValue(D,"spotShadowMap",Ct.state.spotShadowMap,Ie),Ct.state.pointShadowMap.length>0&&ke.setValue(D,"pointShadowMap",Ct.state.pointShadowMap,Ie)),U.isSkinnedMesh){ke.setOptional(D,U,"bindMatrix"),ke.setOptional(D,U,"bindMatrixInverse");const $e=U.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ke.setValue(D,"boneTexture",$e.boneTexture,Ie))}U.isBatchedMesh&&(ke.setOptional(D,U,"batchingTexture"),ke.setValue(D,"batchingTexture",U._matricesTexture,Ie),ke.setOptional(D,U,"batchingIdTexture"),ke.setValue(D,"batchingIdTexture",U._indirectTexture,Ie),ke.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&ke.setValue(D,"batchingColorTexture",U._colorsTexture,Ie));const Ot=k.morphAttributes;if((Ot.position!==void 0||Ot.normal!==void 0||Ot.color!==void 0)&&w.update(U,k,vt),(ri||Se.receiveShadow!==U.receiveShadow)&&(Se.receiveShadow=U.receiveShadow,ke.setValue(D,"receiveShadow",U.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&C.environment!==null&&(pt.envMapIntensity.value=C.environmentIntensity),pt.dfgLUT!==void 0&&(pt.dfgLUT.value=Su()),ri){if(ke.setValue(D,"toneMappingExposure",L.toneMappingExposure),Se.needsLights&&Ka(pt,mi),re&&F.fog===!0&&J.refreshFogUniforms(pt,re),J.refreshMaterialUniforms(pt,F,Ae,Te,b.state.transmissionRenderTarget[v.id]),Se.needsLights&&Se.numLightProbeGrids>0){const $e=A;let Et=0;for(const Zt of b.state.lightProbeGridArray)Zt.texture!==null&&($e.textures[Et]=Zt.texture,$e.min[Et]=Zt.boundingBox.min,$e.max[Et]=Zt.boundingBox.max,$e.resolution[Et]=Zt.resolution,Et++);for(const Zt in $e)$e[Zt].length=Et;pt.probesSH.value=$e.textures,pt.probesMin.value=$e.min,pt.probesMax.value=$e.max,pt.probesResolution.value=$e.resolution}Vn.upload(D,$r(Se),pt,Ie)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Vn.upload(D,$r(Se),pt,Ie),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ke.setValue(D,"center",U.center),ke.setValue(D,"modelViewMatrix",U.modelViewMatrix),ke.setValue(D,"normalMatrix",U.normalMatrix),ke.setValue(D,"modelMatrix",U.matrixWorld),F.uniformsGroups!==void 0){const $e=F.uniformsGroups;for(let Et=0,Zt=$e.length;Et<Zt;Et++){const es=$e[Et];oe.update(es,vt),oe.bind(es,vt)}}return vt}function Ka(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.sunLights.needsUpdate=C,v.sunLightShadows.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function Za(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(v,C,k){const F=Re.get(v);F.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Re.get(v.texture).__webglTexture=C,Re.get(v.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:k,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){const k=Re.get(v);k.__webglFramebuffer=C,k.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,k=0){z=v,H=C,K=k;let F=null,U=!1,re=!1;if(v){const de=Re.get(v);if(de.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(D.FRAMEBUFFER,de.__webglFramebuffer),Y.copy(v.viewport),ne.copy(v.scissor),ye=v.scissorTest,fe.viewport(Y),fe.scissor(ne),fe.setScissorTest(ye),ce=-1;return}else if(de.__webglFramebuffer===void 0)Ie.setupRenderTarget(v);else if(de.__hasExternalTextures)Ie.rebindTextures(v,Re.get(v.texture).__webglTexture,Re.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ee=v.depthTexture;if(de.__boundDepthTexture!==Ee){if(Ee!==null&&Re.has(Ee)&&(v.width!==Ee.image.width||v.height!==Ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(v)}}const le=v.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(re=!0);const ge=Re.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ge[C])?F=ge[C][k]:F=ge[C],U=!0):v.samples>0&&Ie.useMultisampledRTT(v)===!1?F=Re.get(v).__webglMultisampledFramebuffer:Array.isArray(ge)?F=ge[k]:F=ge,Y.copy(v.viewport),ne.copy(v.scissor),ye=v.scissorTest}else Y.copy(We).multiplyScalar(Ae).floor(),ne.copy(be).multiplyScalar(Ae).floor(),ye=dt;if(k!==0&&(F=B),fe.bindFramebuffer(D.FRAMEBUFFER,F)&&fe.drawBuffers(v,F),fe.viewport(Y),fe.scissor(ne),fe.setScissorTest(ye),U){const de=Re.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+C,de.__webglTexture,k)}else if(re){const de=C;for(let le=0;le<v.textures.length;le++){const ge=Re.get(v.textures[le]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+le,ge.__webglTexture,k,de)}}else if(v!==null&&k!==0){const de=Re.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,k)}ce=-1};function jr(v){const C=Re.get(v);return(C.__readFormat!==v.format||C.__readType!==v.type)&&(C.__readFormat=v.format,C.__readType=v.type,C.__formatReadable=ct.textureFormatReadable(v.format),C.__typeReadable=ct.textureTypeReadable(v.type)),C}this.readRenderTargetPixels=function(v,C,k,F,U,re,de,le=0){if(!(v&&v.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de],Array.isArray(ge)&&(ge=ge[0])),ge){fe.bindFramebuffer(D.FRAMEBUFFER,ge);try{const Ee=v.textures[le],Oe=Ee.format,He=Ee.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+le);const Me=jr(Ee);if(Me.__formatReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-F&&k>=0&&k<=v.height-U&&D.readPixels(C,k,F,U,ie.convert(Oe),ie.convert(He),re)}finally{const Ee=z!==null?Re.get(z).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(v,C,k,F,U,re,de,le=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de],Array.isArray(ge)&&(ge=ge[0])),ge)if(C>=0&&C<=v.width-F&&k>=0&&k<=v.height-U){fe.bindFramebuffer(D.FRAMEBUFFER,ge);const Ee=v.textures[le],Oe=Ee.format,He=Ee.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+le);const Me=jr(Ee);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,qe),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),D.readPixels(C,k,F,U,ie.convert(Oe),ie.convert(He),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const it=z!==null?Re.get(z).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,it);const Je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zo(D,Je,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(qe),D.deleteSync(Je),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,k=0){const F=Math.pow(2,-k),U=Math.floor(v.image.width*F),re=Math.floor(v.image.height*F),de=C!==null?C.x:0,le=C!==null?C.y:0;Ie.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,de,le,U,re),fe.unbindTexture()},this.copyTextureToTexture=function(v,C,k=null,F=null,U=0,re=0){let de,le,ge,Ee,Oe,He,Me,qe,it;const Je=v.isCompressedTexture?v.mipmaps[re]:v.image;if(k!==null)de=k.max.x-k.min.x,le=k.max.y-k.min.y,ge=k.isBox3?k.max.z-k.min.z:1,Ee=k.min.x,Oe=k.min.y,He=k.isBox3?k.min.z:0;else{const ke=Math.pow(2,-U);de=Math.floor(Je.width*ke),le=Math.floor(Je.height*ke),v.isDataArrayTexture?ge=Je.depth:v.isData3DTexture?ge=Math.floor(Je.depth*ke):ge=1,Ee=0,Oe=0,He=0}F!==null?(Me=F.x,qe=F.y,it=F.z):(Me=0,qe=0,it=0);const Xe=ie.convert(C.format),_t=ie.convert(C.type);let Se;C.isData3DTexture?(Ie.setTexture3D(C,0),Se=D.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Ie.setTexture2DArray(C,0),Se=D.TEXTURE_2D_ARRAY):(Ie.setTexture2D(C,0),Se=D.TEXTURE_2D),fe.activeTexture(D.TEXTURE0),fe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,C.flipY),fe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),fe.pixelStorei(D.UNPACK_ALIGNMENT,C.unpackAlignment);const Ct=fe.getParameter(D.UNPACK_ROW_LENGTH),Ye=fe.getParameter(D.UNPACK_IMAGE_HEIGHT),pi=fe.getParameter(D.UNPACK_SKIP_PIXELS),vt=fe.getParameter(D.UNPACK_SKIP_ROWS),fn=fe.getParameter(D.UNPACK_SKIP_IMAGES);fe.pixelStorei(D.UNPACK_ROW_LENGTH,Je.width),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Je.height),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),fe.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,He);const ri=v.isDataArrayTexture||v.isData3DTexture,mi=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){const ke=Re.get(v),pt=Re.get(C),Ot=Re.get(ke.__renderTarget),$e=Re.get(pt.__renderTarget);fe.bindFramebuffer(D.READ_FRAMEBUFFER,Ot.__webglFramebuffer),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Et=0;Et<ge;Et++)ri&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(v).__webglTexture,U,He+Et),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(C).__webglTexture,re,it+Et)),D.blitFramebuffer(Ee,Oe,Ee+de,Oe+le,Me,qe,Me+de,qe+le,D.DEPTH_BUFFER_BIT,D.NEAREST);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||Re.has(v)){const ke=Re.get(v),pt=Re.get(C);fe.bindFramebuffer(D.READ_FRAMEBUFFER,q),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,P);for(let Ot=0;Ot<ge;Ot++)ri?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ke.__webglTexture,U,He+Ot):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ke.__webglTexture,U),mi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.__webglTexture,re,it+Ot):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pt.__webglTexture,re),U!==0?D.blitFramebuffer(Ee,Oe,Ee+de,Oe+le,Me,qe,Me+de,qe+le,D.COLOR_BUFFER_BIT,D.NEAREST):mi?D.copyTexSubImage3D(Se,re,Me,qe,it+Ot,Ee,Oe,de,le):D.copyTexSubImage2D(Se,re,Me,qe,Ee,Oe,de,le);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mi?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Se,re,Me,qe,it,de,le,ge,Xe,_t,Je.data):C.isCompressedArrayTexture?D.compressedTexSubImage3D(Se,re,Me,qe,it,de,le,ge,Xe,Je.data):D.texSubImage3D(Se,re,Me,qe,it,de,le,ge,Xe,_t,Je):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,re,Me,qe,de,le,Xe,_t,Je.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,re,Me,qe,Je.width,Je.height,Xe,Je.data):D.texSubImage2D(D.TEXTURE_2D,re,Me,qe,de,le,Xe,_t,Je);fe.pixelStorei(D.UNPACK_ROW_LENGTH,Ct),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ye),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,pi),fe.pixelStorei(D.UNPACK_SKIP_ROWS,vt),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,fn),re===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&D.generateMipmap(Se),fe.unbindTexture()},this.initRenderTarget=function(v){Re.get(v).__webglFramebuffer===void 0&&Ie.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ie.setTextureCube(v,0):v.isData3DTexture?Ie.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ie.setTexture2DArray(v,0):Ie.setTexture2D(v,0),fe.unbindTexture()},this.resetState=function(){H=0,K=0,z=null,fe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(e),t.unpackColorSpace=Be._getUnpackColorSpace()}};export{Eu as C,Gt as S,Ru as T,Ta as _,ni as a,Al as b,Ge as c,xu as d,gn as f,Ht as g,wu as h,Si as i,Au as l,Sl as m,Pu as n,Tu as o,yi as p,Hr as r,Lu as s,Nu as t,bl as u,Cu as v,Ti as w,bu as x,yu as y};
