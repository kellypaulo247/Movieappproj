import {useEffect, useState} from 'react';

import {useApiFetch} from '../../hook/api-fetch';
import {endPoints} from '../../api/endpoints';
import {
  CreateSessionRequest,
  CreateSessionResponse,
  CreateTokenResponse,
  LoginSessionRequest,
  LoginSessionResponse,
} from '../../interfaces/auth';

import {useApiPost} from '../../utils';
import {storeSession} from '../../utils/storage';

import {useAuthContext} from '../../context/auth';

export const useLoginHook = () => {
  const {updateLoggedIn} = useAuthContext();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [requestToken, setRequestToken] = useState<CreateTokenResponse | null>(
    null,
  );
  const [loginToken, setLoginToken] = useState<LoginSessionResponse | null>(
    null,
  );
  const [sessionId, setSessionId] = useState<CreateSessionResponse | null>(
    null,
  );
  async function GetToken() {
    const resToken = await useApiFetch<CreateTokenResponse>(
      endPoints.requestToken,
    );
    setRequestToken(resToken.data);
    console.log(resToken.data);
  }

  const handleLogin = async () => {
    try {
      if (requestToken) {
        const bodyParamData: LoginSessionRequest = {
          username: form.username, // kelsonPaulo
          password: form.password, // CodingTesting123
          request_token: requestToken?.request_token!,
        };

        const resLogin = await useApiPost<
          LoginSessionResponse,
          LoginSessionRequest
        >({
          data: bodyParamData,
          url: endPoints.login,
        });

        if (resLogin.status === 200) {
          setLoginToken(resLogin.data);
          console.log(resLogin.data, 'You are in');

          // Proceed to create session
          const bodySessionData: CreateSessionRequest = {
            request_token: requestToken?.request_token!,
          };

          const resSession = await useApiPost<
            CreateSessionResponse,
            CreateSessionRequest
          >({
            data: bodySessionData,
            url: endPoints.session,
          });
          setSessionId(resSession.data);
          storeSession(resSession.data.session_id);

          updateLoggedIn?.(true);
        } else {
          // Handle non-200 response
          console.error('Login failed with status:', resLogin.status);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    GetToken();
  }, []);

  return {
    form,
    setForm,
    handleLogin,
  };
};
