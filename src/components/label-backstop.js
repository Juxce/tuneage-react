import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useFetchGet } from '../hooks/useFetchGet';

// REFACTORING from class to function component, to take advantage of custom hooks

const LabelBackstopNext = () => {
  const [approvals, setApprovals] = useState([]);
};

export default LabelBackstopNext;
