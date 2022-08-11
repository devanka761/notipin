const Notipin={Confirm(options){options=Object.assign({},{msg:'',yes:'OK',no:'CANCEL',type:'NORMAL',mode:'LIGHT',onYes:()=>{},onNo:()=>{}},options);const html=`
<div class="Notipin">
    <div class="box">
        <div class="symbol">
        ⚠️
        </div>
        <div class="msg">${options.msg }</div>
        <div class="buttons">
            <button class="btn confirm no">${options.no }</button>
            <button class="btn confirm yes">${options.yes }</button>
        </div>
    </div>
</div>`;
const template=document.createElement('template');template.innerHTML=html;const element=template.content.querySelector('.Notipin');const btnIya=template.content.querySelector('.box .buttons .yes');const btnTidak=template.content.querySelector('.box .buttons .no');const tipe=options.type.toLowerCase();const mode=options.mode.toLowerCase();if(mode=="dark"){element.classList.add("dark")}if(tipe=="danger"||tipe=="red"){element.classList.add("danger")}else if(tipe=="info"||tipe=="green"){element.classList.add("info")}else if(tipe=="blue"){element.classList.add("blue")}element.addEventListener('click',e=>{if(e.target===element){options.onNo();this.end(element)}});btnIya.addEventListener('click',()=>{options.onYes();this.end(element)});btnTidak.addEventListener('click',()=>{options.onNo();this.end(element)});try{document.querySelector(".Notipin").remove()}catch{};document.body.appendChild(template.content)},Alert(options){options=Object.assign({},{msg:'',yes:'OK',type:'NORMAL',mode:'LIGHT',onYes:()=>{}},options);const html=`
<div class="Notipin">
    <div class="box">
        <div class="symbol">
        ⚠️
        </div>
        <div class="msg">${options.msg }</div>
        <div class="buttons">
            <button class="btn alert yes">${options.yes }</button>
        </div>
    </div>
</div>`;
const template=document.createElement('template');template.innerHTML=html;const element=template.content.querySelector('.Notipin');const btnIya=template.content.querySelector('.box .buttons .yes');const tipe=options.type.toLowerCase();const mode=options.mode.toLowerCase();if(mode=="dark"){element.classList.add("dark")}if(tipe=="danger"||tipe=="red"){element.classList.add("danger")}else if(tipe=="info"||tipe=="green"){element.classList.add("info")}else if(tipe=="blue"){element.classList.add("blue")}element.addEventListener('click',e=>{if(e.target===element){options.onYes();this.end(element)}});btnIya.addEventListener('click',()=>{options.onYes();this.end(element)});try{document.querySelector(".Notipin").remove()}catch{};document.body.appendChild(template.content)},File(options){options=Object.assign({},{msg:'',yes:'OK',no:"CANCEL",accept:'ALL',type:'NORMAL',mode:'LIGHT',onYes:()=>{},onNo:()=>{}},options);const html=`
        <div class="Notipin">
            <div class="box">
                <div class="msg">${options.msg }</div>
                <div class="field"></div>
                <div class="buttons">
                    <button class="btn confirm no">${options.no }</button>
                </div>
            </div>
        </div>`;
const template=document.createElement('template');template.innerHTML=html;const element=template.content.querySelector('.Notipin');const btnTidak=template.content.querySelector('.box .buttons .no');const tipe=options.type.toLowerCase();const mode=options.mode.toLowerCase();const check_btn=element.querySelector(".box .buttons");let input;if(options.accept.toLowerCase()=="all"){input=document.createElement("input");input.setAttribute('type','file')}else{input=document.createElement("input");input.setAttribute('type',"file");input.setAttribute('accept',options.accept)}element.querySelector('.box .field').appendChild(input);input.onchange=()=>{const btnIyaBefore=element.querySelector('.box .buttons .yes');if(input.files[0]){if(btnIyaBefore){btnIyaBefore.remove()}const btnIya=document.createElement("button");btnIya.classList.add("btn","confirm","yes");btnIya.innerHTML=options.yes;check_btn.appendChild(btnIya);btnIya.addEventListener('click',()=>{options.onYes(input.files[0]);this.end(element)})}else{if(btnIyaBefore){btnIyaBefore.remove()}}};if(mode=="dark"){element.classList.add("dark")}if(tipe=="danger"||tipe=="red"){element.classList.add("danger")}else if(tipe=="info"||tipe=="green"){element.classList.add("info")}else if(tipe=="blue"){element.classList.add("blue")}element.addEventListener('click',e=>{if(e.target===element){options.onNo();this.end(element)}});btnTidak.addEventListener('click',()=>{options.onNo(input.files[0]);this.end(element)});try{document.querySelector(".Notipin").remove()}catch{};document.body.appendChild(template.content)},Prompt(options){options=Object.assign({},{msg:'',yes:'OK',no:"CANCEL",placeholder:"Type Here..",type:'NORMAL',mode:'LIGHT',textarea:false,max:0,onYes:()=>{},onNo:()=>{}},options);const html=`
    <div class="Notipin">
        <div class="box">
            <div class="msg">${options.msg }</div>
            <div class="field"></div>
            <div class="buttons">
                <button class="btn confirm no">${options.no }</button>
                <button class="btn confirm yes">${options.yes }</button>
            </div>
        </div>
    </div>`;
    const template=document.createElement('template');template.innerHTML=html;const element=template.content.querySelector('.Notipin');const btnIya=template.content.querySelector('.box .buttons .yes');const btnTidak=template.content.querySelector('.box .buttons .no');const tipe=options.type.toLowerCase();const mode=options.mode.toLowerCase();if(mode=="dark"){element.classList.add("dark")}let input;if(options.textarea===true){input=document.createElement("textarea");input.placeholder=options.placeholder}else{input=document.createElement("input");input.placeholder=options.placeholder}if(options.max>0){input.setAttribute("maxlength",options.max)}element.querySelector(".box .field").appendChild(input);if(tipe=="danger"||tipe=="red"){element.classList.add("danger")}else if(tipe=="info"||tipe=="green"){element.classList.add("info")}else if(tipe=="blue"){element.classList.add("blue")}element.addEventListener('click',e=>{if(e.target===element){options.onNo();this.end(element)}});btnIya.addEventListener('click',()=>{options.onYes(input.value);this.end(element)});btnTidak.addEventListener('click',()=>{options.onNo(input.value);this.end(element)});try{document.querySelector(".Notipin").remove()}catch{};document.body.appendChild(template.content);input.focus()},end(element){if(element){element.querySelector(".box").classList.add("fade");setTimeout(()=>{element.remove()},300)}},custom(){const custom=document.querySelector("[data-notipin='customCSS']");if(custom){return custom.remove()}},fullCustom(){const full=document.querySelector("[data-notipin='fullCSS']");if(full){return full.remove()}this.custom()},font(data){const style=document.createElement("style");style.innerHTML=(`.Notipin {font-family: ${ data };} .Notipin .box .buttons .btn {font-family: ${ data };}`);document.querySelector("head").appendChild(style)}};(()=>{const link=document.createElement("link");link.rel="stylesheet";link.href="https://cdn.statically.io/gh/devanka761/notipin/v1.24.49/src/yeV4wxxzDRA4Jh598BKN.css";link.setAttribute("data-notipin","fullCSS");document.querySelector("head").appendChild(link);const configCSS=document.createElement("link");configCSS.rel="stylesheet";configCSS.href="https://cdn.statically.io/gh/devanka761/notipin/v1.24.49/src/CMqL5cpwHZ7p89UEKT2p.css";configCSS.setAttribute("data-notipin","customCSS");document.querySelector("head").appendChild(configCSS)})();