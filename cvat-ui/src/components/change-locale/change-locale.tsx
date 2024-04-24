import React, { useState } from 'react';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';
import {
    TranslationOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export function SwitchLocaleButton(): React.JSX.Element {
    const { t, i18n } = useTranslation();
    const [locale, setLocale] = useState(i18n.language);
    const list = (i18n.options.supportedLngs || []).filter((lang) => lang !== 'cimode');
    return (
        <Button
            icon={<TranslationOutlined />}
            size='large'
            className='cvat-open-i18n-button cvat-header-button'
            type='link'
            onClick={() => Modal.confirm({
                title: t('modal-change-locale.title'),
                content: (
                    list.map(
                        (language) => (
                            <Button
                                key={language}
                                type={language === locale ? 'primary' : 'default'}
                                onClick={() => setLocale(language)}
                            >
                                {language}
                            </Button>
                        ),
                    )
                ),
                onOk() {
                    console.log('set locale', locale);
                    i18n.changeLanguage(locale);
                },
            })}
        />
    );
}
