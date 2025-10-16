import{i as e,p as t,t as n}from"./iframe-CFHt_8Q7.js";import{t as r}from"./Text-gcsepRMf.js";import{t as i}from"./Icon-anLniUGE.js";var a=t(n());const o=({onClick:e,disabled:t=!1,color:n=`primary`,reverse:o=!1,size:c=`md`,className:l,style:d,...f})=>{let p=`text`in f&&f.text!==void 0,m=`src`in f&&f.src!==void 0;return(0,a.jsxs)(u,{onClick:e,disabled:t,color:n,reverse:o,size:c,className:l,style:d,children:[p&&(0,a.jsx)(r,{type:`span`,children:f.text}),m&&(0,a.jsx)(i,{src:f.src,size:f.iconSize||s(c),alt:`button icon`})]})};var s=e=>({sm:16,md:20,lg:24})[e],c=e=>({sm:`6px 12px`,md:`10px 20px`,lg:`14px 28px`})[e],l=e=>({primary:`#ffffff`,secondary:`#ffffff`,success:`#ffffff`,danger:`#ffffff`,warning:`#000000`,info:`#ffffff`,background:`#000000`,surface:`#000000`,border:`#000000`})[e]||`#ffffff`,u=e.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({size:e})=>c(e)};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  font-family: ${({theme:e})=>e.typography.fontFamily.base};
  transition: all 0.2s ease-in-out;

  ${({color:e,reverse:t,theme:n})=>{let r=n.colors[e]||n.colors.primary,i=l(e);return t?`
        background-color: transparent;
        color: ${r};
        border: 2px solid ${r};

        &:hover:not(:disabled) {
          background-color: ${r}10;
        }
      `:`
        background-color: ${r};
        color: ${i};
        border: 2px solid transparent;

        &:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: ${n.shadows.sm};
        }
      `}}

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;o.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{disabled:{defaultValue:{value:`false`,computed:!1},required:!1},color:{defaultValue:{value:`'primary'`,computed:!1},required:!1},reverse:{defaultValue:{value:`false`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1}}};var d={title:`Shared/UI/Atoms/Button`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{text:{control:`text`,description:`버튼 텍스트 (텍스트 버튼용)`},src:{control:`text`,description:`아이콘 이미지 URL (아이콘 버튼용)`},color:{control:`select`,options:[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`background`,`surface`,`border`],description:`버튼 색상`},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`버튼 크기`},reverse:{control:`boolean`,description:`반전 스타일 (배경 투명, 테두리만)`},disabled:{control:`boolean`,description:`비활성화 상태`},onClick:{action:`clicked`}}},f=`https://via.placeholder.com/24/ffffff/ffffff?text=+`;const p={args:{text:`Button`,color:`primary`}},m={parameters:{controls:{disable:!0}},render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`},children:[(0,a.jsx)(o,{text:`Primary`,color:`primary`}),(0,a.jsx)(o,{text:`Secondary`,color:`secondary`}),(0,a.jsx)(o,{text:`Success`,color:`success`}),(0,a.jsx)(o,{text:`Danger`,color:`danger`}),(0,a.jsx)(o,{text:`Warning`,color:`warning`}),(0,a.jsx)(o,{text:`Info`,color:`info`})]})},h={parameters:{controls:{disable:!0}},render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`},children:[(0,a.jsx)(o,{text:`Primary`,color:`primary`,reverse:!0}),(0,a.jsx)(o,{text:`Secondary`,color:`secondary`,reverse:!0}),(0,a.jsx)(o,{text:`Success`,color:`success`,reverse:!0}),(0,a.jsx)(o,{text:`Danger`,color:`danger`,reverse:!0}),(0,a.jsx)(o,{text:`Warning`,color:`warning`,reverse:!0}),(0,a.jsx)(o,{text:`Info`,color:`info`,reverse:!0})]})},g={parameters:{controls:{disable:!0}},render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,a.jsx)(o,{text:`Small`,size:`sm`}),(0,a.jsx)(o,{text:`Medium`,size:`md`}),(0,a.jsx)(o,{text:`Large`,size:`lg`})]})},_={parameters:{controls:{disable:!0}},render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`12px`},children:[(0,a.jsx)(o,{src:f,size:`sm`,color:`primary`}),(0,a.jsx)(o,{src:f,size:`md`,color:`success`}),(0,a.jsx)(o,{src:f,size:`lg`,color:`danger`})]})},v={parameters:{controls:{disable:!0}},render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`12px`},children:[(0,a.jsx)(o,{src:f,size:`sm`,color:`primary`,reverse:!0}),(0,a.jsx)(o,{src:f,size:`md`,color:`success`,reverse:!0}),(0,a.jsx)(o,{src:f,size:`lg`,color:`danger`,reverse:!0})]})},y={parameters:{controls:{disable:!0}},render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexDirection:`column`},children:[(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`12px`},children:[(0,a.jsx)(o,{text:`Primary`,color:`primary`,disabled:!0}),(0,a.jsx)(o,{text:`Success`,color:`success`,disabled:!0}),(0,a.jsx)(o,{text:`Danger`,color:`danger`,disabled:!0})]}),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`12px`},children:[(0,a.jsx)(o,{text:`Primary`,color:`primary`,reverse:!0,disabled:!0}),(0,a.jsx)(o,{text:`Success`,color:`success`,reverse:!0,disabled:!0}),(0,a.jsx)(o,{text:`Danger`,color:`danger`,reverse:!0,disabled:!0})]})]})},b={parameters:{controls:{disable:!0}},render:()=>{let e=()=>{alert(`Button clicked!`)};return(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`12px`},children:[(0,a.jsx)(o,{text:`Click Me!`,color:`primary`,onClick:e}),(0,a.jsx)(o,{text:`Don't Click`,color:`danger`,onClick:e,reverse:!0})]})}},x={parameters:{controls:{disable:!0}},render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,padding:`20px`},children:[(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`12px`},children:[(0,a.jsx)(o,{text:`Save`,color:`success`,size:`md`}),(0,a.jsx)(o,{text:`Cancel`,color:`secondary`,size:`md`,reverse:!0})]}),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`12px`},children:[(0,a.jsx)(o,{text:`Delete`,color:`danger`,size:`md`}),(0,a.jsx)(o,{text:`Edit`,color:`primary`,size:`md`})]}),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`12px`},children:[(0,a.jsx)(o,{text:`Submit`,color:`primary`,size:`lg`}),(0,a.jsx)(o,{text:`Reset`,color:`warning`,size:`lg`,reverse:!0})]})]})},S={parameters:{controls:{disable:!0}},render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`,padding:`20px`},children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h3`,{style:{marginBottom:`12px`},children:`Text Buttons - Small`}),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,a.jsx)(o,{text:`Primary`,color:`primary`,size:`sm`}),(0,a.jsx)(o,{text:`Secondary`,color:`secondary`,size:`sm`}),(0,a.jsx)(o,{text:`Success`,color:`success`,size:`sm`}),(0,a.jsx)(o,{text:`Danger`,color:`danger`,size:`sm`})]})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h3`,{style:{marginBottom:`12px`},children:`Text Buttons - Medium (Reverse)`}),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,a.jsx)(o,{text:`Primary`,color:`primary`,size:`md`,reverse:!0}),(0,a.jsx)(o,{text:`Secondary`,color:`secondary`,size:`md`,reverse:!0}),(0,a.jsx)(o,{text:`Success`,color:`success`,size:`md`,reverse:!0}),(0,a.jsx)(o,{text:`Danger`,color:`danger`,size:`md`,reverse:!0})]})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h3`,{style:{marginBottom:`12px`},children:`Icon Buttons - Large`}),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,a.jsx)(o,{src:f,color:`primary`,size:`lg`}),(0,a.jsx)(o,{src:f,color:`success`,size:`lg`}),(0,a.jsx)(o,{src:f,color:`danger`,size:`lg`,reverse:!0})]})]})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Button',
    color: 'primary'
  }
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>\r
      <Button text="Primary" color="primary" />\r
      <Button text="Secondary" color="secondary" />\r
      <Button text="Success" color="success" />\r
      <Button text="Danger" color="danger" />\r
      <Button text="Warning" color="warning" />\r
      <Button text="Info" color="info" />\r
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>\r
      <Button text="Primary" color="primary" reverse />\r
      <Button text="Secondary" color="secondary" reverse />\r
      <Button text="Success" color="success" reverse />\r
      <Button text="Danger" color="danger" reverse />\r
      <Button text="Warning" color="warning" reverse />\r
      <Button text="Info" color="info" reverse />\r
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }}>\r
      <Button text="Small" size="sm" />\r
      <Button text="Medium" size="md" />\r
      <Button text="Large" size="lg" />\r
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px'
  }}>\r
      <Button src={SAMPLE_ICON} size="sm" color="primary" />\r
      <Button src={SAMPLE_ICON} size="md" color="success" />\r
      <Button src={SAMPLE_ICON} size="lg" color="danger" />\r
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px'
  }}>\r
      <Button src={SAMPLE_ICON} size="sm" color="primary" reverse />\r
      <Button src={SAMPLE_ICON} size="md" color="success" reverse />\r
      <Button src={SAMPLE_ICON} size="lg" color="danger" reverse />\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexDirection: 'column'
  }}>\r
      <div style={{
      display: 'flex',
      gap: '12px'
    }}>\r
        <Button text="Primary" color="primary" disabled />\r
        <Button text="Success" color="success" disabled />\r
        <Button text="Danger" color="danger" disabled />\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: '12px'
    }}>\r
        <Button text="Primary" color="primary" reverse disabled />\r
        <Button text="Success" color="success" reverse disabled />\r
        <Button text="Danger" color="danger" reverse disabled />\r
      </div>\r
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const handleClick = () => {
      alert('Button clicked!');
    };
    return <div style={{
      display: 'flex',
      gap: '12px'
    }}>\r
        <Button text="Click Me!" color="primary" onClick={handleClick} />\r
        <Button text="Don't Click" color="danger" onClick={handleClick} reverse />\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px'
  }}>\r
      <div style={{
      display: 'flex',
      gap: '12px'
    }}>\r
        <Button text="Save" color="success" size="md" />\r
        <Button text="Cancel" color="secondary" size="md" reverse />\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: '12px'
    }}>\r
        <Button text="Delete" color="danger" size="md" />\r
        <Button text="Edit" color="primary" size="md" />\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: '12px'
    }}>\r
        <Button text="Submit" color="primary" size="lg" />\r
        <Button text="Reset" color="warning" size="lg" reverse />\r
      </div>\r
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px'
  }}>\r
      <div>\r
        <h3 style={{
        marginBottom: '12px'
      }}>Text Buttons - Small</h3>\r
        <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>\r
          <Button text="Primary" color="primary" size="sm" />\r
          <Button text="Secondary" color="secondary" size="sm" />\r
          <Button text="Success" color="success" size="sm" />\r
          <Button text="Danger" color="danger" size="sm" />\r
        </div>\r
      </div>\r
      <div>\r
        <h3 style={{
        marginBottom: '12px'
      }}>Text Buttons - Medium (Reverse)</h3>\r
        <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>\r
          <Button text="Primary" color="primary" size="md" reverse />\r
          <Button text="Secondary" color="secondary" size="md" reverse />\r
          <Button text="Success" color="success" size="md" reverse />\r
          <Button text="Danger" color="danger" size="md" reverse />\r
        </div>\r
      </div>\r
      <div>\r
        <h3 style={{
        marginBottom: '12px'
      }}>Icon Buttons - Large</h3>\r
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>\r
          <Button src={SAMPLE_ICON} color="primary" size="lg" />\r
          <Button src={SAMPLE_ICON} color="success" size="lg" />\r
          <Button src={SAMPLE_ICON} color="danger" size="lg" reverse />\r
        </div>\r
      </div>\r
    </div>
}`,...S.parameters?.docs?.source}}};const C=[`Default`,`Colors`,`ColorsReverse`,`Sizes`,`IconButton`,`IconButtonReverse`,`Disabled`,`Interactive`,`RealWorldExample`,`AllVariants`];export{S as AllVariants,m as Colors,h as ColorsReverse,p as Default,y as Disabled,_ as IconButton,v as IconButtonReverse,b as Interactive,x as RealWorldExample,g as Sizes,C as __namedExportsOrder,d as default};