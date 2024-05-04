// Copyright (C) 2022 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import Text from 'antd/lib/typography/Text';
import { Row, Col } from 'antd/lib/grid';
import { useTranslation } from 'react-i18next';

import Empty from 'antd/lib/empty';
import { WebhooksQuery } from 'reducers';

interface Props {
    query: WebhooksQuery;
}

function EmptyWebhooksListComponent(props: Props): JSX.Element {
    const { query } = props;
    const { t: tError } = useTranslation('error');

    return (
        <div className='cvat-empty-webhooks-list'>
            <Empty description={!query.filter && !query.search ? (
                <Row justify='center' align='middle'>
                    <Col>
                        <Text strong>
                            {tError('Not created yet', { type: 'webhooks' })}
                        </Text>
                    </Col>
                </Row>
            ) : (<Text>{tError('No results matched your search')}</Text>)}
            />
        </div>
    );
}

export default React.memo(EmptyWebhooksListComponent);
