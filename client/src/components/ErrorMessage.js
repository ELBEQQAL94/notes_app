import React from 'react';
import { Alert } from 'reactstrap';

const ErrorMessage = ({message}) => (
    <Alert color="danger">{message}</Alert>
);

export default ErrorMessage;