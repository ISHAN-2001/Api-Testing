import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({body , setbody}) {
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
    //  setbody(newValue);
  };

  return (
    <div className="Tabs">
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Query" {...a11yProps(0)} />
          <Tab label="Headers" {...a11yProps(1)} />
          <Tab label="Body" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <textarea className="obj" name="query" id="query" cols="30" rows="30" placeholder="Query"></textarea>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <textarea className="obj" name="query" id="query" cols="10" rows="10" placeholder="Headers"></textarea>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <textarea className="obj" name="query" id="query" cols="10" rows="10" placeholder="body" spellCheck="false"
          value={body} onChange={(e)=> setbody(e.target.value)} 
        ></textarea>
      </TabPanel>
    </Box>
    </div>
  );
}
