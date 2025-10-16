import{p as e,t}from"./iframe-CFHt_8Q7.js";import{t as n}from"./Text-gcsepRMf.js";var r=e(t()),i={title:`Shared/UI/Atoms/Text`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p`,`span`,`strong`,`em`,`small`,`label`],description:`HTML 태그 타입`},color:{control:`select`,options:[`primary`,`secondary`,`disabled`,`inverse`,`success`,`danger`,`warning`,`info`],description:`텍스트 색상`},align:{control:`select`,options:[`left`,`center`,`right`,`justify`],description:`텍스트 정렬`},weight:{control:`select`,options:[`light`,`regular`,`medium`,`semibold`,`bold`],description:`폰트 굵기`},truncate:{control:`boolean`,description:`한 줄로 말줄임`},ellipsis:{control:`number`,description:`여러 줄 말줄임 (숫자: 라인 수)`}}};const a={args:{children:`This is a default text`}},o={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,r.jsx)(n,{type:`h1`,children:`Heading 1`}),(0,r.jsx)(n,{type:`h2`,children:`Heading 2`}),(0,r.jsx)(n,{type:`h3`,children:`Heading 3`}),(0,r.jsx)(n,{type:`h4`,children:`Heading 4`}),(0,r.jsx)(n,{type:`h5`,children:`Heading 5`}),(0,r.jsx)(n,{type:`h6`,children:`Heading 6`})]})},s={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,r.jsx)(n,{type:`p`,children:`This is a paragraph text`}),(0,r.jsx)(n,{type:`span`,children:`This is a span text`}),(0,r.jsx)(n,{type:`strong`,children:`This is a strong text`}),(0,r.jsx)(n,{type:`em`,children:`This is an emphasized text`}),(0,r.jsx)(n,{type:`small`,children:`This is a small text`}),(0,r.jsx)(n,{type:`label`,children:`This is a label text`})]})},c={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,r.jsx)(n,{color:`primary`,children:`Primary color text`}),(0,r.jsx)(n,{color:`secondary`,children:`Secondary color text`}),(0,r.jsx)(n,{color:`disabled`,children:`Disabled color text`}),(0,r.jsx)(n,{color:`success`,children:`Success color text`}),(0,r.jsx)(n,{color:`danger`,children:`Danger color text`}),(0,r.jsx)(n,{color:`warning`,children:`Warning color text`}),(0,r.jsx)(n,{color:`info`,children:`Info color text`})]})},l={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`400px`},children:[(0,r.jsx)(n,{align:`left`,children:`Left aligned text`}),(0,r.jsx)(n,{align:`center`,children:`Center aligned text`}),(0,r.jsx)(n,{align:`right`,children:`Right aligned text`}),(0,r.jsx)(n,{align:`justify`,children:`Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.`})]})},u={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,r.jsx)(n,{weight:`light`,children:`Light weight text`}),(0,r.jsx)(n,{weight:`regular`,children:`Regular weight text`}),(0,r.jsx)(n,{weight:`medium`,children:`Medium weight text`}),(0,r.jsx)(n,{weight:`semibold`,children:`Semibold weight text`}),(0,r.jsx)(n,{weight:`bold`,children:`Bold weight text`})]})},d={parameters:{controls:{disable:!0}},render:()=>(0,r.jsx)(`div`,{style:{width:`300px`},children:(0,r.jsx)(n,{truncate:!0,children:`This is a very long text that will be truncated with ellipsis when it exceeds the container width`})})},f={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,width:`300px`},children:[(0,r.jsxs)(`div`,{children:[(0,r.jsx)(n,{type:`h6`,children:`2줄 말줄임`}),(0,r.jsx)(n,{ellipsis:2,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(n,{type:`h6`,children:`3줄 말줄임`}),(0,r.jsx)(n,{ellipsis:3,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`})]})]})},p={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`400px`},children:[(0,r.jsx)(n,{type:`h2`,color:`primary`,align:`center`,children:`Primary Heading`}),(0,r.jsx)(n,{type:`p`,color:`secondary`,weight:`light`,children:`This is a secondary paragraph with light weight.`}),(0,r.jsx)(n,{type:`span`,color:`danger`,weight:`bold`,children:`Important danger message!`})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is a default text'
  }
} satisfies Story`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Text type="h1">Heading 1</Text>\r
      <Text type="h2">Heading 2</Text>\r
      <Text type="h3">Heading 3</Text>\r
      <Text type="h4">Heading 4</Text>\r
      <Text type="h5">Heading 5</Text>\r
      <Text type="h6">Heading 6</Text>\r
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Text type="p">This is a paragraph text</Text>\r
      <Text type="span">This is a span text</Text>\r
      <Text type="strong">This is a strong text</Text>\r
      <Text type="em">This is an emphasized text</Text>\r
      <Text type="small">This is a small text</Text>\r
      <Text type="label">This is a label text</Text>\r
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Text color="primary">Primary color text</Text>\r
      <Text color="secondary">Secondary color text</Text>\r
      <Text color="disabled">Disabled color text</Text>\r
      <Text color="success">Success color text</Text>\r
      <Text color="danger">Danger color text</Text>\r
      <Text color="warning">Warning color text</Text>\r
      <Text color="info">Info color text</Text>\r
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px'
  }}>\r
      <Text align="left">Left aligned text</Text>\r
      <Text align="center">Center aligned text</Text>\r
      <Text align="right">Right aligned text</Text>\r
      <Text align="justify">\r
        Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.\r
      </Text>\r
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Text weight="light">Light weight text</Text>\r
      <Text weight="regular">Regular weight text</Text>\r
      <Text weight="medium">Medium weight text</Text>\r
      <Text weight="semibold">Semibold weight text</Text>\r
      <Text weight="bold">Bold weight text</Text>\r
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: '300px'
  }}>\r
      <Text truncate>\r
        This is a very long text that will be truncated with ellipsis when it exceeds the container width\r
      </Text>\r
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '300px'
  }}>\r
      <div>\r
        <Text type="h6">2줄 말줄임</Text>\r
        <Text ellipsis={2}>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et\r
          dolore magna aliqua. Ut enim ad minim veniam.\r
        </Text>\r
      </div>\r
      <div>\r
        <Text type="h6">3줄 말줄임</Text>\r
        <Text ellipsis={3}>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et\r
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\r
        </Text>\r
      </div>\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px'
  }}>\r
      <Text type="h2" color="primary" align="center">\r
        Primary Heading\r
      </Text>\r
      <Text type="p" color="secondary" weight="light">\r
        This is a secondary paragraph with light weight.\r
      </Text>\r
      <Text type="span" color="danger" weight="bold">\r
        Important danger message!\r
      </Text>\r
    </div>
}`,...p.parameters?.docs?.source}}};const m=[`Default`,`Headings`,`BodyTypes`,`Colors`,`Alignment`,`FontWeights`,`Truncate`,`MultilineEllipsis`,`Combined`];export{l as Alignment,s as BodyTypes,c as Colors,p as Combined,a as Default,u as FontWeights,o as Headings,f as MultilineEllipsis,d as Truncate,m as __namedExportsOrder,i as default};