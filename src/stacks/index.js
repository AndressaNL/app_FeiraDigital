import React, {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';

import {AppRoutes} from './AppRoutes';
import {MainTab} from './MainTab';

export function Routes() {
  const {signed} = useContext(AuthContext);

  return signed ? <MainTab /> : <AppRoutes />;
}
