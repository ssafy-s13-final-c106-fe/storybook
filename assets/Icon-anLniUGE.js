import{i as e,p as t,t as n}from"./iframe-CFHt_8Q7.js";var r=t(n());const i=({src:e,size:t,shape:n=`square`,border:i,borderColor:s,borderRadius:c,shadow:l,alt:u=`icon`,className:d,style:f})=>(0,r.jsx)(a,{size:t,shape:n,border:i,borderColor:s,borderRadius:c,shadow:l,className:d,style:f,children:(0,r.jsx)(o,{src:e,alt:u})});var a=e.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;

  width: ${({size:e})=>typeof e==`number`?`${e}px`:e};
  height: ${({size:e})=>typeof e==`number`?`${e}px`:e};

  ${({shape:e,borderRadius:t})=>t===void 0?e===`circle`?`border-radius: 50%;`:`border-radius: 0;`:`border-radius: ${typeof t==`number`?`${t}px`:t};`}

  ${({border:e,borderColor:t,theme:n})=>{if(e&&t){let r=typeof e==`number`?`${e}px`:e,i=n.colors[t]||t;return`border: ${r} solid ${i};`}return``}}

  ${({shadow:e,theme:t})=>e?`box-shadow: ${t.shadows[e]};`:``}
`,o=e.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;i.__docgenInfo={description:``,methods:[],displayName:`Icon`,props:{src:{required:!0,tsType:{name:`string`},description:``},size:{required:!0,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},shape:{required:!1,tsType:{name:`union`,raw:`'circle' | 'square'`,elements:[{name:`literal`,value:`'circle'`},{name:`literal`,value:`'square'`}]},description:``,defaultValue:{value:`'square'`,computed:!1}},border:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},borderColor:{required:!1,tsType:{name:`unknown`},description:``},borderRadius:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},shadow:{required:!1,tsType:{name:`unknown`},description:``},alt:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'icon'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}};export{i as t};