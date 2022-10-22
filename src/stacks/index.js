import React, {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';

import {AppRoutes} from './AppRoutes';
import {MainStack} from './MainStack';

export function Routes() {
  const {signed} = useContext(AuthContext);

  return signed ? <MainStack /> : <AppRoutes />;
}
