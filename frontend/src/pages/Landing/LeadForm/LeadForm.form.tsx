import ErrorMessage from 'components/ErrorMessage';
import { InjectedFormikProps } from 'formik';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router';

import Input from 'components/Input';
import { fontSize, getSpacing } from 'stylesheet';
import Style from './LeadForm.style';
import { FormValues } from './service';

interface LeadFormProps {
  errors: {
    email?: string;
  };
  touched: {
    email?: boolean;
  };
  createLead: (values: FormValues) => void;
  leadSubmissionStatus: string | null;
}

const LeadForm: React.FunctionComponent<
  InjectedFormikProps<LeadFormProps & RouteComponentProps, FormValues>
> = props => {
  const { errors, leadSubmissionStatus, touched } = props;

  const getSubmitButtonParameters = () => {
    switch (leadSubmissionStatus) {
      case 'running':
        return {
          className: 'submittingRequest',
          translationKey: 'Landing.introduction_block.leadForm.submit_button_running',
        };
      case 'success':
        return {
          className: 'requestSucceeded',
          translationKey: 'Landing.introduction_block.leadForm.submit_button_success',
        };
      case 'failed':
        return {
          className: 'normal',
          translationKey: 'Landing.introduction_block.leadForm.submit_button',
        };
      default:
        return {
          className: 'normal',
          translationKey: 'Landing.introduction_block.leadForm.submit_button',
        };
    }
  };

  const submitButtonParameters = getSubmitButtonParameters();

  return (
    <Style.Container>
      <Style.LeadForm>
        <Style.EmailFieldContainer>
          <Style.EmailField
            type="email"
            name="email"
            label={'Landing.introduction_block.leadForm.email_label'}
            component={Input}
            error={touched.email && errors.email}
            disabled={leadSubmissionStatus === 'running' || leadSubmissionStatus === 'success'}
          />
        </Style.EmailFieldContainer>
        <Style.SubmitButton type="submit" className={submitButtonParameters.className}>
          <Style.SubmitButtonContent>
            {leadSubmissionStatus === 'running' && <Style.Loader />}
            {leadSubmissionStatus === 'success' && (
              <Style.CheckmarkContainer>
                <Style.Checkmark />
              </Style.CheckmarkContainer>
            )}
            <FormattedMessage id={submitButtonParameters.translationKey} />
          </Style.SubmitButtonContent>
        </Style.SubmitButton>
      </Style.LeadForm>
      {leadSubmissionStatus === 'failed' && (
        <ErrorMessage
          margin={`${getSpacing(4)} ${getSpacing(4)} 0 ${getSpacing(4)}`}
          padding={`${getSpacing(3)}`}
          fontSize={fontSize.leadSubmitErrorMessage}
        >
          <FormattedMessage id={'Landing.introduction_block.leadForm.submit_failed'} />
        </ErrorMessage>
      )}
    </Style.Container>
  );
};

export default LeadForm;
