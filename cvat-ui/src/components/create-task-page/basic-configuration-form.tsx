// Copyright (C) 2020-2022 Intel Corporation
// Copyright (C) 2022 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import React, { RefObject } from 'react';
import Input from 'antd/lib/input';
import Text from 'antd/lib/typography/Text';
import Tooltip from 'antd/lib/tooltip';
import Form, { FormInstance } from 'antd/lib/form';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Translation } from 'react-i18next';

export interface BaseConfiguration {
    name: string;
}

interface Props {
    onChange(values: BaseConfiguration): void;
    many: boolean;
    exampleMultiTaskName?: string;
}

export default class BasicConfigurationForm extends React.PureComponent<Props> {
    private formRef: RefObject<FormInstance>;
    private inputRef: RefObject<Input>;
    private initialName: string;

    public constructor(props: Props) {
        super(props);
        this.formRef = React.createRef<FormInstance>();
        this.inputRef = React.createRef<Input>();

        const { many } = this.props;
        this.initialName = many ? '{{file_name}}' : '';
    }

    componentDidMount(): void {
        const { onChange } = this.props;
        onChange({
            name: this.initialName,
        });
    }

    private handleChangeName(e: React.ChangeEvent<HTMLInputElement>): void {
        const { onChange } = this.props;
        onChange({
            name: e.target.value,
        });
    }

    public submit(): Promise<void> {
        if (this.formRef.current) {
            return this.formRef.current.validateFields();
        }

        return Promise.reject(new Error('Form ref is empty'));
    }

    public resetFields(): void {
        if (this.formRef.current) {
            this.formRef.current.resetFields();
        }
    }

    public focus(): void {
        if (this.inputRef.current) {
            this.inputRef.current.focus();
        }
    }

    public render(): JSX.Element {
        const { many, exampleMultiTaskName } = this.props;

        return (
            <Form ref={this.formRef} layout='vertical'>
                <Form.Item
                    hasFeedback
                    name='name'
                    label={<span><Translation>{(t) => t('type.Name')}</Translation></span>}
                    rules={[
                        {
                            required: true,
                            message: 'Task name cannot be empty',
                        },
                    ]}
                    initialValue={this.initialName}
                >
                    <Input
                        ref={this.inputRef}
                        onChange={(e) => this.handleChangeName(e)}
                    />
                </Form.Item>
                {many ? (
                    <Text type='secondary'>
                        <Tooltip title={() => (
                            <Translation ns='task'>
                                {(tTask) => (
                                    <>
                                        {tTask('You can substitute in the template:')}
                                        <ul>
                                            <li>
                                                {tTask('some_text - any text')}
                                            </li>
                                            <li>
                                                {tTask('{{index}} - $t(index file in set)')}
                                            </li>
                                            <li>
                                                {tTask('{{file_name}} - $t(name of file)')}
                                            </li>
                                        </ul>
                                        {tTask('$t(Example): ')}
                                        <i>
                                            {exampleMultiTaskName || 'Task name 1 - video_1.mp4'}
                                        </i>
                                    </>
                                )}
                            </Translation>
                        )}
                        >
                            <Translation ns='task'>
                                {(tTask) => tTask('When forming the name, a template is used.')}
                            </Translation>
                            {' '}
                            <QuestionCircleOutlined />
                        </Tooltip>
                    </Text>
                ) : null}
            </Form>
        );
    }
}
