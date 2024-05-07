// Copyright (C) 2023 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';

import React from 'react';
import { useHistory } from 'react-router';
import { Row, Col } from 'antd/lib/grid';
import Text from 'antd/lib/typography/Text';
import Button from 'antd/lib/button';
import { useTranslation } from 'react-i18next';

interface Props {
    instanceType: 'task' | 'project';
    id: number;
}

function MdGuideControl(props: Props): JSX.Element {
    const { instanceType, id } = props;
    const { t, i18n } = useTranslation();
    const history = useHistory();
    const type = `${instanceType[0].toUpperCase()}${instanceType.slice(1)}`;
    const typeKey = `type.${type}`;

    return (
        <Row justify='start' className='cvat-md-guide-control-wrapper'>
            <Col span={24}>
                <Text strong className='cvat-text-color'>
                    {t(
                        '_type description',
                        {
                            type: i18n.exists(typeKey) ? t(typeKey) : type,
                        },
                    )}
                </Text>
                <br />
                <Button
                    onClick={() => {
                        history.push(`/${instanceType}s/${id}/guide`);
                    }}
                >
                    {t('Edit')}
                </Button>
            </Col>
        </Row>
    );
}

export default React.memo(MdGuideControl);
