import api from '../../api/config';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tokenService } from '../../utils/token.service';

const initialState = {
    user: null,
    isLoading: false,
    isAuth: false,
};

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await api.post('auth/login', { email, password });
            //TODO: toast('Login Successful', { type: 'success' });
            return res?.data;
        } catch (error) {
            // toast(error.response.data.message, { type: 'error' });
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const signUp = createAsyncThunk(
    'auth/signup',
    async (signUpData, { rejectWithValue }) => {
        try {
            const res = await api.post('auth/register', signUpData);
            //TODO: toast('Sign Up Successful', { type: 'success' });
            return res?.data;
        } catch (error) {
            //TODO: toast(error.response.data.message, { type: 'error' });
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        const refreshToken = tokenService.getLocalRefreshToken();
        const res = await api.post('auth/logout', {
            refreshToken: refreshToken,
        });
        //TODO: toast('Logout Successful', { type: 'success' });
        return res?.data;
    } catch (error) {
        //TODO: toast(error.response.data.message, { type: 'error' });
        return error.response.data.message;
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuth: () => ({
            ...initialState,
        }),
        authPending: (state) => ({
            ...state,
            isLoading: true,
        }),
        authSuccess: (state, { payload }) => ({
            ...state,
            isLoading: false,
            user: payload,
            isAuth: true,
        }),
        authFail: (state) => ({
            ...state,
            ...initialState,
        }),
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isAuth = true;
                state.user = payload;
                tokenService.setUser(payload);
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
                state.isAuth = false;
            })
            .addCase(signUp.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signUp.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isAuth = true;
                state.user = payload;
                tokenService.setUser(payload);
            })
            .addCase(signUp.rejected, (state) => {
                state.isLoading = false;
                state.isAuth = false;
                state.user = null;
            })
            .addCase(logOut.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.isLoading = false;
                state.isAuth = false;
                state.user = null;
                tokenService.removeUser();
            })
            .addCase(logOut.rejected, (state) => {
                state.isLoading = false;
                state.isAuth = false;
            });
    },
});

export const { authPending, authSuccess, authFail, resetAuth } =
    authSlice.actions;
export default authSlice.reducer;
