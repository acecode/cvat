// Copyright (C) 2019-2022 Intel Corporation
// Copyright (C) 2022-2023 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';
import React from 'react';
import { useLocation } from 'react-router';
import { Row, Col } from 'antd/lib/grid';
import Text from 'antd/lib/typography/Text';
import { useTranslation } from 'react-i18next';

import CreateTaskContent, { CreateTaskData } from './create-task-content';

interface Props {
    onCreate: (data: CreateTaskData, onProgress?: (status: string) => void) => Promise<any>;
}

export default function CreateTaskPage(props: Props): JSX.Element {
    const { onCreate } = props;
    const { t } = useTranslation();
    const location = useLocation();

    let projectId = null;
    const params = new URLSearchParams(location.search);
    if (params.get('projectId')?.match(/^[1-9]+[0-9]*$/)) {
        projectId = +(params.get('projectId') as string);
    }
    const many = params.get('many') === 'true';
    const handleCreate: typeof onCreate = (...onCreateParams) => onCreate(...onCreateParams);

    return (
        <Row justify='center' align='top' className='cvat-create-work-form-wrapper'>
            <Col md={20} lg={16} xl={14} xxl={9}>
                <Text className='cvat-title'>{t('create a new _type', { type: t('type.Task'), ns: 'error' })}</Text>
                <CreateTaskContent projectId={projectId} onCreate={handleCreate} many={many} />
            </Col>
        </Row>
    );
}
