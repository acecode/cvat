// Copyright (C) 2020-2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';
import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import Text from 'antd/lib/typography/Text';
import { useTranslation } from 'react-i18next';

import CreateProjectContent from './create-project-content';

function CreateProjectPageComponent(): JSX.Element {
    const { t: tProject } = useTranslation('project');
    return (
        <Row justify='center' align='top' className='cvat-create-work-form-wrapper'>
            <Col md={20} lg={16} xl={14} xxl={9}>
                <Text className='cvat-title'>{tProject('Create a new project')}</Text>
                <CreateProjectContent />
            </Col>
        </Row>
    );
}

export default React.memo(CreateProjectPageComponent);
