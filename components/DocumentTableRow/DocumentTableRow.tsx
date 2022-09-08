import React from 'react';
import { Button } from 'react-bootstrap';

// @ts-ignore TODO: Add types
export const DocumentTableRow = ({ name, removeDocFromList }) => (
  <tr key={name}>
  <td>
    {name}
  </td>
  <td>
    <Button variant="danger" data-testid={`delete-${name}`} onClick={() => removeDocFromList(name)}>Delete me</Button>
  </td>
</tr>
);