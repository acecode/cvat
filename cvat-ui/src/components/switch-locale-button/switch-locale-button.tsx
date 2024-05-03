import React, { useState } from 'react';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import Space from 'antd/lib/space';
import Radio from 'antd/lib/radio';
import type { RadioChangeEvent } from 'antd';
import {
    TranslationOutlined,
} from '@ant-design/icons';

import { useTranslation } from 'react-i18next';

interface SwitchLocaleButtonProps {
    style?: { color: string };
}

export function SwitchLocaleButton({ style }: SwitchLocaleButtonProps): React.JSX.Element {
    const { t, i18n } = useTranslation();
    const [locale, setLocale] = useState(i18n.language);
    const [open, setOpen] = useState(false);
    const list = (i18n.options.supportedLngs || []).filter((lang) => lang !== 'cimode');
    return (
        <span>
            <Button
                icon={<TranslationOutlined />}
                size='large'
                type='link'
                className='cvat-open-i18n-button cvat-header-button'
                onClick={(): void => setOpen(true)}
                style={style}
            />
            <Modal
                title={t('modal-switch-locale-button.title')}
                visible={open}
                onOk={() => {
                    setOpen(false);
                    i18n.changeLanguage(locale);
                }}
                onCancel={(): void => setOpen(false)}
            >
                <Radio.Group
                    defaultValue={locale}
                    onChange={(e: RadioChangeEvent) => {
                        console.log('change', e.target.value);
                        setLocale(e.target.value);
                    }}
                >
                    <Space direction='vertical'>
                        {list.map(
                            (language) => (
                                <Radio
                                    key={language}
                                    type={language === locale ? 'primary' : 'default'}
                                    value={language}
                                >
                                    {language}
                                </Radio>
                            ),
                        )}
                    </Space>
                </Radio.Group>
            </Modal>
        </span>
    );
}
