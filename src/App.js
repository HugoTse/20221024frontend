import '@aws-amplify/ui-react/styles.css';

import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
  Grid,
  TextField,
  Alert,
  Flex,
  Badge,
  Text,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  ThemeProvider,
  Theme,
  SliderField,
  TextAreaField,
  SelectField,
  SwitchField,
  useTheme,
  Divider,
  ToggleButton,
  TabItem,
  Tabs
} from "@aws-amplify/ui-react";

import React, {
  useState,
  useEffect,
} from "react";


// Table theme
const theme: Theme = {
  name: 'table-theme',
  tokens: {
    components: {
      table: {
        row: {
          hover: {
            backgroundColor: { value: '{colors.blue.20}' },
          },

          striped: {
            backgroundColor: { value: '{colors.blue.10}' },
          },
        },

        header: {
          color: { value: '{colors.blue.80}' },
          fontSize: { value: '{fontSizes.xl}' },
        },

        data: {
          fontWeight: { value: '{fontWeights.semibold}' },
        },
      },
    },
  },
};

function App() {
  return (
    <div className="App">

      <Heading level={1}>Ransomware Defender</Heading>
      <h4><i>"Using processes, people, and technology to keep your files safe"</i></h4>


       <ThemeProvider theme={theme} colorMode="light">
          <Table highlightOnHover variation="striped">
            <TableHead>
              <TableRow>
                <TableCell as="th">FILE</TableCell>
                <TableCell as="th">TIMESTAMP</TableCell>
                <TableCell as="th">HASH</TableCell>
                <TableCell as="th">USER</TableCell>
                <TableCell as="th"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {records.length > 0 ? (
                records.map((file) => 
                <>
              <TableRow>
                <TableCell>
                  <a href={'https://20221004a.s3.us-west-1.amazonaws.com/'+file.s3Filename.S}>{file.file.S}</a>
                </TableCell>
                <TableCell>
                  {file.timestamp.S}
                </TableCell>
                <TableCell>
                  {file.hash.S}
                </TableCell>
                <TableCell>
                  {file.user.S}
                </TableCell>
                <TableCell>
                  <Button>Delete</Button>
                </TableCell>
              </TableRow>
                </>)) : (<></>) } */}
            </TableBody>
          </Table>
        </ThemeProvider>
    </div>
  );
}

export default App;
