import { RootState } from './../../store';
import { IUsersState } from './types';
import { createSelector } from '@reduxjs/toolkit';

const getUserState = (state: RootState ): IUsersState => state.users;

export const getMessage = createSelector([getUserState], (users: IUsersState) => users.message);