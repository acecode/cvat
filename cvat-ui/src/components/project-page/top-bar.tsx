// Copyright (C) 2020-2022 Intel Corporation
// Copyright (C) 2024 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import { useHistory } from 'react-router';
import { Row, Col } from 'antd/lib/grid';
import { LeftOutlined, MoreOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button';
import Dropdown from 'antd/lib/dropdown';
import Text from 'antd/lib/typography/Text';
import { useTranslation } from 'react-i18next';

import { Project } from 'reducers';
import ActionsMenu from 'components/projects-page/actions-menu';

interface DetailsComponentProps {
    projectInstance: Project;
}

export default function ProjectTopBar(props: DetailsComponentProps): JSX.Element {
    const { projectInstance } = props;

    const history = useHistory();
    const { t: tTopBar } = useTranslation('projects', { keyPrefix: 'project.top-bar' });

    return (
        <Row className='cvat-task-top-bar' justify='space-between' align='middle'>
            <Col>
                <Button
                    className='cvat-back-to-projects-button'
                    onClick={() => history.push('/projects')}
                    type='link'
                    size='large'
                >
                    <LeftOutlined />
                    {tTopBar('back-to-projects')}
                </Button>
            </Col>
            <Col className='cvat-project-top-bar-actions'>
                <Dropdown
                    destroyPopupOnHide
                    trigger={['click']}
                    overlay={<ActionsMenu projectInstance={projectInstance} />}
                >
                    <Button size='middle' className='cvat-project-page-actions-button'>
                        <Text className='cvat-text-color'>{tTopBar('Actions')}</Text>
                        <MoreOutlined className='cvat-menu-icon' />
                    </Button>
                </Dropdown>
            </Col>
        </Row>
    );
}
