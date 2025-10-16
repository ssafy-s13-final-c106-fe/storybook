import{i as e,p as t,t as n}from"./iframe-CFHt_8Q7.js";var r=t(n());const i=({width:e,height:t,flex:n,display:i,justifyContent:o,alignItems:s,children:c,className:l,style:u})=>(0,r.jsx)(a,{width:e,height:t,flex:n,display:i,justifyContent:o,alignItems:s,className:l,style:u,children:c});var a=e.div`
  background-color: ${({theme:e})=>e.colors.boxBackground};

  width: ${({width:e})=>typeof e==`number`?`${e}px`:e};
  height: ${({height:e})=>typeof e==`number`?`${e}px`:e};

  ${({flex:e})=>e&&`flex: ${e};`}
  ${({display:e})=>e&&`display: ${e};`}
  ${({justifyContent:e})=>e&&`justify-content: ${e};`}
  ${({alignItems:e})=>e&&`align-items: ${e};`}
`;i.__docgenInfo={description:``,methods:[],displayName:`Box`,props:{width:{required:!0,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},height:{required:!0,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},flex:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},display:{required:!1,tsType:{name:`CSSProperties['display']`,raw:`CSSProperties['display']`},description:``},justifyContent:{required:!1,tsType:{name:`CSSProperties['justifyContent']`,raw:`CSSProperties['justifyContent']`},description:``},alignItems:{required:!1,tsType:{name:`CSSProperties['alignItems']`,raw:`CSSProperties['alignItems']`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}};var o={title:`Shared/UI/Atoms/Box`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`text`,description:`Box 너비 (px 또는 string)`},height:{control:`text`,description:`Box 높이 (px 또는 string)`},flex:{control:`text`,description:`Flex 속성`},display:{control:`select`,options:[`block`,`flex`,`inline-flex`,`grid`,`inline-block`],description:`Display 속성`},justifyContent:{control:`select`,options:[`flex-start`,`center`,`flex-end`,`space-between`,`space-around`,`space-evenly`],description:`Justify Content (flex일 때)`},alignItems:{control:`select`,options:[`flex-start`,`center`,`flex-end`,`stretch`,`baseline`],description:`Align Items (flex일 때)`}}};const s={args:{width:200,height:100,children:`Default Box`}},c={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,flexWrap:`wrap`},children:[(0,r.jsx)(i,{width:100,height:100,children:`100x100`}),(0,r.jsx)(i,{width:150,height:100,children:`150x100`}),(0,r.jsx)(i,{width:200,height:100,children:`200x100`}),(0,r.jsx)(i,{width:250,height:150,children:`250x150`})]})},l={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{width:`600px`,display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,r.jsx)(i,{width:`100%`,height:60,children:`100% width`}),(0,r.jsx)(i,{width:`75%`,height:60,children:`75% width`}),(0,r.jsx)(i,{width:`50%`,height:60,children:`50% width`}),(0,r.jsx)(i,{width:`25%`,height:60,children:`25% width`})]})},u={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`div`,{style:{marginBottom:`8px`,fontSize:`14px`,fontWeight:`bold`},children:`Justify: flex-start`}),(0,r.jsxs)(i,{width:400,height:80,display:`flex`,justifyContent:`flex-start`,alignItems:`center`,children:[(0,r.jsx)(`div`,{style:{padding:`8px`,background:`#007bff`,color:`white`,borderRadius:`4px`},children:`Item 1`}),(0,r.jsx)(`div`,{style:{padding:`8px`,background:`#28a745`,color:`white`,borderRadius:`4px`},children:`Item 2`}),(0,r.jsx)(`div`,{style:{padding:`8px`,background:`#dc3545`,color:`white`,borderRadius:`4px`},children:`Item 3`})]})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`div`,{style:{marginBottom:`8px`,fontSize:`14px`,fontWeight:`bold`},children:`Justify: center`}),(0,r.jsxs)(i,{width:400,height:80,display:`flex`,justifyContent:`center`,alignItems:`center`,children:[(0,r.jsx)(`div`,{style:{padding:`8px`,background:`#007bff`,color:`white`,borderRadius:`4px`},children:`Item 1`}),(0,r.jsx)(`div`,{style:{padding:`8px`,background:`#28a745`,color:`white`,borderRadius:`4px`},children:`Item 2`}),(0,r.jsx)(`div`,{style:{padding:`8px`,background:`#dc3545`,color:`white`,borderRadius:`4px`},children:`Item 3`})]})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`div`,{style:{marginBottom:`8px`,fontSize:`14px`,fontWeight:`bold`},children:`Justify: space-between`}),(0,r.jsxs)(i,{width:400,height:80,display:`flex`,justifyContent:`space-between`,alignItems:`center`,children:[(0,r.jsx)(`div`,{style:{padding:`8px`,background:`#007bff`,color:`white`,borderRadius:`4px`},children:`Item 1`}),(0,r.jsx)(`div`,{style:{padding:`8px`,background:`#28a745`,color:`white`,borderRadius:`4px`},children:`Item 2`}),(0,r.jsx)(`div`,{style:{padding:`8px`,background:`#dc3545`,color:`white`,borderRadius:`4px`},children:`Item 3`})]})]})]})},d={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`24px`},children:[(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`div`,{style:{marginBottom:`8px`,fontSize:`14px`,fontWeight:`bold`},children:`Align: flex-start`}),(0,r.jsx)(i,{width:120,height:200,display:`flex`,justifyContent:`center`,alignItems:`flex-start`,children:(0,r.jsx)(`div`,{style:{padding:`8px`,background:`#007bff`,color:`white`,borderRadius:`4px`},children:`Top`})})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`div`,{style:{marginBottom:`8px`,fontSize:`14px`,fontWeight:`bold`},children:`Align: center`}),(0,r.jsx)(i,{width:120,height:200,display:`flex`,justifyContent:`center`,alignItems:`center`,children:(0,r.jsx)(`div`,{style:{padding:`8px`,background:`#28a745`,color:`white`,borderRadius:`4px`},children:`Middle`})})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`div`,{style:{marginBottom:`8px`,fontSize:`14px`,fontWeight:`bold`},children:`Align: flex-end`}),(0,r.jsx)(i,{width:120,height:200,display:`flex`,justifyContent:`center`,alignItems:`flex-end`,children:(0,r.jsx)(`div`,{style:{padding:`8px`,background:`#dc3545`,color:`white`,borderRadius:`4px`},children:`Bottom`})})]})]})},f={parameters:{controls:{disable:!0}},render:()=>(0,r.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,width:`500px`},children:[(0,r.jsx)(i,{width:`auto`,height:60,flex:1,display:`flex`,alignItems:`center`,justifyContent:`center`,children:`flex: 1`}),(0,r.jsx)(i,{width:`auto`,height:60,flex:2,display:`flex`,alignItems:`center`,justifyContent:`center`,children:`flex: 2`}),(0,r.jsx)(i,{width:`auto`,height:60,flex:1,display:`flex`,alignItems:`center`,justifyContent:`center`,children:`flex: 1`})]})})},p={parameters:{controls:{disable:!0}},render:()=>(0,r.jsx)(i,{width:400,height:300,display:`flex`,justifyContent:`center`,alignItems:`center`,children:(0,r.jsx)(i,{width:300,height:200,display:`flex`,justifyContent:`center`,alignItems:`center`,children:(0,r.jsx)(i,{width:200,height:100,display:`flex`,justifyContent:`center`,alignItems:`center`,children:`Nested Box`})})})},m={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(i,{width:350,height:`auto`,display:`flex`,style:{flexDirection:`column`,padding:`20px`,gap:`16px`},children:[(0,r.jsxs)(i,{width:`100%`,height:60,display:`flex`,alignItems:`center`,justifyContent:`space-between`,style:{padding:`0 12px`},children:[(0,r.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`18px`},children:`Card Title`}),(0,r.jsx)(`div`,{style:{fontSize:`14px`,color:`#666`},children:`Action`})]}),(0,r.jsx)(i,{width:`100%`,height:120,display:`flex`,alignItems:`center`,justifyContent:`center`,children:(0,r.jsx)(`div`,{style:{textAlign:`center`,color:`#666`},children:`Card Content Area`})}),(0,r.jsxs)(i,{width:`100%`,height:50,display:`flex`,alignItems:`center`,justifyContent:`flex-end`,style:{gap:`8px`,padding:`0 12px`},children:[(0,r.jsx)(`button`,{style:{padding:`8px 16px`,background:`#007bff`,color:`white`,border:`none`,borderRadius:`4px`,cursor:`pointer`},children:`Confirm`}),(0,r.jsx)(`button`,{style:{padding:`8px 16px`,background:`#6c757d`,color:`white`,border:`none`,borderRadius:`4px`,cursor:`pointer`},children:`Cancel`})]})]})},h={parameters:{controls:{disable:!0}},render:()=>(0,r.jsxs)(i,{width:600,height:`auto`,display:`flex`,style:{flexDirection:`column`,gap:`16px`},children:[(0,r.jsxs)(i,{width:`100%`,height:100,display:`flex`,justifyContent:`space-between`,style:{gap:`16px`},children:[(0,r.jsx)(i,{width:`auto`,height:100,flex:1,display:`flex`,alignItems:`center`,justifyContent:`center`,children:`Box 1`}),(0,r.jsx)(i,{width:`auto`,height:100,flex:1,display:`flex`,alignItems:`center`,justifyContent:`center`,children:`Box 2`}),(0,r.jsx)(i,{width:`auto`,height:100,flex:1,display:`flex`,alignItems:`center`,justifyContent:`center`,children:`Box 3`})]}),(0,r.jsxs)(i,{width:`100%`,height:100,display:`flex`,justifyContent:`space-between`,style:{gap:`16px`},children:[(0,r.jsx)(i,{width:`auto`,height:100,flex:2,display:`flex`,alignItems:`center`,justifyContent:`center`,children:`Box 4 (flex: 2)`}),(0,r.jsx)(i,{width:`auto`,height:100,flex:1,display:`flex`,alignItems:`center`,justifyContent:`center`,children:`Box 5`})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 100,
    children: 'Default Box'
  }
} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>\r
      <Box width={100} height={100}>\r
        100x100\r
      </Box>\r
      <Box width={150} height={100}>\r
        150x100\r
      </Box>\r
      <Box width={200} height={100}>\r
        200x100\r
      </Box>\r
      <Box width={250} height={150}>\r
        250x150\r
      </Box>\r
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Box width="100%" height={60}>\r
        100% width\r
      </Box>\r
      <Box width="75%" height={60}>\r
        75% width\r
      </Box>\r
      <Box width="50%" height={60}>\r
        50% width\r
      </Box>\r
      <Box width="25%" height={60}>\r
        25% width\r
      </Box>\r
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
    gap: '24px'
  }}>\r
      <div>\r
        <div style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: 'bold'
      }}>\r
          Justify: flex-start\r
        </div>\r
        <Box width={400} height={80} display="flex" justifyContent="flex-start" alignItems="center">\r
          <div style={{
          padding: '8px',
          background: '#007bff',
          color: 'white',
          borderRadius: '4px'
        }}>Item 1</div>\r
          <div style={{
          padding: '8px',
          background: '#28a745',
          color: 'white',
          borderRadius: '4px'
        }}>Item 2</div>\r
          <div style={{
          padding: '8px',
          background: '#dc3545',
          color: 'white',
          borderRadius: '4px'
        }}>Item 3</div>\r
        </Box>\r
      </div>\r
\r
      <div>\r
        <div style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: 'bold'
      }}>\r
          Justify: center\r
        </div>\r
        <Box width={400} height={80} display="flex" justifyContent="center" alignItems="center">\r
          <div style={{
          padding: '8px',
          background: '#007bff',
          color: 'white',
          borderRadius: '4px'
        }}>Item 1</div>\r
          <div style={{
          padding: '8px',
          background: '#28a745',
          color: 'white',
          borderRadius: '4px'
        }}>Item 2</div>\r
          <div style={{
          padding: '8px',
          background: '#dc3545',
          color: 'white',
          borderRadius: '4px'
        }}>Item 3</div>\r
        </Box>\r
      </div>\r
