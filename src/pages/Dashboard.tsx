import {useAuth0} from '@auth0/auth0-react';
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  Button,
  useDisclosure,
  Center,
} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import LoginButton from '~/components/LoginButton';
import {AUTH_DOMAIN} from '~/configs';
import {setAccessToken} from '~/slices/globalSlice';
import {useAppSelector, useAppDispatch} from '../app/hooks';

export default function Dashboard() {
  const {isAuthenticated, user, getAccessTokenSilently, isLoading} = useAuth0();
  const {onClose} = useDisclosure();
  const dispatch = useAppDispatch();
  const [userMetaData, setUserMetaData] = useState('');
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = AUTH_DOMAIN;
      try {
        console.log('!23');
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user',
        });
        dispatch(setAccessToken(accessToken));
      } catch (e: any) {
        console.log(e.message);
      }
    };
    getUserMetadata();
  }, [getAccessTokenSilently]);
  const global = useAppSelector((state) => state.global);
  console.log(global);
  return (
    <div>
      <Modal
        isCentered={true}
        isOpen={!isLoading && !isAuthenticated}
        onClose={onClose}
      >
        <ModalContent>
          <ModalHeader>You are not verify! Please Login</ModalHeader>
          <ModalBody>
            <Center>
              <LoginButton />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
