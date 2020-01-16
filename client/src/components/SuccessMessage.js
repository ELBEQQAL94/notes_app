import React from 'react';
import { Alert } from 'reactstrap';

const ErrorMessage = ({message}) => (
    <Alert color="success">{message}</Alert>
);

export default ErrorMessage;