\r
      <div>\r
        <div style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: 'bold'
      }}>\r
          Justify: space-between\r
        </div>\r
        <Box width={400} height={80} display="flex" justifyContent="space-between" alignItems="center">\r
          <div style={{
          padding: '8px',
          background: '#007bff',
          color: 'white',
          borderRadius: '4px'
        }}>Item 1</div>\r
          <div style={{
          padding: '8px',
          background: '#28a745',
          color: 'white',
          borderRadius: '4px'
        }}>Item 2</div>\r
          <div style={{
          padding: '8px',
          background: '#dc3545',
          color: 'white',
          borderRadius: '4px'
        }}>Item 3</div>\r
        </Box>\r
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
      <div>\r
        <div style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: 'bold'
      }}>\r
          Align: flex-start\r
        </div>\r
        <Box width={120} height={200} display="flex" justifyContent="center" alignItems="flex-start">\r
          <div style={{
          padding: '8px',
          background: '#007bff',
          color: 'white',
          borderRadius: '4px'
        }}>Top</div>\r
        </Box>\r
      </div>\r
\r
      <div>\r
        <div style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: 'bold'
      }}>\r
          Align: center\r
        </div>\r
        <Box width={120} height={200} display="flex" justifyContent="center" alignItems="center">\r
          <div style={{
          padding: '8px',
          background: '#28a745',
          color: 'white',
          borderRadius: '4px'
        }}>Middle</div>\r
        </Box>\r
      </div>\r
