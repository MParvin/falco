import { Typography } from '@material-ui/core';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { METRICS } from 'redux/auditResults/constants';
import { AuditResultType, MetricType } from 'redux/auditResults/types';
import Style from './AuditResult.style';

export interface OwnProps {
  auditId: string;
  metrics: MetricType[];
}

interface Props extends OwnProps {
  auditResult?: AuditResultType;
};

const getDisplayMetricComponent = (auditResult: AuditResultType, metric: MetricType) => ({
  time: (
    <FormattedMessage
      id="components.AuditResult.time"
      values={{ time: auditResult[metric] / 1000 }}
    />
  ),
  number: (
    <FormattedMessage id="components.AuditResult.number" values={{ number: auditResult[metric] }} />
  ),
  percent: (
    <FormattedMessage
      id="components.AuditResult.percent"
      values={{ percent: auditResult[metric] * 100 }}
    />
  ),
});

const AuditResult: React.FunctionComponent<Props> = props => {
  const { auditResult, metrics } = props;

  if (!auditResult) {
    return null;
  }

  return (
    <Style.Container>
      <Style.TypographyContainer>
        {metrics && metrics.map((metric: MetricType) => (
          <Style.AuditResultValue key={`auditResultValue.${metric}`}>
            <Style.ColorReminder color={METRICS[metric].colorDark}/>
            <Typography color="inherit">
              <b>
                <FormattedMessage id={`Front.${metric}`} />
              </b>{' '}
              <FormattedMessage
                id="components.AuditResult.ofdate"
                values={{ date: auditResult.createdAt.format('DD/MM/YYYY') }}
              />
              {' = '}
              {getDisplayMetricComponent(auditResult, metric)[METRICS[metric].type]}
            </Typography>
          </Style.AuditResultValue>
        ))}
      </Style.TypographyContainer>
      <Style.LinkToWPT href={auditResult.WPTResultsUserUrl} target="_blank">
        <FormattedMessage id={`components.AuditResult.seeOnWPT`} />
      </Style.LinkToWPT>
    </Style.Container>
  );
};

export default AuditResult;
