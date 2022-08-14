import React from 'react';
import {Button, ButtonGroup} from '@chakra-ui/react';
import {useAuth0} from '@auth0/auth0-react';
type Props = {};

export default function LogoutButton({}: Props) {
  const {logout} = useAuth0();
  return (
    <Button onClick={() => logout({returnTo: window.location.origin})}>
      LogoutButton
    </Button>
  );
}
