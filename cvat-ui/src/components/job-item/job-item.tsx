// Copyright (C) 2023-2024 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CombinedState } from 'reducers';
import moment from 'moment';
import { Col, Row } from 'antd/lib/grid';
import Card from 'antd/lib/card';
import Text from 'antd/lib/typography/Text';
import Tag from 'antd/lib/tag';
import Select from 'antd/lib/select';
import Dropdown from 'antd/lib/dropdown';
import Icon from '@ant-design/icons';
import {
    BorderOutlined,
    LoadingOutlined, MoreOutlined, ProjectOutlined, QuestionCircleOutlined,
} from '@ant-design/icons/lib/icons';
import { DurationIcon, FramesIcon } from 'icons';
import {
    Job, JobStage, JobType, Task, User,
} from 'cvat-core-wrapper';
import { useIsMounted } from 'utils/hooks';
import { useTranslation } from 'react-i18next';

import UserSelector from 'components/task-page/user-selector';
import CVATTooltip from 'components/common/cvat-tooltip';
import JobActionsMenu from './job-actions-menu';

interface Props {
    job: Job;
    task: Task;
    onJobUpdate: (job: Job) => void;
}

function ReviewSummaryComponent({ jobInstance }: { jobInstance: any }): JSX.Element {
    const [summary, setSummary] = useState<Record<string, any> | null>(null);
    const [error, setError] = useState<any>(null);
    const isMounted = useIsMounted();
    const { t: tJob } = useTranslation('job');

    useEffect(() => {
        setError(null);
        jobInstance
            .issues(jobInstance.id)
            .then((issues: any[]) => {
                if (isMounted()) {
                    setSummary({
                        issues_unsolved: issues.filter((issue) => !issue.resolved).length,
                        issues_resolved: issues.filter((issue) => issue.resolved).length,
                    });
                }
            })
            .catch((_error: any) => {
                if (isMounted()) {
                    // eslint-disable-next-line
                    console.log(_error);
                    setError(_error);
                }
            });
    }, []);

    if (!summary) {
        if (error) {
            if (error.toString().includes('403')) {
                return <p>{tJob('no-permissions')}</p>;
            }

            return <p>{tJob('err-fetch')}</p>;
        }

        return (
            <>
                <p>{tJob('loading')}</p>
                <LoadingOutlined />
            </>
        );
    }

    return (
        <table className='cvat-review-summary-description'>
            <tbody>
                <tr>
                    <td>
                        <Text strong>{tJob('unsolved-issues')}</Text>
                    </td>
                    <td>{summary.issues_unsolved}</td>
                </tr>
                <tr>
                    <td>
                        <Text strong>{tJob('resolved-issues')}</Text>
                    </td>
                    <td>{summary.issues_resolved}</td>
                </tr>
            </tbody>
        </table>
    );
}

