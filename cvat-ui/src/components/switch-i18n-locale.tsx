import React from 'react';
import Select from 'antd/lib/select';
import Button from 'antd/lib/button';
import {
    TranslationOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import i18n, { supportedLanguages } from 'i18n';

import Modal from 'antd/lib/modal';
import CVATTooltip from './common/cvat-tooltip';

export default function SwitchLocale(): JSX.Element {
    const { t } = useTranslation('base');
    const options = Object.entries(supportedLanguages)
        .map(([key, value]) => ({ value: key, label: value }));
    const [locale, setLocale] = React.useState<string>(i18n.language);
    const [show, setShow] = React.useState(false);

    // function showModal() {
    //     Modal.info({
    //         title: t('switch-locale', 'Switch Locale'),
    //         content: (
    //             <>
    //                 {locale}
    //                 <Select
    //                     value={locale}
    //                     options={options}
    //                     onChange={(value) => {
    //                         console.log('change', value);
    //                         setLocale(value);
    //                     }}
    //                 />
    //             </>
    //         ),
    //     });
    // }
    return (
        <CVATTooltip overlay={t('switch-locale', 'Switch Locale')}>
            <Button
                icon={<TranslationOutlined />}
                size='large'
                className='cvat-switch-i18n-locale-button cvat-header-button'
                type='text'
                onClick={(): void => setShow(true)}
            />
            <Modal
                title={t('switch-locale', 'Switch Locale')}
                mask
                visible={show}
                onOk={() => {
                    console.log(i18n.language, locale);
                    if (locale !== i18n.language) {
                        i18n.changeLanguage(locale);
                    }
                    setShow(false);
                }}
                width={300}
                onCancel={() => setShow(false)}
                okText={t('base:button.OK')}
            >
                <Select
                    value={locale}
                    options={options}
                    onChange={(value) => {
                        console.log('change', value);
                        setLocale(value);
                    }}
                />
            </Modal>
        </CVATTooltip>
    );
}
