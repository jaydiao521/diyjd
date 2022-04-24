/*
大牌联合通用开卡-虽加密放心用，不推荐并发

通用大牌联合通用开卡：
活动地址：https://jinggengjcq-isv.isvjcloud.com/xxxx/xxx/xxx

变量填写：
//export DPLHTY="活动ID"
如：
//export DPLHTY="04c1bf1191d044c6ae059e_22040802"

活动ID自行查找

第一个账号助力作者 其他依次助力CK1
第一个CK黑号会全部助力作者


============Quantumultx===============
[task_local]
#大牌联合通用开卡
1 1 1 1 * jd_opencardDPLHTY.js, tag=大牌联合通用开卡, enabled=true
*/
const $ = new Env("大牌联合通用开卡-加密-落幕");
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [],
    cookie = '',
    message = '';
let ownCode = null;
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
    let cookiesData = $.getdata('CookiesJD') || "[]";
    cookiesData = JSON.parse(cookiesData);
    cookiesArr = cookiesData.map(item => item.cookie);
    cookiesArr.reverse();
    cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
    cookiesArr.reverse();
    cookiesArr = cookiesArr.filter(item => !!item);
}
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxde3e9=["\x46\x4D\x58\x6D\x53\x35\x37\x30\x5A\x37\x74\x74\x4A\x32\x44\x65\x2B\x2F\x6A\x50\x6E\x46\x34\x74\x4C\x4E\x59\x41\x34\x73\x65\x75\x41\x36\x37\x4D\x4F\x49\x59\x51\x78\x45\x6B\x33\x56\x6C\x39\x2B\x41\x56\x6F\x34\x4E\x46\x2B\x74\x67\x79\x65\x49\x63\x36\x41\x36\x6B\x64\x4B\x33\x72\x4C\x42\x51\x70\x45\x51\x48\x39\x56\x34\x74\x64\x72\x72\x68\x30\x77\x3D\x3D","\x73\x2B\x34\x58\x68\x62\x75\x44\x76\x4E\x75\x33\x47\x6A\x48\x55\x74\x4B\x30\x4E\x5A\x46\x34\x74\x4C\x4E\x59\x41\x34\x73\x65\x75\x41\x36\x37\x4D\x4F\x49\x59\x51\x78\x45\x6B\x33\x56\x6C\x39\x2B\x41\x56\x6F\x34\x4E\x46\x2B\x74\x67\x79\x65\x49\x63\x36\x41\x36\x6B\x64\x4B\x33\x72\x4C\x42\x51\x70\x45\x51\x48\x39\x56\x34\x74\x64\x72\x72\x68\x30\x77\x3D\x3D","\x51\x4B\x59\x64\x70\x63\x33\x48\x38\x68\x64\x38\x6F\x77\x48\x33\x53\x50\x52\x4D\x77\x46\x6D\x48\x48\x5A\x71\x46\x56\x39\x6D\x73\x32\x32\x47\x78\x50\x74\x36\x45\x74\x2F\x48\x5A\x42\x41\x39\x4C\x75\x75\x56\x50\x45\x54\x59\x6D\x59\x58\x73\x74\x54\x56\x38\x74\x66\x70\x4B\x4A\x30\x75\x67\x6C\x4A\x34\x71\x54\x49\x5A\x73\x4B\x69\x4C\x4B\x78\x61\x67\x3D\x3D","\x43\x42\x6B\x45\x6D\x4F\x67\x77\x73\x54\x30\x44\x46\x45\x34\x48\x4C\x41\x45\x70\x7A\x46\x34\x74\x4C\x4E\x59\x41\x34\x73\x65\x75\x41\x36\x37\x4D\x4F\x49\x59\x51\x78\x45\x6B\x33\x56\x6C\x39\x2B\x41\x56\x6F\x34\x4E\x46\x2B\x74\x67\x79\x65\x49\x63\x36\x41\x36\x6B\x64\x4B\x33\x72\x4C\x42\x51\x70\x45\x51\x48\x39\x56\x34\x74\x64\x72\x72\x68\x30\x77\x3D\x3D","\x79\x72\x72\x4F\x65\x67\x74\x5A\x59\x49\x64\x59\x79\x67\x50\x6D\x6C\x50\x49\x43\x51\x4D\x6A\x4E\x68\x4E\x61\x59\x46\x79\x32\x48\x74\x65\x45\x72\x45\x36\x69\x7A\x6C\x68\x54\x66\x39\x6E\x72\x47\x59\x37\x67\x42\x6B\x43\x64\x47\x55\x34\x43\x36\x7A\x2F\x78\x44","\x73\x6C\x69\x63\x65","\x6C\x65\x6E\x67\x74\x68","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","","\x69\x73\x4E\x6F\x64\x65","\x44\x50\x4C\x48\x54\x59","\x65\x6E\x76","\x67\x65\x74\x64\x61\x74\x61","\x5C\x6E\u8BF7\u586B\u5199\u5927\u724C\u8054\u5408\u901A\u7528\u5F00\u5361\u7684\u6D3B\u52A8\x49\x44\x2C\u53D8\u91CF\u662F\x44\x50\x4C\x48\x54\x59\x5C\x6E","\x6C\x6F\x67","\x6A\x73\x6A\x69\x61\x6D\x69\x2E\x63\x6F\x6D\x2E\x76\x36","\x5F\x30\x78\x6F\x64\x6E","\x0A\u8BF7\u81EA\u884C\u786E\u8BA4\u8D26\u53F7\u4E00\u662F\u5426\u9ED1\u53F7\uFF0C\u9ED1\u53F7\u4F1A\u5168\u90E8\u52A9\u529B\u4F5C\u8005\x0A","\x6D\x73\x67","\x6E\x61\x6D\x65","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x0A\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x0A","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x0A\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x0A\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x62\x65\x61\x6E","\x41\x44\x49\x44","\x78\x78\x78\x78\x78\x78\x78\x78\x2D\x78\x78\x78\x78\x2D\x78\x78\x78\x78\x2D\x78\x78\x78\x78\x2D\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78","\x55\x55\x49\x44","\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78","\x61\x70\x70\x6B\x65\x79","\x35\x31\x42\x35\x39\x42\x42\x38\x30\x35\x39\x30\x33\x44\x41\x34\x43\x45\x35\x31\x33\x44\x32\x39\x45\x43\x34\x34\x38\x33\x37\x35","\x75\x73\x65\x72\x49\x64","\x31\x30\x32\x39\x39\x31\x37\x31","\x61\x63\x74\x49\x64","\x61\x75\x74\x68\x6F\x72\x43\x6F\x64\x65","\u53BB\u52A9\u529B\x20\x2D\x3E\x20","\x0A\u3010\u4EAC\u4E1C\u8D26\u53F7","\x20\x0A\x20\x20\x20\x20\x20\x20\x20\u2514\x20\u83B7\u5F97\x20","\x20\u4EAC\u8C46\u3002","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\u6709\u70B9\u513F\u6536\u83B7","\x63\x61\x74\x63\x68","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x66\x69\x6E\x61\x6C\x6C\x79","\x64\x6F\x6E\x65","\x74\x6F\x6B\x65\x6E","\x62\x75\x79\x65\x72\x4E\x69\x63\x6B","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x6E\x66\x6F","\x61\x63\x74\x69\x76\x69\x74\x79\x5F\x6C\x6F\x61\x64","\x31\x2E\u52A9\u529B\u7801\x20\x2D\x3E\x20","\u540E\u9762\u7684\u5C06\u7ED9\u8FD9\u4E2A\u52A9\u529B\u7801\u52A9\u529B\x20\x2D\x3E\x20","\x32\x2E\u7ED1\u5B9A\u52A9\u529B\x20\x2D\x3E","\x63\x6F\x6D\x70\x6C\x65\x74\x65\x2F\x6D\x69\x73\x73\x69\x6F\x6E","\x72\x65\x6C\x61\x74\x69\x6F\x6E\x42\x69\x6E\x64","\x73\x68\x6F\x70\x4C\x69\x73\x74","\x33\x2E\u5173\u6CE8\u5E97\u94FA\x20\x2D\x3E","\x75\x6E\x69\x74\x65\x43\x6F\x6C\x6C\x65\x63\x74\x53\x68\x6F\x70","\x34\x2E\u62BD\u5956\x20\x2D\x3E","\x64\x72\x61\x77\x2F\x70\x6F\x73\x74","\x64\x72\x61\x77","\x35\x2E\u52A0\u5165\u4F1A\u5458\x20\x2D\x3E","\u4F1A\u5458\u5361\u6570\u91CF\x20\x2D\x3E\x20","\x6F\x70\x65\x6E","\u5F00\u901A\u4F1A\u5458","\x6F\x70\x65\x6E\x43\x61\x72\x64","\x77\x61\x69\x74","\u5DF2\u7ECF\u662F\u4F1A\u5458\u4E86","\x36\x2E\u52A0\u5165\u8D2D\u7269\u8F66\x20\x2D\x3E","\x75\x6E\x69\x74\x65\x41\x64\x64\x43\x61\x72\x74","\u7528\u6237\u4FE1\u606F\u83B7\u53D6\u5931\u8D25\uFF0C\u53EF\u80FD\u9ED1\u53F7\uFF01","\u6CA1\u6709\u6210\u529F\u83B7\u53D6\u5230\u7528\u6237\u9274\u6743\u4FE1\u606F","\x32\x2E\x30","\x50\x4F\x53\x54","\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F","\x61\x73\x73\x69\x67\x6E","\x70\x61\x72\x61\x6D\x73","\x61\x64\x6D\x4A\x73\x6F\x6E","\x70\x6F\x73\x74","\x70\x61\x72\x73\x65","\x73\x75\x63\x63\x65\x73\x73","\x64\x61\x74\x61","\x73\x74\x61\x74\x75\x73","\x63\x75\x73\x53\x68\x6F\x70\x73","\x72\x65\x6D\x61\x72\x6B","\x61\x77\x61\x72\x64\x53\x65\x74\x74\x69\x6E\x67","\x61\x77\x61\x72\x64\x4E\x61\x6D\x65","\u4EAC\u4E1C\u6CA1\u6709\u8FD4\u56DE\u6570\u636E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x67\x65\x74\x53\x68\x6F\x70\x4F\x70\x65\x6E\x43\x61\x72\x64\x49\x6E\x66\x6F\x26\x62\x6F\x64\x79\x3D","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38","\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x2A\x2F\x2A","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x35\x2E\x34\x3B\x31\x33\x2E\x36\x3B","\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x41\x44\x49\x44\x2F","\x3B\x6D\x6F\x64\x65\x6C\x2F\x69\x50\x68\x6F\x6E\x65\x31\x30\x2C\x33\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x30\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x36\x37\x36\x36\x38\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x36\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x7A\x68\x2D\x63\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x68\x6F\x70\x6D\x65\x6D\x62\x65\x72\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x73\x68\x6F\x70\x63\x61\x72\x64\x2F\x3F\x76\x65\x6E\x64\x65\x72\x49\x64\x3D","\x7D\x26\x63\x68\x61\x6E\x6E\x65\x6C\x3D\x34\x30\x31\x26\x72\x65\x74\x75\x72\x6E\x55\x72\x6C\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x69\x6E\x67\x67\x65\x6E\x67\x6A\x63\x71\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x66\x72\x6F\x6E\x74\x68\x35","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x67\x65\x74","\x72\x65\x73\x75\x6C\x74","\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6C\x65\x4C\x69\x73\x74","\x6F\x70\x65\x6E\x43\x61\x72\x64\x41\x63\x74\x69\x76\x69\x74\x79\x49\x64","\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x49\x6E\x66\x6F","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x62\x69\x6E\x64\x57\x69\x74\x68\x56\x65\x6E\x64\x65\x72\x26\x62\x6F\x64\x79\x3D","\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3D\x32\x30\x32\x32\x30\x34\x31\x32\x31\x36\x34\x36\x34\x35\x32\x34\x31\x25\x33\x42\x33\x36\x33\x34\x64\x31\x61\x65\x61\x64\x61\x36\x64\x39\x63\x64\x31\x31\x61\x37\x35\x32\x36\x61\x33\x61\x36\x61\x63\x36\x33\x65\x25\x33\x42\x31\x36\x39\x66\x31\x25\x33\x42\x74\x6B\x30\x32\x77\x64\x36\x36\x66\x31\x64\x37\x34\x31\x38\x6E\x58\x75\x4C\x6A\x73\x6D\x4F\x33\x6F\x4A\x4D\x43\x78\x55\x71\x4B\x56\x77\x49\x66\x34\x71\x31\x57\x52\x70\x74\x4B\x52\x54\x33\x6E\x4A\x53\x72\x78\x30\x31\x6F\x59\x59\x42\x41\x79\x6C\x62\x53\x75\x79\x67\x34\x73\x69\x70\x6E\x45\x7A\x79\x45\x4A\x4F\x5A\x75\x46\x6A\x66\x47\x32\x51\x45\x52\x63\x42\x74\x7A\x64\x25\x33\x42\x36\x62\x34\x35\x35\x32\x33\x34\x65\x39\x33\x62\x65\x34\x65\x63\x39\x36\x33\x63\x64\x37\x63\x35\x37\x35\x64\x37\x30\x38\x38\x32\x62\x38\x33\x38\x62\x61\x35\x38\x38\x31\x34\x39\x61\x31\x66\x35\x34\x62\x36\x39\x63\x38\x64\x30\x64\x61\x63\x66\x31\x34\x64\x61\x25\x33\x42\x33\x2E\x30\x25\x33\x42\x31\x36\x34\x39\x37\x35\x33\x32\x30\x35\x32\x34\x31","\u5F00\u5361\u6210\u529F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x69\x6E\x67\x67\x65\x6E\x67\x6A\x63\x71\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F","\x3F\x26\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D","\x6A\x69\x6E\x67\x67\x65\x6E\x67\x6A\x63\x71\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x3B\x20\x63\x68\x61\x72\x73\x65\x74\x3D\x75\x74\x66\x2D\x38","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x69\x6E\x67\x67\x65\x6E\x67\x6A\x63\x71\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x69\x6E\x67\x67\x65\x6E\x67\x6A\x63\x71\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x66\x72\x6F\x6E\x74\x68\x35\x2F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x64\x7A\x31\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x4D\x79\x50\x69\x6E\x67","\x6C\x7A\x64\x7A\x31\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x64\x7A\x31\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D","\x61\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6C","\x75\x73\x65\x72\x49\x64\x3D","\x61\x63\x74\x69\x76\x69\x74\x79\x53\x68\x6F\x70\x49\x64","\x26\x74\x6F\x6B\x65\x6E\x3D","\x26\x66\x72\x6F\x6D\x54\x79\x70\x65\x3D\x41\x50\x50\x26\x72\x69\x73\x6B\x54\x79\x70\x65\x3D\x31","\x68\x65\x61\x64\x65\x72\x73","\x73\x65\x74\x2D\x63\x6F\x6F\x6B\x69\x65","\x73\x70\x6C\x69\x74","\x53\x65\x74\x2D\x43\x6F\x6F\x6B\x69\x65","\u4F60\u597D\uFF1A","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\x70\x69\x6E","\x73\x65\x63\x72\x65\x74\x50\x69\x6E","\x3B\x41\x55\x54\x48\x5F\x43\x5F\x55\x53\x45\x52\x3D","\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65","\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x32\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x31\x33\x2E\x30\x2E\x33\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x20\x53\x61\x66\x61\x72\x69\x2F\x36\x30\x34\x2E\x31\x20\x45\x64\x67\x2F\x38\x37\x2E\x30\x2E\x34\x32\x38\x30\x2E\x38\x38","\x6C\x6F\x67\x45\x72\x72","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72","\x4A\x44\x34\x69\x50\x68\x6F\x6E\x65\x2F\x31\x36\x37\x36\x35\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x69\x4F\x53\x20\x31\x33\x2E\x37\x3B\x20\x53\x63\x61\x6C\x65\x2F\x33\x2E\x30\x30\x29","\x7A\x68\x2D\x48\x61\x6E\x73\x2D\x43\x4E\x3B\x71\x3D\x31","\x62\x6F\x64\x79\x3D\x25\x37\x42\x25\x32\x32\x75\x72\x6C\x25\x32\x32\x25\x33\x41\x25\x32\x30\x25\x32\x32\x68\x74\x74\x70\x73\x25\x33\x41\x2F\x2F\x6C\x7A\x6B\x6A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x25\x32\x32\x25\x32\x43\x25\x32\x30\x25\x32\x32\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x30\x25\x32\x32\x25\x32\x32\x25\x37\x44\x26\x75\x75\x69\x64\x3D\x68\x6A\x75\x64\x77\x67\x6F\x68\x78\x7A\x56\x75\x39\x36\x6B\x72\x76\x26\x63\x6C\x69\x65\x6E\x74\x3D\x61\x70\x70\x6C\x65\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x34\x2E\x30\x26\x73\x74\x3D\x31\x36\x32\x30\x34\x37\x36\x31\x36\x32\x30\x30\x30\x26\x73\x76\x3D\x31\x31\x31\x26\x73\x69\x67\x6E\x3D\x66\x39\x64\x31\x62\x37\x65\x33\x62\x39\x34\x33\x62\x36\x61\x31\x33\x36\x64\x35\x34\x66\x65\x34\x66\x38\x39\x32\x61\x66\x30\x35","\x63\x6F\x64\x65","\u4EAC\u4E1C\u8FD4\u56DE\u4E86\u7A7A\u6570\u636E","\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x65\x2D\x61\x70\x69\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x5F\x6E\x65\x77\x2F\x69\x6E\x66\x6F\x2F\x47\x65\x74\x4A\x44\x55\x73\x65\x72\x49\x6E\x66\x6F\x55\x6E\x69\x6F\x6E","\x6D\x65\x2D\x61\x70\x69\x2E\x6A\x64\x2E\x63\x6F\x6D","\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x31\x34\x2E\x30\x2E\x32\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x20\x53\x61\x66\x61\x72\x69\x2F\x36\x30\x34\x2E\x31","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6D\x65\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x4A\x64\x2F\x6E\x65\x77\x68\x6F\x6D\x65\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32\x26\x75\x66\x63\x3D\x26","\x72\x65\x74\x63\x6F\x64\x65","\x31\x30\x30\x31","\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79","\x75\x73\x65\x72\x49\x6E\x66\x6F","\x62\x61\x73\x65\x49\x6E\x66\x6F","\x7A\x6A\x58\x73\x56\x57\x6A\x6E\x66\x69\x64\x61\x6D\x69\x6B\x48\x2E\x51\x63\x47\x6F\x75\x6D\x2E\x59\x43\x4D\x76\x36\x3D\x3D","\x63\x6F\x6E\x63\x61\x74","\x30\x78","\x73\x68\x69\x66\x74","\x70\x6F\x70","\u274C\x20","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A","\x21","\u8BF7\u81EA\u884C\u786E\u8BA4\u8D26\u53F7\u4E00\u662F\u5426\u9ED1\u53F7\uFF0C\u9ED1\u53F7\u4F1A\u5168\u90E8\u52A9\u529B\u4F5C\u8005","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A","\x20","\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\u53BB\u52A9\u529B\x20\x2D\x3E\x0A","\u3010\u4EAC\u4E1C\u8D26\u53F7","\u2514\x20\u83B7\u5F97","\u4EAC\u8C46\u3002","\x0A","\x30\x31","\x31\x2E\u52A9\u529B\u7801\x20\x2D\x3E\x0A","\u540E\u9762\u7684\u5C06\u7ED9\u8FD9\u4E2A\u52A9\u529B\u7801\u52A9\u529B\x20\x2D\x3E\x0A","\x32\x2E\u7ED1\u5B9A\u52A9\u529B\x20\x2D\x3E\x0A","\x32","\u4F1A\u5458\u5361\u6570\u91CF\x20\x2D\x3E","\x3B","\x2C","\x3F","\x30","\x78","\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x63\x68\x61\x72\x41\x74","\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66","\x6D\x64\x35","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var hhm=[__Oxde3e9[0x0],__Oxde3e9[0x1],__Oxde3e9[0x2],__Oxde3e9[0x0],__Oxde3e9[0x1],__Oxde3e9[0x2],__Oxde3e9[0x3],__Oxde3e9[0x4],__Oxde3e9[0x4]];function getRandomArrayElements(_0x3bccx3,_0x3bccx4){var _0x3bccx5=_0x3bccx3[__Oxde3e9[0x5]](0),_0x3bccx6=_0x3bccx3[__Oxde3e9[0x6]],_0x3bccx7=_0x3bccx6- _0x3bccx4,_0x3bccx8,_0x3bccx9;while(_0x3bccx6-- > _0x3bccx7){_0x3bccx9= Math[__Oxde3e9[0x8]]((_0x3bccx6+ 1)* Math[__Oxde3e9[0x7]]());_0x3bccx8= _0x3bccx5[_0x3bccx9];_0x3bccx5[_0x3bccx9]= _0x3bccx5[_0x3bccx6];_0x3bccx5[_0x3bccx6]= _0x3bccx8};return _0x3bccx5[__Oxde3e9[0x5]](_0x3bccx7)}let helpnum=[getRandomArrayElements(hhm,1)[0x0]];let DPLHTY=__Oxde3e9[0x9];DPLHTY= $[__Oxde3e9[0xa]]()?(process[__Oxde3e9[0xc]][__Oxde3e9[0xb]]?process[__Oxde3e9[0xc]][__Oxde3e9[0xb]]:`${__Oxde3e9[0x9]}${DPLHTY}${__Oxde3e9[0x9]}`):($[__Oxde3e9[0xd]](__Oxde3e9[0xb])?$[__Oxde3e9[0xd]](__Oxde3e9[0xb]):`${__Oxde3e9[0x9]}${DPLHTY}${__Oxde3e9[0x9]}`);if(!DPLHTY){console[__Oxde3e9[0xf]](`${__Oxde3e9[0xe]}`);return};var _0xodn=__Oxde3e9[0x10],_0xodn_=[__Oxde3e9[0x11]],_0x100f=[_0xodn,__Oxde3e9[0xf],__Oxde3e9[0x12],__Oxde3e9[0x13],__Oxde3e9[0x14],__Oxde3e9[0x15],__Oxde3e9[0x16],__Oxde3e9[0x6],__Oxde3e9[0x17],__Oxde3e9[0x18],__Oxde3e9[0x19],__Oxde3e9[0x1a],__Oxde3e9[0x1b],__Oxde3e9[0x1c],__Oxde3e9[0x1d],__Oxde3e9[0x1e],__Oxde3e9[0x1f],__Oxde3e9[0x20],__Oxde3e9[0xa],__Oxde3e9[0x21],__Oxde3e9[0x22],__Oxde3e9[0x23],__Oxde3e9[0x24],__Oxde3e9[0x25],__Oxde3e9[0x26],__Oxde3e9[0x27],__Oxde3e9[0x28],__Oxde3e9[0x29],__Oxde3e9[0x2a],__Oxde3e9[0x2b],__Oxde3e9[0x2c],__Oxde3e9[0x2d],__Oxde3e9[0x2e],__Oxde3e9[0x2f],__Oxde3e9[0x30],__Oxde3e9[0x31],__Oxde3e9[0x32],__Oxde3e9[0x33],__Oxde3e9[0x34],__Oxde3e9[0x35],__Oxde3e9[0x36],__Oxde3e9[0x37],__Oxde3e9[0x38],__Oxde3e9[0x39],__Oxde3e9[0x3a],__Oxde3e9[0x3b],__Oxde3e9[0x3c],__Oxde3e9[0x3d],__Oxde3e9[0x3e],__Oxde3e9[0x3f],__Oxde3e9[0x40],__Oxde3e9[0x41],__Oxde3e9[0x42],__Oxde3e9[0x43],__Oxde3e9[0x44],__Oxde3e9[0x45],__Oxde3e9[0x46],__Oxde3e9[0x47],__Oxde3e9[0x48],__Oxde3e9[0x49],__Oxde3e9[0x4a],__Oxde3e9[0x4b],__Oxde3e9[0x4c],__Oxde3e9[0x4d],__Oxde3e9[0x4e],__Oxde3e9[0x4f],__Oxde3e9[0x50],__Oxde3e9[0x51],__Oxde3e9[0x52],__Oxde3e9[0x53],__Oxde3e9[0x54],__Oxde3e9[0x55],__Oxde3e9[0x56],__Oxde3e9[0x57],__Oxde3e9[0x58],__Oxde3e9[0x59],__Oxde3e9[0x5a],__Oxde3e9[0x5b],__Oxde3e9[0x5c],__Oxde3e9[0x5d],__Oxde3e9[0x5e],__Oxde3e9[0x5f],__Oxde3e9[0x60],__Oxde3e9[0x61],__Oxde3e9[0x62],__Oxde3e9[0x63],__Oxde3e9[0x64],__Oxde3e9[0x65],__Oxde3e9[0x66],__Oxde3e9[0x67],__Oxde3e9[0x68],__Oxde3e9[0x69],__Oxde3e9[0x6a],__Oxde3e9[0x6b],__Oxde3e9[0x6c],__Oxde3e9[0x6d],__Oxde3e9[0x6e],__Oxde3e9[0x6f],__Oxde3e9[0x70],__Oxde3e9[0x71],__Oxde3e9[0x72],__Oxde3e9[0x73],__Oxde3e9[0x74],__Oxde3e9[0x75],__Oxde3e9[0x76],__Oxde3e9[0x77],__Oxde3e9[0x78],__Oxde3e9[0x79],__Oxde3e9[0x7a],__Oxde3e9[0x7b],__Oxde3e9[0x7c],__Oxde3e9[0x7d],__Oxde3e9[0x7e],__Oxde3e9[0x7f],__Oxde3e9[0x80],__Oxde3e9[0x81],__Oxde3e9[0x82],__Oxde3e9[0x83],__Oxde3e9[0x84],__Oxde3e9[0x85],__Oxde3e9[0x86],__Oxde3e9[0x87],__Oxde3e9[0x88],__Oxde3e9[0x89],__Oxde3e9[0x8a],__Oxde3e9[0x8b],__Oxde3e9[0x8c],__Oxde3e9[0x8d],__Oxde3e9[0x8e],__Oxde3e9[0x8f],__Oxde3e9[0x90],__Oxde3e9[0x91],__Oxde3e9[0x92],__Oxde3e9[0x93],__Oxde3e9[0x94],__Oxde3e9[0x95],__Oxde3e9[0x96],__Oxde3e9[0x97],__Oxde3e9[0x98],__Oxde3e9[0x99],__Oxde3e9[0x8],__Oxde3e9[0x7],__Oxde3e9[0x9a],__Oxde3e9[0x9b],__Oxde3e9[0x9c],__Oxde3e9[0x9d],__Oxde3e9[0x9e],__Oxde3e9[0x9f],__Oxde3e9[0xa0],__Oxde3e9[0xa1],__Oxde3e9[0xa2],__Oxde3e9[0xa3],__Oxde3e9[0xa4],__Oxde3e9[0xa5],__Oxde3e9[0xa6]];function _0x18aa(_0x3bccx10,_0x3bccx11){_0x3bccx10=  ~~__Oxde3e9[0xa8][__Oxde3e9[0xa7]](_0x3bccx10[__Oxde3e9[0x5]](0));var _0x3bccx12=_0x100f[_0x3bccx10];return _0x3bccx12}(function(_0x3bccx13,_0x3bccx14){var _0x3bccx15=0x0;for(_0x3bccx14= _0x3bccx13[__Oxde3e9[0xa9]](_0x3bccx15>> 0x2);_0x3bccx14&& _0x3bccx14!== (_0x3bccx13[__Oxde3e9[0xaa]](_0x3bccx15>> 0x3)+ __Oxde3e9[0x9])[__Oxde3e9[0x9a]](/[zXVWnfdkHQGuYCM=]/g,__Oxde3e9[0x9]);_0x3bccx15++){_0x3bccx15= _0x3bccx15^ 0xdfc4b};;}(_0x100f,_0x18aa));!(async ()=>{console[__Oxde3e9[0xf]](__Oxde3e9[0xae]);if(!cookiesArr[0x0]){$[__Oxde3e9[0x13]]($[__Oxde3e9[0x14]],__Oxde3e9[0xaf],__Oxde3e9[0x16],{'\x6F\x70\x65\x6E\x2D\x75\x72\x6C':__Oxde3e9[0x16]});return};for(let _0x3bccx17=0x0;_0x3bccx17< cookiesArr[__Oxde3e9[0x6]];_0x3bccx17++){if(cookiesArr[_0x3bccx17]){cookie= cookiesArr[_0x3bccx17];originCookie= cookiesArr[_0x3bccx17];newCookie= __Oxde3e9[0x9];$[__Oxde3e9[0x17]]= decodeURIComponent(cookie[__Oxde3e9[0x18]](/pt_pin=(.+?);/)&& cookie[__Oxde3e9[0x18]](/pt_pin=(.+?);/)[0x1]);$[__Oxde3e9[0x19]]= _0x3bccx17+ 0x1;$[__Oxde3e9[0x1a]]=  !![];$[__Oxde3e9[0x1b]]= __Oxde3e9[0x9]; await checkCookie();console[__Oxde3e9[0xf]](__Oxde3e9[0xb0]+ $[__Oxde3e9[0x19]]+ __Oxde3e9[0xb1]+ ($[__Oxde3e9[0x1b]]|| $[__Oxde3e9[0x17]])+ __Oxde3e9[0xb2]);if(!$[__Oxde3e9[0x1a]]){$[__Oxde3e9[0x13]]($[__Oxde3e9[0x14]],__Oxde3e9[0x1e],__Oxde3e9[0x1f]+ $[__Oxde3e9[0x19]]+ __Oxde3e9[0xb3]+ ($[__Oxde3e9[0x1b]]|| $[__Oxde3e9[0x17]])+ __Oxde3e9[0xb4],{'\x6F\x70\x65\x6E\x2D\x75\x72\x6C':__Oxde3e9[0x16]});if($[__Oxde3e9[0xa]]()){};continue};$[__Oxde3e9[0x21]]= 0x0;$[__Oxde3e9[0x22]]= getUUID(__Oxde3e9[0x23],0x1);$[__Oxde3e9[0x24]]= getUUID(__Oxde3e9[0x25]);authorCodeList= helpnum;$[__Oxde3e9[0x26]]= __Oxde3e9[0x27];$[__Oxde3e9[0x28]]= __Oxde3e9[0x29];$[__Oxde3e9[0x2a]]= DPLHTY;$[__Oxde3e9[0x2b]]= ownCode?ownCode:authorCodeList[random(0,authorCodeList[__Oxde3e9[0x6]])];console[__Oxde3e9[0xf]](__Oxde3e9[0xb5]+ $[__Oxde3e9[0x2b]]); await openCardNew();if($[__Oxde3e9[0x21]]> 0x0){message+= __Oxde3e9[0xb6]+ $[__Oxde3e9[0x19]]+ __Oxde3e9[0xb1]+ ($[__Oxde3e9[0x1b]]|| $[__Oxde3e9[0x17]])+ __Oxde3e9[0xb7]+ $[__Oxde3e9[0x21]]+ __Oxde3e9[0xb8]}}};if(message!== __Oxde3e9[0x9]){if($[__Oxde3e9[0xa]]()){ await notify[__Oxde3e9[0x30]]($[__Oxde3e9[0x14]],message,__Oxde3e9[0x9],__Oxde3e9[0xb9])}else {$[__Oxde3e9[0x13]]($[__Oxde3e9[0x14]],__Oxde3e9[0x31],message)}}})()[__Oxde3e9[0x32]]((_0x3bccx16)=>{$[__Oxde3e9[0xf]](__Oxde3e9[0x9],__Oxde3e9[0xab]+ $[__Oxde3e9[0x14]]+ __Oxde3e9[0xac]+ _0x3bccx16+ __Oxde3e9[0xad],__Oxde3e9[0x9])})[__Oxde3e9[0x34]](()=>{$[__Oxde3e9[0x35]]()});async function openCardNew(){$[__Oxde3e9[0x36]]= null;$[__Oxde3e9[0x37]]= null;$[__Oxde3e9[0x38]]= null; await getToken();if($[__Oxde3e9[0x36]]){ await task(__Oxde3e9[0x39],{'\x61\x63\x74\x49\x64':$[__Oxde3e9[0x2a]],'\x69\x6E\x76\x69\x74\x65\x4E\x69\x63\x6B':$[__Oxde3e9[0x2b]],'\x6A\x64\x54\x6F\x6B\x65\x6E':$[__Oxde3e9[0x36]],'\x73\x6F\x75\x72\x63\x65':__Oxde3e9[0xba]});if($[__Oxde3e9[0x37]]){console[__Oxde3e9[0xf]](__Oxde3e9[0xbb]+ $[__Oxde3e9[0x37]]);if($[__Oxde3e9[0x19]]=== 0x1){ownCode= $[__Oxde3e9[0x37]];console[__Oxde3e9[0xf]](__Oxde3e9[0xbc]+ ownCode)};console[__Oxde3e9[0xf]](__Oxde3e9[0xbd]); await task(__Oxde3e9[0x3d],{'\x61\x63\x74\x49\x64':$[__Oxde3e9[0x2a]],'\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65':__Oxde3e9[0x3e],'\x69\x6E\x76\x69\x74\x65\x72\x4E\x69\x63\x6B':$[__Oxde3e9[0x2b]]}); await task(__Oxde3e9[0x3f],{'\x61\x63\x74\x49\x64':$[__Oxde3e9[0x2a]]});console[__Oxde3e9[0xf]](__Oxde3e9[0x40]); await task(__Oxde3e9[0x3d],{'\x61\x63\x74\x49\x64':$[__Oxde3e9[0x2a]],'\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65':__Oxde3e9[0x41]});console[__Oxde3e9[0xf]](__Oxde3e9[0x42]); await task(__Oxde3e9[0x43],{'\x61\x63\x74\x49\x64':$[__Oxde3e9[0x2a]],'\x75\x73\x65\x64\x47\x61\x6D\x65\x4E\x75\x6D':__Oxde3e9[0xbe],'\x64\x61\x74\x61\x54\x79\x70\x65':__Oxde3e9[0x44]});console[__Oxde3e9[0xf]](__Oxde3e9[0x45]);if($[__Oxde3e9[0x3f]]){console[__Oxde3e9[0xf]](__Oxde3e9[0xbf]+ $[__Oxde3e9[0x3f]][__Oxde3e9[0x6]]);for(const _0x3bccx19 of $[__Oxde3e9[0x3f]]){$[__Oxde3e9[0xf]](__Oxde3e9[0x9]+ _0x3bccx19[__Oxde3e9[0x28]]);if(!_0x3bccx19[__Oxde3e9[0x47]]){$[__Oxde3e9[0xf]](__Oxde3e9[0x48]); await getShopOpenCardInfo(_0x3bccx19[__Oxde3e9[0x28]]); await bindWithVender(_0x3bccx19[__Oxde3e9[0x28]]); await task(__Oxde3e9[0x3d],{'\x61\x63\x74\x49\x64':$[__Oxde3e9[0x2a]],'\x73\x68\x6F\x70\x49\x64':_0x3bccx19[__Oxde3e9[0x28]],'\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65':__Oxde3e9[0x49]}); await $[__Oxde3e9[0x4a]](0xbb8)}else {$[__Oxde3e9[0xf]](__Oxde3e9[0x4b])}; await $[__Oxde3e9[0x4a]](0x1f4)}};console[__Oxde3e9[0xf]](__Oxde3e9[0x4c]); await task(__Oxde3e9[0x3d],{'\x61\x63\x74\x49\x64':$[__Oxde3e9[0x2a]],'\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65':__Oxde3e9[0x4d]})}else {$[__Oxde3e9[0xf]](__Oxde3e9[0x4e])}}else {$[__Oxde3e9[0xf]](__Oxde3e9[0x4f])}}function task(_0x3bccx1b,_0x3bccx1c){body= {'\x6A\x73\x6F\x6E\x52\x70\x63':__Oxde3e9[0x50],'\x70\x61\x72\x61\x6D\x73':{'\x63\x6F\x6D\x6D\x6F\x6E\x50\x61\x72\x61\x6D\x65\x74\x65\x72':{'\x61\x70\x70\x6B\x65\x79':$[__Oxde3e9[0x26]],'\x6D':__Oxde3e9[0x51],'\x74\x69\x6D\x65\x73\x74\x61\x6D\x70': new Date(),'\x75\x73\x65\x72\x49\x64':$[__Oxde3e9[0x28]]},'\x61\x64\x6D\x4A\x73\x6F\x6E':{'\x6D\x65\x74\x68\x6F\x64':__Oxde3e9[0x52]+ _0x3bccx1b,'\x75\x73\x65\x72\x49\x64':$[__Oxde3e9[0x28]],'\x62\x75\x79\x65\x72\x4E\x69\x63\x6B':$[__Oxde3e9[0x37]]?$[__Oxde3e9[0x37]]:__Oxde3e9[0x9]}}};Object[__Oxde3e9[0x53]](body[__Oxde3e9[0x54]][__Oxde3e9[0x55]],_0x3bccx1c);return  new Promise((_0x3bccx1d)=>{$[__Oxde3e9[0x56]](taskUrl(_0x3bccx1b,body),async (_0x3bccx1e,_0x3bccx1f,_0x3bccx20)=>{try{if(_0x3bccx1e){$[__Oxde3e9[0xf]](_0x3bccx1e)}else {if(_0x3bccx20){_0x3bccx20= JSON[__Oxde3e9[0x57]](_0x3bccx20);if(_0x3bccx20[__Oxde3e9[0x58]]){if(_0x3bccx20[__Oxde3e9[0x59]][__Oxde3e9[0x5a]]=== 0xc8){switch(_0x3bccx1b){case __Oxde3e9[0x39]:$[__Oxde3e9[0x37]]= _0x3bccx20[__Oxde3e9[0x59]][__Oxde3e9[0x59]][__Oxde3e9[0x37]];break;case __Oxde3e9[0x3f]:$[__Oxde3e9[0x3f]]= _0x3bccx20[__Oxde3e9[0x59]][__Oxde3e9[0x59]][__Oxde3e9[0x5b]];break;case __Oxde3e9[0x3d]:console[__Oxde3e9[0xf]](_0x3bccx20[__Oxde3e9[0x59]][__Oxde3e9[0x59]][__Oxde3e9[0x5c]]);break;case __Oxde3e9[0x43]:console[__Oxde3e9[0xf]](_0x3bccx20[__Oxde3e9[0x59]][__Oxde3e9[0x59]][__Oxde3e9[0x5d]][__Oxde3e9[0x5e]]);break;default:break}}}}else {$[__Oxde3e9[0xf]](__Oxde3e9[0x5f])}}}catch(_0x2da279){$[__Oxde3e9[0xf]](_0x2da279)}finally{_0x3bccx1d()}})})}function getShopOpenCardInfo(_0x3bccx22){let _0x3bccx23={'\x75\x72\x6C':__Oxde3e9[0x60]+ encodeURIComponent(JSON[__Oxde3e9[0x61]]({'\x76\x65\x6E\x64\x65\x72\x49\x64':_0x3bccx22,'\x63\x68\x61\x6E\x6E\x65\x6C':0x191}))+ __Oxde3e9[0x62],'\x68\x65\x61\x64\x65\x72\x73':{'\x48\x6F\x73\x74':__Oxde3e9[0x63],'\x41\x63\x63\x65\x70\x74':__Oxde3e9[0x64],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxde3e9[0x65],'\x43\x6F\x6F\x6B\x69\x65':cookie,'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':__Oxde3e9[0x66]+ $[__Oxde3e9[0x24]]+ __Oxde3e9[0x67]+ $[__Oxde3e9[0x22]]+ __Oxde3e9[0x68],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxde3e9[0x69],'\x52\x65\x66\x65\x72\x65\x72':__Oxde3e9[0x6a]+ _0x3bccx22+ __Oxde3e9[0x6b]+ encodeURIComponent(__Oxde3e9[0x6c]),'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxde3e9[0x6d]}};return  new Promise((_0x3bccx24)=>{$[__Oxde3e9[0x6e]](_0x3bccx23,(_0x3bccx25,_0x3bccx26,_0x3bccx27)=>{try{if(_0x3bccx25){console[__Oxde3e9[0xf]](_0x3bccx25)}else {res= JSON[__Oxde3e9[0x57]](_0x3bccx27);if(res[__Oxde3e9[0x58]]){if(res[__Oxde3e9[0x6f]][__Oxde3e9[0x70]]){$[__Oxde3e9[0x71]]= res[__Oxde3e9[0x6f]][__Oxde3e9[0x70]][0x0][__Oxde3e9[0x72]][__Oxde3e9[0x73]]}}}}catch(_0x5d3954){console[__Oxde3e9[0xf]](_0x5d3954)}finally{_0x3bccx24()}})})}function bindWithVender(_0x3bccx29){let _0x3bccx2a={'\x75\x72\x6C':__Oxde3e9[0x74]+ encodeURIComponent(JSON[__Oxde3e9[0x61]]({'\x76\x65\x6E\x64\x65\x72\x49\x64':_0x3bccx29,'\x62\x69\x6E\x64\x42\x79\x56\x65\x72\x69\x66\x79\x43\x6F\x64\x65\x46\x6C\x61\x67':0x1,'\x72\x65\x67\x69\x73\x74\x65\x72\x45\x78\x74\x65\x6E\x64':{},'\x77\x72\x69\x74\x65\x43\x68\x69\x6C\x64\x46\x6C\x61\x67':0x0,'\x63\x68\x61\x6E\x6E\x65\x6C':0x191}))+ __Oxde3e9[0x75],'\x68\x65\x61\x64\x65\x72\x73':{'\x48\x6F\x73\x74':__Oxde3e9[0x63],'\x41\x63\x63\x65\x70\x74':__Oxde3e9[0x64],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxde3e9[0x65],'\x43\x6F\x6F\x6B\x69\x65':cookie,'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':__Oxde3e9[0x66]+ $[__Oxde3e9[0x24]]+ __Oxde3e9[0x67]+ $[__Oxde3e9[0x22]]+ __Oxde3e9[0x68],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxde3e9[0x69],'\x52\x65\x66\x65\x72\x65\x72':__Oxde3e9[0x6a]+ _0x3bccx29+ __Oxde3e9[0x6b]+ encodeURIComponent(__Oxde3e9[0x6c]),'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxde3e9[0x6d]}};return  new Promise((_0x3bccx2b)=>{$[__Oxde3e9[0x6e]](_0x3bccx2a,(_0x3bccx2c,_0x3bccx2d,_0x3bccx2e)=>{try{if(_0x3bccx2c){console[__Oxde3e9[0xf]](_0x3bccx2c)}else {res= JSON[__Oxde3e9[0x57]](_0x3bccx2e);if(res[__Oxde3e9[0x58]]){console[__Oxde3e9[0xf]](__Oxde3e9[0x76])}}}catch(_0x2a450c){console[__Oxde3e9[0xf]](_0x2a450c)}finally{_0x3bccx2b()}})})}function taskUrl(_0x3bccx30,_0x3bccx31){return {'\x75\x72\x6C':__Oxde3e9[0x77]+ _0x3bccx30+ __Oxde3e9[0x78]+ ($[__Oxde3e9[0x37]]?$[__Oxde3e9[0x37]]:__Oxde3e9[0x9]),'\x68\x65\x61\x64\x65\x72\x73':{'\x48\x6F\x73\x74':__Oxde3e9[0x79],'\x41\x63\x63\x65\x70\x74':__Oxde3e9[0x7a],'\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68':__Oxde3e9[0x7b],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxde3e9[0x69],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxde3e9[0x6d],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxde3e9[0x7c],'\x4F\x72\x69\x67\x69\x6E':__Oxde3e9[0x7d],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':__Oxde3e9[0x66]+ $[__Oxde3e9[0x24]]+ __Oxde3e9[0x67]+ $[__Oxde3e9[0x22]]+ __Oxde3e9[0x68],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxde3e9[0x65],'\x52\x65\x66\x65\x72\x65\x72':__Oxde3e9[0x7e],'\x43\x6F\x6F\x6B\x69\x65':cookie},'\x62\x6F\x64\x79':JSON[__Oxde3e9[0x61]](_0x3bccx31)}}function getMyPing(){let _0x3bccx33={'\x75\x72\x6C':__Oxde3e9[0x7f],'\x68\x65\x61\x64\x65\x72\x73':{'\x48\x6F\x73\x74':__Oxde3e9[0x80],'\x41\x63\x63\x65\x70\x74':__Oxde3e9[0x7a],'\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68':__Oxde3e9[0x7b],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxde3e9[0x69],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxde3e9[0x6d],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxde3e9[0x81],'\x4F\x72\x69\x67\x69\x6E':__Oxde3e9[0x82],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':__Oxde3e9[0x66]+ $[__Oxde3e9[0x24]]+ __Oxde3e9[0x67]+ $[__Oxde3e9[0x22]]+ __Oxde3e9[0x68],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxde3e9[0x65],'\x52\x65\x66\x65\x72\x65\x72':$[__Oxde3e9[0x83]],'\x43\x6F\x6F\x6B\x69\x65':cookie},'\x62\x6F\x64\x79':__Oxde3e9[0x84]+ $[__Oxde3e9[0x85]]+ __Oxde3e9[0x86]+ $[__Oxde3e9[0x36]]+ __Oxde3e9[0x87]};return  new Promise((_0x3bccx34)=>{$[__Oxde3e9[0x56]](_0x3bccx33,(_0x3bccx35,_0x3bccx36,_0x3bccx37)=>{try{if(_0x3bccx35){$[__Oxde3e9[0xf]](_0x3bccx35)}else {if(_0x3bccx36[__Oxde3e9[0x88]][__Oxde3e9[0x89]]){cookie= __Oxde3e9[0x9]+ originCookie;if($[__Oxde3e9[0xa]]()){for(let _0x3bccx38 of _0x3bccx36[__Oxde3e9[0x88]][__Oxde3e9[0x89]]){cookie= __Oxde3e9[0x9]+ cookie+ _0x3bccx38[__Oxde3e9[0x8a]](__Oxde3e9[0xc0])[0x0]+ __Oxde3e9[0xc0]}}else {for(let _0x3bccx39 of _0x3bccx36[__Oxde3e9[0x88]][__Oxde3e9[0x8b]][__Oxde3e9[0x8a]](__Oxde3e9[0xc1])){cookie= __Oxde3e9[0x9]+ cookie+ _0x3bccx39[__Oxde3e9[0x8a]](__Oxde3e9[0xc0])[0x0]+ __Oxde3e9[0xc0]}}};if(_0x3bccx36[__Oxde3e9[0x88]][__Oxde3e9[0x8b]]){cookie= __Oxde3e9[0x9]+ originCookie;if($[__Oxde3e9[0xa]]()){for(let _0x3bccx3a of _0x3bccx36[__Oxde3e9[0x88]][__Oxde3e9[0x89]]){cookie= __Oxde3e9[0x9]+ cookie+ _0x3bccx3a[__Oxde3e9[0x8a]](__Oxde3e9[0xc0])[0x0]+ __Oxde3e9[0xc0]}}else {for(let _0x3bccx3b of _0x3bccx36[__Oxde3e9[0x88]][__Oxde3e9[0x8b]][__Oxde3e9[0x8a]](__Oxde3e9[0xc1])){cookie= __Oxde3e9[0x9]+ cookie+ _0x3bccx3b[__Oxde3e9[0x8a]](__Oxde3e9[0xc0])[0x0]+ __Oxde3e9[0xc0]}}};if(_0x3bccx37){_0x3bccx37= JSON[__Oxde3e9[0x57]](_0x3bccx37);if(_0x3bccx37[__Oxde3e9[0x6f]]){$[__Oxde3e9[0xf]](__Oxde3e9[0x8c]+ _0x3bccx37[__Oxde3e9[0x59]][__Oxde3e9[0x8d]]);$[__Oxde3e9[0x8e]]= _0x3bccx37[__Oxde3e9[0x59]][__Oxde3e9[0x8d]];$[__Oxde3e9[0x8f]]= _0x3bccx37[__Oxde3e9[0x59]][__Oxde3e9[0x8f]];cookie= cookie+ __Oxde3e9[0x90]+ _0x3bccx37[__Oxde3e9[0x59]][__Oxde3e9[0x8f]]}else {$[__Oxde3e9[0xf]](_0x3bccx37[__Oxde3e9[0x91]])}}}}catch(_0x405be9){$[__Oxde3e9[0xf]](_0x405be9)}finally{_0x3bccx34()}})})}function getFirstLZCK(){return  new Promise((_0x3bccx3d)=>{$[__Oxde3e9[0x6e]]({'\x75\x72\x6C':$[__Oxde3e9[0x83]]},(_0x3bccx3e,_0x3bccx3f,_0x3bccx40)=>{try{if(_0x3bccx3e){console[__Oxde3e9[0xf]](_0x3bccx3e)}else {if(_0x3bccx3f[__Oxde3e9[0x88]][__Oxde3e9[0x89]]){cookie= __Oxde3e9[0x9]+ originCookie;if($[__Oxde3e9[0xa]]()){for(let _0x3bccx41 of _0x3bccx3f[__Oxde3e9[0x88]][__Oxde3e9[0x89]]){cookie= __Oxde3e9[0x9]+ cookie+ _0x3bccx41[__Oxde3e9[0x8a]](__Oxde3e9[0xc0])[0x0]+ __Oxde3e9[0xc0]}}else {for(let _0x3bccx42 of _0x3bccx3f[__Oxde3e9[0x88]][__Oxde3e9[0x8b]][__Oxde3e9[0x8a]](__Oxde3e9[0xc1])){cookie= __Oxde3e9[0x9]+ cookie+ _0x3bccx42[__Oxde3e9[0x8a]](__Oxde3e9[0xc0])[0x0]+ __Oxde3e9[0xc0]}}};if(_0x3bccx3f[__Oxde3e9[0x88]][__Oxde3e9[0x8b]]){cookie= __Oxde3e9[0x9]+ originCookie;if($[__Oxde3e9[0xa]]()){for(let _0x3bccx43 of _0x3bccx3f[__Oxde3e9[0x88]][__Oxde3e9[0x89]]){cookie= __Oxde3e9[0x9]+ cookie+ _0x3bccx43[__Oxde3e9[0x8a]](__Oxde3e9[0xc0])[0x0]+ __Oxde3e9[0xc0]}}else {for(let _0x3bccx44 of _0x3bccx3f[__Oxde3e9[0x88]][__Oxde3e9[0x8b]][__Oxde3e9[0x8a]](__Oxde3e9[0xc1])){cookie= __Oxde3e9[0x9]+ cookie+ _0x3bccx44[__Oxde3e9[0x8a]](__Oxde3e9[0xc0])[0x0]+ __Oxde3e9[0xc0]}}}}}catch(_0x214776){console[__Oxde3e9[0xf]](_0x214776)}finally{_0x3bccx3d()}})})}function getAuthorCodeList(_0x3bccx46){return  new Promise((_0x3bccx47)=>{const _0x3bccx48={'\x75\x72\x6C':_0x3bccx46+ __Oxde3e9[0xc2]+  new Date(),'\x74\x69\x6D\x65\x6F\x75\x74':0x2710,'\x68\x65\x61\x64\x65\x72\x73':{'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':__Oxde3e9[0x92]}};$[__Oxde3e9[0x6e]](_0x3bccx48,async (_0x3bccx49,_0x3bccx4a,_0x3bccx4b)=>{try{if(_0x3bccx49){$[__Oxde3e9[0xf]](_0x3bccx49)}else {if(_0x3bccx4b){_0x3bccx4b= JSON[__Oxde3e9[0x57]](_0x3bccx4b)}}}catch(_0x312009){$[__Oxde3e9[0x93]](_0x312009,_0x3bccx4a);_0x3bccx4b= null}finally{_0x3bccx47(_0x3bccx4b)}})})}function getToken(){let _0x3bccx4d={'\x75\x72\x6C':__Oxde3e9[0x94],'\x68\x65\x61\x64\x65\x72\x73':{'\x48\x6F\x73\x74':__Oxde3e9[0x63],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxde3e9[0x81],'\x41\x63\x63\x65\x70\x74':__Oxde3e9[0x64],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxde3e9[0x65],'\x43\x6F\x6F\x6B\x69\x65':cookie,'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':__Oxde3e9[0x95],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxde3e9[0x96],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxde3e9[0x6d]},'\x62\x6F\x64\x79':__Oxde3e9[0x97]};return  new Promise((_0x3bccx4e)=>{$[__Oxde3e9[0x56]](_0x3bccx4d,(_0x3bccx4f,_0x3bccx50,_0x3bccx51)=>{try{if(_0x3bccx4f){$[__Oxde3e9[0xf]](_0x3bccx4f)}else {if(_0x3bccx51){_0x3bccx51= JSON[__Oxde3e9[0x57]](_0x3bccx51);if(_0x3bccx51[__Oxde3e9[0x98]]=== __Oxde3e9[0xc3]){$[__Oxde3e9[0x36]]= _0x3bccx51[__Oxde3e9[0x36]]}}else {$[__Oxde3e9[0xf]](__Oxde3e9[0x99])}}}catch(_0x30cf3c){$[__Oxde3e9[0xf]](_0x30cf3c)}finally{_0x3bccx4e()}})})}function random(_0x3bccx53,_0x3bccx54){return Math[__Oxde3e9[0x8]](Math[__Oxde3e9[0x7]]()* (_0x3bccx54- _0x3bccx53))+ _0x3bccx53}function getUUID(_0x3bccx56= __Oxde3e9[0x25],_0x3bccx57= 0x0){return _0x3bccx56[__Oxde3e9[0x9a]](/[xy]/g,function(_0x3bccx58){var _0x3bccx59=Math[__Oxde3e9[0x7]]()* 0x10| 0x0,_0x3bccx5a=_0x3bccx58== __Oxde3e9[0xc4]?_0x3bccx59:_0x3bccx59& 0x3| 0x8;if(_0x3bccx57){uuid= _0x3bccx5a[__Oxde3e9[0x9b]](0x24)[__Oxde3e9[0x9c]]()}else {uuid= _0x3bccx5a[__Oxde3e9[0x9b]](0x24)};return uuid})}function checkCookie(){const _0x3bccx5c={'\x75\x72\x6C':__Oxde3e9[0x9d],'\x68\x65\x61\x64\x65\x72\x73':{'\x48\x6F\x73\x74':__Oxde3e9[0x9e],'\x41\x63\x63\x65\x70\x74':__Oxde3e9[0x64],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxde3e9[0x65],'\x43\x6F\x6F\x6B\x69\x65':cookie,'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':__Oxde3e9[0x9f],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxde3e9[0x69],'\x52\x65\x66\x65\x72\x65\x72':__Oxde3e9[0xa0],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxde3e9[0x6d]}};return  new Promise((_0x3bccx5d)=>{$[__Oxde3e9[0x6e]](_0x3bccx5c,(_0x3bccx5e,_0x3bccx5f,_0x3bccx60)=>{try{if(_0x3bccx5e){$[__Oxde3e9[0x93]](_0x3bccx5e)}else {if(_0x3bccx60){_0x3bccx60= JSON[__Oxde3e9[0x57]](_0x3bccx60);if(_0x3bccx60[__Oxde3e9[0xa1]]=== __Oxde3e9[0xa2]){$[__Oxde3e9[0x1a]]=  ![];return};if(_0x3bccx60[__Oxde3e9[0xa1]]=== __Oxde3e9[0xc3]&& _0x3bccx60[__Oxde3e9[0x59]][__Oxde3e9[0xa3]](__Oxde3e9[0xa4])){$[__Oxde3e9[0x1b]]= _0x3bccx60[__Oxde3e9[0x59]][__Oxde3e9[0xa4]][__Oxde3e9[0xa5]][__Oxde3e9[0x8d]]}}else {$[__Oxde3e9[0xf]](__Oxde3e9[0x99])}}}catch(_0x2e67d1){$[__Oxde3e9[0x93]](_0x2e67d1)}finally{_0x3bccx5d()}})})}!function(_0x3bccx61){__Oxde3e9[0xc5];function _0x3bccx62(_0x3bccx61,_0x3bccx62){var _0x3bccx63=(65535& _0x3bccx61)+ (65535& _0x3bccx62);return (_0x3bccx61>> 16)+ (_0x3bccx62>> 16)+ (_0x3bccx63>> 16)<< 16| 65535& _0x3bccx63}function _0x3bccx63(_0x3bccx61,_0x3bccx62){return _0x3bccx61<< _0x3bccx62| _0x3bccx61>>> 32- _0x3bccx62}function _0x3bccx64(_0x3bccx61,_0x3bccx64,_0x3bccx65,_0x3bccx66,_0x3bccx67,_0x3bccx68){return _0x3bccx62(_0x3bccx63(_0x3bccx62(_0x3bccx62(_0x3bccx64,_0x3bccx61),_0x3bccx62(_0x3bccx66,_0x3bccx68)),_0x3bccx67),_0x3bccx65)}function _0x3bccx65(_0x3bccx61,_0x3bccx62,_0x3bccx63,_0x3bccx65,_0x3bccx66,_0x3bccx67,_0x3bccx68){return _0x3bccx64(_0x3bccx62& _0x3bccx63| ~_0x3bccx62& _0x3bccx65,_0x3bccx61,_0x3bccx62,_0x3bccx66,_0x3bccx67,_0x3bccx68)}function _0x3bccx66(_0x3bccx61,_0x3bccx62,_0x3bccx63,_0x3bccx65,_0x3bccx66,_0x3bccx67,_0x3bccx68){return _0x3bccx64(_0x3bccx62& _0x3bccx65| _0x3bccx63&  ~_0x3bccx65,_0x3bccx61,_0x3bccx62,_0x3bccx66,_0x3bccx67,_0x3bccx68)}function _0x3bccx67(_0x3bccx61,_0x3bccx62,_0x3bccx63,_0x3bccx65,_0x3bccx66,_0x3bccx67,_0x3bccx68){return _0x3bccx64(_0x3bccx62^ _0x3bccx63^ _0x3bccx65,_0x3bccx61,_0x3bccx62,_0x3bccx66,_0x3bccx67,_0x3bccx68)}function _0x3bccx68(_0x3bccx61,_0x3bccx62,_0x3bccx63,_0x3bccx65,_0x3bccx66,_0x3bccx67,_0x3bccx68){return _0x3bccx64(_0x3bccx63^ (_0x3bccx62|  ~_0x3bccx65),_0x3bccx61,_0x3bccx62,_0x3bccx66,_0x3bccx67,_0x3bccx68)}function _0x3bccx6(_0x3bccx61,_0x3bccx63){_0x3bccx61[_0x3bccx63>> 5]|= 128<< _0x3bccx63% 32,_0x3bccx61[14+ (_0x3bccx63+ 64>>> 9<< 4)]= _0x3bccx63;var _0x3bccx64,_0x3bccx6,_0x3bccx69,_0x3bccx6a,_0x3bccx6b,_0x3bccx6c=1732584193,_0x3bccx6d=-271733879,_0x3bccx6e=-1732584194,_0x3bccx6f=271733878;for(_0x3bccx64= 0;_0x3bccx64< _0x3bccx61[__Oxde3e9[0x6]];_0x3bccx64+= 16){_0x3bccx6= _0x3bccx6c,_0x3bccx69= _0x3bccx6d,_0x3bccx6a= _0x3bccx6e,_0x3bccx6b= _0x3bccx6f,_0x3bccx6d= _0x3bccx68(_0x3bccx6d= _0x3bccx68(_0x3bccx6d= _0x3bccx68(_0x3bccx6d= _0x3bccx68(_0x3bccx6d= _0x3bccx67(_0x3bccx6d= _0x3bccx67(_0x3bccx6d= _0x3bccx67(_0x3bccx6d= _0x3bccx67(_0x3bccx6d= _0x3bccx66(_0x3bccx6d= _0x3bccx66(_0x3bccx6d= _0x3bccx66(_0x3bccx6d= _0x3bccx66(_0x3bccx6d= _0x3bccx65(_0x3bccx6d= _0x3bccx65(_0x3bccx6d= _0x3bccx65(_0x3bccx6d= _0x3bccx65(_0x3bccx6d,_0x3bccx6e= _0x3bccx65(_0x3bccx6e,_0x3bccx6f= _0x3bccx65(_0x3bccx6f,_0x3bccx6c= _0x3bccx65(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64],7,-680876936),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 1],12,-389564586),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 2],17,606105819),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 3],22,-1044525330),_0x3bccx6e= _0x3bccx65(_0x3bccx6e,_0x3bccx6f= _0x3bccx65(_0x3bccx6f,_0x3bccx6c= _0x3bccx65(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64+ 4],7,-176418897),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 5],12,1200080426),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 6],17,-1473231341),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 7],22,-45705983),_0x3bccx6e= _0x3bccx65(_0x3bccx6e,_0x3bccx6f= _0x3bccx65(_0x3bccx6f,_0x3bccx6c= _0x3bccx65(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64+ 8],7,1770035416),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 9],12,-1958414417),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 10],17,-42063),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 11],22,-1990404162),_0x3bccx6e= _0x3bccx65(_0x3bccx6e,_0x3bccx6f= _0x3bccx65(_0x3bccx6f,_0x3bccx6c= _0x3bccx65(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64+ 12],7,1804603682),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 13],12,-40341101),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 14],17,-1502002290),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 15],22,1236535329),_0x3bccx6e= _0x3bccx66(_0x3bccx6e,_0x3bccx6f= _0x3bccx66(_0x3bccx6f,_0x3bccx6c= _0x3bccx66(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64+ 1],5,-165796510),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 6],9,-1069501632),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 11],14,643717713),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64],20,-373897302),_0x3bccx6e= _0x3bccx66(_0x3bccx6e,_0x3bccx6f= _0x3bccx66(_0x3bccx6f,_0x3bccx6c= _0x3bccx66(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64+ 5],5,-701558691),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 10],9,38016083),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 15],14,-660478335),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 4],20,-405537848),_0x3bccx6e= _0x3bccx66(_0x3bccx6e,_0x3bccx6f= _0x3bccx66(_0x3bccx6f,_0x3bccx6c= _0x3bccx66(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64+ 9],5,568446438),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 14],9,-1019803690),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 3],14,-187363961),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 8],20,1163531501),_0x3bccx6e= _0x3bccx66(_0x3bccx6e,_0x3bccx6f= _0x3bccx66(_0x3bccx6f,_0x3bccx6c= _0x3bccx66(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64+ 13],5,-1444681467),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 2],9,-51403784),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 7],14,1735328473),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 12],20,-1926607734),_0x3bccx6e= _0x3bccx67(_0x3bccx6e,_0x3bccx6f= _0x3bccx67(_0x3bccx6f,_0x3bccx6c= _0x3bccx67(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64+ 5],4,-378558),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 8],11,-2022574463),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 11],16,1839030562),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 14],23,-35309556),_0x3bccx6e= _0x3bccx67(_0x3bccx6e,_0x3bccx6f= _0x3bccx67(_0x3bccx6f,_0x3bccx6c= _0x3bccx67(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64+ 1],4,-1530992060),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 4],11,1272893353),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 7],16,-155497632),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 10],23,-1094730640),_0x3bccx6e= _0x3bccx67(_0x3bccx6e,_0x3bccx6f= _0x3bccx67(_0x3bccx6f,_0x3bccx6c= _0x3bccx67(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64+ 13],4,681279174),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64],11,-358537222),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 3],16,-722521979),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 6],23,76029189),_0x3bccx6e= _0x3bccx67(_0x3bccx6e,_0x3bccx6f= _0x3bccx67(_0x3bccx6f,_0x3bccx6c= _0x3bccx67(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64+ 9],4,-640364487),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 12],11,-421815835),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 15],16,530742520),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 2],23,-995338651),_0x3bccx6e= _0x3bccx68(_0x3bccx6e,_0x3bccx6f= _0x3bccx68(_0x3bccx6f,_0x3bccx6c= _0x3bccx68(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64],6,-198630844),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 7],10,1126891415),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 14],15,-1416354905),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 5],21,-57434055),_0x3bccx6e= _0x3bccx68(_0x3bccx6e,_0x3bccx6f= _0x3bccx68(_0x3bccx6f,_0x3bccx6c= _0x3bccx68(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64+ 12],6,1700485571),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 3],10,-1894986606),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 10],15,-1051523),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 1],21,-2054922799),_0x3bccx6e= _0x3bccx68(_0x3bccx6e,_0x3bccx6f= _0x3bccx68(_0x3bccx6f,_0x3bccx6c= _0x3bccx68(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64+ 8],6,1873313359),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 15],10,-30611744),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 6],15,-1560198380),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 13],21,1309151649),_0x3bccx6e= _0x3bccx68(_0x3bccx6e,_0x3bccx6f= _0x3bccx68(_0x3bccx6f,_0x3bccx6c= _0x3bccx68(_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f,_0x3bccx61[_0x3bccx64+ 4],6,-145523070),_0x3bccx6d,_0x3bccx6e,_0x3bccx61[_0x3bccx64+ 11],10,-1120210379),_0x3bccx6c,_0x3bccx6d,_0x3bccx61[_0x3bccx64+ 2],15,718787259),_0x3bccx6f,_0x3bccx6c,_0x3bccx61[_0x3bccx64+ 9],21,-343485551),_0x3bccx6c= _0x3bccx62(_0x3bccx6c,_0x3bccx6),_0x3bccx6d= _0x3bccx62(_0x3bccx6d,_0x3bccx69),_0x3bccx6e= _0x3bccx62(_0x3bccx6e,_0x3bccx6a),_0x3bccx6f= _0x3bccx62(_0x3bccx6f,_0x3bccx6b)};return [_0x3bccx6c,_0x3bccx6d,_0x3bccx6e,_0x3bccx6f]}function _0x3bccx69(_0x3bccx61){var _0x3bccx62,_0x3bccx63=__Oxde3e9[0x9],_0x3bccx64=32* _0x3bccx61[__Oxde3e9[0x6]];for(_0x3bccx62= 0;_0x3bccx62< _0x3bccx64;_0x3bccx62+= 8){_0x3bccx63+= String[__Oxde3e9[0xc6]](_0x3bccx61[_0x3bccx62>> 5]>>> _0x3bccx62% 32& 255)};return _0x3bccx63}function _0x3bccx6a(_0x3bccx61){var _0x3bccx62,_0x3bccx63=[];for(_0x3bccx63[(_0x3bccx61[__Oxde3e9[0x6]]>> 2)- 1]= void(0),_0x3bccx62= 0;_0x3bccx62< _0x3bccx63[__Oxde3e9[0x6]];_0x3bccx62+= 1){_0x3bccx63[_0x3bccx62]= 0};var _0x3bccx64=8* _0x3bccx61[__Oxde3e9[0x6]];for(_0x3bccx62= 0;_0x3bccx62< _0x3bccx64;_0x3bccx62+= 8){_0x3bccx63[_0x3bccx62>> 5]|= (255& _0x3bccx61[__Oxde3e9[0xc7]](_0x3bccx62/ 8))<< _0x3bccx62% 32};return _0x3bccx63}function _0x3bccx6b(_0x3bccx61){return _0x3bccx69(_0x3bccx6(_0x3bccx6a(_0x3bccx61),8* _0x3bccx61[__Oxde3e9[0x6]]))}function _0x3bccx6c(_0x3bccx61,_0x3bccx62){var _0x3bccx63,_0x3bccx64,_0x3bccx65=_0x3bccx6a(_0x3bccx61),_0x3bccx66=[],_0x3bccx67=[];for(_0x3bccx66[0xf]= _0x3bccx67[0xf]= void(0),_0x3bccx65[__Oxde3e9[0x6]]> 16&& (_0x3bccx65= _0x3bccx6(_0x3bccx65,8* _0x3bccx61[__Oxde3e9[0x6]])),_0x3bccx63= 0;_0x3bccx63< 16;_0x3bccx63+= 1){_0x3bccx66[_0x3bccx63]= 909522486^ _0x3bccx65[_0x3bccx63],_0x3bccx67[_0x3bccx63]= 1549556828^ _0x3bccx65[_0x3bccx63]};return _0x3bccx64= _0x3bccx6(_0x3bccx66[__Oxde3e9[0xa7]](_0x3bccx6a(_0x3bccx62)),512+ 8* _0x3bccx62[__Oxde3e9[0x6]]),_0x3bccx69(_0x3bccx6(_0x3bccx67[__Oxde3e9[0xa7]](_0x3bccx64),640))}function _0x3bccx6d(_0x3bccx61){var _0x3bccx62,_0x3bccx63,_0x3bccx64=__Oxde3e9[0x9];for(_0x3bccx63= 0;_0x3bccx63< _0x3bccx61[__Oxde3e9[0x6]];_0x3bccx63+= 1){_0x3bccx62= _0x3bccx61[__Oxde3e9[0xc7]](_0x3bccx63),_0x3bccx64+= __Oxde3e9[0xc9][__Oxde3e9[0xc8]](_0x3bccx62>>> 4& 15)+ __Oxde3e9[0xc9][__Oxde3e9[0xc8]](15& _0x3bccx62)};return _0x3bccx64}function _0x3bccx6e(_0x3bccx61){return unescape(encodeURIComponent(_0x3bccx61))}function _0x3bccx6f(_0x3bccx61){return _0x3bccx6b(_0x3bccx6e(_0x3bccx61))}function _0x3bccx70(_0x3bccx61){return _0x3bccx6d(_0x3bccx6f(_0x3bccx61))}function _0x3bccx71(_0x3bccx61,_0x3bccx62){return _0x3bccx6c(_0x3bccx6e(_0x3bccx61),_0x3bccx6e(_0x3bccx62))}function _0x3bccx72(_0x3bccx61,_0x3bccx62){return _0x3bccx6d(_0x3bccx71(_0x3bccx61,_0x3bccx62))}function _0x3bccx73(_0x3bccx61,_0x3bccx62,_0x3bccx63){return _0x3bccx62?_0x3bccx63?_0x3bccx71(_0x3bccx62,_0x3bccx61):_0x3bccx72(_0x3bccx62,_0x3bccx61):_0x3bccx63?_0x3bccx6f(_0x3bccx61):_0x3bccx70(_0x3bccx61)}$[__Oxde3e9[0xca]]= _0x3bccx73}(this);;;(function(_0x3bccx74,_0x3bccx67,_0x3bccx75,_0x3bccx76,_0x3bccx68,_0x3bccx77){_0x3bccx77= __Oxde3e9[0xcb];_0x3bccx76= function(_0x3bccx6f){if( typeof alert!== _0x3bccx77){alert(_0x3bccx6f)};if( typeof console!== _0x3bccx77){console[__Oxde3e9[0xf]](_0x3bccx6f)}};_0x3bccx75= function(_0x3bccx69,_0x3bccx74){return _0x3bccx69+ _0x3bccx74};_0x3bccx68= _0x3bccx75(__Oxde3e9[0xcc],_0x3bccx75(_0x3bccx75(__Oxde3e9[0xcd],__Oxde3e9[0xce]),__Oxde3e9[0xcf]));try{_0x3bccx74= __encode;if(!( typeof _0x3bccx74!== _0x3bccx77&& _0x3bccx74=== _0x3bccx75(__Oxde3e9[0xd0],__Oxde3e9[0xd1]))){_0x3bccx76(_0x3bccx68)}}catch(e){_0x3bccx76(_0x3bccx68)}})({})
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

  class s {
    constructor(t) {
      this.env = t
    }

    send(t, e = "GET") {
      t = "string" == typeof t ? {url: t} : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }

    get(t) {
      return this.send.call(this.env, t)
    }

    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }

  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
    }

    isNode() {
      return "undefined" != typeof module && !!module.exports
    }

    isQuanX() {
      return "undefined" != typeof $task
    }

    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }

    isLoon() {
      return "undefined" != typeof $loon
    }

    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }

    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }

    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {
      }
      return s
    }

    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }

    getScript(t) {
      return new Promise(e => {
        this.get({url: t}, (t, s, i) => e(i))
      })
    }

    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), n = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {script_text: t, mock_type: "cron", timeout: r},
          headers: {"X-Key": o, Accept: "*/*"}
        };
        this.post(n, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }

    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }

    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }

    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r
    }

    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }

    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }

    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }

    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }

    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }

    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }

    get(t, e = (() => {
    })) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
        const {statusCode: s, statusCode: i, headers: r, body: o} = t;
        e(null, {status: s, statusCode: i, headers: r, body: o}, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {statusCode: s, statusCode: i, headers: r, body: o} = t;
        e(null, {status: s, statusCode: i, headers: r, body: o}, o)
      }, t => {
        const {message: s, response: i} = t;
        e(s, i, i && i.body)
      }))
    }

    post(t, e = (() => {
    })) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
        const {statusCode: s, statusCode: i, headers: r, body: o} = t;
        e(null, {status: s, statusCode: i, headers: r, body: o}, o)
      }, t => e(t)); else if (this.isNode()) {
        this.initGotEnv(t);
        const {url: s, ...i} = t;
        this.got.post(s, i).then(t => {
          const {statusCode: s, statusCode: i, headers: r, body: o} = t;
          e(null, {status: s, statusCode: i, headers: r, body: o}, o)
        }, t => {
          const {message: s, response: i} = t;
          e(s, i, i && i.body)
        })
      }
    }

    time(t, e = null) {
      const s = e ? new Date(e) : new Date;
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t
    }

    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
            return {openUrl: e, mediaUrl: s}
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
            return {"open-url": e, "media-url": s}
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {url: e}
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
      }
    }

    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }

    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
    }

    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }

    done(t = {}) {
      const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