function JobItem(props: Props): JSX.Element {
    const { job, task, onJobUpdate } = props;
    const { stage, id } = job;
    const created = moment(job.createdDate);
    const updated = moment(job.updatedDate);
    const now = moment(moment.now());
    const deletes = useSelector((state: CombinedState) => state.jobs.activities.deletes);
    const deleted = id in deletes ? deletes[id] === true : false;
    const { t: tJob } = useTranslation('job');
    const style = {};
    if (deleted) {
        (style as any).pointerEvents = 'none';
        (style as any).opacity = 0.5;
    }
    const frameCountPercent = ((job.frameCount / (task.size || 1)) * 100).toFixed(0);
    const frameCountPercentRepresentation = frameCountPercent === '0' ? '<1' : frameCountPercent;
    return (
        <Col span={24}>
            <Card className='cvat-job-item' style={{ ...style }} data-row-id={job.id}>
                <Row>
                    <Col span={7}>
                        <Row>
                            <Col>
                                <Link to={`/tasks/${job.taskId}/jobs/${job.id}`}>{`${tJob('job')} #${job.id}`}</Link>
                            </Col>
                            {
                                job.type === JobType.GROUND_TRUTH && (
                                    <Col offset={1}>
                                        <Tag color='#ED9C00'>{tJob('ground-truth')}</Tag>
                                    </Col>
                                )
                            }
                        </Row>
                        <Row className='cvat-job-item-dates-info'>
                            <Col>
                                <Text>{tJob('$t(created-on) ')}</Text>
                                <Text type='secondary'>{`${created.format('MMMM Do YYYY HH:mm')}`}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text>{tJob('$t(last-updated) ')}</Text>
                                <Text type='secondary'>{`${updated.format('MMMM Do YYYY HH:mm')}`}</Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={7}>
                        <Row className='cvat-job-item-selects' justify='space-between'>
                            <Col>
                                <Row>
                                    <Col className='cvat-job-item-select'>
                                        <Row>
                                            <Text>
                                                {tJob('$t(Assignee): ')}
                                            </Text>
                                        </Row>
                                        <UserSelector
                                            className='cvat-job-assignee-selector'
                                            value={job.assignee}
                                            onSelect={(user: User | null): void => {
                                                if (job?.assignee?.id === user?.id) return;
                                                job.assignee = user;
                                                onJobUpdate(job);
                                            }}
                                        />
                                    </Col>
                                    <Col className='cvat-job-item-select'>
                                        <Row justify='space-between' align='middle'>
                                            <Col>
                                                <Text>
                                                    {tJob('$t(Stage): ')}
                                                </Text>
                                            </Col>
                                            <Col>
                                                <CVATTooltip title={<ReviewSummaryComponent jobInstance={job} />}>
                                                    <QuestionCircleOutlined />
                                                </CVATTooltip>
                                            </Col>
                                        </Row>
                                        <Select
                                            className='cvat-job-item-stage'
                                            value={stage}
                                            onChange={(newValue: JobStage) => {
                                                job.stage = newValue;
                                                onJobUpdate(job);
                                            }}
                                        >
                                            <Select.Option value={JobStage.ANNOTATION}>
                                                {tJob('Stages.ANNOTATION')}
                                            </Select.Option>
                                            <Select.Option value={JobStage.VALIDATION}>
                                                {tJob('Stages.VALIDATION')}
                                            </Select.Option>
                                            <Select.Option value={JobStage.ACCEPTANCE}>
                                                {tJob('Stages.ACCEPTANCE')}
                                            </Select.Option>
                                        </Select>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={10}>
                        <Row className='cvat-job-item-details'>
                            <Col>
                                <Row>
                                    <Col>
                                        <ProjectOutlined />
                                        <Text>
                                            {tJob('$t(State): ')}
                                        </Text>
                                        <Text type='secondary' className='cvat-job-item-state'>
                                            {`${job.state.charAt(0).toUpperCase() + job.state.slice(1)}`}
                                        </Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Icon component={DurationIcon} />
                                        <Text>
                                            {tJob('$t(Duration): ')}
                                        </Text>
                                        <Text type='secondary'>{`${moment.duration(now.diff(created)).humanize()}`}</Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col offset={2}>
                                {
                                    job.type !== JobType.GROUND_TRUTH && (
                                        <Row>
                                            <Col>
                                                <Icon component={FramesIcon} />
                                                <Text>
                                                    {tJob('$t(frame-range): ')}
                                                </Text>
                                                <Text type='secondary' className='cvat-job-item-frame-range'>
                                                    {`${job.startFrame}-${job.stopFrame}`}
                                                </Text>
                                            </Col>
                                        </Row>
                                    )
                                }
                                <Row>
                                    <Col>
                                        <BorderOutlined />
                                        <Text>
                                            {tJob('$t(frame-count): ')}
                                        </Text>
                                        <Text type='secondary' className='cvat-job-item-frames'>
                                            {`${job.frameCount} (${frameCountPercentRepresentation}%)`}
                                        </Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Dropdown
                    trigger={['click']}
                    destroyPopupOnHide
                    overlay={<JobActionsMenu job={job} onJobUpdate={onJobUpdate} />}
                >
                    <MoreOutlined className='cvat-job-item-more-button' />
                </Dropdown>
            </Card>
        </Col>
    );
}

export default React.memo(JobItem);
