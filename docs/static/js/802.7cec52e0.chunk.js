"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[802,797],{5797:function(n,t,e){e.r(t),e.d(t,{ThreeProvider:function(){return s},useThreeContext:function(){return f}});var r=e(885),o=e(2791),u=e(924),c=e(184),i={renderer:null,scene:null},a=(0,o.createContext)(i),f=function(){return(0,o.useContext)(a)},s=function(n){var t=n.children,e=function(){var n=(0,o.useState)(),t=(0,r.Z)(n,2),e=t[0],u=t[1],c=(0,o.useCallback)((function(){u({width:window.innerWidth,height:window.innerHeight})}),[]);return(0,o.useEffect)((function(){return c(),window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}}),[c]),e}(),i=(0,o.useRef)(null),f=(0,o.useState)(null),s=(0,r.Z)(f,2),v=s[0],d=s[1],l=(0,o.useMemo)((function(){return new u.xsS}),[]);return(0,o.useEffect)((function(){null!=v&&null!=e&&(v.setPixelRatio(window.devicePixelRatio),v.setSize(e.width,e.height))}),[v,e]),(0,o.useEffect)((function(){if(null==i.current)throw new Error("");var n=new u.CP7({canvas:i.current,antialias:!0});return d(n),function(){d(null)}}),[]),(0,c.jsxs)(a.Provider,{value:{renderer:v,scene:l},children:[(0,c.jsx)("canvas",{ref:i}),t]})}},7802:function(n,t,e){e.r(t),e.d(t,{OutMaterial:function(){return w}});var r=e(885),o=e(2791),u=e(924),c=e(9528),i=e(4588),a=e(8137),f=e(5576),s=e(2469),v=e(5797),d=e(9988),l=e(4867),m=e(184),x="\nuniform float u_time;\nvarying vec2 vUv;\nuniform vec2 u_resolution;\n#include <fog_pars_fragment>\n\n".concat((0,l.vB)([(0,l.MX)(),(0,l.p1)(),(0,l.k0)(5,{noiseFunc:(0,l.wn)()}),(0,l.XG)(),(0,l.BI)()]),"\n\nvoid main()\t{\n    vec3 color;\n    color = vec3(0.0);\n    vec2 p = (vUv - vec2(0.5)) * 2.0 * 2.;\n\n    float a = (fbm(\n        p\n        + fbm(\n            p\n            + fbm(\n                p\n    ))) + 1.0) / 2.0;\n\n    color.x = a * 0.1 + 0.0 + fbm(p);\n    color.y = 1.0;\n    color.z = a * 0.8 + 0.5 + fbm(p);\n\n    vec3 c = hsv2rgb(color);\n    c = vec3(a);\n\n    gl_FragColor = vec4(c, 1.0);\n    #include <fog_fragment>\n}\n"),w=function(){var n=(0,v.useThreeContext)().scene,t=(0,c.A)({z:-400}),e=(0,a.L)(t);(0,o.useEffect)((function(){if(null!=n){var t=new u.Mig(2236928,1);return n.add(t),function(){n.remove(t)}}}),[n]);var l=(0,i.D)({x:-200,y:-100,z:100,intensity:1,color:26214});(0,f.x)(n,l);var w=(0,i.D)({x:150,y:100,z:-50,intensity:1,color:16777147});(0,f.x)(n,w);var p=(0,d.n)({fragmentShader:x,vertexShader:"\nuniform float u_time;\nuniform vec2 u_resolution;\nvarying vec2 vUv;\n\nvoid main()\t{\n    vec3 p = position;\n    vUv = uv - .5;\n    vUv += .5;\n    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(p, 1.0);\n}\n"}),h=(0,r.Z)(p,2),g=h[0],y=h[1];(0,o.useEffect)((function(){g.scale.x=3,g.scale.y=3}),[g]),(0,f.x)(n,g);var E=y("u_time",0);y("u_resolution",[window.innerWidth,window.innerHeight]);var b=(0,o.useMemo)((function(){return new u.Pa4(0,0,0)}),[]);return(0,s.g)((function(n){t.lookAt(b),E(n),e()})),(0,m.jsx)(m.Fragment,{})}},9528:function(n,t,e){e.d(t,{A:function(){return u}});var r=e(2791),o=e(924),u=function(n){var t=n.x,e=void 0===t?0:t,u=n.y,c=void 0===u?0:u,i=n.z,a=void 0===i?0:i,f=(0,r.useRef)(new o.cPb(45,window.innerWidth/window.innerHeight));return(0,r.useEffect)((function(){f.current.position.x=e}),[e]),(0,r.useEffect)((function(){f.current.position.y=c}),[c]),(0,r.useEffect)((function(){f.current.position.z=a}),[a]),f.current}},4588:function(n,t,e){e.d(t,{D:function(){return u}});var r=e(2791),o=e(924),u=function(n){var t=n.x,e=void 0===t?0:t,u=n.y,c=void 0===u?0:u,i=n.z,a=void 0===i?0:i,f=n.color,s=void 0===f?16777215:f,v=n.intensity,d=void 0===v?1:v,l=(0,r.useRef)(new o.Ox3);return(0,r.useEffect)((function(){l.current.intensity=d}),[d]),(0,r.useEffect)((function(){l.current.color.set(s)}),[s]),(0,r.useEffect)((function(){l.current.position.x=e}),[e]),(0,r.useEffect)((function(){l.current.position.y=c}),[c]),(0,r.useEffect)((function(){l.current.position.z=a}),[a]),l.current}},8137:function(n,t,e){e.d(t,{L:function(){return u}});var r=e(5797),o=e(2791),u=function(n){var t=(0,r.useThreeContext)(),e=t.scene,u=t.renderer;return(0,o.useCallback)((function(){null!=u&&null!=e&&u.render(e,n)}),[n,u,e])}},9988:function(n,t,e){e.d(t,{n:function(){return u}});var r=e(2791),o=e(924),u=function(n){var t=n.fragmentShader,e=void 0===t?"":t,u=n.vertexShader,c=void 0===u?"":u,i=n.fog,a=void 0!==i&&i,f=n.geometry,s=void 0===f?new o.BKK(100,100,10,10):f,v=(0,r.useMemo)((function(){return new o.jyz({transparent:!0,depthTest:!0})}),[]);return(0,r.useEffect)((function(){v.vertexShader=c}),[v,c]),(0,r.useEffect)((function(){v.fragmentShader=e}),[v,e]),(0,r.useEffect)((function(){v.fog=a}),[v,a]),[(0,r.useMemo)((function(){return new o.Kj0(s,v)}),[v,s]),(0,r.useCallback)((function(n,t){v.uniforms[n]={value:t};return function(t){v.uniforms[n].value=t}}),[v])]}},5576:function(n,t,e){e.d(t,{x:function(){return o}});var r=e(2791),o=function(n,t){(0,r.useEffect)((function(){if(null!=n&&null!=t)return n.add(t),function(){n.remove(t)}}),[n,t])}},2469:function(n,t,e){e.d(t,{N:function(){return o},g:function(){return u}});var r=e(2791);function o(n){var t=!1,e=0,r=function r(o){t||(e=window.requestAnimationFrame((function(n){r(n)})),n(o,0))};return e=window.requestAnimationFrame((function(n){r(n)})),function(){t=!0,window.cancelAnimationFrame(e)}}function u(n){var t=(0,r.useRef)(n),e=(0,r.useRef)(0);(0,r.useEffect)((function(){t.current=n}),[n]),(0,r.useEffect)((function(){var n=0,r=function r(o){n=window.requestAnimationFrame(r),t.current(o,o-e.current),e.current=o};return n=requestAnimationFrame((function(n){e.current=n,r(n)})),function(){window.cancelAnimationFrame(n)}}),[])}},4867:function(n,t,e){e.d(t,{BI:function(){return f},MX:function(){return r},XG:function(){return o},k0:function(){return u},p1:function(){return a},vB:function(){return s},wn:function(){return i}});var r=function(){return{funcName:"random",output:"float",input:["vec2"],value:"\nfloat random (in vec2 st) {\n    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);\n}\n"}},o=function(){return{funcName:"hsv2rgb",output:"vec3",input:["vec3"],value:"\nvec3 hsv2rgb(vec3 c) {\n    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n"}},u=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.noiseFunc,r=void 0===e?{funcName:"fci2d",output:"float",input:["vec2"],value:"\nfloat fci2d (vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n"}:e;return{funcName:"fbm",output:"float",input:["vec2"],dependencies:[r],value:"\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\n\n#define FBM_OCTAVES ".concat(n,"\n#define FBM_NOISE ").concat(r.funcName,"\nfloat fbm (in vec2 st) {\n    float value = 0.0;\n    float amplitude = .5;\n    float frequency = 0.;\n    for (int i = 0; i < FBM_OCTAVES; i++) {\n        value += amplitude * FBM_NOISE(st);\n        st *= 2.;\n        amplitude *= .5;\n    }\n    return value;\n}\n")}},c=function(){return{funcName:"simplex3d",output:"float",input:["vec3"],dependencies:[r()],value:"\nvec3 random3(vec3 c) {\n\tfloat j = 4096.0 * sin(dot(c,vec3(17.0, 59.4, 15.0)));\n\tvec3 r;\n\tr.z = fract(512.0 * j);\n\tj *= .125;\n\tr.x = fract(512.0 * j);\n\tj *= .125;\n\tr.y = fract(512.0 * j);\n\treturn r - 0.5;\n}\n\n/* 3d simplex noise */\nfloat simplex3d(vec3 p) {\n    const float F3 =  0.3333333;\n    const float G3 =  0.1666667;\n    const mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);\n    const mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);\n    const mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);\n\t/* 1. find current tetrahedron T and it's four vertices */\n\t/* s, s+i1, s+i2, s+1.0 - absolute skewed (integer) coordinates of T vertices */\n\t/* x, x1, x2, x3 - unskewed coordinates of p relative to each of T vertices*/\n\t\n\t/* calculate s and x */\n\tvec3 s = floor(p + dot(p, vec3(F3)));\n\tvec3 x = p - s + dot(s, vec3(G3));\n\t\n\t/* calculate i1 and i2 */\n\tvec3 e = step(vec3(0.0), x - x.yzx);\n\tvec3 i1 = e*(1.0 - e.zxy);\n\tvec3 i2 = 1.0 - e.zxy*(1.0 - e);\n\t\t\n\t/* x1, x2, x3 */\n\tvec3 x1 = x - i1 + G3;\n\tvec3 x2 = x - i2 + 2.0 * G3;\n\tvec3 x3 = x - 1.0 + 3.0 * G3;\n\t\n\t/* 2. find four surflets and store them in d */\n\tvec4 w, d;\n\t\n\t/* calculate surflet weights */\n\tw.x = dot(x, x);\n\tw.y = dot(x1, x1);\n\tw.z = dot(x2, x2);\n\tw.w = dot(x3, x3);\n\t\n\t/* w fades from 0.6 at the center of the surflet to 0.0 at the margin */\n\tw = max(0.6 - w, 0.0);\n\t\n\t/* calculate surflet components */\n\td.x = dot(random3(s), x);\n\td.y = dot(random3(s + i1), x1);\n\td.z = dot(random3(s + i2), x2);\n\td.w = dot(random3(s + 1.0), x3);\n\t\n\t/* multiply d by w^4 */\n\tw *= w;\n\tw *= w;\n\td *= w;\n\t\n\t/* 3. return the sum of the four surflets */\n\treturn dot(d, vec4(52.0));\n}\n"}},i=function(){var n=c();return{funcName:"simplex2d_fractal",output:"float",input:["vec3"],dependencies:[n],value:"\nfloat simplex2d_fractal(vec2 m) {\n    const mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);\n    const mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);\n    const mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);\n\n    return  0.5333333 * ".concat(n.funcName,"(vec3(m, 1.0) * rot1)\n        + 0.2666667 * ").concat(n.funcName,"(2.0 * vec3(m, 1.0) * rot2)\n        + 0.1333333 * ").concat(n.funcName,"(4.0 *vec3(m, 1.0)*rot3)\n        + 0.0666667 * ").concat(n.funcName,"(8.0*vec3(m, 1.0));\n}\n")}},a=function(){return{funcName:"simplex2d",output:"float",input:["vec2"],dependencies:[c()],value:"\nfloat simplex2d(vec2 m) {\n    return simplex3d(vec3(m, 1.0));\n}\n"}},f=function(){return{funcName:"rotate2d",output:"mat2",input:["float"],value:"\nmat2 rotate2d(float _angle){\n    return mat2(\n        cos(_angle),-sin(_angle),\n        sin(_angle),cos(_angle)\n    );\n}\n"}},s=function(n){var t=new Map;return function n(e){e.forEach((function(e){null!=e.dependencies&&n(e.dependencies),t.set(e.funcName,e.value)}),[])}(n),Array.from(t.entries()).map((function(n){return n[1]})).join("\n")}}}]);
//# sourceMappingURL=802.7cec52e0.chunk.js.map