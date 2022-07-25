import Alert from 'react-bootstrap/Alert';

interface ErrorProps {
  message: string;
}

const ErrorAlert: React.FC<ErrorProps> = ({ message }) => (
  <Alert key={'danger'} variant={'danger'}>
    {message}
  </Alert>
);

export default ErrorAlert;
