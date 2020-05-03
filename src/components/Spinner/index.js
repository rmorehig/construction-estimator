import { FaSpinner } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(FaSpinner)`
  animation: ${rotate} 2s linear infinite;
`;

Spinner.defaultProps = {
  'aria-label': 'loading'
};

export default Spinner;
