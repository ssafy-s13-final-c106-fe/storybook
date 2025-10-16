import{p as e,t}from"./iframe-CFHt_8Q7.js";import{t as n}from"./Icon-anLniUGE.js";var r=e(t()),i={title:`Shared/UI/Atoms/Icon`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{src:{control:`text`,description:`아이콘 이미지 URL`},size:{control:`number`,description:`아이콘 크기 (px 또는 string)`},shape:{control:`select`,options:[`circle`,`square`],description:`아이콘 모양`},border:{control:`number`,description:`테두리 두께`},borderColor:{control:`text`,description:`테두리 색상 (테마 색상 키 또는 직접 색상)`},borderRadius:{control:`number`,description:`커스텀 border-radius`},shadow:{control:`select`,options:[`sm`,`md`,`lg`,`xl`],description:`그림자 효과`}}},a=`https://via.placeholder.com/100/007bff/ffffff?text=Icon`,o=`https://via.placeholder.com/100/28a745/ffffff?text=User`,s=`https://via.placeholder.com/100/ffc107/ffffff?text=Star`;const c={args:{src:a,size:48}},l={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`},children:[(0,r.jsx)(n,{src:a,size:24}),(0,r.jsx)(n,{src:a,size:32}),(0,r.jsx)(n,{src:a,size:48}),(0,r.jsx)(n,{src:a,size:64}),(0,r.jsx)(n,{src:a,size:96})]})},u={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`24px`},children:[(0,r.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,r.jsx)(n,{src:o,size:64,shape:`square`}),(0,r.jsx)(`div`,{style:{marginTop:`8px`,fontSize:`14px`},children:`Square`})]}),(0,r.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,r.jsx)(n,{src:o,size:64,shape:`circle`}),(0,r.jsx)(`div`,{style:{marginTop:`8px`,fontSize:`14px`},children:`Circle`})]})]})},d={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`24px`},children:[(0,r.jsx)(n,{src:s,size:64,shape:`circle`,border:2,borderColor:`primary`}),(0,r.jsx)(n,{src:s,size:64,shape:`circle`,border:3,borderColor:`success`}),(0,r.jsx)(n,{src:s,size:64,shape:`circle`,border:4,borderColor:`danger`})]})},f={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`24px`},children:[(0,r.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,r.jsx)(n,{src:a,size:64,borderRadius:0}),(0,r.jsx)(`div`,{style:{marginTop:`8px`,fontSize:`14px`},children:`0px`})]}),(0,r.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,r.jsx)(n,{src:a,size:64,borderRadius:8}),(0,r.jsx)(`div`,{style:{marginTop:`8px`,fontSize:`14px`},children:`8px`})]}),(0,r.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,r.jsx)(n,{src:a,size:64,borderRadius:16}),(0,r.jsx)(`div`,{style:{marginTop:`8px`,fontSize:`14px`},children:`16px`})]}),(0,r.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,r.jsx)(n,{src:a,size:64,borderRadius:32}),(0,r.jsx)(`div`,{style:{marginTop:`8px`,fontSize:`14px`},children:`32px`})]})]})},p={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`32px`},children:[(0,r.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,r.jsx)(n,{src:o,size:64,shape:`circle`,shadow:`sm`}),(0,r.jsx)(`div`,{style:{marginTop:`8px`,fontSize:`14px`},children:`Small`})]}),(0,r.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,r.jsx)(n,{src:o,size:64,shape:`circle`,shadow:`md`}),(0,r.jsx)(`div`,{style:{marginTop:`8px`,fontSize:`14px`},children:`Medium`})]}),(0,r.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,r.jsx)(n,{src:o,size:64,shape:`circle`,shadow:`lg`}),(0,r.jsx)(`div`,{style:{marginTop:`8px`,fontSize:`14px`},children:`Large`})]}),(0,r.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,r.jsx)(n,{src:o,size:64,shape:`circle`,shadow:`xl`}),(0,r.jsx)(`div`,{style:{marginTop:`8px`,fontSize:`14px`},children:`Extra Large`})]})]})},m={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`24px`},children:[(0,r.jsx)(n,{src:o,size:80,shape:`circle`,border:3,borderColor:`primary`,shadow:`md`}),(0,r.jsx)(n,{src:s,size:80,borderRadius:16,border:2,borderColor:`warning`,shadow:`lg`}),(0,r.jsx)(n,{src:a,size:80,shape:`square`,border:4,borderColor:`success`,shadow:`xl`})]})},h={parameters:{controls:{disable:!0}},args:{src:o,size:100,shape:`circle`,border:3,borderColor:`primary`,shadow:`md`}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_ICON,
    size: 48
  }
} satisfies Story`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>\r
      <Icon src={SAMPLE_ICON} size={24} />\r
      <Icon src={SAMPLE_ICON} size={32} />\r
      <Icon src={SAMPLE_ICON} size={48} />\r
      <Icon src={SAMPLE_ICON} size={64} />\r
      <Icon src={SAMPLE_ICON} size={96} />\r
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '24px'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Icon src={SAMPLE_USER} size={64} shape="square" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Square</div>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Icon src={SAMPLE_USER} size={64} shape="circle" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Circle</div>\r
      </div>\r
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '24px'
  }}>\r
      <Icon src={SAMPLE_STAR} size={64} shape="circle" border={2} borderColor="primary" />\r
      <Icon src={SAMPLE_STAR} size={64} shape="circle" border={3} borderColor="success" />\r
      <Icon src={SAMPLE_STAR} size={64} shape="circle" border={4} borderColor="danger" />\r
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '24px'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Icon src={SAMPLE_ICON} size={64} borderRadius={0} />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>0px</div>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Icon src={SAMPLE_ICON} size={64} borderRadius={8} />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>8px</div>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Icon src={SAMPLE_ICON} size={64} borderRadius={16} />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>16px</div>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Icon src={SAMPLE_ICON} size={64} borderRadius={32} />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>32px</div>\r
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
    gap: '32px'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Icon src={SAMPLE_USER} size={64} shape="circle" shadow="sm" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Small</div>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Icon src={SAMPLE_USER} size={64} shape="circle" shadow="md" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Medium</div>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Icon src={SAMPLE_USER} size={64} shape="circle" shadow="lg" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Large</div>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Icon src={SAMPLE_USER} size={64} shape="circle" shadow="xl" />\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px'
      }}>Extra Large</div>\r
      </div>\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '24px'
  }}>\r
      <Icon src={SAMPLE_USER} size={80} shape="circle" border={3} borderColor="primary" shadow="md" />\r
      <Icon src={SAMPLE_STAR} size={80} borderRadius={16} border={2} borderColor="warning" shadow="lg" />\r
      <Icon src={SAMPLE_ICON} size={80} shape="square" border={4} borderColor="success" shadow="xl" />\r
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    src: SAMPLE_USER,
    size: 100,
    shape: 'circle',
    border: 3,
    borderColor: 'primary',
    shadow: 'md'
  }
}`,...h.parameters?.docs?.source}}};const g=[`Default`,`Sizes`,`Shapes`,`WithBorder`,`CustomBorderRadius`,`WithShadow`,`Combined`,`ProfileIcon`];export{m as Combined,f as CustomBorderRadius,c as Default,h as ProfileIcon,u as Shapes,l as Sizes,d as WithBorder,p as WithShadow,g as __namedExportsOrder,i as default};