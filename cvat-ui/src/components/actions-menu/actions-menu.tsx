// Copyright (C) 2020-2022 Intel Corporation
// Copyright (C) 2022-2024 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';
import React, { useCallback } from 'react';
import Modal from 'antd/lib/modal';
import { LoadingOutlined } from '@ant-design/icons';
import { DimensionType, CVATCore } from 'cvat-core-wrapper';
import { useTranslation } from 'react-i18next';
import Menu, { MenuInfo } from 'components/dropdown-menu';
import { usePlugins } from 'utils/hooks';
import { CombinedState } from 'reducers';

type AnnotationFormats = Awaited<ReturnType<CVATCore['server']['formats']>>;

interface Props {
    taskID: number;
    projectID: number | null;
    taskMode: string;
    bugTracker: string;
    loaders: AnnotationFormats['loaders'];
    dumpers: AnnotationFormats['dumpers'];
    inferenceIsActive: boolean;
    taskDimension: DimensionType;
    backupIsActive: boolean;
    onClickMenu: (params: MenuInfo) => void;
}

export enum Actions {
    LOAD_TASK_ANNO = 'load_task_anno',
    EXPORT_TASK_DATASET = 'export_task_dataset',
    DELETE_TASK = 'delete_task',
    RUN_AUTO_ANNOTATION = 'run_auto_annotation',
    MOVE_TASK_TO_PROJECT = 'move_task_to_project',
    OPEN_BUG_TRACKER = 'open_bug_tracker',
    BACKUP_TASK = 'backup_task',
    VIEW_ANALYTICS = 'view_analytics',
}

function ActionsMenuComponent(props: Props): JSX.Element {
    const {
        taskID,
        projectID,
        bugTracker,
        inferenceIsActive,
        backupIsActive,
        onClickMenu,
    } = props;
    const { t } = useTranslation();
    const { t: tTaskActions } = useTranslation('task', { keyPrefix: 'actions' });

    const plugins = usePlugins((state: CombinedState) => state.plugins.components.taskActions.items, props);

    const onClickMenuWrapper = useCallback(
        (params: MenuInfo) => {
            if (!params) {
                return;
            }

            if (params.key === Actions.DELETE_TASK) {
                Modal.confirm({
                    title: t('deleteModal.title', { item: `${t('type.Task')} ${taskID}` }),
                    content: t('deleteModal.content', { data: `${t('type.Images')}, ${t('type.Annotations')}` }),
                    className: 'cvat-modal-confirm-delete-task',
                    onOk: () => {
                        onClickMenu(params);
                    },
                    okButtonProps: {
                        type: 'primary',
                        danger: true,
                    },
                    okText: t('Delete'),
                });
            } else {
                onClickMenu(params);
            }
        },
        [taskID],
    );

    const menuItems: [JSX.Element, number][] = [];
    menuItems.push([(
        <Menu.Item key={Actions.LOAD_TASK_ANNO}>{tTaskActions('Upload annotations')}</Menu.Item>
    ), 0]);

    menuItems.push([(
        <Menu.Item key={Actions.EXPORT_TASK_DATASET}>{tTaskActions('Export task dataset')}</Menu.Item>
    ), 10]);

    if (bugTracker) {
        menuItems.push([(
            <Menu.Item key={Actions.OPEN_BUG_TRACKER}>{tTaskActions('Open bug tracker')}</Menu.Item>
        ), 20]);
    }

    menuItems.push([(
        <Menu.Item disabled={inferenceIsActive} key={Actions.RUN_AUTO_ANNOTATION}>
            {tTaskActions('Automatic annotation')}
        </Menu.Item>
    ), 30]);

    menuItems.push([(
        <Menu.Item
            key={Actions.BACKUP_TASK}
            disabled={backupIsActive}
            icon={backupIsActive && <LoadingOutlined id='cvat-backup-task-loading' />}
        >
            {tTaskActions('Backup Task')}
        </Menu.Item>
    ), 40]);

    menuItems.push([(
        <Menu.Item
            key={Actions.VIEW_ANALYTICS}
        >
            {tTaskActions('View analytics')}
        </Menu.Item>
    ), 50]);

    if (projectID === null) {
        menuItems.push([(
            <Menu.Item key={Actions.MOVE_TASK_TO_PROJECT}>{tTaskActions('Move to project')}</Menu.Item>
        ), 60]);
    }

    menuItems.push([(
        <React.Fragment key={Actions.DELETE_TASK}>
            <Menu.Divider />
            <Menu.Item key={Actions.DELETE_TASK}>{t('Delete')}</Menu.Item>
        </React.Fragment>
    ), 70]);

    menuItems.push(
        ...plugins.map(({ component: Component, weight }, index) => {
            const menuItem = Component({ key: index, targetProps: props });
            return [menuItem, weight] as [JSX.Element, number];
        }),
    );

    return (
        <Menu
            selectable={false}
            className='cvat-actions-menu'
            onClick={onClickMenuWrapper}
        >
            { menuItems.sort((menuItem1, menuItem2) => menuItem1[1] - menuItem2[1])
                .map((menuItem) => menuItem[0]) }
        </Menu>
    );
}

export default React.memo(ActionsMenuComponent);
