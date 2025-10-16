import{a as e,i as t,p as n,t as r}from"./iframe-CFHt_8Q7.js";var i=n(r());const a=({type:e=`span`,children:t,className:n,style:r,...a})=>(0,i.jsx)(o,{as:e,type:e,className:n,style:r,...a,children:t});var o=t.div`
  margin: 0;
  padding: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.base};

  ${({type:e=`span`})=>s(e)}
  ${({color:e})=>c(e)}
  ${({align:e})=>l(e)}
  ${({weight:e})=>u(e)}
  ${({truncate:e})=>d(e)}
  ${({ellipsis:e})=>f(e)}
`,s=t=>({h1:e`
      font-size: ${({theme:e})=>e.typography.fontSize.xxxl};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      line-height: ${({theme:e})=>e.typography.lineHeight.tight};
    `,h2:e`
      font-size: ${({theme:e})=>e.typography.fontSize.xxl};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      line-height: ${({theme:e})=>e.typography.lineHeight.tight};
    `,h3:e`
      font-size: ${({theme:e})=>e.typography.fontSize.xl};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semiBold};
      line-height: ${({theme:e})=>e.typography.lineHeight.tight};
    `,h4:e`
      font-size: ${({theme:e})=>e.typography.fontSize.lg};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semiBold};
      line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    `,h5:e`
      font-size: ${({theme:e})=>e.typography.fontSize.md};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semiBold};
      line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    `,h6:e`
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semiBold};
      line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    `,p:e`
      font-size: ${({theme:e})=>e.typography.fontSize.md};
      font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
      line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
    `,span:e`
      font-size: ${({theme:e})=>e.typography.fontSize.md};
      font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
      line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    `,strong:e`
      font-size: ${({theme:e})=>e.typography.fontSize.md};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    `,em:e`
      font-size: ${({theme:e})=>e.typography.fontSize.md};
      font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
      line-height: ${({theme:e})=>e.typography.lineHeight.normal};
      font-style: italic;
    `,small:e`
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
      line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    `,label:e`
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
      line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    `})[t],c=t=>t?{primary:e`
      color: ${({theme:e})=>e.colors.text.primary};
    `,secondary:e`
      color: ${({theme:e})=>e.colors.text.secondary};
    `,disabled:e`
      color: ${({theme:e})=>e.colors.text.disabled};
    `,inverse:e`
      color: ${({theme:e})=>e.colors.text.inverse};
    `,success:e`
      color: ${({theme:e})=>e.colors.success};
    `,danger:e`
      color: ${({theme:e})=>e.colors.danger};
    `,warning:e`
      color: ${({theme:e})=>e.colors.warning};
    `,info:e`
      color: ${({theme:e})=>e.colors.info};
    `}[t]:``,l=t=>t?e`
    text-align: ${t};
  `:``,u=t=>t?{light:e`
      font-weight: ${({theme:e})=>e.typography.fontWeight.light};
    `,regular:e`
      font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
    `,medium:e`
      font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
    `,semibold:e`
      font-weight: ${({theme:e})=>e.typography.fontWeight.semiBold};
    `,bold:e`
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    `}[t]:``,d=t=>t?e`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `:``,f=t=>t?typeof t==`boolean`?e`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `:e`
    display: -webkit-box;
    -webkit-line-clamp: ${t};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `:``;a.__docgenInfo={description:``,methods:[],displayName:`Text`,props:{type:{required:!1,tsType:{name:`union`,raw:`'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'em' | 'small' | 'label'`,elements:[{name:`literal`,value:`'h1'`},{name:`literal`,value:`'h2'`},{name:`literal`,value:`'h3'`},{name:`literal`,value:`'h4'`},{name:`literal`,value:`'h5'`},{name:`literal`,value:`'h6'`},{name:`literal`,value:`'p'`},{name:`literal`,value:`'span'`},{name:`literal`,value:`'strong'`},{name:`literal`,value:`'em'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'label'`}]},description:``,defaultValue:{value:`'span'`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'disabled' | 'inverse' | 'success' | 'danger' | 'warning' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'disabled'`},{name:`literal`,value:`'inverse'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'info'`}]},description:``},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'center' | 'right' | 'justify'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'justify'`}]},description:``},weight:{required:!1,tsType:{name:`union`,raw:`'light' | 'regular' | 'medium' | 'semibold' | 'bold'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'regular'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'semibold'`},{name:`literal`,value:`'bold'`}]},description:``},truncate:{required:!1,tsType:{name:`boolean`},description:``},ellipsis:{required:!1,tsType:{name:`union`,raw:`boolean | number`,elements:[{name:`boolean`},{name:`number`}]},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}};export{a as t};