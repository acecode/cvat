import React from 'react';
import { useTranslation } from 'react-i18next';
import { User } from 'cvat-core-wrapper';
import { useDispatch } from 'react-redux';
import { SwitchLocaleButton } from './change-locale/change-locale';
import ProjectTopBar from './project-page/top-bar';

export default function I18nDemo(): React.JSX.Element {
    const { t } = useTranslation();
    console.log(t('connecting'));
    const user = new User({
        id: 1,
        username: 'demo',
        email: 'demo@demo.com',
        first_name: 'demo',
        last_name: 'demo',
        groups: ['user'],
        last_login: '2024-01-01 08:00:00',
        date_joined: '2024-01-01 08:00:00',
        is_staff: true,
        is_superuser: true,
        is_active: true,
        email_verification_required: false,
        url: '',
    });
    const dispatch = useDispatch();
    function login(): void {
        dispatch({
            type: 'AUTHORIZED_SUCCESS',
            payload: { user },
        });
    }
    return (
        <>
            <h2>
                I18n Demo
                <SwitchLocaleButton />
            </h2>
            <div>
                <button type='button' onClick={() => login()}>Login</button>
            </div>
            <ProjectTopBar />
        </>
    );
}