\r
      <div>\r
        <div style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: 'bold'
      }}>\r
          Align: flex-end\r
        </div>\r
        <Box width={120} height={200} display="flex" justifyContent="center" alignItems="flex-end">\r
          <div style={{
          padding: '8px',
          background: '#dc3545',
          color: 'white',
          borderRadius: '4px'
        }}>Bottom</div>\r
        </Box>\r
      </div>\r
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
    gap: '16px'
  }}>\r
      <div style={{
      display: 'flex',
      gap: '8px',
      width: '500px'
    }}>\r
        <Box width="auto" height={60} flex={1} display="flex" alignItems="center" justifyContent="center">\r
          flex: 1\r
        </Box>\r
        <Box width="auto" height={60} flex={2} display="flex" alignItems="center" justifyContent="center">\r
          flex: 2\r
        </Box>\r
        <Box width="auto" height={60} flex={1} display="flex" alignItems="center" justifyContent="center">\r
          flex: 1\r
        </Box>\r
      </div>\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box width={400} height={300} display="flex" justifyContent="center" alignItems="center">\r
      <Box width={300} height={200} display="flex" justifyContent="center" alignItems="center">\r
        <Box width={200} height={100} display="flex" justifyContent="center" alignItems="center">\r
          Nested Box\r
        </Box>\r
      </Box>\r
    </Box>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box width={350} height="auto" display="flex" style={{
    flexDirection: 'column',
    padding: '20px',
    gap: '16px'
  }}>\r
      <Box width="100%" height={60} display="flex" alignItems="center" justifyContent="space-between" style={{
      padding: '0 12px'
    }}>\r
        <div style={{
        fontWeight: 'bold',
        fontSize: '18px'
      }}>Card Title</div>\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Action</div>\r
      </Box>\r
      <Box width="100%" height={120} display="flex" alignItems="center" justifyContent="center">\r
        <div style={{
        textAlign: 'center',
        color: '#666'
      }}>Card Content Area</div>\r
      </Box>\r
      <Box width="100%" height={50} display="flex" alignItems="center" justifyContent="flex-end" style={{
      gap: '8px',
      padding: '0 12px'
    }}>\r
        <button style={{
        padding: '8px 16px',
        background: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>\r
          Confirm\r
        </button>\r
        <button style={{
        padding: '8px 16px',
        background: '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>\r
          Cancel\r
        </button>\r
      </Box>\r
    </Box>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box width={600} height="auto" display="flex" style={{
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Box width="100%" height={100} display="flex" justifyContent="space-between" style={{
      gap: '16px'
    }}>\r
        <Box width="auto" height={100} flex={1} display="flex" alignItems="center" justifyContent="center">\r
          Box 1\r
        </Box>\r
        <Box width="auto" height={100} flex={1} display="flex" alignItems="center" justifyContent="center">\r
          Box 2\r
        </Box>\r
        <Box width="auto" height={100} flex={1} display="flex" alignItems="center" justifyContent="center">\r
          Box 3\r
        </Box>\r
      </Box>\r
      <Box width="100%" height={100} display="flex" justifyContent="space-between" style={{
      gap: '16px'
    }}>\r
        <Box width="auto" height={100} flex={2} display="flex" alignItems="center" justifyContent="center">\r
          Box 4 (flex: 2)\r
        </Box>\r
        <Box width="auto" height={100} flex={1} display="flex" alignItems="center" justifyContent="center">\r
          Box 5\r
        </Box>\r
      </Box>\r
    </Box>
}`,...h.parameters?.docs?.source}}};const g=[`Default`,`Sizes`,`PercentageSizes`,`FlexHorizontal`,`FlexVertical`,`FlexProperty`,`Nested`,`CardLayout`,`GridLayout`];export{m as CardLayout,s as Default,u as FlexHorizontal,f as FlexProperty,d as FlexVertical,h as GridLayout,p as Nested,l as PercentageSizes,c as Sizes,g as __namedExportsOrder,o as default};