// Copyright (C) 2020-2022 Intel Corporation
// Copyright (C) 2022-2023 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd/lib/grid';
import Spin from 'antd/lib/spin';
import Result from 'antd/lib/result';
import notification from 'antd/lib/notification';
import { useTranslation } from 'react-i18next';

import { getInferenceStatusAsync } from 'actions/models-actions';
import { getCore, Task, Job } from 'cvat-core-wrapper';
import JobListComponent from 'components/task-page/job-list';
import ModelRunnerModal from 'components/model-runner-modal/model-runner-dialog';
import CVATLoadingSpinner from 'components/common/loading-spinner';
import MoveTaskModal from 'components/move-task-modal/move-task-modal';
import { CombinedState } from 'reducers';
import TopBarComponent from './top-bar';
import DetailsComponent from './details';

const core = getCore();

function TaskPageComponent(): JSX.Element {
    const history = useHistory();
    const id = +useParams<{ id: string }>().id;
    const dispatch = useDispatch();
    const [taskInstance, setTaskInstance] = useState<Task | null>(null);
    const [fetchingTask, setFetchingTask] = useState(true);
    const [updatingTask, setUpdatingTask] = useState(false);
    const mounted = useRef(false);
    const { t: tError } = useTranslation('error');

    const deletes = useSelector((state: CombinedState) => state.tasks.activities.deletes);

    const receieveTask = (): void => {
        if (Number.isInteger(id)) {
            core.tasks.get({ id })
                .then(([task]: Task[]) => {
                    if (task && mounted.current) {
                        setTaskInstance(task);
                    }
                }).catch((error: Error) => {
                    if (mounted.current) {
                        notification.error({
                            message: tError('api-no-info', { type: 'task' }),
                            description: error.toString(),
                        });
                    }
                }).finally(() => {
                    if (mounted.current) {
                        setFetchingTask(false);
                    }
                });
        } else {
            notification.error({
                message: tError('api-no-info', { type: 'task' }),
                description: tError('api-not-valid-id', { type: 'task', id }),
            });
            setFetchingTask(false);
        }
    };

    useEffect(() => {
        receieveTask();
        dispatch(getInferenceStatusAsync());
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);

    useEffect(() => {
        if (taskInstance && id in deletes && deletes[id]) {
            history.push('/tasks');
        }
    }, [deletes]);

    if (fetchingTask) {
        return <Spin size='large' className='cvat-spinner' />;
    }

    if (!taskInstance) {
        return (
            <Result
                className='cvat-not-found'
                status='404'
                title={tError('api-err-unknown', { type: 'task' })}
                subTitle={tError('api-ensure-exist-and-access')}
            />
        );
    }

    const onUpdateTask = (task: Task): Promise<void> => (
        new Promise((resolve, reject) => {
            setUpdatingTask(true);
            task.save().then((updatedTask: Task) => {
                if (mounted.current) {
                    setTaskInstance(updatedTask);
                }
                resolve();
            }).catch((error: Error) => {
                notification.error({
                    message: tError('can-not-update', { type: 'task' }),
                    className: 'cvat-notification-notice-update-task-failed',
                    description: error.toString(),
                });
                reject();
            }).finally(() => {
                if (mounted.current) {
                    setUpdatingTask(false);
                }
            });
        })
    );

    const onJobUpdate = (job: Job): void => {
        setUpdatingTask(true);
        job.save().then(() => {
            if (mounted.current) {
                receieveTask();
            }
        }).catch((error: Error) => {
            notification.error({
                message: tError('can-not-update', { type: 'job' }),
                description: error.toString(),
            });
        }).finally(() => {
            if (mounted.current) {
                setUpdatingTask(false);
            }
        });
    };

    return (
        <div className='cvat-task-page'>
            { updatingTask ? <CVATLoadingSpinner size='large' /> : null }
            <Row
                justify='center'
                align='top'
                className='cvat-task-details-wrapper'
            >
                <Col span={22} xl={18} xxl={14}>
                    <TopBarComponent taskInstance={taskInstance} />
                    <DetailsComponent task={taskInstance} onUpdateTask={onUpdateTask} />
                    <JobListComponent task={taskInstance} onUpdateJob={onJobUpdate} />
                </Col>
            </Row>
            <ModelRunnerModal />
            <MoveTaskModal onUpdateTask={onUpdateTask} />
        </div>
    );
}

export default React.memo(TaskPageComponent);
