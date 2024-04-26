// Copyright (C) 2020-2022 Intel Corporation
// Copyright (C) 2024 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { Row, Col } from 'antd/lib/grid';
import { LeftOutlined, MoreOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button';
import Dropdown from 'antd/lib/dropdown';
import Text from 'antd/lib/typography/Text';
import { useTranslation } from 'react-i18next';

import ActionsMenuContainer from 'containers/actions-menu/actions-menu';

interface DetailsComponentProps {
    taskInstance: any;
}

export default function DetailsComponent(props: DetailsComponentProps): JSX.Element {
    const { taskInstance } = props;

    const history = useHistory();
    const { t } = useTranslation();
    const onViewAnalytics = useCallback(() => {
        history.push(`/tasks/${taskInstance.id}/analytics`);
    }, [history]);

    return (
        <Row className='cvat-task-top-bar' justify='space-between' align='middle'>
            <Col>
                {taskInstance.projectId ? (
                    <Button
                        className='cvat-back-to-project-button'
                        onClick={() => history.push(`/projects/${taskInstance.projectId}`)}
                        type='link'
                        size='large'
                    >
                        <LeftOutlined />
                        {t('back-to-type', { type: t('type.project') })}
                    </Button>
                ) : (
                    <Button
                        className='cvat-back-to-tasks-button'
                        onClick={() => history.push('/tasks')}
                        type='link'
                        size='large'
                    >
                        <LeftOutlined />
                        {t('back-to-type', { type: t('type.tasks') })}
                    </Button>
                )}
            </Col>
            <Col>
                <Dropdown
                    trigger={['click']}
                    destroyPopupOnHide
                    overlay={(
                        <ActionsMenuContainer
                            taskInstance={taskInstance}
                            onViewAnalytics={onViewAnalytics}
                        />
                    )}
                >
                    <Button size='middle' className='cvat-task-page-actions-button'>
                        <Text className='cvat-text-color'>{t('Actions')}</Text>
                        <MoreOutlined className='cvat-menu-icon' />
                    </Button>
                </Dropdown>
            </Col>
        </Row>
    );
}
